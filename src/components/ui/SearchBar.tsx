"use client";

import { type InputHTMLAttributes, forwardRef } from "react";

type SearchBarProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  function SearchBar({ className = "", ...props }, ref) {
    return (
      <div className="search-bar-wrapper">
        <svg
          className="search-bar-icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="5.5" />
          <line x1="12.5" y1="12.5" x2="16" y2="16" />
        </svg>
        <input
          ref={ref}
          type="search"
          className={["search-bar-input", className].filter(Boolean).join(" ")}
          {...props}
        />
      </div>
    );
  },
);

export { SearchBar, type SearchBarProps };
