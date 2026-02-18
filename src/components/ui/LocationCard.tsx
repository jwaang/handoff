"use client";

import { type HTMLAttributes, useState, useCallback } from "react";
import { Badge } from "./Badge";

type TiltVariant = "tilted-left" | "neutral" | "tilted-right";

interface LocationCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Photo URL — renders placeholder when absent */
  src?: string;
  /** Alt text for the photo */
  alt?: string;
  /** Handwritten caption below the photo */
  caption: string;
  /** Room name displayed as a badge */
  room?: string;
  /** Tilt angle variant */
  tilt?: TiltVariant;
  /** Called when the card is tapped; receives the src */
  onExpand?: (src: string) => void;
}

function PlaceholderIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ color: "var(--text-muted)" }}
    >
      <rect x="6" y="10" width="36" height="28" rx="3" />
      <circle cx="18" cy="22" r="4" />
      <path d="M42 32l-10-10-16 16" />
      <path d="M28 28l4-4 10 10" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

const tiltClasses: Record<TiltVariant, string> = {
  "tilted-left": "location-card-tilt-left",
  neutral: "location-card-tilt-neutral",
  "tilted-right": "location-card-tilt-right",
};

function LocationCard({
  src,
  alt = "",
  caption,
  room,
  tilt = "neutral",
  onExpand,
  className = "",
  ...props
}: LocationCardProps) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = useCallback(() => {
    if (src) {
      setExpanded(true);
      onExpand?.(src);
    }
  }, [src, onExpand]);

  const handleClose = useCallback(() => {
    setExpanded(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick],
  );

  const handleOverlayKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleClose();
      }
    },
    [handleClose],
  );

  return (
    <>
      <div
        className={[
          "location-card",
          tiltClasses[tilt],
          src ? "location-card-tappable" : "",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        role={src ? "button" : undefined}
        tabIndex={src ? 0 : undefined}
        onClick={handleClick}
        onKeyDown={src ? handleKeyDown : undefined}
        {...props}
      >
        <div className="location-card-photo">
          {src ? (
            <img
              src={src}
              alt={alt}
              className="location-card-img"
              draggable={false}
            />
          ) : (
            <div className="location-card-placeholder">
              <PlaceholderIcon />
              <span className="location-card-placeholder-text">
                No photo yet
              </span>
            </div>
          )}
        </div>

        <div className="location-card-body">
          <p className="location-card-caption">{caption}</p>
          {room && <Badge variant="room">{room}</Badge>}
        </div>
      </div>

      {expanded && src && (
        <div
          className="location-card-overlay"
          onClick={handleClose}
          onKeyDown={handleOverlayKeyDown}
          role="dialog"
          aria-label={alt || caption}
          tabIndex={0}
        >
          <button
            className="location-card-overlay-close"
            onClick={handleClose}
            aria-label="Close"
          >
            <CloseIcon />
          </button>
          <img
            src={src}
            alt={alt}
            className="location-card-overlay-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}

export {
  LocationCard,
  type LocationCardProps,
  type TiltVariant,
};
