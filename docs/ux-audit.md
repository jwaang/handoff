# Vadem UX Audit

**Date:** 2026-02-21
**Method:** Deep source-code inspection of all creator flows — wizard, property editors, trip setup, and trips management page. 16 files reviewed across `src/app/wizard/[step]/`, `src/app/dashboard/`, and `src/app/trip/[tripId]/`.

---

## TL;DR — Biggest Issues (ranked by impact)

Vadem has a strong, differentiated core concept (permanent manual + reusable trip overlay) and genuinely warm visual design. The wizard is functional and the vault encryption story is excellent. However, several structural issues undermine the experience before users reach the "aha moment":

1. **Three incompatible visual contexts** — the wizard, the dashboard editors, and the trip setup flow each use a distinct layout system with no visual continuity between them.
2. **The wizard's required-field burden is too high**, especially for pets (6 required fields including vet phone), making onboarding feel like a chore rather than a quick win.
3. **The trip activation flow has a two-action problem** — users must both "Generate link" and "Activate trip" as separate manual steps, creating friction at the most important moment.
4. **No "My Property" hub** — property editors are siloed islands, each with a "Back to dashboard" link that skips any meaningful property-level context.
5. **Location cards, Vadem's signature differentiator, are buried** behind tiny text links inside section instruction rows with no surface-level introduction.

Fix the required fields and the trip share flow first — those are high-severity blockers on the critical path. The layout unification and property hub are medium-term architectural work worth planning now.

---

## New User Flow Analysis

### First Impression (Dashboard, pre-wizard)

The dashboard empty state shows a property card with a "Let's set up your home" CTA button. **The CTA button does not navigate to the wizard** — a new user clicking it gets no response. This is a critical activation blocker.

Two notification banners appear immediately above the property card on first load: an email verification banner (if email is not verified) and a push notification request. A brand-new user who just created an account will see both banners stacked before they see any content. This competes with the onboarding CTA for attention.

The quick-nav chips (Pets, Sections, Contacts, Vault) link directly to individual editor pages. A user who has not yet completed the wizard will land on an empty editor with no indication of what to do or that a wizard exists. There is no explicit "complete your setup" progress indicator on the dashboard.

### Property Setup Wizard (Steps 1–6)

**Step 1 — Home:**
Clean and focused. One subtle issue: the wizard wordmark ("Vadem") in the header is a `<Link href="/dashboard">`. Clicking it exits the wizard silently with no confirmation dialog, discarding unsaved work on the current step. Also, "Save & finish later" requires a property name before saving — if the user hasn't typed anything yet, the button appears to do nothing.

**Step 2 — Pets:**
Highest friction step in the wizard. Required fields: name, species, age, feeding instructions, vet name, and vet phone — **six required fields**. The post-wizard PetsEditor requires only name and species. This inconsistency means users who skip the wizard have a dramatically easier experience. Vet phone is particularly aggressive — many users won't have it memorized. No way to edit a saved pet within the wizard step.

**Step 3 — Access (Vault):**
Well-designed. Type selector grid is intuitive, labels auto-fill by type, and button labels adapt correctly ("Skip — add later" vs. "Done with access info"). No way to edit existing vault items within this step.

**Step 4 — Contacts:**
`seedDefaults` fires automatically, populating the contacts list with ASPCA Poison Control and other defaults the user never asked for. No explanation is shown. All contacts render in always-expanded edit mode — on mobile with 3+ seeded contacts, this is a long scrollable form with no visual hierarchy. The "Next" button has no gate and advances even if all user-added contacts have empty fields.

**Step 5 — Sections:**
Most cognitively demanding step. Toggling a section on and expanding it to add instructions are two separate affordances — a user who toggles a section on but doesn't notice the panel below moves to the next step with an empty section. Toggling a section OFF while it has instructions silently deletes them with no warning.

Location cards — Vadem's signature feature — are accessible only via tiny "+ Photo card" / "+ Video card" text links inside each instruction row. These are the smallest interactive elements on the busiest step.

"Next" and "Skip" buttons are functionally identical; both navigate to Step 6. The "Skip" label is misleading when sections have already been added.

**Step 6 — Review & Publish:**
The cross-step completion checklist is a strong confidence-builder. The live sitter preview panel works well. After publishing, there is no celebratory confirmation — the user lands back on the standard dashboard with no acknowledgment that setup is complete.

