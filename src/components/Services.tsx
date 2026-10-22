"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Layers,
  Monitor,
  Package,
  TrendingUp,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "strategy",
    number: "01",
    title: "Brand Strategy & Ideation",
    shortDesc: "Market positioning, consumer psychology, brand architecture, and narrative design.",
    icon: Compass,
    deliverables: [
      "Competitive Landscape Analysis",
      "Core Value & Mission Formulation",
      "Brand Persona & Tone of Voice",
      "Go-To-Market Strategic Roadmap",
    ],
    tag: "FOUNDATION",
    metric: "100% Tailored Alignment",
  },
  {
    id: "identity",
    number: "02",
    title: "Logo & Visual Identity",
    shortDesc: "Distinctive logo systems, bespoke typography, color palettes, and comprehensive brand books.",
    icon: Layers,
    deliverables: [
      "Primary & Secondary Logo Marks",
      "Custom Brand Guidelines & Rules",
      "Iconography & Vector Asset Kits",
      "Stationery & Collateral Sets",
    ],
    tag: "SCROLL-STOPPING",
    metric: "Enduring Iconography",
  },
  {
    id: "web",
    number: "03",
    title: "UI/UX & Web Design",
    shortDesc: "Bespoke digital experiences, fluid motion interactions, and modern conversion-driven web architecture.",
    icon: Monitor,
    deliverables: [
      "Intuitive UX Architecture & Wireframes",
      "High-Fidelity Visual UI Design",
      "Responsive Interactive Motion Systems",
      "Next.js / Modern Web Development",
    ],
    tag: "DIGITAL FLAGSHIP",
    metric: "Optimized For Conversion",
  },
  {
    id: "packaging",
    number: "04",
    title: "Packaging & Print Systems",
    shortDesc: "Tangible brand experiences, structural packaging, vinyl graphics, and premium print finishes.",
    icon: Package,
    deliverables: [
      "Custom Retail Product Packaging",
      "Label Systems & Die-Cut Engineering",
      "Stall Design & Event Graphics",
      "Large Format Vinyls & Banners",
    ],
    tag: "TANGIBLE PRESENCE",
    metric: "Shelf-Dominating Impact",
  },
  {
    id: "marketing",
    number: "05",
    title: "Social & Performance Marketing",
    shortDesc: "High-impact social feeds, content storytelling, paid ad creatives, and audience acquisition.",
    icon: TrendingUp,
    deliverables: [
      "Curated Instagram Feed Architecture",
      "Creative Ad Campaigns & Visuals",
      "Growth Marketing & Retargeting",
      "Analytics & Conversion Tracking",
    ],
    tag: "GROWTH ENGINE",
    metric: "Measurable ROI & Reach",
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E3DA] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B88746] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B88746]" />
              <span>What We Do</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#141414] tracking-tight leading-none font-heading">
              Our <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                Solutions
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#5C5852] max-w-md font-normal leading-relaxed">
            From zero to market prominence—every service is calibrated to create undeniable brand
            presence and measurable commercial performance.
          </p>
        </div>

        {/* Zebra-Style Split Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Service Selector */}
          <div className="lg:col-span-6 space-y-3">
            {services.map((item) => {
              const isActive = activeService.id === item.id;
              const IconComponent = item.icon;

              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveService(item)}
                  onClick={() => setActiveService(item)}
                  className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                    isActive
                      ? "bg-white border-[#B88746] shadow-lg shadow-[#B88746]/10"
                      : "bg-white/80 border-[#E8E3DA] hover:border-[#B88746]/40 hover:bg-white"
                  }`}
                >
                  {/* Left Accent indicator line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#B88746]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isActive
                            ? "bg-[#B88746] text-white"
                            : "bg-[#FAF8F5] text-[#B88746] group-hover:bg-[#B88746] group-hover:text-white"
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono text-[#B88746] font-bold">
                            {item.number}
                          </span>
                          <h3
                            className={`text-lg md:text-xl font-black uppercase transition-colors font-heading ${
                              isActive ? "text-[#141414]" : "text-[#2A2A2A] group-hover:text-[#141414]"
                            }`}
                          >
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-xs text-[#5C5852] mt-1 line-clamp-1 max-w-sm">
                          {item.shortDesc}
                        </p>
                      </div>
                    </div>

                    <ArrowRight
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isActive
                          ? "text-[#B88746] translate-x-1"
                          : "text-[#B88746]/30 group-hover:translate-x-1 group-hover:text-[#B88746]"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Interactive Preview Showcase (Zebra Style with White Ink Aesthetic) */}
          <div className="lg:col-span-6 sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8E3DA] shadow-xl relative overflow-hidden"
              >
                {/* Ambient glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#B88746]/5 rounded-full blur-3xl pointer-events-none" />

                {/* Top Badge & Metric */}
                <div className="flex items-center justify-between pb-6 border-b border-[#E8E3DA] relative z-10">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-[#FAF8F5] border border-[#E8E3DA] text-[#B88746]">
                    {activeService.tag}
                  </span>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#B88746]">
                    <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
                    <span>{activeService.metric}</span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="py-6 space-y-4 relative z-10">
                  <h4 className="text-2xl md:text-3xl font-black uppercase text-[#141414] font-heading">
                    {activeService.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#5C5852] leading-relaxed font-normal">
                    {activeService.shortDesc}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 space-y-3 relative z-10 border-t border-[#E8E3DA]">
                  <p className="text-xs font-mono uppercase tracking-widest text-[#B88746] font-bold">
                    CORE DELIVERABLES:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeService.deliverables.map((d, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E3DA]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#141414] font-semibold leading-snug">
                          {d}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-[#E8E3DA] flex items-center justify-between relative z-10">
                  <span className="text-xs text-[#5C5852] font-medium">Ready to transform this area?</span>
                  <a
                    href="mailto:connect@whiteinkdesignstudio.com"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#141414] hover:bg-[#B88746] px-5 py-2.5 rounded-full transition-colors shadow-md"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
