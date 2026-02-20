"use client";

import dynamic from "next/dynamic";

const VaultEditor = dynamic(() => import("./VaultEditor"), { ssr: false });

export function VaultEditorPageClient() {
  return <VaultEditor />;
}
