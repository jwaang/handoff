"use client";

import dynamic from "next/dynamic";

const ManualView = dynamic(() => import("./ManualView"), { ssr: false });

interface ManualPageClientProps {
  propertyId: string;
}

export function ManualPageClient({ propertyId }: ManualPageClientProps) {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;
  if (!convexUrl) {
    return (
      <div className="flex items-center justify-center min-h-dvh">
        <p className="font-body text-text-muted">
          Convex not configured. Add NEXT_PUBLIC_CONVEX_URL to .env.local.
        </p>
      </div>
    );
  }
  return <ManualView propertyId={propertyId} />;
}
