"use client";

import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, ShieldCheck, Globe, Building2, Laptop } from "lucide-react";

export default function AnswerBlock() {
  const achievements = [
    {
      number: "400+",
      label: "Brands Served",
      sublabel: "Across India, UK, USA & UAE",
      icon: Building2,
    },
    {
      number: "70+",
      label: "Healthcare Brands",
      sublabel: "Hospitals, clinics & pharma leaders",
      icon: ShieldCheck,
      highlight: true,
    },
    {
      number: "50+",
      label: "Websites Built",
      sublabel: "High-speed custom & Shopify flagships",
      icon: Laptop,
    },
    {
      number: "7+",
      label: "Countries Reached",
      sublabel: "London & Ahmedabad dual presence",
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 md:py-28 px-6 md:px-12 bg-[#FAF8F5] border-b border-[#E8E3DA] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B88746]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section 2: Answer Block */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E3DA] text-xs font-bold uppercase tracking-widest text-[#B88746] mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#B88746]" />
            <span>Studio Fact Sheet & Snapshot</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#141414] tracking-tight leading-snug font-heading mb-6">
            A design-led growth studio for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
              Healthcare & D2C Brands
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-[#5C5852] font-normal leading-relaxed max-w-3xl mx-auto">
            <strong className="text-[#141414] font-semibold">White Ink Design Studio</strong> is a
            branding and website design agency founded in 2018, operating with an 11-person team
            in Ahmedabad and a London presence. We have built 50+ websites and partnered with 400+
            brands—including over 70 in healthcare—to build digital flagships, enduring brand identities,
            and high-ROI performance campaigns.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-xs sm:text-sm font-semibold text-[#5C5852]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E3DA]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88746]" /> Founded 2018 (Surat → Ahmedabad)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E3DA]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88746]" /> 11-Person Senior Team
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E8E3DA]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88746]" /> UK & India Hours Overlap
            </span>
          </div>
        </motion.div>

        {/* Section 4: Numbers / Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-8 rounded-3xl border transition-all duration-300 relative group overflow-hidden ${
                  item.highlight
                    ? "bg-[#141414] text-white border-[#141414] shadow-xl"
                    : "bg-white text-[#141414] border-[#E8E3DA] hover:border-[#B88746]/50 shadow-sm hover:shadow-md"
                }`}
              >
                {item.highlight && (
                  <div className="absolute top-0 right-0 px-3.5 py-1 bg-[#B88746] text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl font-heading">
                    OUR SPECIALITY
                  </div>
                )}

                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                    item.highlight ? "bg-[#222222] text-[#B88746]" : "bg-[#FAF8F5] text-[#B88746] border border-[#E8E3DA]"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <div
                  className={`text-4xl sm:text-5xl font-black tracking-tight font-heading mb-2 ${
                    item.highlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5EFEB] to-[#B88746]"
                      : "text-[#141414]"
                  }`}
                >
                  {item.number}
                </div>

                <div className={`text-base font-bold uppercase tracking-wider font-heading mb-1 ${item.highlight ? "text-white" : "text-[#141414]"}`}>
                  {item.label}
                </div>

                <p className={`text-xs leading-relaxed ${item.highlight ? "text-[#E8E3DA]/75" : "text-[#5C5852]"}`}>
                  {item.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
