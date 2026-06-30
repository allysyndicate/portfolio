"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { socials } from "./Sections";

const paragraphs: ReactNode[] = [
  <>
    I started my career as a{" "}
    <strong className="font-semibold text-[var(--slate-lightest)]">
      structural engineer
    </strong>
    , earning degrees in civil engineering and spending nearly five years
    designing and analyzing complex buildings and infrastructure. It was
    technical, rigorous work, and it taught me how to reason through complex
    systems with real constraints.
  </>,
  <>
    But the more time I spent inside that world, the more I found myself pulled
    toward a different kind of building. At MKA, I started writing tools to
    automate repeatable design processes: small scripts and workflows that made
    engineering work faster, cleaner, and less manual.
  </>,
  <>That was the opening.</>,
  <>
    I kept teaching myself to code, starting with Python, then JavaScript, then
    full-stack development. Eventually, that curiosity moved beyond engineering
    workflows and into algorithmic trading, where software, data, markets, and
    fast feedback loops all collided.
  </>,
  <>
    That path pulled me into{" "}
    <strong className="font-semibold text-[var(--slate-lightest)]">
      crypto and startup land
    </strong>
    , where the learning curve was steeper and the work sat closer to data
    science, research, and product.
  </>,
  <>
    Today, I&apos;m the second member of{" "}
    <strong className="font-semibold text-[var(--slate-lightest)]">
      Pantera&apos;s in-house research team
    </strong>
    , where I work across research, data products, technical writing, portfolio
    support, mechanism design, and full-stack development.
  </>,
  <>
    The thread through all of it is that I like learning messy systems from the
    inside out, finding the real workflow underneath the noise, and building
    tools that make the work sharper, faster, or clearer.
  </>,
  <>
    <strong className="font-semibold text-[var(--slate-lightest)]">AI</strong>{" "}
    has accelerated that instinct. It changed how I research, build, automate,
    and reason through complex problems, and eventually led me to cofound{" "}
    <strong className="font-semibold text-[var(--slate-lightest)]">
      Syndicate
    </strong>
    , an AI agent orchestration app for coordinating specialized agents across
    messy, multi-step workflows.
  </>,
];

