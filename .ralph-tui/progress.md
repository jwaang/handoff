# Ralph Progress Log

This file tracks progress across iterations. Agents update this file
after each iteration and it's included in prompts for context.

## Codebase Patterns (Study These First)

- **Next.js 16 + ESLint 9 flat config**: Uses `eslint.config.mjs` (not `.eslintrc`). Import `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript` as arrays to spread. Add `eslint-config-prettier` last to disable formatting rules.
- **pnpm scripts**: `typecheck` = `tsc --noEmit`, `lint` = `eslint`, `build` = `next build`. All three must pass for every story.
- **Tailwind CSS v4**: Uses `@tailwindcss/postcss` plugin, no `tailwind.config.js` — config is done via CSS `@theme` blocks.

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

