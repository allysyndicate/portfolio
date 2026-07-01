"use client";

import { useEffect, useRef, useState } from "react";
import { socials } from "./Sections";

const supporting =
  "I started as a structural engineer, then taught myself software by automating real design workflows at MKA. That same pull carried me into algorithmic trading, then into crypto, and now into building teams of AI agents that do real work.";

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
  title: string;
  teaser: string;
  body: string[];
};

const journey: Journey[] = [
  {
    id: "structures",
    title: "Started in structures",
    teaser: "Five years designing high-rise towers.",
    body: [
      "I earned my BS and MS in civil engineering from the University of Illinois, then spent almost five years designing high-rise towers, over 7M sq ft across the US and SE Asia.",
    ],
  },
  {
    id: "mka",
    title: "Turned to tooling",
    teaser: "Automation was the first crack in the wall.",
    body: [
      "At MKA I started building office-wide design and analysis tools, first in Excel and Visual Basic, then in Python, to speed up how our projects got delivered.",
      "The more I built, the more I realized I cared about the tools shaping the work as much as the towers they helped design.",
    ],
  },
  {
    id: "software",
    title: "Taught myself software",
    teaser: "Python became JavaScript, then full-stack.",
    body: [
      "My software education came through the work itself.",
      "I kept running into problems worth automating, then learned whatever I needed to build the next tool well.",
    ],
  },
  {
    id: "markets",
    title: "Followed data into markets",
    teaser: "Algorithmic trading made feedback loops addictive.",
    body: [
      "Algorithmic trading put my code up against a live market for the first time.",
      "The market graded my work daily, in dollars, and that kind of feedback was hard to give up.",
    ],
  },
  {
    id: "messari",
    title: "Learned crypto through data",
    teaser: "Volatility became the bridge.",
    body: [
      "Algo trading taught me to pay attention to volatility, and crypto made that volatility impossible to ignore.",
      "That pulled me into what was effectively a data-science role at Messari, where I spent my days digging through protocol data and learning a new application or blockchain every time the work demanded it.",
    ],
  },
  {
    id: "research",
    title: "Built research systems",
    teaser: "Research that ships as software.",
    body: [
      "At Pantera I'm the second member of our in-house research team, which in practice means I do a bit of everything.",
      "One week I'm writing a report on tokenization, the next I'm building the live dashboard that backs it up.",
    ],
  },
  {
    id: "agents",
    title: "Now building agents",
    teaser: "Syndicate turns a request into a team.",
    body: [
      "Syndicate grew out of using AI all day and wishing I had a better way to coordinate specialized agents across real work.",
      "It's an orchestration app that turns a fuzzy request into a team with a plan and the tools to finish the job.",
    ],
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

function CurrentlyCard() {
  const linkClass =
    "font-semibold text-[var(--accent)] underline decoration-[var(--accent)]/35 underline-offset-4 transition-colors hover:text-[var(--accent-strong)] hover:decoration-[var(--accent-strong)]";
  const labelClass =
    "w-24 shrink-0 text-[0.6875rem] font-bold uppercase tracking-[0.18em] text-[var(--accent)] sm:pt-0.5";
  const rowClass =
    "flex flex-col gap-1 leading-snug sm:flex-row sm:items-baseline sm:gap-3";

  return (
    <div className="order-5 max-w-[34rem] rounded-lg border border-[var(--accent)]/20 bg-[var(--bg-elev)]/55 px-4 py-3 text-sm text-[var(--slate-light)] shadow-sm shadow-black/10 sm:px-5 sm:text-base md:col-start-1 md:row-start-4 md:mt-8">
      <div className="space-y-2.5">
        <p className={rowClass}>
          <span className={labelClass}>Currently</span>
          <span>
            Research Engineer at{" "}
            <a
              href="https://panteracapital.com"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Pantera
            </a>{" "}
            Capital
          </span>
        </p>
        <p className={rowClass}>
          <span className={labelClass}>Also</span>
          <span>
            Technical cofounder of{" "}
            <a
              href="https://usesyndicate.org"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Syndicate
            </a>
          </span>
        </p>
      </div>
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
      {/* Scannable headline layer: badge chip + title + teaser. */}
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
          <h3
            className={`text-lg font-bold tracking-tight transition-colors duration-500 sm:text-xl ${
              expanded ? "text-[var(--slate-lightest)]" : "text-[var(--slate-light)]"
            }`}
          >
            {item.title}
          </h3>
          <Collapse open={open}>
            <p className="mt-1.5 text-base font-semibold leading-snug tracking-[-0.01em] text-[var(--slate-lightest)] sm:text-[1.0625rem]">
              {item.teaser}
            </p>
          </Collapse>
        </div>
      </div>

      {/* De-emphasized body, chunked into short paragraphs. */}
      <Collapse open={open}>
        <div className="mt-5 max-w-prose space-y-3 border-t border-white/10 pt-5">
          {item.body.map((sentence) => (
            <p
              key={sentence}
              className="text-[0.9375rem] leading-[1.65] text-[var(--slate-lightest)]"
            >
              {sentence}
            </p>
          ))}
        </div>
      </Collapse>
    </article>
  );
}

const groupOf = (index: number) => (index < 3 ? 0 : index < 6 ? 1 : 2);

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
      target = p * 2;
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
    <div ref={trackRef} className={mode === "desktop" ? "lg:h-[260vh]" : undefined}>
      <div className={mode === "desktop" ? "lg:sticky lg:top-24" : undefined}>
        <div className="text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
          How I got here
        </div>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--slate-light)]">
          The short version of how a structural engineer ended up building AI agents.
        </p>
        <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {journey.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={index === journey.length - 1 ? "lg:col-start-2" : ""}
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
        {/* Name + eyebrow */}
        <div className="order-1 md:col-start-1 md:row-start-1 md:mb-7">
          <div className="text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            About
          </div>
          <h2 className="mt-2 flex items-center gap-2.5 text-2xl font-bold text-[var(--slate-lightest)]">
            Ally Zach
          </h2>
        </div>

        {/* Photo + social (right column on desktop) */}
        <div className="order-2 md:order-none md:col-start-2 md:row-span-5 md:row-start-1 md:self-center">
          <Photo />
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        {/* Headline */}
        <h1 className="order-3 text-pretty text-[2.125rem] font-bold leading-[1.08] tracking-[-0.02em] text-[var(--slate-lightest)] sm:text-[3rem] sm:leading-[1.05] lg:text-[3.5rem] md:col-start-1 md:row-start-2">
          <span className="block">
            I used to <span className="whitespace-nowrap">design buildings.</span>
          </span>
          <span className="block">
            Now I build the{" "}
            <span className="text-[var(--accent)]">tools I wished existed</span>.
          </span>
        </h1>

        {/* Supporting paragraph */}
        <p className="order-4 max-w-[34rem] text-base leading-[1.75] text-[var(--slate-light)] sm:text-lg md:col-start-1 md:row-start-3 md:mt-8">
          {supporting}
        </p>

        {/* Currently surface */}
        <CurrentlyCard />

      </div>

      {/* Journey cards below the hero. */}
      <div className="mt-10 md:mt-14">
        <JourneyCards />
      </div>
    </section>
  );
}
