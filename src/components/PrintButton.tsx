"use client";

/**
 * "Print / save PDF" action for the /resume page. Uses the browser's print
 * dialog so the PDF is always generated from the live page - no separate
 * resume file to keep in sync (see the stale-PDF TODO in Sections.tsx).
 */
export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition-colors duration-150 ease-[var(--ease-out)] hover:border-[var(--accent)] hover:text-[var(--accent-strong)] print:hidden"
    >
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
        <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v7H6z" />
      </svg>
      Print / save PDF
    </button>
  );
}
