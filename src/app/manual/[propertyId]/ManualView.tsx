"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import type { Id } from "../../../../convex/_generated/dataModel";
import { SearchBar } from "@/components/ui/SearchBar";
import { SectionNav } from "@/components/ui/SectionNav";
import { Badge } from "@/components/ui/Badge";
import { SitterLayout } from "@/components/layouts/SitterLayout";

// ── Types ────────────────────────────────────────────────────────────────────

interface SearchResult {
  type: "instruction" | "section" | "pet" | "location_card";
  id: string;
  snippet: string;
  sectionName: string;
  sectionId?: string;
  propertyId: string;
}

// ── Section instructions ─────────────────────────────────────────────────────

interface CachedInstruction {
  _id: string;
  text: string;
}

interface SectionInstructionsProps {
  sectionId: Id<"manualSections">;
  highlightedId: string | null;
  /** Report loaded instructions for offline/client-side search cache */
  onLoaded: (sectionId: string, instructions: CachedInstruction[]) => void;
}

function SectionInstructions({
  sectionId,
  highlightedId,
  onLoaded,
}: SectionInstructionsProps) {
  const instructions = useQuery(api.instructions.listBySection, { sectionId });

  // Cache instructions for offline search (one-shot via ref guard)
  const reportedRef = useRef(false);
  useEffect(() => {
    if (instructions && !reportedRef.current) {
      reportedRef.current = true;
      onLoaded(
        sectionId,
        instructions.map((i) => ({ _id: i._id, text: i.text })),
      );
    }
  }, [instructions, sectionId, onLoaded]);

  if (!instructions) {
    return (
      <div className="space-y-2 mt-4">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="h-14 bg-bg-sunken rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (instructions.length === 0) {
    return (
      <p className="font-body text-sm text-text-muted mt-4 text-center py-8">
        No instructions in this section yet.
      </p>
    );
  }

  return (
    <div className="space-y-2 mt-4">
      {instructions.map((inst) => {
        const isHighlighted = inst._id === highlightedId;
        return (
          <div
            key={inst._id}
            id={`instruction-${inst._id}`}
            className={[
              "bg-bg-raised rounded-lg border p-4 transition-[background-color,box-shadow] duration-250 ease-out",
              isHighlighted
                ? "border-primary shadow-[0_0_0_3px_var(--color-primary-subtle)] bg-primary-subtle"
                : "border-border-default",
            ].join(" ")}
          >
            <p className="font-body text-base text-text-primary leading-relaxed">
              {inst.text}
            </p>
            {inst.timeSlot !== "anytime" && (
              <div className="mt-2">
                <Badge variant="time">
                  {inst.timeSlot.charAt(0).toUpperCase() +
                    inst.timeSlot.slice(1)}
                </Badge>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Search result row ────────────────────────────────────────────────────────

interface ResultRowProps {
  result: SearchResult;
  query: string;
  onClick: () => void;
}

function ResultRow({ result, query, onClick }: ResultRowProps) {
  // Highlight matching text in snippet
  function highlightSnippet(text: string): React.ReactNode {
    if (!query.trim()) return text;
    const idx = text.toLowerCase().indexOf(query.toLowerCase().trim());
    if (idx === -1) return text;
    return (
      <>
        {text.slice(0, idx)}
        <span className="font-medium text-text-primary">
          {text.slice(idx, idx + query.trim().length)}
        </span>
        {text.slice(idx + query.trim().length)}
      </>
    );
  }

  const typeLabel: Record<SearchResult["type"], string> = {
    instruction: "Instruction",
    section: "Section",
    pet: "Pet",
    location_card: "Photo",
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-left bg-bg-raised border border-border-default rounded-lg p-4 hover:bg-bg-sunken transition-[background-color,box-shadow] duration-150 ease-out active:shadow-inner cursor-pointer"
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="font-body text-sm text-text-muted mb-1">
            {result.sectionName}
            <span className="mx-1.5 text-border-default">·</span>
            <span className="capitalize">{typeLabel[result.type]}</span>
          </p>
          <p className="font-body text-sm text-text-secondary leading-relaxed">
            {highlightSnippet(result.snippet)}
          </p>
        </div>
        <svg
          className="shrink-0 text-text-muted mt-0.5"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 3l5 5-5 5" />
        </svg>
      </div>
    </button>
  );
}

// ── Empty state ──────────────────────────────────────────────────────────────

function EmptyState({ query }: { query: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="w-12 h-12 rounded-full bg-bg-sunken flex items-center justify-center mb-4">
        <svg
          className="text-text-muted"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="10" cy="10" r="7" />
          <line x1="15" y1="15" x2="20" y2="20" />
        </svg>
      </div>
      <p className="font-body text-base text-text-secondary">
        No results for{" "}
        <span className="font-medium text-text-primary">
          &ldquo;{query}&rdquo;
        </span>
      </p>
      <p className="font-body text-sm text-text-muted mt-1">
        Try a different word or phrase
      </p>
    </div>
  );
}

// ── Main ManualView ──────────────────────────────────────────────────────────

interface ManualViewProps {
  propertyId: string;
}

export default function ManualView({ propertyId }: ManualViewProps) {
  const pid = propertyId as Id<"properties">;

  // ── Data ───────────────────────────────────────────────────────────────────
  const property = useQuery(api.properties.get, { propertyId: pid });
  const sections = useQuery(api.sections.listByProperty, { propertyId: pid });

  // ── Search state ───────────────────────────────────────────────────────────
  const [query, setQuery] = useState<string>(() => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("q") ?? "";
  });
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const [activeSection, setActiveSection] = useState<string>("");
  const [highlightedInstruction, setHighlightedInstruction] = useState<
    string | null
  >(null);

  // Offline/client-side search cache
  const cachedSections = useMemo(
    () => sections?.map((s) => ({ _id: s._id, title: s.title })) ?? [],
    [sections],
  );
  const [cachedInstructions, setCachedInstructions] = useState<
    Record<string, CachedInstruction[]>
  >({});

  // Called by SectionInstructions once per section load
  const handleSectionLoaded = useCallback(
    (sectionId: string, instructions: CachedInstruction[]) => {
      setCachedInstructions((prev) =>
        prev[sectionId] ? prev : { ...prev, [sectionId]: instructions },
      );
    },
    [],
  );

  // ── Debounce query → URL update ────────────────────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query), 300);
    return () => clearTimeout(t);
  }, [query]);

  // Sync query to URL (replaceState — no history entry)
  const prevQueryRef = useRef(query);
  useEffect(() => {
    if (query === prevQueryRef.current) return;
    prevQueryRef.current = query;
    const params = new URLSearchParams(window.location.search);
    if (query) {
      params.set("q", query);
    } else {
      params.delete("q");
    }
    const qs = params.toString();
    window.history.replaceState(null, "", qs ? `?${qs}` : window.location.pathname);
  }, [query]);

  // Restore query from URL on browser back/forward
  useEffect(() => {
    function onPopState() {
      const restored = new URLSearchParams(window.location.search).get("q") ?? "";
      setQuery(restored);
      prevQueryRef.current = restored;
    }
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  // Derive effective active section (fall back to first section if none selected)
  const effectiveActiveSection = activeSection || sections?.[0]?._id || "";

  // Scroll to highlighted instruction after section switches
  useEffect(() => {
    if (!highlightedInstruction) return;
    const el = document.getElementById(`instruction-${highlightedInstruction}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      // Clear highlight after a short pause
      const t = setTimeout(() => setHighlightedInstruction(null), 2500);
      return () => clearTimeout(t);
    }
  }, [highlightedInstruction, effectiveActiveSection]);

  // ── Convex search ──────────────────────────────────────────────────────────
  const convexResults = useQuery(
    api.search.searchManual,
    debouncedQuery.trim() ? { propertyId: pid, query: debouncedQuery.trim() } : "skip",
  );

  // ── Client-side offline fallback (substring match on cached state) ──────────
  const clientResults = useMemo<SearchResult[]>(() => {
    if (!debouncedQuery.trim() || convexResults !== undefined) return [];
    const q = debouncedQuery.toLowerCase().trim();
    const out: SearchResult[] = [];
    for (const section of cachedSections) {
      if (section.title.toLowerCase().includes(q)) {
        out.push({
          type: "section",
          id: section._id,
          snippet: section.title,
          sectionName: section.title,
          sectionId: section._id,
          propertyId,
        });
      }
    }
    for (const [secId, instructions] of Object.entries(cachedInstructions)) {
      const sectionTitle =
        cachedSections.find((s) => s._id === secId)?.title ?? "";
      for (const inst of instructions) {
        if (inst.text.toLowerCase().includes(q)) {
          const snippet =
            inst.text.length > 120 ? inst.text.slice(0, 120) + "…" : inst.text;
          out.push({
            type: "instruction",
            id: inst._id,
            snippet,
            sectionName: sectionTitle,
            sectionId: secId,
            propertyId,
          });
        }
      }
    }
    return out;
  }, [debouncedQuery, convexResults, cachedSections, cachedInstructions, propertyId]);

  const results: SearchResult[] | null = debouncedQuery.trim()
    ? (convexResults ?? clientResults)
    : null;
  const isSearchLoading =
    debouncedQuery.trim() &&
    convexResults === undefined &&
    clientResults.length === 0;

  // ── Result tap → jump to instruction ──────────────────────────────────────
  function handleResultClick(result: SearchResult) {
    // Navigate to target section
    const targetSectionId = result.sectionId ?? result.id;
    setActiveSection(targetSectionId);

    // For instruction results, highlight the specific instruction
    if (result.type === "instruction") {
      setHighlightedInstruction(result.id);
    }

    // Clear search (adds a history entry via pushState so back works)
    const params = new URLSearchParams(window.location.search);
    params.delete("q");
    const qs = params.toString();
    window.history.pushState(
      null,
      "",
      qs ? `?${qs}` : window.location.pathname,
    );
    setQuery("");
    prevQueryRef.current = "";
    setDebouncedQuery("");
  }

  // ── SectionNav items ───────────────────────────────────────────────────────
  const navSections =
    sections?.map((s) => ({
      id: s._id,
      emoji: s.icon,
      label: s.title,
    })) ?? [];

  const activeSectionData = sections?.find((s) => s._id === effectiveActiveSection);

  // ── Loading / not found states ─────────────────────────────────────────────
  if (property === null) {
    return (
      <SitterLayout>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="font-body text-lg text-text-secondary">
            Manual not found
          </p>
          <p className="font-body text-sm text-text-muted mt-2">
            This link may be invalid or the manual has been removed.
          </p>
        </div>
      </SitterLayout>
    );
  }

  return (
    <SitterLayout activeTab="manual">
      {/* Property header */}
      <div className="mb-5">
        <p className="font-body text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">
          Home Manual
        </p>
        <h1 className="font-display text-2xl text-text-primary">
          {property ? property.name : "Loading…"}
        </h1>
        {property?.address && (
          <p className="font-body text-sm text-text-muted mt-1">
            {property.address}
          </p>
        )}
      </div>

      {/* Search bar */}
      <SearchBar
        placeholder="Search manual…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Search manual"
      />

      {/* Search results */}
      {debouncedQuery.trim() ? (
        <div className="mt-4">
          {isSearchLoading || !results ? (
            // Loading
            <div className="space-y-2">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-16 bg-bg-sunken rounded-lg animate-pulse" />
              ))}
            </div>
          ) : results.length === 0 ? (
            <EmptyState query={debouncedQuery} />
          ) : (
            <div className="space-y-2">
              {results.map((result) => (
                <ResultRow
                  key={`${result.type}-${result.id}`}
                  result={result}
                  query={debouncedQuery}
                  onClick={() => handleResultClick(result)}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Section navigation */}
          {navSections.length > 0 && (
            <div className="mt-5">
              <SectionNav
                sections={navSections}
                activeId={effectiveActiveSection}
                onSectionChange={setActiveSection}
              />
            </div>
          )}

          {/* Current section instructions */}
          {effectiveActiveSection && (
            <div className="mt-2">
              {activeSectionData && (
                <h2 className="font-body text-base font-semibold text-text-secondary mb-1">
                  {activeSectionData.icon} {activeSectionData.title}
                </h2>
              )}
              <SectionInstructions
                key={effectiveActiveSection}
                sectionId={effectiveActiveSection as Id<"manualSections">}
                highlightedId={highlightedInstruction}
                onLoaded={handleSectionLoaded}
              />
            </div>
          )}

          {!sections && (
            <div className="mt-5 space-y-2">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="h-10 bg-bg-sunken rounded-pill animate-pulse"
                />
              ))}
            </div>
          )}

          {sections && sections.length === 0 && (
            <div className="mt-8 text-center">
              <p className="font-body text-base text-text-secondary">
                No sections in this manual yet.
              </p>
            </div>
          )}
        </>
      )}
    </SitterLayout>
  );
}
