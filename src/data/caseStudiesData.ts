export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: "Healthcare" | "D2C" | "Industrial" | "Events" | "Professional" | "Travel";
  industryLabel: string;
  serviceCategory: "Website" | "Branding" | "Ads" | "Social" | "AI";
  serviceLabel: string;
  services: string[];
  title: string;
  oneLineResult: string;
  featured?: boolean;
  highlightStat: {
    value: string;
    label: string;
  };
  resultsBand: {
    value: string;
    label: string;
    context: string;
  }[];
  snapshot: {
    client: string;
    industry: string;
    market: string;
    services: string;
    timeline: string;
    deliverables: string;
  };
  challenge: string;
  whatWeDid: string[];
  whatChanged: string;
  clientQuote?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  colorTheme: {
    accent: string;
    border: string;
    glow: string;
    badgeBg: string;
    badgeText: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "dr-reckeweg",
    slug: "dr-reckeweg",
    client: "Dr. Reckeweg & Co.",
    industry: "Healthcare",
    industryLabel: "Healthcare & Pharma",
    serviceCategory: "Ads",
    serviceLabel: "Growth Marketing & AI Ads",
    services: ["Meta & Google PMax", "ChatGPT Ads Pilot", "AYUSH Compliance", "Content Calendars", "Quora Health Strategy"],
    title: "Launching New Remedies For Dr. Reckeweg In A Crowded Market",
    oneLineResult: "100% AYUSH & Meta advertising compliance with zero account bans across pan-India Google PMax funnels and ChatGPT ads pilot.",
    featured: true,
    highlightStat: {
      value: "100%",
      label: "Ad Policy Approval",
    },
    resultsBand: [
      { value: "100%", label: "Ad Compliance", context: "AYUSH & Meta approved" },
      { value: "0", label: "Account Bans", context: "Zero disapprovals" },
      { value: "₹2,000/d", label: "ChatGPT Pilot", context: "Calcarea Phos & Berberis" },
      { value: "1895", label: "Heritage Brand", context: "Scaled pan-India" },
    ],
    snapshot: {
      client: "Dr. Reckeweg & Co. Germany (India Operations)",
      industry: "Healthcare & German Homeopathy",
      market: "Pan-India Multi-City Distribution",
      services: "Growth Marketing, Performance Ads, AI Routing",
      timeline: "Ongoing Retainer since 2021",
      deliverables: "Meta Ads, Google PMax, R131 Campaign, Content",
    },
    challenge:
      "German homeopathy leader Dr. Reckeweg faced severe advertising roadblocks on Meta and Google due to tightening pharmaceutical and alternative health algorithms. Their new remedies, including the R131 Liver Tonic formulation, needed rapid physician and patient awareness across high-density Indian metros without triggering automated ad policy flags or account bans.",
    whatWeDid: [
      "Engineered an AYUSH-verified compliance framework that cleared Meta and Google automated health-ad review filters on first submission.",
      "Built high-intent Google Performance Max search campaigns capturing qualified searches for clinical formulations like Calcarea Phos and Berberis Vulgaris.",
      "Pioneered a targeted ChatGPT Ads and conversational prompt discovery pilot budgeted at ₹2,000/day to answer natural language patient inquiries.",
      "Developed authoritative medical content calendars and evidence-backed Quora answer matrices positioning Dr. Reckeweg doctors as clinical benchmarks.",
    ],
    whatChanged:
      "Dr. Reckeweg achieved continuous, uninterrupted national campaign momentum with zero ad disruptions. Remedy inquiries surged across Tier-1 and Tier-2 pharmacy hubs, establishing a scalable digital pipeline that competitors with repeated ad bans could not match.",
    clientQuote: {
      quote:
        "White Ink is the first creative studio that truly understood how to navigate healthcare advertising guidelines without diluting our clinical authority.",
      author: "Marketing Operations Lead",
      role: "Digital Brand Communications",
      company: "Dr. Reckeweg India",
    },
    colorTheme: {
      accent: "#B88746",
      border: "#E8DED0",
      glow: "rgba(184, 135, 70, 0.15)",
      badgeBg: "#F5EFE6",
      badgeText: "#9E7234",
    },
  },
  {
    id: "zydus-hospitals",
    slug: "zydus-hospitals",
    client: "Zydus Hospitals",
    industry: "Healthcare",
    industryLabel: "Healthcare & Hospitals",
    serviceCategory: "Website",
    serviceLabel: "Patient UX & Clinical Web",
    services: ["IVF Landing Experience", "Patient Intake UX", "Healthcare Blogs", "Next-Gen AI Pilot"],
    title: "Redesigning Zydus Hospitals' IVF Journey For Anxious & Comparing Patients",
    oneLineResult: "Empathetic patient-first clinical interface redesign eliminating intake friction and driving high-trust IVF consultations.",
    featured: false,
    highlightStat: {
      value: "Sub-1s",
      label: "Patient Intake Load Time",
    },
    resultsBand: [
      { value: "Sub-1s", label: "Page Load Time", context: "Mobile clinical speed" },
      { value: "4-Step", label: "Intake Journey", context: "Frictionless triage" },
      { value: "100%", label: "Privacy Compliance", context: "HIPAA & clinical safety" },
      { value: "3x", label: "Consultation Reach", context: "Qualified couple intake" },
    ],
    snapshot: {
      client: "Zydus Hospitals (Western India Flagship)",
      industry: "Tertiary Healthcare & Fertility Care",
      market: "Ahmedabad, Gujarat & Western India",
      services: "Patient UX Design, Web Overhaul, Clinical Content",
      timeline: "8 Weeks Engineering Sprint",
      deliverables: "IVF Digital Portal, Doctor Booking System, FAQs",
    },
    challenge:
      "Couples exploring IVF fertility treatments face immense emotional anxiety and aggressively compare hospitals across Western India. Zydus Hospitals' existing digital touchpoints were clinically dense, slow to navigate on mobile, and failed to guide nervous families with the empathy and clarity required before booking an in-person consultation.",
    whatWeDid: [
      "Conducted patient discovery interviews to map emotional decision gates, fear points, and privacy concerns during fertility evaluation.",
      "Architected a calming, privacy-first IVF experience with transparent step-by-step procedural guides, physician credentials, and real success stories.",
      "Built a frictionless 4-step mobile intake engine connecting couples directly with specialized fertility coordinators rather than generic reception desks.",
      "Integrated search-optimized clinical blogs answering questions couples ask at midnight, establishing Zydus as an empathetic clinical voice.",
    ],
    whatChanged:
      "Anxious visitors shifted into actively engaged consultation seekers. Time spent reviewing treatment protocols increased dramatically, while phone inquiries transformed into pre-informed, qualified clinical appointments.",
    clientQuote: {
      quote:
        "The redesigned IVF journey humanized our clinical excellence. Families now walk in already knowing our doctors and trusting our process.",
      author: "Patient Experience Director",
      role: "Fertility & Speciality Services",
      company: "Zydus Hospitals",
    },
    colorTheme: {
      accent: "#0284C7",
      border: "#BAE6FD",
      glow: "rgba(2, 132, 199, 0.12)",
      badgeBg: "#E0F2FE",
      badgeText: "#0369A1",
    },
  },
  {
    id: "speciality-homeopathy",
    slug: "speciality-homeopathy",
    client: "Speciality Homeopathy (Dr. Ketan Patel)",
    industry: "Healthcare",
    industryLabel: "Specialist Clinic",
    serviceCategory: "Website",
    serviceLabel: "Full Website Architecture",
    services: ["14-Page Custom Web", "Sub-Second UX", "3-Colour Palette", "Direct Doctor Booking", "SEO Engine"],
    title: "A 14-Page Website Overhaul For Speciality Homeopathy",
    oneLineResult: "Bespoke 14-page clinical portal with sub-second appointment scheduling and a refined 3-colour palette scoring 99/100 PageSpeed.",
    featured: false,
    highlightStat: {
      value: "99/100",
      label: "Google PageSpeed",
    },
    resultsBand: [
      { value: "14", label: "Custom Pages", context: "Fully bespoke architecture" },
      { value: "99/100", label: "PageSpeed Score", context: "Mobile performance" },
      { value: "<0.8s", label: "Time to Interactive", context: "Sub-second responsiveness" },
      { value: "Top 3", label: "Google Rankings", context: "Target clinical keywords" },
    ],
    snapshot: {
      client: "Speciality Homeopathy (Dr. Ketan Patel)",
      industry: "Chronic Disease Clinical Care",
      market: "Ahmedabad & International Remote Consults",
      services: "Complete Web Design, UI/UX, SEO & Copywriting",
      timeline: "5 Weeks Deployment",
      deliverables: "14-Page Next.js Website, Patient Case Studies, Booking",
    },
    challenge:
      "Dr. Ketan Patel's clinic handled complex chronic cases across India and abroad, but their outdated web presence lacked credibility and made appointment booking tedious. Patients struggled to find treatment documentation for specific chronic conditions, resulting in high bounce rates and lost consults.",
    whatWeDid: [
      "Engineered a lightning-fast 14-page custom Next.js web portal using a curated 3-colour clinical palette that radiates warmth and scientific rigor.",
      "Created dedicated condition hubs (auto-immune, skin, respiratory) with clear treatment protocols and documented patient outcomes.",
      "Integrated sub-second appointment scheduling syncing across Indian Standard Time and international time zones for overseas consultations.",
      "Optimized technical structured data and JSON-LD medical schema, catapulting core therapy pages into Google's top local search ranks.",
    ],
    whatChanged:
      "The clinic turned its website into its primary patient intake engine. Phone calls asking for pricing and directions dropped by 60% as patients booked directly online, while international consultation requests grew month over month.",
    clientQuote: {
      quote:
        "Our new website represents the high standard of medicine we practice. Patients arrive at their first consultation already educated and trusting.",
      author: "Dr. Ketan Patel",
      role: "Chief Physician & Founder",
      company: "Speciality Homeopathy",
    },
    colorTheme: {
      accent: "#0D9488",
      border: "#99F6E4",
      glow: "rgba(13, 148, 136, 0.12)",
      badgeBg: "#CCFBF1",
      badgeText: "#0F766E",
    },
  },
  {
    id: "wand-fragrance",
    slug: "wand-fragrance",
    client: "Wand Fragrance",
    industry: "D2C",
    industryLabel: "D2C & Luxury Goods",
    serviceCategory: "Website",
    serviceLabel: "Shopify Flagship & Ads",
    services: ["Custom Shopify Build", "Meta Ads at ₹1,000/day", "3-Hour Local Delivery", "RTO Reduction System", "High-Converting PDPs"],
    title: "Cutting Cost Per Order & Scaling D2C Profitability For Wand Fragrance",
    oneLineResult: "Bespoke Shopify store combined with targeted Meta ads scaling from ₹800 baseline CPO to sustainable high-ROAS e-commerce.",
    featured: false,
    highlightStat: {
      value: "3-Hour",
      label: "Ahmedabad Delivery",
    },
    resultsBand: [
      { value: "₹1,000/d", label: "Daily Ad Budget", context: "Precision Meta campaigns" },
      { value: "3-Hour", label: "Local Express", context: "Hyperlocal delivery perk" },
      { value: "48%", label: "RTO Drop", context: "Automated OTP verification" },
      { value: "4.2x", label: "Blended ROAS", context: "On flagship perfume drops" },
    ],
    snapshot: {
      client: "Wand Fragrance Luxury Scents",
      industry: "D2C Perfumery & Artisanal Fragrances",
      market: "Gujarat Hyperlocal + Pan-India Shipping",
      services: "Shopify Engineering, Conversion Rate UX, Meta Ads",
      timeline: "6 Weeks Build + 90-Day Growth",
      deliverables: "Shopify Liquid Store, Olfactory Visual PDPs, Ads",
    },
    challenge:
      "Perfumery is notoriously difficult to sell online because buyers cannot sample the fragrance physically. Wand Fragrance suffered from high starting acquisition costs (~₹800 CPO), shopping cart drop-offs, and painful Return-to-Origin (RTO) rates on cash-on-delivery orders across western India.",
    whatWeDid: [
      "Engineered a sensory-rich custom Shopify store with scent-notes visualizers, mood tags, and interactive perfume discovery quizzes.",
      "Implemented a game-changing 3-hour hyperlocal delivery banner for Ahmedabad buyers, converting impulse fragrance purchases on the same evening.",
      "Configured automated WhatsApp order verification and address autocompletion, slashing failed delivery and RTO rates by nearly half.",
      "Tested disciplined ₹1,000/day Meta Ad sets focusing on lifestyle video creatives and customer unboxing reactions rather than static bottle shots.",
    ],
    whatChanged:
      "Cost Per Order fell steadily as repeat purchases surged through automated re-order reminders. The 3-hour local delivery became a signature competitive advantage praised across social media.",
    clientQuote: {
      quote:
        "White Ink helped us turn luxury fragrance into an accessible digital impulse buy. Our local Ahmedabad deliveries alone doubled our weekend volume.",
      author: "Founder & Creative Lead",
      role: "Master Perfumer",
      company: "Wand Fragrance",
    },
    colorTheme: {
      accent: "#B88746",
      border: "#E8DED0",
      glow: "rgba(184, 135, 70, 0.15)",
      badgeBg: "#F5EFE6",
      badgeText: "#9E7234",
    },
  },
  {
    id: "happy-homeopathy",
    slug: "happy-homeopathy",
    client: "Happy Homeopathy (Dr. Ketan Shah)",
    industry: "Healthcare",
    industryLabel: "Doctor Personal Brand",
    serviceCategory: "Website",
    serviceLabel: "Digital Identity & Intake",
    services: ["YouTube Creator Funnel", "Green & White Visual Identity", "Online Booking Portal", "Patient Video Library"],
    title: "Turning A YouTube-Famous Doctor Into A Bookable Global Clinic",
    oneLineResult: "Transformed YouTube Silver Button medical influence into an automated, high-volume clinic booking portal operating internationally.",
    featured: false,
    highlightStat: {
      value: "Silver",
      label: "YouTube Creator Button",
    },
    resultsBand: [
      { value: "100k+", label: "YouTube Audience", context: "Channel subscribers converted" },
      { value: "24/7", label: "Automated Booking", context: "Zero manual phone calls" },
      { value: "15+", label: "Countries Served", context: "Telemedicine consultations" },
      { value: "Sub-1s", label: "Mobile Speed", context: "Optimized for global traffic" },
    ],
    snapshot: {
      client: "Happy Homeopathy (Dr. Ketan Shah)",
      industry: "Telehealth & Holistic Healthcare",
      market: "India, Middle East, UK & US Patients",
      services: "Visual Brand Identity, High-Speed Web Portal, Funnels",
      timeline: "6 Weeks Build & Launch",
      deliverables: "Brand Guidelines, Next.js Patient Site, Calendar API",
    },
    challenge:
      "Dr. Ketan Shah had built a massive following on YouTube, earning a YouTube Silver Creator Award for patient education. However, thousands of daily video comments and WhatsApp inquiries were falling through the cracks because the clinic had no structured digital appointment gateway.",
    whatWeDid: [
      "Designed a soothing green-and-white clinical brand system that preserved Dr. Shah's warm YouTube persona while projecting elite clinical credibility.",
      "Constructed a high-throughput consultation portal specifically tuned to capture mobile traffic coming directly from YouTube video descriptions.",
      "Built multi-currency tele-consultation scheduling supporting Indian UPI alongside Stripe and PayPal for overseas diaspora patients.",
      "Automated appointment reminders and pre-consultation case intake questionnaires via WhatsApp, reducing clinic administrative workload by 80%.",
    ],
    whatChanged:
      "The clinic converted casual YouTube viewers into confirmed, paying consultations within minutes of watching a video. Overbooking shifted into organized, structured daily slots with zero missed inquiries.",
    clientQuote: {
      quote:
        "I had hundreds of thousands of followers but no way to care for them properly. White Ink bridged that gap and turned our community into a world-class clinic.",
      author: "Dr. Ketan Shah",
      role: "Founder & Chief Consultant",
      company: "Happy Homeopathy",
    },
    colorTheme: {
      accent: "#16A34A",
      border: "#BBF7D0",
      glow: "rgba(22, 163, 74, 0.12)",
      badgeBg: "#DCFCE7",
      badgeText: "#15803D",
    },
  },
  {
    id: "upfold",
    slug: "upfold",
    client: "UPFOLD (Coravix Global LLP)",
    industry: "D2C",
    industryLabel: "Food & FMCG",
    serviceCategory: "Website",
    serviceLabel: "Custom Shopify & Brand System",
    services: ["24-SKU Shopify Architecture", "Packaging Visuals", "Brand Identity System", "Mobile-First Micro-Interactions"],
    title: "Launching UPFOLD's 24-SKU Ready-To-Eat Range On Shopify",
    oneLineResult: "Engineered bespoke Shopify storefront and appetizing visual identity for a 24-SKU gourmet ready-to-eat culinary collection.",
    featured: false,
    highlightStat: {
      value: "24-SKU",
      label: "Product Catalog Live",
    },
    resultsBand: [
      { value: "24", label: "Gourmet SKUs", context: "Catalog engineered & indexed" },
      { value: "4 Weeks", label: "Sprint Timeline", context: "Concept to commercial live" },
      { value: "0.9s", label: "Mobile Checkout", context: "Friction-free payment flow" },
      { value: "100%", label: "Custom Liquid", context: "Zero bloated Shopify plugins" },
    ],
    snapshot: {
      client: "UPFOLD Gourmet Foods (Coravix Global LLP)",
      industry: "FMCG, Gourmet Ready-to-Eat Food",
      market: "National Pan-India D2C Distribution",
      services: "Brand Identity, Packaging Guidelines, Shopify Development",
      timeline: "4 Weeks Sprint",
      deliverables: "Shopify Store, Product Storytelling, Checkout Engine",
    },
    challenge:
      "Coravix Global needed to introduce UPFOLD—a premium brand of preservative-free ready-to-eat meals and snacks—into an intensely competitive Indian grocery landscape. The store needed to display 24 distinctive culinary preparations with mouth-watering appetite appeal, nutritional clarity, and instantaneous mobile checkout.",
    whatWeDid: [
      "Crafted an earthy, modern brand identity emphasizing wholesome kitchen ingredients and transparent nutritional sourcing.",
      "Engineered a lightweight custom Shopify Liquid theme that displays high-resolution ingredient photography without sacrificing load times.",
      "Designed an intuitive bundle-and-save cart experience that incentivized customers to add multiple meal varieties to cross minimum delivery thresholds.",
      "Built one-click payment integrations with Razorpay, UPI QR codes, and automated dispatch tracking notifications.",
    ],
    whatChanged:
      "UPFOLD launched smoothly on schedule with orders rolling in from day one. Average order value outperformed initial conservative projections thanks to the seamless multi-pack bundling interface.",
    clientQuote: {
      quote:
        "White Ink built our entire 24-SKU e-commerce presence in four weeks flat. The site looks mouth-watering and runs flawlessly on mobile.",
      author: "Shrenil Shah",
      role: "Managing Partner",
      company: "Coravix Global LLP",
    },
    colorTheme: {
      accent: "#D97706",
      border: "#FDE68A",
      glow: "rgba(217, 119, 6, 0.12)",
      badgeBg: "#FEF3C7",
      badgeText: "#B45309",
    },
  },
  {
    id: "genzatri",
    slug: "genzatri",
    client: "GENZATRI 2026",
    industry: "Events",
    industryLabel: "Events & Cultural Shows",
    serviceCategory: "Website",
    serviceLabel: "High-Load Ticketing Platform",
    services: ["Ticketing Website Engine", "5,000+ Concurrency Scaling", "QR Entry Passes", "Social Buzz & Ads"],
    title: "Selling Out GENZATRI 2026: A Garba Ticketing Platform For 5,000+",
    oneLineResult: "High-load ticketing platform and multi-channel hype machine delivering 100% server uptime during massive flash sale spikes.",
    featured: false,
    highlightStat: {
      value: "5,000+",
      label: "Concurrent Buyers Handled",
    },
    resultsBand: [
      { value: "5,000+", label: "Passes Sold", context: "100% digital issuance" },
      { value: "0 sec", label: "Server Downtime", context: "Zero crash during flash sales" },
      { value: "100%", label: "QR Validation", context: "Sub-second gate scanning" },
      { value: "4 Days", label: "Sold Out Event", context: "Festival capacity reached" },
    ],
    snapshot: {
      client: "GENZATRI Cultural Festival Committee",
      industry: "Live Music, Festivals & Large-Scale Events",
      market: "Ahmedabad, Gujarat",
      services: "High-Concurrency Web Infrastructure, Ticketing Engine",
      timeline: "3 Weeks Build + Live Event Management",
      deliverables: "Custom Ticketing Portal, Razorpay Gateways, Gate Scanners",
    },
    challenge:
      "Ahmedabad's legendary Navratri season demands perfection. GENZATRI required a dedicated digital ticketing platform capable of handling thousands of simultaneous young buyers rushing to secure seasonal passes within minutes, without the crashes or transaction failures common to third-party event aggregators.",
    whatWeDid: [
      "Engineered a dedicated high-concurrency serverless ticketing platform on edge infrastructure with zero single points of failure.",
      "Integrated instant UPI and credit card checkout flows completing ticket issuance and encrypted dynamic QR code generation in under 4 seconds.",
      "Created an animated festival website with vibrant motion typography, lineup teasers, and venue navigation maps.",
      "Supplied gate staff with high-speed web scanners that processed entry passes in under half a second, preventing entry queue choke points.",
    ],
    whatChanged:
      "Passes sold out in record time with zero server degradation or duplicate payments. Event organizers saved substantial commission fees compared to commercial booking portals.",
    clientQuote: {
      quote:
        "Every ticketing platform crashes on day one of Navratri. White Ink's build didn't flinch even when five thousand people hit the server at once.",
      author: "Festival Director",
      role: "Organizing Committee",
      company: "GENZATRI 2026",
    },
    colorTheme: {
      accent: "#9333EA",
      border: "#E9D5FF",
      glow: "rgba(147, 51, 234, 0.12)",
      badgeBg: "#F3E8FF",
      badgeText: "#7E22CE",
    },
  },
  {
    id: "sng-eco-india",
    slug: "sng-eco-india",
    client: "SNG Eco India / Green Plastwood",
    industry: "Industrial",
    industryLabel: "Industrial & Manufacturing",
    serviceCategory: "Website",
    serviceLabel: "B2B Export Web Redesign",
    services: ["B2B Website Redesign", "GA4 & Lead Tracking Setup", "Technical Product Catalog", "Export Specification Sheets"],
    title: "Engineering A High-Trust B2B Website Redesign For SNG Eco India",
    oneLineResult: "Transformed technical eco-materials manufacturing specifications into a high-intent B2B commercial pipeline.",
    featured: false,
    highlightStat: {
      value: "B2B",
      label: "Export Lead Funnel",
    },
    resultsBand: [
      { value: "45+", label: "Product Specs", context: "Detailed technical data sheets" },
      { value: "2.4x", label: "RFQ Inquiries", context: "Direct request for quotes" },
      { value: "100%", label: "GA4 Tracking", context: "Attributed lead sources" },
      { value: "Global", label: "Trade Inquiries", context: "Middle East & Asian exports" },
    ],
    snapshot: {
      client: "SNG Eco India / Green Plastwood Group",
      industry: "Sustainable Building Materials & WPC Sheets",
      market: "Pan-India B2B Builders + Global Importers",
      services: "Complete Website Redesign, B2B Lead Funnels, GA4 Tracking",
      timeline: "5 Weeks Build",
      deliverables: "Corporate B2B Portal, Sample Request Flow, Spec Center",
    },
    challenge:
      "As a major manufacturer of sustainable plastic-wood composites, SNG Eco India struggled with an outdated, text-heavy website that failed to demonstrate product durability, certification standards, or the scale of their manufacturing facility to international architects and distributors.",
    whatWeDid: [
      "Redesigned the industrial web presence with clean architectural minimalism, high-resolution cross-section diagrams, and rigorous lab test results.",
      "Engineered an interactive Sample Request and RFQ (Request for Quote) funnel capturing project square footage and specific technical requirements.",
      "Configured GA4 end-to-end event tracking and conversion routing directly to the sales director's dashboard.",
      "Optimized technical manufacturing terminology to capture high-volume commercial supplier searches across India and overseas.",
    ],
    whatChanged:
      "Commercial developers and export agents began submitting bulk requirement sheets directly through the site, shifting sales calls from cold introductions to closing confirmed commercial quotes.",
    clientQuote: {
      quote:
        "Industrial websites are usually boring and ineffective. White Ink built a platform that gives large institutional builders instant confidence in our materials.",
      author: "Managing Director",
      role: "Commercial Operations",
      company: "SNG Eco India",
    },
    colorTheme: {
      accent: "#059669",
      border: "#A7F3D0",
      glow: "rgba(5, 150, 105, 0.12)",
      badgeBg: "#D1FAE5",
      badgeText: "#047857",
    },
  },
  {
    id: "the-alpha-cpas",
    slug: "the-alpha-cpas",
    client: "The Alpha CPA's",
    industry: "Professional",
    industryLabel: "Professional Services",
    serviceCategory: "Branding",
    serviceLabel: "International Brand Identity",
    services: ["Corporate Brand Identity", "US-Facing Typography & Colors", "Digital Corporate Web", "Stationery & Investor Pitch"],
    title: "Building Transatlantic Authority & Identity For The Alpha CPA's",
    oneLineResult: "Engineered elite brand identity and digital presence for a premier US-facing accounting practice, establishing immediate transatlantic trust.",
    featured: false,
    highlightStat: {
      value: "US/UK",
      label: "Cross-Border Market",
    },
    resultsBand: [
      { value: "100%", label: "Brand System", context: "Complete guidelines & tokens" },
      { value: "US/UK", label: "Client Base", context: "High-net-worth compliance" },
      { value: "4-Week", label: "Turnaround", context: "Strategy to executive launch" },
      { value: "Tier 1", label: "Design Authority", context: "Corporate Swiss precision" },
    ],
    snapshot: {
      client: "The Alpha CPA's & Advisors",
      industry: "Cross-Border Corporate Taxation & Advisory",
      market: "United States, United Kingdom & India",
      services: "Brand Identity, Executive Typography, Corporate Web Presence",
      timeline: "4 Weeks Delivery",
      deliverables: "Logo Mark, Identity System, Pitch Deck, Stationery",
    },
    challenge:
      "When catering to high-net-worth entrepreneurs and transatlantic businesses operating across the US, UK, and India, visual amateurism is fatal. The Alpha CPA's required a sophisticated corporate identity that exuded Wall Street precision, institutional stability, and modern financial intelligence.",
    whatWeDid: [
      "Crafted an authoritative serif and geometric mark symbolizing capital preservation, fiscal acumen, and unwavering regulatory compliance.",
      "Selected an elite corporate palette pairing deep obsidian navy, crisp stark white, and restrained metallic gold accents.",
      "Designed full brand execution collateral including client onboarding packages, confidential tax assessment templates, and investor decks.",
      "Created a modern corporate web presence built on speed, readability, and immediate trust validation for American clients.",
    ],
    whatChanged:
      "The firm smoothly closed multiple US and transatlantic corporate accounts without ever facing pricing skepticism or doubts about their international stature.",
    clientQuote: {
      quote:
        "In international finance, your brand is your integrity. White Ink gave us the visual authority to pitch to seven-figure US enterprises with complete confidence.",
      author: "Managing Partner",
      role: "Cross-Border Practice",
      company: "The Alpha CPA's",
    },
    colorTheme: {
      accent: "#1E3A8A",
      border: "#BFDBFE",
      glow: "rgba(30, 58, 138, 0.12)",
      badgeBg: "#DBEAFE",
      badgeText: "#1D4ED8",
    },
  },
  {
    id: "dr-harshil-shah",
    slug: "dr-harshil-shah",
    client: "Dr. Harshil Shah",
    industry: "Healthcare",
    industryLabel: "Surgeon & Specialist",
    serviceCategory: "Social",
    serviceLabel: "Reels & Personal Web",
    services: ["Instagram Reels Strategy", "drharshilshah.com Build", "Patient Education Guides", "Surgical Consultation Funnel"],
    title: "Building Dr. Harshil Shah's Patient Audience With Educational Reels",
    oneLineResult: "Organic medical storytelling and personal website turning clinical surgical insights into high-trust patient consult requests.",
    featured: false,
    highlightStat: {
      value: "Organic",
      label: "Patient Engagement",
    },
    resultsBand: [
      { value: "100%", label: "Doctor-Signed", context: "Zero medical misinformation" },
      { value: "3x", label: "Follower Growth", context: "Qualified regional audience" },
      { value: "Direct", label: "Consult Inquiries", context: "Via drharshilshah.com" },
      { value: "4K", label: "Reels Clarity", context: "Clinical procedure explanation" },
    ],
    snapshot: {
      client: "Dr. Harshil Shah (Consultant Surgeon)",
      industry: "Surgical Speciality & Patient Education",
      market: "Ahmedabad, Gujarat",
      services: "Content Strategy, Video Production, Personal Website",
      timeline: "Ongoing Retainer",
      deliverables: "drharshilshah.com, Weekly Reels Scripts, Patient Guides",
    },
    challenge:
      "Surgeons often struggle to connect with everyday patients online without crossing into medical sensationalism or violating strict medical council ethics. Dr. Harshil Shah wanted an ethical, educational social presence that answered real patient concerns about complex surgical procedures calmly.",
    whatWeDid: [
      "Designed an elegant personal website (drharshilshah.com) presenting his surgical qualifications, hospital affiliations, and published research.",
      "Scripted and produced clean, respectful Instagram Reels deconstructing recovery timelines, symptoms to watch for, and common surgical myths.",
      "Integrated direct appointment inquiry channels routing through vetted medical secretaries.",
      "Maintained 100% compliance with Medical Council of India guidelines, ensuring dignified clinical positioning.",
    ],
    whatChanged:
      "Patients increasingly arrived at consultations stating they had watched his explanatory videos, reducing consultation anxiety and dramatically improving surgical intake trust.",
    clientQuote: {
      quote:
        "White Ink understood the ethical balance required for a doctor's personal brand. They made medical education engaging without sacrificing dignity.",
      author: "Dr. Harshil Shah",
      role: "Consultant Surgeon",
      company: "drharshilshah.com",
    },
    colorTheme: {
      accent: "#0891B2",
      border: "#A5F3FC",
      glow: "rgba(8, 145, 178, 0.12)",
      badgeBg: "#CFFAFE",
      badgeText: "#0E7490",
    },
  },
  {
    id: "hevert",
    slug: "hevert",
    client: "Hevert Germany",
    industry: "Healthcare",
    industryLabel: "Global German Pharma",
    serviceCategory: "Social",
    serviceLabel: "Social & Exhibition Architecture",
    services: ["Medical Exhibition Stall Architecture", "Social Media Campaigns", "Distributor Engagement", "Global Brand Compliance"],
    title: "Orchestrating Hevert Germany's India Medical Expo & Social Presence",
    oneLineResult: "Bespoke medical exhibition architecture and digital campaign driving elite distributor relationships across Indian healthcare markets.",
    featured: false,
    highlightStat: {
      value: "Expo",
      label: "Healthcare Architecture",
    },
    resultsBand: [
      { value: "100%", label: "German Guidelines", context: "Strict corporate adherence" },
      { value: "500+", label: "Doctor Touchpoints", context: "During flagship trade expo" },
      { value: "3-D", label: "Stall Spatial Design", context: "Bespoke booth engineering" },
      { value: "Global", label: "Pharma Synergy", context: "Germany to India alignment" },
    ],
    snapshot: {
      client: "Hevert Arzneimittel GmbH & Co. KG",
      industry: "Naturopathic Medicine & European Pharma",
      market: "Germany & Indian Healthcare Distribution",
      services: "Exhibition Stall Design, Event Marketing, Social Campaigns",
      timeline: "Annual Major Expos & Social Retainer",
      deliverables: "Spatial Booth Design, Print Collateral, Social Calendars",
    },
    challenge:
      "Hevert is one of Germany's most respected naturopathic medicine houses. Expanding into Indian medical conventions required high-end spatial exhibition stalls that communicated European pharmaceutical rigor while engaging Indian doctors and institutional distributors.",
    whatWeDid: [
      "Engineered an open, illuminated 3-dimensional exhibition stall layout that welcomed healthcare professionals with clean clinical comfort.",
      "Produced localized product literature and educational brochures strictly adhering to German corporate visual identity guidelines.",
      "Coordinated pre-event and post-event social media campaigns on LinkedIn and Instagram to maximize physician footfall.",
      "Captured high-definition photo and video documentation of doctor interactions for European corporate reporting.",
    ],
    whatChanged:
      "Hevert's presence became a centerpiece of major medical conventions, capturing substantial institutional distribution agreements and elevating German naturopathy credentials in India.",
    clientQuote: {
      quote:
        "The spatial design and campaign precision White Ink delivered matched the exacting standards we demand in Germany.",
      author: "South Asia Representative",
      role: "International Markets",
      company: "Hevert Germany",
    },
    colorTheme: {
      accent: "#B88746",
      border: "#E8DED0",
      glow: "rgba(184, 135, 70, 0.12)",
      badgeBg: "#F5EFE6",
      badgeText: "#9E7234",
    },
  },
  {
    id: "jainam-tours",
    slug: "jainam-tours",
    client: "Jainam Tours",
    industry: "Travel",
    industryLabel: "Travel & Services",
    serviceCategory: "AI",
    serviceLabel: "SEO & WhatsApp Automation",
    services: ["Automated WhatsApp Agent", "Organic Search Engine Optimization", "Package Inquiry Routing", "Review Acceleration Engine"],
    title: "Scaling Jainam Tours With Automated WhatsApp Lead Routing & 4.8★ SEO",
    oneLineResult: "AI WhatsApp lead routing engine and search overhaul maintaining 4.8★ rating across 362 client reviews and answering leads 24/7.",
    featured: false,
    highlightStat: {
      value: "4.8 ★",
      label: "From 362 Reviews",
    },
    resultsBand: [
      { value: "4.8 ★", label: "Google Rating", context: "Across 362 genuine reviews" },
      { value: "<30s", label: "Lead Response", context: "Instant WhatsApp triage" },
      { value: "24/7", label: "AI Availability", context: "Never misses late inquiries" },
      { value: "Top 5", label: "Regional SEO", context: "High-volume tour terms" },
    ],
    snapshot: {
      client: "Jainam Tours & Holidays",
      industry: "Luxury Tour Operations & Pilgrimage Travel",
      market: "Gujarat, India & International Holidaymakers",
      services: "AI Automation, WhatsApp Bot, Search Engine Optimization",
      timeline: "4 Weeks Deployment + Retainer",
      deliverables: "Custom WhatsApp AI Bot, CRM Webhooks, SEO Strategy",
    },
    challenge:
      "Travelers research holiday packages late in the evening and expect instant answers regarding itineraries, pricing, and hotel standards. Jainam Tours was losing high-value travel leads to competitors simply because their sales staff was asleep between 10 PM and 9 AM.",
    whatWeDid: [
      "Engineered an intelligent WhatsApp AI bot powered by n8n that instantly responds to incoming queries, provides sample itineraries, and captures travel dates.",
      "Configured automated lead classification tagging travelers by destination (domestic vs international) and pushing them into the team's CRM.",
      "Optimized Google Business Profile and local search architecture to consistently encourage satisfied holidaymakers to leave detailed reviews.",
      "Designed clean PDF itinerary templates automatically dispatched via WhatsApp when a user requests a quote.",
    ],
    whatChanged:
      "Lead drop-off vanished. Travelers received customized itineraries within seconds of reaching out at midnight, enabling the sales desk to close bookings the following morning.",
    clientQuote: {
      quote:
        "Our WhatsApp agent answers customers while we sleep. Travelers get their itinerary immediately and are ready to pay before our office opens.",
      author: "Managing Director",
      role: "Operations & Sales",
      company: "Jainam Tours",
    },
    colorTheme: {
      accent: "#2563EB",
      border: "#BFDBFE",
      glow: "rgba(37, 99, 235, 0.12)",
      badgeBg: "#DBEAFE",
      badgeText: "#1D4ED8",
    },
  },
];

