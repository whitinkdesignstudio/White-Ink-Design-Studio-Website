"use client";

import { useRef, useState, useMemo } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface StepItem {
  id: string;
  number: string;
  numColor: string;
  titlePrefix: string;
  titleSuffix: string;
  suffixGradient: string;
  description: string;
  colorHex: string;
}

const processSteps: StepItem[] = [
  {
    id: "discover",
    number: "1",
    numColor: "text-[#B88746]",
    titlePrefix: "Discov",
    titleSuffix: "er",
    suffixGradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]",
    description:
      "Every project begins with a conversation, then a written scope: what we will design, what it costs, and when it will be ready. A focused 20-minute alignment call and thorough brand audit so the figure agreed here is the figure invoiced.",
    colorHex: "#B88746",
  },
  {
    id: "design",
    number: "2",
    numColor: "text-[#9E7234]",
    titlePrefix: "Desi",
    titleSuffix: "gn",
    suffixGradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#C59A58] to-[#9E7234]",
    description:
      "From brand tokens and typography to intuitive user flows and high-fidelity Figma components. Every element is bespoke, tested for accessibility, and designed to inspire trust before a single line of code is written.",
    colorHex: "#9E7234",
  },
  {
    id: "build",
    number: "3",
    numColor: "text-[#C59A58]",
    titlePrefix: "Bui",
    titleSuffix: "ld",
    suffixGradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#C59A58]",
    description:
      "Clean Next.js or custom Shopify Liquid engineering. We prioritize sub-second load times, mobile responsiveness, structured JSON-LD schemas, and rock-solid CRM and WhatsApp integrations.",
    colorHex: "#C59A58",
  },
  {
    id: "grow",
    number: "4",
    numColor: "text-[#D4AF37]",
    titlePrefix: "Gr",
    titleSuffix: "ow",
    suffixGradient: "text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#C59A58] to-[#B88746]",
    description:
      "We don't disappear after launch. We run compliant Meta & Google Ads, optimize conversion rates, deploy wink'AI WhatsApp automation, and provide transparent monthly KPI dashboards that hold our work accountable.",
    colorHex: "#D4AF37",
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Track scroll progression across this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Synchronize active step with scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.22) {
      setActiveStepIndex(0);
    } else if (latest < 0.55) {
      setActiveStepIndex(1);
    } else if (latest < 0.82) {
      setActiveStepIndex(2);
    } else {
      setActiveStepIndex(3);
    }
  });

  // Step 0 (Discover): Starts in place, slides up and fades out as Step 1 enters
  const step0Y = useTransform(scrollYProgress, [0.12, 0.28], ["0%", "-40%"]);
  const step0Opacity = useTransform(scrollYProgress, [0.12, 0.28], [1, 0]);

  // Step 1 (Design): Enters from bottom up into Step 0's place, then slides up & fades out
  const step1Y = useTransform(
    scrollYProgress,
    [0.12, 0.28, 0.45, 0.61],
    ["50%", "0%", "0%", "-40%"]
  );
  const step1Opacity = useTransform(
    scrollYProgress,
    [0.12, 0.28, 0.45, 0.61],
    [0, 1, 1, 0]
  );

  // Step 2 (Build): Enters from bottom up into Step 1's place, then slides up & fades out
  const step2Y = useTransform(
    scrollYProgress,
    [0.45, 0.61, 0.78, 0.94],
    ["50%", "0%", "0%", "-40%"]
  );
  const step2Opacity = useTransform(
    scrollYProgress,
    [0.45, 0.61, 0.78, 0.94],
    [0, 1, 1, 0]
  );

  // Step 3 (Grow): Enters from bottom up into Step 2's place and settles
  const step3Y = useTransform(scrollYProgress, [0.78, 0.94], ["50%", "0%"]);
  const step3Opacity = useTransform(scrollYProgress, [0.78, 0.94], [0, 1]);

  const stepTransforms = [
    { y: step0Y, opacity: step0Opacity },
    { y: step1Y, opacity: step1Opacity },
    { y: step2Y, opacity: step2Opacity },
    { y: step3Y, opacity: step3Opacity },
  ];

  // Mouse move handler with high responsiveness
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  // 30 Interactive floating particle dots in the bottom half of the stage
  const particleDots = useMemo(
    () => [
      { id: 1, x: 8, y: 54, size: 5, speed: 45, opacity: 0.75, stagger: 2 },
      { id: 2, x: 15, y: 72, size: 7, speed: 30, opacity: 0.85, stagger: 5 },
      { id: 3, x: 12, y: 88, size: 4, speed: 55, opacity: 0.6, stagger: 8 },
      { id: 4, x: 22, y: 58, size: 6, speed: 38, opacity: 0.8, stagger: 1 },
      { id: 5, x: 28, y: 78, size: 5, speed: 58, opacity: 0.65, stagger: 10 },
      { id: 6, x: 35, y: 64, size: 8, speed: 28, opacity: 0.9, stagger: 3 },
      { id: 7, x: 42, y: 86, size: 5, speed: 42, opacity: 0.7, stagger: 7 },
      { id: 8, x: 48, y: 56, size: 6, speed: 52, opacity: 0.8, stagger: 4 },
      { id: 9, x: 55, y: 74, size: 4, speed: 34, opacity: 0.6, stagger: 12 },
      { id: 10, x: 62, y: 90, size: 7, speed: 45, opacity: 0.85, stagger: 9 },
      { id: 11, x: 68, y: 60, size: 5, speed: 38, opacity: 0.75, stagger: 6 },
      { id: 12, x: 75, y: 76, size: 6, speed: 56, opacity: 0.8, stagger: 11 },
      { id: 13, x: 82, y: 56, size: 4, speed: 32, opacity: 0.55, stagger: 2 },
      { id: 14, x: 88, y: 84, size: 7, speed: 44, opacity: 0.9, stagger: 8 },
      { id: 15, x: 94, y: 65, size: 5, speed: 36, opacity: 0.7, stagger: 5 },
      { id: 16, x: 18, y: 64, size: 6, speed: 48, opacity: 0.75, stagger: 4 },
      { id: 17, x: 25, y: 82, size: 4, speed: 35, opacity: 0.65, stagger: 9 },
      { id: 18, x: 32, y: 54, size: 5, speed: 42, opacity: 0.7, stagger: 1 },
      { id: 19, x: 38, y: 92, size: 7, speed: 30, opacity: 0.85, stagger: 13 },
      { id: 20, x: 45, y: 70, size: 4, speed: 55, opacity: 0.6, stagger: 7 },
      { id: 21, x: 52, y: 85, size: 6, speed: 40, opacity: 0.8, stagger: 10 },
      { id: 22, x: 58, y: 52, size: 5, speed: 46, opacity: 0.7, stagger: 3 },
      { id: 23, x: 65, y: 68, size: 8, speed: 32, opacity: 0.9, stagger: 6 },
      { id: 24, x: 72, y: 68, size: 4, speed: 56, opacity: 0.55, stagger: 12 },
      { id: 25, x: 78, y: 88, size: 6, speed: 38, opacity: 0.75, stagger: 8 },
      { id: 26, x: 85, y: 72, size: 5, speed: 50, opacity: 0.7, stagger: 4 },
      { id: 27, x: 91, y: 58, size: 4, speed: 28, opacity: 0.5, stagger: 2 },
      { id: 28, x: 30, y: 72, size: 5, speed: 48, opacity: 0.7, stagger: 7 },
      { id: 29, x: 50, y: 62, size: 7, speed: 38, opacity: 0.85, stagger: 5 },
      { id: 30, x: 70, y: 82, size: 4, speed: 52, opacity: 0.6, stagger: 11 },
    ],
    []
  );

  const activeColor = processSteps[activeStepIndex].colorHex;

  return (
    <div
      ref={containerRef}
      id="process"
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#FAF8F5] text-[#141414] min-h-[420vh] select-none border-t border-[#E8DED0]"
    >
      {/* Sticky Viewport Stage: Completely Open, No Card Box */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center px-6 md:px-12 overflow-hidden bg-[#FAF8F5]">
        {/* ========================================================================= */}
        {/* UPPER GRADIENT ATMOSPHERE (Dynamically follows the active step color)      */}
        {/* ========================================================================= */}
        <motion.div
          animate={{
            background: `radial-gradient(ellipse 90% 60% at 50% 0%, ${activeColor}33 0%, ${activeColor}15 40%, transparent 80%)`,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 right-0 h-[55vh] pointer-events-none z-0"
        />

        {/* Ambient Top Light Spot */}
        <motion.div
          animate={{
            backgroundColor: activeColor,
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[750px] h-[300px] rounded-full blur-[140px] opacity-25 pointer-events-none z-0"
        />

        {/* Subtle dot matrix grid pattern in the background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 z-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(184, 135, 70, 0.22) 1.2px, transparent 1.2px)",
            backgroundSize: "26px 26px",
            maskImage:
              "linear-gradient(to right, black 0%, transparent 35%, transparent 65%, black 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 0%, transparent 35%, transparent 65%, black 100%)",
          }}
        />

        {/* ========================================================================= */}
        {/* INTERACTIVE PARTICLES WITH UPWARD OSCILLATING WAVE TRANSITION ON CHANGE   */}
        {/* ========================================================================= */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 w-full h-full pointer-events-none"
            >
              {particleDots.map((dot) => {
                const waveOffset = dot.id % 2 === 0 ? 35 : -35;

                return (
                  <motion.div
                    key={dot.id}
                    variants={{
                      initial: {
                        y: 350,
                        x: 0,
                        opacity: 0,
                        scale: 0.3,
                      },
                      animate: {
                        y: 0,
                        x: 0,
                        opacity: dot.opacity,
                        scale: 1,
                        transition: {
                          duration: 0.8,
                          delay: dot.stagger * 0.02,
                          ease: [0.16, 1, 0.3, 1],
                        },
                      },
                      exit: {
                        y: -850,
                        x: [0, waveOffset, -waveOffset, waveOffset * 0.5, 0],
                        opacity: [dot.opacity, dot.opacity * 0.85, 0],
                        scale: [1, 1.25, 0.4],
                        transition: {
                          duration: 0.85,
                          delay: dot.stagger * 0.015,
                          ease: [0.36, 0, 0.66, 0],
                        },
                      },
                    }}
                    style={
                      {
                        left: `${dot.x}%`,
                        "--dot-top-mob": `${82 + (dot.y - 50) * 0.28}%`,
                        "--dot-top-dt": `${dot.y}%`,
                      } as React.CSSProperties
                    }
                    className="absolute top-[var(--dot-top-mob)] md:top-[var(--dot-top-dt)]"
                  >
                    {/* Highly Sensitive Mouse Interaction Container (x5.8 Multiplier) */}
                    <motion.div
                      animate={{
                        x: mousePos.x * dot.speed * 5.8,
                        y: mousePos.y * dot.speed * 5.8,
                      }}
                      transition={{
                        type: "spring",
                        damping: 16,
                        stiffness: 150,
                        mass: 0.45,
                      }}
                      style={{
                        width: `${dot.size}px`,
                        height: `${dot.size}px`,
                        backgroundColor: activeColor,
                        boxShadow: `0 0 12px 2px ${activeColor}99`,
                      }}
                      className="rounded-full"
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================================= */}
        {/* MAIN SECTION HEADER                                                       */}
        {/* ========================================================================= */}
        <div className="relative z-10 mb-14 sm:mb-16 md:mb-20 text-center">
          <motion.h2
            animate={{
              textShadow: `0 4px 24px ${activeColor}30`,
            }}
            transition={{ duration: 0.8 }}
            className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-normal text-[#141414] font-raleway leading-tight"
          >
            How We Work
          </motion.h2>
        </div>

        {/* ========================================================================= */}
        {/* OPEN STAGE FOR STEP SUB-SECTIONS                                          */}
        {/* ========================================================================= */}
        <div className="relative w-full max-w-3xl mx-auto h-[290px] sm:h-[310px] md:h-[330px] flex items-center justify-center z-10">
          {processSteps.map((step, idx) => {
            const transform = stepTransforms[idx];

            return (
              <motion.div
                key={step.id}
                style={{
                  y: transform.y,
                  opacity: transform.opacity,
                }}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-center px-4"
              >
                {/* Step Number matching Raleway specification */}
                <div
                  className={`text-4xl sm:text-5xl md:text-6xl font-bold font-raleway tracking-normal mb-1.5 sm:mb-2 ${step.numColor} drop-shadow-sm`}
                >
                  {step.number}
                </div>

                {/* Step Title matching exact Raleway specification */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-normal font-raleway leading-tight mb-3 sm:mb-4">
                  <span className="text-[#141414]">{step.titlePrefix}</span>
                  <span className={step.suffixGradient}>{step.titleSuffix}</span>
                </h3>

                {/* Step Description Paragraph */}
                <p className="text-sm sm:text-base md:text-lg text-[#77716A] leading-relaxed font-normal max-w-2xl mx-auto">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
