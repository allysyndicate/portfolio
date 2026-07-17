import type { CSSProperties, ReactNode } from "react";
import ChapterProjects, { type ChapterVariant } from "./ChapterProjects";
import { chapters, type Chapter } from "./chapters";
import Reveal from "./Reveal";
import { socials } from "./socials";

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
      className="scroll-mt-24 py-8 md:py-12"
    >
      {!hideHeading && (
        <Reveal
          as="h2"
          className={`mb-8 text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:mb-10 sm:text-4xl ${
            centeredHeading ? "text-center" : ""
          }`}
        >
          {label}
        </Reveal>
      )}
      {children}
    </section>
  );
}

/** Maps each chapter id to its layout variant + band surface. Bands simply
 * alternate --paper / --paper-tint down the page; the project-grid variant is
 * kept only so ChapterProjects can lay out its cards per employer. */
const chapterLayout: Record<
  Chapter["id"],
  { variant: ChapterVariant; tinted: boolean }
> = {
  pantera: { variant: "pantera", tinted: false },
  messari: { variant: "messari", tinted: true },
  structural: { variant: "mka", tinted: false },
};

/** External link chip shown next to a chapter heading, per employer. */
const chapterHeadingLinks: Partial<
  Record<Chapter["id"], { href: string; label: string }>
> = {
  pantera: {
    href: "https://panteraresearchlab.xyz",
    label: "Pantera Research Lab",
  },
  messari: {
    href: "https://messari.io/research/ally-zach",
    label: "Ally's Messari profile",
  },
};

/** Small-caps eyebrow → employer name (+ optional external profile link). */
function ChapterEyebrowHeading({ c, large }: { c: Chapter; large?: boolean }) {
  const link = chapterHeadingLinks[c.id];
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
        {c.eyebrow ?? c.act}
      </p>
      <h3
        className={`mt-2 flex items-center gap-2.5 font-semibold tracking-[-0.01em] text-[var(--ink)] ${
          large ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
        }`}
      >
        {c.heading ?? c.company}
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            title={link.label}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--paper-elev)] text-[var(--body)] shadow-[var(--shadow-soft)] transition-all duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-tint)] hover:text-[var(--accent)]"
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
    </>
  );
}

/** Role / location / years meta block (hidden when a thematic heading is set). */
function ChapterMeta({ c }: { c: Chapter }) {
  if (c.heading) return null;
  return (
    <>
      {c.role && (
        <p className="mt-1 text-base font-medium text-[var(--body)]">
          {c.role}
        </p>
      )}
      {c.location && (
        <p className="mt-0.5 text-sm text-[var(--muted)]">{c.location}</p>
      )}
      <p className="mt-0.5 text-sm text-[var(--muted)]">{c.years}</p>
    </>
  );
}

/**
 * Employer header — ONE layout for every chapter: eyebrow → heading (+ link
 * chip) → role/location/years meta → intro → topics. It always stays an OPEN
 * section header above the project grid — never boxed in with the cards.
 * Pantera (first employer) renders slightly larger; the structure is identical.
 */
function ChapterHeader({ c, variant }: { c: Chapter; variant: ChapterVariant }) {
  const first = variant === "pantera";
  return (
    <Reveal className="mb-12">
      <ChapterEyebrowHeading c={c} large={first} />
      <ChapterMeta c={c} />
      <p
        className={`mt-3 max-w-[720px] leading-relaxed text-[var(--body)] ${
          first ? "text-base" : "text-sm"
        }`}
      >
        {c.intro}
      </p>
      {c.topics && (
        <p className="mt-3 max-w-[720px] text-xs font-medium tracking-wide text-[var(--muted)]">
          {c.topics}
        </p>
      )}
    </Reveal>
  );
}

export function Chapters() {
  return (
    <>
      {chapters.map((c, i) => {
        const { variant, tinted } = chapterLayout[c.id];
        return (
          <section
            key={c.id}
            id={c.id}
            aria-label={c.label}
            className="relative mx-[calc(50%-50vw)] scroll-mt-24"
            style={tinted ? { backgroundColor: "var(--paper-tint)" } : undefined}
          >
            <div className="mx-auto max-w-screen-xl px-4 py-[72px] sm:px-6 sm:py-24 md:px-10 lg:py-[120px]">
              {i === 0 && (
                <Reveal
                  as="h2"
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
                >
                  Experience
                </Reveal>
              )}
              <ChapterHeader c={c} variant={variant} />
              <ChapterProjects projects={c.projects} variant={variant} />
            </div>
          </section>
        );
      })}
    </>
  );
}

