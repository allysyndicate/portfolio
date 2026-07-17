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
  const [expanded, setExpanded] = useState(false);

  const featured = projects[0];
  const supporting = projects.slice(1, 3);
  const rest = projects.slice(3);
  const hasMore = rest.length > 0;
  const { label, justify } = VIEW_ALL[variant];

  return (
    <div>
      {variant === "pantera" && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-x-6 md:gap-y-8">
          <div className="md:col-span-12">
            <ProjectCardLink p={featured} />
          </div>
          {supporting.map((p) => (
            <div key={p.title} className="md:col-span-6">
              <ProjectCardLink p={p} />
            </div>
          ))}
        </div>
      )}

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
        <div className={`mt-8 flex justify-center ${justify}`}>
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
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
      )}
    </div>
  );
}
