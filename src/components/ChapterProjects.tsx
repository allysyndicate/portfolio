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
 * The one card skin shared by every chapter card: rounded-2xl on --paper-elev,
 * hairline --line border, --shadow-card at rest; hover lifts 2px with
 * --line-strong border + --shadow-feature. Layout variants only change how the
 * cards are arranged, never the card itself.
 */
const CARD_SHELL =
  "group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-elev)] shadow-[var(--shadow-card)] transition duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-feature)]";

/**
 * A single project card: framed thumbnail over title + descriptor. The same card
 * is used by every chapter (Pantera, Messari, MKA); only the surrounding grid
 * changes per employer.
 */
function ProjectCardLink({
  p,
  featured = false,
}: {
  p: ProjectCard;
  /** Featured cards use a taller image frame so near-square charts show fully. */
  featured?: boolean;
}) {
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
          className={`m-2 w-[calc(100%-1rem)] rounded-xl border border-[var(--line)] bg-[var(--paper-elev)] object-contain p-2 shadow-[var(--shadow-soft)] ${
            featured ? "aspect-[6/5]" : "aspect-[16/10]"
          }`}
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

/** Shared pill toggle used by every "View all" / "Show fewer" expander. */
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

/** Static column placements for the three cards in the row beneath the feature. */
const UNDER_COL = ["lg:col-start-1", "lg:col-start-2", "lg:col-start-3"];

/**
 * Pantera layout: a large featured card on the right with two small cards stacked
 * to its left (mirroring the MKA feature block), then three small cards in a row
 * beneath, and a "View all Pantera work" expander revealing the rest in a uniform
 * three-column grid. Uses the same framed card as Messari and MKA.
 */
function PanteraFeatureGrid({ projects }: { projects: ProjectCard[] }) {
  const [expanded, setExpanded] = useState(false);

  const featured = projects[0];
  const left = projects.slice(1, 3); // two stacked to the left of the feature
  const under = projects.slice(3, 6); // three in a row beneath
  const rest = projects.slice(6);
  const hasMore = rest.length > 0;
  const { label, justify } = VIEW_ALL.pantera;

  return (
    <div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Large featured card, right side, spanning both top rows. */}
        <Reveal className="sm:col-span-2 lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:row-end-3">
          <ProjectCardLink p={featured} featured />
        </Reveal>
        {/* Two small cards stacked to the left of the feature. */}
        {left.map((p, i) => (
          <Reveal
            key={p.title}
            className={`min-w-0 lg:col-start-1 ${
              i === 0 ? "lg:row-start-1" : "lg:row-start-2"
            }`}
            delay={cardDelay(i + 1)}
          >
            <ProjectCardLink p={p} />
          </Reveal>
        ))}
        {/* Three small cards in a row beneath everything. */}
        {under.map((p, i) => (
          <Reveal
            key={p.title}
            className={`min-w-0 lg:row-start-3 ${UNDER_COL[i]}`}
            delay={cardDelay(i + 3)}
          >
            <ProjectCardLink p={p} />
          </Reveal>
        ))}
      </div>

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

export default function ChapterProjects({
  projects,
  variant,
}: {
  projects: ProjectCard[];
  variant: ChapterVariant;
}) {
  if (variant === "pantera") {
    return <PanteraFeatureGrid projects={projects} />;
  }
  return <HeroChapter projects={projects} variant={variant} />;
}

/**
 * Featured/supporting hero layout for Messari and MKA: three lead projects laid
 * out per variant, with the remainder revealed inline via "View all".
 *  - messari: three equal, evenly distributed columns
 *  - mka: one large featured beside two stacked supporting (asymmetric 12-col)
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
