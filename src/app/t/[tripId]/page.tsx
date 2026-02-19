import type { Metadata } from "next";
import { TodayPageClient } from "./TodayPageClient";

export const metadata: Metadata = {
  title: "Today | Handoff",
};

export default async function TodayPage({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;
  return <TodayPageClient tripId={tripId} />;
}
