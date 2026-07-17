"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { socials } from "./socials";

const supporting =
  "I began in structural engineering, where I learned to quantify uncertainty and design around failure. Today I apply that discipline across research, engineering, and product, turning real-world data into reproducible analysis and production software.";

const heroSocials = [
  ...socials,
  {
    label: "Telegram",
    handle: "allyzach1",
    href: "https://t.me/allyzach1",
    icon: (
      <path d="M9.993 15.675 9.596 21c.568 0 .814-.244 1.109-.537l2.664-2.545 5.522 4.044c1.012.564 1.725.267 1.998-.931l3.622-16.972.001-.001c.321-1.496-.541-2.081-1.527-1.714L1.696 10.497C.243 11.061.265 11.871 1.45 12.239l5.443 1.693L19.53 6.027c.595-.394 1.136-.176.69.218L9.993 15.675Z" />
    ),
  },
] as const;

// Three past stages carry the reader down one continuous line before it forks.
type Stage = {
  id: string;
  num: string;
  label: string;
  title: string;
  body: string;
  proof: string;
};

const stages: Stage[] = [
  {
    id: "structures",
    num: "01",
    label: "Structures",
    title: "Designed for uncertainty.",
    body: "I spent four years designing high-rise buildings in seismic and high-wind regions. The work required turning incomplete information into decisions that could withstand real physical constraints.",
    proof: "7M+ square feet designed",
  },
  {
    id: "software",
    num: "02",
    label: "Software",
    title: "Turned recurring work into software.",
    body: "I built tools to automate design and analysis workflows, first in Excel and VBA, then in Python. That work became my path from structural engineering into software and data.",
    proof: "Adopted across the office",
  },
  {
    id: "markets",
    num: "03",
    label: "Markets & Data",
    title: "Tested ideas against live systems.",
    body: "Algorithmic trading put my models against a system that responded immediately and unpredictably. That was my move into data science, and it led me to Messari, where I used financial markets and blockchain data to study user behavior and incentive schemes.",
    proof: "50+ published research reports",
  },
];

// At NOW the line branches into two parallel, equal-weight current tracks.
type Branch = {
  id: "pantera" | "syndicate";
  track: string;
  org: string;
  title: string;
  body: string;
  proof: string;
};

const branches: Branch[] = [
  {
    id: "pantera",
    track: "Research Engineering",
    org: "Pantera Capital",
    title: "Built research that ships.",
    body: "I take ambiguous questions from framing and data collection through analysis, validation, publication, and live data products. Finding the answer is half the job. Building the system that makes it reproducible and useful is the other half.",
    proof: "Research spanning billions of dollars in market activity",
  },
  {
    id: "syndicate",
    track: "Technical Cofounder",
    org: "Syndicate",
    title: "A workspace for coordinating teams of specialized AI agents.",
    body: "I co-founded Syndicate and build the product end to end. It is a local-first Electron app where users create specialized agents, assemble them into teams, and control how work is delegated, reviewed, and interrupted. My work includes the provider-agnostic runtime, manager agents, tag-based orchestration, MCP integrations, and encrypted credential handling.",
    proof: "TypeScript · Electron · MCP · Agent orchestration",
  },
];

function Photo() {
  return (
    <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-[22rem]">
      {/* Soft accent glow behind the photo. */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-20 rounded-[2.25rem] bg-[var(--accent-tint)] blur-2xl"
      />
      {/* Offset accent frame for a layered, editorial card feel. */}
      <div
        aria-hidden
        className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[1.75rem] border border-[var(--line)]"
      />
      <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-feature)] ring-1 ring-[var(--line)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/twitter%20pro.jpg"
          alt="Ally Zach"
          className="aspect-[4/5] h-full w-full object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-[var(--line)]"
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

// Compact current-roles metadata row: a hairline rule, a CURRENTLY eyebrow, and
// the two roles side by side with a subtle divider. Plain linked text, not
// buttons or badges, aligned to the paragraph width.
const currentRoles = [
  {
    company: "Pantera Capital",
    role: "Research Engineer",
    href: "https://panteracapital.com",
  },
  {
    company: "Syndicate",
    role: "Technical Cofounder",
    href: "https://usesyndicate.org",
  },
];

function RolesBlock() {
  return (
    <Reveal delay={210} className="mt-11 max-w-[620px]">
      <div aria-hidden className="h-px w-full bg-[var(--line)]" />
      <p className="mt-5 text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
        Currently
      </p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-0 sm:divide-x sm:divide-[var(--line)]">
        {currentRoles.map((r, i) => (
          <div key={r.company} className={i === 0 ? "sm:pr-8" : "sm:pl-8"}>
            <a
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--ink)] transition-colors duration-150 ease-[var(--ease-out)] hover:text-[var(--accent-strong)]"
            >
              {r.company}
            </a>
            <span className="ml-2 text-sm text-[var(--muted)]">{r.role}</span>
          </div>
        ))}
      </div>
    </Reveal>
  );
}

