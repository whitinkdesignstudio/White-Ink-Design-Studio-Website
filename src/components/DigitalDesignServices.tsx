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
    glowColor: "rgba(184, 135, 70, 0.12)",
    counterGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-[#9E7234] via-[#B88746] to-[#C59A58]",
    indicatorGlow: "via-[#B88746] shadow-[0_0_16px_3px_rgba(184,135,70,0.3)]",
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
    glowColor: "rgba(197, 154, 88, 0.12)",
    counterGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-[#B88746] via-[#C59A58] to-[#9E7234]",
    indicatorGlow: "via-[#C59A58] shadow-[0_0_16px_3px_rgba(197,154,88,0.3)]",
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
    glowColor: "rgba(158, 114, 52, 0.12)",
    counterGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-[#9E7234] via-[#B88746] to-[#C59A58]",
    indicatorGlow: "via-[#9E7234] shadow-[0_0_16px_3px_rgba(158,114,52,0.3)]",
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
    glowColor: "rgba(184, 135, 70, 0.12)",
    counterGradient:
      "text-transparent bg-clip-text bg-gradient-to-r from-[#B88746] via-[#C59A58] to-[#9E7234]",
    indicatorGlow: "via-[#B88746] shadow-[0_0_16px_3px_rgba(184,135,70,0.3)]",
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
    <div className="flex flex-col items-center justify-center my-0.5 sm:my-1">
      <div
        className={`text-6xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-bold font-raleway tracking-tight leading-none tabular-nums select-none ${gradientClass}`}
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
      className="relative w-full bg-[#FAF8F5] text-[#141414] min-h-[420vh] select-none border-b border-[#E8DED0]"
    >
      {/* Sticky Viewport Stage */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-[10dvh] md:py-5 overflow-hidden bg-[#FAF8F5]">
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

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between md:justify-center items-center h-[80dvh] md:h-auto my-auto">
          {/* 1ST PART: HEADING */}
          <div className="text-center max-w-4xl mx-auto shrink-0 px-2">
            <h2 className="text-[1.12rem] sm:text-2xl md:text-3xl lg:text-[2.35rem] font-bold uppercase tracking-normal text-[#141414] font-raleway leading-[1.25] text-center">
              A design-led growth studio for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                Healthcare & D2C Brands
              </span>
            </h2>
          </div>

          {/* 2ND PART: NORMAL PARAGRAPH */}
          <div className="text-center max-w-3xl mx-auto shrink-0 px-2 md:mt-2">
            <p className="text-[11px] sm:text-xs md:text-sm text-[#77716A] leading-relaxed font-normal font-raleway max-w-3xl mx-auto text-center line-clamp-3 sm:line-clamp-none">
              We have built 50+ websites and partnered with 400+ brands—including over 70 in healthcare—to build digital flagships, enduring brand identities, and high-ROI performance campaigns.
            </p>
          </div>

          {/* 3RD PART: UNIFIED CARD STAGE */}
          <div className="relative w-full h-[360px] sm:h-[420px] md:h-[450px] lg:h-[470px] max-h-[50vh] md:max-h-[62vh] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#E8DED0] shadow-[0_20px_60px_rgba(184,135,70,0.08)] shrink-0 md:mt-5">
            {/* ========================================================= */}
            {/* CARD 0: Websites Built                                    */}
            {/* ========================================================= */}
            <motion.div
              style={{ scale: card0Scale, opacity: card0Opacity }}
              className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#FAF8F5] via-[#F8F4EC] to-[#F5EFE6] text-[#141414] rounded-[24px] sm:rounded-[32px] overflow-hidden z-10 flex flex-col justify-between p-4 sm:p-6 md:p-7 lg:p-8 border border-[#E8DED0]"
            >
              {/* Warm Studio Gold Radial Ambient Lighting */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 65% at 50% 60%, ${factCards[0].glowColor} 0%, rgba(245, 239, 230, 0.45) 45%, rgba(250, 248, 245, 0.95) 100%)`,
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B88746]/10 rounded-full blur-[130px] pointer-events-none" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-4 pb-1 sm:pb-1.5">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#141414] font-raleway whitespace-nowrap truncate">
                    {factCards[0].title}
                  </h3>
                </div>
                <a
                  href={factCards[0].exploreHref}
                  className="group p-1 sm:pl-5 sm:pr-1.5 sm:py-1.5 rounded-full bg-white text-[#141414] hover:bg-[#FAF8F5] border border-[#E8DED0] transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-3 font-bold text-xs sm:text-sm shadow-sm shrink-0 cursor-pointer font-raleway"
                >
                  <span className="hidden sm:inline tracking-[0.05em] font-raleway font-bold uppercase text-xs">Explore</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B88746] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Card Middle: Watermark + Attractive Studio Gold Animated Number + Badges */}
              <div className="relative my-auto flex flex-col items-center justify-center py-1">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold text-[#E8DED0]/50 tracking-normal font-raleway whitespace-nowrap">
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

                  {/* Mobile 2x2 Structured Grid (< sm) */}
                  <div className="grid sm:hidden grid-cols-2 gap-1.5 w-full max-w-xs mx-auto mt-6">
                    {[...factCards[0].row1, ...factCards[0].row2].map((item, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-1 rounded-full text-[10px] font-semibold font-raleway text-[#141414] bg-white border border-[#E8DED0] text-center truncate shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Desktop Pills Under Counter (sm:) */}
                  <div className="hidden sm:flex w-full flex-col items-center gap-1.5 sm:gap-2 mt-2">
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      {factCards[0].row1.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold font-raleway text-[#141414] bg-white hover:bg-[#FAF8F5] border border-[#E8DED0] hover:border-[#B88746] transition-all shadow-sm cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      {factCards[0].row2.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold font-raleway text-[#141414] bg-white hover:bg-[#FAF8F5] border border-[#E8DED0] hover:border-[#B88746] transition-all shadow-sm cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Row */}
              <div className="relative z-10 flex flex-col items-center text-center pt-1">
                <p className="text-xs sm:text-sm text-[#77716A] font-normal font-raleway tracking-normal max-w-xl mx-auto mb-2">
                  {factCards[0].bottomLine}
                </p>
                <div className="w-24 sm:w-32 h-[2.5px] bg-gradient-to-r from-transparent via-[#B88746] to-transparent rounded-full shadow-[0_0_16px_3px_rgba(184,135,70,0.3)]" />
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
              className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#FAF8F5] via-[#F8F4EC] to-[#F5EFE6] text-[#141414] rounded-[24px] sm:rounded-[32px] overflow-hidden z-20 flex flex-col justify-between p-4 sm:p-6 md:p-7 lg:p-8 shadow-[0_-20px_50px_rgba(184,135,70,0.1)] border border-[#E8DED0]"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 65% at 50% 60%, ${factCards[1].glowColor} 0%, rgba(245, 239, 230, 0.45) 45%, rgba(250, 248, 245, 0.95) 100%)`,
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C59A58]/10 rounded-full blur-[130px] pointer-events-none" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-4 pb-1 sm:pb-1.5">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#141414] font-raleway whitespace-nowrap truncate">
                    {factCards[1].title}
                  </h3>
                </div>
                <a
                  href={factCards[1].exploreHref}
                  className="group p-1 sm:pl-5 sm:pr-1.5 sm:py-1.5 rounded-full bg-white text-[#141414] hover:bg-[#FAF8F5] border border-[#E8DED0] transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-3 font-bold text-xs sm:text-sm shadow-sm shrink-0 cursor-pointer font-raleway"
                >
                  <span className="hidden sm:inline tracking-[0.05em] font-raleway font-bold uppercase text-xs">Explore</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B88746] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Card Middle */}
              <div className="relative my-auto flex flex-col items-center justify-center py-1">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold text-[#E8DED0]/50 tracking-normal font-raleway whitespace-nowrap">
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

                  {/* Mobile 2x2 Structured Grid (< sm) */}
                  <div className="grid sm:hidden grid-cols-2 gap-1.5 w-full max-w-xs mx-auto mt-6">
                    {[...factCards[1].row1, ...factCards[1].row2].map((item, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-1 rounded-full text-[10px] font-semibold font-raleway text-[#141414] bg-white border border-[#E8DED0] text-center truncate shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Desktop Pills Under Counter (sm:) */}
                  <div className="hidden sm:flex w-full flex-col items-center gap-1.5 sm:gap-2 mt-2">
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      {factCards[1].row1.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold font-raleway text-[#141414] bg-white hover:bg-[#FAF8F5] border border-[#E8DED0] hover:border-[#B88746] transition-all shadow-sm cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      {factCards[1].row2.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold font-raleway text-[#141414] bg-white hover:bg-[#FAF8F5] border border-[#E8DED0] hover:border-[#B88746] transition-all shadow-sm cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Row */}
              <div className="relative z-10 flex flex-col items-center text-center pt-1">
                <p className="text-xs sm:text-sm text-[#77716A] font-normal font-raleway tracking-normal max-w-xl mx-auto mb-2">
                  {factCards[1].bottomLine}
                </p>
                <div className="w-24 sm:w-32 h-[2.5px] bg-gradient-to-r from-transparent via-[#C59A58] to-transparent rounded-full shadow-[0_0_16px_3px_rgba(197,154,88,0.3)]" />
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
              className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#FAF8F5] via-[#F8F4EC] to-[#F5EFE6] text-[#141414] rounded-[24px] sm:rounded-[32px] overflow-hidden z-30 flex flex-col justify-between p-4 sm:p-6 md:p-7 lg:p-8 shadow-[0_-20px_50px_rgba(184,135,70,0.1)] border border-[#E8DED0]"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 65% at 50% 60%, ${factCards[2].glowColor} 0%, rgba(245, 239, 230, 0.45) 45%, rgba(250, 248, 245, 0.95) 100%)`,
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#9E7234]/10 rounded-full blur-[130px] pointer-events-none" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-4 pb-1 sm:pb-1.5">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#141414] font-raleway whitespace-nowrap truncate">
                    {factCards[2].title}
                  </h3>
                </div>
                <a
                  href={factCards[2].exploreHref}
                  className="group p-1 sm:pl-5 sm:pr-1.5 sm:py-1.5 rounded-full bg-white text-[#141414] hover:bg-[#FAF8F5] border border-[#E8DED0] transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-3 font-bold text-xs sm:text-sm shadow-sm shrink-0 cursor-pointer font-raleway"
                >
                  <span className="hidden sm:inline tracking-[0.05em] font-raleway font-bold uppercase text-xs">Explore</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B88746] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Card Middle */}
              <div className="relative my-auto flex flex-col items-center justify-center py-1">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold text-[#E8DED0]/50 tracking-normal font-raleway whitespace-nowrap">
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

                  {/* Mobile 2x2 Structured Grid (< sm) */}
                  <div className="grid sm:hidden grid-cols-2 gap-1.5 w-full max-w-xs mx-auto mt-6">
                    {[...factCards[2].row1, ...factCards[2].row2].map((item, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-1 rounded-full text-[10px] font-semibold font-raleway text-[#141414] bg-white border border-[#E8DED0] text-center truncate shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Desktop Pills Under Counter (sm:) */}
                  <div className="hidden sm:flex w-full flex-col items-center gap-1.5 sm:gap-2 mt-2">
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      {factCards[2].row1.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold font-raleway text-[#141414] bg-white hover:bg-[#FAF8F5] border border-[#E8DED0] hover:border-[#B88746] transition-all shadow-sm cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      {factCards[2].row2.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold font-raleway text-[#141414] bg-white hover:bg-[#FAF8F5] border border-[#E8DED0] hover:border-[#B88746] transition-all shadow-sm cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Row */}
              <div className="relative z-10 flex flex-col items-center text-center pt-1">
                <p className="text-xs sm:text-sm text-[#77716A] font-normal font-raleway tracking-normal max-w-xl mx-auto mb-2">
                  {factCards[2].bottomLine}
                </p>
                <div className="w-24 sm:w-32 h-[2.5px] bg-gradient-to-r from-transparent via-[#9E7234] to-transparent rounded-full shadow-[0_0_16px_3px_rgba(158,114,52,0.3)]" />
              </div>
            </motion.div>

            {/* ============================================================== */}
            {/* CARD 3: Countries Reached (Slides up from bottom over Card 2) */}
            {/* ============================================================== */}
            <motion.div
              style={{
                y: card3Y,
              }}
              className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#FAF8F5] via-[#F8F4EC] to-[#F5EFE6] text-[#141414] rounded-[24px] sm:rounded-[32px] overflow-hidden z-40 flex flex-col justify-between p-4 sm:p-6 md:p-7 lg:p-8 shadow-[0_-20px_50px_rgba(184,135,70,0.1)] border border-[#E8DED0]"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 80% 65% at 50% 60%, ${factCards[3].glowColor} 0%, rgba(245, 239, 230, 0.45) 45%, rgba(250, 248, 245, 0.95) 100%)`,
                }}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#B88746]/10 rounded-full blur-[130px] pointer-events-none" />

              {/* Card Top Row */}
              <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-4 pb-1 sm:pb-1.5">
                <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                  <h3 className="text-base sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#141414] font-raleway whitespace-nowrap truncate">
                    {factCards[3].title}
                  </h3>
                </div>
                <a
                  href={factCards[3].exploreHref}
                  className="group p-1 sm:pl-5 sm:pr-1.5 sm:py-1.5 rounded-full bg-white text-[#141414] hover:bg-[#FAF8F5] border border-[#E8DED0] transition-all duration-300 inline-flex items-center gap-1.5 sm:gap-3 font-bold text-xs sm:text-sm shadow-sm shrink-0 cursor-pointer font-raleway"
                >
                  <span className="hidden sm:inline tracking-[0.05em] font-raleway font-bold uppercase text-xs">Explore</span>
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B88746] text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>
              </div>

              {/* Card Middle */}
              <div className="relative my-auto flex flex-col items-center justify-center py-1">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                  <span className="text-4xl sm:text-6xl md:text-7xl lg:text-[7.5rem] font-bold text-[#E8DED0]/50 tracking-normal font-raleway whitespace-nowrap">
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

                  {/* Mobile 2x2 Structured Grid (< sm) */}
                  <div className="grid sm:hidden grid-cols-2 gap-1.5 w-full max-w-xs mx-auto mt-6">
                    {[...factCards[3].row1, ...factCards[3].row2].map((item, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-1 rounded-full text-[10px] font-semibold font-raleway text-[#141414] bg-white border border-[#E8DED0] text-center truncate shadow-2xs"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Desktop Pills Under Counter (sm:) */}
                  <div className="hidden sm:flex w-full flex-col items-center gap-1.5 sm:gap-2 mt-2">
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      {factCards[3].row1.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold font-raleway text-[#141414] bg-white hover:bg-[#FAF8F5] border border-[#E8DED0] hover:border-[#B88746] transition-all shadow-sm cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
                      {factCards[3].row2.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-[13px] font-semibold font-raleway text-[#141414] bg-white hover:bg-[#FAF8F5] border border-[#E8DED0] hover:border-[#B88746] transition-all shadow-sm cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Bottom Row */}
              <div className="relative z-10 flex flex-col items-center text-center pt-1">
                <p className="text-xs sm:text-sm text-[#77716A] font-normal font-raleway tracking-normal max-w-xl mx-auto mb-2">
                  {factCards[3].bottomLine}
                </p>
                <div className="w-24 sm:w-32 h-[2.5px] bg-gradient-to-r from-transparent via-[#B88746] to-transparent rounded-full shadow-[0_0_16px_3px_rgba(184,135,70,0.3)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
