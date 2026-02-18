"use client";

import { type HTMLAttributes } from "react";

interface PetDetail {
  emoji: string;
  label: string;
  value: string;
  /** If provided, renders as a tel: link in sage/secondary color */
  phone?: string;
}

interface PetProfileCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Pet photo URL — renders placeholder gradient when absent */
  src?: string;
  /** Alt text for the photo */
  alt?: string;
  /** Pet name */
  name: string;
  /** Breed description */
  breed: string;
  /** Age description (e.g. "3 years old") */
  age: string;
  /** Detail rows with emoji icons */
  details?: PetDetail[];
  /** Personality note displayed in handwritten font */
  personalityNote?: string;
}

function PetProfileCard({
  src,
  alt = "",
  name,
  breed,
  age,
  details = [],
  personalityNote,
  className = "",
  ...props
}: PetProfileCardProps) {
  return (
    <div
      className={["pet-card", className].filter(Boolean).join(" ")}
      {...props}
    >
      {/* Hero photo — 1:1 aspect ratio, full bleed */}
      <div className="pet-card-hero">
        {src ? (
          <img
            src={src}
            alt={alt || name}
            className="pet-card-img"
            draggable={false}
          />
        ) : (
          <div className="pet-card-placeholder" />
        )}
      </div>

      {/* Content below photo */}
      <div className="pet-card-body">
        <h2 className="pet-card-name">{name}</h2>
        <p className="pet-card-meta">
          {breed} · {age}
        </p>

        {details.length > 0 && (
          <div className="pet-card-details">
            {details.map((detail) => (
              <div key={detail.label} className="pet-card-detail-row">
                <span className="pet-card-detail-emoji" aria-hidden="true">
                  {detail.emoji}
                </span>
                <span className="pet-card-detail-label">{detail.label}</span>
                {detail.phone ? (
                  <a
                    href={`tel:${detail.phone}`}
                    className="pet-card-detail-phone"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span className="pet-card-detail-value">{detail.value}</span>
                )}
              </div>
            ))}
          </div>
        )}

        {personalityNote && (
          <p className="pet-card-personality">{personalityNote}</p>
        )}
      </div>
    </div>
  );
}

export {
  PetProfileCard,
  type PetProfileCardProps,
  type PetDetail,
};
