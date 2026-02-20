"use node";

/**
 * Vault encryption actions — runs in Node.js runtime for access to crypto APIs.
 *
 * KEY MANAGEMENT STRATEGY
 * ========================
 * One symmetric AES-256-GCM key per Convex deployment, stored as a base64-encoded
 * 32-byte value in the VAULT_ENCRYPTION_KEY environment variable (Convex dashboard →
 * Settings → Environment Variables).
 *
 * Generating a key:
 *   openssl rand -base64 32
 *
 * KEY ROTATION PROCEDURE
 * ----------------------
 * 1. Generate a new key:   openssl rand -base64 32
 * 2. Add VAULT_ENCRYPTION_KEY_PREVIOUS = <old key> to Convex env vars.
 * 3. Set VAULT_ENCRYPTION_KEY = <new key> in Convex env vars.
 * 4. Deploy a one-time migration action that:
 *    a. Queries all vaultItems via an internal query.
 *    b. Tries decrypting each item with the new key; on failure, decrypts
 *       with VAULT_ENCRYPTION_KEY_PREVIOUS.
 *    c. Re-encrypts with the new key and patches via _patchEncrypted.
 * 5. Once migration is verified, remove VAULT_ENCRYPTION_KEY_PREVIOUS.
 *
 * Note: encryptedValue stores AES-256-GCM ciphertext + auth tag + IV as a
 * base64 JSON string: { iv: string, ciphertext: string }
 * The 16-byte GCM auth tag is appended to the ciphertext before encoding.
 */

import { action } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import type { Id } from "./_generated/dataModel";
import { randomBytes, createCipheriv, createDecipheriv } from "node:crypto";

const ALGORITHM = "aes-256-gcm";
const TAG_LENGTH = 16; // GCM auth tag is always 128 bits

function getEncryptionKey(): Buffer {
  const keyBase64 = process.env.VAULT_ENCRYPTION_KEY;
  if (!keyBase64) {
    throw new Error("VAULT_ENCRYPTION_KEY environment variable is not set");
  }
  const keyBuffer = Buffer.from(keyBase64, "base64");
  if (keyBuffer.length !== 32) {
    throw new Error(
      "VAULT_ENCRYPTION_KEY must be a base64-encoded 32-byte (256-bit) key",
    );
  }
  return keyBuffer;
}

/**
 * Encrypt a plaintext string with AES-256-GCM.
 * Returns a base64 JSON string: { iv, ciphertext }
 * The GCM auth tag (16 bytes) is appended to the ciphertext before encoding.
 */
function encryptValue(plaintext: string): string {
  const key = getEncryptionKey();
  const iv = randomBytes(12); // 96-bit IV — recommended for GCM
  const cipher = createCipheriv(ALGORITHM, key, iv);
  const encrypted = Buffer.concat([
    cipher.update(Buffer.from(plaintext, "utf8")),
    cipher.final(),
  ]);
  const authTag = cipher.getAuthTag(); // 128-bit tag
  const ciphertextWithTag = Buffer.concat([encrypted, authTag]);
  return JSON.stringify({
    iv: iv.toString("base64"),
    ciphertext: ciphertextWithTag.toString("base64"),
  });
}

/**
 * Decrypt an AES-256-GCM value produced by encryptValue.
 * Throws if authentication fails (tampered data or wrong key).
 */
function decryptValue(encryptedJson: string): string {
  const key = getEncryptionKey();
  const parsed = JSON.parse(encryptedJson) as { iv: string; ciphertext: string };
  const iv = Buffer.from(parsed.iv, "base64");
  const ciphertextWithTag = Buffer.from(parsed.ciphertext, "base64");
  // Last TAG_LENGTH bytes are the GCM auth tag
  const authTag = ciphertextWithTag.subarray(ciphertextWithTag.length - TAG_LENGTH);
  const ciphertext = ciphertextWithTag.subarray(0, ciphertextWithTag.length - TAG_LENGTH);
  const decipher = createDecipheriv(ALGORITHM, key, iv);
  decipher.setAuthTag(authTag);
  return Buffer.concat([decipher.update(ciphertext), decipher.final()]).toString("utf8");
}

const vaultItemType = v.union(
  v.literal("door_code"),
  v.literal("alarm_code"),
  v.literal("wifi"),
  v.literal("gate_code"),
  v.literal("garage_code"),
  v.literal("safe_combination"),
  v.literal("custom"),
);

