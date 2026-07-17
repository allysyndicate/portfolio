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
  /** Optional subtle meta/tag line of topics, rendered under the description. */
  topics?: string;
  projects: ProjectCard[];
};

export const chapters: Chapter[] = [
  {
    id: "pantera",
    act: "Venture Capital",
    label: "Pantera",
    company: "Pantera",
    role: "Research Engineer",
    years: "2024 – Present",
    intro:
      "Pantera's in-house research team is two people, and I'm one of them. I take open-ended questions from research design through deployment: a study of $7.8B in short-term crypto trading, a map of 593 tokenized assets worth $320.6B, a live dashboard tracking digital-asset treasuries from parsed SEC filings. Part of the work supports Pantera's investment team and portfolio companies, and most of what I publish ships with a dashboard or an open dataset, so the finding stays useful after the report is out.",
    topics:
      "Market microstructure · Prediction markets · Tokenization · Digital-asset treasuries · User behavior · AI agents",
    projects: [
      {
        title: "Pantera DATboard",
        descriptor: "Live tracker of BTC/ETH/SOL treasury holdings, parsed from SEC 10-Q/8-K filings.",
        href: "https://datboard.panteraresearchlab.xyz/",
        img: "/pantera-datboard-portal.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Crypto on the Clock: An Empirical Study of Short-Term Crypto Market Microstructure on Polymarket and Kalshi",
        descriptor: "Measured $7.8B in near-term trading; 86% of Polymarket's 5-minute taker volume was bot-driven.",
        href: "https://panteraresearchlab.xyz/research/crypto-on-the-clock/",
        img: "/pantera-prl-crypto-on-the-clock-cover.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "The State of Tokenization: Q1 2026 Report",
        descriptor: "Mapped 593 tokenized assets totaling $320.6B, published on panteracapital.com.",
        href: "https://panteracapital.com/the-state-of-tokenization/",
        img: "/pantera-tokenization-report-cover.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "The Super Bowl of Prediction Markets",
        descriptor: "First-authored report on Kalshi vs Polymarket's fight over price discovery and liquidity.",
        href: "https://panteraresearchlab.xyz/research/the-super-bowl-of-prediction-markets-kalshi-and-polymarkets-battle-for-price-vs-liquidity/",
        img: "/pantera-superbowl-report-cover.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Speculative Swells and the Memecoin Aftermath",
        descriptor: "Supply-shock analysis of memecoin price moves, published in the Stanford Blockchain Review.",
        href: "https://review.stanfordblockchain.xyz/p/49-speculative-swells-and-the-memecoin",
        img: "/pantera-prl-memecoin-cover.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Crypto Myopia and the Endgame for Airdrops",
        descriptor: "Metcalfe's-law analysis of why pay-to-join airdrops fail to retain users.",
        href: "https://pantera-research-lab.vercel.app/",
        img: "/pantera-prl-airdrops-cover.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Tokenization Data Portal",
        descriptor: "Open-source dashboard joining on-chain and off-chain tokenized assets in one interactive view.",
        href: "https://tokenization.panteraresearchlab.xyz/",
        img: "/pantera-tokenization-portal.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Prediction Markets Dashboard",
        descriptor: "Built for Novig: live NFL prediction-market activity across Kalshi and Polymarket.",
        href: "https://novig-nfl.vercel.app/",
        img: "/pantera-novig-portal.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "AI Agents as New Narrative Drivers",
        descriptor: "Engagement and sentiment study of AI agents, comparing Truth Terminal and Luna.",
        href: "https://pantera-research-lab.vercel.app/",
        img: "/pantera-prl-ai-agents-cover.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Crypto's Reverse Wage Gap",
        descriptor: "Co-authored 502-respondent compensation survey finding crypto reverses the gender wage gap.",
        href: "https://pantera-research-lab.vercel.app/",
        img: "/pantera-prl-reverse-wage-gap-cover.png",
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
      "Over two years at Messari I wrote 50+ long-form reports on L1s, L2s, NFTs, DeFi, and consumer apps, specializing in user analytics at the network and application level: questions like whether a chain's growth is sybils, airdrop farmers, or real users. Behind the writing, I built the SQL and Python dashboards and ingestion tools the research team ran on, which is where my research started turning into software.",
    projects: [
      {
        title: "User Behavior and Engagement on Lens",
        descriptor: "Built network graphs from Lens's on-chain Polygon activity to trace cross-app user migration, engagement, and retention across profiles.",
        href: "https://messari.io/report/user-behavior-and-engagement-on-lens",
        img: "/messari-user-behavior-and-engagement-on-lens.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Sybil Account Detection in L2 Ecosystems",
        descriptor: "Applied Sybil-detection heuristics to on-chain active-address data across major L2s (Base, zkSync, Polygon zkEVM), filtering airdrop farmers to isolate organic adoption.",
        href: "https://messari.io/report/sybil-account-detection-in-l2-ecosystems",
        img: "/messari-sybil-account-detection-in-l2-ecosystems.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Decoding friend.tech from Metrics to Monetization",
        descriptor: "Reverse-engineered friend.tech's undisclosed points system with a machine-learning model fit to on-chain Base activity across 300K+ users.",
        href: "https://messari.io/report/decoding-friend-tech-from-metrics-to-monetization",
        img: "/messari-decoding-friend-tech-from-metrics-to-monetization.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "The Efficacy of Token Incentive Models",
        descriptor: "Measured on-chain post-claim retention and immediate-sell rates across protocol airdrops (Blur, dYdX, Optimism, Lido) to compare distribution designs.",
        href: "https://messari.io/report/the-efficacy-of-token-incentive-models",
        img: "/messari-the-efficacy-of-token-incentive-models.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "User Acquisition and Retention Across EVM Chains",
        descriptor: "Ran cohort-retention analysis on address-level activity across six EVM chains over twelve months, segmenting acquisition by DEX, perps, lending, and NFTs.",
        href: "https://messari.io/report/users-across-evm-chains",
        img: "/messari-users-across-evm-chains.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "The Wealth Effect",
        descriptor: "Compared on-chain active-user counts before and after native token launches across ecosystems to quantify the wealth-effect lift in usage.",
        href: "https://messari.io/report/the-wealth-effect",
        img: "/messari-the-wealth-effect.png",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "Solana's Shifting Landscape: From DeFi to Consumer Applications",
        descriptor: "Segmented Solana on-chain activity across DeFi and consumer categories (NFTs, payments, mobile), tracking TVL and usage through the post-peak period.",
        href: "https://messari.io/report/solana-s-shifting-landscape",
        img: "/messari-solana-s-shifting-landscape.png",
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
      "A high-rise in a seismic zone is a question about failure: how the structure behaves under loads you can only model, and what evidence shows the design holds. I spent four years at MKA working that question across 7M+ sq ft of towers in the US and Southeast Asia, where earthquakes and typhoons set the terms. The repetitive parts I turned into office-wide tools, first in Excel and VBA, then in Python, and that's where the software career started.",
    projects: [
      {
        title: "NuStar Resort & Casino",
        descriptor:
          "Cebu's tallest development, NuStar Resort & Casino spans roughly 5.28M sq ft across four reinforced-concrete hotel towers up to 29 stories over a podium of casino, entertainment, retail, and waterpark space, all engineered for high Philippine seismicity.",
        href: "https://www.hksinc.com/what-we-do/projects/nustar-casino-resort/",
        img: "/nustar-resort-casino-cover.jpg",
        thumb: "from-[#EAD9CE] to-[#F2EFE8]",
      },
      {
        title: "160 Folsom St / MIRA",
        descriptor:
          "Studio Gang's twisting bay-window facade defines this reinforced-concrete 40-story, 420-foot San Francisco tower, whose 392 condos rise on a 12,800-cubic-yard mat foundation; repeatable slabs enabled a four-day floor cycle, completed 2020.",
        href: "https://www.pacific-structures.com/project/160-folsom-mira/",
        img: "/folsom-bay-tower-mira-cover.jpg",
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
        img: "/hilton-garden-inn-austin-cover.jpg",
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
        img: "/mission-rock-cover.jpg",
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
