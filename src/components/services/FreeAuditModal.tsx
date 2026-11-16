"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Calendar } from "lucide-react";

interface FreeAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function FreeAuditModal({ isOpen, onClose, defaultService = "Website Design & Development" }: FreeAuditModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: defaultService,
    country: "India",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#0D0D0D]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl bg-[#FAF8F5] border border-[#E8DED0] rounded-2xl shadow-2xl overflow-hidden z-10"
          >
            {/* Header */}
            <div className="bg-[#141414] text-white p-6 sm:p-8 relative">
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close audit modal"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="inline-block px-3 py-1 rounded-full bg-[#B88746]/20 border border-[#B88746]/40 text-[#C59A58] text-xs font-bold uppercase tracking-widest mb-3">
                Free Strategic Audit · Zero Obligation
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-heading">
                Audit Your Digital Presence
              </h3>
              <p className="text-sm text-[#A39E93] mt-2 leading-relaxed">
                Send us your website URL or current brand challenge. A senior founder (Forum, Sarthak, or Akshat) will review it and deliver 3 actionable growth fixes within 24 hours.
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#B88746]/10 text-[#B88746] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#141414] font-heading">
                    Audit Request Received!
                  </h4>
                  <p className="text-sm text-[#77716A] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-[#141414]">{formData.name || "Founder"}</span>. We are analyzing <span className="text-[#B88746] font-semibold">{formData.website || "your brand"}</span>. You will receive your personalized video/PDF audit within 1 working day.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://wa.me/918160511477?text=Hi%20White%20Ink,%20I%20just%20submitted%20a%20website%20audit%20request."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm tracking-wide transition-all shadow-md"
                    >
                      <span>Ping on WhatsApp</span>
                    </a>
                    <button
                      onClick={onClose}
                      className="px-6 py-3 rounded-xl bg-[#F5EFE6] hover:bg-[#E8DED0] text-[#141414] font-semibold text-sm transition-all"
                    >
                      Close Window
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Harshil Shah / Forum Shah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DED0] text-[#141414] placeholder-[#A39E93] text-sm focus:outline-none focus:border-[#B88746] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="founder@yourbrand.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DED0] text-[#141414] placeholder-[#A39E93] text-sm focus:outline-none focus:border-[#B88746] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-1.5">
                        Website / Social Link *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="https://yourbrand.com"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DED0] text-[#141414] placeholder-[#A39E93] text-sm focus:outline-none focus:border-[#B88746] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-1.5">
                        Primary Pillar
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DED0] text-[#141414] text-sm focus:outline-none focus:border-[#B88746] transition-colors"
                      >
                        <option value="Website Design & Development">Website Design & Development</option>
                        <option value="Brand Identity & Packaging">Brand Identity & Packaging</option>
                        <option value="Growth & Meta/Google Ads">Growth & Meta/Google Ads</option>
                        <option value="Social Media & Content Production">Social Media & Content Production</option>
                        <option value="AI WhatsApp Automation (wink'AI)">AI WhatsApp Automation (wink'AI)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-1.5">
                        Region
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DED0] text-[#141414] text-sm focus:outline-none focus:border-[#B88746] transition-colors"
                      >
                        <option value="India">India (IST)</option>
                        <option value="United Kingdom">United Kingdom (GMT)</option>
                        <option value="United States">United States (EST/PST)</option>
                        <option value="Other">Other International</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#141414] mb-1.5">
                      What is your biggest current bottleneck? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Slow load speed, low appointment bookings, ad rejections, or outdated packaging..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white border border-[#E8DED0] text-[#141414] placeholder-[#A39E93] text-sm focus:outline-none focus:border-[#B88746] transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#B88746] hover:bg-[#9E7234] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg hover:shadow-xl font-heading"
                    >
                      <span>Request Free Audit (24-Hour Delivery)</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-4 pt-1 text-[11px] text-[#77716A]">
                    <span className="inline-flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B88746]" /> 100% Confidential
                    </span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#B88746]" /> 1 Working Day Turnaround
                    </span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

