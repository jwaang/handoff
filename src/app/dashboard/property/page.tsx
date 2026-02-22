import type { Metadata } from "next";
import PropertyPageClient from "./PropertyPageClient";

export const metadata: Metadata = {
  title: "My Property",
  description:
    "Manage your property details, pets, sections, contacts, and vault items.",
};

export default function PropertyPage() {
  return <PropertyPageClient />;
}
