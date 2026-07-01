"use client";

import { useState } from "react";
import { socials } from "./Sections";

const supporting =
  "I started as a structural engineer, then taught myself software by automating real design workflows at MKA. That path led me into algorithmic trading, crypto research, data products, and AI agent orchestration.";

const currently =
  "Currently on Pantera's in-house research team and technical cofounder of Syndicate.";

type Journey = {
  id: string;
  title: string;
  teaser: string;
  body: string;
};

const journey: Journey[] = [
  {
    id: "structures",
    title: "Started in structures",
    teaser: "Designed real buildings with real constraints.",
    body: "I earned degrees in civil engineering and spent nearly five years as a structural engineer, designing and analyzing complex buildings and infrastructure. That work taught me how to reason through technical systems where the math matters, the constraints are real, and mistakes are expensive.",
  },
  {
    id: "mka",
    title: "Found code at MKA",
    teaser: "Automation was the first crack in the wall.",
    body: "At MKA, I started writing scripts and workflows to automate repeatable structural design processes. The more I built, the more I realized I was drawn to the tools shaping the work, not just the drawings those tools produced.",
  },
  {
    id: "software",
    title: "Taught myself software",
    teaser: "Python became JavaScript, then full-stack.",
    body: "I kept teaching myself by building: Python scripts, JavaScript projects, full-stack apps, and whatever else helped me move from one problem to the next. I learned software by following the mess and building my way through it.",
  },
  {
    id: "markets",
    title: "Followed data into markets",
    teaser: "Algorithmic trading made feedback loops addictive.",
    body: "Algorithmic trading pulled software, data, probability, and markets into one live system. It gave me a faster learning loop and eventually pulled me toward crypto, where research, product, and code blur together in useful ways.",
  },
  {
    id: "research",
    title: "Built research systems",
    teaser: "Crypto research turned into products and tools.",
    body: "At Pantera, I'm the second member of the in-house research team, working across technical writing, data products, portfolio support, mechanism design, and full-stack tools. The work sits in the middle of research, product, and systems-building.",
  },
  {
    id: "agents",
    title: "Now building agents",
    teaser: "Syndicate is where the threads converge.",
    body: "Syndicate came from using AI constantly and wanting a better way to coordinate specialized agents across real workflows. It is an AI agent orchestration app for turning fuzzy requests into teams, plans, tools, and shipped output.",
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
      {socials.map((s) => (
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

function JourneyCard({
  item,
  active,
  onActivate,
}: {
  item: Journey;
  active: boolean;
  onActivate: () => void;
}) {
  return (
    <button
      type="button"
      aria-expanded={active}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className={`group flex h-full flex-col rounded-2xl border p-6 text-left transition-all duration-300 motion-reduce:transition-none sm:p-7 ${
        active
          ? "border-[var(--accent)]/55 bg-[var(--bg-elev-2)]/80 shadow-lg shadow-[var(--accent)]/15"
          : "border-white/10 bg-[var(--bg-elev)]/60 hover:border-[var(--accent)]/35 hover:bg-[var(--bg-elev)]/90"
      }`}
    >
      <div className="flex items-baseline gap-2.5">
        <span
          aria-hidden
          className={`text-lg leading-none transition-colors duration-300 ${
            active ? "text-[var(--accent)]" : "text-[var(--accent)]/50"
          }`}
        >
          →
        </span>
        <h3 className="text-lg font-semibold tracking-tight text-[var(--slate-lightest)] sm:text-xl">
          {item.title}
        </h3>
      </div>

      <p className="mt-3 text-[0.8125rem] uppercase tracking-[0.06em] leading-[1.5] text-[var(--slate)]">
        {item.teaser}
      </p>

      {/* Expanded story — animates open via a 0fr→1fr grid row, no height measuring. */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${
          active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p
            className={`mt-4 border-t border-white/10 pt-4 text-[0.9375rem] leading-[1.7] text-[var(--slate-light)] transition-opacity duration-300 motion-reduce:transition-none ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            {item.body}
          </p>
        </div>
      </div>
    </button>
  );
}

function JourneyCards() {
  const [active, setActive] = useState("structures");

  return (
    <div>
      <div className="text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
        How I got here
      </div>
      <div className="mt-8 grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {journey.map((item) => (
          <JourneyCard
            key={item.id}
            item={item}
            active={active === item.id}
            onActivate={() => setActive(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      aria-label="Introduction"
      className="relative scroll-mt-24 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24"
    >
      <div
        aria-hidden
        className="grid-texture pointer-events-none absolute inset-0 -z-10"
      />

      <div className="flex flex-col gap-y-8 md:grid md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-x-16 md:gap-y-0">
        {/* Name + eyebrow */}
        <div className="order-1 md:col-start-1 md:row-start-1 md:mb-7">
          <div className="text-[0.6875rem] font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            About
          </div>
          <div className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-[var(--slate-light)]">
            Ally Zach
          </div>
        </div>

        {/* Photo + social (right column on desktop) */}
        <div className="order-2 md:order-none md:col-start-2 md:row-span-5 md:row-start-1 md:self-center">
          <Photo />
          <div className="mt-8 hidden md:block">
            <SocialLinks />
          </div>
        </div>

        {/* Headline */}
        <h1 className="order-3 text-balance text-[2.5rem] font-bold leading-[1.05] tracking-[-0.02em] text-[var(--slate-lightest)] sm:text-[3.25rem] lg:text-[4rem] md:col-start-1 md:row-start-2">
          <span className="block">I used to design buildings.</span>
          <span className="block">
            Now I build the{" "}
            <span className="text-[var(--accent)]">tools behind the work</span>.
          </span>
        </h1>

        {/* Supporting paragraph */}
        <p className="order-4 max-w-[34rem] text-base leading-[1.75] text-[var(--slate-light)] sm:text-lg md:col-start-1 md:row-start-3 md:mt-8">
          {supporting}
        </p>

        {/* Currently line */}
        <p className="order-5 flex items-center gap-2.5 text-[0.8125rem] leading-[1.5] text-[var(--slate)] md:col-start-1 md:row-start-4 md:mt-7">
          <span
            aria-hidden
            className="h-2 w-2 flex-none rounded-full bg-[var(--accent)] shadow-[0_0_10px_2px_var(--accent)]"
          />
          {currently}
        </p>

        {/* Social links — mobile placement (desktop copy lives under the photo). */}
        <div className="order-6 md:hidden">
          <SocialLinks />
        </div>
      </div>

      {/* Six expandable journey cards below the hero. */}
      <div className="mt-16 md:mt-24">
        <JourneyCards />
      </div>
    </section>
  );
}