### Post-Wizard: Editor Pages

All four property editors (Sections, Pets, Vault, Contacts) navigate back to `/dashboard` via a "Back to Dashboard" link — there is no property-level hub. Users jumping between editors must always go through the top-level dashboard, adding unnecessary navigation overhead.

**PetsEditor:** Only name + species required — much lower bar than the wizard. The inconsistency will confuse users who bounced off the wizard due to required fields.

**ContactsEditor:** Always-in-edit-mode card design — contacts are never shown in a readable summary view. With multiple seeded contacts, this is a perpetually dense form.

**VaultEditor:** Clean but vault edit requires re-entering the value blindly — the existing value is masked and cannot be revealed to confirm what you're overwriting.

**SectionsEditor:** More capable than the wizard version (rename, reorder, icon picker), but sections default to collapsed (opposite of wizard default — minor inconsistency).

### Trip Creation Flow

**Trips Page:** Simple date form, helpful "How trips work" explainer. Upon submission, redirects to the trip setup flow at `/trip/[tripId]/overlay`.

**Trip Setup layout:** Uses a completely different layout from both the wizard and the dashboard — a flat text header with pill-chip step indicators. The transition feels like leaving the app.

**Overlay Items step:** "Skip for now" label persists even after items have been added. The button should become "Next" once any item exists.

**Sitters step:** The "Add a sitter" form persists after saving a sitter, looking identical to the pre-save state. Users can't tell if their sitter was actually saved. "Skip for now" persists even after sitters are added.

**Share step:** The share link is not auto-generated. Users must:
1. Click "Generate share link"
2. Copy or share the link
3. Separately click "Activate trip" to change trip status

Three sequential manual actions where two (generate + activate) could be automatic. A sitter who receives the link before the owner clicks "Activate trip" may access a trip in the wrong status.

---

## Issue Inventory

