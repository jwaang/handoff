import { internalMutation, internalQuery, mutation, query } from "./_generated/server";
import { v, ConvexError } from "convex/values";
import { internal } from "./_generated/api";
import type { Id, DataModel } from "./_generated/dataModel";
import type { DatabaseReader } from "./_generated/server";

const taskTypeValidator = v.union(
  v.literal("recurring"),
  v.literal("overlay"),
);

/**
 * Resolve a human-readable task title from a taskRef + taskType pair.
 * Returns null if the referenced document no longer exists.
 */
async function resolveTaskTitle(
  db: DatabaseReader,
  taskRef: string,
  taskType: DataModel["taskCompletions"]["document"]["taskType"],
): Promise<string | null> {
  if (taskType === "recurring") {
    const instruction = await db.get(taskRef as Id<"instructions">);
    return instruction?.text ?? null;
  }
  const overlayItem = await db.get(taskRef as Id<"overlayItems">);
  return overlayItem?.text ?? null;
}

const taskCompletionObject = v.object({
  _id: v.id("taskCompletions"),
  _creationTime: v.number(),
  tripId: v.id("trips"),
  taskRef: v.string(),
  taskType: taskTypeValidator,
  sitterName: v.string(),
  completedAt: v.number(),
  date: v.string(),
  proofPhotoUrl: v.optional(v.string()),
});

export const create = mutation({
  args: {
    tripId: v.id("trips"),
    taskRef: v.string(),
    taskType: taskTypeValidator,
    sitterName: v.string(),
    completedAt: v.number(),
    date: v.string(), // YYYY-MM-DD
    proofPhotoUrl: v.optional(v.string()),
  },
  returns: v.id("taskCompletions"),
  handler: async (ctx, args) => {
    return await ctx.db.insert("taskCompletions", args);
  },
});

export const listByTrip = query({
  args: { tripId: v.id("trips") },
  returns: v.array(taskCompletionObject),
  handler: async (ctx, args) => {
    return await ctx.db
      .query("taskCompletions")
      .withIndex("by_trip_taskref", (q) => q.eq("tripId", args.tripId))
      .collect();
  },
});

export const getByTripAndTaskRef = query({
  args: { tripId: v.id("trips"), taskRef: v.string() },
  returns: v.union(taskCompletionObject, v.null()),
  handler: async (ctx, args) => {
    return await ctx.db
      .query("taskCompletions")
      .withIndex("by_trip_taskref", (q) =>
        q.eq("tripId", args.tripId).eq("taskRef", args.taskRef),
      )
      .first();
  },
});

export const update = mutation({
  args: {
    taskCompletionId: v.id("taskCompletions"),
    sitterName: v.optional(v.string()),
    completedAt: v.optional(v.number()),
    proofPhotoUrl: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const { taskCompletionId, ...fields } = args;
    const updates = Object.fromEntries(
      Object.entries(fields).filter(([, val]) => val !== undefined),
    );
    if (Object.keys(updates).length > 0) {
      await ctx.db.patch(taskCompletionId, updates);
    }
    return null;
  },
});

export const remove = mutation({
  args: { taskCompletionId: v.id("taskCompletions") },
  returns: v.null(),
  handler: async (ctx, args) => {
    const completion = await ctx.db.get(args.taskCompletionId);
    if (!completion) {
      throw new ConvexError({
        code: "NOT_FOUND",
        message: "Task completion not found",
      });
    }
    await ctx.db.delete(args.taskCompletionId);
    return null;
  },
});

/**
 * Convenience mutation for sitter task check-off.
 * Computes completedAt and date server-side so callers don't need to pass them.
 * No auth check — sitters are anonymous and access via trip link only.
 */
export const completeTask = mutation({
  args: {
    tripId: v.id("trips"),
    taskRef: v.string(),
    taskType: taskTypeValidator,
    sitterName: v.string(), // empty string for anonymous sitters
  },
  returns: v.id("taskCompletions"),
  handler: async (ctx, args) => {
    const completedAt = Date.now();
    // YYYY-MM-DD in UTC — close enough for daily task grouping
    const date = new Date(completedAt).toISOString().split("T")[0];
    const completionId = await ctx.db.insert("taskCompletions", {
      ...args,
      completedAt,
      date,
    });
    // Log task_completed activity event
    const trip = await ctx.db.get(args.tripId);
    if (trip) {
      await ctx.db.insert("activityLog", {
        tripId: args.tripId,
        propertyId: trip.propertyId,
        eventType: "task_completed",
        sitterName: args.sitterName || undefined,
        createdAt: completedAt,
      });

      // Resolve task title and schedule push notification
      const taskTitle =
        (await resolveTaskTitle(ctx.db, args.taskRef, args.taskType)) ??
        "a task";
      await ctx.scheduler.runAfter(0, internal.notifications.sendTaskNotification, {
        tripId: args.tripId,
        taskTitle,
        sitterName: args.sitterName,
        completedAt,
      });
    }
    return completionId;
  },
});

