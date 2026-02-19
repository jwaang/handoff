import { CallbackPageClient } from "../../CallbackPageClient";

export const metadata = { title: "Signing in – Handoff" };

export default function AppleCallbackCompletePage() {
  return <CallbackPageClient provider="apple" />;
}
