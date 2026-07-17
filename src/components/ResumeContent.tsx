import { socials } from "./socials";

/**
 * The complete resume, rendered on the /resume route, transcribed from the
 * current resume document (Ally Zach Resume.docx). One cohesive panel in the
 * site's light theme. The home street address and phone number from the source
 * document are intentionally omitted (this is a public page).
 */

type Entry = {
  org: string;
  title: string;
  location?: string;
  dates?: string;
  href?: string;
  summary?: string;
  bullets: string[];
};

const work: Entry[] = [
  {
    org: "Pantera Capital",
    title: "Research Engineer",
    location: "Remote",
    dates: "April 2024 – Present",
    href: "https://panteraresearchlab.xyz",
    summary:
      "Cross-functional research engineer spanning data science, technical writing, portfolio-company advisory, and full-stack development.",
    bullets: [
      "Led a Kalshi vs. Polymarket prediction-markets study across 282 NFL games using Kyle-style price-impact modeling.",
      "Co-authored “The State of Tokenization,” tracking 593 tokenized assets worth $320.6B and their value-creation mechanics.",
      "Built the companion open-source Tokenization Data Portal with on- and off-chain data ingestion.",
      "Co-authored “Decoding DATs Beyond mNAV,” analyzing the ~$117B digital-asset-treasury sector with a two-part valuation framework.",
      "Shipped the companion DAT Dashboard built on SEC 10-Q/8-K regex and semantic parsing.",
    ],
  },
  {
    org: "Messari",
    title: "Enterprise Research Analyst",
    location: "Remote",
    dates: "April 2022 – April 2024",
    href: "https://messari.io/research/ally-zach",
    bullets: [
      "Authored 50+ long-form research reports spanning L1s, L2s, NFTs, DeFi, and consumer applications.",
      "Drove network- and application-level user analytics to surface actionable insights.",
      "Built SQL and Python dashboards and ingestion tools that automated data analysis and visualization.",
      "Designed a ChatGPT-powered Slackbot that automated research database creation and boosted team output.",
      "Partnered with founders and research leads of top projects to enrich technical data and deepen research.",
    ],
  },
  {
    org: "Magnusson Klemencic Associates",
    title: "Structural Engineer",
    location: "Seattle, WA",
    dates: "July 2018 – March 2022",
    bullets: [
      "Specialized in high-seismic and high-wind foundation design and performance-based design of high-rise towers.",
      "Designed and coordinated construction of 7M+ sq ft of high-rise residential towers across Southeast Asia.",
      "Built office-wide design and analysis tools in Excel, Visual Basic, and Python to accelerate project delivery.",
    ],
  },
  {
    org: "KPFF Consulting Engineers",
    title: "Structural Engineering Intern",
    location: "Seattle, WA",
    dates: "May 2017 – August 2017",
    bullets: [
      "Designed beam haunches, retaining walls, and steel connections for the new REI headquarters.",
      "Reviewed steel and rebar shop drawings for the SeaTac International Arrivals Facility expansion.",
    ],
  },
  {
    org: "HNTB Corporation",
    title: "Structural Engineering Intern, Bridge Design",
    location: "Chicago, IL",
    dates: "May 2016 – August 2016",
    bullets: [
      "Produced load ratings for a Detroit bascule bridge using CSiBridge and gravity load calculations.",
      "Performed and documented fracture-critical, element-level, and routine inspections on Chicago bridges.",
    ],
  },
];

const projects: Entry[] = [
  {
    org: "Syndicate",
    title: "Technical Founder",
    href: "https://usesyndicate.org",
    summary:
      "Friendly, approachable, and efficient desktop app that lets people with or without a software-engineering background build applications, send emails, and run teams of AI agents.",
    bullets: [
      "Technical founder and sole engineer: built the entire cross-platform Electron/React desktop app, partnering with a cofounder who runs the business side.",
      "Created the product out of a tool we wanted to use daily ourselves, across work and personal projects.",
      "Designed an Atlas manager layer that decomposes goals into tasks and dispatches them to specialist agents.",
      "Built a provider-agnostic runtime combining Claude, OpenAI, and Gemini models on a single team.",
    ],
  },
];

