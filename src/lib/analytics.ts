import posthog from "posthog-js";

/**
 * Typed analytics events for Vadem.
 * All custom event tracking goes through here for a single source of truth.
 *
 * PostHog auto-captures pageviews, clicks, and session recordings.
 * These are the custom events mapped to the PRD success metrics (Section 9).
 */

// ── Activation funnel ────────────────────────────────────────────────

export function trackSignupCompleted(method: "email" | "google" | "apple") {
  posthog.capture("signup_completed", { method });
}

export function trackOnboardingStepCompleted(
  step: "home" | "pets" | "access" | "contacts" | "instructions" | "review",
) {
  posthog.capture("onboarding_step_completed", { step });
}

export function trackOnboardingCompleted() {
  posthog.capture("onboarding_completed");
}

export function trackPropertyPublished() {
  posthog.capture("property_published");
}

export function trackTripCreated() {
  posthog.capture("trip_created");
}

export function trackShareLinkCopied() {
  posthog.capture("share_link_copied");
}

// ── Sitter engagement ────────────────────────────────────────────────

export function trackSitterLinkOpened() {
  posthog.capture("sitter_link_opened");
}

export function trackSitterTabSwitched(tab: "tasks" | "vault" | "activity") {
  posthog.capture("sitter_tab_switched", { tab });
}

export function trackSitterTaskChecked() {
  posthog.capture("sitter_task_checked");
}

export function trackSitterProofUploaded() {
  posthog.capture("sitter_proof_uploaded");
}

export function trackSitterVaultAccessed() {
  posthog.capture("sitter_vault_accessed");
}

// ── Viral / conversion ───────────────────────────────────────────────

export function trackSitterSignupPromptShown() {
  posthog.capture("sitter_signup_prompt_shown");
}

export function trackSitterSignupStarted() {
  posthog.capture("sitter_signup_started");
}

// ── Additional signals ──────────────────────────────────────────────

export function trackLoginFailed(method: "email" | "google" | "apple") {
  posthog.capture("login_failed", { method });
}

export function trackPushEnabled() {
  posthog.capture("push_enabled");
}

export function trackPushDenied() {
  posthog.capture("push_denied");
}

export function trackShareLinkGenerated() {
  posthog.capture("share_link_generated");
}

export function trackSitterTaskUnchecked() {
  posthog.capture("sitter_task_unchecked");
}

export function trackSitterEmergencyContactCalled() {
  posthog.capture("sitter_emergency_contact_called");
}

export function trackSetupExitedEarly(step: string) {
  posthog.capture("setup_exited_early", { step });
}

// ── Identity ─────────────────────────────────────────────────────────

/** Call after login/signup to tie events to a user. */
export function identifyUser(userId: string, email: string) {
  posthog.identify(userId, { email });
}

/** Call on logout. */
export function resetAnalytics() {
  posthog.reset();
}
