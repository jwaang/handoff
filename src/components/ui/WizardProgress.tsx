"use client";

import { type HTMLAttributes } from "react";

type StepStatus = "completed" | "active" | "upcoming";

interface WizardStep {
  label: string;
}

interface WizardProgressProps extends HTMLAttributes<HTMLElement> {
  /** Zero-based index of the currently active step */
  currentStep: number;
  /** Optional override: which steps are completed (defaults to all steps before currentStep) */
  completedSteps?: number[];
}

const STEPS: WizardStep[] = [
  { label: "Home" },
  { label: "Pets" },
  { label: "Access" },
  { label: "Contacts" },
  { label: "Instructions" },
  { label: "Review" },
];

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 7.5L5.5 10.5L11.5 4.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function getStepStatus(
  index: number,
  currentStep: number,
  completedSteps?: number[],
): StepStatus {
  if (completedSteps) {
    if (completedSteps.includes(index)) return "completed";
    if (index === currentStep) return "active";
    return "upcoming";
  }
  if (index < currentStep) return "completed";
  if (index === currentStep) return "active";
  return "upcoming";
}

function WizardProgress({
  currentStep,
  completedSteps,
  className = "",
  ...props
}: WizardProgressProps) {
  return (
    <nav
      className={["wizard-progress", className].filter(Boolean).join(" ")}
      aria-label="Setup progress"
      {...props}
    >
      <ol className="wizard-progress-track">
        {STEPS.map((step, index) => {
          const status = getStepStatus(index, currentStep, completedSteps);
          const isLast = index === STEPS.length - 1;

          return (
            <li key={step.label} className="wizard-step-group">
              <div
                className={[
                  "wizard-step",
                  `wizard-step-${status}`,
                ].join(" ")}
                aria-current={status === "active" ? "step" : undefined}
              >
                <span className="wizard-step-dot">
                  {status === "completed" ? (
                    <CheckIcon />
                  ) : (
                    <span className="wizard-step-number">{index + 1}</span>
                  )}
                </span>
                <span className="wizard-step-label">{step.label}</span>
              </div>

              {!isLast && (
                <span
                  className={[
                    "wizard-connector",
                    getStepStatus(index, currentStep, completedSteps) ===
                    "completed"
                      ? "wizard-connector-completed"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export {
  WizardProgress,
  type WizardProgressProps,
  type StepStatus,
  STEPS,
};
