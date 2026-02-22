import type { Metadata } from "next";
import DashboardPageClient from "./DashboardClient";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "View your property, trips, and sitter activity at a glance.",
};

export default function DashboardPage() {
  return <DashboardPageClient />;
}
