"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, Award } from "lucide-react";

export default function TestimonialsReviews() {
  const testimonials = [
    {
      quote:
        "White Ink turned our clinic’s digital presence into a patient booking machine. The brand looks world-class, the messaging is accurate, and patients immediately feel a sense of trust before their first consultation.",
      author: "Dr. Ketan Shah",
      role: "Founder & Chief Consultant",
      company: "Happy Homeopathy",
      badge: "Clinical Healthcare",
      rating: 5,
      impact: "High-Volume Direct Appointments",
    },
    {
      quote:
        "Their healthcare domain expertise is genuine and rare. From navigating stringent medical compliance rules to designing an empathetic, anxiety-reducing patient journey, White Ink delivered beyond expectations.",
      author: "Marketing Lead",
      role: "Digital Communications & Growth",
      company: "Zydus Hospitals",
      badge: "Hospital Healthcare",
      rating: 5,
      impact: "Streamlined Patient Funnel",
    },
    {
      quote:
        "They launched our 24-SKU ready-to-eat Shopify flagship in record time. The packaging aesthetics are exceptional and our e-commerce conversion rates exceeded our launch quarter targets.",
      author: "Shrenil Shah",
      role: "Founder & Director",
      company: "UPFOLD // Coravix Global LLP",
      badge: "D2C FMCG Brand",
      rating: 5,
      impact: "24-SKU Rapid Shopify Launch",
    },
  ];

  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-[#E8E3DA] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B88746] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B88746]" />
              <span>Client Voices & Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#141414] tracking-tight leading-none font-heading">
              Proven By Founders, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                Clinics & CEOs
              </span>
            </h2>
          </div>

          {/* Social Proof Badges */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA]">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#141414]">5.0 ★ Google Rating</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] text-xs font-bold text-[#141414]">
              <Award className="w-4 h-4 text-[#B88746]" />
              <span>Verified Agency Reviews</span>
            </div>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#FAF8F5] rounded-3xl p-8 md:p-10 border border-[#E8E3DA] hover:border-[#B88746] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#B88746] bg-white px-3 py-1 rounded-full border border-[#E8E3DA]">
                    {t.badge}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#B88746]/30 mb-4" />

                <p className="text-sm md:text-base text-[#141414] leading-relaxed mb-8 font-normal italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-[#E8E3DA]">
                <div className="font-heading font-black uppercase text-base text-[#141414]">
                  {t.author}
                </div>
                <div className="text-xs text-[#5C5852] font-medium">
                  {t.role} · <span className="text-[#141414] font-semibold">{t.company}</span>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#B88746] bg-white px-2.5 py-1 rounded-md border border-[#E8E3DA]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{t.impact}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

