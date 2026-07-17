"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const update = () => {
      setScrolled(window.scrollY > 8);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background-color,box-shadow] duration-200 ease-[var(--ease-out)] motion-reduce:transition-none ${
        scrolled || open
          ? "border-[var(--line)] bg-[var(--paper)]/85 shadow-[var(--shadow-soft)] backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6 md:px-10 md:py-4">
        <a
          href="#about"
          className="text-base font-bold tracking-tight text-[var(--ink)] sm:text-lg"
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
                className={`relative text-sm font-medium transition-colors ${
                  isActive
                    ? "text-[var(--accent-strong)]"
                    : "text-[var(--muted)] hover:text-[var(--ink)]"
                }`}
              >
                {s.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-[var(--accent-strong)] transition-transform duration-200 ease-[var(--ease-out)] motion-reduce:transition-none ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
          {/* Resume is a filled button (not a plain tab) to signal it opens a
              separate page. Links the HTML page, not the PDF, so no address is
              exposed. #B25232 = terracotta midpoint that keeps white text at 4.5:1. */}
          <Link
            href="/resume"
            className="group inline-flex items-center gap-1.5 rounded-md bg-[#B25232] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 ease-[var(--ease-out)] hover:bg-[var(--accent-strong)]"
          >
            Resume
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-[var(--line)] text-[var(--ink)] md:hidden"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      <div
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity,visibility] duration-[250ms] ease-[var(--ease-out)] motion-reduce:transition-none md:hidden ${
          open
            ? "visible grid-rows-[1fr] opacity-100"
            : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <nav
          className="overflow-hidden border-t border-[var(--line)] bg-[var(--paper)] shadow-[var(--shadow-card)]"
          aria-label="Sections"
        >
          <ul className="space-y-1 px-4 py-4 sm:px-6">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded px-2 py-2 text-sm font-medium transition-colors ${
                    isItemActive(s, active)
                      ? "bg-[var(--accent-tint)] text-[var(--accent-strong)]"
                      : "text-[var(--muted)] hover:text-[var(--ink)]"
                  }`}
                >
                  {s.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Link
                href="/resume"
                onClick={() => setOpen(false)}
                className="group flex items-center justify-center gap-1.5 rounded-md bg-[#B25232] px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 ease-[var(--ease-out)] hover:bg-[var(--accent-strong)]"
              >
                Resume
                <span
                  aria-hidden
                  className="inline-block transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
