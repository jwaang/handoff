"use client";

import dynamic from "next/dynamic";

const SectionsEditor = dynamic(() => import("./SectionsEditor"), { ssr: false });

export function SectionsEditorPageClient() {
  return <SectionsEditor />;
}
