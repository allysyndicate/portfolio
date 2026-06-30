import { socials } from "./Sections";

const supporting =
  "I started as a structural engineer, then taught myself software by automating repeatable design work at MKA. That thread pulled me into algorithmic trading, crypto research, data products, and now AI agent orchestration.";

const currently =
  "Currently on Pantera's in-house research team and technical cofounder of Syndicate.";

const proof = [
  {
    title: "Started in structures",
    body: "Nearly five years designing and analyzing complex buildings and infrastructure, where real constraints mattered.",
  },
  {
    title: "Built my way into software",
    body: "Self-taught through Python, JavaScript, full-stack projects, MKA automation tools, and algorithmic trading systems.",
  },
  {
    title: "Now building research + agent systems",
    body: "Data products, technical research, full-stack tools, mechanism design, and AI agent workflows at Pantera and Syndicate.",
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
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent-tint)] text-[var(--accent)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:shadow-[var(--accent)]/30"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="h-5 w-5">
            {s.icon}
          </svg>
        </a>
      ))}
    </div>
  );
}

function ProofStrip() {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {proof.map((p) => (
        <li
          key={p.title}
          className="group rounded-2xl border border-white/10 bg-[var(--bg-elev)]/70 p-5 transition-colors hover:border-[var(--accent)]/40"
        >
          <h3 className="text-sm font-semibold tracking-tight text-[var(--slate-lightest)]">
            <span className="text-[var(--accent)]">→ </span>
            {p.title}
          </h3>
          <p className="mt-2 text-sm leading-[1.6] text-[var(--slate)]">{p.body}</p>
        </li>
      ))}
    </ul>
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

      <div className="flex flex-col gap-y-10 md:grid md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-x-14 md:gap-y-0">
        {/* Name + eyebrow */}
        <div className="order-1 md:col-start-1 md:row-start-1">
          <div className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent)]">
            About
          </div>
          <div className="mt-2 text-base font-semibold tracking-tight text-[var(--slate-light)]">
            Ally Zach
          </div>
        </div>

        {/* Photo + social (right column on desktop) */}
        <div className="order-2 md:order-none md:col-start-2 md:row-span-5 md:row-start-1 md:self-center">
          <Photo />
          <div className="mt-7 hidden md:block">
            <SocialLinks />
          </div>
        </div>

        {/* Headline */}
        <h1 className="order-3 max-w-[15ch] text-4xl font-bold leading-[1.04] tracking-tight text-[var(--slate-lightest)] sm:text-5xl lg:text-[3.75rem] md:col-start-1 md:row-start-2">
          I used to design buildings.{" "}
          <span className="text-[var(--accent)]">Now I build tools for messy systems.</span>
        </h1>

        {/* Supporting paragraph */}
        <p className="order-4 max-w-[34rem] text-base leading-[1.7] text-[var(--slate-light)] sm:text-lg md:col-start-1 md:row-start-3">
          {supporting}
        </p>

        {/* Currently line */}
        <p className="order-5 flex items-center gap-2.5 text-sm text-[var(--slate)] md:col-start-1 md:row-start-4">
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

        {/* CTA buttons */}
        <div className="order-7 flex flex-wrap items-center gap-3 md:col-start-1 md:row-start-5">
          <a
            href="#pantera"
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[var(--accent-strong)] hover:shadow-lg hover:shadow-[var(--accent)]/30"
          >
            View work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent-tint)] px-6 py-3 text-sm font-semibold text-[var(--slate-lightest)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-white"
          >
            Say hello
          </a>
        </div>
      </div>

      {/* Three-card proof strip below the hero. */}
      <div className="mt-12 md:mt-16">
        <ProofStrip />
      </div>
    </section>
  );
}
