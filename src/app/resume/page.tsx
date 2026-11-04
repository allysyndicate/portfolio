import type { Metadata } from "next";
import Link from "next/link";
import GlowBackground from "@/components/GlowBackground";
import NavBar from "@/components/NavBar";
import ResumeViewer from "@/components/ResumeViewer";
import { resumePdfHref } from "@/components/resume-data";

export const metadata: Metadata = {
  title: "Resume · Ally Zach",
  description: "Ally Zach’s resume: research engineering, data science, and software development.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <GlowBackground />
      <NavBar isResumePage />
      <main className="relative z-10 mx-auto max-w-screen-xl px-4 pt-24 pb-12 sm:px-6 sm:pt-28 md:px-10">
        <Link
          href="/#about"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent-strong)] sm:min-h-0"
        >
          <span aria-hidden>←</span> Back to portfolio
        </Link>
        <div className="mt-6 flex flex-wrap items-end justify-between gap-5">
          <div>
            <h1 className="text-3xl font-semibold tracking-[-0.035em] text-[var(--ink)] sm:text-4xl">
              Resume
            </h1>
            <p className="mt-2 text-sm text-[var(--body)]">
              Ally Zach · Research engineer · Data scientist
            </p>
          </div>
          <a
            href={resumePdfHref}
            download="Alexandra_Zach_Resume.pdf"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[var(--accent-button)] px-4 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-soft)] transition-colors hover:bg-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:min-h-0"
          >
            Download PDF <span aria-hidden>↓</span>
          </a>
        </div>
        <section
          aria-label="Resume document"
          className="mt-8 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--paper-elev)] shadow-[var(--shadow-card)]"
        >
          <ResumeViewer />
        </section>
      </main>
    </>
  );
}
