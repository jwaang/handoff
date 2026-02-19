import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    passwordHash: v.optional(v.string()),
    salt: v.optional(v.string()),
    googleId: v.optional(v.string()),
    appleId: v.optional(v.string()),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_google_id", ["googleId"])
    .index("by_apple_id", ["appleId"]),

  sessions: defineTable({
    userId: v.id("users"),
    token: v.string(),
    expiresAt: v.number(),
  }).index("by_token", ["token"]),

  properties: defineTable({
    name: v.string(),
    address: v.string(),
    photo: v.optional(v.id("_storage")),
    ownerId: v.id("users"),
  }).index("by_owner", ["ownerId"]),

  manualSections: defineTable({
    propertyId: v.id("properties"),
    title: v.string(),
    icon: v.string(),
    sortOrder: v.number(),
  }).index("by_property_sort", ["propertyId", "sortOrder"]),

  instructions: defineTable({
    sectionId: v.id("manualSections"),
    text: v.string(),
    sortOrder: v.number(),
    timeSlot: v.union(
      v.literal("morning"),
      v.literal("afternoon"),
      v.literal("evening"),
      v.literal("anytime"),
    ),
    isRecurring: v.boolean(),
    proofRequired: v.boolean(),
  }).index("by_section_sort", ["sectionId", "sortOrder"]),

  locationCards: defineTable({
    parentId: v.string(),
    parentType: v.union(
      v.literal("instruction"),
      v.literal("pet"),
      v.literal("vault"),
    ),
    photoUrl: v.optional(v.string()),
    videoUrl: v.optional(v.string()),
    caption: v.optional(v.string()),
    roomTag: v.optional(v.string()),
  }).index("by_parent", ["parentId", "parentType"]),
});
