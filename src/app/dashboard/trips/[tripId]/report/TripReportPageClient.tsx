"use client";

import dynamic from "next/dynamic";

const TripReportView = dynamic(() => import("./TripReportView"), {
  ssr: false,
});

export function TripReportPageClient({ tripId }: { tripId: string }) {
  return <TripReportView tripId={tripId} />;
}
