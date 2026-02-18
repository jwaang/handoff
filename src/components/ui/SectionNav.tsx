"use client";

import { useState, type HTMLAttributes } from "react";

interface Section {
  id: string;
  emoji: string;
  label: string;
}

interface SectionNavProps extends HTMLAttributes<HTMLElement> {
  sections: Section[];
  /** id of the currently active section */
  activeId?: string;
  /** called when a pill is clicked */
  onSectionChange?: (id: string) => void;
}

function SectionNav({
  sections,
  activeId,
  onSectionChange,
  className = "",
  ...props
}: SectionNavProps) {
  const [internalActive, setInternalActive] = useState(
    activeId ?? sections[0]?.id ?? "",
  );

  const currentId = activeId ?? internalActive;

  function handleClick(id: string) {
    if (!activeId) setInternalActive(id);
    onSectionChange?.(id);
  }

  return (
    <nav
      className={["section-nav", className].filter(Boolean).join(" ")}
      aria-label="Manual sections"
      {...props}
    >
      <div className="section-nav-track" role="tablist">
        {sections.map((section) => {
          const isActive = section.id === currentId;

          return (
            <button
              key={section.id}
              role="tab"
              aria-selected={isActive}
              className={[
                "section-nav-pill",
                isActive
                  ? "section-nav-pill-active bg-primary text-text-on-primary border-primary font-semibold"
                  : "bg-bg-raised text-text-secondary border-border-default hover:bg-bg-sunken",
              ].join(" ")}
              onClick={() => handleClick(section.id)}
              type="button"
            >
              <span className="section-nav-emoji" aria-hidden="true">
                {section.emoji}
              </span>
              {section.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export { SectionNav, type SectionNavProps, type Section };