const syndicateCapabilities = [
  {
    lead: "Multi-model agent teams",
    rest: "Claude, OpenAI, and Gemini agents on one team, each doing what it does best.",
  },
  {
    lead: "Manager-led task coordination",
    rest: "A manager agent breaks your goal into tasks and keeps every specialist on target.",
  },
  {
    lead: "Human control over autonomy",
    rest: "You decide how much runs without you, from fully hands-off to approving every step.",
  },
];

const syndicateHighlights = [
  {
    lead: "Atlas, a manager agent",
    rest: " that breaks goals into tasks, routes each to a specialist, escalating blockers to me.",
  },
  {
    lead: "A provider-agnostic runtime",
    rest: " that runs Claude, OpenAI, and Gemini agents behind one protocol, hiding three different CLIs.",
  },
  {
    lead: "Agent Maker",
    rest: ", which turns a plain-English role into an installable agent package with scoped tool permissions.",
  },
  {
    lead: "Tunable interruption levels",
    rest: " (Minimal, Balanced, Hands-on, Manual) governing when the manager acts alone versus asking a human.",
  },
  {
    lead: "A tag-based orchestration protocol",
    rest: " covering task lifecycle through human questions, with parser fallbacks so dispatch survives imperfect output.",
  },
  {
    lead: "A local-first Electron app",
    rest: " that sandboxes each agent to its own project folder and keeps credentials encrypted on-device.",
  },
];

