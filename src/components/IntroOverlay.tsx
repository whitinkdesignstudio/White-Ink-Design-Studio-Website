"use client";

import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getAssetPath } from "@/utils/basePath";

interface IntroOverlayProps {
  onComplete: () => void;
}

export default function IntroOverlay({ onComplete }: IntroOverlayProps) {
  // Step 0: Fast Logo Loader with Cosmic Warp (0s - 1.2s)
  // Step 1: Smooth "WHITE INK" typography zoom-out into Hero (1.2s - 2.0s)
  // Step 2: Finished, unmounts cleanly
  const [step, setStep] = useState<number>(0);

  // 48 Cosmic particles zooming outward fast towards the user
  const cosmicWarpParticles = useMemo(() => {
    const starColors = ["#B88746", "#C59A58", "#FAF8F5", "#D4AF37", "#9E7234", "#FFFFFF"];
    return Array.from({ length: 48 }, (_, i) => {
      const angle = (i * 137.5 * Math.PI) / 180;
      const distance = 450 + (i % 6) * 110;
      const targetX = Math.cos(angle) * distance;
      const targetY = Math.sin(angle) * (distance * 0.75);
      const size = 3 + (i % 4) * 2.5;
      const maxScale = 2.8 + (i % 3) * 1.2;
      const delay = (i % 12) * 0.08;
      const duration = 1.0 + (i % 5) * 0.15;
      const color = starColors[i % starColors.length];
      const isDiamond = i % 3 === 0;

      return {
        id: i,
        targetX,
        targetY,
        size,
        maxScale,
        delay,
        duration,
        color,
        isDiamond,
      };
    });
  }, []);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setStep(2);
      onComplete();
      return;
    }

    // Step 0: Fast snappy Logo Loader (1.2s)
    const t1 = setTimeout(() => {
      setStep(1); // "WHITE INK" zooms out smoothly into hero
    }, 1200);

    // Step 1: Zoom-out completes at 2.0s
    const t2 = setTimeout(() => {
      setStep(2); // Finished! Calls onComplete()
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  if (step === 2) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="intro-overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-0 z-50 pointer-events-none select-none overflow-hidden bg-[#FAF8F5]"
      >
        {/* ========================================================================= */}
        {/* STEP 0: FAST & SNAPPY COSMIC LOGO LOADER (0s - 1.2s)                      */}
        {/* ========================================================================= */}
        {step === 0 && (
          <motion.div
            key="step-cosmic-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.25 } }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-[#FAF8F5] overflow-hidden"
          >
            {/* Background Dot Matrix Pattern */}
            <div
              className="absolute inset-0 pointer-events-none opacity-25"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(184, 135, 70, 0.25) 1.2px, transparent 1.2px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Ambient Warm Golden Center Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B88746]/18 rounded-full blur-[140px] pointer-events-none" />

            {/* Expanding Cosmic Light Shockwaves */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 flex items-center justify-center pointer-events-none">
              {[0, 1, 2, 3].map((ringIdx) => (
                <motion.div
                  key={`cosmic-ring-${ringIdx}`}
                  initial={{ scale: 0.2, opacity: 0.8 }}
                  animate={{
                    scale: [0.2, 1.8, 3.8],
                    opacity: [0.8, 0.4, 0],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: ringIdx * 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute w-56 h-56 rounded-full border border-[#B88746]/45"
                  style={{
                    boxShadow: "0 0 25px rgba(184, 135, 70, 0.25)",
                  }}
                />
              ))}

              {/* 48 Cosmic Stars & Light Particles Zooming from Center Outward */}
              {cosmicWarpParticles.map((p) => (
                <motion.div
                  key={`particle-${p.id}`}
                  initial={{ x: 0, y: 0, scale: 0.1, opacity: 0 }}
                  animate={{
                    x: [0, p.targetX],
                    y: [0, p.targetY],
                    scale: [0.1, 1, p.maxScale],
                    opacity: [0, 0.95, 0],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    delay: p.delay,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="absolute flex items-center justify-center"
                >
                  {p.isDiamond ? (
                    <svg
                      width={p.size * 2.8}
                      height={p.size * 2.8}
                      viewBox="0 0 24 24"
                      fill={p.color}
                      className="drop-shadow-[0_0_8px_rgba(184,135,70,0.6)]"
                    >
                      <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
                    </svg>
                  ) : (
                    <div
                      className="rounded-full shadow-[0_0_10px_2px_rgba(184,135,70,0.5)]"
                      style={{
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* DEAD-CENTER EMBLEM: MULTI-RING LOADER WITH WHITE INK LOGO */}
            <div className="relative z-20 flex flex-col items-center justify-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 flex items-center justify-center">
                {/* Outer soft glowing background ring */}
                <div className="absolute inset-0 rounded-full border border-[#B88746]/30 shadow-[0_0_30px_rgba(184,135,70,0.2)]" />

                {/* Primary Clockwise Spinning Gradient Arc (Fast 1.0s) */}
                <div
                  className="absolute inset-0 rounded-full border-[2.5px] border-transparent border-t-[#B88746] border-r-[#C59A58] animate-spin-slow shadow-[0_0_20px_rgba(184,135,70,0.4)]"
                  style={{ animationDuration: "1.0s" }}
                />

                {/* Counter-Clockwise Inner Accent Arc (Fast 1.4s) */}
                <div
                  className="absolute inset-2.5 rounded-full border-2 border-transparent border-b-[#9E7234] border-l-[#C59A58]/70 animate-spin-slow"
                  style={{ animationDirection: "reverse", animationDuration: "1.4s" }}
                />

                {/* Third delicate spinning dotted ring */}
                <div
                  className="absolute inset-5 rounded-full border border-dashed border-[#B88746]/40 animate-spin-slow"
                  style={{ animationDuration: "3.5s" }}
                />

                {/* Elevated Pure White Luxury Disc with White Ink Logo */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="relative z-10 w-26 sm:w-30 md:w-34 h-26 sm:h-30 md:h-34 rounded-full bg-white flex items-center justify-center p-3.5 sm:p-4 shadow-[0_16px_45px_rgba(184,135,70,0.25)] border-2 border-[#FAF8F5]"
                >
                  <img
                    src={getAssetPath("/logo.png")}
                    alt="White Ink Design Studio"
                    className="w-full h-full object-contain filter drop-shadow-sm"
                  />
                </motion.div>
              </div>

              {/* Subtitle Pill under Loader */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                className="mt-6 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-[#E8DED0] shadow-sm backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88746] animate-ping" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#141414] font-raleway">
                  Inking Your Brand
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ========================================================================= */}
        {/* STEP 1: "WHITE INK" ZOOMS OUT SMOOTHLY FROM MASSIVE SCALE (1.2s - 2.0s)   */}
        {/* ========================================================================= */}
        {step === 1 && (
          <motion.div
            key="step-heading-zoom-out"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center pt-4 md:pt-6 px-6 bg-[#FAF8F5]"
          >
            {/* Ambient center warm bronze glow behind typography */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.15 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-[650px] h-[650px] bg-[#B88746] rounded-full blur-[140px]"
              />
            </div>

            {/* Smooth Zoom-Out of "WHITE INK" into its Exact Hero Place */}
            <motion.div
              initial={{
                scale: 6.5,
                opacity: 0.8,
                filter: "blur(10px)",
              }}
              animate={{
                scale: 1,
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 flex flex-col items-center text-center select-none"
            >
              <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] font-normal tracking-normal text-[#141414] uppercase font-raleway leading-none">
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
