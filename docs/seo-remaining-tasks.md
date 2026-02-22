# SEO Audit — Task Tracker

Based on the audit completed 2026-02-22.

---

## Phase 1: Critical Fixes — DONE

All implemented in the initial session.

- [x] Convert landing page to Server Component (metadata export + SSR)
- [x] Create `robots.ts` with disallow rules for auth'd routes
- [x] Create `sitemap.ts` for public pages
- [x] Rewrite root title/description with target keywords
- [x] Add `metadataBase` to root layout
- [x] Add Open Graph + Twitter Card metadata
- [x] Create OG image preview component for screenshotting
- [x] Add JSON-LD structured data (WebSite, SoftwareApplication, FAQPage)
- [x] Replace `<img>` with `next/image` on landing page
- [x] Add footer nav with internal links (Privacy, Terms, Login, Sign Up)
- [x] Fix `manifest.json` description

---

## Phase 2: High-Impact Improvements — DONE

### Manual steps

- [x] **Create `public/og-image.png`** — Screenshotted from `/design-system` preview
- [x] **Set up Google Search Console** — Verified and sitemap submitted
- [ ] **Set up Bing Webmaster Tools** — Skipped for now

### Code changes

- [x] **Create `/privacy` page** — Server Component with metadata, canonical URL, full privacy policy
- [x] **Create `/terms` page** — Server Component with metadata, canonical URL, full terms of service
- [x] **Add canonical URLs to key pages** — `metadataBase` handles automatically; `/login`, `/signup` already have metadata
- [x] **Add meta descriptions to pages missing them** — Added metadata to `/forgot-password`, `/dashboard`, `/dashboard/trips`, `/dashboard/property`, `/dashboard/settings` (split into server + client components)
- [x] **Add `next/image` to `PetProfileCard.tsx`** — Replaced `<img>` with `<Image>` using `fill` + `sizes`
- [x] **Alt text audit** — All images have descriptive alt text (21 `<img>` tags + 1 `<Image>` component audited)
- [x] **Security headers in `next.config.ts`** — Added `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, `Referrer-Policy`, `X-DNS-Prefetch-Control`
- [x] **Updated `sitemap.ts`** — Added `/privacy` and `/terms`

---

## Phase 3: Content Strategy (Highest Organic Growth Lever) — DONE

Per the deep research report, SEO-targeted content pages are the primary organic acquisition channel. These target high-intent, low-competition queries that pet/house sitter audiences actively search for.

### Infrastructure

- [x] **Create `/guides` route layout** — Shared layout for all guide content with nav, CTA sidebar, proper heading hierarchy
- [x] **Create `/guides` index page** — Hub page listing all guides, linked from footer and landing page
- [x] **Add guide pages to `sitemap.ts`** as they're published
- [x] **Add `BreadcrumbList` JSON-LD** to guide pages (Home > Guides > Article)
- [x] **Add `Article` JSON-LD** to each guide page (author, datePublished, dateModified)
- [x] **Add "Guides" link to landing page footer**
- [x] **Create shared guide components** — Section, Checklist, Callout, GuideNav, RelatedGuides, CtaBanner

### Content pages created

Each article targets one primary keyword in title, H1, URL, and first 100 words; is 1500–2500 words with practical, actionable content; includes a CTA; is a Server Component with proper metadata export + OG tags; and uses internal links to other guides and to the signup page.

| Route | Title | Primary Keyword |
|-------|-------|-----------------|
| `/guides/pet-sitter-checklist` | The Complete Pet Sitter Checklist (2026) | pet sitter checklist |
| `/guides/house-sitter-instructions-template` | House Sitter Instructions Template: What to Include | house sitter instructions template |
| `/guides/what-to-leave-for-pet-sitter` | What to Leave for Your Pet Sitter: The Complete List | what to leave for pet sitter |
| `/guides/house-sitter-welcome-pack` | How to Create a House Sitter Welcome Pack | house sitter welcome pack |
| `/guides/pet-medication-instructions` | How to Write Pet Medication Instructions for Your Sitter | pet medication instructions for sitter |

### Additional content ideas (lower priority)

- [ ] `/guides/pet-sitter-vs-boarding` — comparison content
- [ ] `/guides/how-to-prepare-house-for-sitter` — broader intent
- [ ] `/guides/emergency-info-for-pet-sitter` — ties to emergency contacts feature
- [ ] `/guides/pet-feeding-schedule-template` — specific sub-topic

---

## Phase 4: Long-Term / Future

- [ ] **Dynamic OG images for shared trips** — When a sitter shares their trip link, generate a custom OG image (e.g., "Sarah's care manual for Luna"). Use Next.js `opengraph-image.tsx` with `ImageResponse`.
- [ ] **Add `Organization` JSON-LD** — Once you have a proper About page or company info
- [ ] **Monitor Core Web Vitals** — After launch stabilizes, check PageSpeed Insights and Search Console CWV report. Framer Motion bundle size is a watch item for LCP.
- [ ] **Implement `hreflang`** — Only needed if/when multi-language support ships (Phase 2 of product)
- [ ] **AI search optimization (AEO/GEO)** — Optimize content for AI Overviews, ChatGPT, Perplexity. Ensure guide content is structured so LLMs can cite Vadem in responses to "best pet sitter app" or "how to leave instructions for house sitter" queries. See `ai-seo` skill.
- [ ] **Programmatic SEO** — If guide content performs well, consider generating location-specific pages (e.g., "Pet Sitter Checklist for [City]") at scale. See `programmatic-seo` skill.
- [ ] **Schema markup for guide pages** — `HowTo` schema for checklist-style guides to get rich results in SERPs