| # | Issue | User Feeling | Severity | Recommendation |
|---|-------|-------------|----------|----------------|
| 1 | **Dashboard CTA does not navigate to wizard** — "Let's set up your home" button has no navigation action. | "The button does nothing. Is the app broken?" | **Critical** | Wire dashboard empty state CTA to `/wizard/1`. |
| 2 | **Wizard wordmark is a silent exit** — Clicking "Vadem" navigates to `/dashboard` without confirmation, discarding unsaved work. | "I accidentally left and lost my progress." | **High** | Remove the link from the wordmark within the wizard, or add an "Are you sure?" confirmation dialog. |
| 3 | **Pets wizard requires 6 fields; editor requires 2** — Inconsistent validation between wizard Step 2 and PetsEditor. | "The wizard felt way harder than it needed to be." | **High** | Require only name + species in the wizard. Make vet phone a soft nudge: "Your sitter will need this in an emergency." |
| 4 | **Share link is not auto-generated** — Users must manually click "Generate share link" at the end of trip setup. | "Why do I have to click a button to generate something?" | **High** | Auto-generate the share link when the trip is created, or when the user reaches the Share step. |
| 5 | **"Activate trip" is a separate action from sharing** — Users must generate + share + activate as three separate steps. | "I thought I was done after sending the link. I didn't know I had to also 'activate' it." | **High** | Merge into a single "Activate and copy link" action. |
| 6 | **Three layout contexts with no visual continuity** — Wizard, dashboard, and trip setup each use a distinct layout/header system. | "This feels like three different apps." | **High** | Standardize trip setup to use `CreatorLayout` or a consistent variant. |
| 7 | **"Skip for now" shown when items already exist** — In overlay and sitters steps, skip label persists after items are saved. | "I added a sitter — why is it still asking me to skip? Did my data not save?" | **High** | Change to "Continue" or "Next" as soon as any items exist. |
| 8 | **No "My Property" hub** — All editors navigate back to the top-level dashboard instead of a property-level grouping. | "I have to jump back to the dashboard every time I want to switch editors." | **Medium** | Create `/dashboard/property` hub page. All editor back-links go to hub, not dashboard. |
| 9 | **Step 5 toggle/expand are separate affordances** — Toggling a section on doesn't auto-expand it. Toggling off with content silently deletes instructions. | "I turned on a section and nothing happened. Then I lost what I typed." | **Medium** | Auto-expand on toggle-on. Warn before deleting content on toggle-off. |
| 10 | **Location cards are hidden behind tiny text links** — The product's signature feature is the smallest interactive element in the busiest wizard step. | "I finished the wizard and never saw anything about photo cards." | **Medium** | Add a callout panel at the top of Step 5 introducing location cards with a visual example. Make the entry points icon buttons (larger targets). |
| 11 | **Contacts always in edit mode** — Step 4 and ContactsEditor show all contact fields expanded at all times. | "There's so much to fill in. I don't know where to start." | **Medium** | Show contacts as compact read-only cards (name, role, phone). Tap to expand into edit mode. |
| 12 | **Auto-seeded contacts appear without explanation** — ASPCA and defaults appear without the user creating them; "Locked" badge is unexplained. | "Where did these come from? I didn't add them." | **Medium** | Show explanatory banner: "We've included ASPCA Animal Poison Control — required for pet emergencies." |
| 13 | **"Save & finish later" requires validation** — If property name is blank, the exit button triggers validation instead of exiting. | "The app won't let me leave without naming my home first." | **Medium** | Allow exit without validation. Auto-name as "My Home" placeholder, or simply save as draft with no name required. |
| 14 | **No persistent setup progress on dashboard** — After exiting the wizard, there is no indication of completion status or what steps remain. | "I came back a day later and couldn't remember where I left off." | **Medium** | Add a progress card for incomplete properties: "Your manual is 60% complete — finish setting it up." |
| 15 | **Dual banners on first load compete with onboarding** — Email verification + push notification request appear before any property interaction. | "So many things asking me to do things before I've done anything." | **Medium** | Defer push notification request until after wizard completion. |
| 16 | **Add-sitter form persists after saving a sitter** — Form looks identical post-save, making it unclear the sitter was saved. | "Did it save? It's showing me the same form again." | **Medium** | Collapse form after saving; show "Add another sitter" link to re-open. |
| 17 | **Sections collapsed by default in editor, expanded in wizard** — Minor inconsistency. | "This works differently from when I set it up." | **Low** | Standardize. Editor behavior (collapsed) is correct. Auto-expand first section in wizard after adding. |
| 18 | **Vault edit requires re-entering value blindly** — Existing value masked with no reveal option. | "I couldn't check the current code before I changed it." | **Low** | Add a "reveal current value" option before entering edit mode. |
| 19 | **"Next" and "Skip" on Step 5 are functionally identical** — Both call `router.push("/wizard/6")`. | "What's the difference?" | **Low** | Remove "Skip" from Step 5. Use "Continue" as the single exit. |
| 20 | **Trip status badge shows internal terminology** — "Overlay" variant badge used for non-active trips is meaningless to users. | "My trip says 'Overlay'. What does that mean?" | **Low** | Map to user-facing labels: draft → "In setup", active → "Active", expired → "Completed". |
| 21 | **No post-publish celebration** — After clicking "Publish Vadem" in Step 6, the user lands back on the standard dashboard with no confirmation. | "Did it work? What just happened?" | **Low** | Add a one-time success state on the dashboard: "Your Vadem is ready. Create a trip to share it." |

---

## Bold / Architectural Recommendations

### 1. Build a "My Property" Hub at `/dashboard/property`

The four property editors (Pets, Sections, Contacts, Vault) are currently peer siblings of the dashboard rather than children of a property. A dedicated hub would:
- Give users a mental model of "my property" as a container
- Surface completion status per area ("3 sections · 2 with location cards", "1 pet · Feeding instructions missing")
- Enable future multi-property support without rearchitecting navigation
- Give all editor back-links a logical home that isn't the top-level dashboard

### 2. Merge Trip Activation into One Action

Current flow: generate link → copy → activate trip. This should be one action. When the user reaches the Share step, auto-generate the link. Provide a single **"Activate and copy link"** CTA that atomically activates the trip and copies the URL. Password toggle and link reset remain as secondary controls.

Bonus: consolidate trip setup from 4 steps to 3 — "Customize → Invite → Share" maps more naturally to user intent than "Overlay Items → Sitters → Proof Settings → Share."

### 3. Introduce Location Cards Explicitly in the Wizard

