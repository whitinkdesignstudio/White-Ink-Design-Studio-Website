"use client";

import { motion } from "framer-motion";
import { Clock, DollarSign, ShieldCheck, Globe2, ArrowUpRight } from "lucide-react";

export default function InternationalClients() {
  const points = [
    {
      icon: Clock,
      title: "Active Time Zone Overlap",
      desc: "UK hours calls throughout your afternoon, plus dedicated morning slots for US East Coast founders. No 24-hour waiting delays for simple feedback.",
      highlight: "UK & US Scheduling",
    },
    {
      icon: DollarSign,
      title: "Fixed GBP & USD Pricing",
      desc: "Receive transparent project and retainer proposals billed directly in GBP (£) or USD ($). Pay seamlessly via international wire or Stripe with zero hidden foreign exchange fees.",
      highlight: "Predictable Cost",
    },
    {
      icon: ShieldCheck,
      title: "Strict NDAs & 100% IP Rights",
      desc: "Comprehensive contracts with dual-jurisdiction terms (UK / Indian law). You own 100% of Figma files, custom Next.js/Shopify code, and digital assets upon handover.",
      highlight: "Full Ownership",
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E8E3DA] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#B88746]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E3DA] text-xs font-bold uppercase tracking-widest text-[#B88746] mb-4 shadow-sm">
            <Globe2 className="w-3.5 h-3.5 text-[#B88746]" />
            <span>Global Partnership Model</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#141414] tracking-tight leading-none font-heading mb-6">
            Working With You From <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
              London & Ahmedabad
            </span>
          </h2>

          <p className="text-sm md:text-base text-[#5C5852] font-normal leading-relaxed">
            World-class design studio caliber delivered at competitive offshore value. Senior founders
            directly hands-on with every account, working across your business hours.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-8 md:p-10 border border-[#E8E3DA] hover:border-[#B88746] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] text-[#B88746] flex items-center justify-center mb-6 group-hover:bg-[#141414] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#B88746] mb-2 block">
                    {pt.highlight}
                  </span>

                  <h3 className="text-xl md:text-2xl font-black uppercase text-[#141414] font-heading mb-3">
                    {pt.title}
                  </h3>

                  <p className="text-sm text-[#5C5852] leading-relaxed font-normal">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* International Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-6 md:p-8 border border-[#E8E3DA] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-[#141414]">
            <span className="text-[#8C8275] uppercase tracking-wider text-[11px] font-mono">
              International Proof:
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E3DA]">
              WellScience UK
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E3DA]">
              The Alpha CPA&apos;s
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E3DA]">
              Hevert Germany
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FAF8F5] border border-[#E8E3DA]">
              Global Spice Exporters
            </span>
          </div>

          <a
            href="mailto:connect@whiteinkdesignstudio.com?subject=International%20Project%20Inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141414] text-white hover:bg-[#B88746] transition-colors text-xs font-bold uppercase tracking-wider font-heading shrink-0"
          >
            <span>Book In Your Time Zone</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

