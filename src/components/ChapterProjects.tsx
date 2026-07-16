"use client";

import { useState } from "react";
import Carousel from "./Carousel";
import type { ProjectCard } from "./chapters";

const PREVIEW_COUNT = 3;

/**
 * Progressive disclosure for an employer's project list: shows the three
 * strongest cards by default and reveals the rest inline via a "View all"
 * control, so a chapter with ~10 items no longer dominates the page.
 */
export default function ChapterProjects({
  projects,
  label,
}: {
  projects: ProjectCard[];
  label: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = projects.length > PREVIEW_COUNT;
  const visible = expanded ? projects : projects.slice(0, PREVIEW_COUNT);

  return (
    <div>
      {/* Remount the carousel when the visible set changes so its internal
          scroll/edge state resyncs to the new card count. */}
      <Carousel
        key={expanded ? "all" : "preview"}
        projects={visible}
        label={label}
      />
      {hasMore && (
        <div className="mt-3 flex justify-center">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/[0.06] px-4 py-2 text-sm font-semibold text-[var(--slate-light)] transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
          >
            {expanded
              ? "Show fewer"
              : `View all ${projects.length} projects`}
            <span
              aria-hidden
              className={`transition-transform ${
                expanded
                  ? "-rotate-90 group-hover:-translate-y-0.5"
                  : "group-hover:translate-x-0.5"
              }`}
            >
              →
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
