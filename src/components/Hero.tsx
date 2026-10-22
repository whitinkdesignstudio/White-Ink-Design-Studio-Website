"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import WhyChooseUs from "@/components/WhyChooseUs";

interface HeroProps {
  isReady?: boolean;
}

export default function Hero({ isReady = true }: HeroProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  // Scroll tracking for the unified Hero + Services sticky stage
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // =========================================================================
  // BUBBLE REVEAL (Origin: Bottom-Center `50% 100%`)
  // As user starts scrolling (0.02 -> 0.22), the bubble grows from 0% to 160% radius,
  // unveiling the Services section directly inside the Hero viewport.
  // =========================================================================
  const bubbleRadius = useTransform(scrollYProgress, [0.02, 0.22], [0, 160]);
  const bubbleClipPath = useMotionTemplate`circle(${bubbleRadius}% at 50% 100%)`;
  const bubbleOpacity = useTransform(scrollYProgress, [0.01, 0.03], [0, 1]);
  const bubblePointerEvents = useTransform(scrollYProgress, (v) =>
    v > 0.05 ? "auto" : "none"
  );

  // Subtle Hero background parallax and fade as bubble blooms over it
  const heroContentOpacity = useTransform(scrollYProgress, [0.12, 0.24], [1, 0.15]);
  const heroContentScale = useTransform(scrollYProgress, [0, 0.24], [1, 0.94]);

  return (
    <div ref={trackRef} className="relative w-full bg-[#FAF8F5] select-none min-h-[480vh]">
      {/* Target anchor for navbar links to #services and #why-choose-us */}
      <div id="services" className="absolute top-[28%] pointer-events-none" />
      <div id="why-choose-us" className="absolute top-[28%] pointer-events-none" />

      {/* Sticky Fullscreen Stage */}
      <div className="sticky top-0 h-screen h-[100dvh] w-full overflow-hidden flex items-center justify-center bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* LAYER 1: HERO SECTION BASE CONTENT                                        */}
        {/* ========================================================================= */}
        <motion.div
          style={{ opacity: heroContentOpacity, scale: heroContentScale }}
          className="relative w-full h-full flex flex-col justify-center items-center px-6 pt-10 sm:pt-16 md:pt-28"
        >
          {/* BOTTOM-RIGHT FLUID WAVY RIBBONS (Fixed In Place, Static) */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isReady ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-1 -right-2 sm:bottom-0 sm:right-0 w-[80vw] sm:w-[65vw] md:w-[55vw] min-w-[340px] md:min-w-[380px] max-w-[850px] pointer-events-none z-0"
          >
            <svg
              viewBox="0 0 850 360"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto drop-shadow-md"
            >
              {/* Layer 1: Signature Golden Bronze Ribbon */}
              <path
                d="M 120 370 C 260 370 360 280 480 230 C 580 190 670 140 760 185 C 800 205 840 210 870 190 L 870 370 Z"
                fill="#B88746"
              />

              {/* Layer 2: Clean White Ribbon */}
              <path
                d="M 170 370 C 290 370 380 300 500 250 C 600 210 685 160 775 205 C 815 225 845 225 870 210 L 870 370 Z"
                fill="#FFFFFF"
              />

              {/* Layer 3: Obsidian Charcoal Ribbon */}
              <path
                d="M 230 370 C 330 370 410 320 520 270 C 620 230 700 180 790 225 C 825 242 850 240 870 230 L 870 370 Z"
                fill="#141414"
              />

              {/* Layer 4: Light Honey Bronze Ribbon */}
              <path
                d="M 300 370 C 380 370 450 340 550 290 C 645 250 720 205 810 245 C 840 258 855 255 870 250 L 870 370 Z"
                fill="#C59A58"
              />

              {/* Layer 5: Deep Amber Bronze Accent Base */}
              <path
                d="M 380 370 C 440 370 500 355 580 315 C 670 275 740 235 830 268 C 850 275 860 272 870 270 L 870 370 Z"
                fill="#9E7234"
              />
            </svg>
          </motion.div>

          {/* Subtle warm ambient center glow */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#B88746]/10 rounded-full blur-[140px]" />
          </div>

          {/* CENTER HERO CONTENT */}
          <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center justify-center pt-0 md:pt-6 -translate-y-3 sm:translate-y-0">
            {/* 1. "WHITE INK" HEADLINE */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isReady ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center"
            >
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-bold tracking-normal text-[#141414] uppercase font-raleway leading-none">
                WHITE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                  INK
                </span>
              </h1>
            </motion.div>

            {/* 2. "DESIGN STUDIO" WALI LINE (Delay: 0.15s) */}
            <motion.p
              initial={{ opacity: 0, y: 35 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-xs sm:text-base md:text-lg font-bold tracking-[0.25em] uppercase text-[#B88746] mt-3 font-raleway"
            >
              DESIGN STUDIO
            </motion.p>

            {/* 3. "WE CREATE SCROLL-STOPPING MAGIC" (Delay: 0.65s) */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.85, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 sm:mt-8 md:mt-12 max-w-4xl px-4"
            >
              <h2 className="text-[1.12rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-normal text-[#141414] font-raleway leading-tight">
                <span className="inline-block whitespace-nowrap">
                  WE CREATE{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                    SCROLL-STOPPING
                  </span>
                </span>
                <br className="sm:hidden" />{" "}
                <span className="relative inline-block text-[#141414] mt-1 sm:mt-0">
                  MAGIC
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] md:h-[4px] bg-[#B88746] rounded-full" />
                </span>
              </h2>
            </motion.div>

            {/* 4. BUTTON "Schedule A Call" (Delay: 1.35s) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.65, delay: 1.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 sm:mt-10 md:mt-12"
            >
              <a
                href="mailto:connect@whiteinkdesignstudio.com"
                className="inline-block px-10 py-3.5 md:px-12 md:py-4 rounded-md text-sm md:text-base font-bold uppercase tracking-wider text-white bg-[#141414] hover:bg-[#B88746] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl font-raleway"
              >
                Schedule A Call
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* ========================================================================= */}
        {/* LAYER 2: SERVICES SECTION REVEALED VIA BOTTOM-CENTER BUBBLE OVERLAY       */}
        {/* Expands directly inside the Hero viewport from bottom-center (50% 100%)    */}
        {/* ========================================================================= */}
        <motion.div
          style={{
            clipPath: bubbleClipPath,
            pointerEvents: bubblePointerEvents,
            opacity: bubbleOpacity,
          }}
          className="absolute inset-0 z-20 w-full h-full bg-[#F5EFE6] shadow-2xl flex items-center justify-center overflow-hidden"
        >
          <WhyChooseUs scrollYProgress={scrollYProgress} trackRef={trackRef} />
        </motion.div>
      </div>
    </div>
  );
}
