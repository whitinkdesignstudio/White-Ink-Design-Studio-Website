"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle, Calendar, Sparkles, CheckCircle2 } from "lucide-react";

export default function ClosingCTA() {
  return (
    <section id="contact" className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-center items-center py-10 lg:py-0 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E8E3DA] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl w-full mx-auto my-auto text-center relative z-10 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4 sm:space-y-5 my-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8E3DA] text-xs font-bold uppercase tracking-widest text-[#B88746] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
            <span>Next Steps</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-[#141414] tracking-tight leading-none font-heading">
            Ready To <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
              Stand Out?
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#5C5852] max-w-xl mx-auto font-normal leading-relaxed">
            Book a 20-minute call. You&apos;ll leave with three actionable ideas for your brand,
            whether or not we decide to work together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <a
              href="mailto:connect@whiteinkdesignstudio.com?subject=Book%20a%2020-Minute%20Call"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm md:text-base font-bold uppercase tracking-wider text-white bg-[#B88746] hover:bg-[#9E7234] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl font-heading"
            >
              <Calendar className="w-4 h-4" />
              <span>Book A 20-Min Call</span>
            </a>

            <a
              href="https://wa.me/918160511477?text=Hi%20White%20Ink,%20I'd%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm md:text-base font-bold uppercase tracking-wider text-[#141414] bg-white border border-[#E8E3DA] hover:border-[#B88746] hover:bg-[#FAF8F5] transition-all duration-300 shadow-sm font-heading"
            >
              <MessageCircle className="w-4 h-4 text-[#B88746]" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3 text-[11px] sm:text-xs text-[#8C8275] font-semibold">
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88746]" /> Reply within 1 business hour
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88746]" /> Direct access to senior founders
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B88746]" /> London & Ahmedabad time zones
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

