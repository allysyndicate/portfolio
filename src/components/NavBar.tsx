"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { sections, observedSectionIds } from "./nav-data";
import { resumeHref } from "./resume-data";

type NavItem = (typeof sections)[number];

function isItemActive(item: NavItem, active: string) {
  if ("match" in item) return (item.match as readonly string[]).includes(active);
  return item.id === active;
}

export default function NavBar({ isResumePage = false }: { isResumePage?: boolean }) {
  const [active, setActive] = useState<string>(sections[0].id);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

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
    if (isResumePage) return;
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
  }, [isResumePage]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[border-color,background-color,box-shadow] duration-200 ease-[var(--ease-out)] motion-reduce:transition-none ${
        scrolled || menuOpen
          ? "border-[var(--line)] bg-[var(--paper)]/85 shadow-[var(--shadow-soft)] backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6 md:px-10 md:py-4">
        <a
          href={isResumePage ? "/#about" : "#about"}
          onClick={() => setMenuOpen(false)}
          className="text-base font-bold tracking-tight text-[var(--ink)] sm:text-lg"
        >
          Ally Zach<span className="text-[var(--accent)]">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Sections">
          {sections.map((s) => {
            const isActive = !isResumePage && isItemActive(s, active);
            return (
              <a
                key={s.id}
                href={`${isResumePage ? "/" : ""}#${s.id}`}
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
          {/* Resume opens a page inside the portfolio. */}
          <Link
            href={resumeHref}
            aria-current={isResumePage ? "page" : undefined}
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

        <div className="flex items-center gap-2 md:hidden">
          <Link
            href={resumeHref}
            onClick={() => setMenuOpen(false)}
            aria-current={isResumePage ? "page" : undefined}
            className="group inline-flex min-h-11 items-center gap-1.5 rounded-md bg-[#B25232] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 ease-[var(--ease-out)] hover:bg-[var(--accent-strong)]"
          >
            Resume
            <span
              aria-hidden
              className="inline-block transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-section-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[var(--line-strong)] text-[var(--ink)] transition-colors hover:bg-[var(--paper-tint)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" aria-hidden className="h-5 w-5">
              <path d={menuOpen ? "M6 6l12 12M6 18 18 6" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>
      </div>
      <nav
        id="mobile-section-menu"
        aria-label="Mobile sections"
        hidden={!menuOpen}
        className="border-t border-[var(--line)] bg-[var(--paper)] px-4 py-2 shadow-[var(--shadow-soft)] sm:px-6 md:hidden"
      >
        {sections.map((s) => {
          const isActive = !isResumePage && isItemActive(s, active);
          return (
            <a
              key={s.id}
              href={`${isResumePage ? "/" : ""}#${s.id}`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`flex min-h-11 items-center rounded-md px-3 text-sm font-medium transition-colors hover:bg-[var(--paper-tint)] focus-visible:outline-2 focus-visible:outline-[var(--accent)] ${
                isActive ? "text-[var(--accent-strong)]" : "text-[var(--body)]"
              }`}
            >
              {s.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
