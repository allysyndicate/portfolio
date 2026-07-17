"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Transition delay in ms (staggering). */
  delay?: number;
  /** Element tag to render, e.g. "section", "li". */
  as?: ElementType;
};

/**
 * Scroll-entrance reveal: fades/slides content in the first time it scrolls
 * into view. Server-renders VISIBLE so content is never hidden without JS;
 * the hidden state is applied only after hydration, only for elements below
 * the fold, and never under prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
}: RevealProps) {
  const Tag = as as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [hidden, setHidden] = useState(false); // visible until mount decides otherwise
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    // Already in the viewport on mount (above the fold): never hide,
    // so there is no first-paint flash.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    setHidden(true);
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isHidden = hidden && !revealed;

  return (
    <Tag
      ref={ref}
      className={[
        className,
        hidden ? "transition-[opacity,transform] duration-[650ms]" : "",
        isHidden ? "translate-y-3.5 opacity-0" : "translate-y-0 opacity-100",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        transitionTimingFunction: "var(--ease-out)",
        transitionDelay: delay ? `${delay}ms` : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
