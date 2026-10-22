"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type MotionValue } from "framer-motion";
import {
  Target,
  Heart,
  Play,
  Clapperboard,
  Code2,
  Layers,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Megaphone,
  Video,
  Globe2,
  Search,
  Trophy,
  PenTool,
  Filter,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  graphic:
    | "bullseye"
    | "cards"
    | "phoneFilm"
    | "clapper"
    | "codeCube"
    | "layersGlass"
    | "ecomBag"
    | "orbitSphere"
    | "rocket"
    | "megaphone"
    | "lens"
    | "globeNetwork"
    | "auditSearch"
    | "crownPodium"
    | "penFlow"
    | "funnelMag";
}

interface ServiceTab {
  id: string;
  label: string;
  number: string;
  cards: ServiceCard[];
}

const serviceTabs: ServiceTab[] = [
  {
    id: "websites",
    label: "Websites",
    number: "01/05",
    cards: [
      {
        id: "nextjs-custom",
        title: "Next.js & Custom Web",
        icon: Code2,
        graphic: "codeCube",
      },
      {
        id: "ui-ux",
        title: "UI/UX Design Systems",
        icon: Layers,
        graphic: "layersGlass",
      },
      {
        id: "shopify-d2c",
        title: "Shopify & D2C Stores",
        icon: ShoppingBag,
        graphic: "ecomBag",
      },
      {
        id: "conversion-engine",
        title: "Conversion Engine",
        icon: Filter,
        graphic: "funnelMag",
      },
    ],
  },
  {
    id: "branding",
    label: "Branding",
    number: "02/05",
    cards: [
      {
        id: "brand-strategy",
        title: "Brand Strategy & Voice",
        icon: Target,
        graphic: "bullseye",
      },
      {
        id: "logo-systems",
        title: "Logo & Visual Systems",
        icon: PenTool,
        graphic: "penFlow",
      },
      {
        id: "packaging-design",
        title: "Packaging & Print Systems",
        icon: Trophy,
        graphic: "crownPodium",
      },
      {
        id: "brand-guidelines",
        title: "Brand Books & Guidelines",
        icon: Heart,
        graphic: "cards",
      },
    ],
  },
  {
    id: "growth",
    label: "Growth",
    number: "03/05",
    cards: [
      {
        id: "performance-ads",
        title: "Meta & Google PMax Ads",
        icon: TrendingUp,
        graphic: "rocket",
      },
      {
        id: "chatgpt-ads",
        title: "ChatGPT Ads & AI Search",
        icon: Sparkles,
        graphic: "orbitSphere",
      },
      {
        id: "seo-audits",
        title: "Technical SEO & Schema",
        icon: Search,
        graphic: "auditSearch",
      },
      {
        id: "healthcare-compliance",
        title: "Healthcare Ad Policy",
        icon: Target,
        graphic: "bullseye",
      },
    ],
  },
  {
    id: "content",
    label: "Content",
    number: "04/05",
    cards: [
      {
        id: "video-reels",
        title: "High-Impact Video Reels",
        icon: Video,
        graphic: "lens",
      },
      {
        id: "shoots-production",
        title: "Studio & Product Shoots",
        icon: Play,
        graphic: "phoneFilm",
      },
      {
        id: "decks-stalls",
        title: "Brochures & Expo Stalls",
        icon: Clapperboard,
        graphic: "clapper",
      },
      {
        id: "social-calendars",
        title: "Social Media Calendars",
        icon: Megaphone,
        graphic: "megaphone",
      },
    ],
  },
  {
    id: "automation",
    label: "wink'AI",
    number: "05/05",
    cards: [
      {
        id: "whatsapp-ai",
        title: "24/7 WhatsApp AI Agents",
        icon: Globe2,
        graphic: "globeNetwork",
      },
      {
        id: "autonomous-intake",
        title: "Autonomous Lead Intake",
        icon: Filter,
        graphic: "funnelMag",
      },
      {
        id: "claude-n8n",
        title: "Claude + n8n Automations",
        icon: Code2,
        graphic: "codeCube",
      },
      {
        id: "ai-search",
        title: "AI Search Optimization",
        icon: Search,
        graphic: "auditSearch",
      },
    ],
  },
];

