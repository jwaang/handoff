"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { WizardProgress } from "@/components/ui/WizardProgress";
import { Button } from "@/components/ui/Button";
import { ChevronLeftIcon } from "@/components/ui/icons";
import Step1Home from "./Step1Home";
import Step2Pets from "./Step2Pets";
import Step3Access from "./Step3Access";
import Step4Contacts from "./Step4Contacts";
import Step5Sections from "./Step5Sections";
import Step6Review from "./Step6Review";

interface WizardStepInnerProps {
  step: number;
}

function ComingSoon({ step }: { step: number }) {
  return (
    <div className="bg-bg-raised rounded-xl p-8 text-center flex flex-col gap-4 items-center">
      <p className="font-body text-sm text-text-muted">Step {step} is coming soon.</p>
      <Link
        href="/wizard/1"
        className="font-body text-sm text-primary hover:text-primary-hover underline underline-offset-2"
      >
        Back to step 1
      </Link>
    </div>
  );
}

function WizardLayout({
  step,
  children,
}: {
  step: number;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  return (
    <main className="min-h-dvh bg-bg flex flex-col items-center px-4 pt-8 pb-12">
      <div className="w-full max-w-lg flex flex-col gap-6">
        {/* Wordmark */}
        <div className="text-center">
          <button
            type="button"
            onClick={() => setShowExitConfirm(true)}
            className="font-display text-2xl text-primary italic hover:text-primary-hover transition-colors duration-150 bg-transparent border-none cursor-pointer"
          >
            Vadem
          </button>
        </div>

        {/* Exit confirmation dialog */}
        {showExitConfirm && (
          <div className="bg-warning-light rounded-xl p-5 flex flex-col gap-3 border border-warning">
            <p className="font-body text-sm font-semibold text-text-primary">
              Leave the wizard?
            </p>
            <p className="font-body text-xs text-text-secondary">
              Any unsaved changes on this step will be lost. Completed steps are already saved.
            </p>
            <div className="flex items-center gap-2 justify-end">
              <Button variant="ghost" size="sm" onClick={() => setShowExitConfirm(false)}>
                Stay
              </Button>
              <Button variant="primary" size="sm" onClick={() => router.push("/dashboard")}>
                Leave
              </Button>
            </div>
          </div>
        )}

        {/* Progress indicator */}
        <WizardProgress currentStep={step - 1} />

        {/* Back button */}
        {step > 1 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push(`/wizard/${step - 1}`)}
            className="self-start -mt-2"
          >
            <ChevronLeftIcon size={14} />
            Back
          </Button>
        )}

        {/* Step card */}
        <div
          className="bg-bg-raised rounded-xl"
          style={{ boxShadow: "var(--shadow-md)" }}
        >
          {children}
        </div>
      </div>
    </main>
  );
}

export default function WizardStepInner({ step }: WizardStepInnerProps) {
  if (!process.env.NEXT_PUBLIC_CONVEX_URL) {
    return (
      <WizardLayout step={step}>
        <div className="p-8 text-center">
          <p className="font-body text-sm text-text-muted">
            Backend service is not configured. Set{" "}
            <code className="font-mono text-xs bg-bg-sunken px-1 py-0.5 rounded">
              NEXT_PUBLIC_CONVEX_URL
            </code>{" "}
            to enable the wizard.
          </p>
        </div>
      </WizardLayout>
    );
  }

  return (
    <WizardLayout step={step}>
      {step === 1 ? (
        <Step1Home />
      ) : step === 2 ? (
        <Step2Pets />
      ) : step === 3 ? (
        <Step3Access />
      ) : step === 4 ? (
        <Step4Contacts />
      ) : step === 5 ? (
        <Step5Sections />
      ) : step === 6 ? (
        <Step6Review />
      ) : (
        <ComingSoon step={step} />
      )}
    </WizardLayout>
  );
}
