import type { Metadata } from "next";
import Link from "next/link";
import GlowBackground from "@/components/GlowBackground";
import ResumeContent from "@/components/ResumeContent";

export const metadata: Metadata = {
  title: "Resume · Ally Zach",
  description:
    "Full resume: research engineering at Pantera, technical founder of Syndicate, research at Messari, structural engineering at MKA, plus teaching, education, and skills.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <GlowBackground />
      <div className="relative z-10 mx-auto max-w-screen-xl px-4 pt-10 sm:px-6 md:px-10">
        <Link
          href="/#about"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--body)] transition-colors hover:text-[var(--accent-strong)]"
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
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
        <main>
          <ResumeContent />
        </main>
      </div>
    </>
  );
}