const teaching = [
  {
    role: "Design of Structural Systems",
    sub: "Teaching Assistant · Dr. Daniel Abrams & Dr. James LaFave",
    dates: "January 2018 – May 2018",
    detail:
      "Led the CEE 465 capstone design through lectures and studio sessions, preparing assignments and submittal guidelines.",
  },
  {
    role: "Steel Structures I",
    sub: "Teaching Assistant · Dr. James LaFave",
    dates: "August 2017 – December 2017",
    detail:
      "Taught CEE 460 structural steel theory and AISC Steel Construction Manual use via lectures, studios, and office hours.",
  },
  {
    role: "University of Illinois Expansion and Planning",
    sub: "Research Assistant · Associate Dean Dr. Liang Liu",
    dates: "April 2015 – May 2018",
    detail:
      "Built an interactive campus Revit model and researched future College of Engineering building projects with faculty.",
  },
  {
    role: "General Education Course Data Project",
    sub: "Research Assistant · Assistant Provost and DMI Amy Edwards",
    dates: "November 2015 – January 2016",
    detail:
      "Analyzed six years of general-education enrollment data in Excel, surfacing trends for faculty and the board.",
  },
];

const honors = [
  "James Scholar Honors Program",
  "College of Engineering Dean's List",
  "Engineering Visionary Scholar",
  "C.S. and Ruth Monnier Scholarship",
  "Corsetti Scholarship Fund",
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

function EntryItem({ entry }: { entry: Entry }) {
  return (
    <li className="relative">
      <span
        aria-hidden
        className="absolute -left-[35px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--paper-elev)] bg-[var(--accent)]"
      />
      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h3 className="flex items-center gap-2 text-lg font-bold tracking-tight text-[var(--ink)]">
          {entry.href ? (
            <a
              href={entry.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--accent-strong)]"
            >
              {entry.org}
              <span className="text-[var(--muted)]">
                <ExternalIcon />
              </span>
            </a>
          ) : (
            entry.org
          )}
        </h3>
        {entry.dates && (
          <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            {entry.dates}
          </p>
        )}
      </div>
      <p className="mt-0.5 text-sm font-semibold text-[var(--accent-strong)]">
        {entry.title}
        {entry.location && (
          <span className="font-medium text-[var(--muted)]"> · {entry.location}</span>
        )}
      </p>
      {entry.summary && (
        <p className="mt-2 text-sm leading-relaxed text-[var(--body)]">
          {entry.summary}
        </p>
      )}
      <ul className="mt-3 space-y-2">
        {entry.bullets.map((b) => (
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
    </li>
  );
}

export default function ResumeContent() {
  return (
    <article className="mx-auto max-w-3xl pb-20 pt-6">
      {/* Header - street address and phone from the source doc omitted (public page). */}
      <header className="border-b border-[var(--line)] pb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[var(--ink)] sm:text-4xl">
          Ally Zach
        </h1>
        <p className="mt-2 text-base font-semibold text-[var(--accent-strong)] sm:text-lg">
          Research Engineer · Data Scientist
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
          <span>Wilsonville, Oregon</span>
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
              aria-label={`${s.label} · ${s.handle}`}
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
          <SectionEyebrow>Work Experience</SectionEyebrow>
          <ol className="relative space-y-9 border-l border-[var(--line)] pl-7">
            {work.map((e) => (
              <EntryItem key={e.org} entry={e} />
            ))}
          </ol>
        </section>

        <section>
          <SectionEyebrow>Projects</SectionEyebrow>
          <ol className="relative space-y-9 border-l border-[var(--line)] pl-7">
            {projects.map((e) => (
              <EntryItem key={e.org} entry={e} />
            ))}
          </ol>
        </section>

        <section>
          <SectionEyebrow>Education</SectionEyebrow>
          <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
            <h3 className="text-lg font-bold tracking-tight text-[var(--ink)]">
              University of Illinois at Urbana-Champaign
            </h3>
            <p className="shrink-0 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
              M.S. May 2018 · B.S. May 2017
            </p>
          </div>
          <p className="mt-1 text-sm font-medium text-[var(--body)]">
            Civil &amp; Environmental Engineering, minor in Business
          </p>
          <p className="mt-1 text-sm text-[var(--muted)]">
            Areas of emphasis: Structural Engineering &amp; Construction Management
          </p>
          <div className="mt-5">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--muted)]">
              Honors &amp; Awards
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

        <section>
          <SectionEyebrow>Research &amp; Teaching Experience</SectionEyebrow>
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
                  University of Illinois at Urbana-Champaign · {t.sub}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--body)]">
                  {t.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionEyebrow>Skills &amp; Proficiencies</SectionEyebrow>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-md border border-[var(--line)] bg-[var(--paper)] px-3 py-1.5 text-xs font-semibold text-[var(--body)]"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
