"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ShoppingBag, Building2, Ticket, CheckCircle2, ArrowRight } from "lucide-react";

export default function IndustriesWeServe() {
  const industries = [
    {
      title: "Healthcare & Wellness",
      badge: "OUR SPECIALITY",
      isSpeciality: true,
      count: "70+ Brands Served",
      desc: "The hardest category in marketing. We master Meta & Google health advertising compliance, craft medical content doctors readily sign off, and architect high-converting booking funnels for clinics, hospitals, and Ayurveda/homeopathy leaders.",
      clients: "Dr. Reckeweg · Zydus Hospitals · Hevert · Dr. Harshil Shah · Speciality Homeopathy",
      highlights: [
        "100% Ad Policy Compliance (AYUSH & Meta)",
        "Empathetic, Patient-Centric UX & Copy",
        "Direct Appointment & Teleconsult Booking",
      ],
    },
    {
      title: "D2C & E-Commerce",
      badge: "HIGH-GROWTH RETAIL",
      isSpeciality: false,
      count: "10+ Shopify Stores",
      desc: "Fast, search-ready storefronts engineered to turn cold traffic into recurring buyers. Built for rapid checkout, seamless payment integrations, and high ROAS advertising campaigns.",
      clients: "Wand Fragrance · UPFOLD · Pushpam Jewellers · Devikrupa Kidswear",
      highlights: [
        "Custom Shopify Liquid Theme Builds",
        "Meta & Google PMax Performance Retainers",
        "RTO Reduction & Frictionless Checkout",
      ],
    },
    {
      title: "Real Estate & Architecture",
      badge: "HIGH-VALUE INQUIRIES",
      isSpeciality: false,
      count: "Luxury & Commercial",
      desc: "Lead-generation ecosystems designed to fill site visits and project enquiries. Elegant architectural typography paired with RERA-compliant ad copywriting.",
      clients: "Residential Developments · Commercial Hubs · Architecture Studios",
      highlights: [
        "High-Intent Site Visit Booking Pages",
        "Brochure Downloads & WhatsApp Automated Leads",
        "RERA-Compliant Ad Campaigns",
      ],
    },
    {
      title: "Events & Cultural Festivals",
      badge: "MASS ENGAGEMENT",
      isSpeciality: false,
      count: "5,000+ Attendee Scale",
      desc: "Ticketing platforms, viral motion graphics, and high-energy campaigns that sell out passes in hours. Unbreakable infrastructure built for peak traffic surges.",
      clients: "GENZATRI Garba 2026 · Astha Events · Care for Children Garba",
      highlights: [
        "High-Concurrency Ticketing Infrastructure",
        "Multi-Week Organic Social Countdown Calendars",
        "Offline Passes, QR Entry & Sponsor Decks",
      ],
    },
  ];

  return (
    <section id="industries" className="py-24 md:py-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E3DA] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B88746] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B88746]" />
              <span>Industry Focus</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#141414] tracking-tight leading-none font-heading">
              Deep In Categories Where <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                Trust Decides The Sale
              </span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#5C5852] max-w-md font-normal leading-relaxed">
            We don&apos;t do shallow generalist work. We immerse ourselves in the regulations,
            buyer psychology, and nuances that make each industry convert.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 md:p-12 border transition-all duration-300 flex flex-col justify-between relative overflow-hidden group ${
                ind.isSpeciality
                  ? "bg-[#141414] text-white border-[#141414] shadow-2xl"
                  : "bg-[#FAF8F5] text-[#141414] border-[#E8E3DA] hover:border-[#B88746] shadow-sm hover:shadow-xl"
              }`}
            >
              {ind.isSpeciality && (
                <div className="absolute top-0 right-0 bg-[#B88746] text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-bl-xl font-heading shadow-md">
                  {ind.badge}
                </div>
              )}

              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${
                      ind.isSpeciality
                        ? "bg-[#222222] text-[#B88746] border-white/10"
                        : "bg-white text-[#B88746] border-[#E8E3DA]"
                    }`}
                  >
                    {ind.count}
                  </span>
                  {!ind.isSpeciality && (
                    <span className="text-[10px] font-mono font-bold text-[#8C8275] uppercase tracking-wider">
                      {ind.badge}
                    </span>
                  )}
                </div>

                <h3
                  className={`text-2xl sm:text-3xl font-black uppercase font-heading mb-4 ${
                    ind.isSpeciality ? "text-white" : "text-[#141414]"
                  }`}
                >
                  {ind.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-6 font-normal ${
                    ind.isSpeciality ? "text-[#E8E3DA]/80" : "text-[#5C5852]"
                  }`}
                >
                  {ind.desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 mb-8">
                  {ind.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                      <span
                        className={`text-xs font-medium ${
                          ind.isSpeciality ? "text-[#E8E3DA]" : "text-[#141414]"
                        }`}
                      >
                        {h}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Client Proof */}
              <div
                className={`pt-6 border-t ${
                  ind.isSpeciality ? "border-white/10" : "border-[#E8E3DA]"
                }`}
              >
                <div
                  className={`text-[10px] font-mono uppercase tracking-widest mb-1.5 ${
                    ind.isSpeciality ? "text-[#B88746]" : "text-[#8C8275]"
                  }`}
                >
                  Proof & Clients:
                </div>
                <div
                  className={`text-xs font-semibold ${
                    ind.isSpeciality ? "text-white/90" : "text-[#141414]"
                  }`}
                >
                  {ind.clients}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

