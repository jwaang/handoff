"use client";

import { useState, type ReactNode, type HTMLAttributes } from "react";
import { BottomNav, type TabId } from "@/components/ui/BottomNav";

type CreatorNavId = "property" | "trips" | "settings";

interface CreatorLayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** Main page content */
  children: ReactNode;
  /** Currently active sidebar nav item */
  activeNav?: CreatorNavId;
  /** Called when sidebar nav item changes */
  onNavChange?: (nav: CreatorNavId) => void;
  /** Active bottom nav tab (mobile) */
  activeTab?: TabId;
  /** Called when bottom nav tab changes (mobile) */
  onTabChange?: (tab: TabId) => void;
}

const sidebarItems: { id: CreatorNavId; label: string; icon: ReactNode }[] = [
  {
    id: "property",
    label: "My Property",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: "trips",
    label: "Trips",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

function CreatorLayout({
  children,
  activeNav,
  onNavChange,
  activeTab,
  onTabChange,
  className = "",
  ...props
}: CreatorLayoutProps) {
  const [internalNav, setInternalNav] = useState<CreatorNavId>(
    activeNav ?? "property",
  );

  const currentNav = activeNav ?? internalNav;

  function handleNavChange(nav: CreatorNavId) {
    if (!activeNav) setInternalNav(nav);
    onNavChange?.(nav);
  }

  return (
    <div
      className={["creator-layout", className].filter(Boolean).join(" ")}
      {...props}
    >
      {/* Desktop sidebar */}
      <aside className="creator-sidebar" aria-label="Creator navigation">
        <div className="creator-sidebar-header">
          <span className="creator-sidebar-logo">Handoff</span>
        </div>
        <nav className="creator-sidebar-nav">
          {sidebarItems.map((item) => {
            const isActive = item.id === currentNav;
            return (
              <button
                key={item.id}
                type="button"
                className={[
                  "creator-sidebar-item",
                  isActive ? "creator-sidebar-item-active" : "",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
                onClick={() => handleNavChange(item.id)}
              >
                <span className="creator-sidebar-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="creator-sidebar-label">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main content area */}
      <main className="creator-main">
        <div className="creator-content">{children}</div>
      </main>

      {/* Mobile bottom nav */}
      <div className="creator-bottom-nav">
        <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
      </div>
    </div>
  );
}

export { CreatorLayout, type CreatorLayoutProps, type CreatorNavId };
