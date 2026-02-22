import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your Vadem account password.",
};

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-dvh bg-bg flex flex-col items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm text-center">
        <h1 className="font-display text-3xl text-primary mb-3">Forgot password?</h1>
        <p className="font-body text-sm text-text-secondary mb-8">
          Password reset is coming soon. For now, please contact support.
        </p>
        <Link
          href="/login"
          className="font-body text-sm text-primary font-semibold hover:text-primary-hover transition-colors duration-150"
        >
          ← Back to sign in
        </Link>
      </div>
    </div>
  );
}
