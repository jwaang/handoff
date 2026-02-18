"use node";

import { action } from "./_generated/server";
import { v } from "convex/values";
import { internal } from "./_generated/api";
import { randomBytes, pbkdf2Sync } from "node:crypto";

function generateSalt(): string {
  return randomBytes(32).toString("hex");
}

function generateToken(): string {
  return randomBytes(32).toString("hex");
}

function hashPassword(password: string, salt: string): string {
  return pbkdf2Sync(password, salt, 100000, 64, "sha512").toString("hex");
}

const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

// Sign up: create a new user account and return a session token
export const signUp = action({
  args: { email: v.string(), password: v.string() },
  handler: async (ctx, args): Promise<{ token: string; email: string }> => {
    const existing = await ctx.runQuery(internal.auth._getUserByEmail, {
      email: args.email,
    });
    if (existing) throw new Error("An account with this email already exists");

    const salt = generateSalt();
    const passwordHash = hashPassword(args.password, salt);

    const userId = await ctx.runMutation(internal.auth._createUser, {
      email: args.email,
      passwordHash,
      salt,
    });

    const token = generateToken();
    await ctx.runMutation(internal.auth._createSession, {
      userId,
      token,
      expiresAt: Date.now() + SESSION_TTL_MS,
    });

    return { token, email: args.email };
  },
});

// Sign in: validate credentials and return a session token
export const signIn = action({
  args: { email: v.string(), password: v.string() },
  handler: async (ctx, args): Promise<{ token: string; email: string }> => {
    const user = await ctx.runQuery(internal.auth._getUserByEmail, {
      email: args.email,
    });
    if (!user) throw new Error("Invalid email or password");

    const passwordHash = hashPassword(args.password, user.salt);
    if (passwordHash !== user.passwordHash)
      throw new Error("Invalid email or password");

    const token = generateToken();
    await ctx.runMutation(internal.auth._createSession, {
      userId: user._id,
      token,
      expiresAt: Date.now() + SESSION_TTL_MS,
    });

    return { token, email: user.email };
  },
});
