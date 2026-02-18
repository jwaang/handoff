"use client";

import { type HTMLAttributes, useState, useEffect, useCallback, useRef } from "react";

type ToastVariant = "success" | "vault" | "warning";

interface NotificationToastProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** Toast variant determines left border color and icon */
  variant?: ToastVariant;
  /** Toast title */
  title: string;
  /** Toast message body */
  message: string;
  /** Timestamp text (e.g. "Just now", "2 min ago") */
  timestamp?: string;
  /** Auto-dismiss after ms (default 5000, set 0 to disable) */
  autoDismissMs?: number;
  /** Called when toast is dismissed */
  onDismiss?: () => void;
  /** Control visibility externally */
  visible?: boolean;
}

function SuccessIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="var(--secondary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="10" cy="10" r="8" />
      <polyline points="6.5 10 9 12.5 13.5 7.5" />
    </svg>
  );
}

function VaultIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="var(--vault)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="14" height="10" rx="2" />
      <path d="M6 8V5a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="var(--warning)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 3 L18 17 H2 Z" />
      <line x1="10" y1="8" x2="10" y2="12" />
      <circle cx="10" cy="14.5" r="0.5" fill="var(--warning)" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <line x1="3" y1="3" x2="11" y2="11" />
      <line x1="11" y1="3" x2="3" y2="11" />
    </svg>
  );
}

const variantIcons: Record<ToastVariant, () => React.JSX.Element> = {
  success: SuccessIcon,
  vault: VaultIcon,
  warning: WarningIcon,
};

function NotificationToast({
  variant = "success",
  title,
  message,
  timestamp,
  autoDismissMs = 5000,
  onDismiss,
  visible: controlledVisible,
  className = "",
  ...props
}: NotificationToastProps) {
  const [internalVisible, setInternalVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isControlled = controlledVisible !== undefined;
  const visible = isControlled ? controlledVisible : internalVisible;

  const dismiss = useCallback(() => {
    setExiting(true);
    // Wait for exit animation before fully hiding
    setTimeout(() => {
      setExiting(false);
      if (!isControlled) {
        setInternalVisible(false);
      }
      onDismiss?.();
    }, 300);
  }, [isControlled, onDismiss]);

  // Auto-dismiss timer
  useEffect(() => {
    if (!visible || autoDismissMs === 0) return;

    timerRef.current = setTimeout(dismiss, autoDismissMs);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [visible, autoDismissMs, dismiss]);

  if (!visible && !exiting) return null;

  const Icon = variantIcons[variant];

  return (
    <div
      className={[
        "notification-toast",
        `notification-toast-${variant}`,
        exiting && "notification-toast-exit",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="alert"
      aria-live="polite"
      {...props}
    >
      {/* Icon */}
      <div className="notification-toast-icon">
        <Icon />
      </div>

      {/* Content */}
      <div className="notification-toast-content">
        <p className="notification-toast-title">{title}</p>
        <p className="notification-toast-message">{message}</p>
        {timestamp && <span className="notification-toast-timestamp">{timestamp}</span>}
      </div>

      {/* Close button */}
      <button
        type="button"
        className="notification-toast-close"
        onClick={dismiss}
        aria-label="Dismiss notification"
      >
        <CloseIcon />
      </button>
    </div>
  );
}

export { NotificationToast, type NotificationToastProps, type ToastVariant };
