import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

const propertyObject = v.object({
  _id: v.id("properties"),
  _creationTime: v.number(),
  name: v.string(),
  address: v.optional(v.string()),
  photo: v.optional(v.id("_storage")),
  ownerId: v.id("users"),
});

export const create = mutation({
  args: {
    name: v.string(),
    address: v.optional(v.string()),
    photo: v.optional(v.id("_storage")),
    ownerId: v.id("users"),
  },
  returns: v.id("properties"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("properties", {
      name: args.name,
      address: args.address,
      photo: args.photo,
      ownerId: args.ownerId,
    });
  },
});

export const get = query({
  args: { propertyId: v.id("properties") },
  returns: v.union(propertyObject, v.null()),
  handler: async (ctx, args) => {
    return await ctx.db.get(args.propertyId);
  },
});

export const listByOwner = query({
  args: { ownerId: v.id("users") },
  returns: v.array(propertyObject),
  handler: async (ctx, args) => {
    return await ctx.db
      .query("properties")
      .withIndex("by_owner", (q) => q.eq("ownerId", args.ownerId))
      .collect();
  },
});

export const update = mutation({
  args: {
    propertyId: v.id("properties"),
    name: v.optional(v.string()),
    address: v.optional(v.string()),
    photo: v.optional(v.id("_storage")),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const { propertyId, ...fields } = args;
    const updates = Object.fromEntries(
      Object.entries(fields).filter(([, val]) => val !== undefined),
    );
    if (Object.keys(updates).length > 0) {
      await ctx.db.patch(propertyId, updates);
    }
    return null;
  },
});

// Upsert: create or update the first property owned by this user.
// Used by the wizard's "Save & finish later" and "Next" flows.
export const createOrUpdate = mutation({
  args: {
    ownerId: v.id("users"),
    name: v.string(),
    address: v.optional(v.string()),
    photo: v.optional(v.id("_storage")),
  },
  returns: v.id("properties"),
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("properties")
      .withIndex("by_owner", (q) => q.eq("ownerId", args.ownerId))
      .first();

    if (existing) {
      const updates = Object.fromEntries(
        Object.entries({
          name: args.name,
          address: args.address,
          photo: args.photo,
        }).filter(([, val]) => val !== undefined),
      );
      if (Object.keys(updates).length > 0) {
        await ctx.db.patch(existing._id, updates);
      }
      return existing._id;
    }

    return await ctx.db.insert("properties", {
      name: args.name,
      address: args.address,
      photo: args.photo,
      ownerId: args.ownerId,
    });
  },
});

export const remove = mutation({
  args: { propertyId: v.id("properties") },
  returns: v.null(),
  handler: async (ctx, args) => {
    const property = await ctx.db.get(args.propertyId);
    if (!property) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Property not found" });
    }
    await ctx.db.delete(args.propertyId);
    return null;
  },
});
