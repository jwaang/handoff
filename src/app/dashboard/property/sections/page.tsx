import type { Metadata } from "next";
import { SectionsEditorPageClient } from "./SectionsEditorPageClient";

export const metadata: Metadata = {
  title: "Edit Sections | Handoff",
};

export default function SectionsEditorPage() {
  return <SectionsEditorPageClient />;
}
