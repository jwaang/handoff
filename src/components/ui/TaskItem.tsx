"use client";

import { type HTMLAttributes, type ReactNode, useState, useCallback } from "react";
import { Badge } from "./Badge";

interface TaskItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "onClick" | "onToggle"> {
  /** Task description text */
  text: string;
  /** Whether the task starts completed */
  defaultCompleted?: boolean;
  /** Controlled completed state */
  completed?: boolean;
  /** Called when completion state toggles */
  onToggle?: (completed: boolean) => void;
  /** Time badge text (e.g. "7:00 AM") */
  time?: string;
  /** Room badge text (e.g. "Kitchen") */
  room?: string;
  /** Whether this is an overlay/trip-specific task */
  overlay?: boolean;
  /** Show proof button */
  showProof?: boolean;
  /** Called when proof button is clicked */
  onProof?: () => void;
  /** Additional meta content */
  meta?: ReactNode;
}

function CameraIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function CheckmarkIcon() {
  return (
    <svg
      className="task-item-checkmark"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
    </svg>
  );
}

function TaskItem({
  text,
  defaultCompleted = false,
  completed: controlledCompleted,
  onToggle,
  time,
  room,
  overlay = false,
  showProof = false,
  onProof,
  meta,
  className = "",
  ...props
}: TaskItemProps) {
  const [internalCompleted, setInternalCompleted] = useState(defaultCompleted);
  const isControlled = controlledCompleted !== undefined;
  const completed = isControlled ? controlledCompleted : internalCompleted;

  const handleToggle = useCallback(() => {
    const next = !completed;
    if (!isControlled) {
      setInternalCompleted(next);
    }
    onToggle?.(next);
  }, [completed, isControlled, onToggle]);

  const handleProofClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onProof?.();
    },
    [onProof],
  );

  const hasMeta = time || room || overlay || meta;

  return (
    <div
      className={[
        "task-item",
        completed && "task-item-completed",
        overlay && "task-item-overlay",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={handleToggle}
      role="checkbox"
      aria-checked={completed}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === " " || e.key === "Enter") {
          e.preventDefault();
          handleToggle();
        }
      }}
      {...props}
    >
      {/* Checkbox */}
      <div
        className={[
          "task-item-checkbox",
          completed && "task-item-checkbox-checked",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <CheckmarkIcon />
      </div>

      {/* Body */}
      <div className="task-item-body">
        <span className="task-item-text">{text}</span>

        {hasMeta && (
          <div className="task-item-meta">
            {time && <Badge variant="time">{time}</Badge>}
            {room && <Badge variant="room">{room}</Badge>}
            {overlay && <Badge variant="overlay">This Trip Only</Badge>}
            {meta}
          </div>
        )}
      </div>

      {/* Proof button */}
      {showProof && (
        <button
          type="button"
          className="task-item-proof"
          onClick={handleProofClick}
          aria-label="Add proof photo"
        >
          <CameraIcon />
          Proof
        </button>
      )}
    </div>
  );
}

export { TaskItem, type TaskItemProps };
