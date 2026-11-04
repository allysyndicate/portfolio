"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { socials, telegram } from "./socials";
import { resumeHref } from "./resume-data";

const heroSocials = [...socials, telegram] as const;

type Stage = {
  id: string;
  num: string;
  label: string;
  title: string;
  body: string;
  proof: string;
  href?: string;
};

const stages: Stage[] = [
  {
    id: "education",
    num: "00",
    label: "Education",
    title: "Civil & structural engineering",
    body: "B.S. and M.S. in Civil & Environmental Engineering from the University of Illinois Urbana-Champaign.",
    proof: "Structural engineering · Business minor",
  },
  {
    id: "engineering",
    num: "01",
    label: "Engineering",
    title: "Structural engineer",
    body: "Built nonlinear structural models, analyzed simulation results, and developed firm-wide Python and Excel VBA tools.",
    proof: "7M+ square feet designed",
  },
  {
    id: "messari",
    num: "02",
    label: "Messari",
    title: "Research analyst",
    body: "Analyzed acquisition, retention, monetization, and user behavior. Published 50+ reports and built the SQL and Python tools behind them.",
    proof: "Cohort analysis · Network analysis",
  },
  {
    id: "pantera",
    num: "03",
    label: "Pantera Capital",
    title: "Research engineer",
    body: "Produced market research and built onchain data pipelines, dashboards, and automation tools for the investment team.",
    proof: "2024–2026",
  },
  {
    id: "syndicate",
    num: "04",
    label: "Syndicate",
    title: "Technical cofounder",
    body: "Designed and built a local-first desktop app for managing teams of AI agents across multiple model providers.",
    proof: "Sole engineer · Gated public beta",
    href: "https://usesyndicate.org",
  },
];

function Photo({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative ${compact ? "w-20" : "mx-auto w-full max-w-[18rem]"}`}>
      {/* Soft accent glow behind the photo. */}
      <div
        aria-hidden
        className={compact ? "hidden" : "absolute -inset-6 -z-20 rounded-[2.25rem] bg-[var(--accent-tint)] blur-2xl"}
      />
      {/* Offset accent frame for a layered, editorial card feel. */}
      <div
        aria-hidden
        className={compact ? "hidden" : "absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[1.75rem] border border-[var(--line)]"}
      />
      <div className={`overflow-hidden ring-1 ring-[var(--line)] ${compact ? "rounded-2xl shadow-[var(--shadow-soft)]" : "rounded-3xl shadow-[var(--shadow-feature)]"}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/ally-zach.jpg"
          alt="Ally Zach"
          className={`w-full object-cover object-center ${compact ? "aspect-square" : "aspect-[4/5]"}`}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 ring-1 ring-inset ring-[var(--line)] ${compact ? "rounded-2xl" : "rounded-3xl"}`}
        />
      </div>
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-4">
      {heroSocials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${s.label} · ${s.handle}`}
          title={`${s.label} · ${s.handle}`}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--paper-elev)] text-[var(--body)] shadow-[var(--shadow-soft)] transition-all duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-tint)] hover:text-[var(--accent)]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
            {s.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}

function TimelineArrow({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-4 w-4"
    >
      <path d={direction === "previous" ? "M19 12H5m7-7-7 7 7 7" : "M5 12h14m-7-7 7 7-7 7"} />
    </svg>
  );
}

function StageProof({ stage }: { stage: Stage }) {
  return stage.href ? (
    <a
      href={stage.href}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-[var(--accent-strong)] hover:underline hover:underline-offset-4"
    >
      {stage.proof} <span aria-hidden>↗</span>
    </a>
  ) : (
    stage.proof
  );
}

