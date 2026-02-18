"use client";

import { type ReactNode, type HTMLAttributes } from "react";
import { BottomNav, type TabId } from "@/components/ui/BottomNav";

interface SitterLayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** Main page content */
  children: ReactNode;
  /** Currently active bottom nav tab */
  activeTab?: TabId;
  /** Called when bottom nav tab changes */
  onTabChange?: (tab: TabId) => void;
}

function SitterLayout({
  children,
  activeTab,
  onTabChange,
  className = "",
  ...props
}: SitterLayoutProps) {
  return (
    <div
      className={["sitter-layout", className].filter(Boolean).join(" ")}
      {...props}
    >
      <main className="sitter-main">
        <div className="sitter-content">{children}</div>
      </main>

      <BottomNav activeTab={activeTab} onTabChange={onTabChange} />
    </div>
  );
}

export { SitterLayout, type SitterLayoutProps };