/**
 * Complete a task and attach a proof photo in one step.
 * Resolves the storageId to a public URL before storing.
 * Also logs a proof_uploaded event to the activity feed.
 */
export const completeTaskWithProof = mutation({
  args: {
    tripId: v.id("trips"),
    taskRef: v.string(),
    taskType: taskTypeValidator,
    sitterName: v.string(),
    storageId: v.id("_storage"),
  },
  returns: v.id("taskCompletions"),
  handler: async (ctx, args) => {
    const proofPhotoUrl = await ctx.storage.getUrl(args.storageId);
    if (!proofPhotoUrl) {
      throw new ConvexError({ code: "STORAGE_ERROR", message: "Failed to resolve proof photo URL" });
    }
    const completedAt = Date.now();
    const date = new Date(completedAt).toISOString().split("T")[0];
    const completionId = await ctx.db.insert("taskCompletions", {
      tripId: args.tripId,
      taskRef: args.taskRef,
      taskType: args.taskType,
      sitterName: args.sitterName,
      completedAt,
      date,
      proofPhotoUrl,
    });
    // Log proof_uploaded activity event (with proof URL for feed thumbnail)
    const trip = await ctx.db.get(args.tripId);
    if (trip) {
      await ctx.db.insert("activityLog", {
        tripId: args.tripId,
        propertyId: trip.propertyId,
        eventType: "proof_uploaded",
        sitterName: args.sitterName || undefined,
        proofPhotoUrl,
        createdAt: completedAt,
      });

      // Resolve task title and schedule push notification (with proof)
      const taskTitle =
        (await resolveTaskTitle(ctx.db, args.taskRef, args.taskType)) ??
        "a task";
      await ctx.scheduler.runAfter(0, internal.notifications.sendTaskNotification, {
        tripId: args.tripId,
        taskTitle,
        sitterName: args.sitterName,
        proofPhotoUrl,
        completedAt,
      });
    }
    return completionId;
  },
});

/**
 * Attach a proof photo to an already-completed task.
 * Used when the sitter uploads proof after checking off the task.
 * Internal mutation — called by the uploadProofPhoto action.
 */
export const _attachProof = internalMutation({
  args: {
    taskCompletionId: v.id("taskCompletions"),
    storageId: v.id("_storage"),
    tripId: v.id("trips"),
    sitterName: v.optional(v.string()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const proofPhotoUrl = await ctx.storage.getUrl(args.storageId);
    if (!proofPhotoUrl) {
      throw new ConvexError({ code: "STORAGE_ERROR", message: "Failed to resolve proof photo URL" });
    }
    await ctx.db.patch(args.taskCompletionId, { proofPhotoUrl });
    // Log proof_uploaded activity event
    const trip = await ctx.db.get(args.tripId);
    if (trip) {
      await ctx.db.insert("activityLog", {
        tripId: args.tripId,
        propertyId: trip.propertyId,
        eventType: "proof_uploaded",
        sitterName: args.sitterName,
        createdAt: Date.now(),
      });

      // Resolve task title from completion record for notification message
      const completion = await ctx.db.get(args.taskCompletionId);
      let taskTitle = "a task";
      if (completion) {
        const title = await resolveTaskTitle(ctx.db, completion.taskRef, completion.taskType);
        if (title) taskTitle = title;
      }

      // Schedule task-completion notification with proof
      await ctx.scheduler.runAfter(0, internal.notifications.sendTaskNotification, {
        tripId: args.tripId,
        taskTitle,
        sitterName: args.sitterName ?? "",
        proofPhotoUrl,
        completedAt: Date.now(),
      });
    }
    return null;
  },
});

/**
 * Count task completions for a trip within the given time window [windowStart, windowEnd).
 * Used by the digest notification scheduler.
 */
export const _countInWindow = internalQuery({
  args: {
    tripId: v.id("trips"),
    windowStart: v.number(),
    windowEnd: v.number(),
  },
  returns: v.number(),
  handler: async (ctx, args) => {
    const completions = await ctx.db
      .query("taskCompletions")
      .withIndex("by_trip_taskref", (q) => q.eq("tripId", args.tripId))
      .collect();
    return completions.filter(
      (c) => c.completedAt >= args.windowStart && c.completedAt < args.windowEnd,
    ).length;
  },
});
