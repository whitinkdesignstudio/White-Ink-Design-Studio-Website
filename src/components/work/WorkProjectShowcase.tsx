"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface WorkProjectShowcaseProps {
  caseStudies: CaseStudy[];
  onOpenModal: (caseStudy: CaseStudy) => void;
}

// =========================================================================
// CARD 1: COMPANY LOGO CARD
// =========================================================================
function LogoCard({ project, isMobile }: { project: CaseStudy; isMobile: boolean }) {
  return (
    <motion.div
      initial={isMobile ? { opacity: 0, x: -45 } : { opacity: 0, y: 20 }}
      whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: isMobile ? 0.1 : 0.3,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full h-auto py-7 px-6 lg:h-[38%] rounded-[24px] sm:rounded-[32px] bg-white border border-[#E8DED0] flex flex-col items-center justify-center shadow-xs relative overflow-hidden group shrink-0"
    >
      {/* Subtle Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <span className="text-6xl sm:text-7xl font-bold font-raleway uppercase tracking-tighter text-[#141414]">
          {project.client.slice(0, 4)}
        </span>
      </div>

      {/* Brand Monogram Icon Badge */}
      <div
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-2.5 sm:mb-3 shadow-2xs border transition-transform duration-300 group-hover:scale-105 shrink-0"
        style={{
          backgroundColor: project.colorTheme.badgeBg,
          borderColor: project.colorTheme.border,
          color: project.colorTheme.badgeText,
        }}
      >
        <span className="text-sm sm:text-base font-bold font-raleway">
          {project.client.slice(0, 2).toUpperCase()}
        </span>
      </div>

      {/* Company Brand Logo / Wordmark in Bold Raleway */}
      <h2 className="text-lg sm:text-2xl font-bold uppercase tracking-wider text-[#141414] font-raleway text-center leading-tight">
        {project.client}
      </h2>

      {/* Sub-label */}
      <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#B88746] font-raleway mt-1 sm:mt-1.5">
        {project.industryLabel}
      </span>
    </motion.div>
  );
}

// =========================================================================
// CARD 2: BIG TABLET / MOCKUP SHOWCASE CARD
// =========================================================================
function TabletCard({
  project,
  onOpenModal,
  isMobile,
}: {
  project: CaseStudy;
  onOpenModal: (caseStudy: CaseStudy) => void;
  isMobile: boolean;
}) {
  return (
    <motion.div
      initial={isMobile ? { opacity: 0, x: 45 } : { opacity: 0, scale: 0.96 }}
      whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        delay: isMobile ? 0.25 : 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full h-auto py-5 px-3 sm:p-6 lg:p-8 lg:h-full rounded-[24px] sm:rounded-[32px] bg-[#E2A93B] flex items-center justify-center relative overflow-hidden shadow-sm shrink-0"
    >
      {/* Warm background subtle shading matching reference card */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E2A93B] via-[#D59828] to-[#B88746] opacity-95" />

      {/* Realistic iPad / Tablet Device Frame */}
      <div className="relative z-10 w-full max-w-[820px] aspect-[16/11] sm:aspect-[16/10.5] rounded-[18px] sm:rounded-[30px] bg-[#141414] p-2 sm:p-3 shadow-2xl border border-black/30 flex flex-col justify-between">
        {/* Tablet Top Bezel: Camera Pinhole */}
        <div className="w-full flex items-center justify-center pb-1">
          <div className="w-2 h-2 rounded-full bg-[#2A2A2A] border border-white/10" />
        </div>

        {/* Tablet Screen Container */}
        <div className="relative w-full flex-1 rounded-[12px] sm:rounded-[20px] bg-white overflow-hidden shadow-inner flex flex-col">
          {/* Browser / App Header Bar inside Tablet */}
          <div className="w-full bg-[#F5EFE6] px-3 sm:px-4 py-1.5 border-b border-[#E8DED0] flex items-center justify-between">
            <div className="flex items-center gap-1.5 min-w-0">
              <div className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
              <div className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
              <div className="w-1.5 h-1.5 rounded-full bg-stone-300 shrink-0" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#141414] font-raleway ml-1 truncate">
                {project.client}
              </span>
            </div>

            <span className="px-2 py-0.5 rounded-full bg-white text-[8px] sm:text-[9px] font-bold text-[#B88746] uppercase font-raleway border border-[#E8DED0] shrink-0">
              Live Experience
            </span>
          </div>

          {/* Tablet Screen Main Body: Bespoke Artwork Showcase */}
          <div
            className="relative w-full flex-1 bg-[#FAF8F5] flex flex-col items-center justify-center p-3 sm:p-5 text-center overflow-hidden group/screen cursor-pointer"
            onClick={() => onOpenModal(project)}
          >
            {/* Background Visual Grid */}
            <div
              className="absolute inset-0 opacity-25 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(184, 135, 70, 0.25) 1.2px, transparent 1.2px)",
                backgroundSize: "18px 18px",
              }}
            />

            {/* Center Stage Content */}
            <div className="relative z-10 max-w-sm sm:max-w-md mx-auto flex flex-col items-center transition-transform duration-500 ease-out group-hover/screen:scale-105">
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-[#B88746] font-raleway mb-0.5">
                {project.serviceLabel}
              </span>

              <h4 className="text-xs sm:text-base md:text-xl font-bold uppercase text-[#141414] font-raleway tracking-tight leading-tight line-clamp-2">
                {project.title}
              </h4>

              {/* Metric Highlights Row */}
              <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-2 sm:mt-2.5">
                {project.resultsBand.slice(0, 3).map((res, rIdx) => (
                  <div
                    key={rIdx}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-white border border-[#E8DED0] text-center shadow-2xs"
                  >
                    <span className="block text-[11px] sm:text-xs font-bold text-[#141414] font-raleway leading-none">
                      {res.value}
                    </span>
                    <span className="block text-[7px] sm:text-[8px] uppercase font-semibold text-[#77716A] font-raleway mt-0.5">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Interactive Pill */}
              <div className="mt-2.5 sm:mt-3.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141414] text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider font-raleway shadow-md">
                <span>Explore Project</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Bottom Bezel: Home Indicator Bar */}
        <div className="w-full flex items-center justify-center pt-1">
          <div className="w-20 sm:w-28 h-1 rounded-full bg-white/30" />
        </div>
      </div>
    </motion.div>
  );
}

// =========================================================================
// CARD 3: PROJECT DETAILS & READ MORE CARD
// =========================================================================
function DetailsCard({
  project,
  onOpenModal,
  isMobile,
}: {
  project: CaseStudy;
  onOpenModal: (caseStudy: CaseStudy) => void;
  isMobile: boolean;
}) {
  return (
    <motion.div
      initial={isMobile ? { opacity: 0, x: -45 } : { opacity: 0, y: 20 }}
      whileInView={isMobile ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: isMobile ? 0.4 : 0.5,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full h-auto py-6 sm:py-7 lg:py-8 px-6 sm:px-7 lg:px-8 lg:flex-1 rounded-[24px] sm:rounded-[32px] bg-[#B88746] text-white flex flex-col justify-between shadow-sm relative overflow-hidden group shrink-0"
    >
      {/* Subtle Ambient Radial Glow inside card */}
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 space-y-2 sm:space-y-2.5 pb-3">
        {/* Highlight Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-xs text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-white shadow-2xs font-raleway">
          <Sparkles className="w-3 h-3 text-white" />
          <span>{project.highlightStat.value} · {project.highlightStat.label}</span>
        </div>

        {/* Result-Led Title */}
        <h3 className="text-base sm:text-lg lg:text-[1.35rem] font-bold font-raleway leading-snug tracking-tight text-white pt-0.5">
          {project.title}
        </h3>

        {/* Paragraph Details */}
        <p className="text-xs sm:text-[13px] font-normal font-raleway leading-relaxed text-white/90">
          {project.oneLineResult}
        </p>
      </div>

      {/* Read More Button (Triggers Case Study Modal) */}
      <div className="relative z-10 pt-3 mt-1 border-t border-white/20 flex items-center justify-between">
        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white hover:text-white/80 transition-all font-raleway cursor-pointer py-1 group/btn"
        >
          <span>Read More</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>

        <span className="text-[10px] sm:text-[11px] font-semibold text-white/75 font-raleway">
          {project.snapshot.timeline}
        </span>
      </div>
    </motion.div>
  );
}

// =========================================================================
// MAIN EXPORT
// =========================================================================
export default function WorkProjectShowcase({
  caseStudies,
  onOpenModal,
}: WorkProjectShowcaseProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (caseStudies.length === 0) {
    return (
      <div className="w-full py-24 text-center select-none bg-[#FAF8F5]">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#77716A] font-raleway">
          No case studies match the selected filters.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FAF8F5] select-none">
      {caseStudies.map((project, idx) => {
        const isEven = idx % 2 === 0;

        return (
          <section
            key={project.id}
            id={`project-${project.slug}`}
            className="w-full h-auto min-h-0 py-8 sm:py-12 lg:py-0 lg:h-screen lg:max-h-screen lg:h-[100dvh] flex items-center justify-center p-4 sm:p-6 lg:p-10 border-b border-[#E8DED0] relative overflow-hidden"
          >
            {/* Subtle background ambient dot matrix */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(184, 135, 70, 0.25) 1.2px, transparent 1.2px)",
                backgroundSize: "28px 28px",
              }}
            />

            {/* ========================================================== */}
            {/* 1. MOBILE PHONE LAYOUT (< lg): Pure Vertical Stack        */}
            {/* Direct natural flow with space-y-5. No box wrapper issues */}
            {/* ========================================================== */}
            <div className="w-full flex flex-col space-y-5 lg:hidden relative z-10 px-0 sm:px-2">
              <LogoCard project={project} isMobile={true} />
              <TabletCard project={project} onOpenModal={onOpenModal} isMobile={true} />
              <DetailsCard project={project} onOpenModal={onOpenModal} isMobile={true} />
            </div>

            {/* ========================================================== */}
            {/* 2. DESKTOP PC LAYOUT (lg:): 100vh Alternating Stage        */}
            {/* ========================================================== */}
            <div
              className={`hidden lg:flex w-full max-w-[1440px] h-[88vh] ${
                isEven ? "flex-row" : "flex-row-reverse"
              } gap-6 items-stretch justify-center relative z-10`}
            >
              {/* Left Column (Logo Top + Details Bottom) */}
              <div className="w-[34%] flex flex-col gap-5 justify-between h-full shrink-0">
                <LogoCard project={project} isMobile={false} />
                <DetailsCard project={project} onOpenModal={onOpenModal} isMobile={false} />
              </div>

              {/* Right Column (Tablet Hero Visual) */}
              <div className="flex-1 h-full min-w-0">
                <TabletCard project={project} onOpenModal={onOpenModal} isMobile={false} />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
