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
  HelpCircle,
  ChevronDown,
  Globe,
  Clock,
  ShieldCheck,
  Zap,
  Calendar,
  MessageCircle,
  FileCheck,
  BarChart3,
  Flame
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClosingCTA from "@/components/ClosingCTA";
import FreeAuditModal from "@/components/services/FreeAuditModal";
import CaseStudyModal from "@/components/work/CaseStudyModal";
import { SERVICES_DATA, ENGAGEMENT_MODELS, SERVICES_HUB_FAQS, ServicePillar } from "@/data/servicesData";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudiesData";

type Currency = "inr" | "gbp" | "usd";

export default function ServicesHubClient() {
  const [currency, setCurrency] = useState<Currency>("inr");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [auditOpen, setAuditOpen] = useState(false);
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Selected work across services
  const featuredCases = [
    CASE_STUDIES.find((c) => c.slug === "speciality-homeopathy")!,
    CASE_STUDIES.find((c) => c.slug === "dr-reckeweg")!,
    CASE_STUDIES.find((c) => c.slug === "wand-fragrance")!,
    CASE_STUDIES.find((c) => c.slug === "the-alpha-cpas")!,
  ].filter(Boolean);

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

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#141414] relative selection:bg-[#B88746] selection:text-white">
      {/* Subpage Header */}
      <Navbar showNav={true} isSubpage={true} />

      {/* Audit Modal */}
      <FreeAuditModal isOpen={auditOpen} onClose={() => setAuditOpen(false)} />

      {/* Case Study Modal */}
      {selectedCase && (
        <CaseStudyModal
          caseStudy={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}

      {/* 1. Hero Section */}
      <section className="pt-32 sm:pt-40 pb-16 px-6 md:px-12 border-b border-[#E8DED0] relative overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#FAF8F5] to-[#F5EFE6]">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#C59A58]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          {/* Breadcrumbs & Last Updated */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs text-[#77716A]">
            <nav aria-label="Breadcrumb" className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#B88746] transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-[#141414] font-semibold">Services</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E8DED0] text-[11px] font-medium text-[#77716A]">
              <span className="w-2 h-2 rounded-full bg-[#B88746] animate-pulse" />
              <span>Updated 20 October 2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DED0] shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#B88746]">
                  DESIGN & GROWTH STUDIO · AHMEDABAD & LONDON
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase text-[#141414] tracking-tight leading-[1.05] font-heading">
                One Studio, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                  Five Ways To Grow
                </span>{" "}
                Your Brand.
              </h1>

              {/* Master Plan AI Answer Block */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E8DED0] shadow-sm max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-widest text-[#B88746] mb-1.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>The White Ink Capability Blueprint</span>
                </p>
                <p className="text-sm sm:text-base text-[#141414] leading-relaxed">
                  White Ink Design Studio is a branding, website design, and growth studio founded in 2018, with 11 people in Ahmedabad and UK representation. We have built 50+ websites and served 400+ brands (including 70+ in healthcare) through 5 integrated pillars: Website Design, Brand Identity, Growth Marketing, Content Production, and AI Automation (wink&apos;AI).
                </p>
              </div>
            </div>

            {/* Region / Currency Switcher Card */}
            <div className="lg:col-span-4 flex flex-col justify-end">
              <div className="p-5 rounded-2xl bg-white border border-[#E8DED0] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#77716A] flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#B88746]" />
                    <span>Select Pricing Currency:</span>
                  </span>
                  <span className="text-[11px] text-[#B88746] font-semibold">Fixed Scope Quotes</span>
                </div>

                <div className="grid grid-cols-3 gap-2 bg-[#FAF8F5] p-1.5 rounded-xl border border-[#E8DED0]">
                  <button
                    onClick={() => setCurrency("inr")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold tracking-wider transition-all duration-200 ${
                      currency === "inr"
                        ? "bg-[#141414] text-white shadow-sm"
                        : "text-[#77716A] hover:text-[#141414]"
                    }`}
                  >
                    IN (₹)
                  </button>
                  <button
                    onClick={() => setCurrency("gbp")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold tracking-wider transition-all duration-200 ${
                      currency === "gbp"
                        ? "bg-[#141414] text-white shadow-sm"
                        : "text-[#77716A] hover:text-[#141414]"
                    }`}
                  >
                    UK (£)
                  </button>
                  <button
                    onClick={() => setCurrency("usd")}
                    className={`py-2 px-3 rounded-lg text-xs font-bold tracking-wider transition-all duration-200 ${
                      currency === "usd"
                        ? "bg-[#141414] text-white shadow-sm"
                        : "text-[#77716A] hover:text-[#141414]"
                    }`}
                  >
                    US ($)
                  </button>
                </div>

                <p className="text-[11px] text-[#77716A] leading-normal">
                  {currency === "inr" && "Showing standard Indian pricing with GST invoice compliance."}
                  {currency === "gbp" && "Invoicing in GBP (£) for UK clients with overlap working hours."}
                  {currency === "usd" && "Invoicing in USD ($) via Wise/Stripe with EST morning calls."}
                </p>

                <button
                  onClick={() => setAuditOpen(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#E8DED0] hover:border-[#B88746] text-[#141414] font-bold text-xs uppercase tracking-wider transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>Not Sure Where To Start? Get Audit</span>
                </button>
              </div>
            </div>
          </div>

          {/* Proof Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#E8DED0]">
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#141414] font-heading">400+</div>
              <div className="text-xs text-[#77716A] font-medium mt-0.5">Brands Served Since 2018</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#B88746] font-heading">70+</div>
              <div className="text-xs text-[#77716A] font-medium mt-0.5">Healthcare & Clinic Brands</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#141414] font-heading">50+</div>
              <div className="text-xs text-[#77716A] font-medium mt-0.5">Websites & Stores Built</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black text-[#141414] font-heading">11 People</div>
              <div className="text-xs text-[#77716A] font-medium mt-0.5">Senior In-House Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Five Pillars Section */}
      <section id="pillars" className="py-20 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
                Our Core Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#141414] tracking-tight mt-1 font-heading">
                The Five Pillars
              </h2>
            </div>
            <p className="text-sm text-[#77716A] max-w-md">
              Every pillar is built to stand independently or integrate seamlessly into a complete brand and acquisition flywheel.
            </p>
          </div>

          {/* Pillars List */}
          <div className="space-y-8">
            {SERVICES_DATA.map((pillar) => {
              const Icon = getPillarIcon(pillar.id);
              const priceObj = pillar.pricing[currency];
              const isLead = pillar.id === "website-design";

              return (
                <div
                  key={pillar.id}
                  className={`relative rounded-3xl p-6 sm:p-8 md:p-10 transition-all duration-300 border ${
                    isLead
                      ? "bg-white border-[#B88746] shadow-xl ring-1 ring-[#B88746]/20"
                      : "bg-white/80 hover:bg-white border-[#E8DED0] hover:border-[#B88746]/50 shadow-sm hover:shadow-lg"
                  }`}
                >
                  {isLead && (
                    <div className="absolute -top-3 left-8 px-4 py-1 rounded-full bg-[#B88746] text-white text-[11px] font-bold uppercase tracking-widest shadow-md flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Primary Core Service · 50+ Sites Built</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left: Pillar Identity & Description */}
                    <div className="lg:col-span-5 space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl sm:text-4xl font-black text-[#B88746] font-heading">
                          {pillar.number}
                        </span>
                        <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8DED0] flex items-center justify-center text-[#B88746]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#77716A]">
                          {pillar.navLabel}
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-black text-[#141414] font-heading leading-snug">
                        {pillar.title}
                      </h3>

                      <p className="text-sm text-[#77716A] leading-relaxed">
                        {pillar.tagline}
                      </p>

                      {/* Pricing Tag */}
                      <div className="pt-2">
                        <div className="text-[11px] font-bold uppercase tracking-wider text-[#77716A]">
                          Starting Investment
                        </div>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-2xl sm:text-3xl font-black text-[#141414] font-heading">
                            {priceObj.from}
                          </span>
                          <span className="text-xs text-[#77716A]">({priceObj.suffix})</span>
                        </div>
                        <p className="text-[11px] text-[#A39E93] mt-1">{priceObj.typicalRange}</p>
                      </div>

                      <div className="pt-2">
                        <Link
                          href={`/services/${pillar.slug}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#141414] hover:bg-[#B88746] text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md font-heading group"
                        >
                          <span>Explore {pillar.navLabel} Details</span>
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>

                    {/* Center: What is Included / Deliverables */}
                    <div className="lg:col-span-4 space-y-3">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#141414] pb-1 border-b border-[#E8DED0]">
                        Key Deliverables Included
                      </div>
                      <ul className="space-y-2.5">
                        {pillar.deliverables.slice(0, 5).map((del, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-[#141414]">
                            <CheckCircle2 className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                            <div>
                              <span className="font-semibold">{del.title}</span>
                              <span className="text-[#77716A] hidden sm:inline"> — {del.description}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right: Key Proof & Proof Clients */}
                    <div className="lg:col-span-3 space-y-4 bg-[#FAF8F5] p-5 rounded-2xl border border-[#E8DED0]">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#77716A]">
                        Verified Impact
                      </div>

                      <div className="space-y-3">
                        {pillar.keyProof.slice(0, 2).map((kp, idx) => (
                          <div key={idx} className="border-b border-[#E8DED0] pb-2 last:border-0 last:pb-0">
                            <div className="text-xl font-black text-[#141414] font-heading">{kp.stat}</div>
                            <div className="text-[11px] font-semibold text-[#B88746]">{kp.label}</div>
                            <div className="text-[10px] text-[#77716A]">{kp.detail}</div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-2">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#77716A] mb-1.5">
                          Flagship Proof
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {pillar.relatedCaseSlugs.slice(0, 3).map((slug) => {
                            const found = CASE_STUDIES.find((c) => c.slug === slug);
                            if (!found) return null;
                            return (
                              <button
                                key={slug}
                                onClick={() => setSelectedCase(found)}
                                className="px-2.5 py-1 rounded-lg bg-white hover:bg-[#B88746] hover:text-white border border-[#E8DED0] text-[11px] font-semibold text-[#141414] transition-all"
                              >
                                {found.client}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. How They Connect (3-Step Strip from Master Plan) */}
      <section className="py-16 px-6 md:px-12 bg-[#F5EFE6] border-y border-[#E8DED0] relative">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
              The Growth Flywheel
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-[#141414] font-heading tracking-tight">
              How The Five Pillars Connect
            </h2>
            <p className="text-sm text-[#77716A]">
              &ldquo;Most clients start with a website or brand, then grow it with ads and content.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {/* Step 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DED0] shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8DED0] text-[#B88746] font-black flex items-center justify-center font-heading text-lg">
                01
              </div>
              <h3 className="text-xl font-black uppercase text-[#141414] font-heading">
                The Foundation
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#B88746]">
                Website Design + Brand Identity
              </p>
              <p className="text-sm text-[#77716A] leading-relaxed">
                Before spending a single rupee on ads, your brand looks credible and your website loads in under 1.5 seconds with clear conversion paths and doctor/founder authority.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DED0] shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8DED0] text-[#B88746] font-black flex items-center justify-center font-heading text-lg">
                02
              </div>
              <h3 className="text-xl font-black uppercase text-[#141414] font-heading">
                The Distribution
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#B88746]">
                Growth Marketing + Social Video
              </p>
              <p className="text-sm text-[#77716A] leading-relaxed">
                Traffic is driven through policy-compliant Meta/Google Ads and high-retention vertical Reels crafted by the exact studio that engineered the brand story.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E8DED0] shadow-sm relative space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8DED0] text-[#B88746] font-black flex items-center justify-center font-heading text-lg">
                03
              </div>
              <h3 className="text-xl font-black uppercase text-[#141414] font-heading">
                The Scale & Automation
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#B88746]">
                wink&apos;AI WhatsApp Agents + CRO
              </p>
              <p className="text-sm text-[#77716A] leading-relaxed">
                Every inbound inquiry is qualified and booked in under 60 seconds by autonomous WhatsApp agents (Claude + n8n), even at 2am when competitors are asleep.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engagement Models (Master Plan Page 17) */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
                Transparent Terms
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#141414] tracking-tight mt-1 font-heading">
                Engagement Models
              </h2>
            </div>
            <p className="text-sm text-[#77716A] max-w-md">
              Choose how you want to work with us: fixed deliverables, continuous monthly growth sprints, or a rapid 2-week launch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <div
                key={model.id}
                className="bg-white p-7 rounded-3xl border border-[#E8DED0] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#E8DED0] text-[11px] font-bold uppercase tracking-wider text-[#B88746]">
                    {model.timeline}
                  </div>
                  <h3 className="text-2xl font-black text-[#141414] font-heading">
                    {model.name}
                  </h3>
                  <p className="text-xs font-bold text-[#B88746] uppercase tracking-wide">
                    {model.tagline}
                  </p>
                  <p className="text-xs text-[#77716A] leading-relaxed">
                    {model.description}
                  </p>

                  <div className="pt-3 border-t border-[#E8DED0] space-y-2">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#141414]">
                      Includes:
                    </div>
                    <ul className="space-y-2 text-xs text-[#141414]">
                      {model.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B88746] shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E8DED0] space-y-3">
                  <div className="text-[11px] text-[#77716A]">
                    <span className="font-semibold text-[#141414]">Terms:</span> {model.paymentTerms}
                  </div>
                  <button
                    onClick={() => setAuditOpen(true)}
                    className="w-full py-3 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#141414] hover:text-white border border-[#E8DED0] text-[#141414] font-bold text-xs uppercase tracking-wider transition-all font-heading"
                  >
                    Discuss {model.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Free Strategic Audit Banner (Master Plan Page 6) */}
      <section className="py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#141414] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#B88746]/20 rounded-full blur-[140px] pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#C59A58] text-xs font-bold uppercase tracking-widest">
                  Not Sure Where To Start?
                </span>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight font-heading">
                  Get A Free 3-Point Strategic Audit
                </h3>
                <p className="text-sm sm:text-base text-[#A39E93] max-w-2xl leading-relaxed">
                  Send us your current website, ad campaigns, or brand collateral. Our founders will personally review your conversion leaks, PageSpeed benchmarks, and search presence. No sales pitch, just 3 specific things to fix.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <button
                  onClick={() => setAuditOpen(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#B88746] hover:bg-[#9E7234] text-white font-bold text-sm uppercase tracking-wider transition-all shadow-xl font-heading"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Request Free Audit</span>
                </button>
                <a
                  href="https://wa.me/918160511477?text=Hi%20White%20Ink,%20I'd%20like%20to%20discuss%20a%20project%20audit."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider transition-all border border-white/10 font-heading"
                >
                  <MessageCircle className="w-4 h-4 text-[#C59A58]" />
                  <span>WhatsApp A Founder</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Selected Case Studies */}
      <section className="py-20 px-6 md:px-12 bg-[#F5EFE6] border-y border-[#E8DED0]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
                Proven Across Categories
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#141414] tracking-tight mt-1 font-heading">
                Selected Work & Outcomes
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B88746] hover:text-[#9E7234] transition-colors"
            >
              <span>View All 50+ Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCases.map((study) => (
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

                  <h3 className="text-lg font-bold text-[#141414] group-hover:text-[#B88746] transition-colors font-heading leading-snug">
                    {study.client}
                  </h3>

                  <p className="text-xs text-[#77716A] line-clamp-3 leading-relaxed">
                    {study.oneLineResult}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E8DED0] flex items-center justify-between text-xs font-semibold text-[#141414]">
                  <span>{study.serviceLabel}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#B88746] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Services Hub FAQ Section */}
      <section className="py-20 px-6 md:px-12 bg-[#FAF8F5]">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B88746]">
              Clarity Before You Call
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-[#141414] font-heading tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#77716A]">
              Straight answers on pricing, IP ownership, international collaboration, and timelines.
            </p>
          </div>

          <div className="space-y-4">
            {SERVICES_HUB_FAQS.map((faq, idx) => {
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

      {/* 8. Closing CTA (Band 1) */}
      <ClosingCTA />

      {/* 9. Footer (Band 2, 3, 4) */}
      <Footer />
    </main>
  );
}
