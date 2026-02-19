"use client";

import dynamic from "next/dynamic";

const PetsEditor = dynamic(() => import("./PetsEditor"), { ssr: false });

export function PetsEditorPageClient() {
  return <PetsEditor />;
}
