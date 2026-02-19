import { action, query } from "./_generated/server";
import { v } from "convex/values";

// Generate a short-lived URL for the client to upload a file directly to Convex storage.
export const generateUploadUrl = action({
  args: {},
  returns: v.string(),
  handler: async (ctx): Promise<string> => {
    return await ctx.storage.generateUploadUrl();
  },
});

// Resolve a storage ID to a public URL (null if not found).
export const getUrl = query({
  args: { storageId: v.id("_storage") },
  returns: v.union(v.string(), v.null()),
  handler: async (ctx, args) => {
    return await ctx.storage.getUrl(args.storageId);
  },
});
