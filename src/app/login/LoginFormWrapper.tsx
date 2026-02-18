"use client";

import dynamic from "next/dynamic";

// Dynamic import with ssr: false must live in a Client Component
const LoginFormDynamic = dynamic(
  () => import("./LoginForm").then((m) => ({ default: m.LoginForm })),
  { ssr: false, loading: () => null },
);

export function LoginFormWrapper() {
  return <LoginFormDynamic />;
}
