"use client";

import { useState } from "react";
import type { ProjectCard } from "./chapters";

export type ChapterVariant = "pantera" | "messari" | "mka";

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-4 w-4"
    >
      <path d="M7 17 17 7M10 7h7v7" />
    </svg>
  );
}

/**
 * A single project card. This markup — border, hover states, image treatment,
 * title + descriptor typography — is preserved verbatim from the previous
 * carousel implementation. Only the surrounding layout changes per employer.
 */
function ProjectCardLink({ p }: { p: ProjectCard }) {
  return (
    <a
      href={p.href}
      target={p.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group block h-full min-w-0 overflow-hidden rounded-lg border border-[var(--bg-elev)] bg-[var(--bg-elev)]/40 transition hover:border-[var(--accent)] hover:bg-[var(--bg-elev)]/70"
    >
      {p.img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="m-2 aspect-[16/10] w-[calc(100%-1rem)] rounded-md border border-[var(--bg-elev)] bg-[var(--bg-elev)] object-contain p-2 shadow-inner"
        />
      ) : (
        <div
          className={`aspect-[16/10] w-full bg-gradient-to-br ${p.thumb} flex items-end p-4`}
        >
          <span className="rounded bg-black/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--accent)] backdrop-blur">
            Thumbnail
          </span>
        </div>
      )}
      <div className="p-4">
        <h4 className="flex min-w-0 items-start gap-1.5 font-medium leading-snug text-[var(--slate-lightest)] group-hover:text-[var(--accent)]">
          <span className="min-w-0 [overflow-wrap:anywhere]">{p.title}</span>
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[var(--slate)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[var(--accent-tint)] group-hover:text-[var(--accent)]">
            <ArrowUpRight />
          </span>
        </h4>
        <p className="mt-2 text-sm text-[var(--slate)]">{p.descriptor}</p>
      </div>
    </a>
  );
}

const VIEW_ALL: Record<
  ChapterVariant,
  { label: string; justify: string }
> = {
  pantera: { label: "View all Pantera work", justify: "sm:justify-end" },
  messari: { label: "View all Messari research", justify: "sm:justify-start" },
  mka: { label: "View all MKA projects", justify: "sm:justify-center" },
};

/** Shared pill toggle used by both the tile expander and the messari/mka "View all". */
function ExpandToggle({
  expanded,
  onToggle,
  label,
  justify,
}: {
  expanded: boolean;
  onToggle: () => void;
  label: string;
  justify: string;
}) {
  return (
    <div className={`mt-8 flex justify-center ${justify}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/[0.06] px-4 py-2 text-sm font-semibold text-[var(--slate-light)] transition-colors hover:border-[var(--accent)]/60 hover:text-[var(--accent)]"
      >
        {expanded ? "Show fewer" : label}
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
  );
}

/**
 * Editorial cover tile — image bleeds edge-to-edge under a bottom-up scrim with
 * the title + descriptor overlaid. Ported verbatim from the former "Things I've
 * shipped" Selected Work grid so the Pantera section reuses that exact treatment
 * (rounded-2xl frame, lift-on-hover, image zoom, blue scrim). `className` carries
 * the per-tile grid span + height so the surrounding layout can be asymmetric.
 */
function PanteraTile({ p, className = "" }: { p: ProjectCard; className?: string }) {
  return (
    <a
      href={p.href}
      target={p.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-[var(--accent)]/20 bg-[var(--bg-elev)] shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/55 hover:shadow-[0_22px_55px_rgba(59,130,246,0.20)] ${className}`}
    >
      {p.img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={p.img}
          alt={`${p.title} — cover`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.04]"
        />
      ) : (
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${p.thumb}`}
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#050c1c] via-[#050c1c]/75 to-[#050c1c]/10"
      />

      <div className="relative z-10 p-4 sm:p-5">
        <h4 className="text-base font-bold tracking-tight text-white sm:text-lg">
          {p.title}
        </h4>
        <p className="mt-1.5 max-w-prose text-xs leading-snug text-[var(--slate-light)] sm:text-sm">
          {p.descriptor}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
          View
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
}

const PANTERA_INITIAL = 6;

// Static class maps so Tailwind's JIT can see every span/height literal at build
// time (dynamic `lg:col-span-${n}` strings would be purged).
const SPAN_CLASS: Record<number, string> = {
  2: "lg:col-span-2",
  4: "lg:col-span-4",
  6: "lg:col-span-6",
};
// Larger tiles read taller; within a row grid stretches all tiles to the tallest,
// so the wide "featured" tile drives an editorial, uneven rhythm row to row.
const HEIGHT_CLASS: Record<number, string> = {
  2: "min-h-[14rem]",
  4: "min-h-[16rem] sm:min-h-[19rem]",
  6: "min-h-[15rem] sm:min-h-[17rem]",
};

/**
 * Deterministic asymmetric column spans over a 6-col desktop grid. A [4,2,2,4]
 * weight cycle fills every pair of rows exactly (4+2, 2+4), giving a zigzag of
 * wide + narrow tiles. Any final tile that would leave a partial row is widened
 * to fill it, so both the 6-tile and 11-tile states tile cleanly with no gaps.
 */
function computePanteraSpans(n: number): number[] {
  const cycle = [4, 2, 2, 4];
  const spans: number[] = [];
  let rowFill = 0;
  for (let i = 0; i < n; i++) {
    let span = cycle[i % cycle.length];
    if (rowFill + span > 6) span = 6 - rowFill; // never overflow a row
    if (i === n - 1 && rowFill + span < 6) span = 6 - rowFill; // fill trailing row
    spans.push(span);
    rowFill = (rowFill + span) % 6;
  }
  return spans;
}

/**
 * Pantera projects rendered as an asymmetric editorial tile grid: 6 tiles by
 * default, with a single "View all Pantera work" / "Show fewer" toggle revealing
 * the rest. Wide featured tiles alternate with narrower supporting tiles on
 * desktop; the grid collapses to 2 cols (tablet) and 1 col (mobile).
 */
function PanteraTiles({ projects }: { projects: ProjectCard[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? projects : projects.slice(0, PANTERA_INITIAL);
  const hasMore = projects.length > PANTERA_INITIAL;
  const { label, justify } = VIEW_ALL.pantera;
  const spans = computePanteraSpans(visible.length);

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {visible.map((p, i) => (
          <PanteraTile
            key={p.title}
            p={p}
            className={`${SPAN_CLASS[spans[i]]} ${HEIGHT_CLASS[spans[i]]}`}
          />
        ))}
      </div>
      {hasMore && (
        <ExpandToggle
          expanded={expanded}
          onToggle={() => setExpanded((v) => !v)}
          label={label}
          justify={justify}
        />
      )}
    </div>
  );
}

/**
 * Hero layout for the first three projects of an employer, distinct per variant:
 *  - pantera: full-width featured over two supporting halves (12-col grid)
 *  - messari: three equal, evenly distributed columns
 *  - mka: one large featured beside two stacked supporting (asymmetric 12-col)
 * The remaining projects reveal inline as a uniform grid via "View all".
 */
export default function ChapterProjects({
  projects,
  variant,
}: {
  projects: ProjectCard[];
  variant: ChapterVariant;
}) {
  // Pantera uses the ported "Selected Work" tile grid (6-then-expand).
  if (variant === "pantera") {
    return <PanteraTiles projects={projects} />;
  }

  return <HeroChapter projects={projects} variant={variant} />;
}

/**
 * Featured/supporting hero layout for Messari and MKA (unchanged): three lead
 * projects laid out per variant, with the remainder revealed inline via "View all".
 */
function HeroChapter({
  projects,
  variant,
}: {
  projects: ProjectCard[];
  variant: Exclude<ChapterVariant, "pantera">;
}) {
  const [expanded, setExpanded] = useState(false);

  const featured = projects[0];
  const supporting = projects.slice(1, 3);
  const rest = projects.slice(3);
  const hasMore = rest.length > 0;
  const { label, justify } = VIEW_ALL[variant];

  return (
    <div>
      {variant === "messari" && (
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[featured, ...supporting].map((p) => (
            <div key={p.title} className="min-w-0">
              <ProjectCardLink p={p} />
            </div>
          ))}
        </div>
      )}

      {variant === "mka" && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          <div className="sm:col-start-1 sm:col-end-3 lg:col-start-1 lg:col-end-9 lg:row-start-1 lg:row-end-3">
            <ProjectCardLink p={featured} />
          </div>
          {supporting[0] && (
            <div className="sm:col-start-1 sm:col-end-2 lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-2">
              <ProjectCardLink p={supporting[0]} />
            </div>
          )}
          {supporting[1] && (
            <div className="sm:col-start-2 sm:col-end-3 lg:col-start-9 lg:col-end-13 lg:row-start-2 lg:row-end-3">
              <ProjectCardLink p={supporting[1]} />
            </div>
          )}
        </div>
      )}

      {expanded && hasMore && (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p) => (
            <div key={p.title} className="min-w-0">
              <ProjectCardLink p={p} />
            </div>
          ))}
        </div>
      )}

      {hasMore && (
        <ExpandToggle
          expanded={expanded}
          onToggle={() => setExpanded((v) => !v)}
          label={label}
          justify={justify}
        />
      )}
    </div>
  );
}