const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

// Tiny on-palette data motif for the Pantera (research) branch - bars + trend,
// evidence not decoration.
function ChartMotif() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 28"
      className="h-7 w-10 shrink-0 text-[var(--accent)]/60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <line x1="4" y1="24" x2="4" y2="17" />
      <line x1="12" y1="24" x2="12" y2="12" />
      <line x1="20" y1="24" x2="20" y2="19" />
      <line x1="28" y1="24" x2="28" y2="8" />
      <line x1="36" y1="24" x2="36" y2="14" />
      <polyline points="4,15 12,10 20,13 28,5 36,11" strokeOpacity="0.55" />
    </svg>
  );
}

// Tiny on-palette node-network motif for the Syndicate (AI systems) branch.
function NetworkMotif() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 28"
      className="h-7 w-10 shrink-0 text-[var(--accent)]/60"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    >
      <line x1="8" y1="7" x2="20" y2="14" strokeOpacity="0.7" />
      <line x1="8" y1="21" x2="20" y2="14" strokeOpacity="0.7" />
      <line x1="20" y1="14" x2="34" y2="8" strokeOpacity="0.7" />
      <line x1="20" y1="14" x2="34" y2="20" strokeOpacity="0.7" />
      <circle cx="8" cy="7" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="8" cy="21" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="14" r="3" fill="currentColor" stroke="none" />
      <circle cx="34" cy="8" r="2.5" fill="currentColor" stroke="none" />
      <circle cx="34" cy="20" r="2.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ProofLine({ children }: { children: React.ReactNode }) {
  return (
    <span className="mt-3 inline-flex w-fit items-center gap-1.5 rounded-full border border-[var(--accent)]/25 bg-[var(--accent-tint)] px-3 py-1 text-xs font-medium text-[var(--ink)]">
      <span aria-hidden className="h-1 w-1 rounded-full bg-[var(--accent)]" />
      {children}
    </span>
  );
}

// A single track inside the paired NOW box. Both tracks share one container so
// the fork reads as one resolution, not two competing cards.
function BranchColumn({ branch }: { branch: Branch }) {
  return (
    <div className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <div className="text-[0.6875rem] font-bold uppercase tracking-[0.2em]">
          <div className="text-[var(--accent-strong)]">{branch.track}</div>
          <div className="mt-1 text-[var(--muted)]">{branch.org}</div>
        </div>
        {branch.id === "pantera" ? <ChartMotif /> : <NetworkMotif />}
      </div>
      <h3 className="mt-4 text-lg font-bold tracking-[-0.01em] text-[var(--ink)] sm:text-xl">
        {branch.title}
      </h3>
      <p className="mt-2 text-[0.9375rem] leading-[1.65] text-[var(--body)]">
        {branch.body}
      </p>
      <ProofLine>{branch.proof}</ProofLine>
    </div>
  );
}

// Staggered story card for a past stage. Prominence varies by `size` so the
// three stages read as an uneven path (large → small offset → large), not a
// uniform row. The accent number sits large and quiet behind the copy.
function StageCard({
  stage,
  size,
  active,
}: {
  stage: Stage;
  size: "lg" | "sm";
  active: boolean;
}) {
  const large = size === "lg";
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border bg-[var(--paper-elev)] shadow-[var(--shadow-card)] transition-all duration-200 ease-[var(--ease-out)] hover:-translate-y-[2px] hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-feature)] ${
        large ? "p-7 sm:p-8" : "p-6 sm:p-6"
      } ${
        active ? "border-[var(--accent)]/25" : "border-[var(--line)]"
      }`}
    >
      {/* Oversized ghost number - structure without a dashboard tile. */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -right-2 -top-4 font-bold tabular-nums leading-none text-[var(--accent)]/15 ${
          large ? "text-[7rem]" : "text-[5rem]"
        }`}
      >
        {stage.num}
      </span>
      <div className="relative">
        <div className="flex items-baseline gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.22em]">
          <span className="tabular-nums text-[var(--accent-strong)]">{stage.num}</span>
          <span className="text-[var(--muted)]">{stage.label}</span>
        </div>
        <h3
          className={`mt-2 font-bold tracking-[-0.01em] text-[var(--ink)] ${
            large ? "text-xl sm:text-2xl" : "text-lg"
          }`}
        >
          {stage.title}
        </h3>
        <p
          className={`mt-2 leading-[1.65] text-[var(--body)] ${
            large ? "text-[0.9375rem] sm:text-base" : "text-[0.875rem]"
          }`}
        >
          {stage.body}
        </p>
        <ProofLine>{stage.proof}</ProofLine>
      </div>
    </div>
  );
}

