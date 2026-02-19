"use client";

import dynamic from "next/dynamic";

// Prevent SSR: Convex hooks require the ConvexProvider which is client-only
const WizardStepInner = dynamic(() => import("./WizardStepInner"), { ssr: false });

interface WizardStepClientProps {
  step: number;
}

export function WizardStepClient({ step }: WizardStepClientProps) {
  return <WizardStepInner step={step} />;
}