// 3D Illuminated Graphic Renderer (Matching Image's #9E7234 & #C59A58 Palette)
function Card3DVisual({ graphic }: { graphic: ServiceCard["graphic"] }) {
  switch (graphic) {
    case "bullseye":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <circle cx="100" cy="100" r="70" stroke="#9E7234" strokeWidth="3.5" opacity="0.45" />
          <circle cx="100" cy="100" r="50" stroke="#C59A58" strokeWidth="5" opacity="0.8" />
          <circle cx="100" cy="100" r="30" stroke="#B88746" strokeWidth="4" opacity="0.9" />
          <circle cx="100" cy="100" r="14" fill="#C59A58" />
          <path d="M 145 55 L 98 102" stroke="#9E7234" strokeWidth="4" strokeLinecap="round" />
          <polygon points="145,55 160,40 155,65" fill="#C59A58" />
          <polygon points="145,55 135,35 160,40" fill="#9E7234" />
          <circle cx="100" cy="100" r="85" stroke="#C59A58" strokeWidth="1" strokeDasharray="3 6" opacity="0.5" />
          <circle cx="160" cy="140" r="4" fill="#C59A58" opacity="0.85" />
        </svg>
      );

    case "cards":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <g transform="rotate(-22 100 130)">
            <rect x="75" y="45" width="50" height="75" rx="6" fill="#FFFFFF" stroke="#9E7234" strokeWidth="2.5" />
            <circle cx="100" cy="82" r="8" fill="#C59A58" opacity="0.8" />
          </g>
          <g transform="rotate(-8 100 130)">
            <rect x="75" y="40" width="50" height="75" rx="6" fill="#FAF8F5" stroke="#C59A58" strokeWidth="2.5" />
            <polygon points="100,72 108,88 92,88" fill="#B88746" opacity="0.9" />
          </g>
          <g transform="rotate(8 100 130)">
            <rect x="75" y="40" width="50" height="75" rx="6" fill="#FFFFFF" stroke="#B88746" strokeWidth="2" />
            <path d="M 100 75 C 95 68 85 75 100 90 C 115 75 105 68 100 75 Z" fill="#C59A58" />
          </g>
          <g transform="rotate(22 100 130)">
            <rect x="75" y="45" width="50" height="75" rx="6" fill="#FAF8F5" stroke="#9E7234" strokeWidth="2.5" />
            <circle cx="100" cy="82" r="6" fill="#C59A58" />
          </g>
        </svg>
      );

    case "phoneFilm":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <rect x="75" y="40" width="50" height="90" rx="8" fill="#FFFFFF" stroke="#C59A58" strokeWidth="3" />
          <rect x="80" y="50" width="40" height="70" rx="4" fill="#FAF8F5" />
          <polygon points="95,78 110,85 95,92" fill="#C59A58" />
          <path
            d="M 60 70 C 60 30 140 25 145 65 C 148 95 125 115 135 140"
            stroke="#9E7234"
            strokeWidth="7"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M 60 70 C 60 30 140 25 145 65 C 148 95 125 115 135 140"
            stroke="#C59A58"
            strokeWidth="2.5"
            strokeDasharray="4 6"
          />
        </svg>
      );

    case "clapper":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <rect x="55" y="80" width="90" height="65" rx="6" fill="#FFFFFF" stroke="#9E7234" strokeWidth="3" />
          <line x1="55" y1="105" x2="145" y2="105" stroke="#C59A58" strokeWidth="2" opacity="0.75" />
          <g transform="rotate(-18 55 80)">
            <rect x="55" y="65" width="90" height="18" rx="3" fill="#FAF8F5" stroke="#C59A58" strokeWidth="2.5" />
            <polygon points="70,65 80,65 72,83 62,83" fill="#C59A58" />
            <polygon points="90,65 100,65 92,83 82,83" fill="#9E7234" />
            <polygon points="110,65 120,65 112,83 102,83" fill="#B88746" />
            <polygon points="130,65 140,65 132,83 122,83" fill="#C59A58" />
          </g>
          <circle cx="155" cy="55" r="3.5" fill="#C59A58" />
          <circle cx="165" cy="70" r="2.5" fill="#9E7234" />
          <circle cx="145" cy="40" r="3" fill="#B88746" />
        </svg>
      );

    case "codeCube":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <polygon points="100,45 150,75 100,105 50,75" fill="#FFFFFF" stroke="#C59A58" strokeWidth="2.5" />
          <polygon points="50,75 100,105 100,155 50,125" fill="#FAF8F5" stroke="#9E7234" strokeWidth="2.5" />
          <polygon points="150,75 100,105 100,155 150,125" fill="#F5EFE6" stroke="#B88746" strokeWidth="2.5" />
          <text x="75" y="85" fill="#9E7234" fontSize="24" fontFamily="monospace" fontWeight="bold">
            &lt;/&gt;
          </text>
        </svg>
      );

    case "layersGlass":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <polygon points="100,85 160,115 100,145 40,115" fill="#FFFFFF" stroke="#9E7234" strokeWidth="2" opacity="0.65" />
          <polygon points="100,65 160,95 100,125 40,95" fill="#FAF8F5" stroke="#C59A58" strokeWidth="2.5" opacity="0.85" />
          <polygon points="100,45 160,75 100,105 40,75" fill="#F5EFE6" stroke="#B88746" strokeWidth="2.5" />
          <circle cx="100" cy="75" r="8" fill="#C59A58" />
        </svg>
      );

    case "ecomBag":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <path d="M 80 75 C 80 50 120 50 120 75" stroke="#C59A58" strokeWidth="4" fill="none" />
          <polygon points="65,75 135,75 145,150 55,150" fill="#FFFFFF" stroke="#9E7234" strokeWidth="3" rx="4" />
          <circle cx="100" cy="110" r="14" fill="#C59A58" />
          <text x="94" y="116" fill="#FFFFFF" fontSize="16" fontWeight="bold">
            %
          </text>
        </svg>
      );

    case "orbitSphere":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <ellipse cx="100" cy="100" rx="75" ry="30" stroke="#9E7234" strokeWidth="2.5" transform="rotate(-25 100 100)" opacity="0.8" />
          <ellipse cx="100" cy="100" rx="75" ry="30" stroke="#C59A58" strokeWidth="2" transform="rotate(35 100 100)" opacity="0.8" />
          <circle cx="100" cy="100" r="32" fill="#FAF8F5" stroke="#B88746" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="16" fill="#C59A58" />
          <circle cx="150" cy="70" r="5" fill="#9E7234" />
        </svg>
      );

    case "rocket":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <rect x="50" y="115" width="14" height="35" rx="3" fill="#FFFFFF" stroke="#9E7234" strokeWidth="1.5" />
          <rect x="72" y="95" width="14" height="55" rx="3" fill="#FAF8F5" stroke="#9E7234" strokeWidth="1.5" />
          <rect x="94" y="80" width="14" height="70" rx="3" fill="#F5EFE6" stroke="#C59A58" strokeWidth="2" />
          <g transform="rotate(45 125 75)">
            <path d="M 125 45 C 135 60 135 85 135 85 L 115 85 C 115 85 115 60 125 45 Z" fill="#C59A58" stroke="#9E7234" strokeWidth="2" />
            <circle cx="125" cy="65" r="5" fill="#FAF8F5" />
            <polygon points="115,85 110,95 118,92" fill="#9E7234" />
            <polygon points="135,85 140,95 132,92" fill="#9E7234" />
          </g>
        </svg>
      );

    case "megaphone":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <polygon points="80,80 135,55 135,125 80,105" fill="#FFFFFF" stroke="#C59A58" strokeWidth="3" />
          <rect x="65" y="80" width="16" height="25" rx="2" fill="#FAF8F5" stroke="#9E7234" strokeWidth="2" />
          <path d="M 75 105 L 75 135 L 85 135 L 85 105" fill="#C59A58" />
          <path d="M 145 70 C 155 80 155 100 145 110" stroke="#C59A58" strokeWidth="3" strokeLinecap="round" />
          <path d="M 155 60 C 170 75 170 105 155 120" stroke="#9E7234" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "lens":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <circle cx="100" cy="100" r="58" fill="#FFFFFF" stroke="#C59A58" strokeWidth="5" />
          <circle cx="100" cy="100" r="42" fill="#FAF8F5" stroke="#9E7234" strokeWidth="3" />
          <circle cx="100" cy="100" r="26" fill="#F5EFE6" stroke="#B88746" strokeWidth="2" />
          <line x1="78" y1="88" x2="108" y2="76" stroke="#C59A58" strokeWidth="2" />
          <line x1="122" y1="88" x2="114" y2="118" stroke="#C59A58" strokeWidth="2" />
          <line x1="100" y1="126" x2="78" y2="104" stroke="#C59A58" strokeWidth="2" />
          <circle cx="92" cy="92" r="6" fill="#C59A58" opacity="0.9" />
        </svg>
      );

    case "globeNetwork":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <circle cx="100" cy="100" r="50" stroke="#9E7234" strokeWidth="3" opacity="0.75" />
          <ellipse cx="100" cy="100" rx="24" ry="50" stroke="#C59A58" strokeWidth="2" />
          <line x1="50" y1="100" x2="150" y2="100" stroke="#B88746" strokeWidth="2" opacity="0.85" />
          <circle cx="85" cy="75" r="5" fill="#B88746" />
          <circle cx="125" cy="85" r="5" fill="#C59A58" />
          <circle cx="95" cy="130" r="5" fill="#9E7234" />
        </svg>
      );

    case "auditSearch":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <circle cx="90" cy="90" r="40" fill="#FFFFFF" stroke="#C59A58" strokeWidth="5" />
          <line x1="120" y1="120" x2="155" y2="155" stroke="#9E7234" strokeWidth="8" strokeLinecap="round" />
          <path d="M 75 90 L 85 100 L 105 80" stroke="#B88746" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case "crownPodium":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <rect x="65" y="105" width="70" height="40" rx="4" fill="#FFFFFF" stroke="#9E7234" strokeWidth="2.5" />
          <text x="94" y="132" fill="#9E7234" fontSize="20" fontWeight="bold">
            #1
          </text>
          <polygon points="75,95 82,70 100,85 118,70 125,95" fill="#C59A58" stroke="#9E7234" strokeWidth="2" />
          <circle cx="82" cy="68" r="3" fill="#9E7234" />
          <circle cx="100" cy="82" r="3" fill="#C59A58" />
          <circle cx="118" cy="68" r="3" fill="#9E7234" />
        </svg>
      );

    case "penFlow":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <g transform="rotate(-35 100 95)">
            <polygon points="100,50 115,85 85,85" fill="#FAF8F5" stroke="#C59A58" strokeWidth="2.5" />
            <polygon points="85,85 115,85 115,130 85,130" fill="#FFFFFF" stroke="#9E7234" strokeWidth="2.5" />
            <line x1="100" y1="50" x2="100" y2="78" stroke="#C59A58" strokeWidth="2" />
            <circle cx="100" cy="78" r="3" fill="#C59A58" />
          </g>
          <path d="M 60 140 C 90 120 120 150 150 135" stroke="#9E7234" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );

    case "funnelMag":
      return (
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full drop-shadow-sm">
          <polygon points="60,60 140,60 115,110 85,110" fill="#FFFFFF" stroke="#C59A58" strokeWidth="3" />
          <rect x="85" y="110" width="30" height="35" rx="3" fill="#FAF8F5" stroke="#9E7234" strokeWidth="2.5" />
          <line x1="100" y1="145" x2="100" y2="165" stroke="#9E7234" strokeWidth="3" strokeDasharray="3 3" />
          <circle cx="100" cy="48" r="4" fill="#C59A58" />
          <circle cx="75" cy="45" r="3" fill="#9E7234" />
          <circle cx="125" cy="45" r="3" fill="#B88746" />
        </svg>
      );

    default:
      return null;
  }
}

