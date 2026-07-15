"use client";

import { useEffect, useRef, useState } from "react";
import { socials } from "./Sections";

const supporting =
  "I frame empirical questions, assemble the data, validate the results, and ship the pipelines, dashboards, and software behind the analysis. My work spans market behavior, user networks, and AI systems.";

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

type Journey = {
  id: string;
  label: string;
  title: string;
  body: string;
};

const journey: Journey[] = [
  {
    id: "structures",
    label: "Structural Engineering",
    title: "Designed for uncertainty.",
    body: "I spent five years designing more than 7 million square feet of high-rise buildings across the United States and Southeast Asia, often in seismic and high-wind regions. The work taught me to quantify uncertainty, reason about failure, and make decisions that had to survive real constraints.",
  },
  {
    id: "software",
    label: "Software",
    title: "Turned recurring work into software.",
    body: "At MKA, I began translating repetitive design and analysis workflows into office-wide tools, first in Excel and VBA, then in Python. Automation started as a practical shortcut and became a new way of thinking about the work itself.",
  },
  {
    id: "markets",
    label: "Markets & Data",
    title: "Tested ideas against live systems.",
    body: "Algorithmic trading put my models against a system that responded immediately and unpredictably. That led me into crypto research at Messari, where I used market, network, and on-chain data to study behavior and incentives, publish more than 50 reports, and build analytical tools.",
  },
  {
    id: "research",
    label: "Research Engineering",
    title: "Built research that ships.",
    body: "At Pantera, I take ambiguous questions from framing and data collection through analysis, validation, publication, and live data products. The goal is not just to produce an interesting finding, but to build the system that makes the finding reproducible and useful.",
  },
  {
    id: "ai",
    label: "AI Systems",
    title: "Brought the same questions to AI.",
    body: "As technical cofounder of Syndicate, I'm building a workspace for coordinating multiple AI models across complex tasks. The work has drawn me into model orchestration, structured delegation, failure recovery, human oversight, and the practical question of when an AI system can be trusted to act.",
  },
];

function Photo() {
  return (
    <div className="relative mx-auto w-full max-w-[18rem] sm:max-w-[20rem] lg:max-w-[22rem]">
      {/* Soft accent glow behind the photo. */}
      <div
        aria-hidden
        className="absolute -inset-6 -z-20 rounded-[2.25rem] bg-[var(--accent)]/15 blur-2xl"
      />
      {/* Offset accent frame for a layered, editorial card feel. */}
      <div
        aria-hidden
        className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[1.75rem] border border-[var(--accent)]/40"
      />
      <div className="overflow-hidden rounded-3xl shadow-2xl shadow-[var(--accent)]/25 ring-1 ring-white/10">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/twitter%20pro.jpg"
          alt="Ally Zach"
          className="aspect-[4/5] h-full w-full object-cover object-center"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/10"
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
          aria-label={`${s.label} — ${s.handle}`}
          title={`${s.label} · ${s.handle}`}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)]/25 bg-[var(--bg-elev)]/80 text-[var(--slate-light)] shadow-sm shadow-black/10 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/60 hover:bg-[var(--accent-tint)] hover:text-[var(--accent)]"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
            {s.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}

function RolesBlock() {
  const linkClass =
    "font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/35 underline-offset-4 transition-colors hover:text-[var(--accent-strong)] hover:decoration-[var(--accent-strong)]";

  return (
    <div className="order-5 max-w-[34rem] border-l-2 border-[var(--accent)]/35 pl-4 text-sm text-[var(--slate-light)] sm:text-base md:col-start-1 md:row-start-4 md:mt-8">
      <div className="space-y-1.5 leading-snug">
        <p>
          Research Engineer at{" "}
          <a
            href="https://panteracapital.com"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Pantera Capital
          </a>
        </p>
        <p>
          Technical Cofounder of{" "}
          <a
            href="https://usesyndicate.org"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Syndicate
          </a>
        </p>
      </div>
    </div>
  );
}

/* Hero call-to-action row.
   - "View selected research" → in-page Experience/research carousels (#pantera).
   - "View résumé" → in-page "The Full Record" timeline (#resume); the downloadable
     PDF is intentionally NOT used (stale + contains a home address/phone).
   - GitHub is omitted: no GitHub profile URL exists anywhere in the site. */
function HeroCtas() {
  return (
    <div className="order-6 flex flex-wrap items-center gap-3 md:col-start-1 md:row-start-5 md:mt-8">
      <a
        href="#pantera"
        className="rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[var(--accent)]/25 transition-colors hover:bg-[var(--accent-strong)]"
      >
        View selected research
      </a>
      <a
        href="#resume"
        className="rounded-md border border-[var(--accent)]/40 bg-[var(--bg-elev)]/60 px-5 py-2.5 text-sm font-semibold text-[var(--slate-lightest)] transition-colors hover:border-[var(--accent)]/70 hover:bg-[var(--accent-tint)] hover:text-[var(--accent)]"
      >
        View résumé
      </a>
    </div>
  );
}
/* Smooth height collapse without JS measurement: fractional fr grid rows.
   `open` is continuous 0..1 so scroll can interpolate height, not just toggle it. */
