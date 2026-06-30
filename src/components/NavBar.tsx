"use client";

import { useEffect, useState } from "react";
import { sections, observedSectionIds } from "./nav-data";

type NavItem = (typeof sections)[number];

function isItemActive(item: NavItem, active: string) {
  if ("match" in item) return (item.match as readonly string[]).includes(active);
  return item.id === active;
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
      className="h-5 w-5"
    >
      {open ? (
        <path d="M6 6l12 12M18 6 6 18" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export default function NavBar() {
  const [active, setActive] = useState<string>(sections[0].id);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    observedSectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[var(--bg)]/80 backdrop-blur"
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6 md:px-10 md:py-4">
        <a
          href="#about"
          className="text-base font-bold tracking-tight text-[var(--slate-lightest)] sm:text-lg"
        >
          Ally Zach<span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Sections">
          {sections.map((s) => {
            const isActive = isItemActive(s, active);
            return (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent)]"
                    : "text-[var(--slate)] hover:text-[var(--slate-lightest)]"
                }`}
              >
                {s.label}
              </a>
            );
          })}
          {/* TODO: replace with updated 2026 resume before making resume CTA public.
              Hidden temporarily — current /Ally Zach Resume.pdf is stale and exposes a home street address. */}
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-[var(--slate-lightest)] md:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-white/5 bg-[var(--bg)] px-4 py-4 shadow-xl shadow-black/20 sm:px-6 md:hidden"
          aria-label="Sections"
        >
          <ul className="space-y-1">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-2 py-2 text-sm font-medium transition-colors ${
                    isItemActive(s, active)
                      ? "bg-[var(--accent-tint)] text-[var(--accent)]"
                      : "text-[var(--slate)] hover:text-[var(--slate-lightest)]"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
            {/* TODO: replace with updated 2026 resume before making resume CTA public.
                Hidden temporarily — current /Ally Zach Resume.pdf is stale and exposes a home street address. */}
          </ul>
        </nav>
      )}
    </header>
  );
}
