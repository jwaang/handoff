import type { Metadata } from "next";
import TripsPageClient from "./TripsPageClient";

export const metadata: Metadata = {
  title: "Trips",
  description:
    "Plan and manage your upcoming trips. Create a shareable manual and invite your sitter.",
};

export default function TripsPage() {
  return <TripsPageClient />;
}
