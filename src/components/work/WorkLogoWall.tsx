"use client";

import { motion } from "framer-motion";
import { Sparkles, Building2 } from "lucide-react";
import { TRUSTED_CLIENTS_LIST } from "@/data/caseStudiesData";

export default function WorkLogoWall() {
  return (
    <section className="w-full bg-[#F5EFE6] py-16 md:py-20 px-6 md:px-12 select-none border-b border-[#E8DED0]">
      <div className="max-w-7xl mx-auto w-full text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-xs font-bold uppercase tracking-widest text-[#B88746] shadow-2xs font-raleway mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
          <span>Wider Client Portfolio</span>
        </div>

        {/* Section Heading */}
        <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-normal text-[#141414] font-raleway leading-tight">
          ALSO TRUSTED{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
            BY 400+ BRANDS
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-xs sm:text-sm md:text-base text-[#77716A] leading-relaxed font-normal font-raleway max-w-2xl mx-auto mt-3">
          From German pharmaceutical houses and tertiary hospitals to fast-scaling D2C Shopify brands and global industrial exporters across India, the UK, and the USA.
        </p>

        {/* Client Logos / Tags Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 mt-10">
          {TRUSTED_CLIENTS_LIST.map((client, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: (idx % 12) * 0.03 }}
              className="group p-3 sm:p-4 rounded-xl bg-white/80 hover:bg-white border border-[#E8DED0] hover:border-[#B88746] transition-all duration-300 shadow-2xs hover:shadow-xs flex flex-col items-center justify-center text-center cursor-default min-h-[72px]"
            >
              <span className="text-xs sm:text-[13px] font-bold uppercase tracking-wider text-[#141414] group-hover:text-[#B88746] transition-colors font-raleway line-clamp-2">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

