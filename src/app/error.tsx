"use client";

import posthog from "posthog-js";
import { useEffect } from "react";
import Link from "next/link";
import { RefreshIcon, HomeIcon } from "@/components/ui/icons";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    posthog.captureException(error);
  }, [error]);

  return (
    <div className="min-h-dvh bg-bg flex flex-col items-center justify-center px-6">
      <div className="flex flex-col items-center max-w-sm">
        <div
          className="bg-bg-raised rounded-lg p-2 shadow-polaroid w-60 mb-12"
          style={{ rotate: "2deg" }}
        >
          <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-danger-light via-accent-light to-primary-light/60 flex items-center justify-center">
            <svg
              viewBox="0 0 80 80"
              className="w-16 h-16 text-danger/10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="40" cy="40" r="28" />
              <path d="M40 28V44" />
              <circle cx="40" cy="52" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <p className="font-handwritten text-xl text-text-primary px-1.5 pt-2.5 pb-0.5">
            Well, that wasn&apos;t supposed to happen
          </p>
        </div>

        <h1 className="font-display text-3xl text-text-primary mb-3 text-center leading-tight">
          Something went wrong
        </h1>
        <p className="font-body text-base text-text-secondary leading-relaxed mb-8 text-center">
          Don&apos;t worry, your data is safe. Try refreshing, or head back
          home.
        </p>

        <div className="flex gap-3">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 font-body text-sm font-semibold bg-primary text-text-on-primary px-6 py-3 rounded-md btn btn-primary transition-[translate,box-shadow,background-color] duration-150 hover:bg-primary-hover"
          >
            <RefreshIcon size={16} />
            Try again
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-body text-sm font-semibold text-text-secondary bg-bg-sunken border border-border-default px-6 py-3 rounded-md btn btn-no-shadow transition-[translate,box-shadow,background-color] duration-150 hover:border-border-strong"
          >
            <HomeIcon size={16} />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
