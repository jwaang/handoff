/**
 * DEV ONLY — clears every row from every table and deletes all storage files.
 *
 * Run via: pnpm nuke-db
 */
import { internalMutation } from "./_generated/server";
import { v } from "convex/values";

const TABLES = [
  "users",
  "sessions",
  "properties",
  "manualSections",
  "instructions",
  "locationCards",
  "vaultItems",
  "pets",
  "emergencyContacts",
  "trips",
  "sitters",
  "overlayItems",
  "taskCompletions",
  "tripSessions",
  "activityLog",
  "vaultAccessLog",
  "conversions",
  "vaultPins",
] as const;

export const clearAllData = internalMutation({
  args: {},
  returns: v.null(),
  handler: async (ctx): Promise<null> => {
    // Delete all rows from every table
    for (const table of TABLES) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const rows = await (ctx.db.query(table) as any).collect();
      for (const row of rows) {
        await ctx.db.delete(row._id);
      }
      if (rows.length > 0) {
        console.log(`[nuke] cleared ${rows.length} rows from ${table}`);
      }
    }

    // Delete all files from Convex storage
    const storageFiles = await ctx.db.system.query("_storage").collect();
    for (const file of storageFiles) {
      await ctx.storage.delete(file._id);
    }
    if (storageFiles.length > 0) {
      console.log(`[nuke] deleted ${storageFiles.length} files from storage`);
    }

    console.log("[nuke] done");
    return null;
  },
});
