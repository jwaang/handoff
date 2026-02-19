import type { Metadata } from "next";
import { PetsEditorPageClient } from "./PetsEditorPageClient";

export const metadata: Metadata = {
  title: "Edit Pets | Handoff",
};

export default function PetsEditorPage() {
  return <PetsEditorPageClient />;
}
