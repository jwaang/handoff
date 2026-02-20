"use client";

import { Component, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";

const TodayPageInner = dynamic(() => import("./TodayPageInner"), { ssr: false });
const PasswordGate = dynamic(
  () => import("./PasswordGate").then((m) => ({ default: m.PasswordGate })),
  { ssr: false },
);

// ── Cookie helpers ─────────────────────────────────────────────────────

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? (match.split("=")[1] ?? null) : null;
}

// ── Error boundary — catches query / validation errors (e.g. malformed trip ID) ──

interface ErrorBoundaryState {
  hasError: boolean;
}

class TodayErrorBoundary extends Component<{ children: ReactNode }, ErrorBoundaryState> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-dvh bg-bg flex items-center justify-center p-6">
          <div className="text-center flex flex-col gap-3">
            <p className="font-display text-2xl text-text-primary">Trip not found</p>
            <p className="font-body text-sm text-text-muted">
              This link may have expired or been revoked.
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// ── Password-protected resolver ────────────────────────────────────────

interface PasswordProtectedResolverProps {
  tripId: Id<"trips">;
  shareLink: string;
}

function PasswordProtectedResolver({ tripId, shareLink }: PasswordProtectedResolverProps) {
  const cookieName = `hoff_trip_${shareLink}`;
  const storedToken = getCookie(cookieName);

  const [verified, setVerified] = useState(false);

  // Validate the stored session token against the server
  const sessionValid = useQuery(
    api.tripSessions.verifySession,
    storedToken ? { sessionToken: storedToken, tripId } : "skip",
  );

  // While validating the stored token
  if (storedToken && sessionValid === undefined) {
    return (
      <div className="min-h-dvh bg-bg flex items-center justify-center">
        <p className="font-body text-sm text-text-muted">Loading…</p>
      </div>
    );
  }

  // Valid stored session OR just verified via password form
  if (verified || sessionValid === true) {
    return <TodayPageInner tripId={tripId} />;
  }

  // No valid session — show password gate
  return (
    <PasswordGate
      tripId={tripId}
      shareLink={shareLink}
      onSuccess={() => setVerified(true)}
    />
  );
}

// ── Expired state ──────────────────────────────────────────────────────

function ExpiredState() {
  return (
    <div className="min-h-dvh bg-bg flex items-center justify-center p-6">
      <div
        className="bg-bg-raised rounded-xl p-8 flex flex-col items-center gap-4 w-full max-w-sm text-center"
        style={{ boxShadow: "var(--shadow-md)" }}
      >
        {/* Clock icon */}
        <div className="w-12 h-12 rounded-round bg-bg-sunken flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-muted"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>

        <h1 className="font-display text-2xl text-text-primary">
          This handoff has expired
        </h1>
        <p className="font-body text-sm text-text-muted">
          This link is no longer active. Please contact the homeowner if you
          need access.
        </p>
      </div>
    </div>
  );
}

// ── ShareLink resolver — looks up trip by shareLink slug, falls back to tripId ──

function TodayPageResolver({ shareLink }: { shareLink: string }) {
  const trip = useQuery(api.trips.getByShareLink, { shareLink });

  // Still loading
  if (trip === undefined) {
    return (
      <div className="min-h-dvh bg-bg flex items-center justify-center">
        <p className="font-body text-sm text-text-muted">Loading…</p>
      </div>
    );
  }

  // Expired link
  if (trip !== null && !("_id" in trip)) {
    return <ExpiredState />;
  }

  // Found by shareLink — check password protection
  if (trip !== null) {
    if (trip.linkPassword) {
      return (
        <PasswordProtectedResolver tripId={trip._id} shareLink={shareLink} />
      );
    }
    return <TodayPageInner tripId={trip._id} />;
  }

  // Link not found — either revoked (regenerated) or never existed.
  return (
    <div className="min-h-dvh bg-bg flex items-center justify-center p-6">
      <div
        className="bg-bg-raised rounded-xl p-8 flex flex-col items-center gap-4 w-full max-w-sm text-center"
        style={{ boxShadow: "var(--shadow-md)" }}
      >
        <div className="w-12 h-12 rounded-round bg-bg-sunken flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-muted"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
          </svg>
        </div>
        <h1 className="font-display text-2xl text-text-primary">
          This link is no longer valid
        </h1>
        <p className="font-body text-sm text-text-muted">
          This link has been revoked. Please ask the homeowner for a new link.
        </p>
      </div>
    </div>
  );
}

// ── Client shell ──────────────────────────────────────────────────────

export function TodayPageClient({ tripId }: { tripId: string }) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!convexUrl) {
    return (
      <div className="min-h-dvh bg-bg flex items-center justify-center p-6">
        <p className="font-body text-sm text-text-muted text-center">
          Unable to load trip. Please try again later.
        </p>
      </div>
    );
  }
  return (
    <TodayErrorBoundary>
      <TodayPageResolver shareLink={tripId} />
    </TodayErrorBoundary>
  );
}
