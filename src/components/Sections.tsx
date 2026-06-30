import type { CSSProperties, ReactNode } from "react";
import Carousel from "./Carousel";
import { chapters } from "./chapters";

export const socials = [
  {
    label: "Twitter / X",
    handle: "@0xallyzach",
    href: "https://twitter.com/0xallyzach",
    icon: (
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    ),
  },
  {
    label: "LinkedIn",
    handle: "0xallyzach",
    href: "https://linkedin.com/in/0xallyzach",
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0Z" />
    ),
  },
] as const;

function Section({
  id,
  label,
  centeredHeading,
  hideHeading,
  style,
  children,
}: {
  id: string;
  label: string;
  centeredHeading?: boolean;
  hideHeading?: boolean;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-label={label}
      style={style}
      className="scroll-mt-24 py-9 md:py-12"
    >
      {!hideHeading && (
        <h2
          className={`mb-10 text-3xl font-bold tracking-tight text-[var(--slate-lightest)] sm:text-4xl ${
            centeredHeading ? "text-center" : ""
          }`}
        >
          {label}
        </h2>
      )}
      {children}
    </section>
  );
}

/* Placeholder copy only — final wording owned by Technical Writer (Phase 2). */

export function About() {
  return (
    <Section id="about" label="About me">
      <div className="grid gap-12 md:grid-cols-2 md:items-start">
        <div className="space-y-4 text-[var(--slate)]">
          <p>
            [Placeholder] I&apos;m an engineer who keeps changing the medium but
            not the method: find a hard system, model it, and ship tools that
            make it tractable. My career reads as three acts — scroll down to
            walk through each one.
          </p>
          <p>
            Today that&apos;s{" "}
            <span className="font-medium text-[var(--slate-lightest)]">
              research engineering &amp; AI products
            </span>{" "}
            (Pantera, plus cofounding Syndicate); before that{" "}
            <span className="font-medium text-[var(--slate-lightest)]">
              crypto research
            </span>{" "}
            at Messari; and before that{" "}
            <span className="font-medium text-[var(--slate-lightest)]">
              high-rise towers
            </span>{" "}
            (design + internal tooling). Scroll down — most recent first.
          </p>
          <div className="flex items-center gap-4 pt-2">
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
        </div>

        {/* Education — same card design as "The Full Record" section */}
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            Education
          </p>
          <div className="rounded-xl border border-[var(--bg-elev-2)] bg-[var(--bg-elev)] p-5">
            <h3 className="text-base font-bold tracking-tight text-[var(--slate-lightest)]">
              University of Illinois at Urbana-Champaign
            </h3>
            <p className="mt-1 text-sm text-[var(--slate-light)]">
              Civil &amp; Environmental Engineering, Minor in Business
            </p>
            <div className="mt-4 space-y-2 border-t border-[var(--bg-elev-2)] pt-4 text-sm">
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-[var(--slate-lightest)]">M.S.</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--slate)]">
                  May 2018
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-semibold text-[var(--slate-lightest)]">B.S.</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--slate)]">
                  May 2017
                </span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[var(--slate)]">
              Emphasis: Structural Engineering &amp; Construction Management.
              James Scholar Honors Program · Dean&apos;s List · Engineering
              Visionary Scholar · C.S. &amp; Ruth Monnier Scholarship ·
              Corsetti Scholarship Fund.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Chapters() {
  return (
    <>
      {chapters.map((c) => (
        <Section
          key={c.id}
          id={c.id}
          label={c.label}
          hideHeading
          style={
            {
              "--accent": c.accent,
              "--accent-tint": c.accentTint,
            } as CSSProperties
          }
        >
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              {c.act}
            </p>
            <h3 className="mt-2 flex items-center gap-2.5 text-2xl font-bold text-[var(--slate-lightest)]">
              {c.company}
              {c.id === "messari" && (
                <a
                  href="https://messari.io/research/ally-zach"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ally's Messari profile"
                  title="Ally's Messari profile"
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent-tint)] text-[var(--accent)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:shadow-[var(--accent)]/30"
                >
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
                    <path d="M14 5h5v5M19 5l-9 9M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
                  </svg>
                </a>
              )}
            </h3>
            {c.role && (
              <p className="mt-1 text-base font-medium text-[var(--slate-light)]">
                {c.role}
              </p>
            )}
            {c.location && (
              <p className="mt-0.5 text-sm text-[var(--slate)]">{c.location}</p>
            )}
            <p className="mt-0.5 text-sm text-[var(--slate)]">{c.years}</p>
            <p className="mt-3 max-w-xl text-sm text-[var(--slate)]">
              {c.intro}
            </p>
          </div>
          <Carousel projects={c.projects} label={c.label} />
        </Section>
      ))}
    </>
  );
}

const syndicateHighlights = [
  {
    lead: "Atlas, a manager agent",
    rest: " that breaks a goal into tasks, dispatches them to specialist agents, routes messages between them, and escalates open questions back to me.",
  },
  {
    lead: "A provider-agnostic runtime",
    rest: " that runs Claude, OpenAI, and Gemini agents on one team, normalizing streaming, tool calls, and auth across three separate CLIs behind a single protocol.",
  },
  {
    lead: "Agent Maker",
    rest: ", which turns a plain-English role description into a reusable, installable agent package with generated identity, skills, and scoped tool permissions.",
  },
  {
    lead: "Tunable interruption levels",
    rest: " (Minimal, Balanced, Hands-on, Manual) that govern how often the manager coordinates autonomously versus pausing for human approval.",
  },
  {
    lead: "A tag-based orchestration protocol",
    rest: " for messaging, task lifecycle, and human questions, with parser fallbacks so dispatch survives imperfect model output.",
  },
  {
    lead: "A local-first Electron app",
    rest: " that sandboxes every agent to its project folder, with per-agent MCP servers and connectors, live dev-server previews, and encrypted on-device credentials.",
  },
];

export function SideProjects() {
  return (
    <Section id="side-projects" label="Side Projects" centeredHeading>
      <div className="overflow-hidden rounded-2xl border border-[var(--accent)]/25 bg-[var(--bg-elev)]/60 shadow-lg shadow-black/20">
        <div className="p-8 md:p-12">
          <div className="space-y-8">
            <div className="max-w-[20rem] space-y-2 text-left">
              <h3 className="flex justify-start leading-none">
                <span className="sr-only">Syndicate</span>
                <span aria-hidden className="block w-full max-w-[19rem]">
                  <span className="relative block aspect-[1220/206] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/syndicate-logo-white.png"
                      alt=""
                      className="h-full w-full object-cover object-[7.5%_50%]"
                    />
                  </span>
                </span>
              </h3>
              <p className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
                Technical Cofounder
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] md:items-center">
              <blockquote className="space-y-3 rounded-xl border-l-2 border-[var(--accent)]/50 border-y border-r border-y-[var(--accent)]/15 border-r-[var(--accent)]/15 bg-[var(--accent)]/[0.06] px-5 py-4 text-[var(--slate)] shadow-sm shadow-black/10">
                <span className="block">
                  I&apos;m the technical cofounder and sole engineer of Syndicate.
                </span>
                <span className="block">
                  I&apos;m the technical cofounder and sole engineer behind Syndicate,
                  building the product in close partnership with my cofounder, who
                  leads the business side.
                </span>
                <span className="block">
                  We made it because we wanted a product we could use every day,
                  at work and on personal projects, and it became the one we
                  reach for constantly.
                </span>
                <span className="block">
                  The idea is simple: everyone gets a team.
                </span>
                <span className="block">
                  Describe the outcome you want and specialist agents plan it,
                  build it, and hand it back finished, turning &lsquo;I wish I
                  could build that&rsquo; into something you actually ship.
                </span>
              </blockquote>

              <div className="group relative hidden aspect-[16/10] overflow-hidden rounded-2xl border border-[var(--accent)]/20 bg-[#071a3d] p-2 shadow-2xl shadow-black/35 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(56,121,255,0.22)] md:block">
                <div className="h-full overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/syndicate-app.png"
                    alt="Syndicate desktop app — team workspace running autonomous AI agents"
                    className="h-full w-full rounded-2xl object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-8 grid gap-x-10 gap-y-3 border-t border-[var(--accent)]/15 pt-8 text-sm text-[var(--slate-light)] md:grid-cols-2">
            {syndicateHighlights.map((h) => (
              <li key={h.lead} className="flex gap-3">
                <span aria-hidden className="mt-1 text-[var(--accent)]">
                  →
                </span>
                <span>
                  <strong className="font-semibold text-[var(--slate-lightest)]">
                    {h.lead}
                  </strong>
                  {h.rest}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://usesyndicate.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
            >
              Visit usesyndicate.org
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="ml-auto inline-flex items-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1 text-xs font-medium text-[var(--slate-light)]">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Closed beta launching within the next month
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

const degrees = [
  {
    level: "M.S.",
    title: "Master of Science",
    field: "Civil & Environmental Engineering",
    detail:
      "Emphasis in Structural Engineering & Construction Management.",
    primary: true,
  },
  {
    level: "B.S.",
    title: "Bachelor of Science",
    field: "Civil & Environmental Engineering",
    detail: "Structural Engineering focus, minor in Business.",
    primary: false,
  },
];

const honors = [
  "James Scholar Honors Program",
  "Dean's List",
  "Engineering Visionary Scholar",
  "C.S. & Ruth Monnier Scholarship",
  "Corsetti Scholarship Fund",
];

export function Education() {
  return (
    <Section id="education" label="Education" centeredHeading>
      <div className="group relative overflow-hidden rounded-2xl border border-[var(--accent)]/30 bg-gradient-to-br from-[var(--bg-elev-2)] via-[var(--bg-elev)] to-[var(--bg-elev-2)] p-8 shadow-xl shadow-black/30 ring-1 ring-[var(--accent)]/10 transition-all duration-300 hover:border-[var(--accent)]/55 hover:shadow-2xl hover:shadow-[var(--accent)]/20 md:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-70"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[var(--accent)]/15 blur-3xl"
        />

        <div className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] text-white shadow-md shadow-[var(--accent)]/30">
            <img src="/illinois-block-i.png" alt="" aria-hidden className="h-9 w-9 object-contain" />
          </span>
          <div>
            <h3 className="text-xl font-bold tracking-tight text-[var(--slate-lightest)] sm:text-2xl">
              University of Illinois at Urbana-Champaign
            </h3>
            <p className="mt-1 text-sm text-[var(--slate-light)]">
              Structural Engineering, minor in Business
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {degrees.map((d) => (
            <div
              key={d.level}
              className="relative rounded-xl border border-[var(--accent)]/20 bg-[var(--bg-elev)]/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent)]/45"
            >
              <div className="flex items-center gap-3">
                <span
                  className={
                    d.primary
                      ? "rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] px-3 py-1.5 text-sm font-bold tracking-wide text-white shadow-sm shadow-[var(--accent)]/30"
                      : "rounded-lg border border-[var(--accent)]/40 bg-[var(--accent-tint)] px-3 py-1.5 text-sm font-bold tracking-wide text-[var(--slate-lightest)]"
                  }
                >
                  {d.level}
                </span>
                <div>
                  <p className="text-sm font-bold text-[var(--slate-lightest)]">
                    {d.title}
                  </p>
                  <p className="text-xs text-[var(--slate)]">{d.field}</p>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--slate-light)]">
                {d.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-[var(--accent)]/15 pt-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            Honors &amp; Scholarships
          </p>
          <div className="flex flex-wrap gap-2.5">
            {honors.map((h) => (
              <span
                key={h}
                className="rounded-lg border border-[var(--accent)]/25 bg-[var(--accent)]/[0.08] px-3 py-1.5 text-xs font-semibold text-[var(--slate-light)]"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const experience = [
  {
    company: "KPFF Consulting Engineers",
    role: "Structural Engineering Intern",
    location: "Seattle, WA",
    dates: "May — Aug 2017",
    bullets: [
      "Designed beam haunches, retaining walls, and steel connections for the new REI headquarters",
      "Reviewed steel and rebar shop drawings for the SeaTac International Arrivals Facility expansion",
    ],
  },
  {
    company: "HNTB Corporation",
    role: "Structural Engineering Intern, Bridge Design",
    location: "Chicago, IL",
    dates: "May — Aug 2016",
    bullets: [
      "Produced load ratings for a Detroit bascule bridge using CSiBridge and gravity load calculations",
      "Performed and documented fracture-critical, element-level, and routine inspections on Chicago bridges",
    ],
  },
];

const teaching = [
  {
    company: "University of Illinois at Urbana-Champaign",
    role: "Teaching Assistant · Design of Structural Systems",
    advisor: "Dr. Daniel Abrams & Dr. James LaFave",
    dates: "Jan — May 2018",
    detail:
      "Led the CEE 465 capstone design through lectures and studio sessions, preparing assignments and submittal guidelines.",
  },
  {
    company: "University of Illinois at Urbana-Champaign",
    role: "Teaching Assistant · Steel Structures I",
    advisor: "Dr. James LaFave",
    dates: "Aug — Dec 2017",
    detail:
      "Taught CEE 460 structural steel theory and AISC Steel Construction Manual use via lectures, studios, and office hours.",
  },
  {
    company: "University of Illinois at Urbana-Champaign",
    role: "Research Assistant · U. of Illinois Expansion & Planning",
    advisor: "Associate Dean Dr. Liang Liu",
    dates: "Apr 2015 — May 2018",
    detail:
      "Built an interactive campus Revit model and researched future College of Engineering building projects with faculty.",
  },
  {
    company: "University of Illinois at Urbana-Champaign",
    role: "Research Assistant · General Education Course Data Project",
    advisor: "Assistant Provost Amy Edwards",
    dates: "Nov 2015 — Jan 2016",
    detail:
      "Analyzed six years of general-education enrollment data in Excel, surfacing trends for faculty and the board.",
  },
];

const skills = [
  "Python",
  "PostgreSQL",
  "Snowflake",
  "NumPy",
  "Pandas",
  "Scikit-Learn",
  "NetworkX",
  "Figma",
  "Excel",
  "Plotly",
  "Matplotlib",
  "GitHub",
];

/**
 * Deliberately distinct zone: a LIGHT/inverted résumé panel with a vertical
 * timeline, set against the dark-navy page so it reads as its own section.
 * Same Geist font + blue accent keep it part of the one site.
 */
export function Resume() {
  return (
    <Section id="resume" label="The Full Record" centeredHeading>
      <div className="overflow-hidden rounded-2xl bg-[#eef3ff] text-[#0e1830] shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <div className="p-8 md:p-12">
          {/* Single column — experience, teaching timeline, then skills */}
          <div className="space-y-12">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
                Earlier Experience
              </p>
              <ol className="relative space-y-9 border-l border-[#c7d2e6] pl-7">
                {experience.map((e) => (
                  <li key={e.company} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-[#eef3ff] bg-[var(--accent)]"
                    />
                    <h3 className="text-lg font-bold tracking-tight text-[#0e1830]">
                      {e.company}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--accent-strong)]">
                      {e.role}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[#64748b]">
                      {e.location}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#64748b]">
                      {e.dates}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2.5 text-sm leading-relaxed text-[#3c4860]"
                        >
                          <span aria-hidden className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
                Research &amp; Teaching
              </p>
              <ol className="relative space-y-7 border-l border-[#c7d2e6] pl-7">
                {teaching.map((t) => (
                  <li key={t.role} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[#eef3ff] bg-[#94a3c8]"
                    />
                    <h4 className="text-sm font-bold text-[#0e1830]">
                      {t.role}
                    </h4>
                    <p className="mt-0.5 text-xs font-medium text-[#64748b]">
                      {t.advisor}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[#64748b]">
                      {t.dates}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#3c4860]">
                      {t.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
                Skills &amp; Proficiencies
              </p>
              <div className="flex flex-wrap gap-2.5">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="cursor-default rounded-lg border border-[var(--accent)]/30 bg-[var(--accent)]/[0.08] px-3.5 py-2 text-xs font-semibold text-[var(--accent-strong)] shadow-sm transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--accent)]/60 hover:bg-[var(--accent)]/[0.16] hover:shadow-md hover:shadow-[var(--accent)]/25"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" label="Get in touch" centeredHeading>
      <div className="mx-auto max-w-lg space-y-6 text-center text-[var(--slate)]">
        <p>
          [Placeholder] I&apos;m focused on product engineering for computer-use
          and agentic systems. If you&apos;re building in that space, I&apos;d
          love to talk.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:allyzach28@gmail.com"
            className="rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
          >
            Say Hello
          </a>
          <a
            href="/Ally Zach Resume.pdf"
            className="group inline-flex items-center rounded-md border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--accent-tint)]"
          >
            View Full Résumé
            <span className="ml-1 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 pt-2">
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
      </div>
    </Section>
  );
}
