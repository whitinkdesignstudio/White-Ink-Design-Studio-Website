"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ServiceCardData {
  id: string;
  title: string;
  badge: string;
  targetNumber: number;
  suffix: string;
  watermark: string;
  bottomLine: string;
  row1: string[];
  row2: string[];
  exploreHref: string;
  glowColor: string;
  counterGradient: string;
  indicatorGlow: string;
}

const factCards: ServiceCardData[] = [
  {
    id: "websites-built",
    title: "Websites Built",
    badge: "50+ BUILT",
    targetNumber: 50,
    suffix: "+",
    watermark: "Websites Built",
    bottomLine: "High-speed custom & Shopify flagships",
    row1: [
      "Marketing Websites",
      "Landing Pages",
      "E-Commerce Stores",
      "Portfolio Sites",
      "Microsites",
    ],
    row2: ["Campaign Pages", "Site Redesigns", "CMS Websites"],
    exploreHref: "#work",
    glowColor: "rgba(184, 135, 70, 0.35)",
    counterGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5EFEB] to-[#B88746] drop-shadow-[0_0_30px_rgba(184,135,70,0.5)]",
    indicatorGlow: "via-[#B88746] shadow-[0_0_16px_3px_rgba(184,135,70,0.7)]",
  },
  {
    id: "brands-served",
    title: "Brands Served",
    badge: "400+ BRANDS",
    targetNumber: 400,
    suffix: "+",
    watermark: "Brands Served",
    bottomLine: "Across India, UK, USA & UAE",
    row1: [
      "Healthcare Clinics",
      "D2C E-Commerce",
      "Jewellery & Luxury",
      "Real Estate",
      "FMCG Food",
    ],
    row2: ["Global Export", "Events & Ticketing", "Professional Services"],
    exploreHref: "#about",
    glowColor: "rgba(197, 154, 88, 0.35)",
    counterGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FDF3E3] to-[#C59A58] drop-shadow-[0_0_30px_rgba(197,154,88,0.5)]",
    indicatorGlow: "via-[#C59A58] shadow-[0_0_16px_3px_rgba(197,154,88,0.7)]",
  },
  {
    id: "healthcare-brands",
    title: "Healthcare Brands",
    badge: "70+ SPECIALITY",
    targetNumber: 70,
    suffix: "+",
    watermark: "Healthcare",
    bottomLine: "Hospitals, clinics & pharma leaders",
    row1: [
      "Hospitals & Multi-Specialty",
      "Homeopathy Houses",
      "Ayurveda Brands",
      "Surgeons & Doctors",
    ],
    row2: ["Medical Ad Compliance", "Patient Booking UX", "Teleconsult Funnels"],
    exploreHref: "#industries",
    glowColor: "rgba(158, 114, 52, 0.35)",
    counterGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E8C582] to-[#9E7234] drop-shadow-[0_0_30px_rgba(158,114,52,0.5)]",
    indicatorGlow: "via-[#9E7234] shadow-[0_0_16px_3px_rgba(158,114,52,0.7)]",
  },
  {
    id: "countries-reached",
    title: "Countries Reached",
    badge: "7+ COUNTRIES",
    targetNumber: 7,
    suffix: "+",
    watermark: "Countries Reached",
    bottomLine: "London & Ahmedabad dual presence",
    row1: [
      "India (HQ)",
      "United Kingdom (London)",
      "United States (EST)",
      "UAE (Dubai)",
    ],
    row2: [
      "Dual-Jurisdiction Contracts",
      "GBP & USD Pricing",
      "24/7 Overlap Hours",
    ],
    exploreHref: "#contact",
    glowColor: "rgba(212, 175, 55, 0.35)",
    counterGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FAF8F5] to-[#B88746] drop-shadow-[0_0_30px_rgba(184,135,70,0.5)]",
    indicatorGlow: "via-[#D4AF37] shadow-[0_0_16px_3px_rgba(212,175,55,0.7)]",
  },
];