function PhotoCard({ progress = 0 }: { progress?: number }) {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[12rem] sm:max-w-[14rem] md:max-w-[17rem]"
      style={{
        transform: `scale(${1 + progress * 0.06}) translateY(${progress * -10}px)`,
        transition: "transform 120ms linear",
      }}
    >
      {/* Breathing accent glow behind the photo. */}
      <div
        aria-hidden
        className="about-glow pointer-events-none absolute -inset-6 -z-10 rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.45),transparent_70%)] blur-2xl"
      />
      {/* Slowly rotating dashed accent ring. */}
      <div
        aria-hidden
        className="about-ring-spin pointer-events-none absolute -inset-2 rounded-full border-2 border-dashed border-[var(--accent)]/30"
      />
      {/* Bold open arc sweeping the circle. */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full border-[3px] border-[var(--accent)]"
        style={{ clipPath: "inset(0 0 0 35%)" }}
      />
      <div className="absolute inset-4 overflow-hidden rounded-full shadow-2xl shadow-[var(--accent)]/20 ring-1 ring-white/10 sm:inset-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/twitter%20pro.jpg"
          alt="Ally Zach"
          className="h-full w-full object-cover object-center grayscale transition-all duration-700 hover:grayscale-0"
        />
        {/* Subtle blue duotone wash over the grayscale photo. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-[var(--accent)]/10 mix-blend-overlay"
        />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute -left-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_2px_var(--accent)]"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-8 top-8 h-1.5 w-10 rounded-full bg-[var(--accent)]/40"
      />
    </div>
  );
}

function SocialLinks() {
  return (
    <div className="mt-5 flex items-center justify-center gap-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${s.label} — ${s.handle}`}
          title={`${s.label} · ${s.handle}`}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent-tint)] text-[var(--accent)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:shadow-[var(--accent)]/30"
        >
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
            className="h-5 w-5"
          >
            {s.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}

function Heading() {
  return (
    <div>
      <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-[var(--slate-lightest)] sm:text-4xl lg:text-5xl">
        Ally Zach
      </h1>
      <div className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
        About
      </div>
    </div>
  );
}

const STEP_SVH = 62;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced) return;
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
      const prog = total > 0 ? scrolled / total : 0;
      const idx = Math.min(
        paragraphs.length - 1,
        Math.floor(prog * paragraphs.length)
      );
      setActive((prev) => (prev === idx ? prev : idx));
      setProgress(prog);
    };
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [reduced]);

  // Reduced motion / no-JS-friendly fallback: a plain stacked About section.
  if (reduced) {
    return (
      <section
        id="about"
        aria-label="Introduction"
        className="relative scroll-mt-24 pt-20 pb-14 sm:pt-24 sm:pb-20 md:pt-28 md:pb-28"
      >
        <div
          aria-hidden
          className="grid-texture pointer-events-none absolute inset-0 -z-10"
        />
        <div className="grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-[minmax(0,1.6fr)_minmax(13rem,0.8fr)] md:items-start">
          <div className="md:order-2">
            <PhotoCard />
            <SocialLinks />
          </div>
          <div className="md:order-1">
            <Heading />
            <div className="mt-6 max-w-[34rem] space-y-4 text-[15px] leading-[1.7] text-[var(--slate)]">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="Introduction"
      className="relative scroll-mt-24"
      style={{ height: `calc(100svh + ${paragraphs.length * STEP_SVH}svh)` }}
    >
      <div
        aria-hidden
        className="grid-texture pointer-events-none absolute inset-0 -z-10"
      />
      <div className="sticky top-0 flex min-h-svh flex-col justify-center pt-20 pb-12 sm:pt-24">
        <div className="grid grid-cols-1 gap-x-12 gap-y-7 md:grid-cols-[minmax(0,1.6fr)_minmax(13rem,0.8fr)] md:items-center md:[grid-template-areas:'head_aside'_'body_aside'_'prog_aside']">
          {/* aside — photo + social (sticky/static across the sequence) */}
          <div className="order-1 md:order-none md:[grid-area:aside]">
            <PhotoCard progress={progress} />
            <SocialLinks />
          </div>

          {/* heading */}
          <div className="order-2 md:order-none md:[grid-area:head]">
            <Heading />
          </div>

          {/* active paragraph — only one visible at a time, the hero of the
              section, so it's big, bold, and high-contrast. */}
          <div className="order-3 flex min-h-[16rem] items-start md:order-none md:min-h-[17rem] md:[grid-area:body]">
            <p
              key={active}
              className="about-step-in max-w-[36rem] text-2xl font-medium leading-[1.32] tracking-tight text-[var(--slate-light)] sm:text-3xl sm:leading-[1.3] lg:text-[2.6rem] lg:leading-[1.22]"
            >
              {paragraphs[active]}
            </p>
          </div>

          {/* progress indicator — a designed element, not an afterthought */}
          <div
            aria-hidden
            className="order-4 flex items-center gap-4 md:order-none md:[grid-area:prog]"
          >
            <div className="flex items-center gap-2">
              {paragraphs.map((_, i) => (
                <span
                  key={i}
                  className={`h-2 rounded-full transition-all duration-500 ease-out ${
                    i === active
                      ? "w-10 bg-[var(--accent)] shadow-[0_0_14px_2px_var(--accent)]"
                      : i < active
                        ? "w-2 bg-[var(--accent)]/60"
                        : "w-2 bg-[var(--accent)]/20"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold tabular-nums tracking-tight text-[var(--slate)]">
              <span className="text-[var(--accent)]">
                {String(active + 1).padStart(2, "0")}
              </span>
              <span className="mx-1 text-[var(--slate)]/50">/</span>
              {String(paragraphs.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
