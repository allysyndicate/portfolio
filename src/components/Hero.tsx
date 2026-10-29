"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { socials, telegram } from "./socials";
import { resumeHref } from "./resume-data";

const supporting =
  "I started out designing high-rises. Now I build data systems, statistical models, and AI software. At Pantera Capital and Messari, I combined research and engineering to investigate financial markets, understand user behavior, and build tools that automate complex workflows.";

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
    body: "Designed high-rise buildings for seismic and wind loads. Built Python and Excel/VBA tools to automate engineering workflows.",
    proof: "7M+ square feet designed · Tools adopted firm-wide",
  },
  {
    id: "messari",
    num: "02",
    label: "Messari",
    title: "Research analyst",
    body: "Researched crypto markets, user behavior, and protocol economics. Published reports explaining how networks work and how people use them.",
    proof: "50+ published research reports",
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
          <h2 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-[var(--ink)] sm:text-[1.875rem]">
            From structures <span className="text-[var(--accent-strong)]">to systems.</span>
          </h2>
        </div>
        <a
          href={resumeHref}
          className="hidden shrink-0 pb-1 text-xs font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent-strong)] xl:inline"
        >
          Full background →
        </a>
      </div>

      <div
        ref={scrollRef}
        id="career-timeline"
        role="region"
        aria-label="Career timeline"
        tabIndex={0}
        className="mt-6 snap-x snap-proximity overflow-x-auto overscroll-x-contain rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
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
                <h3 className="mt-2 min-h-[2.75rem] text-[1.0625rem] font-medium leading-[1.3] tracking-[-0.025em] text-[var(--ink)]">
                  {stage.title}
                </h3>
                <p className="mt-2 text-[0.8125rem] leading-[1.65] text-[var(--body)]">
                  {stage.body}
                </p>
                <div className="mt-auto pt-5">
                  <p className="min-h-12 border-t border-[var(--line)] pt-3 text-[0.6875rem] leading-[1.6] text-[var(--muted)]">
                    {stage.href ? (
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
                    )}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="mt-4 flex items-center justify-between gap-4 border-t border-[var(--line)] pt-4 xl:hidden">
        <a href={resumeHref} className="text-xs font-medium text-[var(--muted)] hover:text-[var(--accent-strong)]">
          Full background →
        </a>
        <div className="flex gap-2">
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
      className="relative scroll-mt-24 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pb-14 lg:pb-0"
    >
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-x-14">
        <div className="max-w-[680px]">
          <div className="flex items-start justify-between gap-6">
            <div>
              <Reveal
                as="h1"
                className="text-[2.5rem] font-semibold leading-[1.1] tracking-[-0.045em] text-[var(--ink)] sm:text-5xl lg:text-[3.5rem]"
              >
                Ally Zach
              </Reveal>
              <Reveal
                as="p"
                delay={70}
                className="mt-2 text-base font-semibold leading-relaxed text-[var(--accent-strong)] sm:text-lg"
              >
                Research engineer · Data scientist
              </Reveal>
            </div>
            <div className="shrink-0 lg:hidden">
              <Photo compact />
            </div>
          </div>

          <Reveal
            as="p"
            delay={140}
            className="mt-6 text-base leading-[1.75] text-[var(--body)]"
          >
            {supporting}
          </Reveal>

          <Reveal delay={210} className="mt-7 flex items-center gap-4 text-sm font-semibold">
            <a
              href="#pantera"
              className="inline-flex items-center gap-2 rounded-sm text-[var(--accent-strong)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              View work <span aria-hidden>↓</span>
            </a>
            <span aria-hidden className="text-[var(--line-strong)]">·</span>
            <a
              href={resumeHref}
              className="rounded-sm text-[var(--ink)] hover:text-[var(--accent-strong)] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
            >
              Résumé
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

      {/* A compact horizontal career path keeps the work within easy reach. */}
      <div
        id="how-i-got-here"
        className="band-tint relative mx-[calc(50%-50vw)] mt-12 scroll-mt-24 md:mt-16 lg:mt-12"
      >
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 md:px-10">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
