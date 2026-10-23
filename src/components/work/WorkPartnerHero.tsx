"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function WorkPartnerHero() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[100dvh] lg:h-screen lg:max-h-screen lg:h-[100dvh] bg-[#FAF8F5] text-[#141414] px-6 md:px-12 select-none overflow-hidden border-b border-[#E8DED0] flex flex-col justify-center items-center">
      {/* Subtle Dot Matrix Grid Pattern (White Ink Signature Aesthetic) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(184, 135, 70, 0.25) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 80%, transparent 100%)",
        }}
      />

      {/* Warm Ambient Center Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#B88746]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Centered Content (100% Height & Width Centered on Mobile & PC) */}
      <div className="max-w-5xl mx-auto w-full relative z-10 flex flex-col items-center justify-center text-center px-4 my-auto">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DED0] text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#B88746] shadow-2xs font-raleway">
            <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
            <span>Portfolio & Partnership</span>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* MAIN HEADLINE                                                             */}
        {/* Mobile: Line 1: "What being a" | Line 2: "partner" | Line 3: "looks like" */}
        {/* Desktop: Line 1: "What being a [partner]" | Line 2: "looks like"          */}
        {/* ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="w-full"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] lg:leading-[72px] font-bold text-[#141414] font-raleway tracking-tight text-center">
            {/* Desktop (sm:) Layout: 2 lines */}
            <span className="hidden sm:inline-block whitespace-nowrap">
              <span>What being a</span>{" "}
              <span className="inline-flex items-center justify-center px-4 sm:px-6 py-0.5 sm:py-1 rounded-full border border-[#B88746] sm:border-[2px] text-[#141414] bg-white/70 shadow-2xs font-semibold sm:font-medium font-raleway mx-1.5 sm:mx-2.5 align-middle">
                partner
              </span>
            </span>

            {/* Mobile (< sm) Layout: Exactly 3 lines */}
            <span className="sm:hidden block">
              <span className="block">What being a</span>
              <span className="inline-flex items-center justify-center px-5 py-1 my-2 rounded-full border border-[#B88746] text-[#141414] bg-white/70 shadow-2xs font-semibold font-raleway">
                partner
              </span>
            </span>

            {/* Final Line: looks like */}
            <span className="block mt-1 sm:mt-3">
              looks like
            </span>
          </h1>
        </motion.div>

        {/* ========================================================================= */}
        {/* SUBTITLE PARAGRAPH                                                        */}
        {/* ========================================================================= */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="text-[17px] sm:text-[18px] sm:leading-[23.4px] text-[#77716A] font-medium font-raleway max-w-2xl mx-auto mt-5 sm:mt-8 px-2 text-center leading-relaxed"
        >
          This is data. This is technology. This is creativity. And when it all comes together seamlessly, this is what happens.
        </motion.p>
      </div>
    </section>
  );
}
