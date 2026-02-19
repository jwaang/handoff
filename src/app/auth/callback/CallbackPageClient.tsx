"use client";

import dynamic from "next/dynamic";

const CallbackHandlerDynamic = dynamic(
  () =>
    import("./CallbackHandler").then((m) => ({
      default: m.CallbackHandler,
    })),
  { ssr: false, loading: () => null },
);

export function CallbackPageClient({
  provider,
}: {
  provider: "google" | "apple";
}) {
  return <CallbackHandlerDynamic provider={provider} />;
}
