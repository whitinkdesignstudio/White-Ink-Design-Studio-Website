"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor,
  Layers,
  TrendingUp,
  Video,
  Bot,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  Globe,
  Clock,
  ShieldCheck,
  Calendar,
  MessageCircle,
  Gauge,
  Zap,
  Code2,
  FileCheck,
  Smartphone,
  Laptop,
  Check,
  Send,
  UserCheck,
  FileText,
  Boxes,
  Palette
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClosingCTA from "@/components/ClosingCTA";
import FreeAuditModal from "@/components/services/FreeAuditModal";
import CaseStudyModal from "@/components/work/CaseStudyModal";
import { ServicePillar } from "@/data/servicesData";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudiesData";

interface ServiceDetailClientProps {
  pillar: ServicePillar;
}

type Currency = "inr" | "gbp" | "usd";

export default function ServiceDetailClient({ pillar }: ServiceDetailClientProps) {
  const [currency, setCurrency] = useState<Currency>("inr");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [auditOpen, setAuditOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Chat simulator state for AI & Automation
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string; time: string }>>([
    { sender: "user", text: "Hi, I need an appointment for joint pain consultation this Thursday.", time: "11:42 PM" },
    { sender: "bot", text: "Hello! Dr. Harshil Shah has consult slots available this Thursday at 4:30 PM and 6:00 PM at Mithakhali, Ahmedabad. Would you like me to reserve the 4:30 PM slot for you?", time: "11:42 PM" },
    { sender: "user", text: "Yes please, 4:30 PM works. What are the consultation charges?", time: "11:43 PM" },
    { sender: "bot", text: "Reserved! The first consultation fee is ₹1,000. I have logged your booking into clinic CRM and sent a confirmation SMS to your number. See you on Thursday!", time: "11:43 PM" }
  ]);
  const [inputMsg, setInputMsg] = useState("");

  const handleSendSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    const userText = inputMsg;
    setInputMsg("");
    setChatMessages((prev) => [
      ...prev,
      { sender: "user", text: userText, time: "Just now" },
      { sender: "bot", text: "Thanks for checking! In a live deployment, wink'AI parses this immediately with Claude + n8n, routes the intent to your CRM, and alerts your front-desk.", time: "Just now" }
    ]);
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case "website-design":
        return Monitor;
      case "branding":
        return Layers;
      case "performance-marketing":
        return TrendingUp;
      case "social-media":
        return Video;
      case "ai-automation":
        return Bot;
      default:
        return Sparkles;
    }
  };

  const Icon = getPillarIcon(pillar.id);
  const priceObj = pillar.pricing[currency];

  // Matched case studies from our database
  const relatedCases = pillar.relatedCaseSlugs
    .map((slug) => CASE_STUDIES.find((c) => c.slug === slug))
    .filter(Boolean) as CaseStudy[];

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#141414] relative selection:bg-[#B88746] selection:text-white">
      {/* Subpage Header */}
      <Navbar showNav={true} isSubpage={true} />

      {/* Free Audit Modal */}
      <FreeAuditModal isOpen={auditOpen} onClose={() => setAuditOpen(false)} defaultService={pillar.title} />

      {/* Case Study Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}

      {/* 1. Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 px-6 md:px-12 border-b border-[#E8DED0] relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F5EFE6]">
        {/* Ambient lighting */}
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs & Update Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs text-[#77716A]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#B88746] transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-[#B88746] transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-[#141414] font-semibold">{pillar.navLabel}</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[11px] font-medium text-[#77716A]">
              <span className="w-2 h-2 rounded-full bg-[#B88746] animate-pulse" />
              <span>Updated 20 October 2026 · White Ink Studio</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DED0] shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B88746] flex items-center gap-1.5">
                  <Icon className="w-3.5 h-3.5" />
                  <span>PILLAR {pillar.number} · {pillar.title.toUpperCase()}</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#141414] tracking-tight leading-[1.05] font-heading">
                {pillar.h1}
              </h1>

              {/* Master Plan AI Answer Block */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DED0] shadow-sm max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-widest text-[#B88746] mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>Executive Summary & Proof</span>
                </p>
                <p className="text-sm sm:text-base text-[#141414] leading-relaxed">
                  {pillar.answerBlock}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setAuditOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#B88746] hover:bg-[#9E7234] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-xl font-heading"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book A 20-Min Call</span>
                </button>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF8F5] border border-[#E8DED0] hover:border-[#B88746] text-[#141414] text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-sm font-heading"
                >
                  <span>See {pillar.navLabel} Work</span>
                  <ArrowRight className="w-4 h-4 text-[#B88746]" />
                </a>
              </div>
            </div>

            {/* Pricing & Currency Card */}
            <div className="lg:col-span-4">
              <div className="p-6 rounded-3xl bg-white border border-[#E8DED0] shadow-lg space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8DED0]">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#77716A]">
                    Transparent Pricing
                  </span>
                  <div className="flex gap-1 bg-[#FAF8F5] p-1 rounded-lg border border-[#E8DED0]">
                    {(["inr", "gbp", "usd"] as Currency[]).map((c) => (
                      <button
                        key={c}
                        onClick={() => setCurrency(c)}
                        className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase transition-all ${
                          currency === c ? "bg-[#141414] text-white" : "text-[#77716A] hover:text-[#141414]"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-semibold text-[#77716A]">Starting From</div>
                  <div className="text-4xl font-black text-[#141414] font-heading mt-1">
                    {priceObj.from}
                  </div>
                  <div className="text-xs text-[#B88746] font-medium mt-0.5">{priceObj.suffix}</div>
                  <div className="text-[11px] text-[#77716A] mt-2 font-mono bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E8DED0]">
                    Typical Range: {priceObj.typicalRange}
                  </div>
                  <p className="text-xs text-[#77716A] mt-2 leading-relaxed">
                    {priceObj.scopeNote}
                  </p>
                </div>

                <button
                  onClick={() => setAuditOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-[#141414] hover:bg-[#B88746] text-white font-bold text-xs uppercase tracking-wider transition-all font-heading"
                >
                  <span>Get An Exact Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Key Proof Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#E8DED0]">
            {pillar.keyProof.map((kp, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl border border-[#E8DED0] shadow-sm">
                <div className="text-2xl sm:text-3xl font-black text-[#141414] font-heading">
                  {kp.stat}
                </div>
                <div className="text-xs font-bold text-[#B88746] uppercase tracking-wide mt-1">
                  {kp.label}
                </div>
                <div className="text-[11px] text-[#77716A] mt-1 leading-snug">
                  {kp.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Who It's For (Master Plan Page 18: 3 buyer types with 1 line each) */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
              Strategic Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#141414] font-heading tracking-tight">
              Who We Built This For
            </h2>
            <p className="text-sm sm:text-base text-[#77716A]">
              {pillar.audienceHeadline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillar.audience.map((aud, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#E8DED0] shadow-sm hover:shadow-md transition-shadow space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8DED0] text-[#B88746] font-black flex items-center justify-center font-heading text-base">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-black text-[#141414] font-heading leading-snug">
                  {aud.buyerType}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#B88746]">
                  {aud.tagline}
                </p>
                <p className="text-xs text-[#77716A] leading-relaxed">
                  {aud.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What You Get (Deliverables List with Icons) */}
      <section className="py-20 px-6 md:px-12 bg-[#F5EFE6] border-y border-[#E8DED0]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
                Comprehensive Scope
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#141414] tracking-tight mt-1 font-heading">
                What You Get
              </h2>
            </div>
            <p className="text-sm text-[#77716A] max-w-md">
              Every deliverable is crafted in-house by senior specialists. No junior outsourcing, no vague line items.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillar.deliverables.map((del, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-2xl border border-[#E8DED0] shadow-sm hover:border-[#B88746] transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E8DED0] text-[#B88746]">
                    {del.tag || "INCLUDED"}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#B88746]" />
                </div>
                <h3 className="text-lg font-bold text-[#141414] font-heading">
                  {del.title}
                </h3>
                <p className="text-xs text-[#77716A] leading-relaxed">
                  {del.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Extra Section Beyond Template (Custom per Pillar from Master Plan Page 18) */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
              Deep Dive Showcase
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#141414] font-heading tracking-tight">
              {pillar.extraSection.title}
            </h2>
            <p className="text-sm text-[#77716A]">
              {pillar.extraSection.subtitle}
            </p>
          </div>

          {/* Website Design Extra: PageSpeed + Platform Comparisons + Care Plan */}
          {pillar.extraSection.type === "website-showcase" && (
            <div className="space-y-12">
              {/* Speed benchmark showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAF8F5] p-8 sm:p-10 rounded-3xl border border-[#E8DED0]">
                <div className="lg:col-span-5 space-y-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider inline-flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5" />
                    <span>Google Core Web Vitals Benchmark</span>
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#141414] font-heading">
                    Sub-Second Performance &amp; 95+ PageSpeed Scores
                  </h3>
                  <p className="text-sm text-[#77716A] leading-relaxed">
                    Most Indian agency websites score below 50 on mobile due to bloated themes. Every White Ink build is optimized for Largest Contentful Paint (&lt;1.8s) and Interaction to Next Paint (&lt;100ms).
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="bg-white p-3 rounded-xl border border-[#E8DED0] text-center">
                      <div className="text-2xl font-black text-emerald-600 font-heading">98</div>
                      <div className="text-[10px] text-[#77716A] font-semibold">Mobile Score</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#E8DED0] text-center">
                      <div className="text-2xl font-black text-[#141414] font-heading">1.1s</div>
                      <div className="text-[10px] text-[#77716A] font-semibold">LCP Speed</div>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-[#E8DED0] text-center">
                      <div className="text-2xl font-black text-[#B88746] font-heading">100%</div>
                      <div className="text-[10px] text-[#77716A] font-semibold">SEO Audit</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-[#E8DED0] shadow-sm space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#141414] pb-2 border-b border-[#E8DED0] flex items-center justify-between">
                    <span>Platforms Compared</span>
                    <span className="text-[#B88746] text-[11px]">We Match Tech to Objective</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DED0] space-y-2">
                      <div className="font-bold text-[#141414]">Shopify Liquid</div>
                      <p className="text-[#77716A] text-[11px]">Best for D2C brands, native Indian payment gateways (Razorpay/Cashfree), and inventory sync.</p>
                      <div className="text-[10px] font-semibold text-[#B88746]">Example: UPFOLD, Wand</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#B88746]/40 space-y-2 ring-1 ring-[#B88746]/20">
                      <div className="font-bold text-[#141414]">Next.js / React</div>
                      <p className="text-[#77716A] text-[11px]">Sub-second speed, custom calculators, doctor booking engines, and AI search crawlers.</p>
                      <div className="text-[10px] font-semibold text-[#B88746]">Example: Speciality Homeopathy</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8DED0] space-y-2">
                      <div className="font-bold text-[#141414]">Headless CMS</div>
                      <p className="text-[#77716A] text-[11px]">Content-rich publishing, multi-clinic networks, and rapid daily marketing team edits.</p>
                      <div className="text-[10px] font-semibold text-[#B88746]">Example: SNG Eco India</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post-launch care plan */}
              <div className="bg-[#141414] text-white p-8 rounded-3xl grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#B88746]">Care Guarantee</div>
                  <h4 className="text-xl font-bold font-heading mt-1">Post-Launch Care Plan</h4>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold flex items-center gap-1.5 text-white">
                    <Check className="w-4 h-4 text-[#B88746]" /> 30-Day Zero Bug Warranty
                  </div>
                  <p className="text-xs text-[#A39E93]">Full complimentary bug resolution and layout adjustments.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold flex items-center gap-1.5 text-white">
                    <Check className="w-4 h-4 text-[#B88746]" /> Loom Video Handover
                  </div>
                  <p className="text-xs text-[#A39E93]">Recorded video manual showing your team how to update copy and media.</p>
                </div>
                <div className="space-y-1">
                  <div className="text-sm font-semibold flex items-center gap-1.5 text-white">
                    <Check className="w-4 h-4 text-[#B88746]" /> 100% Repository Transfer
                  </div>
                  <p className="text-xs text-[#A39E93]">Git code and admin logins transferred with zero vendor lock-in.</p>
                </div>
              </div>
            </div>
          )}

          {/* Branding Extra: Brand Deliverables Gallery */}
          {pillar.extraSection.type === "brand-gallery" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DED0] space-y-3">
                <Palette className="w-8 h-8 text-[#B88746]" />
                <h4 className="text-lg font-bold text-[#141414] font-heading">Primary &amp; Icon Marks</h4>
                <p className="text-xs text-[#77716A]">Geometric vector symbols engineered for 16px favicons up to 100ft outdoor hoardings.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DED0] space-y-3">
                <Boxes className="w-8 h-8 text-[#B88746]" />
                <h4 className="text-lg font-bold text-[#141414] font-heading">Packaging &amp; Dielines</h4>
                <p className="text-xs text-[#77716A]">Shelf-tested dielines with foil stamping, spot UV, and structural retail unboxing.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DED0] space-y-3">
                <FileText className="w-8 h-8 text-[#B88746]" />
                <h4 className="text-lg font-bold text-[#141414] font-heading">30-Page Brand Bible</h4>
                <p className="text-xs text-[#77716A]">Clear layout rules, minimum margins, co-branding guides, and digital UI usage.</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8DED0] space-y-3">
                <ShieldCheck className="w-8 h-8 text-[#B88746]" />
                <h4 className="text-lg font-bold text-[#141414] font-heading">IP &amp; Trademark Release</h4>
                <p className="text-xs text-[#77716A]">Complete legal commercial copyright assignment for global trademark registration.</p>
              </div>
            </div>
          )}

          {/* Performance Marketing Extra: Channel Breakdown Table */}
          {pillar.extraSection.type === "performance-channels" && (
            <div className="bg-[#FAF8F5] rounded-3xl p-8 border border-[#E8DED0] space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-[#E8DED0] text-[#77716A] uppercase tracking-wider font-bold">
                      <th className="py-3 px-4">Channel</th>
                      <th className="py-3 px-4">Primary Objective</th>
                      <th className="py-3 px-4">Benchmark Metric</th>
                      <th className="py-3 px-4">Policy / Compliance Note</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E8DED0] text-[#141414]">
                    <tr>
                      <td className="py-4 px-4 font-bold">Meta Ads (IG &amp; FB)</td>
                      <td className="py-4 px-4">Top-of-funnel customer acquisition &amp; retargeting</td>
                      <td className="py-4 px-4 font-semibold text-[#B88746]">3.2x – 4.8x ROAS / ₹150 CPL</td>
                      <td className="py-4 px-4 text-[#77716A]">Strict AYUSH &amp; body-image policy compliance</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold">Google Search &amp; PMax</td>
                      <td className="py-4 px-4">High-intent patient symptom &amp; product capture</td>
                      <td className="py-4 px-4 font-semibold text-[#B88746]">+32% Booking Conversion</td>
                      <td className="py-4 px-4 text-[#77716A]">LegitScript and healthcare advertiser verification</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-bold">ChatGPT Sponsored Pilot</td>
                      <td className="py-4 px-4">Contextual AI recommendation search engine</td>
                      <td className="py-4 px-4 font-semibold text-[#B88746]">Early Mover Advantage</td>
                      <td className="py-4 px-4 text-[#77716A]">Semantic conversational prompt indexing</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Social Media Extra: 62-Day Content Framework */}
          {pillar.extraSection.type === "content-calendar" && (
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8DED0] space-y-2">
                <div className="text-xs font-bold uppercase text-[#B88746]">Pillar 1 · 35%</div>
                <h4 className="text-base font-bold text-[#141414] font-heading">Clinical / Product Authority</h4>
                <p className="text-xs text-[#77716A]">Doctor-led patient guides, ingredient deep-dives, and debunking industry myths.</p>
              </div>
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8DED0] space-y-2">
                <div className="text-xs font-bold uppercase text-[#B88746]">Pillar 2 · 25%</div>
                <h4 className="text-base font-bold text-[#141414] font-heading">Social Proof &amp; Transformations</h4>
                <p className="text-xs text-[#77716A]">Real patient reviews, unboxing reactions, and behind-the-scenes clinic footage.</p>
              </div>
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8DED0] space-y-2">
                <div className="text-xs font-bold uppercase text-[#B88746]">Pillar 3 · 20%</div>
                <h4 className="text-base font-bold text-[#141414] font-heading">Relatable &amp; Trending Hooks</h4>
                <p className="text-xs text-[#77716A]">Fast-paced vertical formats tailored to the latest cultural and lifestyle conversations.</p>
              </div>
              <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-[#E8DED0] space-y-2">
                <div className="text-xs font-bold uppercase text-[#B88746]">Pillar 4 · 20%</div>
                <h4 className="text-base font-bold text-[#141414] font-heading">Direct Conversion Offers</h4>
                <p className="text-xs text-[#77716A]">Clear calendar booking links, festival promotions, and 3-hour local delivery announcements.</p>
              </div>
            </div>
          )}

          {/* AI Automation Extra: Interactive WhatsApp Agent Simulator */}
          {pillar.extraSection.type === "ai-simulator" && (
            <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-[#E8DED0] shadow-xl overflow-hidden">
              <div className="bg-[#075E54] text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">
                    WI
                  </div>
                  <div>
                    <div className="font-bold text-sm">wink&apos;AI Assistant · Jainam Tours Demo</div>
                    <div className="text-[11px] text-white/80">Online · Powered by Claude + n8n</div>
                  </div>
                </div>
                <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">Official API</span>
              </div>

              <div className="p-4 sm:p-6 bg-[#ECE5DD] min-h-[300px] space-y-3 overflow-y-auto">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex flex-col max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
                        msg.sender === "user"
                          ? "bg-[#DCF8C6] text-[#141414] rounded-tr-none"
                          : "bg-white text-[#141414] rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[9px] text-[#77716A] px-1 mt-0.5">{msg.time}</span>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendSimulation} className="p-3 bg-white border-t border-[#E8DED0] flex gap-2">
                <input
                  type="text"
                  placeholder="Type a test inquiry (e.g. Do you have tours in November?)..."
                  value={inputMsg}
                  onChange={(e) => setInputMsg(e.target.value)}
                  className="flex-1 px-4 py-2 text-xs sm:text-sm rounded-xl border border-[#E8DED0] focus:outline-none focus:border-[#B88746]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#075E54] text-white rounded-xl text-xs font-bold hover:bg-[#064e46] transition-colors flex items-center gap-1"
                >
                  <span>Send</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* 5. 4-Step Process Section */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E8DED0]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
                Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#141414] tracking-tight mt-1 font-heading">
                How We Deliver, Step By Step
              </h2>
            </div>
            <p className="text-sm text-[#77716A] max-w-md">
              A transparent 4-stage sprint with clear milestones so you always know what is being built and when.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillar.processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-[#E8DED0] shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black text-[#B88746] font-heading">
                      {step.step}
                    </span>
                    <span className="text-xs font-bold uppercase px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8DED0] text-[#77716A]">
                      {step.weeks}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#141414] font-heading">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#77716A] leading-relaxed">
                    {step.whatHappens}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DED0] space-y-2 text-[11px]">
                  <div>
                    <span className="font-bold text-[#141414]">From You: </span>
                    <span className="text-[#77716A]">{step.whatWeNeed}</span>
                  </div>
                  <div>
                    <span className="font-bold text-[#B88746]">Deliverable: </span>
                    <span className="text-[#141414] font-medium">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Tools and Platforms Stack */}
      <section className="py-16 px-6 md:px-12 bg-white border-y border-[#E8DED0]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
              Modern Technology Ecosystem
            </span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#141414] font-heading">
              Tools &amp; Platforms We Deploy
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {pillar.toolsAndPlatforms.map((tool, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8DED0] text-xs font-semibold text-[#141414] flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#B88746]" />
                <span className="font-bold">{tool.name}</span>
                <span className="text-[#77716A] text-[10px]">({tool.category})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Testimonial & Case Studies */}
      <section id="work" className="py-20 px-6 md:px-12 bg-[#F5EFE6]">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Quote Block */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DED0] shadow-sm max-w-4xl mx-auto text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#B88746] flex items-center justify-center mx-auto text-2xl font-serif">
              &ldquo;
            </div>
            <p className="text-lg sm:text-2xl font-medium text-[#141414] font-heading italic leading-relaxed">
              &ldquo;{pillar.testimonial.quote}&rdquo;
            </p>
            <div>
              <div className="font-bold text-base text-[#141414] font-heading">
                {pillar.testimonial.author}
              </div>
              <div className="text-xs text-[#77716A]">
                {pillar.testimonial.role} · <span className="text-[#B88746] font-semibold">{pillar.testimonial.company}</span>
              </div>
            </div>
          </div>

          {/* Related Case Studies Grid */}
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
                  Real Outcomes
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#141414] font-heading tracking-tight mt-1">
                  Selected {pillar.navLabel} Case Studies
                </h3>
              </div>
              <Link
                href="/work"
                className="text-xs font-bold uppercase tracking-wider text-[#B88746] hover:text-[#9E7234] flex items-center gap-1.5"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCases.map((study) => (
                <div
                  key={study.id}
                  onClick={() => setSelectedCase(study)}
                  className="bg-white rounded-2xl p-6 border border-[#E8DED0] hover:border-[#B88746] shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E8DED0] text-[#77716A]">
                        {study.industryLabel}
                      </span>
                      <span className="text-xs font-black text-[#B88746] font-heading">
                        {study.highlightStat.value}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-[#141414] group-hover:text-[#B88746] transition-colors font-heading leading-snug">
                      {study.client}
                    </h4>

                    <p className="text-xs text-[#77716A] line-clamp-3 leading-relaxed">
                      {study.oneLineResult}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#E8DED0] flex items-center justify-between text-xs font-semibold text-[#141414]">
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
              Real Sales-Call Answers
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#141414] font-heading tracking-tight">
              {pillar.navLabel} FAQs
            </h2>
            <p className="text-sm text-[#77716A]">
              Clear information on timelines, ownership, and technical standards before you book a call.
            </p>
          </div>

          <div className="space-y-4">
            {pillar.faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#E8DED0] bg-white overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#141414] hover:text-[#B88746] transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#B88746] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        <div className="px-5 sm:px-6 pb-6 text-sm text-[#77716A] leading-relaxed border-t border-[#FAF8F5] pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. Closing CTA Band + Footer */}
      <ClosingCTA />
      <Footer />
    </main>
  );
}
