import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { ConvexError } from "convex/values";

const timeSlotValidator = v.union(
  v.literal("morning"),
  v.literal("afternoon"),
  v.literal("evening"),
  v.literal("anytime"),
);

export const create = mutation({
  args: {
    sectionId: v.id("manualSections"),
    text: v.string(),
    sortOrder: v.number(),
    timeSlot: timeSlotValidator,
    isRecurring: v.boolean(),
    proofRequired: v.boolean(),
  },
  returns: v.id("instructions"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("instructions", {
      sectionId: args.sectionId,
      text: args.text,
      sortOrder: args.sortOrder,
      timeSlot: args.timeSlot,
      isRecurring: args.isRecurring,
      proofRequired: args.proofRequired,
    });
  },
});

export const listBySection = query({
  args: { sectionId: v.id("manualSections") },
  returns: v.array(
    v.object({
      _id: v.id("instructions"),
      _creationTime: v.number(),
      sectionId: v.id("manualSections"),
      text: v.string(),
      sortOrder: v.number(),
      timeSlot: timeSlotValidator,
      isRecurring: v.boolean(),
      proofRequired: v.boolean(),
    }),
  ),
  handler: async (ctx, args) => {
    return await ctx.db
      .query("instructions")
      .withIndex("by_section_sort", (q) => q.eq("sectionId", args.sectionId))
      .order("asc")
      .collect();
  },
});

export const update = mutation({
  args: {
    instructionId: v.id("instructions"),
    text: v.optional(v.string()),
    sortOrder: v.optional(v.number()),
    timeSlot: v.optional(timeSlotValidator),
    isRecurring: v.optional(v.boolean()),
    proofRequired: v.optional(v.boolean()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const { instructionId, ...fields } = args;
    const updates = Object.fromEntries(
      Object.entries(fields).filter(([, val]) => val !== undefined),
    );
    if (Object.keys(updates).length > 0) {
      await ctx.db.patch(instructionId, updates);
    }
    return null;
  },
});

export const remove = mutation({
  args: { instructionId: v.id("instructions") },
  returns: v.null(),
  handler: async (ctx, args) => {
    const instruction = await ctx.db.get(args.instructionId);
    if (!instruction) {
      throw new ConvexError({ code: "NOT_FOUND", message: "Instruction not found" });
    }
    await ctx.db.delete(args.instructionId);
    return null;
  },
});
