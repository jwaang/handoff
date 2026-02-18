# Ralph Progress Log

This file tracks progress across iterations. Agents update this file
after each iteration and it's included in prompts for context.

## Codebase Patterns (Study These First)

- **Next.js 16 + ESLint 9 flat config**: Uses `eslint.config.mjs` (not `.eslintrc`). Import `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` as arrays to spread. Add `eslint-config-prettier` last to disable formatting rules.
- **pnpm scripts**: `typecheck` = `tsc --noEmit`, `lint` = `eslint`, `build` = `next build`. All three must pass for every story.
- **Tailwind CSS v4**: Uses `@tailwindcss/postcss` plugin, no `tailwind.config.js` — config is done via CSS `@theme` blocks.
- **Convex codegen without deployment**: Run `npx convex codegen --system-udfs --typecheck disable` to generate `convex/_generated/` without requiring a live Convex deployment. This enables `pnpm build` to pass in CI before a deployment exists.
- **Convex + Next.js SSG**: `ConvexReactClient` constructor throws if URL is empty string. The `ConvexClientProvider` must handle missing `NEXT_PUBLIC_CONVEX_URL` gracefully (skip provider, render children directly) so `next build` can prerender static pages.
- **Convex dev script pattern**: Use `"dev": "npx convex dev --run 'next dev --turbopack'"` to start Convex dev server alongside Next.js in a single command.
- **PWA manifest in Next.js 16**: Use `metadata.manifest` for the manifest link, `metadata.appleWebApp` for iOS PWA meta tags, and export a separate `viewport` const for `themeColor` (Next.js 16 splits viewport from metadata).

---

## 2026-02-17 - US-001
- Initialized Next.js 16 project with TypeScript strict mode and App Router
- Configured ESLint with Next.js core-web-vitals + typescript rules + prettier
- Configured Prettier with `.prettierrc` and `.prettierignore`
- Added `typecheck`, `format`, and `format:check` scripts to package.json
- Created README with setup instructions
- Files added: `package.json`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`, `next.config.ts`, `next-env.d.ts`, `.prettierrc`, `.prettierignore`, `.gitignore`, `pnpm-workspace.yaml`, `README.md`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`, `public/*`
- **Learnings:**
  - `create-next-app` now generates Next.js 16 by default (still satisfies "14+" requirement)
  - ESLint 9 flat config is the default — no more `.eslintrc.*` files
  - Tailwind CSS v4 is the default — no `tailwind.config.js`, uses CSS-based config via `@theme`
  - `create-next-app` won't init in a directory with existing files — must init elsewhere and copy
---

## 2026-02-17 - US-002
- Installed `convex` package (v1.31.7)
- Initialized `convex/` directory with `schema.ts` (empty schema) and `healthCheck.ts` query
- Generated `convex/_generated/` via `npx convex codegen --system-udfs --typecheck disable`
- Created `src/components/ConvexClientProvider.tsx` — client component wrapping `ConvexProvider`
- Wired `ConvexClientProvider` into `src/app/layout.tsx`
- Updated `package.json` dev script: `npx convex dev --run 'next dev --turbopack'`; added `dev:next` for standalone Next.js
- Created `.env.local` and `.env.example` with `NEXT_PUBLIC_CONVEX_URL`
- Updated `.gitignore` to track `.env.example` (`!.env.example`)
- Updated `eslint.config.mjs` to ignore `convex/_generated/**`
- Updated `.prettierignore` to ignore `convex/_generated`
- Files added: `convex/schema.ts`, `convex/healthCheck.ts`, `convex/_generated/*`, `convex/tsconfig.json`, `convex/README.md`, `src/components/ConvexClientProvider.tsx`, `.env.local`, `.env.example`
- Files modified: `package.json`, `src/app/layout.tsx`, `eslint.config.mjs`, `.prettierignore`, `.gitignore`
- **Learnings:**
  - `npx convex codegen` requires `CONVEX_DEPLOYMENT` env var — but `--system-udfs` flag bypasses this check, allowing offline codegen
  - Convex codegen generates `.js` + `.d.ts` files (not `.ts`) by default; this is expected and works with TS projects
  - `ConvexReactClient("")` throws "Provided address was not an absolute URL" — must guard against empty/missing URL for SSG builds
  - Convex's `--run` flag on `convex dev` is the recommended way to start both servers; it sets env vars automatically
---

## 2026-02-17 - US-019
- Configured PWA manifest at `public/manifest.json` with app name "Handoff", theme color `#C2704A`, background `#FAF6F1`, standalone display
- Generated app icons at `public/icons/icon-192x192.png` and `public/icons/icon-512x512.png` (branded with "H" on theme color background)
- Created service worker at `public/sw.js` with network-first caching strategy (precaches `/` and `/manifest.json`, caches all GET requests on fetch)
- Created `src/components/ServiceWorkerRegistrar.tsx` — client component that registers the service worker on mount
- Updated `src/app/layout.tsx` — added manifest link, apple-web-app meta tags, theme-color viewport, apple-touch-icon, and ServiceWorkerRegistrar
- Files added: `public/manifest.json`, `public/icons/icon-192x192.png`, `public/icons/icon-512x512.png`, `public/sw.js`, `src/components/ServiceWorkerRegistrar.tsx`
- Files modified: `src/app/layout.tsx`
- **Learnings:**
  - Next.js 16 requires `themeColor` to be in a separate `export const viewport: Viewport` — it cannot go in the `metadata` export
  - Service workers in `public/` are served at root path by Next.js, so `public/sw.js` → `/sw.js`
  - Pure Node.js PNG generation works via `zlib.deflateSync` on raw RGBA pixel data — no external image libraries needed for placeholder icons
  - macOS has `sips` for image conversion but it can't create PNGs from scratch; programmatic generation is more reliable
---

