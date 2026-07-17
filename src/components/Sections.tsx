import type { CSSProperties, ReactNode } from "react";
import ChapterProjects, { type ChapterVariant } from "./ChapterProjects";
import { chapters, type Chapter } from "./chapters";

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
    handle: "alexandra-zach",
    href: "https://www.linkedin.com/in/alexandra-zach-32714474",
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
      className="scroll-mt-24 py-8 md:py-12"
    >
      {!hideHeading && (
        <h2
          className={`mb-8 text-2xl font-bold tracking-tight text-[var(--slate-lightest)] sm:mb-10 sm:text-4xl ${
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

/** Maps each chapter id to its layout variant + section-transition treatment. */
const chapterLayout: Record<
  Chapter["id"],
  { variant: ChapterVariant; tinted: boolean; divider: boolean }
> = {
  pantera: { variant: "pantera", tinted: false, divider: false },
  // Messari + MKA read as ONE continuous soft band (same --surface-soft), so
  // the color — not spacing — groups them. Messari's top divider is dropped so
  // the band's entry is just the color change; MKA keeps a softened internal
  // rule that separates the two employers without splitting the band.
  messari: { variant: "messari", tinted: true, divider: false },
  structural: { variant: "mka", tinted: true, divider: true },
};

/** Small-caps eyebrow → employer name (+ optional Messari profile link). */
function ChapterEyebrowHeading({ c }: { c: Chapter }) {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        {c.eyebrow ?? c.act}
      </p>
      <h3 className="mt-2 flex items-center gap-2.5 text-2xl font-bold text-[var(--slate-lightest)] sm:text-3xl">
        {c.heading ?? c.company}
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
    </>
  );
}

/** Role / location / years meta block (hidden when a thematic heading is set). */
function ChapterMeta({ c }: { c: Chapter }) {
  if (c.heading) return null;
  return (
    <>
      {c.role && (
        <p className="mt-1 text-base font-medium text-[var(--slate-light)]">
          {c.role}
        </p>
      )}
      {c.location && (
        <p className="mt-0.5 text-sm text-[var(--slate)]">{c.location}</p>
      )}
      <p className="mt-0.5 text-sm text-[var(--slate)]">{c.years}</p>
    </>
  );
}

/**
 * Employer header, laid out distinctly per employer. It always stays an OPEN
 * section header above the project grid — never boxed in with the cards.
 *  - pantera: two-column split (name/role left 35%, intro right 65%)
 *  - messari: stacked, with a width-limited intro
 *  - mka: centered heading, left-aligned intro in a narrow centered column
 */
function ChapterHeader({ c, variant }: { c: Chapter; variant: ChapterVariant }) {
  if (variant === "pantera") {
    return (
      <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[35fr_65fr] lg:gap-16">
        <div>
          <ChapterEyebrowHeading c={c} />
          <ChapterMeta c={c} />
        </div>
        <div className="lg:pt-1">
          <p className="text-base leading-relaxed text-[var(--slate)]">
            {c.intro}
          </p>
          {c.topics && (
            <p className="mt-3 text-xs font-medium tracking-wide text-[var(--slate)]/80">
              {c.topics}
            </p>
          )}
        </div>
      </div>
    );
  }

  if (variant === "messari") {
    return (
      <div className="mb-12">
        <ChapterEyebrowHeading c={c} />
        <ChapterMeta c={c} />
        <p className="mt-3 max-w-[720px] text-sm leading-relaxed text-[var(--slate)]">
          {c.intro}
        </p>
        {c.topics && (
          <p className="mt-3 max-w-[720px] text-xs font-medium tracking-wide text-[var(--slate)]/80">
            {c.topics}
          </p>
        )}
      </div>
    );
  }

  // mka — centered heading, left-aligned intro in a centered column
  return (
    <div className="mb-16 flex flex-col items-center text-center">
      <ChapterEyebrowHeading c={c} />
      <ChapterMeta c={c} />
      <p className="mt-3 max-w-[760px] text-left text-sm leading-relaxed text-[var(--slate)]">
        {c.intro}
      </p>
      {c.topics && (
        <p className="mt-3 max-w-[760px] text-left text-xs font-medium tracking-wide text-[var(--slate)]/80">
          {c.topics}
        </p>
      )}
    </div>
  );
}

export function Chapters() {
  return (
    <>
      {chapters.map((c, i) => {
        const { variant, tinted, divider } = chapterLayout[c.id];
        return (
          <section
            key={c.id}
            id={c.id}
            aria-label={c.label}
            className={`relative mx-[calc(50%-50vw)] scroll-mt-24 ${
              // Enlarged transition gap: Pantera stands alone on the default
              // surface, set off from the soft journey band above the label.
              i === 0 ? "mt-10 sm:mt-14" : ""
            }`}
            style={
              {
                "--accent": c.accent,
                "--accent-tint": c.accentTint,
                ...(tinted ? { backgroundColor: "var(--surface-soft)" } : {}),
              } as CSSProperties
            }
          >
            <div className="mx-auto max-w-[1200px] px-5 py-[72px] sm:px-8 sm:py-24 lg:px-10 lg:py-[120px]">
              {divider && (
                <div
                  aria-hidden
                  className="mx-auto mb-12 h-px w-2/3 max-w-[640px] bg-white/[0.04] sm:mb-16 lg:mb-24"
                />
              )}
              {i === 0 && (
                <h2 className="mb-10 text-2xl font-bold tracking-tight text-[var(--slate-lightest)] sm:mb-14 sm:text-4xl">
                  Experience
                </h2>
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
    rest: "Claude, OpenAI, and Gemini agents work side by side on one team, each doing what it does best.",
  },
  {
    lead: "Manager-led task coordination",
    rest: "A manager agent breaks your goal into tasks and keeps every specialist pointed at the right one.",
  },
  {
    lead: "Human control over autonomy",
    rest: "You decide how much the team does on its own, from fully hands-off to approving every step.",
  },
];

const syndicateHighlights = [
  {
    lead: "Atlas, a manager agent",
    rest: " that breaks a goal into tasks and routes each one to the right specialist agent. Anything it can't resolve comes back to me.",
  },
  {
    lead: "A provider-agnostic runtime",
    rest: " that runs Claude, OpenAI, and Gemini agents on one team, hiding three very different CLIs behind a single protocol.",
  },
  {
    lead: "Agent Maker",
    rest: ", which turns a plain-English role description into an installable agent package, complete with its own identity and scoped tool permissions.",
  },
  {
    lead: "Tunable interruption levels",
    rest: " (Minimal, Balanced, Hands-on, Manual) that govern how often the manager coordinates autonomously versus pausing for human approval.",
  },
  {
    lead: "A tag-based orchestration protocol",
    rest: " covering everything from task lifecycle to human questions, with parser fallbacks so dispatch survives imperfect model output.",
  },
  {
    lead: "A local-first Electron app",
    rest: " that sandboxes every agent to its own project folder and keeps credentials encrypted on-device, with live dev-server previews and per-agent MCP connectors.",
  },
];

export function SideProjects() {
  return (
    <section
      id="side-projects"
      aria-label="What I'm Building"
      /* Neutral bridge: mt shows the default surface between the soft Messari/MKA
         band above and this strong band, so soft never slams straight into strong.
         Syndicate is the ONLY strong-contrast section, whole-section wrapped. */
      className="relative mx-[calc(50%-50vw)] mt-16 scroll-mt-24 sm:mt-20"
      style={{ backgroundColor: "var(--surface-strong)" }}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-[72px] sm:px-6 sm:py-24 md:px-10 lg:py-[120px]">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-[var(--on-strong-heading)] sm:mb-10 sm:text-4xl">
          What I&apos;m Building
        </h2>
        <div className="overflow-hidden rounded-xl border border-[var(--accent)]/25 bg-[var(--surface-strong-elev)] shadow-lg shadow-black/40 sm:rounded-2xl">
        <div className="p-5 sm:p-8 md:p-12">
          <div className="space-y-7 sm:space-y-8">
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
            <p className="max-w-2xl text-left text-base font-medium leading-relaxed text-[var(--slate-lightest)] sm:text-lg">
              Describe what you want. A team of specialist agents plans the work
              and hands you back something finished.
            </p>
            <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] md:items-center">
              <blockquote className="space-y-3 rounded-xl border-l-2 border-[var(--accent)]/50 border-y border-r border-y-[var(--accent)]/15 border-r-[var(--accent)]/15 bg-[var(--accent)]/[0.06] px-4 py-4 text-sm leading-relaxed text-[var(--slate)] shadow-sm shadow-black/10 sm:px-5 sm:text-base">
                <span className="block">
                  I&apos;m the technical cofounder and engineer behind Syndicate,
                  building the product in close partnership with my cofounder, who
                  leads the business side. We built it because we wanted a tool
                  we&apos;d actually use every day ourselves, and we do, at work
                  and on personal projects.
                </span>
                <span className="block">
                  Everyone gets a team. You describe what you want, and specialist
                  agents plan the work and hand you back something finished.
                  It&apos;s built for every idea that used to stall at &ldquo;I wish
                  I could build that.&rdquo;
                </span>
              </blockquote>

              <div className="group relative aspect-[16/10] w-full min-w-0 max-w-full overflow-hidden rounded-2xl border border-[var(--accent)]/20 bg-[#071a3d] p-2 shadow-2xl shadow-black/35 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(56,121,255,0.22)]">
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

          <ul className="mt-7 grid gap-x-10 gap-y-6 border-t border-[var(--accent)]/15 pt-7 text-sm leading-relaxed text-[var(--slate-light)] md:mt-8 md:grid-cols-3 md:pt-8">
            {syndicateCapabilities.map((cap) => (
              <li key={cap.lead} className="space-y-1.5">
                <p className="font-semibold text-[var(--slate-lightest)]">
                  {cap.lead}
                </p>
                <p>{cap.rest}</p>
              </li>
            ))}
          </ul>

          <details className="group mt-6 border-t border-[var(--accent)]/15 pt-5">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              <span className="transition-transform group-open:rotate-90" aria-hidden>
                →
              </span>
              Technical details
            </summary>
            <ul className="mt-5 grid gap-x-10 gap-y-4 text-sm leading-relaxed text-[var(--slate-light)] md:grid-cols-2">
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
          </details>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="https://usesyndicate.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
            >
              Visit usesyndicate.org
              <span className="ml-1 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <p className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-1.5 text-center text-xs font-medium leading-snug text-[var(--slate-light)] sm:ml-auto">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
              Private beta
            </p>
          </div>
        </div>
      </div>
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
      <div className="flex flex-col items-start gap-3 rounded-xl border border-[var(--accent)]/20 bg-[var(--bg-elev)]/50 px-5 py-4 sm:flex-row sm:items-center sm:gap-5 sm:rounded-2xl sm:px-7 sm:py-5">
        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-strong)] shadow-md shadow-[var(--accent)]/30">
          <img
            src="/illinois-block-i.png"
            alt=""
            aria-hidden
            className="h-8 w-8 object-contain"
          />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--accent)]">
            University of Illinois
          </p>
          <p className="mt-1 text-sm text-[var(--slate-light)] sm:text-base">
            <span className="font-semibold text-[var(--slate-lightest)]">
              M.S. + B.S. Civil Engineering
            </span>
            <span className="text-[var(--slate)]">
              {" "}
              · Structural Engineering · Business minor
            </span>
          </p>
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

/**
 * Deliberately distinct zone: a LIGHT/inverted résumé panel with a vertical
 * timeline, set against the dark-navy page so it reads as its own section.
 * Same Geist font + blue accent keep it part of the one site.
 */
export function Resume() {
  return (
    <Section id="resume" label="The Full Record" centeredHeading>
      <div className="overflow-hidden rounded-xl bg-[#eef3ff] text-[#0e1830] shadow-2xl shadow-black/40 ring-1 ring-white/10 sm:rounded-2xl">
        <div className="p-5 sm:p-8 md:p-12">
          {/* Single column — experience, then teaching timeline */}
          <div className="space-y-10 sm:space-y-12">
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
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
                Education
              </p>
              <h3 className="text-lg font-bold tracking-tight text-[#0e1830]">
                University of Illinois at Urbana-Champaign
              </h3>
              <p className="mt-0.5 text-sm font-medium text-[#3c4860]">
                Civil &amp; Environmental Engineering, minor in Business
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {degrees.map((d) => (
                  <div
                    key={d.level}
                    className="rounded-lg border border-[#c7d2e6] bg-white/60 p-4"
                  >
                    <p className="text-sm font-bold text-[#0e1830]">
                      {d.level} — {d.title}
                    </p>
                    <p className="text-xs text-[#64748b]">{d.field}</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#3c4860]">
                      {d.detail}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#64748b]">
                  Honors &amp; Scholarships
                </p>
                <div className="flex flex-wrap gap-2">
                  {honors.map((h) => (
                    <span
                      key={h}
                      className="rounded-md border border-[#c7d2e6] bg-white/70 px-3 py-1.5 text-xs font-semibold text-[#3c4860]"
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
      <div className="mx-auto max-w-lg space-y-8 text-center">
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent)]">
            Outside the screen
          </p>
          <ul className="space-y-2.5 text-base leading-relaxed text-[var(--slate-light)] sm:text-lg">
            <li>
              <strong className="font-semibold text-[var(--slate-lightest)]">
                Home base:
              </strong>{" "}
              just outside Portland, Oregon.
            </li>
            <li>
              <strong className="font-semibold text-[var(--slate-lightest)]">
                The household:
              </strong>{" "}
              my family, one busy toddler, a Bernese mountain dog, and two
              Ragdoll cats.
            </li>
            <li>
              <strong className="font-semibold text-[var(--slate-lightest)]">
                Off hours:
              </strong>{" "}
              cooking something new, snowboarding in winter, paddleboarding when
              it&apos;s warm.
            </li>
            <li>
              <strong className="font-semibold text-[var(--slate-lightest)]">
                Still and always:
              </strong>{" "}
              Chicago sports.
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <a
            href="mailto:allyzach28@gmail.com"
            className="group rounded-md bg-[var(--accent)] px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
          >
            Say hello
            <span className="ml-1 inline-block transition-transform group-hover:translate-x-1">
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
