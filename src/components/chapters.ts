export type ProjectCard = {
  title: string;
  descriptor: string;
  href: string;
  /** Tailwind gradient classes for the placeholder thumbnail (fallback when no img). */
  thumb: string;
  /** Real thumbnail image URL. When set, replaces the gradient placeholder. */
  img?: string;
};

export type Chapter = {
  id: "pantera" | "messari" | "structural";
  /** Act number shown as the chapter eyebrow. */
  act: string;
  /** Optional override for the small-caps eyebrow line (replaces `act` when set). */
  eyebrow?: string;
  label: string;
  /** Employer - the primary/largest headline line. */
  company: string;
  /** Optional thematic heading; when set it replaces the company name as the h3 and the role/location/years meta lines are hidden. */
  heading?: string;
  /** Role/title - secondary line under the employer. */
  role?: string;
  /** Location - optional line under the role. */
  location?: string;
  years: string;
  intro: string;
  /** Optional bold one-line statement rendered under the intro. */
  tagline?: string;
  projects: ProjectCard[];
};

export const chapters: Chapter[] = [
  {
    id: "pantera",
    act: "Venture Capital",
    label: "Pantera",
    company: "Pantera",
    role: "Research Engineer",
    years: "April 2024 – October 2026",
    intro:
      "At Pantera, my role spanned research, data engineering, and product. I took open-ended market questions through study design, data collection, analysis, validation, and delivery, building the pipelines, dashboards, datasets, or software each project required. The work supported published research, investment decisions, and portfolio companies.",
    projects: [
      {
        title: "Tokenization Data Portal",
        descriptor: "Co-developed the Tokenization Progress Index and built a public analytics portal to compare financial products across 11 asset classes. Reconciled fragmented blockchain and issuer data to distinguish headline growth from changes in how assets were issued, transferred, and used.",
        href: "https://tokenization.panteraresearchlab.xyz/",
        img: "/pantera-tokenization-portal.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Crypto's Reverse Wage Gap",
        descriptor: "Tested a compensation-gap hypothesis using 502 survey responses, statistical power analysis, hypothesis testing, and regression controls to distinguish pay differences from experience effects.",
        href: "https://www.coindesk.com/opinion/2024/07/30/women-in-crypto-earn-more-than-men",
        img: "/pantera-prl-reverse-wage-gap-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Crypto on the Clock",
        descriptor: "An empirical study of short-term crypto market microstructure on Polymarket and Kalshi: event-time analysis of $7.8B in trade-level data, testing for settlement manipulation and classifying bot flow from trading behavior.",
        href: "https://panteraresearchlab.xyz/research/crypto-on-the-clock/",
        img: "/pantera-prl-crypto-on-the-clock-cover-alt-intraday.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "The State of Tokenization: September 2026 Report",
        descriptor: "A follow-up market map tracking 671 tokenized assets and $332B in value, examining where tokenized markets are forming.",
        href: "https://panteracapital.com/state-of-tokenization-september-2026-pdf/",
        img: "/pantera-tokenization-september-2026-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Speculative Swells and the Memecoin Aftermath",
        descriptor: "Treated a memecoin launch as a natural experiment, estimating supply-shock effects with regressions on five months of hourly Base on-chain data; published in the Stanford Blockchain Review.",
        href: "https://review.stanfordblockchain.xyz/p/49-speculative-swells-and-the-memecoin",
        img: "/pantera-prl-memecoin-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "The Super Bowl of Prediction Markets",
        descriptor: "Estimated price impact from signed order flow (Kyle's lambda) across 282 NFL games, separating genuine price discovery from liquidity depth on Kalshi and Polymarket.",
        href: "https://panteraresearchlab.xyz/research/the-super-bowl-of-prediction-markets-kalshi-and-polymarkets-battle-for-price-vs-liquidity/",
        img: "/pantera-superbowl-report-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Crypto Myopia and the Endgame for Airdrops",
        descriptor: "Fit a quasi-hyperbolic discounting model to airdrop claim timing, estimating users' present bias from survey data and validating against Drift's delayed-claim launch.",
        href: "https://pantera-research-lab.vercel.app/",
        img: "/pantera-prl-airdrops-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "The State of Tokenization: Q1 2026 Report",
        descriptor: "Built a classification framework separating wrapped claims from natively on-chain assets, applied across 593 tokenized assets ($320.6B) to show where tokenization actually creates value.",
        href: "https://panteracapital.com/the-state-of-tokenization/",
        img: "/pantera-tokenization-report-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Pantera DATboard",
        descriptor: "Reconstructs digital-asset treasury positions from raw SEC 10-Q/8-K filings via regex and semantic parsing, deriving holdings and valuation metrics for 30 BTC/ETH/SOL companies.",
        href: "https://datboard.panteraresearchlab.xyz/",
        img: "/pantera-datboard-portal.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Prediction Markets Dashboard",
        descriptor: "Aligned roughly 7M trades from three venues onto a common per-game event clock, surfacing kickoff-relative volume and Kyle-regression liquidity depth for Novig.",
        href: "https://novig-nfl.vercel.app/",
        img: "/pantera-novig-portal.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "AI Agents as New Narrative Drivers",
        descriptor: "Linked social signal to price for AI agents Truth Terminal and Luna: follower-normalized engagement and sentiment series correlated against their token markets.",
        href: "https://pantera-research-lab.vercel.app/",
        img: "/pantera-prl-ai-agents-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
    ],
  },
  {
    id: "messari",
    act: "Crypto Research",
    label: "Messari",
    company: "Messari",
    role: "Enterprise Research Analyst",
    years: "2022 – 2024",
    intro:
      "At Messari, I investigated how emerging platforms attracted users, what kept them engaged, and how their activity translated into revenue. I used SQL, Python, cohort analysis, and network methods to distinguish sustained adoption from incentive-driven participation. Across more than 50 research reports, I examined user behavior, business models, and competitive positioning, while building reusable pipelines and dashboards to support the analysis.",
    projects: [
      {
        title: "User Behavior and Engagement on Lens",
        descriptor: "Built network graphs from Polygon activity to see how Lens users carried their profiles across apps. More than 70% of users in the study were active on multiple apps.",
        href: "https://messari.io/report/user-behavior-and-engagement-on-lens",
        img: "/messari-user-behavior-and-engagement-on-lens.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Sybil Account Detection in L2 Ecosystems",
        descriptor: "Applied address-level heuristics across L2 networks to distinguish suspected airdrop farming from organic usage. The analysis flagged suspected Sybil activity on Base even as friend.tech helped drive adoption.",
        href: "https://messari.io/report/sybil-account-detection-in-l2-ecosystems",
        img: "/messari-sybil-account-detection-in-l2-ecosystems.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Decoding friend.tech from Metrics to Monetization",
        descriptor: "Modeled friend.tech’s undisclosed points allocation from onchain user activity to examine how its incentives rewarded engagement. The analysis suggested the points design penalized attempts to game rewards.",
        href: "https://messari.io/report/decoding-friend-tech-from-metrics-to-monetization",
        img: "/messari-decoding-friend-tech-from-metrics-to-monetization.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "The Efficacy of Token Incentive Models",
        descriptor: "Measured on-chain post-claim retention and immediate-sell rates across protocol airdrops (Blur, dYdX, Optimism, Lido) to compare distribution designs.",
        href: "https://messari.io/report/the-efficacy-of-token-incentive-models",
        img: "/messari-the-efficacy-of-token-incentive-models.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "User Acquisition and Retention Across EVM Chains",
        descriptor: "Ran cohort-retention analysis on address-level activity across six EVM chains over twelve months, segmenting acquisition by DEX, perps, lending, and NFTs.",
        href: "https://messari.io/report/users-across-evm-chains",
        img: "/messari-users-across-evm-chains.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "The Wealth Effect",
        descriptor: "Compared on-chain active-user counts before and after native token launches across ecosystems to quantify the wealth-effect lift in usage.",
        href: "https://messari.io/report/the-wealth-effect",
        img: "/messari-the-wealth-effect.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Solana's Shifting Landscape: From DeFi to Consumer Applications",
        descriptor: "Segmented Solana on-chain activity across DeFi and consumer categories (NFTs, payments, mobile), tracking TVL and usage through the post-peak period.",
        href: "https://messari.io/report/solana-s-shifting-landscape",
        img: "/messari-solana-s-shifting-landscape.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
    ],
  },
  {
    id: "structural",
    act: "Structural Engineering",
    label: "Structural",
    company: "Magnusson Klemencic Associates",
    role: "Structural Engineer",
    location: "Seattle, WA",
    years: "2018 – 2022",
    intro:
      "At MKA, I built nonlinear 3D models for performance-based structural design, analyzing simulation results to evaluate building behavior and size structural members. My work covered more than 7 million square feet of high-rise buildings across the U.S. and Southeast Asia. I also developed firm-wide Python and Excel VBA tools to postprocess model outputs and automate recurring design calculations.",
    projects: [
      {
        title: "NuStar Resort & Casino",
        descriptor:
          "Cebu's tallest development, NuStar Resort & Casino spans roughly 5.28M sq ft across four reinforced-concrete hotel towers up to 29 stories over a podium of casino, entertainment, retail, and waterpark space, all engineered for high Philippine seismicity.",
        href: "https://www.hksinc.com/what-we-do/projects/nustar-casino-resort/",
        img: "/nustar-resort-casino-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "160 Folsom St / MIRA",
        descriptor:
          "Studio Gang's twisting bay-window facade defines this reinforced-concrete 40-story, 420-foot San Francisco tower, whose 392 condos rise on a 12,800-cubic-yard mat foundation; repeatable slabs enabled a four-day floor cycle, completed 2020.",
        href: "https://www.pacific-structures.com/project/160-folsom-mira/",
        img: "/folsom-bay-tower-mira-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Viridian at Greenhills",
        descriptor:
          "Peer review and performance-based seismic design of a slender 55-story, 560-unit tower in San Juan, Metro Manila, pairing a concrete core wall with buckling-restrained braces and perimeter columns.",
        href: "https://www.mka.com/projects/viridian-at-greenhills/",
        img: "/mka-viridian-at-greenhills-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Hilton Garden Inn, Austin",
        descriptor:
          "Squeezed onto an 8,700 sq ft Austin infill lot at 17th and Lavaca, this concrete-framed 17-story, 214-key Hilton Garden Inn stacks 140,000 sq ft behind a prefabricated facade with no on-site parking, completed 2021.",
        href: "https://www.dpr.com/projects/hilton-garden-inn-17th-and-lavaca-hotel",
        img: "/hilton-garden-inn-austin-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Imperium Tower",
        descriptor:
          "In Pasig, Metro Manila, the 68-story Imperium residential tower ties a reinforced-concrete core to composite HISTAR-steel perimeter columns with buckling-restrained-brace outriggers, cutting the core's aspect ratio from 20:1 to 12:1 under performance-based seismic design.",
        href: "https://www.mka.com/projects/imperium-tower/",
        img: "/mka-imperium-tower-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Galleon Place",
        descriptor:
          "Galleon Place pairs two Pasig, Manila towers: a 53-story residential tower whose triangular concrete core and outriggered columns resist typhoon and seismic loads, and a 39-story office tower using post-tensioned wide-shallow beams for column-free floors.",
        href: "https://www.mka.com/projects/galleon-place/",
        img: "/mka-galleon-place-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Mission Rock",
        descriptor:
          "At San Francisco's Mission Rock waterfront, Verde is a reinforced-concrete 23-story tower on a five-story podium; its 254 units, about 287,000 sq ft, sit five feet above sea level for storm-surge resilience, completed 2024.",
        href: "https://studiogang.com/projects/mission-rock",
        img: "/mission-rock-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "JW Marriott Austin",
        descriptor:
          "Austin's 34-story, 1,012-room JW Marriott (2015) uses ultra-shallow ballroom trusses to meet podium height limits; Level 4 trusses cantilever 30 feet to hang a pool with two suspended levels, over concrete V-trusses reaching 19 feet.",
        href: "https://www.mka.com/projects/jw-marriott-austin/",
        img: "/mka-jw-marriott-austin-cover.webp",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
    ],
  },
];
