import type { Metadata } from "next";
import { ReportSharePageClient } from "./ReportSharePageClient";

export const metadata: Metadata = {
  title: "Trip Report | Handoff",
};

export default async function ReportSharePage({
  params,
}: {
  params: Promise<{ reportShareLink: string }>;
}) {
  const { reportShareLink } = await params;
  return <ReportSharePageClient reportShareLink={reportShareLink} />;
}