/**
 * Create a vault item — encrypts the plaintext value server-side before storing.
 * Never sends the plaintext to the database; only the ciphertext+IV is stored.
 */
export const createVaultItem = action({
  args: {
    propertyId: v.id("properties"),
    itemType: vaultItemType,
    label: v.string(),
    value: v.string(), // plaintext — encrypted before storage, never persisted
    instructions: v.optional(v.string()),
    locationCardId: v.optional(v.id("locationCards")),
    sortOrder: v.number(),
  },
  returns: v.id("vaultItems"),
  handler: async (ctx, args): Promise<Id<"vaultItems">> => {
    const encryptedValue = encryptValue(args.value);
    return await ctx.runMutation(internal.vaultItems._insert, {
      propertyId: args.propertyId,
      itemType: args.itemType,
      label: args.label,
      encryptedValue,
      instructions: args.instructions,
      locationCardId: args.locationCardId,
      sortOrder: args.sortOrder,
    });
  },
});

/**
 * Re-encrypt and update the value for an existing vault item.
 * Called when the owner edits a vault item's code or password.
 */
export const updateVaultItemValue = action({
  args: {
    vaultItemId: v.id("vaultItems"),
    value: v.string(), // plaintext — will be re-encrypted before storage
  },
  returns: v.null(),
  handler: async (ctx, args): Promise<null> => {
    const encryptedValue = encryptValue(args.value);
    await ctx.runMutation(internal.vaultItems._patchEncrypted, {
      vaultItemId: args.vaultItemId,
      encryptedValue,
    });
    return null;
  },
});

/**
 * Return a decrypted vault item value — only for authorized sitters.
 *
 * Access control (three-layer check):
 *  1. Trip must have status === 'active' for the vault item's property.
 *  2. Sitter phone must be registered for the trip with vaultAccess === true.
 *  3. TODO (US-050): SMS PIN verification must be completed for this session.
 *     Do not ship to production without implementing this check.
 *
 * Returns a discriminated union so callers can show typed error messages
 * without leaking information about what specifically failed.
 */
export const getDecryptedVaultItem = action({
  args: {
    vaultItemId: v.id("vaultItems"),
    tripId: v.id("trips"),
    sitterPhone: v.string(),
  },
  returns: v.union(
    v.object({ success: v.literal(true), value: v.string() }),
    v.object({
      success: v.literal(false),
      error: v.union(
        v.literal("ITEM_NOT_FOUND"),
        v.literal("TRIP_INACTIVE"),
        v.literal("NOT_REGISTERED"),
        v.literal("VAULT_ACCESS_DENIED"),
      ),
    }),
  ),
  handler: async (ctx, args): Promise<
    | { success: true; value: string }
    | { success: false; error: "ITEM_NOT_FOUND" | "TRIP_INACTIVE" | "NOT_REGISTERED" | "VAULT_ACCESS_DENIED" }
  > => {
    // 1. Load the vault item (internal — includes encryptedValue)
    const item = await ctx.runQuery(internal.vaultItems._getById, {
      vaultItemId: args.vaultItemId,
    });
    if (!item) {
      return { success: false as const, error: "ITEM_NOT_FOUND" as const };
    }

    // 2. Verify the trip is active and belongs to the same property
    const trip = await ctx.runQuery(internal.trips._getById, {
      tripId: args.tripId,
    });
    if (
      !trip ||
      trip.propertyId !== item.propertyId ||
      trip.status !== "active"
    ) {
      return { success: false as const, error: "TRIP_INACTIVE" as const };
    }

    // 3. Verify the sitter is registered for this trip
    const sitter = await ctx.runQuery(internal.sitters._getByTripAndPhone, {
      tripId: args.tripId,
      phone: args.sitterPhone,
    });
    if (!sitter) {
      return { success: false as const, error: "NOT_REGISTERED" as const };
    }
    if (!sitter.vaultAccess) {
      return { success: false as const, error: "VAULT_ACCESS_DENIED" as const };
    }

    // TODO (US-050): Verify SMS PIN — check VaultPins table for a valid,
    // non-expired, successful verification for this sitterPhone + tripId.
    // Until US-050 is implemented, this check is intentionally omitted.
    // Do not expose this action to unverified clients in production.

    // 4. Decrypt and return the value
    try {
      const value = decryptValue(item.encryptedValue);
      return { success: true as const, value };
    } catch {
      // Decryption failure — corrupt data or key mismatch
      throw new Error(
        "Failed to decrypt vault item. Contact support if this persists.",
      );
    }
  },
});
