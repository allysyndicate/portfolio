"use client";

import { useEffect } from "react";

export default function GlowBackground() {
  useEffect(() => {
    const handler = (e: PointerEvent) => {
      document.body.style.setProperty("--mx", `${e.clientX}px`);
      document.body.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  return (
    <div
      aria-hidden
      className="glow-bg pointer-events-none fixed inset-0 z-0 hidden lg:block"
    />
  );
}
