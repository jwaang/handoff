import { CallbackPageClient } from "../CallbackPageClient";

export const metadata = { title: "Signing in – Handoff" };

export default function GoogleCallbackPage() {
  return <CallbackPageClient provider="google" />;
}
