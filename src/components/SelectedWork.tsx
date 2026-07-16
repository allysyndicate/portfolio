/**
 * Selected Work — a curated bento grid of flagship pieces, placed between the
 * "How I got here" journey (Hero) and the compressed Experience sections.
 *
 * Deliberately NOT uniform rows: one featured-large tile anchors the grid, with
 * medium and accent tiles varying in width around it. Each tile is a plain <a>
 * (no client JS) linking out to its canonical URL. Blue design system preserved.
 */

type Tier = "featured" | "medium" | "accent";

type Work = {
  tier: Tier;
  category: string;
  title: string;
  blurb: string;
  href: string;
  img: string;
  /** object-position for the cover image */
  pos: string;
  /** desktop grid span */
  span: string;
};

const work: Work[] = [
  {
    tier: "featured",
    category: "Featured Research",
    title: "Crypto on the Clock",
    blurb:
      "Empirical study of $7.8B in short-term crypto trading across Polymarket and Kalshi.",
    href: "https://panteraresearchlab.xyz/research/crypto-on-the-clock/",
    img: "/pantera-prl-crypto-on-the-clock-cover-v2.png",
    pos: "object-center",
    span: "lg:col-span-7 lg:row-span-2 lg:min-h-[31rem]",
  },
  {
    tier: "medium",
    category: "Data Product",
    title: "Tokenization Data Portal",
    blurb:
      "Interactive market map tracking $27.5B of tokenized real-world assets across 517 assets and 298 platforms.",
    href: "https://tokenization.panteraresearchlab.xyz/",
    img: "/pantera-tokenization-portal.png",
    pos: "object-top",
    span: "lg:col-span-5",
  },
  {
    tier: "medium",
    category: "Data Product",
    title: "Pantera DATboard",
    blurb:
      "Live dashboard tracking 29 digital-asset-treasury tickers ($114.5B combined) with an onchain-transparency index.",
    href: "https://datboard.panteraresearchlab.xyz/",
    img: "/pantera-datboard-portal.png",
    pos: "object-top",
    span: "lg:col-span-5",
  },
  {
    tier: "medium",
    category: "Research",
    title: "User Behavior & Engagement on Lens",
    blurb:
      "Network-graph and PageRank analysis of activity across the Lens social ecosystem.",
    href: "https://messari.io/report/user-behavior-and-engagement-on-lens",
    img: "/messari-user-behavior-and-engagement-on-lens.png",
    pos: "object-top",
    span: "lg:col-span-5",
  },
  {
    tier: "accent",
    category: "Engineering",
    title: "160 Folsom / MIRA",
    blurb: "40-story twisting residential tower with Studio Gang.",
    href: "https://www.pacific-structures.com/project/160-folsom-mira/",
    img: "/folsom-bay-tower-mira-cover.jpg",
    pos: "object-center",
    span: "lg:col-span-4",
  },
  {
    tier: "accent",
    category: "AI Product",
    title: "Syndicate",
    blurb: "A workspace for coordinating teams of AI agents.",
    href: "https://usesyndicate.org",
    img: "/syndicate-app.png",
    pos: "object-top",
    span: "lg:col-span-3",
  },
];

function Tile({ w }: { w: Work }) {
  const featured = w.tier === "featured";
  const minH =
    w.tier === "featured"
      ? "min-h-[20rem]"
      : w.tier === "medium"
        ? "min-h-[15rem]"
        : "min-h-[13rem]";

  return (
    <a
      href={w.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-[var(--accent)]/20 bg-[var(--bg-elev)] shadow-lg shadow-black/25 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/55 hover:shadow-[0_22px_55px_rgba(59,130,246,0.20)] ${minH} ${w.span}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={w.img}
        alt={`${w.title} — cover`}
        loading="lazy"
        className={`absolute inset-0 h-full w-full object-cover ${w.pos} opacity-90 transition-transform duration-500 group-hover:scale-[1.04]`}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[#050c1c] via-[#050c1c]/75 to-[#050c1c]/10"
      />

      <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-[var(--accent)]/40 bg-[#050c1c]/70 px-2.5 py-1 text-[0.625rem] font-bold uppercase tracking-[0.18em] text-[var(--accent)] backdrop-blur-sm">
        {w.category}
      </span>

      <div className="relative z-10 p-4 sm:p-5">
        <h3
          className={`font-bold tracking-tight text-white ${
            featured ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          }`}
        >
          {w.title}
        </h3>
        <p
          className={`mt-1.5 max-w-prose leading-snug text-[var(--slate-light)] ${
            featured ? "text-sm sm:text-base" : "text-xs sm:text-sm"
          }`}
        >
          {w.blurb}
        </p>
        <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent)]">
          View
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </a>
  );
}

export function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Selected Work"
      className="scroll-mt-24 py-8 md:py-12"
    >
      <div className="mb-8 sm:mb-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[var(--accent)]">
          Selected Work
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--slate-lightest)] sm:text-4xl">
          Things I&apos;ve shipped.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-min">
        {work.map((w) => (
          <Tile key={w.title} w={w} />
        ))}
      </div>
    </section>
  );
}

export default SelectedWork;
