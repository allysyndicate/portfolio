import { socials } from "./socials";

/**
 * The complete résumé, rendered on the /resume route. One cohesive panel in the
 * site's light theme: professional experience (current + recent) up top, then the
 * earlier chronology — earlier roles, research & teaching, and education. Every
 * current-role bullet is grounded in the same fact-checked copy used on the
 * homepage; no home address or phone number appears here (privacy).
 */

type Role = {
  org: string;
  title: string;
  location: string;
  dates: string;
  href?: string;
  summary?: string;
  bullets: string[];
  tags?: string;
};

const professional: Role[] = [
  {
    org: "Pantera Capital",
    title: "Research Engineer",
    location: "Remote",
    dates: "2024 — Present",
    href: "https://panteraresearchlab.xyz",
    summary:
      "One of two people on Pantera's in-house research team, owning open-ended questions from research design through data collection, analysis, validation, and deployment.",
    bullets: [
      "Authored empirical market studies, including a $7.8B analysis of short-term crypto trading (86% of Polymarket's 5-minute taker volume was bot-driven) and The State of Tokenization, mapping 593 tokenized assets worth $320.6B.",
      "Ship live data products alongside the writing: the DATboard treasury tracker built from parsed SEC 10-Q/8-K filings, and an open-source tokenization data portal joining on-chain and off-chain assets.",
      "Support Pantera's investment team and portfolio companies; most work ships with a dashboard or an open dataset so the finding stays useful after the report is out.",
    ],
    tags: "Python · SQL · TypeScript · Data pipelines · Dashboards",
  },
  {
    org: "Syndicate",
    title: "Technical Cofounder",
    location: "Remote",
    dates: "Present",
    href: "https://usesyndicate.org",
    summary:
      "Technical cofounder and engineer building a workspace for coordinating multiple AI models — Claude, OpenAI, and Gemini — across complex tasks.",
    bullets: [
      "Built Atlas, a manager agent that decomposes a goal into tasks and routes each to the right specialist, and a provider-agnostic runtime that hides three different CLIs behind one protocol.",
      "Created Agent Maker, which turns a plain-English role description into an installable agent package with scoped tool permissions, plus a tag-based orchestration protocol with parser fallbacks for imperfect model output.",
      "Shipped a local-first Electron app that sandboxes each agent to its own project folder, keeps credentials encrypted on-device, and offers tunable human-in-the-loop autonomy.",
    ],
    tags: "TypeScript · Electron · Multi-model orchestration · Agent systems",
  },
  {
    org: "Messari",
    title: "Enterprise Research Analyst",
    location: "Remote",
    dates: "2022 — 2024",
    href: "https://messari.io/research/ally-zach",
    summary:
      "Specialized in network- and application-level user analytics: telling real users apart from sybils and airdrop farmers.",
    bullets: [
      "Wrote 50+ long-form research reports on L1s, L2s, NFTs, DeFi, and consumer apps.",
      "Built frameworks separating genuine users from sybils and airdrop farmers — e.g. sybil detection across Base and zkSync as L2 active addresses grew from 27% to 157% of Ethereum's.",
      "Built the SQL and Python dashboards and data-ingestion tooling the research team ran on, where research started turning into software.",
    ],
    tags: "SQL · Python · On-chain data · Network analysis",
  },
  {
    org: "Magnusson Klemencic Associates",
    title: "Structural Engineer",
    location: "Seattle, WA",
    dates: "2018 — 2022",
    summary:
      "Designed high-rise towers totaling 7M+ sq ft across the US and Southeast Asia, in seismic and typhoon regions where failure has to be modeled before it can be ruled out.",
    bullets: [
      "Project work included NuStar Resort & Casino (Cebu's tallest, ~5.28M sq ft), 160 Folsom / MIRA (40-story twisting tower), Imperium Tower (68-story Manila, outrigger bracing), and Viridian at Greenhills (55-story, Performance-Based Seismic Design).",
      "Built office-wide automation tools — first in Excel and VBA, then Python — turning repetitive design workflows into shared software. This is where the software career started.",
    ],
    tags: "Performance-Based Seismic Design · Excel/VBA · Python automation",
  },
];

const earlier: Role[] = [
  {
    org: "KPFF Consulting Engineers",
    title: "Structural Engineering Intern",
    location: "Seattle, WA",
    dates: "May — Aug 2017",
    bullets: [
      "Designed beam haunches, retaining walls, and steel connections for the new REI headquarters.",
      "Reviewed steel and rebar shop drawings for the SeaTac International Arrivals Facility expansion.",
    ],
  },
  {
    org: "HNTB Corporation",
    title: "Structural Engineering Intern, Bridge Design",
    location: "Chicago, IL",
    dates: "May — Aug 2016",
    bullets: [
      "Produced load ratings for a Detroit bascule bridge using CSiBridge and gravity load calculations.",
      "Performed and documented fracture-critical, element-level, and routine inspections on Chicago bridges.",
    ],
  },
];

