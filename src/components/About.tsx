"use client";

import { motion } from "framer-motion";
import { Globe, Award, Zap, ShieldCheck } from "lucide-react";

export default function About() {
  const stats = [
    { number: "50+", label: "Brands Elevated", detail: "Across D2C & Healthcare" },
    { number: "10+", label: "Years Combined", detail: "Industry Craft & Strategy" },
    { number: "98%", label: "Client Success", detail: "Long-term Partnerships" },
    { number: "Global", label: "Footprint", detail: "India, US, UK, UAE & Beyond" },
  ];

  const highlights = [
    {
      icon: Zap,
      title: "Strategy Meets Action",
      desc: "We bridge data-driven insights with uncompromising design aesthetics to deliver maximum measurable impact.",
    },
    {
      icon: Award,
      title: "Scroll-Stopping Visuals",
      desc: "In an attention-deficit world, we design identity systems that command instant attention and memorable presence.",
    },
    {
      icon: Globe,
      title: "Global Execution",
      desc: "Delivering world-class creative standards from our Ahmedabad headquarters to leading brands worldwide.",
    },
    {
      icon: ShieldCheck,
      title: "Bespoke Engineering",
      desc: "Zero cookie-cutter templates. Every typography choice, palette nuance, and code block is custom sculpted.",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E3DA] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B88746] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B88746]" />
              <span>About The Studio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#141414] tracking-tight leading-none font-heading">
              The Vision Behind <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                White Ink
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#5C5852] max-w-md font-normal leading-relaxed">
            Founded with the unwavering goal of transforming brands into market-defining
            experiences, we unite rigorous strategic clarity with fearless creative execution.
          </p>
        </div>

        {/* Narrative & Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Main Story Card (Zebra Legacy style with White Ink Cream Aesthetic) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-[#FAF8F5] rounded-3xl p-8 md:p-12 border border-[#E8E3DA] shadow-md relative overflow-hidden flex flex-col justify-between"
          >
            {/* Ambient corner light */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#B88746]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#B88746] font-bold">
                01 // WHO WE ARE
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-[#141414] leading-snug font-heading">
                We believe exceptional branding isn&apos;t just seen—it is felt, remembered, and
                advocated.
              </h3>
              <p className="text-sm md:text-base text-[#5C5852] leading-relaxed font-normal">
                White Ink&apos;s journey is a testament to our steadfast commitment to creative
                excellence. As markets evolve, standing out requires more than standard design—it
                demands deep narrative resonance, distinct identity systems, and digital journeys
                that stop the scroll and drive conversions.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-[#E8E3DA] flex flex-wrap items-center justify-between gap-4 relative z-10">
              <span className="text-xs uppercase tracking-widest text-[#141414] font-bold">
                Headquartered in Ahmedabad, India
              </span>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-[#141414] hover:bg-[#B88746] px-4 py-2 rounded-full shadow-md transition-colors">
                <Globe className="w-3.5 h-3.5 text-[#B88746]" />
                <span>Serving Globally</span>
              </span>
            </div>
          </motion.div>

          {/* Highlights Stack */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.slice(0, 2).map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8E3DA] hover:border-[#B88746] transition-all duration-300 group flex flex-col justify-center shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#B88746]/10 border border-[#B88746]/20 flex items-center justify-center text-[#B88746] mb-4 group-hover:bg-[#B88746] group-hover:text-white transition-all">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-black uppercase text-[#141414] mb-2 font-heading">{item.title}</h4>
                <p className="text-xs text-[#5C5852] leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Zebra-style Stats Counter Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FAF8F5] p-6 md:p-8 rounded-2xl border-b-4 border-b-[#B88746] border-x border-t border-[#E8E3DA] hover:-translate-y-1 transition-all duration-300 shadow-sm"
            >
              <p className="text-3xl md:text-5xl font-black uppercase text-[#141414] font-heading tracking-tight mb-2">
                {s.number}
              </p>
              <p className="text-xs md:text-sm font-bold uppercase text-[#B88746] tracking-wider mb-1">
                {s.label}
              </p>
              <p className="text-[11px] text-[#5C5852] font-medium">{s.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
