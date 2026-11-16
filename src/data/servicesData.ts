export interface ServicePillar {
  id: string;
  slug: string;
  number: string;
  title: string;
  navLabel: string;
  h1: string;
  tagline: string;
  answerBlock: string;
  heroOutcome: string;
  audienceHeadline: string;
  keyProof: {
    stat: string;
    label: string;
    detail: string;
  }[];
  audience: {
    buyerType: string;
    tagline: string;
    description: string;
  }[];
  deliverables: {
    title: string;
    description: string;
    tag?: string;
  }[];
  subServices: {
    title: string;
    desc: string;
    status: "available" | "coming-soon";
  }[];
  pricing: {
    inr: {
      from: string;
      suffix: string;
      typicalRange: string;
      scopeNote: string;
    };
    gbp: {
      from: string;
      suffix: string;
      typicalRange: string;
      scopeNote: string;
    };
    usd: {
      from: string;
      suffix: string;
      typicalRange: string;
      scopeNote: string;
    };
  };
  processSteps: {
    step: string;
    title: string;
    weeks: string;
    whatHappens: string;
    whatWeNeed: string;
    deliverable: string;
  }[];
  toolsAndPlatforms: {
    name: string;
    category: string;
  }[];
  relatedCaseSlugs: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
  extraSection: {
    type: "website-showcase" | "brand-gallery" | "performance-channels" | "content-calendar" | "ai-simulator";
    title: string;
    subtitle: string;
  };
}

