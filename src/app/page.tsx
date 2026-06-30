import GlowBackground from "@/components/GlowBackground";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import { Chapters, SideProjects, Education, Resume, Contact, socials } from "@/components/Sections";

export default function Home() {
  return (
    <>
      <GlowBackground />
      <NavBar />
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 sm:px-6 md:px-10">
        <main>
          <Hero />
          <Chapters />
          <SideProjects />
          <Education />
          <Resume />
          <Contact />
          <footer className="border-t border-white/5 py-8 text-center text-xs leading-relaxed text-[var(--slate)] sm:py-10">
            <div className="mb-4 flex items-center justify-center gap-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} — ${s.handle}`}
                  title={`${s.label} · ${s.handle}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--accent)]/40 bg-[var(--accent-tint)] text-[var(--accent)] transition-all hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white hover:shadow-lg hover:shadow-[var(--accent)]/30"
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
            Built with Next.js, React, and Tailwind. Placeholder content — final
            copy in progress.
          </footer>
        </main>
      </div>
    </>
  );
}
