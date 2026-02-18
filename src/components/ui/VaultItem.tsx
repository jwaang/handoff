import { type HTMLAttributes, type ReactNode } from "react";
import { Button } from "./Button";

type VaultItemState = "revealed" | "locked" | "hidden";

interface VaultItemProps extends HTMLAttributes<HTMLDivElement> {
  /** The state of the vault item */
  state?: VaultItemState;
  /** Icon rendered inside the 44px icon box */
  icon: ReactNode;
  /** Label text (e.g. "Front Door Code") */
  label: string;
  /** Hint/instruction text below the label */
  hint?: string;
  /** The secret value displayed in revealed state */
  value?: string;
  /** Callback when verify button is clicked */
  onVerify?: () => void;
}

function LockIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function VaultItem({
  state = "locked",
  icon,
  label,
  hint,
  value,
  onVerify,
  className = "",
  ...props
}: VaultItemProps) {
  const stateClass =
    state === "revealed" ? "vault-item-revealed" : "vault-item-locked";

  return (
    <div
      className={["vault-item", stateClass, className].filter(Boolean).join(" ")}
      {...props}
    >
      <div className="vault-item-icon">{icon}</div>

      {state === "hidden" ? (
        <>
          <div className="vault-item-content">
            <p className="vault-item-message">
              Verify your phone number to view secure info
            </p>
          </div>
          <div className="vault-item-action">
            <Button variant="vault" size="sm" onClick={onVerify}>
              Verify
            </Button>
          </div>
        </>
      ) : state === "locked" ? (
        <>
          <div className="vault-item-content">
            <span className="vault-item-label">{label}</span>
            {hint && <span className="vault-item-hint">{hint}</span>}
          </div>
          <div className="vault-item-action">
            <Button variant="vault" size="sm" onClick={onVerify}>
              Verify
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="vault-item-content">
            <span className="vault-item-label">{label}</span>
            {hint && <span className="vault-item-hint">{hint}</span>}
          </div>
          <div className="vault-item-value">{value}</div>
        </>
      )}
    </div>
  );
}

export {
  VaultItem,
  LockIcon,
  type VaultItemProps,
  type VaultItemState,
};