export const SERVICES_DATA: ServicePillar[] = [
  {
    id: "website-design",
    slug: "website-design",
    number: "01",
    title: "Website Design & Development",
    navLabel: "Website Design",
    h1: "Websites that win enquiries, not just compliments.",
    tagline: "Fast, search-ready digital flagships that turn cold visitors into booked appointments and qualified enquiries. 50+ built.",
    answerBlock: "White Ink Design Studio is an Ahmedabad and London-aligned website design agency founded in 2018. We have built 50+ websites (including 10+ D2C stores and 30+ lead-generation engines) engineered with sub-second page loads, conversion-first UX, and native AI search visibility.",
    heroOutcome: "Engineered for high conversion, 95+ PageSpeed scores, and medical & D2C trust.",
    audienceHeadline: "Built for founders who cannot afford a slow site or missed enquiries.",
    keyProof: [
      { stat: "50+", label: "Websites Built", detail: "10+ D2C Stores, 30+ Lead Engines" },
      { stat: "98/100", label: "PageSpeed Score", detail: "Core Web Vitals mobile benchmark" },
      { stat: "4-6 Wks", label: "Typical Delivery", detail: "From wireframes to live deployment" },
      { stat: "100%", label: "IP Ownership", detail: "Zero platform lock-in; code is yours" },
    ],
    audience: [
      {
        buyerType: "Healthcare Groups & Doctor Clinics",
        tagline: "Patient-friendly booking journeys that doctors sign off",
        description: "Specialized 14-page clinical architecture, symptom navigation, doctor profiles, and frictionless appointment booking systems tested against anxious patient behavior."
      },
      {
        buyerType: "D2C & E-Commerce Brands",
        tagline: "High-speed Shopify flagships built to convert ad traffic",
        description: "Sub-second checkout funnels, custom cart upsells, bundle builders, and RTO reduction systems that help Indian and international e-commerce founders scale profitably."
      },
      {
        buyerType: "UK & US Businesses / Agency White-Label",
        tagline: "Senior design at Indian efficiency with overlap working hours",
        description: "Clean Next.js and headless architectures for international brands who need senior tech lead execution, strict NDAs, and calls in UK/US morning hours."
      }
    ],
    deliverables: [
      {
        title: "Strategy & Sitemap Blueprint",
        description: "Information architecture, conversion funnel mapping, and user flow wireframing based on 50+ launched sites.",
        tag: "ARCHITECT"
      },
      {
        title: "UX/UI Design in Figma",
        description: "Bespoke desktop and mobile visual systems using our Obsidian Black & Studio Gold design hierarchy.",
        tag: "DESIGN"
      },
      {
        title: "Custom Next.js / Shopify Development",
        description: "Modern component-driven development with server-side rendering for lightning performance and instant loads.",
        tag: "BUILD"
      },
      {
        title: "Deep Technical SEO & llms.txt",
        description: "Semantic JSON-LD schema, metadata hierarchy, XML sitemaps, and llms.txt preparation for AI crawlers like ChatGPT.",
        tag: "DISCOVERABILITY"
      },
      {
        title: "GA4, GTM & Conversions API",
        description: "Full event instrumentation tracking clicks, form submissions, phone taps, and WhatsApp triggers accurately.",
        tag: "ANALYTICS"
      },
      {
        title: "CMS Training & 30-Day Care Warranty",
        description: "Loom walkthroughs for non-technical team edits, zero vendor lock-in, and 30 days of complimentary post-launch support.",
        tag: "HANDOVER"
      }
    ],
    subServices: [
      { title: "Custom Shopify Stores", desc: "Engineered for high conversion rates and minimal checkout friction", status: "available" },
      { title: "Healthcare & Clinic Websites", desc: "HIPAA-compliant, doctor-reviewed appointment booking machines", status: "available" },
      { title: "Website Redesign & Migration", desc: "Revamping slow legacy WordPress/Wix sites into modern Next.js engines", status: "available" },
      { title: "High-Converting Landing Pages", desc: "Focused PPC landing pages built for Meta, Google, and ChatGPT ads", status: "available" }
    ],
    pricing: {
      inr: {
        from: "₹35,000",
        suffix: "fixed quote after 1 call",
        typicalRange: "₹35,000 – ₹1,20,000",
        scopeNote: "Includes strategy, UI/UX, development, technical SEO, mobile tuning & 30 days support"
      },
      gbp: {
        from: "£750",
        suffix: "fixed quote in your currency",
        typicalRange: "£750 – £2,800",
        scopeNote: "UK hours calls, contracts under UK/Indian law, payment via Wise/Stripe/bank transfer"
      },
      usd: {
        from: "$950",
        suffix: "fixed quote in USD",
        typicalRange: "$950 – £3,500",
        scopeNote: "EST morning overlap, full IP ownership transfer, NDA standard"
      }
    },
    processSteps: [
      {
        step: "01",
        title: "Discover & Blueprint",
        weeks: "Week 1",
        whatHappens: "20-minute discovery session, competitor audit, user persona mapping, and full sitemap structure definition.",
        whatWeNeed: "Brand assets, reference sites you admire, and your core business goals.",
        deliverable: "Approved sitemap and low-fidelity interactive Figma wireframes."
      },
      {
        step: "02",
        title: "High-Fidelity UI Design",
        weeks: "Weeks 2-3",
        whatHappens: "Crafting full visual screens for desktop and mobile, interactive states, typography systems, and micro-interactions.",
        whatWeNeed: "Feedback on visual directions and founder approval on key conversion templates.",
        deliverable: "Clickable Figma design canvas ready for development."
      },
      {
        step: "03",
        title: "Engineered Build & SEO",
        weeks: "Weeks 3-5",
        whatHappens: "Clean Next.js / Shopify theme coding, asset optimization, Core Web Vitals performance tuning, and schema markup injection.",
        whatWeNeed: "Domain DNS access, payment gateway API keys, and final photography/copy review.",
        deliverable: "Private staging URL with 95+ PageSpeed benchmark across all devices."
      },
      {
        step: "04",
        title: "QA, Launch & Handover",
        weeks: "Week 6",
        whatHappens: "Cross-browser stress testing, analytics verification, zero-downtime DNS deployment, and team CMS training.",
        whatWeNeed: "Final sign-off and schedule for live launch.",
        deliverable: "Live website, repository transfer, CMS Loom walkthroughs & 30-day warranty."
      }
    ],
    toolsAndPlatforms: [
      { name: "Next.js 16", category: "Core Framework" },
      { name: "Shopify Liquid", category: "E-Commerce" },
      { name: "React & TypeScript", category: "Front-End" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Figma", category: "Design System" },
      { name: "Google Analytics 4", category: "Tracking" },
      { name: "Google Tag Manager", category: "Events" },
      { name: "Vercel / Cloudflare", category: "Infrastructure" }
    ],
    relatedCaseSlugs: ["speciality-homeopathy", "zydus-ivf", "upfold", "sng-eco-india", "genzatri"],
    testimonial: {
      quote: "White Ink rebuilt our entire 14-page clinical website from the ground up. Instead of a forgotten brochure, it is now our primary consultation booking machine across Gujarat and India.",
      author: "Dr. Ketan Patel",
      role: "Founder & Chief Consultant",
      company: "Speciality Homeopathy"
    },
    faqs: [
      {
        question: "How long does a website take to design and build?",
        answer: "A standard 6 to 8-page conversion-focused website is completed in 3 to 4 weeks. Larger 12 to 18-page clinical portals, custom Shopify storefronts, or multilingual websites typically take 5 to 6 weeks from initial kickoff to live launch."
      },
      {
        question: "Do you build on Shopify, WordPress, or custom code?",
        answer: "We recommend platforms based on your business reality. For D2C consumer brands, we build custom high-converting Shopify stores. For fast lead generation, clinics, and professional firms, we engineer custom Next.js websites for unmatched speed (sub-second load), superior Google SEO, and AI crawler visibility."
      },
      {
        question: "Can AI tools like ChatGPT, Claude, and Perplexity find and quote our site?",
        answer: "Yes. Every website we ship includes server-rendered semantic HTML, extensive JSON-LD structured data (Organization, LocalBusiness, FAQPage, MedicalClinic/Service), and an llms.txt index. This ensures both traditional Google bots and modern AI search engines accurately read your offers, pricing, and proof."
      },
      {
        question: "Who owns the code, assets, and design files after launch?",
        answer: "You do, 100%. Upon final project handover, all full repository rights, Figma design source files, image assets, and CMS administrative credentials are transferred directly to you. We believe in zero vendor lock-in."
      },
      {
        question: "What happens after the website goes live?",
        answer: "Every website launch includes 30 days of complimentary post-launch support and monitoring. We also provide a recorded Loom video library showing your non-technical team how to edit text, swap photos, and manage leads without writing a single line of code."
      },
      {
        question: "Do you write the website copy or do we need to supply it?",
        answer: "We write conversion-focused, plain-English copy tailored to your industry. For healthcare, we craft compliant doctor-approved messaging that respects medical advertising boundaries while clearly explaining treatment outcomes to prospective patients."
      }
    ],
    extraSection: {
      type: "website-showcase",
      title: "Engineered For Speed & Conversion",
      subtitle: "See how our builds perform on real device mockups, platform comparisons, and Google Core Web Vitals benchmarks."
    }
  },
  {
    id: "branding",
    slug: "branding",
    number: "02",
    title: "Brand Identity & Visual Systems",
    navLabel: "Branding",
    h1: "Brands people remember and trust.",
    tagline: "Logo systems, packaging engineering, typography, and brand books that make you look as formidable as your ambition.",
    answerBlock: "White Ink Design Studio crafts timeless visual identities and brand systems for ambitious healthcare, D2C, and corporate leaders. Since 2018, we have guided 400+ brands from foundational logo marks to shelf-ready retail packaging and master brand books.",
    heroOutcome: "Stand out on dark backgrounds and competitive retail shelves with undeniable elegance.",
    audienceHeadline: "Designed for leaders who refuse to be perceived as just another commodity.",
    keyProof: [
      { stat: "400+", label: "Brands Launched", detail: "Since 2018 across India and the UK" },
      { stat: "100%", label: "Original Trademarkable", detail: "Vector craftsmanship; zero stock icons" },
      { stat: "2-3 Wks", label: "Brand Sprint", detail: "Rapid delivery from brief to guidelines" },
      { stat: "30+", label: "Packaging Dielines", detail: "FMCG, supplements, fragrance & retail" },
    ],
    audience: [
      {
        buyerType: "D2C & Retail Challengers",
        tagline: "Packaging and identity that dominates physical and digital shelves",
        description: "From luxury fragrance boxes (Wand) to 24-SKU food ranges (UPFOLD), we engineer custom packaging dielines, foil-stamped labels, and unboxing rituals."
      },
      {
        buyerType: "Healthcare & Specialist Clinics",
        tagline: "Visual language that communicates clinical gravitas and empathy",
        description: "Modernized clinic identities, patient consultation folders, physician logos, and color palettes that put anxious patients at immediate ease."
      },
      {
        buyerType: "Corporate & Overseas Practices",
        tagline: "Cross-border credibility for firms serving UK and US clients",
        description: "Identity systems for international accounting (The Alpha CPA's), industrial manufacturers, and consulting firms competing globally."
      }
    ],
    deliverables: [
      {
        title: "Brand Strategy & Positioning",
        description: "Audience psychographics, core values, category differentiation, and tone of voice frameworks.",
        tag: "STRATEGY"
      },
      {
        title: "Primary, Secondary & Icon Marks",
        description: "Scalable vector identity systems designed to shine on everything from tiny Instagram avatars to outdoor signage.",
        tag: "IDENTITY"
      },
      {
        title: "Master Typography & Palette Hierarchy",
        description: "Curated type pairing and color systems with CMYK, RGB, Pantone, and digital hex codes.",
        tag: "VISUAL SYSTEM"
      },
      {
        title: "Packaging & Die-Line Engineering",
        description: "Shelf-ready 3D mockups, print finishes (emboss, deboss, spot UV, gold foil), and printer-ready vector files.",
        tag: "PACKAGING"
      },
      {
        title: "Comprehensive Brand Guidelines Book",
        description: "30+ page definitive rulebook covering spacing, misuses, layout grids, and digital design rules in PDF.",
        tag: "RULEBOOK"
      },
      {
        title: "Executive Stationery & Pitch Collateral",
        description: "Premium business cards, letterheads, presentation deck templates, and branded email signatures.",
        tag: "COLLATERAL"
      }
    ],
    subServices: [
      { title: "2-Week Brand Sprint", desc: "Rapid identity package for urgent product launches", status: "available" },
      { title: "Retail Packaging & Labels", desc: "Die-cut engineering for bottles, pouches, boxes, and retail tins", status: "available" },
      { title: "Brand Identity Overhaul", desc: "Modernizing legacy brands while preserving brand equity", status: "available" },
      { title: "Brand Guidelines & System Kits", desc: "Standardizing multi-department design governance", status: "available" }
    ],
    pricing: {
      inr: {
        from: "₹25,000",
        suffix: "fixed sprint fee",
        typicalRange: "₹25,000 – ₹75,000",
        scopeNote: "Includes strategy, 3 logo directions, brand book, typography, stationery & vector suite"
      },
      gbp: {
        from: "£550",
        suffix: "fixed quote in GBP",
        typicalRange: "£550 – £1,600",
        scopeNote: "Direct founder collaboration, UK time zone alignment, full trademark rights assignment"
      },
      usd: {
        from: "$700",
        suffix: "fixed quote in USD",
        typicalRange: "$700 – $2,200",
        scopeNote: "Complete commercial release, all source files in Figma/Illustrator"
      }
    },
    processSteps: [
      {
        step: "01",
        title: "Discovery & Moodboards",
        weeks: "Days 1-5",
        whatHappens: "Deep-dive founder interview, market benchmark, and synthesis of 3 distinct visual moodboard directions.",
        whatWeNeed: "Company history, desired adjectives, and competitors you want to outclass.",
        deliverable: "Strategic brief and approved creative moodboard direction."
      },
      {
        step: "02",
        title: "Concept Architecture",
        weeks: "Week 2",
        whatHappens: "Our creative directors sketch and engineer 3 distinct logo marks, shown in authentic real-world mockups.",
        whatWeNeed: "Feedback on conceptual directions and team preference alignment.",
        deliverable: "3 fully developed concept presentations with context mockups."
      },
      {
        step: "03",
        title: "Refinement & Packaging",
        weeks: "Weeks 2-3",
        whatHappens: "Polishing chosen mark, locking typography pairings, stress-testing sizes, and developing packaging/stationery files.",
        whatWeNeed: "Packaging dimensions and printer specifications if applicable.",
        deliverable: "Complete collateral proofs and packaging dieline test prints."
      },
      {
        step: "04",
        title: "Brand Bible & Vector Release",
        weeks: "Week 3",
        whatHappens: "Compiling the definitive Brand Guidelines Book, organizing vector asset kits, and assigning full IP ownership.",
        whatWeNeed: "Final sign-off on master file archive.",
        deliverable: "Cloud asset library, vector formats (.AI, .EPS, .SVG, .PNG), and brand PDF."
      }
    ],
    toolsAndPlatforms: [
      { name: "Adobe Illustrator", category: "Vector Precision" },
      { name: "Figma", category: "Digital Guidelines" },
      { name: "Adobe Photoshop", category: "Photorealistic Mockups" },
      { name: "InDesign", category: "Editorial & Print" }
    ],
    relatedCaseSlugs: ["goldden-mason", "the-alpha-cpas", "happy-homeopathy", "upfold"],
    testimonial: {
      quote: "White Ink brought an elevated design sensibility to The Alpha CPA's. They delivered a brand system that immediately communicated trustworthiness and transatlantic capability.",
      author: "CA Bhavin Shah",
      role: "Managing Partner",
      company: "The Alpha CPA's"
    },
    faqs: [
      {
        question: "What master file formats do we receive?",
        answer: "You receive industry-standard vector files including editable Adobe Illustrator (.AI), vector .EPS, scalable .SVG, print-ready CMYK .PDFs, and high-resolution transparent .PNGs formatted for both dark and light backgrounds."
      },
      {
        question: "How many unique logo concepts will you present?",
        answer: "We present 3 thoroughly developed, distinct conceptual routes. We do not show superficial variations; each route is rooted in a unique strategic angle and demonstrated on real mockups (stationery, digital, outdoor, packaging)."
      },
      {
        question: "Can we legally trademark the logo mark you create?",
        answer: "Yes. All design work crafted by White Ink Design Studio is 100% bespoke, drawn from scratch without template assets or stock iconography. You receive full intellectual property ownership and commercial usage rights for trademark registration."
      },
      {
        question: "Do you design retail product packaging and labels?",
        answer: "Yes, packaging engineering is one of our key strengths. We have designed retail packaging for perfumes (Wand Fragrance), ready-to-eat food pouches (UPFOLD / Coravix Global), and pharmaceutical labels that conform to legal regulatory standards."
      },
      {
        question: "How fast can we complete a brand identity project?",
        answer: "Our standard Brand Sprint takes 2 to 3 weeks from the initial alignment interview to final delivery of the vector kit and Brand Guidelines Book."
      }
    ],
    extraSection: {
      type: "brand-gallery",
      title: "Tangible Brand Deliverables",
      subtitle: "Explore our multi-disciplinary brand asset suites—from logo marks and custom palettes to packaging die-cuts and brand guidelines."
    }
  },
  {
    id: "performance-marketing",
    slug: "performance-marketing",
    number: "03",
    title: "Growth Marketing & Performance Ads",
    navLabel: "Performance Marketing",
    h1: "Ads that pay back, on Meta, Google and ChatGPT.",
    tagline: "Paid media funnels, search advertising, and generative AI search campaigns run by the exact team that built the brand.",
    answerBlock: "White Ink Design Studio manages high-ROAS paid media and acquisition funnels across Meta Ads, Google PMax, and emerging ChatGPT advertising. With ₹1.2Cr+ in annual media managed and 70+ healthcare brands served, we specialize in high-intent lead generation and strict ad-policy compliance.",
    heroOutcome: "Scale customer acquisition with zero ad account bans and proven cost-per-lead drops.",
    audienceHeadline: "Built for brands that need predictable customer acquisition, not vanity clicks.",
    keyProof: [
      { stat: "₹1.2Cr+", label: "Ad Spend Managed", detail: "Across Meta, Google PMax & ChatGPT" },
      { stat: "100%", label: "Healthcare Policy Pass", detail: "Zero bans across AYUSH & medical funnels" },
      { stat: "-38%", label: "Average CPL Drop", detail: "Achieved within 90 days of funnel optimization" },
      { stat: "3.2x – 4.8x", label: "D2C ROAS", detail: "Sustainable blended return on ad spend" },
    ],
    audience: [
      {
        buyerType: "Homeopathy & Healthcare Brands",
        tagline: "Advertising that passes strict medical scrutiny without account bans",
        description: "We master AYUSH guidelines, Meta health restrictions, and Google healthcare disclaimers to scale patient acquisition for brands like Dr. Reckeweg and IVF clinics."
      },
      {
        buyerType: "D2C Brands Scaling Beyond ₹10L/Month",
        tagline: "Profitable ROAS with reduced RTO and hyper-local delivery funnels",
        description: "High-velocity creative testing, dynamic product ads, and local delivery hooks (such as Wand Fragrance's 3-hour delivery in Ahmedabad) to drop acquisition cost."
      },
      {
        buyerType: "Professional & B2B Service Firms",
        tagline: "High-ticket enquiry engines generating pre-qualified sales calls",
        description: "Google Search intent harvesting and LinkedIn funnels that deliver real decision-makers, not spam form fills."
      }
    ],
    deliverables: [
      {
        title: "Meta Ads (Instagram & Facebook)",
        description: "Full-funnel creative testing, Lookalike audiences, Advantage+ shopping campaigns, and dynamic retargeting.",
        tag: "META"
      },
      {
        title: "Google Search & Performance Max (PMax)",
        description: "Capturing high-intent search queries, local store visit actions, and automated Google Shopping feeds.",
        tag: "GOOGLE"
      },
      {
        title: "ChatGPT Ads & Generative AI Pilot",
        description: "Early-mover conversational search testing placing your products directly inside natural language recommendation flows.",
        tag: "AI SEARCH"
      },
      {
        title: "High-Converting Landing Pages",
        description: "Dedicated conversion funnels engineered with sub-second speeds and focused single-action booking/purchase flows.",
        tag: "CRO"
      },
      {
        title: "AYUSH & Medical Ad Policy Compliance",
        description: "Rigorous pre-flight copywriting and imagery reviews to protect ad accounts from bans in regulated sectors.",
        tag: "COMPLIANCE"
      },
      {
        title: "Real-Time 24/7 Looker Studio Dashboard",
        description: "Transparent, real-time attribution tracking every rupee/dollar spent, blended ROAS, CPL, and lead quality metrics.",
        tag: "REPORTING"
      }
    ],
    subServices: [
      { title: "Meta Ads Scaling Engine", desc: "Instagram & Facebook full-funnel performance marketing", status: "available" },
      { title: "Google Search & PMax Campaigns", desc: "High-intent buyer & patient search capture", status: "available" },
      { title: "ChatGPT Sponsored Search Pilot", desc: "Early-stage conversational ad placement", status: "available" },
      { title: "Landing Page CRO Sprints", desc: "A/B testing page layouts to double conversion rates", status: "available" }
    ],
    pricing: {
      inr: {
        from: "₹20,000",
        suffix: "/month management retainer",
        typicalRange: "₹20,000 – ₹60,000/mo",
        scopeNote: "Includes media management, weekly ad creatives, copy revisions, and real-time dashboard"
      },
      gbp: {
        from: "£450",
        suffix: "/month management",
        typicalRange: "£450 – £1,400/mo",
        scopeNote: "Transparent spend thresholds, weekly Loom video reporting, UK hours communication"
      },
      usd: {
        from: "$600",
        suffix: "/month management",
        typicalRange: "$600 – $1,800/mo",
        scopeNote: "Dedicated performance marketing lead, bi-weekly strategy calls"
      }
    },
    processSteps: [
      {
        step: "01",
        title: "Pixel & Tracking Architecture",
        weeks: "Week 1",
        whatHappens: "Installing GA4, Meta Conversions API (CAPI), Google Tag Manager, and offline conversion tracking to fix attribution leaks.",
        whatWeNeed: "Ad account admin permissions and website backend access.",
        deliverable: "100% verified server-side tracking and attribution pipeline."
      },
      {
        step: "02",
        title: "Creative Sprints & Copy Testing",
        weeks: "Week 2",
        whatHappens: "Producing 10-15 static, carousel, and motion hooks with compliance-approved medical and e-commerce copy.",
        whatWeNeed: "Product images, clinical accreditations, or existing creative assets.",
        deliverable: "Initial campaign launch with isolated audience testing ad sets."
      },
      {
        step: "03",
        title: "Optimization & Scaling Winners",
        weeks: "Weeks 3-4",
        whatHappens: "Shutting down underperforming ad sets, doubling down on top-performing hooks, and tuning bid strategies.",
        whatWeNeed: "Lead quality feedback from your sales or front-desk team.",
        deliverable: "Lowered Cost Per Acquisition (CPA) and stabilized daily leads."
      },
      {
        step: "04",
        title: "CRO & Weekly Growth Cadence",
        weeks: "Month 2+",
        whatHappens: "Continuous landing page A/B testing, audience retargeting refinement, and expanding into search and AI channels.",
        whatWeNeed: "Monthly growth review attendance.",
        deliverable: "Live Looker Studio dashboard updates and monthly scale recommendations."
      }
    ],
    toolsAndPlatforms: [
      { name: "Meta Ads Manager", category: "Social Acquisition" },
      { name: "Google Ads / PMax", category: "Search & Shopping" },
      { name: "ChatGPT Ads API", category: "Generative Search" },
      { name: "Looker Studio", category: "Live BI Dashboard" },
      { name: "Google Tag Manager", category: "Server CAPI Tracking" },
      { name: "Triple Whale", category: "E-Commerce Attribution" }
    ],
    relatedCaseSlugs: ["dr-reckeweg", "wand-fragrance", "zydus-ivf"],
    testimonial: {
      quote: "White Ink unlocked paid channels for Dr. Reckeweg that our previous agencies said were impossible due to health advertising restrictions. Zero bans, flawless compliance, and steady growth.",
      author: "Marketing Operations Lead",
      role: "Digital Campaign Manager",
      company: "Dr. Reckeweg & Co."
    },
    faqs: [
      {
        question: "What minimum advertising budget is recommended?",
        answer: "In India, we recommend a minimum ad spend of ₹30,000 to ₹50,000 per month so the ad algorithms have sufficient data to optimize. For international campaigns in the UK or US, we advise a minimum ad budget of £1,000 or $1,200 per month."
      },
      {
        question: "How do you prevent ad account bans in healthcare?",
        answer: "Our team is deeply versed in AYUSH marketing regulations, Meta's personal health policies, and Google healthcare verification requirements. We formulate compliant claims, verify disclaimers, and pre-screen copy before publishing."
      },
      {
        question: "Are ad creatives (images, copy, videos) included in the retainer?",
        answer: "Yes. All graphic banners, animated video ads, promotional carousels, and conversion copywriting are generated and iterated in-house by our studio team as part of your monthly management retainer."
      },
      {
        question: "What is the ChatGPT Ads pilot?",
        answer: "As AI tools become primary discovery channels, we test contextual sponsored placements and conversational discovery funnels for products like health tonics and specialty services where users ask for direct recommendations."
      },
      {
        question: "How do we monitor results?",
        answer: "You receive a live Looker Studio dashboard that connects directly to your ad accounts, updated in real time. We also share weekly WhatsApp summary bullets and hold a monthly video strategy review."
      }
    ],
    extraSection: {
      type: "performance-channels",
      title: "Results Across Paid Channels",
      subtitle: "Review verified benchmark metrics, attribution dashboards, and our healthcare ad policy guarantee."
    }
  },
  {
    id: "social-media",
    slug: "social-media",
    number: "04",
    title: "Social Media & Content Production",
    navLabel: "Social Media & Content",
    h1: "Content people stop scrolling for.",
    tagline: "Monthly social calendars, vertical video shoots, Reels, brochures, and expo stall architecture that keep your brand in the feed.",
    answerBlock: "White Ink Design Studio produces compelling organic social strategies, high-retention video Reels, professional studio shoots, and physical exhibition collateral. With 5M+ organic views generated, we help doctors, D2C brands, and event organizers cultivate deeply loyal audiences.",
    heroOutcome: "Build genuine community attention with strategic production and thumb-stopping visual storytelling.",
    audienceHeadline: "Crafted for brands tired of posting generic Canva graphics that nobody engages with.",
    keyProof: [
      { stat: "5M+", label: "Organic Reel Views", detail: "Generated for clients without ad spend" },
      { stat: "62-Day", label: "Editorial Calendars", detail: "Multi-month planned narrative sprints" },
      { stat: "11-Person", label: "Production Crew", detail: "In-house cameras, lighting, & audio" },
      { stat: "5,000+", label: "Festival Attendees", detail: "Driven through social ticketing (GENZATRI)" },
    ],
    audience: [
      {
        buyerType: "Doctors & Clinical Specialists",
        tagline: "Authority personal branding that converts viewers into clinic consults",
        description: "We handle doctor scriptwriting, simplified anatomical animations, and shoot direction for surgeons and specialists like Dr. Harshil Shah."
      },
      {
        buyerType: "Consumer & Food Brands",
        tagline: "Mouth-watering food styling, unboxing Reels, and lifestyle photography",
        description: "High-definition product photography, recipe videos, and ingredient highlights for consumer goods like UPFOLD, MDP Coffee, and Adinath Ghee."
      },
      {
        buyerType: "Events & Large-Scale Exhibitions",
        tagline: "Festival campaigns, ticket-booking momentum, and 3D expo stalls",
        description: "Multi-week content roadmaps, celebrity announcements, physical stall architecture, and large-format exhibition graphics for events like GENZATRI."
      }
    ],
    deliverables: [
      {
        title: "30 & 60-Day Strategic Calendars",
        description: "Pre-planned social roadmaps structured around 4 distinct pillars: Education, Social Proof, Behind-the-Scenes, and Offers.",
        tag: "STRATEGY"
      },
      {
        title: "On-Location & Studio Shoots",
        description: "Cinema cameras, wireless lavaliers, studio lighting, and creative direction right at your hospital, office, or studio.",
        tag: "PRODUCTION"
      },
      {
        title: "High-Retention Instagram Reels & Shorts",
        description: "Vertical storytelling edited with fast-paced kinetic typography, custom sound design, and pattern-interrupt hooks.",
        tag: "VIDEO"
      },
      {
        title: "Doctor & Executive Scriptwriting",
        description: "Translating complex medical and technical concepts into conversational 45-second scripts that build credibility.",
        tag: "COPY"
      },
      {
        title: "Investor Decks & Corporate Catalogues",
        description: "Institutional pitch presentations (like MDP Coffee House), brochures, and flyers designed to win commercial deals.",
        tag: "COLLATERAL"
      },
      {
        title: "Exhibition Stall Design & Print",
        description: "3D architectural visualization of trade show booths, fabric backdrops, rollup banners, and counter displays.",
        tag: "EXPO"
      }
    ],
    subServices: [
      { title: "Doctor Personal Branding Engine", desc: "Turn medical expertise into patient trust and consultations", status: "available" },
      { title: "Product Shoot & Food Styling", desc: "Studio-grade photography and vertical video reels", status: "available" },
      { title: "Event Launch & Ticket Sprints", desc: "Multi-week social build-up to sell out events and conferences", status: "available" },
      { title: "3D Trade Show & Expo Stalls", desc: "Turnkey exhibition stand design and physical print collateral", status: "available" }
    ],
    pricing: {
      inr: {
        from: "₹18,000",
        suffix: "/month retainer",
        typicalRange: "₹18,000 – ₹55,000/mo",
        scopeNote: "Includes strategy, monthly shoot session, 12-16 edited reels/carousels & copywriting"
      },
      gbp: {
        from: "£400",
        suffix: "/month retainer",
        typicalRange: "£400 – £1,200/mo",
        scopeNote: "Video post-production, script editing, motion graphics, and remote creative direction"
      },
      usd: {
        from: "$500",
        suffix: "/month retainer",
        typicalRange: "$500 – $1,600/mo",
        scopeNote: "Includes dedicated video editor and social content strategist"
      }
    },
    processSteps: [
      {
        step: "01",
        title: "Editorial Framework & Hooks",
        weeks: "Week 1",
        whatHappens: "Analyzing audience comments, identifying top pain points, and writing 15 detailed video scripts with strong opening hooks.",
        whatWeNeed: "30-minute founder/doctor briefing and topic approval.",
        deliverable: "Approved monthly script deck and shoot storyboard."
      },
      {
        step: "02",
        title: "Production & Shoot Day",
        weeks: "Week 2",
        whatHappens: "Our crew sets up studio lighting, teleprompters, and 4K cameras at your venue to record a full month's video in 2-3 hours.",
        whatWeNeed: "On-camera talent availability and product samples.",
        deliverable: "Raw high-resolution footage safely backed up to cloud servers."
      },
      {
        step: "03",
        title: "Dynamic Video Editing",
        weeks: "Weeks 2-3",
        whatHappens: "Color grading, sound effects, B-roll insertions, and kinetic subtitle styling designed for maximum average watch time.",
        whatWeNeed: "Single consolidated round of review feedback.",
        deliverable: "Ready-to-publish vertical Reels, Shorts, and carousel cards."
      },
      {
        step: "04",
        title: "Publishing & Engagement Review",
        weeks: "Week 4",
        whatHappens: "Optimal scheduling, hashtag curation, community comment monitoring, and monthly retention metric analysis.",
        whatWeNeed: "Account login or scheduling platform approval.",
        deliverable: "Monthly view growth report and next month's iteration plan."
      }
    ],
    toolsAndPlatforms: [
      { name: "Adobe Premiere Pro", category: "Video Editing" },
      { name: "After Effects", category: "Motion Typography" },
      { name: "DaVinci Resolve", category: "Color Grading" },
      { name: "Adobe Lightroom", category: "Photo Processing" },
      { name: "Sony Cinema Line", category: "4K Capture Gear" }
    ],
    relatedCaseSlugs: ["dr-harshil-shah", "hevert", "genzatri", "upfold"],
    testimonial: {
      quote: "The White Ink video team made creating medical content effortless. They guided my delivery, handled all camera gear, and turned our clinical insights into viral educational Reels that drive actual patient visits.",
      author: "Dr. Harshil Shah",
      role: "Orthopedic & Joint Surgeon",
      company: "drharshilshah.com"
    },
    faqs: [
      {
        question: "Do you come to our clinic or office for video shoots?",
        answer: "Yes. For clients in Ahmedabad, Gandhinagar, and across Gujarat, our crew brings cinema-grade 4K camera gear, professional wireless microphones, teleprompters, and softbox lighting directly to your facility."
      },
      {
        question: "How many Reels and posts do we get each month?",
        answer: "Our standard content retainer produces 12 to 16 high-production assets per month, typically split between 6-8 edited video Reels, 4 high-value educational carousels, and 4 single-image announcements."
      },
      {
        question: "Who writes the scripts and determines topics?",
        answer: "Our copywriters research high-search queries, patient questions, and competitor trends to write complete scripts with proven hooks. You simply review and tweak before shoot day."
      },
      {
        question: "Can you handle our physical trade show expo stalls?",
        answer: "Yes, we regularly design 3D expo elevations, fabric wall banners, rollup standees, printed brochures, and marketing collateral for national medical conferences, food expos, and international trade shows."
      }
    ],
    extraSection: {
      type: "content-calendar",
      title: "Planned Storytelling Architecture",
      subtitle: "See how we structure a 62-day content matrix that systematically balances brand authority with commercial conversion."
    }
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    number: "05",
    title: "AI & Automation (wink'AI Studio)",
    navLabel: "AI & Automation",
    h1: "Answer every lead in seconds, even at 2am.",
    tagline: "WhatsApp AI agents, automated CRM routing, and generative AI search visibility so your business never misses an enquiry.",
    answerBlock: "White Ink's wink'AI studio engineers autonomous WhatsApp conversational agents built on Claude and n8n, real-time CRM lead pipelines, and AI search visibility (llms.txt and semantic schema). We ensure your business captures and qualifies leads 24/7 in under 60 seconds.",
    heroOutcome: "Autonomous lead qualification, instant booking links, and AI search presence.",
    audienceHeadline: "Designed for businesses whose leads go cold because replies take more than 15 minutes.",
    keyProof: [
      { stat: "< 60s", label: "Lead Response Time", detail: "24/7/365 instant WhatsApp reply speed" },
      { stat: "Claude + n8n", label: "Production Tech Stack", detail: "Custom private workflows with zero lock-in" },
      { stat: "100%", label: "CRM Sync Accuracy", detail: "Leads automatically tagged & routed" },
      { stat: "4.8★", label: "Client Satisfaction", detail: "Proven on tour booking bots (Jainam Tours)" },
    ],
    audience: [
      {
        buyerType: "Tour Operators & High-Volume Enquiries",
        tagline: "Answering itinerary queries and capturing phone numbers around the clock",
        description: "Our WhatsApp bots handle complex package questions, check seasonal availability, and schedule callbacks for operators like Jainam Tours."
      },
      {
        buyerType: "Doctors & Clinical Practices",
        tagline: "Qualifying patient symptoms and sharing calendar booking slots",
        description: "Patient inquiries arriving late at night receive empathetic responses, clinic address details, consultation fees, and instant booking links."
      },
      {
        buyerType: "Agencies & Transatlantic Businesses",
        tagline: "Bridging time zones between India, the UK, and the US effortlessly",
        description: "Instant qualification forms, time-zone adapted scheduling, and multi-currency quotes without keeping staff up at 3am."
      }
    ],
    deliverables: [
      {
        title: "Official WhatsApp Business Cloud API",
        description: "Approved Meta Cloud API setup with green-tick badge eligibility and zero risk of unofficial number bans.",
        tag: "META API"
      },
      {
        title: "Custom Claude AI Intelligence Core",
        description: "Trained on your bespoke company knowledge base, service FAQs, pricing bands, and exact brand voice.",
        tag: "INTELLIGENCE"
      },
      {
        title: "Automated Lead Routing to CRM",
        description: "Pushes qualified lead data, budget, timeline, and chat transcripts directly to HubSpot, Zoho, Google Sheets, or Slack.",
        tag: "INTEGRATION"
      },
      {
        title: "AI Search Optimization (GEO & llms.txt)",
        description: "Structuring your site's data so ChatGPT, Claude, and Perplexity recognize and cite your brand as an authority.",
        tag: "GEO / AEO"
      },
      {
        title: "Multi-Language Conversational Flow",
        description: "Native support for natural English, Hindi, and Gujarati conversations with graceful context memory.",
        tag: "LOCALIZATION"
      },
      {
        title: "Live Human Agent Handover",
        description: "Detects high-intent queries and automatically alerts a live team member with a full chat summary.",
        tag: "HANDOFF"
      }
    ],
    subServices: [
      { title: "WhatsApp AI Sales Agent", desc: "Automated 24/7 lead qualification and calendar booking", status: "available" },
      { title: "AI Search Visibility (llms.txt)", desc: "Generative Engine Optimization for ChatGPT and Perplexity", status: "available" },
      { title: "CRM & n8n Workflow Automation", desc: "Connecting forms, WhatsApp, email, and sales pipelines", status: "available" },
      { title: "Custom AI Knowledge Bases", desc: "Internal AI assistant trained on your company SOPs", status: "available" }
    ],
    pricing: {
      inr: {
        from: "₹25,000",
        suffix: "one-time setup",
        typicalRange: "₹25,000 – ₹60,000 setup + API",
        scopeNote: "Includes Claude knowledge base training, Meta API onboarding, CRM webhook integration & testing"
      },
      gbp: {
        from: "£600",
        suffix: "one-time setup",
        typicalRange: "£600 – £1,500",
        scopeNote: "Includes Calendly integration, timezone routing, and AI search schema preparation"
      },
      usd: {
        from: "$750",
        suffix: "one-time setup",
        typicalRange: "$750 – $1,900",
        scopeNote: "Full source code transfer, n8n workflow deployment, multi-channel connectivity"
      }
    },
    processSteps: [
      {
        step: "01",
        title: "Knowledge Base Synthesis",
        weeks: "Week 1",
        whatHappens: "Ingesting your company website, past client inquiries, price ranges, and edge-case qualification criteria.",
        whatWeNeed: "Your top 20 customer questions and service rate cards.",
        deliverable: "Structured knowledge base document and system prompt."
      },
      {
        step: "02",
        title: "n8n Workflow & API Architecture",
        weeks: "Week 2",
        whatHappens: "Building serverless webhook connections, token-efficient Claude calls, and calendar scheduling API triggers.",
        whatWeNeed: "Meta Business Manager access and CRM API credentials.",
        deliverable: "Interactive sandboxed staging bot for internal team testing."
      },
      {
        step: "03",
        title: "Stress Testing & Safety Guardrails",
        weeks: "Week 3",
        whatHappens: "Simulating 50+ prospect conversations, prompt injection attempts, language switches, and human handoff checks.",
        whatWeNeed: "Team testing feedback and edge case notes.",
        deliverable: "Hardened bot logic with zero hallucination protocols."
      },
      {
        step: "04",
        title: "Live Deployment & Training",
        weeks: "Week 4",
        whatHappens: "Connecting to your official WhatsApp phone number, activating live CRM push, and staff onboarding walkthrough.",
        whatWeNeed: "Phone number verification OTP on Meta.",
        deliverable: "Active WhatsApp AI agent, real-time logging, and video manual."
      }
    ],
    toolsAndPlatforms: [
      { name: "Claude 3.5 Sonnet", category: "Reasoning LLM" },
      { name: "n8n Automation", category: "Workflow Engine" },
      { name: "Meta WhatsApp Cloud API", category: "Official Channel" },
      { name: "OpenAI GPT-4o", category: "Fallback Model" },
      { name: "HubSpot / Zoho CRM", category: "Lead Routing" },
      { name: "Calendly / Cal.com", category: "Timezone Booking" }
    ],
    relatedCaseSlugs: ["jainam-tours", "dr-reckeweg"],
    testimonial: {
      quote: "Our tour inquiries arrive at all hours of the day and night. The WhatsApp AI agent answers customer questions in 5 seconds and qualifies leads automatically, increasing our consultation booking rate substantially.",
      author: "Operational Lead",
      role: "Customer Operations",
      company: "Jainam Tours"
    },
    faqs: [
      {
        question: "What happens if a user asks something very unusual or complex?",
        answer: "The AI agent is engineered with strict confidence thresholds. If a question falls outside its validated knowledge base, it politely informs the user and immediately pings a human team member via WhatsApp or Slack with a summary of the chat."
      },
      {
        question: "Is there any risk of WhatsApp banning our phone number?",
        answer: "No. We build exclusively on the official Meta WhatsApp Business Cloud API. Unlike unofficial scraping bots or modified apps, official API numbers are fully sanctioned by Meta, green-tick eligible, and never subjected to random bans."
      },
      {
        question: "What are the ongoing token and API costs?",
        answer: "Anthropic Claude and Meta WhatsApp Cloud API costs are based on actual usage. For most small to mid-sized businesses handling 500 to 2,000 conversations a month, the total API bill is typically under ₹1,500 to ₹3,000 ($20 to $40) per month."
      },
      {
        question: "What is AI Search Visibility (GEO)?",
        answer: "Generative Engine Optimization (GEO) ensures your brand is indexed and recommended by AI answer tools like ChatGPT, Perplexity, and Claude. We prepare semantic llms.txt files and JSON-LD schema so AI models cite your studio directly."
      }
    ],
    extraSection: {
      type: "ai-simulator",
      title: "Interactive WhatsApp AI Agent Simulator",
      subtitle: "Experience how our Claude + n8n WhatsApp agent responds to real customer inquiries in sub-2 seconds."
    }
  }
];

export const ENGAGEMENT_MODELS = [
  {
    id: "project",
    name: "Fixed Project",
    tagline: "Best for Website Builds & Brand Identity Sprints",
    description: "A clearly defined scope with guaranteed deliverables, fixed pricing, and milestone deadlines.",
    timeline: "2 to 6 Weeks",
    paymentTerms: "50% upfront deposit, 50% upon final sign-off & launch",
    includes: [
      "Written scope of work & visual wireframes",
      "Full Figma source files & design assets",
      "Clean production code & IP ownership transfer",
      "Team handover training via recorded Loom library",
      "30 days complimentary post-launch support warranty"
    ],
    bestFor: "Clinics launching new sites, D2C Shopify builds, and full brand identity systems."
  },
  {
    id: "retainer",
    name: "Monthly Growth Retainer",
    tagline: "Best for Performance Marketing & Social Production",
    description: "An agile ongoing partnership where we function as your senior internal creative and growth squad.",
    timeline: "Monthly (3-Month Minimum)",
    paymentTerms: "Billed monthly in advance, cancel with 30 days notice",
    includes: [
      "Dedicated senior growth and design team members",
      "Weekly creative refreshes & A/B testing sprints",
      "24/7 real-time Looker Studio attribution dashboard",
      "Shared dedicated WhatsApp / Slack communications channel",
      "Bi-weekly strategy sync calls and monthly roadmapping"
    ],
    bestFor: "D2C brands scaling ad spend, doctors needing consistent patient Reels, and continuous CRO."
  },
  {
    id: "sprint",
    name: "2-Week Rapid Sprint",
    tagline: "Best for Focused Landing Pages & Urgent Brand Launches",
    description: "High-intensity two-week focused sprint for time-sensitive product launches or event ticketing.",
    timeline: "Strict 14 Days",
    paymentTerms: "100% upon sprint kickoff",
    includes: [
      "Prioritized direct communication with founders",
      "High-converting single-page responsive design & build",
      "Ad creative package (5 static hooks + 2 motion cuts)",
      "Tracking pixel setup & instant domain connection",
      "Immediate handover on day 14"
    ],
    bestFor: "Festival ticketing sites (GENZATRI), new product drops, and PPC test funnels."
  }
];

export const SERVICES_HUB_FAQS = [
  {
    question: "Do you only take projects with all 5 services, or can we hire you for just one?",
    answer: "You can hire White Ink for a single targeted service—such as a custom website redesign, a 2-week brand sprint, or WhatsApp AI automation. Many of our longest client partnerships started with a single website build or logo system and naturally expanded into growth marketing once trust was established."
  },
  {
    question: "What is your minimum budget to work together?",
    answer: "Our project pricing starts at ₹25,000 ($700 / £550) for brand identity sprints and ₹35,000 ($950 / £750) for custom website builds. Monthly growth marketing and social retainers start at ₹18,000 to ₹20,000/month ($500 to $600/month). We provide a clear, written fixed price after one 20-minute alignment call."
  },
  {
    question: "Who owns the final design files, code, and ad accounts?",
    answer: "You own 100% of everything we build. All Figma source files, code repositories, brand assets, and advertising accounts remain under your complete ownership. We believe in earning long-term relationships through performance, never through vendor lock-in."
  },
  {
    question: "How do you work with international clients across the UK and US?",
    answer: "We structure overlap working hours every day with London and US East Coast mornings. International clients communicate directly with our senior founders via shared Slack or WhatsApp, with contracts under UK/Indian law and invoicing conveniently handled in GBP (£) or USD ($)."
  },
  {
    question: "What makes your healthcare and clinic work different from other agencies?",
    answer: "Healthcare is one of the strictest categories in marketing. Having served 70+ healthcare brands (including Dr. Reckeweg, Zydus Hospitals, and Hevert), we know AYUSH regulations, Meta medical ad policies, and HIPAA-friendly patient booking flows intimately. We write copy doctors approve and build pages that anxious patients trust."
  }
];

