import { CallbackPageClient } from "../CallbackPageClient";

export const metadata = { title: "Signing in – Handoff" };

export default function AppleCallbackPage() {
  return <CallbackPageClient provider="apple" />;
}
