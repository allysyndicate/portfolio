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
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.5fr)_minmax(15rem,0.7fr)] lg:gap-14">
        <div className="order-last md:order-none">
          <h1 className="text-3xl font-bold leading-[1.05] tracking-tight text-[var(--slate-lightest)] sm:text-4xl lg:text-5xl">
            Ally Zach
          </h1>
          <div className="mt-3 text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
            ABOUT ME
          </div>
          <p className="mt-5 max-w-2xl leading-relaxed text-[var(--slate)] sm:mt-6">
            I started my career as a{" "}
            <strong className="font-semibold text-[var(--slate-lightest)]">
              structural engineer
            </strong>
            , earning degrees in civil engineering and spending nearly five
            years designing and analyzing complex buildings and infrastructure.
            It was technical, rigorous work, and it taught me how to reason
            through complex systems with real constraints.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--slate)]">
            But the more time I spent inside that world, the more I found myself
            pulled toward a different kind of building. At MKA, I started writing
            tools to automate repeatable design processes: small scripts and
            workflows that made engineering work faster, cleaner, and less
            manual.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--slate)]">
            That was the opening.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--slate)]">
            I kept teaching myself to code, starting with Python, then
            JavaScript, then full-stack development. Eventually, that curiosity
            moved beyond engineering workflows and into algorithmic trading,
            where software, data, markets, and fast feedback loops all collided.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--slate)]">
            That path pulled me into{" "}
            <strong className="font-semibold text-[var(--slate-lightest)]">
              crypto and startup land
            </strong>
            , where the learning curve was steeper and the work sat closer to
            data science, research, and product.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--slate)]">
            Today, I&apos;m the second member of{" "}
            <strong className="font-semibold text-[var(--slate-lightest)]">
              Pantera&apos;s in-house research team
            </strong>
            , where I work across research, data products, technical writing,
            portfolio support, mechanism design, and full-stack development.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--slate)]">
            The thread through all of it is that I like learning messy systems
            from the inside out, finding the real workflow underneath the noise,
            and building tools that make the work sharper, faster, or clearer.
          </p>
          <p className="mt-4 max-w-2xl leading-relaxed text-[var(--slate)]">
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
          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.label} - ${s.handle}`}
                title={`${s.label} - ${s.handle}`}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/25 bg-[var(--bg-elev)]/80 text-[var(--slate-light)] shadow-sm shadow-black/10 transition-all hover:-translate-y-0.5 hover:border-[var(--accent)]/60 hover:bg-[var(--accent-tint)] hover:text-[var(--accent)]"
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

        <div className="order-first mx-auto w-full max-w-[18rem] md:order-none">
          <div className="relative mx-auto aspect-square w-full max-w-[16.5rem] lg:max-w-[17.5rem]">
            <div
              aria-hidden
              className="absolute inset-0 rounded-full border-2 border-[var(--accent)]/70"
              style={{ clipPath: "inset(0 0 0 35%)" }}
            />
            <div className="absolute inset-6 overflow-hidden rounded-full ring-1 ring-white/5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/twitter%20pro.jpg"
                alt="Ally Zach"
                className="h-full w-full object-cover grayscale"
              />
            </div>
            <span
              aria-hidden
              className="absolute -left-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[var(--accent)]/45"
            >
            </span>
            <span
              aria-hidden
              className="absolute right-2 top-8 h-1.5 w-8 rounded-full bg-[var(--accent)]/25"
            >
            </span>
          </div>
        </div>
      </div>

      <ul className="mt-12 flex flex-wrap items-center gap-2 border-t border-white/5 pt-6 sm:mt-16 sm:gap-2.5 sm:pt-7">
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
            className="whitespace-nowrap rounded-lg border border-[var(--accent)]/40 bg-[var(--accent-tint)] px-3 py-1.5 text-xs font-semibold tracking-wide text-[var(--slate-lightest)] transition-colors hover:border-[var(--accent)] sm:text-sm"
          >
            {k}
          </li>
        ))}
      </ul>
    </section>
  );
}