function MobileTimeline() {
  return (
    <ol aria-label="Career timeline" className="mt-5 sm:hidden">
      {stages.map((stage, i) => (
        <li key={stage.id} className="relative pl-9">
          {i < stages.length - 1 && (
            <span aria-hidden className="absolute top-7 -bottom-7 left-[11px] w-px bg-[var(--accent)]/25" />
          )}
          <span
            aria-hidden
            className="absolute top-4 left-0 grid size-6 place-items-center rounded-full border border-[var(--line-strong)] bg-[var(--paper-subtle)] text-[0.625rem] font-semibold tabular-nums text-[var(--accent-strong)]"
          >
            {stage.num}
          </span>
          <details name="career-milestones" className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 rounded-md py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] [&::-webkit-details-marker]:hidden">
              <span className="min-w-0">
                <span className="block text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {stage.label}
                </span>
                <span className="mt-0.5 block text-sm font-bold leading-snug text-[var(--ink)]">
                  {stage.title}
                </span>
              </span>
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden className="size-5 shrink-0 text-[var(--accent-strong)]">
                <path d="M5 10h10" />
                <path d="M10 5v10" className="group-open:hidden" />
              </svg>
            </summary>
            <div className="space-y-2 pr-6 pb-4 text-sm leading-relaxed text-[var(--body)]">
              <p>{stage.body}</p>
              <p className="text-xs font-semibold text-[var(--accent-strong)]">
                <StageProof stage={stage} />
              </p>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}

function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollBack, setCanScrollBack] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(false);

  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;

    const update = () => {
      setCanScrollBack(scroller.scrollLeft > 2);
      setCanScrollForward(
        scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 2,
      );
    };
    update();
    scroller.addEventListener("scroll", update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(scroller);
    if (scroller.firstElementChild) observer.observe(scroller.firstElementChild);

    return () => {
      scroller.removeEventListener("scroll", update);
      observer.disconnect();
    };
  }, []);

  const move = (direction: number) => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const cardWidth = scroller.querySelector("li")?.getBoundingClientRect().width ?? 240;
    scroller.scrollBy({
      left: direction * cardWidth,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };

  const controlClass =
    "inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--body)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--paper-elev)] hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] disabled:cursor-default disabled:opacity-25";

  return (
    <div>
      <div className="flex items-end justify-between gap-8">
        <div>
          <p className="text-[0.625rem] font-semibold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
            Experience
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-normal text-[var(--ink)] sm:text-3xl">
            From structures <span className="font-semibold text-[var(--accent-strong)]">to systems.</span>
          </h2>
        </div>
        <a
          href={resumeHref}
          className="hidden shrink-0 pb-1 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent-strong)] xl:inline"
        >
          Full background →
        </a>
      </div>

      <MobileTimeline />

      <div
        ref={scrollRef}
        id="career-timeline"
        role="region"
        aria-label="Career timeline"
        tabIndex={0}
        className="mt-6 hidden snap-x snap-proximity overflow-x-auto overscroll-x-contain rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:block"
      >
        <ol className="grid grid-flow-col auto-cols-[minmax(16rem,1fr)] xl:grid-flow-row xl:grid-cols-5">
          {stages.map((stage, i) => (
            <li
              key={stage.id}
              className="relative flex min-w-0 snap-start flex-col rounded-2xl px-4 py-4 xl:px-5"
            >
              <span
                aria-hidden
                className="text-[2.5rem] font-light leading-none tracking-[-0.06em] text-[var(--accent-strong)]/30"
              >
                {stage.num}
              </span>
              <div aria-hidden className="relative mt-4 mb-5 flex h-3 items-center">
                {i < stages.length - 1 && (
                  <span className="absolute top-[5px] -right-[2.375rem] left-1.5 h-px bg-[var(--accent)]/25 xl:-right-[2.875rem]" />
                )}
                <span
                  className="relative h-3 w-3 rounded-full border-2 border-[var(--paper-tint)] bg-[var(--accent)]"
                />
              </div>
              <div className="flex min-h-[12rem] flex-1 flex-col">
                <p className="text-[0.625rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                  {stage.label}
                </p>
                <h3 className="mt-2 min-h-[2.75rem] text-[1.0625rem] font-bold leading-[1.3] tracking-tight text-[var(--ink)]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-[1.65] text-[var(--body)]">
                  {stage.body}
                </p>
                <div className="mt-auto pt-5">
                  <p className="min-h-12 border-t border-[var(--line)] pt-3 text-[0.6875rem] leading-[1.6] text-[var(--muted)]">
                    <StageProof stage={stage} />
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-2 flex items-center justify-between gap-4 border-t border-[var(--line)] pt-2 sm:mt-4 sm:pt-4 xl:hidden">
        <a href={resumeHref} className="inline-flex min-h-11 items-center text-xs font-medium text-[var(--muted)] hover:text-[var(--accent-strong)] sm:min-h-0">
          Full background →
        </a>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            aria-label="Previous career milestone"
            aria-controls="career-timeline"
            disabled={!canScrollBack}
            onClick={() => move(-1)}
            className={controlClass}
          >
            <TimelineArrow direction="previous" />
          </button>
          <button
            type="button"
            aria-label="Next career milestone"
            aria-controls="career-timeline"
            disabled={!canScrollForward}
            onClick={() => move(1)}
            className={controlClass}
          >
            <TimelineArrow direction="next" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      aria-label="Introduction"
      className="relative scroll-mt-24 pt-24 pb-0 sm:pt-28"
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-x-14">
        <div className="max-w-[680px]">
          <div className="flex items-start justify-between gap-6">
            <div>
              <Reveal
                as="h1"
                className="text-[clamp(2rem,10vw,2.5rem)] font-bold leading-[1.1] tracking-tight text-[var(--ink)] sm:text-6xl lg:text-7xl"
              >
                Ally Zach
              </Reveal>
              <Reveal
                as="p"
                delay={70}
                className="mt-2 text-sm font-semibold leading-relaxed text-[var(--accent-strong)] sm:text-xl"
              >
                Research engineer · Data scientist
              </Reveal>
            </div>
            <div className="shrink-0 lg:hidden">
              <Photo compact />
            </div>
          </div>

          <Reveal
            delay={140}
            className="mt-6 space-y-4 text-base leading-relaxed text-[var(--body)] sm:text-lg"
          >
            <p>
              I’m a research engineer studying user behavior, product adoption,
              and market structure through statistical modeling and software
              development. At Pantera Capital and Messari, I built SQL and Python
              pipelines, developed measurement frameworks, and turned complex
              data into research and public analytics tools.
            </p>
            <p>
              I’m also the technical cofounder and sole engineer of Syndicate, a
              desktop application for coordinating AI agents.
            </p>
          </Reveal>

          <Reveal delay={210} className="mt-5 flex items-center gap-4 text-sm font-semibold sm:mt-7">
            <a
              href="#pantera"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm text-[var(--accent-strong)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:min-h-0"
            >
              View work <span aria-hidden>↓</span>
            </a>
            <span aria-hidden className="text-[var(--line-strong)]">·</span>
            <a
              href={resumeHref}
              className="inline-flex min-h-11 items-center rounded-sm text-[var(--ink)] hover:text-[var(--accent-strong)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:min-h-0"
            >
              Resume
            </a>
          </Reveal>
        </div>

        <Reveal delay={90} className="hidden lg:block">
          <Photo />
          <div className="mt-5">
            <SocialLinks />
          </div>
        </Reveal>
      </div>

      {/* A compact career path keeps the work within easy reach. */}
      <div
        id="how-i-got-here"
        className="band-tint relative mx-[calc(50%-50vw)] mt-8 scroll-mt-24 sm:mt-12 md:mt-16 lg:mt-12"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 md:px-10">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
