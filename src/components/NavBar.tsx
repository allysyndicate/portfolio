"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { sections, observedSectionIds } from "./nav-data";

type NavItem = (typeof sections)[number];

function isItemActive(item: NavItem, active: string) {
  if ("match" in item) return (item.match as readonly string[]).includes(active);
  return item.id === active;
}

export default function NavBar() {
  const [active, setActive] = useState<string>(sections[0].id);
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
        scrolled
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

        {/* Phones skip the section menu entirely: the page is one scroll, so
            the only nav that earns header space is the Resume button. */}
        <Link
          href="/resume"
          className="group inline-flex items-center gap-1.5 rounded-md bg-[#B25232] px-4 py-2 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors duration-150 ease-[var(--ease-out)] hover:bg-[var(--accent-strong)] md:hidden"
        >
          Resume
          <span
            aria-hidden
            className="inline-block transition-transform duration-200 ease-[var(--ease-out)] group-hover:translate-x-0.5"
          >
            →
          </span>
        </Link>
      </div>
    </header>
  );
}
