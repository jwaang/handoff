import type { Metadata } from "next";
import SettingsPageClient from "./SettingsPageClient";

export const metadata: Metadata = {
  title: "Settings",
  description: "Manage your account, notification preferences, and session.",
};

export default function SettingsPage() {
  return <SettingsPageClient />;
}
