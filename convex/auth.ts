import { internalMutation, internalQuery, mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Internal: create a new user record (password or OAuth)
export const _createUser = internalMutation({
  args: {
    email: v.string(),
    passwordHash: v.optional(v.string()),
    salt: v.optional(v.string()),
    googleId: v.optional(v.string()),
    appleId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    return ctx.db.insert("users", {
      email: args.email,
      passwordHash: args.passwordHash,
      salt: args.salt,
      googleId: args.googleId,
      appleId: args.appleId,
      createdAt: Date.now(),
    });
  },
});

// Internal: create a session for a user
export const _createSession = internalMutation({
  args: {
    userId: v.id("users"),
    token: v.string(),
    expiresAt: v.number(),
  },
  handler: async (ctx, args) => {
    return ctx.db.insert("sessions", args);
  },
});

// Internal: look up user by email
export const _getUserByEmail = internalQuery({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("users")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .unique();
  },
});

// Internal: look up user by Google ID
export const _getUserByGoogleId = internalQuery({
  args: { googleId: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("users")
      .withIndex("by_google_id", (q) => q.eq("googleId", args.googleId))
      .unique();
  },
});

// Internal: look up user by Apple ID
export const _getUserByAppleId = internalQuery({
  args: { appleId: v.string() },
  handler: async (ctx, args) => {
    return ctx.db
      .query("users")
      .withIndex("by_apple_id", (q) => q.eq("appleId", args.appleId))
      .unique();
  },
});

// Internal: link an OAuth provider ID to an existing user
export const _linkOAuthProvider = internalMutation({
  args: {
    userId: v.id("users"),
    googleId: v.optional(v.string()),
    appleId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const patch: Record<string, string> = {};
    if (args.googleId) patch.googleId = args.googleId;
    if (args.appleId) patch.appleId = args.appleId;
    await ctx.db.patch(args.userId, patch);
  },
});

// Public: validate a session token, returns user info or null
export const validateSession = query({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    if (!args.token) return null;
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .unique();
    if (!session || session.expiresAt < Date.now()) return null;
    const user = await ctx.db.get(session.userId);
    if (!user) return null;
    return { userId: user._id, email: user.email };
  },
});

// Public: sign out by deleting the session
export const signOut = mutation({
  args: { token: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .withIndex("by_token", (q) => q.eq("token", args.token))
      .unique();
    if (session) await ctx.db.delete(session._id);
  },
});