// Attractive Increasing Counter Animation Component
function AnimatedCounter({
  target,
  suffix = "+",
  isActive,
  gradientClass,
}: {
  target: number;
  suffix?: string;
  isActive: boolean;
  gradientClass: string;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    const duration = 1500; // ms
    const startTime = performance.now();
    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic curve for smooth natural deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeProgress * target);

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(target);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isActive, target]);

  return (
    <div className="flex flex-col items-center justify-center my-1 sm:my-2">
      <div
        className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-heading tracking-tight tabular-nums select-none ${gradientClass}`}
      >
        {displayValue}
        {suffix}
      </div>
    </div>
  );
}

export default function DigitalDesignServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  // Track scroll progress across the multi-screen height of this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Track which card is currently active to trigger the count animation
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.22) {
      setActiveCardIndex(0);
    } else if (latest < 0.55) {
      setActiveCardIndex(1);
    } else if (latest < 0.82) {
      setActiveCardIndex(2);
    } else {
      setActiveCardIndex(3);
    }
  });

  // Card 0 (Websites Built): Base card. Scales down & dims slightly as Card 1 slides over it
  const card0Scale = useTransform(scrollYProgress, [0.12, 0.32], [1, 0.94]);
  const card0Opacity = useTransform(scrollYProgress, [0.12, 0.32], [1, 0.25]);

  // Card 1 (Brands Served): Slides up from bottom (105% -> 0%) taking Card 0's spot
  const card1Y = useTransform(scrollYProgress, [0.12, 0.32], ["105%", "0%"]);
  const card1Scale = useTransform(scrollYProgress, [0.45, 0.65], [1, 0.94]);
  const card1Opacity = useTransform(scrollYProgress, [0.45, 0.65], [1, 0.25]);

  // Card 2 (Healthcare Brands): Slides up from bottom (105% -> 0%) taking Card 1's spot
  const card2Y = useTransform(scrollYProgress, [0.45, 0.65], ["105%", "0%"]);
  const card2Scale = useTransform(scrollYProgress, [0.75, 0.95], [1, 0.94]);
  const card2Opacity = useTransform(scrollYProgress, [0.75, 0.95], [1, 0.25]);

  // Card 3 (Countries Reached): Slides up from bottom (105% -> 0%) taking Card 2's spot
  const card3Y = useTransform(scrollYProgress, [0.75, 0.95], ["105%", "0%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-[#FAF8F5] text-[#141414] min-h-[420vh] select-none border-b border-[#E8E3DA]"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-12 py-6 overflow-hidden bg-[#FAF8F5]">
        {/* Subtle Warm Bronze Dot Matrix Grid Pattern (Matches Hero Aesthetic) */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(rgba(184, 135, 70, 0.25) 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to right, black 0%, transparent 35%, transparent 65%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, transparent 35%, transparent 65%, black 100%)",
          }}
        />

        {/* Subtle warm ambient center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center">
          {/* Section Heading: Warm Light Theme matching Hero */}
          <div className="mb-5 md:mb-7 text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.25rem] font-black tracking-tight text-[#141414] font-heading whitespace-normal lg:whitespace-nowrap leading-tight">
              A design-led growth studio for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                Healthcare & D2C Brands
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-sm lg:text-[0.92rem] text-[#5C5852] leading-relaxed font-normal whitespace-normal lg:whitespace-nowrap overflow-hidden text-ellipsis">
              We have built 50+ websites and partnered with 400+ brands—including over 70 in healthcare—to build digital flagships, enduring brand identities, and high-ROI performance campaigns.
            </p>
          </div>

          {/* Unified Card Stage: Deep Luxury Obsidian with Warm Studio Gold & Bronze Accents */}
          <div className="relative w-full h-[510px] sm:h-[530px] md:h-[550px] rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#E8E3DA] shadow-[0_25px_70px_rgba(20,20,20,0.14)]">
            {/* ========================================================= */}
            {/* CARD 0: Websites Built                                    */}
            {/* ========================================================= */}
            <motion.div
              style={{ scale: card0Scale, opacity: card0Opacity }}
              className="absolute inset-0 w-full h-full bg-[#141414] text-white rounded-[28px] sm:rounded-[36px] overflow-hidden z-10 flex flex-col justify-between p-6 sm:p-9 md:p-11 border border-[#B88746]/25"
            >
              {/* Warm Studio Gold Radial Ambient Lighting */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 65% at 50% 60%, ${factCards[0].glowColor} 0%, rgba(26, 21, 15, 0.45) 45%, rgba(20, 20, 20, 0.98) 100%), #141414`,
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B88746]/15 rounded-full blur-[130px] pointer-events-none" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between gap-4 pb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#FAF8F5] font-heading">
                    {factCards[0].title}
                  </h3>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#B88746]/15 border border-[#B88746]/40 text-[10px] font-mono font-bold tracking-widest uppercase text-[#E8C582]">
                    {factCards[0].badge}
                  </span>
                </div>
                <a
                  href={factCards[0].exploreHref}
                  className="group pl-5 pr-1.5 py-1.5 rounded-full bg-[#FAF8F5] text-[#141414] hover:bg-white transition-all duration-300 inline-flex items-center gap-3 font-bold text-xs sm:text-sm shadow-md shrink-0 cursor-pointer"
                >
                  <span className="tracking-tight font-heading uppercase text-xs">Explore</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#141414] text-[#B88746] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Card Middle: Watermark + Attractive Studio Gold Animated Number + Badges */}
              <div className="relative my-auto flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-[#B88746]/10 tracking-tight font-heading whitespace-nowrap">
                    {factCards[0].watermark}
                  </span>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center max-w-5xl mx-auto">
                  <AnimatedCounter
                    target={factCards[0].targetNumber}
                    suffix={factCards[0].suffix}
                    isActive={activeCardIndex === 0}
                    gradientClass={factCards[0].counterGradient}
                  />

                  {/* Pills Under Counter */}
                  <div className="w-full flex flex-col items-center gap-2.5 sm:gap-3 mt-3">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {factCards[0].row1.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#221F1C]/90 hover:bg-[#2C2824] border border-[#B88746]/35 hover:border-[#B88746] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {factCards[0].row2.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#221F1C]/90 hover:bg-[#2C2824] border border-[#B88746]/35 hover:border-[#B88746] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Row */}
              <div className="relative z-10 flex flex-col items-center text-center pt-2">
                <p className="text-xs sm:text-sm md:text-base text-[#D8D0C5] font-normal tracking-wide max-w-xl mx-auto mb-3">
                  {factCards[0].bottomLine}
                </p>
                <div className="w-28 sm:w-36 h-[3px] bg-gradient-to-r from-transparent via-[#B88746] to-transparent rounded-full shadow-[0_0_16px_3px_rgba(184,135,70,0.7)]" />
              </div>
            </motion.div>

            {/* ========================================================= */}
            {/* CARD 1: Brands Served (Slides up from bottom over Card 0) */}
            {/* ========================================================= */}
            <motion.div
              style={{
                y: card1Y,
                scale: card1Scale,
                opacity: card1Opacity,
              }}
              className="absolute inset-0 w-full h-full bg-[#141414] text-white rounded-[28px] sm:rounded-[36px] overflow-hidden z-20 flex flex-col justify-between p-6 sm:p-9 md:p-11 shadow-[0_-25px_60px_rgba(0,0,0,0.95)] border border-[#C59A58]/25"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 65% at 50% 60%, ${factCards[1].glowColor} 0%, rgba(28, 22, 14, 0.45) 45%, rgba(20, 20, 20, 0.98) 100%), #141414`,
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C59A58]/15 rounded-full blur-[130px] pointer-events-none" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between gap-4 pb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#FAF8F5] font-heading">
                    {factCards[1].title}
                  </h3>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#C59A58]/15 border border-[#C59A58]/40 text-[10px] font-mono font-bold tracking-widest uppercase text-[#F3D5A5]">
                    {factCards[1].badge}
                  </span>
                </div>
                <a
                  href={factCards[1].exploreHref}
                  className="group pl-5 pr-1.5 py-1.5 rounded-full bg-[#FAF8F5] text-[#141414] hover:bg-white transition-all duration-300 inline-flex items-center gap-3 font-bold text-xs sm:text-sm shadow-md shrink-0 cursor-pointer"
                >
                  <span className="tracking-tight font-heading uppercase text-xs">Explore</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#141414] text-[#C59A58] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Card Middle */}
              <div className="relative my-auto flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-[#C59A58]/10 tracking-tight font-heading whitespace-nowrap">
                    {factCards[1].watermark}
                  </span>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center max-w-5xl mx-auto">
                  <AnimatedCounter
                    target={factCards[1].targetNumber}
                    suffix={factCards[1].suffix}
                    isActive={activeCardIndex === 1}
                    gradientClass={factCards[1].counterGradient}
                  />

                  {/* Pills Under Counter */}
                  <div className="w-full flex flex-col items-center gap-2.5 sm:gap-3 mt-3">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {factCards[1].row1.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#221F1C]/90 hover:bg-[#2C2824] border border-[#C59A58]/35 hover:border-[#C59A58] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {factCards[1].row2.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#221F1C]/90 hover:bg-[#2C2824] border border-[#C59A58]/35 hover:border-[#C59A58] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Row */}
              <div className="relative z-10 flex flex-col items-center text-center pt-2">
                <p className="text-xs sm:text-sm md:text-base text-[#D8D0C5] font-normal tracking-wide max-w-xl mx-auto mb-3">
                  {factCards[1].bottomLine}
                </p>
                <div className="w-28 sm:w-36 h-[3px] bg-gradient-to-r from-transparent via-[#C59A58] to-transparent rounded-full shadow-[0_0_16px_3px_rgba(197,154,88,0.7)]" />
              </div>
            </motion.div>

            {/* ============================================================== */}
            {/* CARD 2: Healthcare Brands (Slides up from bottom over Card 1) */}
            {/* ============================================================== */}
            <motion.div
              style={{
                y: card2Y,
                scale: card2Scale,
                opacity: card2Opacity,
              }}
              className="absolute inset-0 w-full h-full bg-[#141414] text-white rounded-[28px] sm:rounded-[36px] overflow-hidden z-30 flex flex-col justify-between p-6 sm:p-9 md:p-11 shadow-[0_-25px_60px_rgba(0,0,0,0.95)] border border-[#9E7234]/30"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 65% at 50% 60%, ${factCards[2].glowColor} 0%, rgba(26, 20, 14, 0.45) 45%, rgba(20, 20, 20, 0.98) 100%), #141414`,
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#9E7234]/15 rounded-full blur-[130px] pointer-events-none" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between gap-4 pb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#FAF8F5] font-heading">
                    {factCards[2].title}
                  </h3>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#9E7234]/20 border border-[#9E7234]/40 text-[10px] font-mono font-bold tracking-widest uppercase text-[#E8C582]">
                    {factCards[2].badge}
                  </span>
                </div>
                <a
                  href={factCards[2].exploreHref}
                  className="group pl-5 pr-1.5 py-1.5 rounded-full bg-[#FAF8F5] text-[#141414] hover:bg-white transition-all duration-300 inline-flex items-center gap-3 font-bold text-xs sm:text-sm shadow-md shrink-0 cursor-pointer"
                >
                  <span className="tracking-tight font-heading uppercase text-xs">Explore</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#141414] text-[#9E7234] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Card Middle */}
              <div className="relative my-auto flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-[#9E7234]/10 tracking-tight font-heading whitespace-nowrap">
                    {factCards[2].watermark}
                  </span>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center max-w-5xl mx-auto">
                  <AnimatedCounter
                    target={factCards[2].targetNumber}
                    suffix={factCards[2].suffix}
                    isActive={activeCardIndex === 2}
                    gradientClass={factCards[2].counterGradient}
                  />

                  {/* Pills Under Counter */}
                  <div className="w-full flex flex-col items-center gap-2.5 sm:gap-3 mt-3">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {factCards[2].row1.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#221F1C]/90 hover:bg-[#2C2824] border border-[#9E7234]/40 hover:border-[#B88746] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {factCards[2].row2.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#221F1C]/90 hover:bg-[#2C2824] border border-[#9E7234]/40 hover:border-[#B88746] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Row */}
              <div className="relative z-10 flex flex-col items-center text-center pt-2">
                <p className="text-xs sm:text-sm md:text-base text-[#D8D0C5] font-normal tracking-wide max-w-xl mx-auto mb-3">
                  {factCards[2].bottomLine}
                </p>
                <div className="w-28 sm:w-36 h-[3px] bg-gradient-to-r from-transparent via-[#9E7234] to-transparent rounded-full shadow-[0_0_16px_3px_rgba(158,114,52,0.7)]" />
              </div>
            </motion.div>

            {/* ============================================================== */}
            {/* CARD 3: Countries Reached (Slides up from bottom over Card 2) */}
            {/* ============================================================== */}
            <motion.div
              style={{
                y: card3Y,
              }}
              className="absolute inset-0 w-full h-full bg-[#141414] text-white rounded-[28px] sm:rounded-[36px] overflow-hidden z-40 flex flex-col justify-between p-6 sm:p-9 md:p-11 shadow-[0_-25px_60px_rgba(0,0,0,0.95)] border border-[#B88746]/30"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 65% at 50% 60%, ${factCards[3].glowColor} 0%, rgba(28, 22, 16, 0.45) 45%, rgba(20, 20, 20, 0.98) 100%), #141414`,
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B88746]/15 rounded-full blur-[130px] pointer-events-none" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between gap-4 pb-2">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-[#FAF8F5] font-heading">
                    {factCards[3].title}
                  </h3>
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#B88746]/20 border border-[#B88746]/40 text-[10px] font-mono font-bold tracking-widest uppercase text-[#FAF8F5]">
                    {factCards[3].badge}
                  </span>
                </div>
                <a
                  href={factCards[3].exploreHref}
                  className="group pl-5 pr-1.5 py-1.5 rounded-full bg-[#FAF8F5] text-[#141414] hover:bg-white transition-all duration-300 inline-flex items-center gap-3 font-bold text-xs sm:text-sm shadow-md shrink-0 cursor-pointer"
                >
                  <span className="tracking-tight font-heading uppercase text-xs">Explore</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#141414] text-[#B88746] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Card Middle */}
              <div className="relative my-auto flex flex-col items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black text-[#B88746]/10 tracking-tight font-heading whitespace-nowrap">
                    {factCards[3].watermark}
                  </span>
                </div>

                <div className="relative z-10 w-full flex flex-col items-center max-w-5xl mx-auto">
                  <AnimatedCounter
                    target={factCards[3].targetNumber}
                    suffix={factCards[3].suffix}
                    isActive={activeCardIndex === 3}
                    gradientClass={factCards[3].counterGradient}
                  />

                  {/* Pills Under Counter */}
                  <div className="w-full flex flex-col items-center gap-2.5 sm:gap-3 mt-3">
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {factCards[3].row1.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#221F1C]/90 hover:bg-[#2C2824] border border-[#B88746]/35 hover:border-[#B88746] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                      {factCards[3].row2.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-[#FAF8F5] bg-[#221F1C]/90 hover:bg-[#2C2824] border border-[#B88746]/35 hover:border-[#B88746] transition-all shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-md cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Row */}
              <div className="relative z-10 flex flex-col items-center text-center pt-2">
                <p className="text-xs sm:text-sm md:text-base text-[#D8D0C5] font-normal tracking-wide max-w-xl mx-auto mb-3">
                  {factCards[3].bottomLine}
                </p>
                <div className="w-28 sm:w-36 h-[3px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent rounded-full shadow-[0_0_16px_3px_rgba(212,175,55,0.7)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
