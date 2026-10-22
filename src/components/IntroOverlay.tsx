"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  // Step 0: Circular loader with White Ink logo inside (0s - 1.4s)
  // Step 1: 25 flowing ribbons sweeping across (1.4s - 2.8s) - no heading yet
  // Step 2: "WHITE INK" zooms out smoothly from massive scale into place (2.8s - 4.2s)
  // Step 3: Finished, unmounts cleanly
  const [step, setStep] = useState<number>(0);

  // Generate 25 thicker flowing ribbon stream paths
  const ribbons = useMemo(() => {
    const colors = [
      "#B88746", // Signature Golden Bronze
      "#141414", // Obsidian Charcoal
      "#C59A58", // Light Honey Bronze
      "#FFFFFF", // Clean White
      "#FAF8F5", // Warm Porcelain Cream
      "#9E7234", // Deep Amber Bronze
      "#E8E3DA", // Soft Warm Stone
      "#2A2620", // Deep Warm Espresso
    ];

    return Array.from({ length: 25 }, (_, i) => {
      const y = (i / 24) * 880;
      const waveHeight = (i % 2 === 0 ? 1 : -1) * (45 + (i % 4) * 18);
      const waveHeight2 = (i % 3 === 0 ? -1 : 1) * (50 + (i % 3) * 20);
      const thickness = 22 + (i % 5) * 8; // Mota ribbons (22px to 54px thick)
      const color = colors[i % colors.length];
      const delay = i * 0.04; // Staggered fluid wave timing
      const duration = 1.6 + (i % 4) * 0.15;

      const pathData = `M -250 ${y} C 250 ${y + waveHeight} 650 ${y + waveHeight2} 1100 ${y - waveHeight} C 1350 ${y + waveHeight2} 1500 ${y} 1750 ${y} L 1750 ${y + thickness} C 1500 ${y + thickness} 1350 ${y + waveHeight2 + thickness} 1100 ${y - waveHeight + thickness} C 650 ${y + waveHeight2 + thickness} 250 ${y + waveHeight + thickness} -250 ${y + thickness} Z`;

      return { id: i, pathData, color, delay, duration, y };
    });
  }, []);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(3);
      onComplete();
      return;
    }

    // Step 0: Circular loader with logo (0s - 1.4s)
    const t1 = setTimeout(() => {
      setStep(1); // 25 flowing ribbons begin (no heading yet)
    }, 1400);

    // Step 1: Ribbons sweep across screen (1.4s - 2.8s)
    const t2 = setTimeout(() => {
      setStep(2); // "WHITE INK" zooms out smoothly from massive scale
    }, 2800);

    // Step 2: "WHITE INK" zoom-out completes (2.8s - 4.2s)
    const t3 = setTimeout(() => {
      setStep(3); // Finished! Calls onComplete()
      onComplete();
    }, 4200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  if (step === 3) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden bg-[#000000]"
      >
        {/* ========================================================================= */}
        {/* STEP 0: BIG CIRCULAR LOADER WITH LOGO INSIDE (0s - 1.4s)                  */}
        {/* ========================================================================= */}
        {step === 0 && (
          <motion.div
            key="step-loader-with-logo"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-center bg-[#000000]"
          >
            {/* Big Elegant Circular Animated Ring Frame */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center">
              {/* Outer soft glowing background ring */}
              <div className="absolute inset-0 rounded-full border border-white/10" />

              {/* Primary Clockwise Spinning Gradient Arc */}
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#B88746] border-r-[#C59A58] animate-spin-slow"
                style={{ animationDuration: "1.8s" }}
              />

              {/* Counter-Clockwise Inner Accent Arc */}
              <div
                className="absolute inset-2.5 rounded-full border-2 border-transparent border-b-[#9E7234] border-l-[#FAF8F5] animate-spin-slow"
                style={{ animationDirection: "reverse", animationDuration: "2.4s" }}
              />

              {/* Third delicate spinning dotted ring */}
              <div
                className="absolute inset-5 rounded-full border border-dashed border-[#B88746]/40 animate-spin-slow"
                style={{ animationDuration: "6s" }}
              />

              {/* White Ink Logo Placed INSIDE the Big Circular Ring */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative z-10 w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 rounded-full bg-white flex items-center justify-center p-3 shadow-2xl border border-[#B88746]/30"
              >
                <img
                  src="/logo.png"
                  alt="White Ink Design Studio"
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="mt-6 text-[10px] sm:text-xs font-black uppercase tracking-[0.35em] text-[#FAF8F5]/80 font-heading"
            >
              Inking Your Brand
            </motion.p>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* STEP 1: 25 THICKER FLOWING RIBBONS (1.4s - 2.8s)                          */}
        {/* Heading is NOT visible yet — ONLY flowing ribbon waves sweep across!       */}
        {/* ========================================================================= */}
        {step === 1 && (
          <motion.div
            key="step-25-water-strips"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.9, transition: { duration: 0.3 } }}
            className="absolute inset-0 w-full h-full overflow-hidden bg-[#000000]"
          >
            <svg
              viewBox="0 0 1440 900"
              preserveAspectRatio="none"
              className="w-full h-full"
              fill="none"
            >
              {ribbons.map((ribbon) => (
                <motion.path
                  key={ribbon.id}
                  d={ribbon.pathData}
                  fill={ribbon.color}
                  initial={{ x: "-110%", opacity: 0.88 }}
                  animate={{
                    x: ["-110%", "0%", "110%"],
                    opacity: [0.88, 1, 0.88],
                  }}
                  transition={{
                    duration: ribbon.duration,
                    delay: ribbon.delay,
                    ease: [0.77, 0, 0.175, 1],
                    times: [0, 0.5, 1],
                  }}
                />
              ))}
            </svg>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* STEP 2: "WHITE INK" ZOOMS OUT SMOOTHLY FROM MASSIVE SCALE (2.8s - 4.2s)   */}
        {/* Zooming smoothly out from close-up into its exact center hero location   */}
        {/* ========================================================================= */}
        {step === 2 && (
          <motion.div
            key="step-heading-zoom-out"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.3 } }}
            className="absolute inset-0 flex flex-col items-center justify-center pt-4 md:pt-6 px-6 bg-[#FAF8F5]"
          >
            {/* Ambient center warm bronze glow behind typography */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="w-[650px] h-[650px] bg-[#B88746] rounded-full blur-[140px]"
              />
            </div>

            {/* Smooth Zoom-Out of "WHITE INK" into its Exact Hero Place */}
            <motion.div
              initial={{
                scale: 8.5,
                opacity: 0.8,
                filter: "blur(12px)",
              }}
              animate={{
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 1.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 flex flex-col items-center text-center select-none"
            >
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-black tracking-tighter text-[#141414] uppercase font-heading leading-none">
                WHITE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                  INK
                </span>
              </h1>
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