const teaching = [
  {
    role: "Teaching Assistant · Design of Structural Systems",
    advisor: "Dr. Daniel Abrams & Dr. James LaFave",
    dates: "Jan — May 2018",
    detail:
      "Led the CEE 465 capstone design through lectures and studio sessions, preparing assignments and submittal guidelines.",
  },
  {
    role: "Teaching Assistant · Steel Structures I",
    advisor: "Dr. James LaFave",
    dates: "Aug — Dec 2017",
    detail:
      "Taught CEE 460 structural steel theory and AISC Steel Construction Manual use via lectures, studios, and office hours.",
  },
  {
    role: "Research Assistant · U. of Illinois Expansion & Planning",
    advisor: "Associate Dean Dr. Liang Liu",
    dates: "Apr 2015 — May 2018",
    detail:
      "Built an interactive campus Revit model and researched future College of Engineering building projects with faculty.",
  },
  {
    role: "Research Assistant · General Education Course Data Project",
    advisor: "Assistant Provost Amy Edwards",
    dates: "Nov 2015 — Jan 2016",
    detail:
      "Analyzed six years of general-education enrollment data in Excel, surfacing trends for faculty and the board.",
  },
];

const degrees = [
  {
    level: "M.S.",
    title: "Master of Science",
    field: "Civil & Environmental Engineering",
    detail: "Emphasis in Structural Engineering & Construction Management.",
  },
  {
    level: "B.S.",
    title: "Bachelor of Science",
    field: "Civil & Environmental Engineering",
    detail: "Structural Engineering focus, minor in Business.",
  },
];

const honors = [
  "James Scholar Honors Program",
  "Dean's List",
  "Engineering Visionary Scholar",
  "C.S. & Ruth Monnier Scholarship",
  "Corsetti Scholarship Fund",
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-6 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent-strong)]">
      {children}
    </h2>
  );
}

function ExternalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-3.5 w-3.5"
    >
      <path d="M14 5h5v5M19 5l-9 9M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" />
    </svg>
  );
}

function RoleEntry({ role }: { role: Role }) {
  return (
    <li className="relative">
      <span
        aria-hidden
        className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--paper-elev)] bg-[var(--accent)]"
      />
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight text-[var(--ink)]">
          {role.href ? (
            <a
              href={role.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--accent-strong)]"
            >
              {role.org}
              <span className="text-[var(--muted)]">
                <ExternalIcon />
              </span>
            </a>
          ) : (
            role.org
          )}
        </h3>
        <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
          {role.dates}
        </p>
      </div>
      <p className="mt-0.5 text-sm font-semibold text-[var(--accent-strong)]">
        {role.title}
        <span className="font-medium text-[var(--muted)]"> · {role.location}</span>
      </p>
      {role.summary && (
        <p className="mt-2 text-sm leading-relaxed text-[var(--body)]">
          {role.summary}
        </p>
      )}
      <ul className="mt-3 space-y-2">
        {role.bullets.map((b) => (
          <li
            key={b}
            className="flex gap-2.5 text-sm leading-relaxed text-[var(--body)]"
          >
            <span
              aria-hidden
              className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]"
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {role.tags && (
        <p className="mt-3 text-xs font-medium tracking-wide text-[var(--muted)]">
          {role.tags}
        </p>
      )}
    </li>
  );
}

export default function ResumeContent() {
  return (
    <article className="mx-auto max-w-3xl pb-20 pt-6">
      {/* Header */}
      <header className="border-b border-[var(--line)] pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
          Ally Zach
        </h1>
        <p className="mt-2 text-base font-semibold text-[var(--accent-strong)] sm:text-lg">
          Research Engineer · Data Scientist
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
          <span>Portland, Oregon · Remote</span>
          <span aria-hidden className="text-[var(--line-strong)]">
            ·
          </span>
          <a
            href="mailto:allyzach28@gmail.com"
            className="transition-colors hover:text-[var(--accent-strong)]"
          >
            allyzach28@gmail.com
          </a>
          <span aria-hidden className="text-[var(--line-strong)]">
            ·
          </span>
          <a
            href="https://allyzach.com"
            className="transition-colors hover:text-[var(--accent-strong)]"
          >
            allyzach.com
          </a>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${s.label} — ${s.handle}`}
              title={`${s.label} · ${s.handle}`}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--line)] text-[var(--body)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent-strong)]"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
                className="h-4 w-4"
              >
                {s.icon}
              </svg>
            </a>
          ))}
        </div>
      </header>

      <div className="mt-10 space-y-12">
        <section>
          <SectionEyebrow>Experience</SectionEyebrow>
          <ol className="relative space-y-9 border-l border-[var(--line)] pl-7">
            {professional.map((r) => (
              <RoleEntry key={r.org} role={r} />
            ))}
          </ol>
        </section>

        <section>
          <SectionEyebrow>Earlier Experience</SectionEyebrow>
          <ol className="relative space-y-9 border-l border-[var(--line)] pl-7">
            {earlier.map((r) => (
              <RoleEntry key={r.org} role={r} />
            ))}
          </ol>
        </section>

        <section>
          <SectionEyebrow>Research &amp; Teaching</SectionEyebrow>
          <ol className="relative space-y-7 border-l border-[var(--line)] pl-7">
            {teaching.map((t) => (
              <li key={t.role} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[33px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-[var(--paper-elev)] bg-[var(--muted)]"
                />
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-sm font-bold text-[var(--ink)]">
                    {t.role}
                  </h3>
                  <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
                    {t.dates}
                  </p>
                </div>
                <p className="mt-0.5 text-xs font-medium text-[var(--muted)]">
                  University of Illinois at Urbana-Champaign · {t.advisor}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--body)]">
                  {t.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionEyebrow>Education</SectionEyebrow>
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
        </section>
      </div>
    </article>
  );
}