Location cards are the product's primary differentiator and they live behind the smallest interactive elements in the wizard. Fix:
- Add a callout panel at the top of Step 5 with a named introduction and one visual example (a polaroid card with a thermostat photo and caption "Set to 72° when you leave")
- Replace "+ Photo card" text links with icon buttons (camera icon, video icon) at a touch-friendly size
- Surface "0 location cards" in the sections summary on the dashboard/property hub to create pull toward adding them

### 4. Unify All Creator Flows Under One Layout

The wizard, dashboard, and trip setup use three different visual contexts. Recommendation: use `CreatorLayout` for all authenticated creator flows. Wizard and trip setup steps use a step-progress variant of the content area (step indicator replaces page title) while sidebar and bottom nav remain fixed. This gives users a stable navigation anchor throughout all setup flows and removes the "I left the app" feeling when entering trip setup.

### 5. Adopt an Optional-Fields Philosophy for the Wizard

The wizard should get a manual from "empty" to "good enough to share" in 10–15 minutes. Every wizard field should be optional or have a sensible default, with in-context nudges explaining why a field is valuable. Reserve `required` only for fields without which the feature cannot function (e.g., property name). Apply: pets require only name + species in the wizard. Vet phone becomes a nudge: "Add your vet's number — your sitter will need this in an emergency."

---

## What's Working Well

- **Vault encryption**: AES-256-GCM client-side encryption before Convex is architecturally excellent and genuinely differentiating for a product handling door codes and alarm codes.
- **Design system cohesion within the wizard**: Strong visual consistency across Steps 1–6 — heading hierarchy, body text, button sizing, warm color palette, spring animations.
- **Adaptive button labels in Step 3**: "Skip — add later" vs. "Done with access info" based on whether items exist. Should be applied consistently everywhere (notably: broken in trip setup).
- **PetProfileCard reuse in wizard**: After saving a pet, the wizard renders the same `PetProfileCard` the sitter sees, giving homeowners a preview of the final experience.
- **Step 6 review checklist**: Complete/missing checklist across all five content areas + live sitter preview panel. Strong pre-publish confirmation moment.
- **Trips page "How trips work" explainer**: Right-place orientation copy that fills an otherwise empty state with genuinely useful context.
- **ASPCA Poison Control as default contact**: Safety-first default with appropriate locked visual treatment (just needs better explanation).
- **Vault deletion without OTP**: Correctly gates only value reveals behind SMS verification; deletion is an owner action and doesn't expose secrets.

---

## Suggested Priority Order for Fixes

### Immediate — Critical path, minimal effort

1. **Issue #1** — Wire dashboard CTA to `/wizard/1`. One line of code; blocks all new user activation.
2. **Issue #4 + #5** — Auto-generate share link; merge "Activate trip" into single action. Directly reduces sitter activation rate.
3. **Issue #7** — Fix "Skip for now" label when items already exist. Simple label logic.
4. **Issue #3** — Reduce wizard pet required fields from 6 to 2. Unblocks users without vet number handy.

### Near-term — Core UX quality

5. **Issue #2** — Add confirmation dialog on wizard wordmark exit.
6. **Issue #9** — Auto-expand section on toggle-on; warn on delete-with-content.
7. **Issue #10** — Surface location cards in Step 5 with callout and visual example. (See Arch Rec #3.)
8. **Issue #11** — Collapsed read-only contact cards with tap-to-edit.
9. **Issue #13** — Allow "Save & finish later" without validation.
10. **Issue #14** — Add setup progress card to dashboard for incomplete properties.
11. **Issue #15** — Defer push notification request until post-wizard.
12. **Issue #16** — Collapse add-sitter form after saving; show "Add another sitter."

### Medium-term — Architectural, high value

13. **Issue #6 + Arch Rec #4** — Unify three visual layout contexts under `CreatorLayout`.
14. **Issue #8 + #17 + Arch Rec #1** — Build `/dashboard/property` hub; redirect all editor back-links to hub.
15. **Arch Rec #5** — Optional-fields philosophy for wizard. Audit every required field.
16. **Arch Rec #2** — Streamline trip setup to 3 steps; merge activation.

### Backlog — Polish

17. **Issue #18** — Vault edit: allow revealing current value before overwriting.
18. **Issue #19** — Remove redundant "Skip" on Step 5 (same as "Next").
19. **Issue #20** — Map trip status codes to user-facing language.
20. **Issue #21** — Add post-publish success state on dashboard.
21. **Issue #12** — In-context explanation for auto-seeded contacts.
