"use client";

import { Component, type ReactNode } from "react";
import dynamic from "next/dynamic";

const TodayPageInner = dynamic(() => import("./TodayPageInner"), { ssr: false });

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
      <TodayPageInner tripId={tripId} />
    </TodayErrorBoundary>
  );
}
