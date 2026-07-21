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
 * Employer header - ONE layout for every chapter: eyebrow → heading (+ link
 * chip) → role/location/years meta → intro → tagline. It always stays an OPEN
 * section header above the project grid - never boxed in with the cards.
 * Pantera (first employer) renders slightly larger; the structure is identical.
 */
function ChapterHeader({ c, variant }: { c: Chapter; variant: ChapterVariant }) {
  const first = variant === "pantera";
  return (
    <Reveal className="mb-12">
      <ChapterEyebrowHeading c={c} large={first} />
      <ChapterMeta c={c} />
      {/* Full intro from sm up; phones get the one-line version. */}
      <p
        className={`mt-3 hidden max-w-[720px] leading-relaxed text-[var(--body)] sm:block ${
          first ? "text-base" : "text-sm"
        }`}
      >
        {c.intro}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--body)] sm:hidden">
        {c.introShort}
      </p>
      {c.tagline && (
        <p className="mt-4 max-w-[720px] text-sm font-semibold text-[var(--ink)]">
          {c.tagline}
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
            className={`relative mx-[calc(50%-50vw)] scroll-mt-24 ${
              tinted ? "band-tint" : ""
            }`}
          >
            <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-24 md:px-10 lg:py-[120px]">
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

/** Small on-palette icons for the Syndicate capability rows - same restrained
 * stroke language as the Hero chart/network motifs. */
function IconTeam() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden
      className="h-4.5 w-4.5"
    >
      <circle cx="6" cy="7" r="2.4" />
      <circle cx="18" cy="7" r="2.4" />
      <circle cx="12" cy="17" r="2.4" />
      <path d="M7.8 8.8 10.4 15M16.2 8.8 13.6 15M8.4 7h7.2" />
    </svg>
  );
}

function IconManager() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="h-4.5 w-4.5"
    >
      <rect x="9" y="3" width="6" height="5" rx="1.2" />
      <rect x="3" y="16" width="6" height="5" rx="1.2" />
      <rect x="15" y="16" width="6" height="5" rx="1.2" />
      <path d="M12 8v4M12 12H6v4M12 12h6v4" />
    </svg>
  );
}

function IconControl() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      aria-hidden
      className="h-4.5 w-4.5"
    >
      <path d="M4 7h16M4 17h16" />
      <circle cx="15" cy="7" r="2.4" fill="var(--paper-elev)" />
      <circle cx="9" cy="17" r="2.4" fill="var(--paper-elev)" />
    </svg>
  );
}

