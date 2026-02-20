"use client";

import dynamic from "next/dynamic";

const ReportShareView = dynamic(() => import("./ReportShareView"), {
  ssr: false,
});

export function ReportSharePageClient({
  reportShareLink,
}: {
  reportShareLink: string;
}) {
  return <ReportShareView reportShareLink={reportShareLink} />;
}
