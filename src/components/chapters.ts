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
  /** Employer — the primary/largest headline line. */
  company: string;
  /** Optional thematic heading; when set it replaces the company name as the h3 and the role/location/years meta lines are hidden. */
  heading?: string;
  /** Role/title — secondary line under the employer. */
  role?: string;
  /** Location — optional line under the role. */
  location?: string;
  years: string;
  intro: string;
  /** Optional subtle meta/tag line of topics, rendered under the description. */
  topics?: string;
  /** Per-chapter accent — drives links, tags, dots, and nav highlight. */
  accent: string;
  accentTint: string;
  projects: ProjectCard[];
};

export const chapters: Chapter[] = [
  {
    id: "pantera",
    act: "Venture Capital",
    label: "Pantera",
    company: "Pantera",
    role: "Research Engineer",
    years: "2024 — Present",
    intro:
      "I'm one of two people on Pantera's in-house research team. I take open-ended questions from research design through deployment, and most of what I publish ships with a live dashboard or an open dataset so the finding stays useful after the report is out.",
    topics:
      "Market microstructure · Prediction markets · Tokenization · Digital-asset treasuries · User behavior · AI agents",
    accent: "#818cf8",
    accentTint: "rgba(129, 140, 248, 0.16)",
    projects: [
      {
        title: "Crypto on the Clock — An Empirical Study of Short-Term Crypto Market Microstructure on Polymarket and Kalshi",
        descriptor: "Empirical study of $7.8B in near-term crypto trading, finding 86% of Polymarket's 5-min taker volume is bot-driven while Kalshi out-earns on fees (2.74% vs 0.96%).",
        href: "https://panteraresearchlab.xyz/research/crypto-on-the-clock/",
        img: "/pantera-prl-crypto-on-the-clock-cover.png",
        thumb: "from-[#555db8] to-[#0c2238]",
      },
      {
        title: "The State of Tokenization — Q1 2026 Report",
        descriptor: "Published report mapping 593 tokenized assets totaling $320.6B.",
        href: "https://panteracapital.com/the-state-of-tokenization/",
        img: "/pantera-tokenization-report-cover.png",
        thumb: "from-[#474ea8] to-[#0a1a30]",
      },
      {
        title: "Tokenization Data Portal",
        descriptor: "Open-source interactive dashboard of on-chain + off-chain tokenized assets.",
        href: "https://tokenization.panteraresearchlab.xyz/",
        img: "/pantera-tokenization-portal.png",
        thumb: "from-[#474ea8] to-[#0a1a30]",
      },
      {
        title: "Decoding DATs Beyond mNAV",
        descriptor: "Co-authored report dissecting the ~$117B digital-asset-treasury sector beyond mNAV.",
        href: "https://panteraresearchlab.xyz/research/decoding-dats-beyond-mnav/",
        img: "/pantera-dats-cover.png",
        thumb: "from-[#555db8] to-[#0c2238]",
      },
      {
        title: "Pantera DATboard",
        descriptor: "Live dashboard tracking DAT treasuries (BTC/ETH/SOL) from parsed SEC 10-Q/8-K filings.",
        href: "https://datboard.panteraresearchlab.xyz/",
        img: "/pantera-datboard-portal.png",
        thumb: "from-[#555db8] to-[#0c2238]",
      },
      {
        title: "The Super Bowl of Prediction Markets",
        descriptor: "First-authored report on Kalshi vs Polymarket's battle for price discovery vs liquidity.",
        href: "https://panteraresearchlab.xyz/research/the-super-bowl-of-prediction-markets-kalshi-and-polymarkets-battle-for-price-vs-liquidity/",
        img: "/pantera-superbowl-report-cover.png",
        thumb: "from-[#474ea8] to-[#0a1a30]",
      },
      {
        title: "Prediction Markets Dashboard",
        descriptor: "Live dashboard built for Novig, tracking NFL prediction-market activity across Kalshi & Polymarket.",
        href: "https://novig-nfl.vercel.app/",
        img: "/pantera-novig-portal.png",
        thumb: "from-[#474ea8] to-[#0a1a30]",
      },
      {
        title: "AI Agents as New Narrative Drivers",
        descriptor: "Engagement & sentiment study of AI agents, comparing Truth Terminal vs Luna.",
        href: "https://pantera-research-lab.vercel.app/",
        img: "/pantera-prl-ai-agents-cover.png",
        thumb: "from-[#474ea8] to-[#0a1a30]",
      },
      {
        title: "Crypto Myopia and the Endgame for Airdrops",
        descriptor: "Metcalfe's-law analysis of why pay-to-join airdrops fail to retain users.",
        href: "https://pantera-research-lab.vercel.app/",
        img: "/pantera-prl-airdrops-cover.png",
        thumb: "from-[#555db8] to-[#0c2238]",
      },
      {
        title: "Speculative Swells and the Memecoin Aftermath",
        descriptor: "Supply-shock analysis of memecoin price moves and the speculative aftermath, published in the Stanford Blockchain Review.",
        href: "https://review.stanfordblockchain.xyz/p/49-speculative-swells-and-the-memecoin",
        img: "/pantera-prl-memecoin-cover.png",
        thumb: "from-[#474ea8] to-[#0a1a30]",
      },
      {
        title: "Crypto's Reverse Wage Gap",
        descriptor: "Co-authored 502-respondent comp survey finding crypto reverses the gender wage gap.",
        href: "https://pantera-research-lab.vercel.app/",
        img: "/pantera-prl-reverse-wage-gap-cover.png",
        thumb: "from-[#555db8] to-[#0c2238]",
      },
    ],
  },
  {
    id: "messari",
    act: "Crypto Research",
    label: "Messari",
    company: "Messari",
    role: "Enterprise Research Analyst",
    location: "Remote",
    years: "2022 — 2024",
    intro:
      "I spent two years at Messari writing 50+ long-form research reports, on everything from L1 protocols to consumer apps. Behind the writing, I built the analytics tooling the research team ran on — which is where my research started turning into software.",
    accent: "#38bdf8",
    accentTint: "rgba(56, 189, 248, 0.14)",
    projects: [
      {
        title: "User Behavior and Engagement on Lens",
        descriptor: "Network-graph study of Lens showing 9x daily-active-user growth and that 70%+ of users span multiple apps — validating Web3 profile portability.",
        href: "https://messari.io/report/user-behavior-and-engagement-on-lens",
        img: "/messari-user-behavior-and-engagement-on-lens.png",
        thumb: "from-[#0c4a73] to-[#070d1f]",
      },
      {
        title: "Sybil Account Detection in L2 Ecosystems",
        descriptor: "Sybil-detection framework across L2s, finding L2 active addresses grew from 27% to 157% of Ethereum's and flagging Base/zkSync's airdrop-farming risk.",
        href: "https://messari.io/report/sybil-account-detection-in-l2-ecosystems",
        img: "/messari-sybil-account-detection-in-l2-ecosystems.png",
        thumb: "from-[#0c4a73] to-[#070d1f]",
      },
      {
        title: "Decoding friend.tech from Metrics to Monetization",
        descriptor: "Decoded friend.tech's bonding-curve economics — 300K+ users, $50M+ TVL, $320K daily revenue — and how its points design penalizes manipulation.",
        href: "https://messari.io/report/decoding-friend-tech-from-metrics-to-monetization",
        img: "/messari-decoding-friend-tech-from-metrics-to-monetization.png",
        thumb: "from-[#0e5a8c] to-[#0a1a30]",
      },
      {
        title: "The Efficacy of Token Incentive Models",
        descriptor: "Comparative study concluding gradual-release incentives (Blur, dYdX, Optimism) retain users far better than one-time lump-sum airdrops like Uniswap's.",
        href: "https://messari.io/report/the-efficacy-of-token-incentive-models",
        img: "/messari-the-efficacy-of-token-incentive-models.png",
        thumb: "from-[#0a5e95] to-[#070d1f]",
      },
      {
        title: "User Acquisition and Retention Across EVM Chains",
        descriptor: "Cross-chain retention analysis showing L2s siphoning Ethereum's new users while each chain specializes — Ethereum DeFi, Arbitrum/Optimism perps, Polygon/BNB GameFi.",
        href: "https://messari.io/report/users-across-evm-chains",
        img: "/messari-users-across-evm-chains.png",
        thumb: "from-[#0e5a8c] to-[#0a1a30]",
      },
      {
        title: "The Wealth Effect",
        descriptor: "Introduced a 'wealth effect' framework quantifying how native token launches can lift an ecosystem's user base 30–80%.",
        href: "https://messari.io/report/the-wealth-effect",
        img: "/messari-the-wealth-effect.png",
        thumb: "from-[#0a5e95] to-[#070d1f]",
      },
      {
        title: "Solana's Shifting Landscape: From DeFi to Consumer Applications",
        descriptor: "Documented Solana's pivot from DeFi to consumer apps as network TVL fell 20x, arguing its low-fee design favors consumer use cases over financial ones.",
        href: "https://messari.io/report/solana-s-shifting-landscape",
        img: "/messari-solana-s-shifting-landscape.png",
        thumb: "from-[#0c4a73] to-[#070d1f]",
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
    years: "2018 — 2022",
    intro:
      "I spent four years at MKA designing high-rise towers in high-seismic and high-wind regions, engineering more than 7M sq ft of construction across the US and SE Asia. Along the way I began turning repetitive design workflows into office-wide tools, and that's where the software career started.",
    accent: "#60a5fa",
    accentTint: "rgba(96, 165, 250, 0.14)",
    projects: [
      {
        title: "NuStar Resort & Casino",
        descriptor:
          "Five-star integrated resort & casino — three hotel towers (~1,000 keys), 236,800 sq ft casino, 2,500-seat theater; ~5.28M sq ft, Cebu's tallest development.",
        href: "https://www.hksinc.com/what-we-do/projects/nustar-casino-resort/",
        img: "https://www.hksinc.com/wp-content/uploads/2018/12/Infinity-1-scaled.jpg",
        thumb: "from-[#1e3a5f] to-[#0a192f]",
      },
      {
        title: "160 Folsom St / MIRA",
        descriptor:
          "40-story, 420-ft twisting residential tower (MIRA), ~714,500 sq ft, 392 condos; Studio Gang; completed 2020.",
        href: "https://www.pacific-structures.com/project/160-folsom-mira/",
        img: "/folsom-bay-tower-mira-cover.jpg",
        thumb: "from-[#244b73] to-[#10243d]",
      },
      {
        title: "Mission Rock (Verde)",
        descriptor:
          "Mission Rock waterfront redevelopment; Verde = 23-story, 254-unit residential tower; completed 2024.",
        href: "https://studiogang.com/projects/mission-rock",
        img: "/mission-rock-cover.jpg",
        thumb: "from-[#2c5a85] to-[#14304f]",
      },
      {
        title: "Hilton Garden Inn — Austin",
        descriptor:
          "17-story, 214-key, ~140,000 sq ft hotel at 17th & Lavaca (Austin University Capitol District); completed 2021.",
        href: "https://www.dpr.com/projects/hilton-garden-inn-17th-and-lavaca-hotel",
        img: "/hilton-garden-inn-austin-cover.jpg",
        thumb: "from-[#1a3553] to-[#0a192f]",
      },
      {
        title: "Imperium Tower",
        descriptor:
          "68-story residential tower (Pasig, Metro Manila; 64,500 m²; 2021) — MKA's structural design used outrigger bracing to cut the core aspect ratio from 20:1 to 12:1, with Performance-Based Seismic Design over a 5-level below-grade podium.",
        href: "https://www.mka.com/projects/imperium-tower/",
        img: "/mka-imperium-tower-cover.webp",
        thumb: "from-[#1e3a5f] to-[#0a192f]",
      },
      {
        title: "Galleon Place",
        descriptor:
          "Twin-tower mixed-use complex (Pasig; 178,600 m²; est. 2025) — MKA engineered a 39-story office tower (PT wide-shallow beams for column-free floors) and a 53-story residential tower with an innovative triangular concrete core + outriggered columns for typhoon/seismic demands.",
        href: "https://www.mka.com/projects/galleon-place/",
        img: "/mka-galleon-place-cover.webp",
        thumb: "from-[#244b73] to-[#10243d]",
      },
      {
        title: "Viridian at Greenhills",
        descriptor:
          "55-story, 560-unit residential tower (San Juan, Metro Manila; 1.3M ft²; 2019) — MKA provided peer review + Performance-Based Seismic Design, pairing a concrete core wall with Buckling-Restrained Braces and perimeter columns to achieve its slender profile.",
        href: "https://www.mka.com/projects/viridian-at-greenhills/",
        img: "/mka-viridian-at-greenhills-cover.webp",
        thumb: "from-[#2c5a85] to-[#14304f]",
      },
      {
        title: "JW Marriott Austin",
        descriptor:
          "35-story, 1,000-room convention hotel (Austin, TX; 1.3M ft²; 2015) — MKA designed ultra-shallow long-span ballroom trusses, 30-ft cantilevered Level-4 trusses carrying a pool with hanging levels below, and 19-ft concrete V-trusses on the south façade.",
        href: "https://www.mka.com/projects/jw-marriott-austin/",
        img: "/mka-jw-marriott-austin-cover.webp",
        thumb: "from-[#1a3553] to-[#0a192f]",
      },
    ],
  },
];
