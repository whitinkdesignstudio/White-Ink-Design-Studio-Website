"use client";

import { motion } from "framer-motion";
import { Gauge, Zap, Clock, ShieldCheck, ExternalLink, Sparkles } from "lucide-react";

export default function WebsiteSpotlight() {
  const sites = [
    {
      name: "Speciality Homeopathy",
      clientType: "Healthcare Specialist Clinic",
      speedScore: "99/100",
      launchTime: "Live in 4 Weeks",
      stack: "Next.js · Tailwind · Appointment Engine",
      summary: "Full 14-page clinical architecture with instant doctor schedule booking and zero layout shift.",
      metrics: ["0.6s First Contentful Paint", "Zero Client Churn", "100% Mobile Responsive"],
    },
    {
      name: "Zydus Hospitals (IVF Journey)",
      clientType: "Hospital Patient Care Portal",
      speedScore: "96/100",
      launchTime: "Live in 5 Weeks",
      stack: "Figma UI/UX · High-Trust UX Funnel",
      summary: "Empathetic, anxiety-reducing patient journey tailored for high-intent fertility inquiries.",
      metrics: ["Streamlined Inquiries", "Doctor Verified Content", "WCAG Accessible"],
    },
    {
      name: "UPFOLD (Coravix Global)",
      clientType: "24-SKU D2C Shopify Flagship",
      speedScore: "98/100",
      launchTime: "Live in 3 Weeks",
      stack: "Custom Shopify Liquid · Fast Checkout",
      summary: "Modern packaged food brand store built for high average order value and rapid re-orders.",
      metrics: ["Instant Cart Drawers", "Mobile-First Conversion", "Integrated Analytics"],
    },
    {
      name: "SNG Eco India",
      clientType: "Sustainable B2B Manufacturing",
      speedScore: "97/100",
      launchTime: "Live in 4 Weeks",
      stack: "Modern Corporate Web · Spec Inquiries",
      summary: "Industrial product catalogue with automated RFQ (Request For Quote) routing.",
      metrics: ["Direct WhatsApp RFQ", "Fast Global Delivery", "SEO Structured Schema"],
    },
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E8E3DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E8E3DA] text-xs font-bold uppercase tracking-widest text-[#B88746] mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
            <span>Digital Engineering Flagships</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#141414] font-heading leading-tight">
            Websites Are <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
              Our Core Craft
            </span>
          </h2>

          <p className="mt-4 text-sm md:text-base text-[#5C5852] font-normal leading-relaxed">
            Over 50+ websites shipped with sub-second page loads, conversion-engineered user flows,
            and clean structured data ready for Google & AI crawlers.
          </p>
        </div>

        {/* 4 Cards Grid with Browser / Device Frame Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sites.map((site, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl p-7 md:p-9 border border-[#E8E3DA] hover:border-[#B88746]/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Browser Top Bar Mockup Header */}
                <div className="flex items-center justify-between pb-5 border-b border-[#E8E3DA] mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E8E3DA]" />
                    <span className="w-3 h-3 rounded-full bg-[#E8E3DA]" />
                    <span className="w-3 h-3 rounded-full bg-[#E8E3DA]" />
                    <span className="ml-3 text-[11px] font-mono text-[#8C8275] bg-[#FAF8F5] px-3 py-0.5 rounded-full border border-[#E8E3DA]">
                      {site.clientType}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1 text-[11px] font-black text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      <Gauge className="w-3.5 h-3.5 text-emerald-600" />
                      {site.speedScore}
                    </span>
                  </div>
                </div>

                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl md:text-2xl font-black uppercase text-[#141414] font-heading group-hover:text-[#B88746] transition-colors">
                    {site.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B88746] bg-[#FAF8F5] px-2.5 py-1 rounded-md border border-[#E8E3DA] shrink-0 font-heading">
                    <Clock className="w-3 h-3" />
                    {site.launchTime}
                  </span>
                </div>

                <p className="text-xs font-mono font-bold text-[#8C8275] uppercase tracking-wider mb-4">
                  {site.stack}
                </p>

                <p className="text-sm text-[#5C5852] leading-relaxed mb-6 font-normal">
                  {site.summary}
                </p>
              </div>

              {/* Verified Metrics Strip */}
              <div className="pt-5 border-t border-[#E8E3DA] flex flex-wrap items-center gap-2">
                {site.metrics.map((m, mIdx) => (
                  <span
                    key={mIdx}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#141414] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E8E3DA]"
                  >
                    <Zap className="w-3 h-3 text-[#B88746]" />
                    {m}
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

