"use client";

import { useState } from "react";
import type { ProjectCard } from "./chapters";
import Reveal from "./Reveal";

/** Per-card stagger: 70ms per grid index, capped so late cards don't lag. */
const cardDelay = (i: number) => Math.min(i * 70, 400);

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
 * The one card skin shared by every chapter card (standard card + Pantera tile):
 * rounded-2xl on --paper-elev, hairline --line border, --shadow-card at rest;
 * hover lifts 2px with --line-strong border + --shadow-feature. Layout variants
 * only change what goes inside the shell, never the shell itself.
 */
const CARD_SHELL =
  "group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-elev)] shadow-[var(--shadow-card)] transition duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-feature)]";

/**
 * A single project card: framed thumbnail over title + descriptor. Only the
 * surrounding layout changes per employer; the shell comes from CARD_SHELL.
 */
function ProjectCardLink({ p }: { p: ProjectCard }) {
  return (
    <a
      href={p.href}
      target={p.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`${CARD_SHELL} block h-full min-w-0`}
    >
      {p.img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={p.img}
          alt={p.title}
          loading="lazy"
          className="m-2 aspect-[16/10] w-[calc(100%-1rem)] rounded-xl border border-[var(--line)] bg-[var(--paper-elev)] object-contain p-2 shadow-[var(--shadow-soft)]"
        />
      ) : (
        <div
          className={`aspect-[16/10] w-full bg-gradient-to-br ${p.thumb} flex items-end p-4`}
        >
          <span className="rounded border border-[var(--line)] bg-[var(--paper-elev)]/80 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--muted)] backdrop-blur">
            Thumbnail
          </span>
        </div>
      )}
      <div className="p-4">
        <h4 className="flex min-w-0 items-start gap-1.5 font-medium leading-snug text-[var(--ink)] group-hover:text-[var(--accent-strong)]">
          <span className="min-w-0 [overflow-wrap:anywhere]">{p.title}</span>
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[var(--muted)] transition-all duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[var(--accent-tint)] group-hover:text-[var(--accent)]">
            <ArrowUpRight />
          </span>
        </h4>
        <p className="mt-2 text-sm text-[var(--muted)]">{p.descriptor}</p>
      </div>
    </a>
  );
}

const VIEW_ALL: Record<
  ChapterVariant,
  { label: string; justify: string }
> = {
  pantera: { label: "View all Pantera work", justify: "sm:justify-end" },
  messari: { label: "View more Messari research", justify: "sm:justify-start" },
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
        className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--line-strong)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition-colors duration-150 ease-[var(--ease-out)] hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
      >
        {expanded ? "Show fewer" : label}
        <span
          aria-hidden
          className={`transition-transform duration-200 ease-[var(--ease-out)] ${
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
 * the title + descriptor overlaid. The shell (radius, border, hover lift) is the
 * shared CARD_SHELL; only the cover-image layout is tile-specific. `className`
 * carries the per-tile grid span + height so the surrounding layout can be
 * asymmetric.
 */
function PanteraTile({ p, className = "" }: { p: ProjectCard; className?: string }) {
  return (
    <a
      href={p.href}
      target={p.href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className={`${CARD_SHELL} relative flex flex-col justify-end ${className}`}
    >
      {p.img ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={p.img}
          alt={`${p.title} — cover`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-90"
        />
      ) : (
        <div
          aria-hidden
          className={`absolute inset-0 bg-gradient-to-br ${p.thumb}`}
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#1F1E1A] via-[#1F1E1A]/75 to-[#1F1E1A]/10"
      />

      <div className="relative z-10 p-4 sm:p-5">
        <h4 className="text-base font-bold tracking-tight text-white sm:text-lg">
          {p.title}
        </h4>
        <p className="mt-1.5 max-w-prose text-xs leading-snug text-white/80 sm:text-sm">
          {p.descriptor}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white">
          View
          <span
            aria-hidden
            className="transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
}

const PANTERA_INITIAL = 7;

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
          <Reveal
            key={p.title}
            /* flex so the tile stretches to the wrapper's min-height / row height */
            className={`flex ${SPAN_CLASS[spans[i]]} ${HEIGHT_CLASS[spans[i]]}`}
            delay={cardDelay(i)}
          >
            <PanteraTile p={p} className="flex-1" />
          </Reveal>
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
          {[featured, ...supporting].map((p, i) => (
            <Reveal key={p.title} className="min-w-0" delay={cardDelay(i)}>
              <ProjectCardLink p={p} />
            </Reveal>
          ))}
        </div>
      )}

      {variant === "mka" && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          <Reveal className="sm:col-start-1 sm:col-end-3 lg:col-start-1 lg:col-end-9 lg:row-start-1 lg:row-end-3">
            <ProjectCardLink p={featured} />
          </Reveal>
          {supporting[0] && (
            <Reveal
              className="sm:col-start-1 sm:col-end-2 lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-2"
              delay={cardDelay(1)}
            >
              <ProjectCardLink p={supporting[0]} />
            </Reveal>
          )}
          {supporting[1] && (
            <Reveal
              className="sm:col-start-2 sm:col-end-3 lg:col-start-9 lg:col-end-13 lg:row-start-2 lg:row-end-3"
              delay={cardDelay(2)}
            >
              <ProjectCardLink p={supporting[1]} />
            </Reveal>
          )}
        </div>
      )}

      {expanded && hasMore && (
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((p, i) => (
            <Reveal key={p.title} className="min-w-0" delay={cardDelay(i)}>
              <ProjectCardLink p={p} />
            </Reveal>
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