interface WhyChooseUsProps {
  scrollYProgress?: MotionValue<number>;
  trackRef?: React.RefObject<HTMLDivElement | null>;
}

export default function WhyChooseUs({ scrollYProgress, trackRef }: WhyChooseUsProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Tab progression synchronized with scroll position from 0.22 to 1.00
  useEffect(() => {
    if (!scrollYProgress) return;
    const unsubscribe = scrollYProgress.on("change", (latest: number) => {
      if (latest < 0.36) {
        setActiveTabIndex(0);
      } else if (latest < 0.52) {
        setActiveTabIndex(1);
      } else if (latest < 0.68) {
        setActiveTabIndex(2);
      } else if (latest < 0.84) {
        setActiveTabIndex(3);
      } else {
        setActiveTabIndex(4);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  const activeTab = serviceTabs[activeTabIndex];

  // Direct click handler
  const handleTabClick = (idx: number) => {
    setActiveTabIndex(idx);
    if (trackRef && trackRef.current) {
      const startY = trackRef.current.offsetTop;
      const totalDist = trackRef.current.offsetHeight - window.innerHeight;
      const scrollPercent = 0.25 + (idx / 4) * 0.65;
      const targetY = startY + scrollPercent * totalDist;
      window.scrollTo({
        top: targetY,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center px-6 md:px-12 lg:px-16 py-8 bg-[#F5EFE6] relative select-none">
      {/* Warm Ambient Radial Glows Matching the Swatch */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-[#C59A58]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[460px] h-[460px] bg-[#B88746]/08 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
        {/* ========================================================================= */}
        {/* LEFT SIDE: EDITORIAL DISPLAY HEADLINE & BOTTOM INTERACTIVE TABS           */}
        {/* ========================================================================= */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full py-4 lg:py-6 space-y-10 lg:space-y-16">
          {/* Top Display Headline (Dual-Tone Ochre & Obsidian Contrast) */}
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] bg-[#FAF8F5] text-[#9E7234] border border-[#E8DED0] px-3.5 py-1.5 rounded-full mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#B88746] animate-pulse" />
              <span>Why Choose White Ink</span>
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-serif tracking-tight uppercase text-[#141414] leading-[0.95] drop-shadow-sm font-heading">
              SERVICES<br />
              THAT MOVE<br />
              <span className="text-[#B88746]">
                THE NEEDLE
              </span>
            </h2>
          </div>

          {/* Bottom-Left Interactive Tabs List (With Thick Left Indicator & Counter) */}
          <div className="pt-8 border-t border-[#E8DED0] flex items-end justify-between">
            {/* Tab options stacked vertically */}
            <div className="space-y-3.5">
              {serviceTabs.map((tab, idx) => {
                const isActive = activeTabIndex === idx;

                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(idx)}
                    className={`group flex items-center text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "pl-3.5 border-l-4 border-[#B88746] text-[#141414]"
                        : "pl-3.5 border-l-4 border-transparent text-[#77716A] hover:text-[#141414]"
                    }`}
                  >
                    <span
                      className={`text-base sm:text-lg md:text-xl font-heading tracking-wide transition-colors ${
                        isActive ? "font-black text-[#141414]" : "font-semibold text-[#77716A]"
                      }`}
                    >
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Tab Counter (01/04, 02/04, 03/04, 04/04) */}
            <div className="text-right">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeTab.number}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="text-base sm:text-lg md:text-xl font-mono tracking-widest text-[#141414] font-black block"
                >
                  {activeTab.number}
                </motion.span>
              </AnimatePresence>
              <span className="text-[10px] uppercase tracking-widest text-[#77716A] font-bold block mt-0.5">
                Scroll To Explore
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RIGHT SIDE: 2x2 GRID OF 4 3D ILLUMINATED CARDS (MATCHING SWATCH PALETTE)   */}
        {/* ========================================================================= */}
        <div className="lg:col-span-7 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              {activeTab.cards.map((card, idx) => {
                const IconComponent = card.icon;

                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className="group bg-white hover:bg-white border border-[#E8DED0] hover:border-[#B88746]/50 rounded-2xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 shadow-[0_10px_30px_rgba(184,135,70,0.06)] hover:shadow-[0_16px_40px_rgba(184,135,70,0.12)]"
                  >
                    {/* Visual Card Interior with 3D Graphic */}
                    <div className="w-full aspect-[4/3] rounded-xl bg-[#FAF8F5] border border-[#E8DED0]/70 relative overflow-hidden flex items-center justify-center p-3 group-hover:border-[#B88746]/40 transition-colors">
                      {/* Ambient center honey gold glow */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-28 h-28 bg-[#B88746]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500" />
                      </div>

                      {/* 3D Graphic Illustration */}
                      <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <Card3DVisual graphic={card.graphic} />
                      </div>

                      {/* Subtle micro icon at bottom-center of visual box */}
                      <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 text-[#B88746] group-hover:text-[#9E7234] transition-colors">
                        <IconComponent className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Title Below Card Graphic */}
                    <p className="text-xs sm:text-sm md:text-base font-bold text-[#141414] group-hover:text-[#B88746] text-center mt-3 tracking-wide font-heading transition-colors">
                      {card.title}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
