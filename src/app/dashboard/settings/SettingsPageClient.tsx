"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAction } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { useAuth } from "@/lib/authContext";
import { CreatorLayout } from "@/components/layouts/CreatorLayout";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { NotificationToast } from "@/components/ui/NotificationToast";

// ── Settings Section ──────────────────────────────────────────────────

interface SettingsSectionProps {
  email: string;
  emailVerified: boolean;
  sessionToken: string;
  onSignOut: () => void;
}

function SettingsSection({ email, emailVerified, sessionToken, onSignOut }: SettingsSectionProps) {
  const [isSending, setIsSending] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastError, setToastError] = useState(false);
  const resend = useAction(api.authActions.resendVerificationEmail);

  async function handleResend() {
    setIsSending(true);
    try {
      await resend({ sessionToken });
      setToastError(false);
      setShowToast(true);
    } catch {
      setToastError(true);
      setShowToast(true);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-display text-4xl text-text-primary leading-tight">Settings</h1>
        <p className="font-body text-sm text-text-secondary mt-1.5">
          Manage your account and preferences
        </p>
      </div>

      {/* Account group */}
      <div
        className="bg-bg-raised rounded-xl border border-border-default overflow-hidden"
        style={{ boxShadow: "var(--shadow-sm)" }}
      >
        <div className="px-5 py-3 border-b border-border-default">
          <p className="font-body text-xs font-semibold text-text-muted uppercase tracking-wide">
            Account
          </p>
        </div>
        <div className="px-5 py-4 flex items-start justify-between gap-4">
          <div className="flex flex-col gap-0.5 min-w-0">
            <p className="font-body text-sm font-semibold text-text-primary">Email address</p>
            <p className="font-body text-sm text-text-muted truncate">{email}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5 shrink-0">
            {emailVerified ? (
              <Badge variant="success">Verified</Badge>
            ) : (
              <>
                <Badge variant="warning">Unverified</Badge>
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={isSending}
                  className="font-body text-xs font-semibold text-primary hover:text-primary-hover transition-colors duration-150 disabled:opacity-50"
                >
                  {isSending ? "Sending…" : "Resend verification →"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <NotificationToast
        title={toastError ? "Failed to send" : "Email sent!"}
        message={
          toastError
            ? "Please try again in a moment."
            : `Verification email sent to ${email}.`
        }
        variant={toastError ? "warning" : "success"}
        visible={showToast}
        autoDismissMs={4000}
        onDismiss={() => setShowToast(false)}
      />

      {/* Notifications */}
      <div
        className="bg-bg-raised rounded-xl border border-border-default overflow-hidden"
        style={{ boxShadow: "var(--shadow-sm)" }}
      >
        <div className="px-5 py-3 border-b border-border-default">
          <p className="font-body text-xs font-semibold text-text-muted uppercase tracking-wide">
            Notifications
          </p>
        </div>
        <div className="px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <p className="font-body text-sm font-semibold text-text-primary">
              Notification preferences
            </p>
            <p className="font-body text-xs text-text-muted">
              Configure which events send you push notifications
            </p>
          </div>
          <Link
            href="/dashboard/settings/notifications"
            className="font-body text-sm font-semibold text-primary hover:text-primary-hover transition-colors duration-150 shrink-0"
          >
            Manage →
          </Link>
        </div>
      </div>

      {/* Session */}
      <div
        className="bg-bg-raised rounded-xl border border-border-default overflow-hidden"
        style={{ boxShadow: "var(--shadow-sm)" }}
      >
        <div className="px-5 py-3 border-b border-border-default">
          <p className="font-body text-xs font-semibold text-text-muted uppercase tracking-wide">
            Session
          </p>
        </div>
        <div className="px-5 py-4 flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <p className="font-body text-sm font-semibold text-text-primary">Sign out</p>
            <p className="font-body text-xs text-text-muted">
              You&rsquo;ll need to sign in again to access your dashboard.
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={onSignOut}>
            Sign out
          </Button>
        </div>
      </div>
    </div>
  );
}

// ── Loading Screen ────────────────────────────────────────────────────

function LoadingScreen() {
  return (
    <div className="min-h-dvh bg-bg flex items-center justify-center">
      <p className="font-body text-text-muted">Loading…</p>
    </div>
  );
}

// ── Settings Page ─────────────────────────────────────────────────────

export default function SettingsPageClient() {
  const router = useRouter();
  const { user, isLoading, signOut } = useAuth();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !isLoading && !user) {
      router.replace("/login");
    }
  }, [mounted, user, isLoading, router]);

  if (!mounted || isLoading || !user) {
    return <LoadingScreen />;
  }

  function handleSignOut() {
    signOut();
    router.push("/login");
  }

  return (
    <CreatorLayout>
      <SettingsSection
        email={user.email}
        emailVerified={user.emailVerified}
        sessionToken={user.token}
        onSignOut={handleSignOut}
      />
    </CreatorLayout>
  );
}
