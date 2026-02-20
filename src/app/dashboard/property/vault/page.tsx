import type { Metadata } from "next";
import { VaultEditorPageClient } from "./VaultEditorPageClient";

export const metadata: Metadata = {
  title: "Vault | Handoff",
};

export default function VaultEditorPage() {
  return <VaultEditorPageClient />;
}
