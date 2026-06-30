import { socials } from "./Sections";

export default function Hero() {
  return (
    <section
      id="about"
      aria-label="Introduction"
      className="relative scroll-mt-24 pt-20 pb-14 sm:pt-24 sm:pb-20 md:pt-28 md:pb-28 lg:pt-28"
    >
      <div
        aria-hidden
        className="grid-texture pointer-events-none absolute inset-0 -z-10"
      />
      <div className="grid grid-cols-1 gap-x-10 gap-y-8 md:items-start md:gap-x-12 md:grid-cols-[minmax(0,1.6fr)_minmax(14rem,0.8fr)] md:[grid-template-areas:'head_photo'_'body_photo'_'body_tags'] lg:gap-x-16">
        {/* A — heading */}
        <div className="md:[grid-area:head]">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-[var(--slate-lightest)] sm:text-4xl lg:text-5xl">
            Ally Zach
          </h1>
          <div className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            About
          </div>
        </div>

        {/* B — photo card + social links */}
        <div className="mx-auto w-full max-w-[15rem] md:mx-0 md:[grid-area:photo]">
          <div className="flex flex-col items-center">
            <div className="relative mx-auto aspect-square w-full max-w-[15rem]">
              <div
                aria-hidden
                className="absolute inset-0 rounded-full border-2 border-[var(--accent)]/70"
                style={{ clipPath: "inset(0 0 0 35%)" }}
              />
              <div className="absolute inset-5 overflow-hidden rounded-full ring-1 ring-white/5 sm:inset-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/twitter%20pro.jpg"
                  alt="Ally Zach"
                  className="h-full w-full object-cover object-center grayscale"
                />
              </div>
              <span
                aria-hidden
                className="pointer-events-none absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--accent)]/45"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute right-2 top-8 h-1.5 w-8 rounded-full bg-[var(--accent)]/25"
              />
            </div>
            <div className="mt-4 flex w-full flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} - ${s.handle}`}
                  title={`${s.label} - ${s.handle}`}
                  className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-[var(--accent)]/25 bg-[var(--bg-elev)]/80 px-2.5 py-1.5 text-xs font-medium text-[var(--slate-light)] shadow-sm shadow-black/10 transition-all hover:border-[var(--accent)]/60 hover:bg-[var(--accent-tint)] hover:text-[var(--accent)]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                    className="h-3.5 w-3.5 shrink-0"
                  >
                    {s.icon}
                  </svg>
                  <span className="whitespace-nowrap">
                    {s.label === "Twitter / X" ? "X / Twitter" : s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* C — narrative body */}
        <div className="max-w-[33rem] text-[15px] leading-[1.7] text-[var(--slate)] md:[grid-area:body]">
          <p className="mt-2 md:mt-0">
            I started my career as a{" "}
            <strong className="font-semibold text-[var(--slate-lightest)]">
              structural engineer
            </strong>
            , earning degrees in civil engineering and spending nearly five
            years designing and analyzing complex buildings and infrastructure.
            It was technical, rigorous work, and it taught me how to reason
            through complex systems with real constraints.
          </p>
          <p className="mt-4">
            But the more time I spent inside that world, the more I found myself
            pulled toward a different kind of building. At MKA, I started writing
            tools to automate repeatable design processes: small scripts and
            workflows that made engineering work faster, cleaner, and less
            manual.
          </p>
          <p className="mt-4">That was the opening.</p>
          <p className="mt-4">
            I kept teaching myself to code, starting with Python, then
            JavaScript, then full-stack development. Eventually, that curiosity
            moved beyond engineering workflows and into algorithmic trading,
            where software, data, markets, and fast feedback loops all collided.
          </p>
          <p className="mt-4">
            That path pulled me into{" "}
            <strong className="font-semibold text-[var(--slate-lightest)]">
              crypto and startup land
            </strong>
            , where the learning curve was steeper and the work sat closer to
            data science, research, and product.
          </p>
          <p className="mt-4">
            Today, I&apos;m the second member of{" "}
            <strong className="font-semibold text-[var(--slate-lightest)]">
              Pantera&apos;s in-house research team
            </strong>
            , where I work across research, data products, technical writing,
            portfolio support, mechanism design, and full-stack development.
          </p>
          <p className="mt-4">
            The thread through all of it is that I like learning messy systems
            from the inside out, finding the real workflow underneath the noise,
            and building tools that make the work sharper, faster, or clearer.
          </p>
          <p className="mt-4">
            <strong className="font-semibold text-[var(--slate-lightest)]">
              AI
            </strong>{" "}
            has accelerated that instinct. It changed how I research, build,
            automate, and reason through complex problems, and eventually led me
            to cofound{" "}
            <strong className="font-semibold text-[var(--slate-lightest)]">
              Syndicate
            </strong>
            , an AI agent orchestration app for coordinating specialized agents
            across messy, multi-step workflows.
          </p>
        </div>

        {/* D — focus tags */}
        <ul className="mx-auto flex w-full max-w-[17rem] flex-wrap gap-2 md:mx-0 md:max-w-none md:[grid-area:tags]">
          {[
            "Structural Engineering",
            "Self-Taught Developer",
            "Crypto Research",
            "Data Products",
            "Mechanism Design",
            "AI Agent Orchestration",
          ].map((k) => (
            <li
              key={k}
              className="whitespace-nowrap rounded-lg border border-[var(--accent)]/40 bg-[var(--accent-tint)] px-2.5 py-1 text-xs font-semibold tracking-wide text-[var(--slate-lightest)] transition-colors hover:border-[var(--accent)]"
            >
              {k}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
