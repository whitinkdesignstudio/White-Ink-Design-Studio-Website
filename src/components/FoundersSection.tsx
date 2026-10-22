"use client";

import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Award } from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

export default function FoundersSection() {
  const founders = [
    {
      name: "Forum Shah",
      role: "Co-Founder & Creative Director",
      focus: "Brand Strategy, Visual Systems & Design",
      bio: "Directs all creative vision, brand systems, packaging architectures, and every digital experience shipped by the studio. VP & Referral Lead at JBN Kohinoor chapter.",
      expertise: ["Brand Architecture", "Visual Identity", "Packaging Design", "Creative Direction"],
      initials: "FS",
    },
    {
      name: "Sarthak Shah",
      role: "Co-Founder & Performance Marketing",
      focus: "Meta, Google & ChatGPT Ads Growth",
      bio: "Spearheads performance media buying, healthcare ad policy compliance, and full-funnel customer acquisition for high-velocity D2C and clinical healthcare brands.",
      expertise: ["Meta & Google PMax", "Healthcare Ad Compliance", "Growth Retainers", "ROAS Scaling"],
      initials: "SS",
    },
    {
      name: "Akshat Shah",
      role: "Co-Founder & Tech Lead",
      focus: "Web Architecture, Shopify & AI Agents",
      bio: "Architects sub-second Next.js web applications, custom Shopify Liquid flagships, technical SEO structured schemas, and wink'AI WhatsApp automation engines.",
      expertise: ["Next.js & Custom Web", "Shopify Liquid", "Technical SEO / AI Crawl", "wink'AI Automation"],
      initials: "AS",
    },
  ];

  return (
    <section id="founders" className="py-24 md:py-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Story & Philosophy Banner */}
        <div className="bg-[#FAF8F5] rounded-3xl p-8 md:p-14 border border-[#E8E3DA] mb-20 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#B88746]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B88746] mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
              <span>The Story Behind The Name</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#141414] font-heading leading-tight mb-6">
              White Ink is hard to see <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                until it&apos;s on the right background.
              </span>{" "}
              <br />
              Our job is to find yours.
            </h2>

            <p className="text-sm md:text-base text-[#5C5852] font-normal leading-relaxed mb-6">
              White Ink started in 2018 in Surat, designing identities for jewellers and real estate developers.
              Word spread rapidly into healthcare, where we discovered our defining calling: helping clinics,
              hospitals, and pharmaceutical houses articulate complex clinical procedures with utter simplicity.
              Today, with 11 specialists across Ahmedabad and London, we engineer websites, brands, and
              campaigns that turn attention into sustainable commercial growth.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white border border-[#E8E3DA] text-xs font-bold uppercase tracking-wider text-[#141414] font-heading">
              <span className="w-2 h-2 rounded-full bg-[#B88746]" />
              <span>Three founders, one studio. You work directly with us, not junior account managers.</span>
            </div>
          </div>
        </div>

        {/* 3 Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {founders.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#FAF8F5] rounded-3xl p-8 md:p-10 border border-[#E8E3DA] hover:border-[#B88746] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                {/* Founder Avatar Monogram Box */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-[#141414] text-white flex items-center justify-center font-black text-xl font-heading shadow-md group-hover:scale-105 group-hover:bg-[#B88746] transition-all duration-300">
                    {f.initials}
                  </div>
                  <a
                    href="https://www.linkedin.com/company/the-white-ink-design-studio"
                    target="_blank"
                    rel="noreferrer"
                    className="w-9 h-9 rounded-full bg-white border border-[#E8E3DA] text-[#141414] hover:bg-[#141414] hover:text-white flex items-center justify-center transition-colors"
                    aria-label={`LinkedIn for ${f.name}`}
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                </div>

                <h3 className="text-2xl font-black uppercase text-[#141414] font-heading mb-1">
                  {f.name}
                </h3>

                <div className="text-xs font-bold uppercase tracking-widest text-[#B88746] font-heading mb-3">
                  {f.role}
                </div>

                <p className="text-xs font-medium text-[#8C8275] uppercase tracking-wider mb-4">
                  {f.focus}
                </p>

                <p className="text-sm text-[#5C5852] leading-relaxed mb-6 font-normal">
                  {f.bio}
                </p>
              </div>

              {/* Skills pill tags */}
              <div className="pt-6 border-t border-[#E8E3DA] flex flex-wrap gap-2">
                {f.expertise.map((exp, eIdx) => (
                  <span
                    key={eIdx}
                    className="text-[11px] font-medium bg-white px-3 py-1 rounded-md text-[#141414] border border-[#E8E3DA]"
                  >
                    {exp}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