export function SideProjects() {
  return (
    <section
      id="side-projects"
      aria-label="What I'm Building"
      /* Syndicate is the feature section: same tinted band rhythm as the
         chapters, feature card in the shared card language inside. */
      className="relative mx-[calc(50%-50vw)] scroll-mt-24"
      style={{ backgroundColor: "var(--paper-tint)" }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-[72px] sm:px-6 sm:py-24 md:px-10 lg:py-[120px]">
        <Reveal
          as="h2"
          className="mb-8 text-center text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:mb-10 sm:text-4xl"
        >
          What I&apos;m Building
        </Reveal>
        <Reveal className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-elev)] shadow-[var(--shadow-feature)]">
        <div className="p-5 sm:p-8 md:p-12">
          <div className="space-y-7 sm:space-y-8">
            <div className="max-w-[20rem] space-y-2 text-left">
              <h3 className="flex justify-start leading-none">
                <span className="sr-only">Syndicate</span>
                <span aria-hidden className="block w-full max-w-[19rem]">
                  <span className="relative block aspect-[2080/280] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/syndicate-logo.png"
                      alt=""
                      className="h-full w-full object-contain object-left"
                    />
                  </span>
                </span>
              </h3>
              <p className="text-left text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                Technical Cofounder
              </p>
            </div>
            <p className="max-w-2xl text-left text-base font-medium leading-relaxed text-[var(--ink)] sm:text-lg">
              Describe what you want. A team of specialist agents plans the work
              and hands you back something finished.
            </p>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] md:items-center">
              <blockquote className="space-y-3 rounded-xl border-l-2 border-[var(--accent)]/50 border-y border-r border-y-[var(--line)] border-r-[var(--line)] bg-[var(--accent-tint)] px-4 py-4 text-sm leading-relaxed text-[var(--body)] shadow-[var(--shadow-soft)] sm:px-5 sm:text-base">
                <span className="block">
                  I&apos;m the technical cofounder and engineer behind Syndicate;
                  my cofounder leads the business side. We built it because we
                  wanted a tool we&apos;d actually use every day ourselves, and we
                  do, at work and on personal projects.
                </span>
                <span className="block">
                  Everyone gets a team, and you decide how much it does on its
                  own.
                </span>
              </blockquote>

              <div className="group relative aspect-[16/10] w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-tint)] p-2 shadow-[var(--shadow-card)] transition duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:shadow-[0_24px_70px_var(--accent-tint)]">
                <div className="h-full overflow-hidden rounded-2xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/syndicate-app.webp"
                    alt="Syndicate desktop app — team workspace running autonomous AI agents"
                    className="h-full w-full max-w-full rounded-2xl object-contain object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <ul className="mt-7 grid gap-x-10 gap-y-6 border-t border-[var(--line)] pt-7 text-sm leading-relaxed text-[var(--body)] md:mt-8 md:grid-cols-3 md:pt-8">
            {syndicateCapabilities.map((cap) => (
              <li key={cap.lead} className="space-y-1.5">
                <p className="font-semibold text-[var(--ink)]">
                  {cap.lead}
                </p>
                <p>{cap.rest}</p>
              </li>
            ))}
          </ul>

          <details className="group mt-6 border-t border-[var(--line)] pt-5">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
              <span
                className="transition-transform duration-200 ease-[var(--ease-out)] group-open:rotate-90"
                aria-hidden
              >
                →
              </span>
              Technical details
            </summary>
            <ul className="mt-5 grid gap-x-10 gap-y-4 text-sm leading-relaxed text-[var(--body)] md:grid-cols-2">
              {syndicateHighlights.map((h) => (
                <li key={h.lead} className="flex gap-3">
                  <span aria-hidden className="mt-1 text-[var(--accent)]">
                    →
                  </span>
                  <span>
                    <strong className="font-semibold text-[var(--ink)]">
                      {h.lead}
                    </strong>
                    {h.rest}
                  </span>
                </li>
              ))}
            </ul>
          </details>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="https://usesyndicate.org"
              target="_blank"
              rel="noopener noreferrer"
              /* #B25232 = terracotta midpoint between --accent and --accent-strong;
                 white text passes 4.5:1 at rest (plain --accent falls just short). */
              className="group inline-flex items-center justify-center rounded-md bg-[#B25232] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 ease-[var(--ease-out)] hover:bg-[var(--accent-strong)]"
            >
              Visit usesyndicate.org
              <span className="ml-1 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent-tint)] px-3 py-1.5 text-center text-xs font-medium leading-snug text-[var(--body)] sm:ml-auto">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Private beta
            </p>
          </div>
        </div>
      </Reveal>
      </div>
    </section>
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

/**
 * Compact horizontal Education strip near the bottom of the homepage. The full
 * degree detail + honors/scholarships live in the Full Record (/resume).
 */
