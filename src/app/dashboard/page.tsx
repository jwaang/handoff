"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/authContext";
import { Button } from "@/components/ui/Button";

export default function DashboardPage() {
  const router = useRouter();
  const { user, isLoading, signOut } = useAuth();

  // Redirect unauthenticated users to login
  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login");
    }
  }, [user, isLoading, router]);

  if (isLoading || !user) {
    return (
      <div className="min-h-dvh bg-bg flex items-center justify-center">
        <p className="font-body text-text-muted">Loading…</p>
      </div>
    );
  }

  function handleSignOut() {
    signOut();
    router.push("/login");
  }

  return (
    <div className="min-h-dvh bg-bg flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm text-center">
        <h1 className="font-display text-4xl text-primary mb-2">Handoff</h1>
        <h2 className="font-body text-xl font-semibold text-text-primary mb-1">
          Creator Dashboard
        </h2>
        <p className="font-body text-sm text-text-secondary mb-8">
          Signed in as <span className="font-semibold text-text-primary">{user.email}</span>
        </p>

        <div
          className="bg-bg-raised rounded-xl p-6 mb-6"
          style={{ boxShadow: "var(--shadow-sm)" }}
        >
          <p className="font-body text-sm text-text-muted">
            Dashboard features coming soon. This page will be built out in US-024.
          </p>
        </div>

        <Button variant="ghost" onClick={handleSignOut}>
          Sign out
        </Button>
      </div>
    </div>
  );
}
