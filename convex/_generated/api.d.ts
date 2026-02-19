/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type * as auth from "../auth.js";
import type * as authActions from "../authActions.js";
import type * as emergencyContacts from "../emergencyContacts.js";
import type * as healthCheck from "../healthCheck.js";
import type * as instructions from "../instructions.js";
import type * as locationCards from "../locationCards.js";
import type * as pets from "../pets.js";
import type * as properties from "../properties.js";
import type * as search from "../search.js";
import type * as sections from "../sections.js";
import type * as storage from "../storage.js";
import type * as users from "../users.js";
import type * as vaultItems from "../vaultItems.js";

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";

declare const fullApi: ApiFromModules<{
  auth: typeof auth;
  authActions: typeof authActions;
  emergencyContacts: typeof emergencyContacts;
  healthCheck: typeof healthCheck;
  instructions: typeof instructions;
  locationCards: typeof locationCards;
  pets: typeof pets;
  properties: typeof properties;
  search: typeof search;
  sections: typeof sections;
  storage: typeof storage;
  users: typeof users;
  vaultItems: typeof vaultItems;
}>;

/**
 * A utility for referencing Convex functions in your app's public API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;

/**
 * A utility for referencing Convex functions in your app's internal API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = internal.myModule.myFunction;
 * ```
 */
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;

export declare const components: {};
