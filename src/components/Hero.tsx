import { socials } from "./Sections";

const intro =
  "I started in structural engineering, but the real throughline has become building tools for messy systems. I taught myself software by following the problems in front of me: first automation, then markets, then crypto research, and now AI agent workflows.";

const timeline = [
  {
    title: "Structures",
    body: "Designed complex buildings and infrastructure, learning how to reason through technical systems with real constraints.",
  },
  {
    title: "Automation",
    body: "At MKA, built scripts and workflows to automate repeatable structural design processes.",
  },
  {
    title: "Software",
    body: "Taught myself Python, JavaScript, and full-stack development by using projects as bridges into new domains.",
  },
  {
    title: "Markets",
    body: "Moved into algorithmic trading, where software, data, markets, and fast feedback loops collided.",
  },
  {
    title: "Research",
    body: "Joined Pantera's in-house research team, working across crypto research, data products, writing, and full-stack tools.",
  },
  {
    title: "Agents",
    body: "Cofounded Syndicate, an AI agent orchestration app for coordinating specialized agents across messy workflows.",
  },
];

const tags = [
  "Structural Engineering",
  "Self-Taught Developer",
  "Crypto Research",
  "Data Products",
  "Mechanism Design",
  "AI Agent Orchestration",
];

function PhotoCard() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[12rem] sm:max-w-[13rem]">
      {/* Open accent arc sweeping the circle. */}
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
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full bg-[var(--accent)]/10 mix-blend-overlay"
        />
      </div>
      <span
        aria-hidden
        className="pointer-events-none absolute -left-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_12px_2px_var(--accent)]"
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

function Tags({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${className}`}>
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-[var(--accent)]/25 bg-[var(--accent-tint)] px-3 py-1 text-xs font-medium text-[var(--slate-light)]"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function Timeline() {
  return (
    <ol className="relative mt-7 space-y-5 border-l border-[var(--accent)]/20 pl-6">
      {timeline.map((step) => (
        <li key={step.title} className="group relative">
          {/* Node on the vertical line. */}
          <span
            aria-hidden
            className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] transition-colors group-hover:bg-[var(--accent)]"
          />
          <h3 className="text-base font-semibold tracking-tight text-[var(--slate-lightest)]">
            {step.title}
          </h3>
          <p className="mt-1 max-w-[38rem] text-sm leading-[1.6] text-[var(--slate)]">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function Hero() {
  return (
    <section
      id="about"
      aria-label="Introduction"
      className="relative scroll-mt-24 pt-20 pb-14 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24"
    >
      <div
        aria-hidden
        className="grid-texture pointer-events-none absolute inset-0 -z-10"
      />
      <div className="grid grid-cols-1 gap-x-12 gap-y-6 md:grid-cols-[minmax(12rem,0.85fr)_minmax(0,1.7fr)] md:items-start md:[grid-template-areas:'profile_head''profile_intro''profile_time']">
        {/* Heading */}
        <div className="md:[grid-area:head]">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-[var(--slate-lightest)] sm:text-4xl lg:text-5xl">
            Ally Zach
          </h1>
          <div className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            About
          </div>
        </div>

        {/* Profile card — photo, social links, and tags as one unit. */}
        <div className="mt-2 md:mt-0 md:sticky md:top-24 md:self-start md:[grid-area:profile]">
          <PhotoCard />
          <SocialLinks />
          <Tags className="mt-6 justify-center" />
        </div>

        {/* Short intro */}
        <p className="max-w-[42rem] text-base leading-[1.75] text-[var(--slate-light)] md:[grid-area:intro] sm:text-lg">
          {intro}
        </p>

        {/* Timeline — the main storytelling device. */}
        <div className="md:[grid-area:time]">
          <Timeline />
        </div>
      </div>
    </section>
  );
}
