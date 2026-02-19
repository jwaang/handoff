import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

export const create = mutation({
  args: {
    propertyId: v.id("properties"),
    title: v.string(),
    icon: v.string(),
    sortOrder: v.number(),
  },
  returns: v.id("manualSections"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("manualSections", {
      propertyId: args.propertyId,
      title: args.title,
      icon: args.icon,
      sortOrder: args.sortOrder,
    });
  },
});

export const listByProperty = query({
  args: { propertyId: v.id("properties") },
  returns: v.array(
    v.object({
      _id: v.id("manualSections"),
      _creationTime: v.number(),
      propertyId: v.id("properties"),
      title: v.string(),
      icon: v.string(),
      sortOrder: v.number(),
    }),
  ),
  handler: async (ctx, args) => {
    return await ctx.db
      .query("manualSections")
      .withIndex("by_property_sort", (q) => q.eq("propertyId", args.propertyId))
      .order("asc")
      .collect();
  },
});

export const update = mutation({
  args: {
    sectionId: v.id("manualSections"),
    title: v.optional(v.string()),
    icon: v.optional(v.string()),
    sortOrder: v.optional(v.number()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const { sectionId, ...fields } = args;
    const updates = Object.fromEntries(
      Object.entries(fields).filter(([, val]) => val !== undefined),
    );
    if (Object.keys(updates).length > 0) {
      await ctx.db.patch(sectionId, updates);
    }
    return null;
  },
});

export const remove = mutation({
  args: { sectionId: v.id("manualSections") },
  returns: v.null(),
  handler: async (ctx, args) => {
    const section = await ctx.db.get(args.sectionId);
    if (!section) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Section not found" });
    }
    await ctx.db.delete(args.sectionId);
    return null;
  },
});