// The load path: one continuous vertical line draws through three past stages,
// then branches at a NOW node into two parallel current tracks. Motion is
// restrained and scroll-linked - the line fills as the section enters the
// viewport and each node lights when the fill reaches it. Under
// prefers-reduced-motion (and SSR/no-JS) everything renders filled and static,
// so the structure reads identically without animation.
function Timeline() {
  const railRef = useRef<HTMLDivElement>(null);
  // The paired NOW box, so we can guard it against hiding while on screen.
  const boxRef = useRef<HTMLDivElement>(null);
  // One ref per node on the trunk: the three stages plus the NOW fork marker.
  const nodeRefs = useRef<(HTMLElement | null)[]>([]);
  const nodeCount = stages.length + 1;
  const nowIndex = stages.length;

  const [animate, setAnimate] = useState(false);
  const [fill, setFill] = useState(1); // fraction of the trunk drawn, 0..1
  const [active, setActive] = useState<boolean[]>(() =>
    Array(nodeCount).fill(true),
  );
  // Pinned true when the paired box is already in the viewport on mount
  // (scroll restoration, back-navigation, deep links) - mirrors Reveal.tsx's
  // above-the-fold guard so on-screen content never fades out post-hydration.
  const [nowPinned, setNowPinned] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const update = () => setAnimate(motion.matches);
    update();
    motion.addEventListener("change", update);
    return () => motion.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    // Reduced motion / no animation: fully drawn, all nodes lit, no listeners.
    const reset = () => {
      setFill(1);
      setActive(Array(nodeCount).fill(true));
    };
    if (!animate) {
      reset();
      return;
    }
    const rail = railRef.current;
    if (!rail) return;

    // Already in the viewport on mount: pin the paired box visible so it
    // never hides while on screen (same rect check as Reveal.tsx).
    const box = boxRef.current;
    if (box) {
      const b = box.getBoundingClientRect();
      if (b.top < window.innerHeight && b.bottom > 0) setNowPinned(true);
    }

    let ticking = false;
    // The draw line follows a fixed anchor ~62% down the viewport: the trunk
    // fills to wherever that anchor intersects it, and a node lights the moment
    // the fill passes it - so line and nodes stay perfectly consistent.
    const read = () => {
      ticking = false;
      const anchor = window.innerHeight * 0.62;
      const r = rail.getBoundingClientRect();
      setFill(r.height > 0 ? clamp01((anchor - r.top) / r.height) : 1);
      const next = nodeRefs.current
        .slice(0, nodeCount)
        .map((el) => (el ? el.getBoundingClientRect().top <= anchor : false));
      setActive(next);
      // Once revealed, the paired box latches visible (reveal-once, matching
      // Reveal.tsx) - only the decorative spine nodes stay scroll-linked.
      if (next[nowIndex]) setNowPinned(true);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(read);
      }
    };

    read();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [animate, nodeCount]);

  const nowActive = nowPinned || active[nowIndex];

  return (
    <div>
      <div className="text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
        Background
      </div>
      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-3xl">
        From structures to systems.
      </h2>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--body)] sm:text-base">
        I started in structural engineering, then moved into data science,
        market research, and AI product development.
      </p>

      {/* Staggered path: three story cards of uneven prominence, alternating
          left/right of a central spine that draws as you scroll. The rhythm
          (large → small offset → large) reads as one continuous transformation
          rather than a row of equal tiles. */}
      <div className="relative mt-10 lg:mt-14">
        {/* The spine (unfilled track) + accent draw overlay. Left edge on
            mobile, centered on desktop. */}
        <div
          ref={railRef}
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-[11px] top-0 w-px -translate-x-1/2 bg-[var(--line)] lg:left-1/2"
        >
          <div
            className="absolute inset-x-0 top-0 bg-[var(--accent)] transition-[height] duration-200 ease-[var(--ease-out)]"
            style={{ height: `${fill * 100}%` }}
          />
        </div>

        {stages.map((s, i) => {
          const isLeft = i % 2 === 0; // 01 left, 02 right, 03 left
          return (
            <div key={s.id} className="relative py-5 lg:py-7">
              {/* Spine node for this stage. */}
              <span
                ref={(el) => {
                  nodeRefs.current[i] = el;
                }}
                aria-hidden
                className={`absolute left-[11px] top-8 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full ring-4 ring-[var(--paper-tint)] transition-colors duration-[550ms] ease-[var(--ease-out)] lg:left-1/2 lg:top-10 ${
                  active[i] ? "bg-[var(--accent)]" : "bg-[var(--line-strong)]"
                }`}
              />
              {/* Connector from the spine node to the card edge (desktop). */}
              <span
                aria-hidden
                className={`absolute top-[2.875rem] hidden h-px bg-gradient-to-r transition-opacity duration-[550ms] ease-[var(--ease-out)] lg:block ${
                  isLeft
                    ? "right-1/2 left-auto w-8 from-transparent to-[var(--accent)]/50"
                    : "left-1/2 w-8 from-[var(--accent)]/50 to-transparent"
                } ${active[i] ? "opacity-100" : "opacity-30"}`}
              />
              <div className="pl-10 lg:grid lg:grid-cols-2 lg:gap-x-14 lg:pl-0">
                <div
                  className={`flex flex-col ${
                    isLeft
                      ? "lg:col-start-1 lg:items-end"
                      : "lg:col-start-2 lg:items-start"
                  }`}
                >
                  <Reveal className="w-full lg:max-w-[30rem]">
                    <StageCard stage={s} size="lg" active={active[i]} />
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}

        {/* NOW: the fork marker where the spine resolves into the paired box. */}
        <div className="relative pt-8 lg:pt-12">
          <span
            ref={(el) => {
              nodeRefs.current[nowIndex] = el;
            }}
            aria-hidden
            className={`absolute left-[11px] top-9 z-10 h-4 w-4 -translate-x-1/2 rounded-full ring-4 ring-[var(--paper-tint)] transition-all duration-[550ms] ease-[var(--ease-out)] lg:left-1/2 lg:top-0 ${
              nowActive
                ? "bg-[var(--accent)] shadow-[0_0_0_5px_var(--accent-tint)]"
                : "bg-[var(--line-strong)]"
            }`}
          />
          <div className="pl-10 lg:pl-0 lg:pt-8 lg:text-center">
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.28em] text-[var(--accent-strong)]">
              Current work
            </span>
          </div>
        </div>
      </div>

      {/* The fork resolves into ONE paired box holding both current tracks
          side by side - a shared frame, divided down the middle. */}
      <div
        ref={boxRef}
        className={`mt-6 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-elev)] shadow-[var(--shadow-card)] transition-all duration-700 ease-[var(--ease-out)] lg:mt-8 ${
          nowActive ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        style={{ transitionDelay: animate && nowActive ? "120ms" : "0ms" }}
      >
        <div className="grid divide-y divide-[var(--line)] lg:grid-cols-2 lg:divide-x lg:divide-y-0">
          {branches.map((b) => (
            <BranchColumn key={b.id} branch={b} />
          ))}
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
      className="relative scroll-mt-24 pt-24 pb-10 sm:pt-28 sm:pb-12 md:pt-32 md:pb-14"
    >
      <div className="flex flex-col gap-y-10 md:grid md:grid-cols-[1.25fr_0.75fr] md:items-center md:gap-x-14 md:gap-y-0">
        {/* Left column: one vertically-centered stack - eyebrow, headline,
            paragraph, affiliations - capped at 680px so it reads as a single
            block centered against the portrait, not spread across the viewport. */}
        <div className="order-2 flex max-w-[680px] flex-col md:order-none md:col-start-1 md:row-start-1">
          {/* Eyebrow (replaces the name label) */}
          <Reveal>
            <div className="text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
              Research Engineer · Data Scientist
            </div>
          </Reveal>

          {/* Headline - accent on a single phrase */}
          <Reveal
            as="h1"
            delay={70}
            className="mt-6 text-pretty text-[2.125rem] font-semibold leading-[1.08] tracking-[-0.02em] text-[var(--ink)] sm:text-[3rem] sm:leading-[1.05] lg:text-[3.5rem]"
          >
            I build <span className="text-[var(--accent)]">data systems</span>{" "}
            to study financial markets, user networks, and AI systems.
          </Reveal>

          {/* Supporting paragraph */}
          <Reveal
            as="p"
            delay={140}
            className="mt-9 max-w-[620px] text-[1.25rem] leading-[1.55] text-[var(--body)]"
          >
            {supporting}
          </Reveal>

          {/* Current roles */}
          <RolesBlock />
        </div>

        {/* Photo + social (right column on desktop) */}
        <Reveal
          delay={90}
          className="order-1 md:order-none md:col-start-2 md:row-start-1 md:self-center"
        >
          <Photo />
          <div className="mt-5">
            <SocialLinks />
          </div>
        </Reveal>
      </div>

      {/* Forked-timeline journey below the hero - full-bleed soft band so the
          "How I got here" story reads as its own grouped section. */}
      <div
        id="how-i-got-here"
        className="relative mx-[calc(50%-50vw)] mt-16 scroll-mt-24 md:mt-20"
        style={{ backgroundColor: "var(--paper-tint)" }}
      >
        <div className="mx-auto max-w-screen-xl px-4 py-[72px] sm:px-6 sm:py-24 md:px-10 lg:py-[120px]">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
