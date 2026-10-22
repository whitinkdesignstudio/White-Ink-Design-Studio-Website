"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

export default function VisionMission() {
  const [activeSide, setActiveSide] = useState<"vision" | "mission" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  return (
    <section
      ref={containerRef}
      id="vision-mission"
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen bg-[#FAF8F5] text-[#141414] px-6 md:px-12 py-10 lg:py-0 flex flex-col justify-center overflow-hidden select-none border-t border-[#E8DED0]"
    >
      {/* Background Dot Matrix Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(rgba(184, 135, 70, 0.25) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
        }}
      />

      {/* Interactive Mouse-Following Warm Lens Flare */}
      <motion.div
        animate={{
          x: mousePos.x * 300 - 150,
          y: mousePos.y * 200 - 100,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 80 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-7xl w-full mx-auto relative z-10 my-auto flex flex-col justify-center">
        {/* ========================================================================= */}
        {/* SECTION HEADER: BESPOKE EDITORIAL TYPOGRAPHY                              */}
        {/* ========================================================================= */}
        <div className="mb-6 lg:mb-10 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-[#B88746] mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#B88746] animate-pulse" />
            <span>Studio Philosophy // 01</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#141414] font-heading leading-tight">
            The Purpose That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
              Drives Our Ink
            </span>
          </h2>
        </div>

        {/* ========================================================================= */}
        {/* FULL ANIMATED DUAL-HORIZON STAGE (NO CARDS, PURE KINETIC ARCHITECTURE)    */}
        {/* ========================================================================= */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
          {/* Central Architectural Glowing Filament with Rotating Orbital Rings (Desktop) */}
          <div className="hidden lg:flex absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex-col items-center justify-center pointer-events-none z-20">
            {/* Top filament line */}
            <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-[#B88746]/35 to-transparent relative">
              {/* Central Pulsing Golden Orbital Ring */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center">
                <div className="absolute w-11 h-11 rounded-full border border-dashed border-[#B88746]/60 animate-spin-slow" />
                <div className="absolute w-6 h-6 rounded-full border border-[#B88746] animate-ping opacity-25" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#B88746] shadow-[0_0_12px_#B88746]" />
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* LEFT WING: THE VISION (Interactive Open Canvas)                           */}
          {/* ========================================================================= */}
          <div
            onMouseEnter={() => setActiveSide("vision")}
            onMouseLeave={() => setActiveSide(null)}
            className="lg:col-span-6 relative flex flex-col justify-between py-2 lg:py-4 lg:pr-12 transition-all duration-500 group"
          >
            {/* Giant Wireframe Watermark Number */}
            <div className="absolute -top-8 -left-4 text-7xl sm:text-8xl lg:text-9xl font-black font-heading text-[#B88746]/[0.07] pointer-events-none select-none transition-transform duration-700 group-hover:scale-105 group-hover:text-[#B88746]/[0.12]">
              01
            </div>

            {/* Glowing Accent Aura on Hover */}
            <div
              className={`absolute inset-0 -m-4 rounded-3xl bg-gradient-to-br from-[#B88746]/[0.07] via-transparent to-transparent transition-opacity duration-500 pointer-events-none ${
                activeSide === "vision" ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="relative z-10 space-y-3 sm:space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest uppercase text-[#B88746] bg-white/80 px-2.5 py-0.5 rounded-full border border-[#E8DED0] shadow-sm">
                <span>[ THE NORTH STAR ]</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#141414] font-heading group-hover:text-[#9E7234] transition-colors duration-300">
                The Vision
              </h3>

              {/* Core Statement (Large Bold Editorial) */}
              <p className="text-base sm:text-lg lg:text-xl font-serif text-[#141414] leading-snug font-normal">
                To make the invisible visible. In a world saturated with generic templates, we
                engineer the background where ambitious brands become{" "}
                <span className="text-[#B88746] font-semibold italic">impossible to ignore</span>.
              </p>

              {/* Philosophy Narrative */}
              <p className="text-xs sm:text-sm text-[#77716A] font-normal leading-relaxed">
                White ink cannot be seen until it meets the right surface. We find that surface for
                healthcare institutions and D2C pioneers—translating clinical depth and product craft
                into cultural distinction and lasting enterprise value.
              </p>
            </div>

            {/* Interactive Bottom Anchor */}
            <div className="relative z-10 pt-4 mt-4 border-t border-[#E8DED0]/80 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#77716A] font-semibold">
                Category // Distinction & Legacy
              </span>
              <span className="w-2 h-2 rounded-full bg-[#B88746] transition-transform duration-300 group-hover:scale-125" />
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT WING: THE MISSION (Interactive Open Canvas)                          */}
          {/* ========================================================================= */}
          <div
            onMouseEnter={() => setActiveSide("mission")}
            onMouseLeave={() => setActiveSide(null)}
            className="lg:col-span-6 relative flex flex-col justify-between py-2 lg:py-4 lg:pl-12 transition-all duration-500 group"
          >
            {/* Giant Wireframe Watermark Number */}
            <div className="absolute -top-8 -left-4 lg:left-6 text-7xl sm:text-8xl lg:text-9xl font-black font-heading text-[#9E7234]/[0.07] pointer-events-none select-none transition-transform duration-700 group-hover:scale-105 group-hover:text-[#9E7234]/[0.12]">
              02
            </div>

            {/* Glowing Accent Aura on Hover */}
            <div
              className={`absolute inset-0 -m-4 rounded-3xl bg-gradient-to-bl from-[#9E7234]/[0.07] via-transparent to-transparent transition-opacity duration-500 pointer-events-none ${
                activeSide === "mission" ? "opacity-100" : "opacity-0"
              }`}
            />

            <div className="relative z-10 space-y-3 sm:space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-widest uppercase text-[#9E7234] bg-white/80 px-2.5 py-0.5 rounded-full border border-[#E8DED0] shadow-sm">
                <span>[ THE EXECUTION ENGINE ]</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#141414] font-heading group-hover:text-[#B88746] transition-colors duration-300">
                The Mission
              </h3>

              {/* Core Statement (Large Bold Editorial) */}
              <p className="text-base sm:text-lg lg:text-xl font-serif text-[#141414] leading-snug font-normal">
                To unite disciplined aesthetic craft with{" "}
                <span className="text-[#9E7234] font-semibold italic">conversion-engineered code</span>.
                Zero handoff gap between strategic vision and live execution.
              </p>

              {/* Philosophy Narrative */}
              <p className="text-xs sm:text-sm text-[#77716A] font-normal leading-relaxed">
                We eliminate the traditional friction between creative studios and performance marketers.
                One senior founder-led team guiding your brand from identity tokens and custom Next.js/Shopify
                builds to compliant Meta ad funnels and automated AI lead routing.
              </p>
            </div>

            {/* Interactive Bottom Anchor */}
            <div className="relative z-10 pt-4 mt-4 border-t border-[#E8DED0]/80 flex items-center justify-between">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#77716A] font-semibold">
                Execution // Sub-Second & Revenue-Tied
              </span>
              <span className="w-2 h-2 rounded-full bg-[#9E7234] transition-transform duration-300 group-hover:scale-125" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