const syndicateCapabilities = [
  {
    lead: "Multi-model agent teams",
    rest: "Claude, OpenAI, and Gemini agents on one team, each doing what it does best.",
    icon: <IconTeam />,
  },
  {
    lead: "Manager-led task coordination",
    rest: "A manager agent breaks your goal into tasks and keeps every specialist on target.",
    icon: <IconManager />,
  },
  {
    lead: "Human control over autonomy",
    rest: "You decide how much runs without you, from fully hands-off to approving every step.",
    icon: <IconControl />,
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
      className="band-tint relative mx-[calc(50%-50vw)] scroll-mt-24"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-14 sm:px-6 sm:py-24 md:px-10 lg:py-[120px]">
        <Reveal
          as="h2"
          className="mb-8 text-center text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:mb-10 sm:text-4xl"
        >
          What I&apos;m Building
        </Reveal>
        <Reveal className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-elev)] shadow-[var(--shadow-feature)]">
          {/* Feature split: pitch column left, product visual right. */}
          <div className="grid md:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col p-6 sm:p-8 lg:p-12">
              <h3 className="flex justify-start leading-none">
                <span className="sr-only">Syndicate</span>
                <span aria-hidden className="block w-full max-w-[17rem]">
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
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-strong)]">
                Technical Cofounder
              </p>

              <p className="mt-6 max-w-[36rem] text-sm leading-relaxed text-[var(--body)] sm:text-base">
                I&apos;m the technical cofounder and sole engineer behind
                Syndicate. I built it to solve a problem I faced firsthand:
                coordinating multiple AI agents across complex work without
                losing visibility or control.
              </p>

              <ul className="mt-7 space-y-5">
                {syndicateCapabilities.map((cap) => (
                  <li key={cap.lead} className="flex gap-3.5">
                    <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--accent)]/25 bg-[var(--accent-tint)] text-[var(--accent)]">
                      {cap.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[var(--ink)]">
                        {cap.lead}
                      </p>
                      {/* Detail line is sm+ only - phones scan icon + lead. */}
                      <p className="mt-0.5 hidden text-sm leading-relaxed text-[var(--body)] sm:block">
                        {cap.rest}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 md:mt-auto md:pt-8">
                <a
                  href="https://usesyndicate.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  /* #B25232 = terracotta midpoint between --accent and --accent-strong;
                     white text passes 4.5:1 at rest (plain --accent falls just short). */
                  className="group inline-flex shrink-0 items-center justify-center rounded-md bg-[#B25232] px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 ease-[var(--ease-out)] hover:bg-[var(--accent-strong)]"
                >
                  Visit usesyndicate.org
                  <span className="ml-1 transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>

            {/* Product visual: app screenshot in a window frame on a soft
                accent wash, so the flagship build reads as a product shot. */}
            <div className="relative flex items-center justify-center overflow-hidden border-t border-[var(--line)] p-6 sm:p-8 md:border-l md:border-t-0 lg:p-10">
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-[var(--accent-tint)] via-transparent to-[var(--accent-tint)]"
              />
              <div className="group relative w-full max-w-[34rem] overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--paper-elev)] shadow-[var(--shadow-feature)] transition duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:shadow-[0_24px_70px_var(--accent-tint)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/syndicate-app.webp"
                  alt="Syndicate desktop app, team workspace running autonomous AI agents"
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <details className="group border-t border-[var(--line)] px-6 py-5 sm:px-8 lg:px-12">
            {/* Secondary action styled to pair with the solid "Visit
                usesyndicate.org" CTA above: same rounded-md geometry and
                padding, outlined in the accent instead of filled. */}
            <summary className="mx-auto flex w-fit cursor-pointer select-none list-none items-center gap-1.5 rounded-md border border-[var(--accent)]/40 px-5 py-2.5 text-sm font-semibold text-[var(--accent-strong)] transition-colors duration-150 ease-[var(--ease-out)] hover:border-[var(--accent)] hover:bg-[var(--accent-tint)] [&::-webkit-details-marker]:hidden">
              Technical details
              <span
                className="transition-transform duration-200 ease-[var(--ease-out)] group-open:rotate-90"
                aria-hidden
              >
                →
              </span>
            </summary>
            <ul className="mt-5 grid gap-x-10 gap-y-4 pb-2 text-sm leading-relaxed text-[var(--body)] md:grid-cols-2">
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
        </Reveal>
      </div>
    </section>
  );
}

/**
 * Compact horizontal Education strip near the bottom of the homepage. The full
 * degree detail + honors/scholarships live in the Full Record (/resume).
 */
/**
 * Two-column closing section: professional contact + email CTA on the left,
 * a single Outside Work paragraph on the right. The contact column stacks
 * first on mobile. (Education moved into the Background section.)
 */
export function Contact() {
  return (
    <Section id="contact" label="Get in touch" hideHeading>
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
            Get in touch
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-[var(--ink)] sm:text-4xl">
            Reach out.
          </h2>
          <p className="mt-4 max-w-[34rem] text-base leading-relaxed text-[var(--body)] sm:text-lg">
            I&apos;m based just outside Portland, Oregon. Reach out about
            research, data systems, AI products, or work that crosses those
            lines.
          </p>
          <a
            href="mailto:allyzach28@gmail.com"
            aria-label="Email Ally Zach"
            /* #B25232 = terracotta midpoint between --accent and --accent-strong;
               white text passes 4.5:1 at rest (plain --accent falls just short). */
            className="group mt-6 inline-flex items-center gap-1.5 rounded-md bg-[#B25232] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 ease-[var(--ease-out)] hover:bg-[var(--accent-strong)]"
          >
            Email me
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-1"
            >
              →
            </span>
          </a>
          {/* TODO: replace with updated 2026 resume before making resume CTA public.
              Hidden temporarily - current /Ally Zach Resume.pdf is stale (lists Messari
              as present role, no Pantera/Syndicate) and exposes a home street address. */}
          <div className="mt-8 flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} · ${s.handle}`}
                title={`${s.label} · ${s.handle}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--paper-elev)] text-[var(--body)] shadow-[var(--shadow-soft)] transition-all duration-200 ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent-tint)] hover:text-[var(--accent)]"
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
        </Reveal>

        <Reveal delay={120}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--accent-strong)]">
            Outside work
          </p>
          <p className="mt-4 text-base leading-relaxed text-[var(--body)] sm:text-lg">
            Outside work, I&apos;m usually cooking, snowboarding,
            paddleboarding, following Chicago sports, or at home with my
            family, a toddler, a Bernese mountain dog, and two Ragdoll cats.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