function Collapse({ open, children }: { open: number; children: React.ReactNode }) {
  return (
    <div
      className="grid"
      style={{ gridTemplateRows: `${open}fr`, opacity: open }}
      aria-hidden={open < 0.5}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

function JourneyCard({
  item,
  index,
  open,
}: {
  item: Journey;
  index: number;
  open: number;
}) {
  const expanded = open > 0.5;
  return (
    <article
      className={`flex h-full flex-col rounded-2xl border bg-[var(--bg-elev)]/60 p-6 transition-colors duration-500 sm:p-7 ${
        expanded ? "border-[var(--accent)]/25" : "border-white/10"
      }`}
    >
      {/* Scannable headline layer: numbered badge · category label + title. */}
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold tabular-nums ring-1 transition-colors duration-500 ${
            expanded
              ? "bg-[var(--accent)]/12 text-[var(--accent)] ring-[var(--accent)]/30"
              : "bg-white/5 text-[var(--slate)] ring-white/10"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <div
            className={`text-[0.6875rem] font-semibold uppercase tracking-[0.18em] transition-colors duration-500 ${
              expanded ? "text-[var(--slate-light)]" : "text-[var(--slate)]"
            }`}
          >
            {item.label}
          </div>
          {/* Title carries the emphasis through size + weight, not color. */}
          <h3
            className={`mt-1 text-lg font-bold tracking-[-0.01em] transition-colors duration-500 sm:text-xl ${
              expanded ? "text-[var(--slate-lightest)]" : "text-[var(--slate-light)]"
            }`}
          >
            {item.title}
          </h3>
        </div>
      </div>

      {/* De-emphasized body, revealed as the card expands. */}
      <Collapse open={open}>
        <div className="mt-5 max-w-prose border-t border-white/10 pt-5">
          <p className="text-[0.9375rem] leading-[1.65] text-[var(--slate-lightest)]">
            {item.body}
          </p>
        </div>
      </Collapse>
    </article>
  );
}

// Desktop lays the cards out in a 3-across grid, so each row of up to three
// cards is one scroll-staged "group". Derived from the card count so the
// staging adapts if the number of journey cards changes.
const COLS = 3;
const numGroups = Math.ceil(journey.length / COLS);
const lastGroup = numGroups - 1;

const groupOf = (index: number) => Math.floor(index / COLS);

// Cards in the final (possibly partial) row are centered across the grid.
// The grid is COLS*2 columns wide and each card spans 2, so the trailing row
// starts at column (1 + COLS - trailingCount). Class strings are spelled out
// in full so Tailwind's JIT scanner keeps them.
const trailingCount = journey.length - (numGroups - 1) * COLS;
const firstTrailingIndex = journey.length - trailingCount;
const colStartClass: Record<number, string> = {
  2: "lg:col-start-2",
  3: "lg:col-start-3",
  4: "lg:col-start-4",
};
const trailingColStartClass =
  trailingCount < COLS ? (colStartClass[1 + COLS - trailingCount] ?? "") : "";

const trackHeightClass = numGroups >= 3 ? "lg:h-[260vh]" : "lg:h-[190vh]";

const clamp01 = (t: number) => Math.min(1, Math.max(0, t));

const smoothstep = (t: number) => t * t * (3 - 2 * t);

// Continuous openness of a group given the smoothed stage value (0..2).
// The 1.5x slope gives each group a plateau where it's fully open, with
// eased crossfades to its neighbors instead of hard threshold flips.
const opennessOf = (stage: number, group: number) =>
  smoothstep(Math.min(1, Math.max(0, 1.5 * (1 - Math.abs(stage - group)))));

function JourneyCards() {
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  // Scroll-linked expand/compress everywhere motion is allowed; reduced-motion
  // and SSR/no-JS render the fully expanded static stack. Desktop pins the
  // grid and stages groups by track progress; mobile can't fit a whole group
  // in the viewport, so each card opens/compresses by its own scroll position.
  const [mode, setMode] = useState<"static" | "desktop" | "mobile">("static");
  const [stage, setStage] = useState(0);
  const [opens, setOpens] = useState<number[]>(() => journey.map(() => 1));

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1024px)");
    const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");
    const update = () =>
      setMode(!motion.matches ? "static" : desktop.matches ? "desktop" : "mobile");
    update();
    desktop.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => {
      desktop.removeEventListener("change", update);
      motion.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (mode !== "desktop") return;
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    let running = false;
    let current = 0;
    let target = 0;
    let last = 0;

    const readTarget = () => {
      const rect = el.getBoundingClientRect();
      const span = rect.height - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -rect.top / span)) : 1;
      target = p * lastGroup;
    };

    // Exponentially smooth the scroll-linked value toward its target so
    // trackpad/wheel steps read as fluid motion instead of jumps. Native
    // scrolling is never intercepted — this only softens what we render.
    const tick = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      current += (target - current) * (1 - Math.exp(-dt / 90));
      if (Math.abs(target - current) < 0.002) {
        current = target;
        running = false;
      }
      setStage(current);
      if (running) raf = requestAnimationFrame(tick);
    };

    const onScroll = () => {
      readTarget();
      if (!running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    readTarget();
    current = target;
    setStage(current);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [mode]);

  useEffect(() => {
    if (mode !== "mobile") return;
    let raf = 0;
    let running = false;
    let last = 0;
    const current = journey.map(() => 0);
    const targets = journey.map(() => 0);

    // A card expands as its top scrolls up past ~4/5 of the viewport and
    // compresses again as it exits the top, so the open "wave" walks the
    // column card by card — the mobile translation of the desktop groups.
    const readTargets = () => {
      const h = window.innerHeight;
      cardRefs.current.forEach((el, i) => {
        if (!el) return;
        const top = el.getBoundingClientRect().top;
        const rise = clamp01((0.85 * h - top) / (0.25 * h));
        const fall = clamp01((top - 0.03 * h) / (0.17 * h));
        targets[i] = smoothstep(Math.min(rise, fall));
      });
    };

    const tick = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      const k = 1 - Math.exp(-dt / 90);
      let settled = true;
      for (let i = 0; i < current.length; i++) {
        current[i] += (targets[i] - current[i]) * k;
        if (Math.abs(targets[i] - current[i]) > 0.002) settled = false;
        else current[i] = targets[i];
      }
      setOpens([...current]);
      if (settled) {
        running = false;
      } else {
        // Heights are changing mid-animation, so card positions (and thus
        // targets) drift each frame — re-read before the next step.
        readTargets();
        raf = requestAnimationFrame(tick);
      }
    };

    const onScroll = () => {
      readTargets();
      if (!running) {
        running = true;
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    readTargets();
    for (let i = 0; i < current.length; i++) current[i] = targets[i];
    setOpens([...current]);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [mode]);

  return (
    // The tall track reserves scroll distance; the sticky frame inside it means
    // nothing below the section shifts while rows expand/compress.
    <div ref={trackRef} className={mode === "desktop" ? trackHeightClass : undefined}>
      <div className={mode === "desktop" ? "lg:sticky lg:top-24" : undefined}>
        <div className="text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
          How I got here
        </div>
        <h2 className="mt-3 text-2xl font-bold tracking-[-0.02em] text-[var(--slate-lightest)] sm:text-3xl">
          From structures to systems.
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--slate-light)] sm:text-base">
          The domains changed. The underlying questions didn&apos;t: How does a
          complex system behave? Where does it fail? What evidence would change my
          mind? And what tools would make the answer easier to find?
        </p>
        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-6 lg:gap-7">
          {journey.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`lg:col-span-2 ${
                index === firstTrailingIndex ? trailingColStartClass : ""
              }`}
            >
              <JourneyCard
                item={item}
                index={index}
                open={
                  mode === "static"
                    ? 1
                    : mode === "desktop"
                      ? opennessOf(stage, groupOf(index))
                      : opens[index]
                }
              />
            </div>
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
      <div className="flex flex-col gap-y-8 md:grid md:grid-cols-[1.25fr_0.75fr] md:items-center md:gap-x-14 md:gap-y-0">
        {/* Eyebrow (replaces the name label) */}
        <div className="order-1 md:col-start-1 md:row-start-1 md:mb-7">
          <div className="text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            Research Engineer · Data Scientist
          </div>
        </div>

        {/* Photo + social (right column on desktop) */}
        <div className="order-2 md:order-none md:col-start-2 md:row-span-6 md:row-start-1 md:self-center">
          <Photo />
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        {/* Headline */}
        <h1 className="order-3 text-pretty text-[2.125rem] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--slate-lightest)] sm:text-[3rem] sm:leading-[1.05] lg:text-[3.5rem] md:col-start-1 md:row-start-2">
          I study how complex systems behave, then{" "}
          <span className="text-[var(--accent)]">build the tools to understand them</span>.
        </h1>

        {/* Supporting paragraph */}
        <p className="order-4 max-w-[34rem] text-base leading-[1.75] text-[var(--slate-light)] sm:text-lg md:col-start-1 md:row-start-3 md:mt-8">
          {supporting}
        </p>

        {/* Current roles */}
        <RolesBlock />

        {/* Primary calls to action */}
        <HeroCtas />

        {/* De-emphasized origin note */}
        <p className="order-7 text-sm text-[var(--slate)] md:col-start-1 md:row-start-6 md:mt-6">
          Previously, I spent five years designing high-rise buildings.
        </p>

      </div>

      {/* Journey cards below the hero. */}
      <div className="mt-10 md:mt-14">
        <JourneyCards />
      </div>
    </section>
  );
}