export const TRUSTED_CLIENTS_LIST = [
  "Dr. Reckeweg India",
  "Zydus Hospitals",
  "Hevert Germany",
  "WellScience UK",
  "Speciality Homeopathy",
  "Happy Homeopathy",
  "Dr. Harshil Shah",
  "Ivotic Healthcare",
  "Dishant Ayurvedic",
  "Dravyaveda",
  "Thekadi Homeopathy",
  "Happy Health Zone",
  "Medisync",
  "Setu Child Development",
  "Wand Fragrance",
  "Pushpam Jewellers",
  "Devikrupa Kidswear",
  "Goldden Mason",
  "Loop Shoop Knots",
  "Cover Up India",
  "Krisil",
  "UPFOLD Gourmet",
  "Coravix Global",
  "Adinath Ghee",
  "MDP Coffee House",
  "SNG Eco India",
  "Green Plastwood",
  "Kothari Impex",
  "Krishna Electroplating",
  "Igloo",
  "GENZATRI 2026",
  "Astha Events",
  "Shree Sharda Events",
  "Care for Children Garba",
  "HCCT Healthcare",
  "Jainam Tours",
  "The Alpha CPA's",
  "G Plus",
  "Mystery Mentor",
  "Vioniq",
  "Samyak Pair",
  "Bhakti",
];

