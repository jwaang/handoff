import { internalMutation, internalQuery } from "./_generated/server";
import { v } from "convex/values";

const SESSION_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours — verified session validity

/**
 * Insert or replace a pending PIN record for a trip + normalized sitter phone.
 * Deletes any existing record (pending or verified) before inserting.
 */
export const _upsert = internalMutation({
  args: {
    tripId: v.id("trips"),
    sitterPhone: v.string(), // normalized 10-digit US number
    hashedPin: v.string(),
    salt: v.string(),
    expiresAt: v.number(),
  },
  returns: v.id("vaultPins"),
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("vaultPins")
      .withIndex("by_trip_phone", (q) =>
        q.eq("tripId", args.tripId).eq("sitterPhone", args.sitterPhone),
      )
      .first();
    if (existing) {
      await ctx.db.delete(existing._id);
    }
    return await ctx.db.insert("vaultPins", {
      tripId: args.tripId,
      sitterPhone: args.sitterPhone,
      hashedPin: args.hashedPin,
      salt: args.salt,
      expiresAt: args.expiresAt,
      attemptCount: 0,
    });
  },
});

/** Get a vaultPin record by trip + normalized sitter phone. */
export const _getByTripAndPhone = internalQuery({
  args: { tripId: v.id("trips"), sitterPhone: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("vaultPins")
      .withIndex("by_trip_phone", (q) =>
        q.eq("tripId", args.tripId).eq("sitterPhone", args.sitterPhone),
      )
      .first();
  },
});

/** Increment the attempt counter for a PIN record. */
export const _incrementAttempt = internalMutation({
  args: { pinId: v.id("vaultPins") },
  returns: v.null(),
  handler: async (ctx, args) => {
    const record = await ctx.db.get(args.pinId);
    if (record) {
      await ctx.db.patch(args.pinId, { attemptCount: record.attemptCount + 1 });
    }
    return null;
  },
});

/**
 * Mark a PIN record as verified.
 * Clears the PIN hash and salt (no longer needed), extends expiry to 24h session.
 */
export const _markVerified = internalMutation({
  args: { pinId: v.id("vaultPins") },
  returns: v.null(),
  handler: async (ctx, args) => {
    await ctx.db.patch(args.pinId, {
      verified: true,
      hashedPin: "",
      salt: "",
      expiresAt: Date.now() + SESSION_TTL_MS,
      attemptCount: 0,
    });
    return null;
  },
});

/** Delete a vaultPin record (e.g., after expiry cleanup). */
export const _delete = internalMutation({
  args: { pinId: v.id("vaultPins") },
  returns: v.null(),
  handler: async (ctx, args) => {
    await ctx.db.delete(args.pinId);
    return null;
  },
});
