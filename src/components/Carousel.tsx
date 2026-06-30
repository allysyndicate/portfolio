"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { ProjectCard } from "./chapters";

function ArrowIcon({ direction }: { direction: "left" | "right" | "upRight" }) {
  const paths = {
    left: "M15 6l-6 6 6 6",
    right: "M9 6l6 6-6 6",
    upRight: "M7 17 17 7M10 7h7v7",
  };

  return (
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
      <path d={paths[direction]} />
    </svg>
  );
}

export default function Carousel({
  projects,
  label,
}: {
  projects: ProjectCard[];
  label: string;
}) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  // Drag-to-scroll (pointer). Suppress click after a real drag.
  const drag = useRef({ down: false, moved: false, startX: 0, startLeft: 0 });

  const cardWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.querySelector<HTMLElement>("[data-card]");
    if (!first) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0") || 0;
    return first.offsetWidth + gap;
  }, []);

  const scrollToIndex = useCallback(
    (i: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clamped = Math.max(0, Math.min(i, projects.length - 1));
      track.scrollTo({ left: clamped * cardWidth(), behavior: "smooth" });
    },
    [cardWidth, projects.length]
  );

  // Track active card from scroll position.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = cardWidth();
        if (w) setActive(Math.round(track.scrollLeft / w));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [cardWidth]);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    drag.current = {
      down: true,
      moved: false,
      startX: e.clientX,
      startLeft: track.scrollLeft,
    };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) {
      drag.current.moved = true;
      track.setPointerCapture?.(e.pointerId);
      track.style.scrollSnapType = "none";
    }
    track.scrollLeft = drag.current.startLeft - dx;
  };

  const endDrag = () => {
    const track = trackRef.current;
    if (!track) return;
    if (drag.current.moved) {
      track.style.scrollSnapType = "";
      scrollToIndex(Math.round(track.scrollLeft / cardWidth()));
    }
    drag.current.down = false;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(active - 1);
    }
  };

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        role="group"
        aria-roledescription="carousel"
        aria-label={`${label} projects`}
        tabIndex={0}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        className="carousel-track flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4 motion-reduce:scroll-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
      >
        {projects.map((p, i) => (
          <li
            key={p.title}
            data-card
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${projects.length}`}
            className="w-[86%] shrink-0 snap-start sm:w-[58%] lg:w-[46%]"
          >
            <a
              href={p.href}
              target={p.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              draggable={false}
              onClick={(e) => {
                if (drag.current.moved) e.preventDefault();
              }}
              className="group block h-full min-w-0 overflow-hidden rounded-lg border border-[var(--bg-elev)] bg-[var(--bg-elev)]/40 transition hover:border-[var(--accent)] hover:bg-[var(--bg-elev)]/70"
            >
              {p.img ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  draggable={false}
                  className="m-2 aspect-[16/10] w-[calc(100%-1rem)] rounded-md border border-[var(--bg-elev)] bg-[var(--bg-elev)] object-contain p-2 shadow-inner"
                />
              ) : (
                <div
                  className={`aspect-[16/10] w-full bg-gradient-to-br ${p.thumb} flex items-end p-4`}
                >
                  <span className="rounded bg-black/30 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--accent)] backdrop-blur">
                    Thumbnail
                  </span>
                </div>
              )}
              <div className="p-4">
                <h4 className="flex min-w-0 items-start gap-1.5 font-medium leading-snug text-[var(--slate-lightest)] group-hover:text-[var(--accent)]">
                  <span className="min-w-0 [overflow-wrap:anywhere]">{p.title}</span>
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[var(--slate)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[var(--accent-tint)] group-hover:text-[var(--accent)]">
                    <ArrowIcon direction="upRight" />
                  </span>
                </h4>
                <p className="mt-2 text-sm text-[var(--slate)]">
                  {p.descriptor}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>

      {/* Controls: dots + prev/next */}
      <div className="mt-2 flex items-center justify-between">
        <ul className="flex gap-2" aria-label="Carousel position">
          {projects.map((p, i) => (
            <li key={p.title}>
              <button
                type="button"
                aria-label={`Go to ${p.title}`}
                aria-current={i === active}
                onClick={() => scrollToIndex(i)}
                className={`h-2 rounded-full transition-all motion-reduce:transition-none ${
                  i === active
                    ? "w-6 bg-[var(--accent)]"
                    : "w-2 bg-[var(--slate)]/40 hover:bg-[var(--slate)]"
                }`}
              />
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => scrollToIndex(active - 1)}
            disabled={active === 0}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/25 bg-[var(--bg-elev)]/70 text-[var(--slate-light)] shadow-sm shadow-black/20 transition-all enabled:hover:-translate-y-0.5 enabled:hover:border-[var(--accent)] enabled:hover:bg-[var(--accent-tint)] enabled:hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowIcon direction="left" />
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => scrollToIndex(active + 1)}
            disabled={active === projects.length - 1}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--accent)]/25 bg-[var(--bg-elev)]/70 text-[var(--slate-light)] shadow-sm shadow-black/20 transition-all enabled:hover:-translate-y-0.5 enabled:hover:border-[var(--accent)] enabled:hover:bg-[var(--accent-tint)] enabled:hover:text-[var(--accent)] disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </div>
  );
}