export function Education() {
  return (
    <Section id="education" label="Education" hideHeading>
      <Reveal>
      <div className="flex flex-col items-start gap-3 rounded-2xl border border-[var(--line)] bg-[var(--paper-elev)] px-5 py-4 shadow-[var(--shadow-card)] transition duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-[var(--line-strong)] hover:shadow-[var(--shadow-feature)] sm:flex-row sm:items-center sm:gap-5 sm:px-7 sm:py-5">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] shadow-[0_2px_14px_var(--accent-tint)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/illinois-block-i.png"
            alt=""
            aria-hidden
            className="h-8 w-8 object-contain"
          />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
            University of Illinois
          </p>
          <p className="mt-1 text-sm text-[var(--body)] sm:text-base">
            <span className="font-semibold text-[var(--ink)]">
              M.S. + B.S. Civil Engineering
            </span>
            <span className="text-[var(--muted)]">
              {" "}
              · Structural Engineering · Business minor
            </span>
          </p>
        </div>
      </div>
      </Reveal>
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

/**
 * Deliberately distinct zone: an elevated résumé panel with a vertical
 * timeline, lifted off the paper page so it reads as its own section.
 * Same font + terracotta accent keep it part of the one site.
 */
export function Resume() {
  return (
    <Section id="resume" label="The Full Record" centeredHeading>
      <div className="overflow-hidden rounded-2xl bg-[var(--paper-elev)] text-[var(--ink)] shadow-[var(--shadow-card)] ring-1 ring-[var(--line)]">
        <div className="p-5 sm:p-8 md:p-12">
          {/* Single column — experience, then teaching timeline */}
          <div className="space-y-10 sm:space-y-12">
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
                Earlier Experience
              </p>
              <ol className="relative space-y-9 border-l border-[var(--line)] pl-7">
                {experience.map((e) => (
                  <li key={e.company} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--paper-elev)] bg-[var(--accent)]"
                    />
                    <h3 className="text-lg font-bold tracking-tight text-[var(--ink)]">
                      {e.company}
                    </h3>
                    <p className="mt-0.5 text-sm font-semibold text-[var(--accent-strong)]">
                      {e.role}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[var(--muted)]">
                      {e.location}
                    </p>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                      {e.dates}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex gap-2.5 text-sm leading-relaxed text-[var(--body)]"
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
              <ol className="relative space-y-7 border-l border-[var(--line)] pl-7">
                {teaching.map((t) => (
                  <li key={t.role} className="relative">
                    <span
                      aria-hidden
                      className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--paper-elev)] bg-[var(--muted)]"
                    />
                    <h4 className="text-sm font-bold text-[var(--ink)]">
                      {t.role}
                    </h4>
                    <p className="mt-0.5 text-xs font-medium text-[var(--muted)]">
                      {t.advisor}
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[var(--muted)]">
                      {t.dates}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--body)]">
                      {t.detail}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
                Education
              </p>
              <h3 className="text-lg font-bold tracking-tight text-[var(--ink)]">
                University of Illinois at Urbana-Champaign
              </h3>
              <p className="mt-0.5 text-sm font-medium text-[var(--body)]">
                Civil &amp; Environmental Engineering, minor in Business
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {degrees.map((d) => (
                  <div
                    key={d.level}
                    className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-4"
                  >
                    <p className="text-sm font-bold text-[var(--ink)]">
                      {d.level} — {d.title}
                    </p>
                    <p className="text-xs text-[var(--muted)]">{d.field}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--body)]">
                      {d.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
                  Honors &amp; Scholarships
                </p>
                <div className="flex flex-wrap gap-2">
                  {honors.map((h) => (
                    <span
                      key={h}
                      className="rounded-md border border-[var(--line)] bg-[var(--paper)] px-3 py-1.5 text-xs font-semibold text-[var(--body)]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
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
      <Reveal className="mx-auto max-w-xl space-y-8 rounded-2xl border border-[var(--line)] bg-[var(--paper-elev)] px-6 py-10 text-center shadow-[var(--shadow-card)] sm:px-10">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
            Outside the screen
          </p>
          <ul className="space-y-2.5 text-base leading-relaxed text-[var(--body)] sm:text-lg">
            <li>
              <strong className="font-semibold text-[var(--ink)]">
                Home base:
              </strong>{" "}
              just outside Portland, Oregon.
            </li>
            <li>
              <strong className="font-semibold text-[var(--ink)]">
                The household:
              </strong>{" "}
              my family, one busy toddler, a Bernese mountain dog, and two
              Ragdoll cats.
            </li>
            <li>
              <strong className="font-semibold text-[var(--ink)]">
                Off hours:
              </strong>{" "}
              cooking something new, snowboarding in winter, paddleboarding when
              it&apos;s warm.
            </li>
            <li>
              <strong className="font-semibold text-[var(--ink)]">
                Still and always:
              </strong>{" "}
              Chicago sports.
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="mailto:allyzach28@gmail.com"
            /* #B25232 = terracotta midpoint between --accent and --accent-strong;
               white text passes 4.5:1 at rest (plain --accent falls just short). */
            className="group rounded-md bg-[#B25232] px-6 py-3 text-center text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 ease-[var(--ease-out)] hover:bg-[var(--accent-strong)]"
          >
            Say hello
            <span className="ml-1 inline-block transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1">
              →
            </span>
          </a>
          {/* TODO: replace with updated 2026 resume before making resume CTA public.
              Hidden temporarily — current /Ally Zach Resume.pdf is stale (lists Messari
              as present role, no Pantera/Syndicate) and exposes a home street address. */}
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
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--paper-elev)] text-[var(--body)] shadow-[var(--shadow-soft)] transition-all duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-tint)] hover:text-[var(--accent)]"
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
      </Reveal>
    </Section>
  );
}
