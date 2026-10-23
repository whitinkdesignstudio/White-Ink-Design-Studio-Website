"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { CaseStudy } from "@/data/caseStudiesData";

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({ caseStudy, onClose }: CaseStudyModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (caseStudy) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [caseStudy, onClose]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm">
        {/* Backdrop click to dismiss */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF8F5] text-[#141414] rounded-2xl sm:rounded-3xl border border-[#E8DED0] shadow-2xl overflow-y-auto z-10 flex flex-col my-auto"
        >
          {/* Sticky Header Bar */}
          <div className="sticky top-0 bg-[#FAF8F5]/95 backdrop-blur-md px-6 py-4 border-b border-[#E8DED0] flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider font-raleway bg-[#F5EFE6] text-[#9E7234]">
                {caseStudy.client}
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#77716A] font-raleway hidden sm:inline">
                {caseStudy.industryLabel}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-stone-200 text-[#141414] transition-colors cursor-pointer"
              aria-label="Close Case Study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="p-6 sm:p-8 md:p-10 space-y-8">
            {/* Title & One-Line Outcome */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#B88746] font-raleway mb-2">
                VERIFIED OUTCOME
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#141414] font-raleway leading-snug">
                {caseStudy.title}
              </h2>
              <p className="text-xs sm:text-sm text-[#77716A] font-normal font-raleway mt-3 leading-relaxed">
                {caseStudy.oneLineResult}
              </p>
            </div>

            {/* Results Band (3-4 Large Numbers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-white p-4 rounded-2xl border border-[#E8DED0]">
              {caseStudy.resultsBand.map((res, idx) => (
                <div key={idx} className="p-2">
                  <div className="text-2xl sm:text-3xl font-bold font-raleway text-[#141414]">
                    {res.value}
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#141414] font-raleway mt-1">
                    {res.label}
                  </div>
                  <div className="text-[10px] text-[#77716A] font-normal font-raleway mt-0.5">
                    {res.context}
                  </div>
                </div>
              ))}
            </div>

            {/* Snapshot Sidebar + The Challenge Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Snapshot Info Card (4 cols) */}
              <div className="md:col-span-5 bg-[#F5EFE6] p-5 rounded-2xl border border-[#E8DED0] space-y-3.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#141414] font-raleway pb-1 border-b border-[#E8DED0]">
                  Project Snapshot
                </h3>
                <div className="space-y-2 text-xs font-raleway">
                  <div>
                    <span className="text-[#77716A] block">Client:</span>
                    <span className="font-bold text-[#141414]">{caseStudy.snapshot.client}</span>
                  </div>
                  <div>
                    <span className="text-[#77716A] block">Industry:</span>
                    <span className="font-bold text-[#141414]">{caseStudy.snapshot.industry}</span>
                  </div>
                  <div>
                    <span className="text-[#77716A] block">Market:</span>
                    <span className="font-bold text-[#141414]">{caseStudy.snapshot.market}</span>
                  </div>
                  <div>
                    <span className="text-[#77716A] block">Timeline:</span>
                    <span className="font-bold text-[#141414]">{caseStudy.snapshot.timeline}</span>
                  </div>
                  <div>
                    <span className="text-[#77716A] block">Deliverables:</span>
                    <span className="font-semibold text-[#141414]">{caseStudy.snapshot.deliverables}</span>
                  </div>
                </div>
              </div>

              {/* The Challenge (7 cols) */}
              <div className="md:col-span-7 flex flex-col justify-center space-y-2.5">
                <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#141414] font-raleway">
                  The Challenge
                </h3>
                <p className="text-xs sm:text-sm text-[#77716A] leading-relaxed font-normal font-raleway">
                  {caseStudy.challenge}
                </p>
              </div>
            </div>

            {/* What We Did (4-6 Actionable Steps) */}
            <div className="space-y-3">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#141414] font-raleway">
                What We Did
              </h3>
              <div className="grid grid-cols-1 gap-2.5">
                {caseStudy.whatWeDid.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#E8DED0]"
                  >
                    <span className="shrink-0 w-6 h-6 rounded-full bg-[#B88746] text-white flex items-center justify-center text-xs font-bold font-raleway">
                      {idx + 1}
                    </span>
                    <p className="text-xs sm:text-[13px] text-[#141414] leading-relaxed font-normal font-raleway">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* What Changed (Results) */}
            <div className="bg-white p-5 rounded-2xl border border-[#E8DED0] space-y-2">
              <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-[#141414] font-raleway">
                What Changed
              </h3>
              <p className="text-xs sm:text-sm text-[#77716A] leading-relaxed font-normal font-raleway">
                {caseStudy.whatChanged}
              </p>
            </div>

            {/* Client Quote */}
            {caseStudy.clientQuote && (
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#FAF8F5] to-[#F5EFE6] border-l-4 border-[#B88746] border-y border-r border-[#E8DED0]">
                <p className="text-sm sm:text-base font-serif italic text-[#141414] leading-relaxed">
                  &ldquo;{caseStudy.clientQuote.quote}&rdquo;
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-raleway">
                  <span className="font-bold text-[#141414]">{caseStudy.clientQuote.author}</span>
                  <span className="text-[#77716A]">·</span>
                  <span className="text-[#77716A]">{caseStudy.clientQuote.role}, {caseStudy.clientQuote.company}</span>
                </div>
              </div>
            )}

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-[#E8DED0] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#141414] font-raleway">
                  Want results like these for your brand?
                </h4>
                <p className="text-xs text-[#77716A] font-raleway">
                  Book a 20-minute discovery call with our senior founders.
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <a
                  href="mailto:connect@whiteinkdesignstudio.com?subject=Inquiry%20Regarding%20Case%20Study"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#B88746] hover:bg-[#9E7234] transition-all shadow-sm font-raleway"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book A Call</span>
                </a>
                <a
                  href="https://wa.me/918160511477?text=Hi%20White%20Ink,%20I'd%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#141414] bg-white border border-[#E8DED0] hover:border-[#B88746] transition-all shadow-2xs font-raleway"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

