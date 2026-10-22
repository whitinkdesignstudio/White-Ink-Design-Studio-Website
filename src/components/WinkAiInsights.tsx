"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, ArrowUpRight, MessageSquare, BookOpen, Clock } from "lucide-react";

export default function WinkAiInsights() {
  const articles = [
    {
      title: "How much does a website cost in India vs the UK in 2026?",
      tag: "INTERNATIONAL PRICING",
      readTime: "5 min read",
      desc: "Transparent price bands, offshore vs domestic agency tradeoffs, and what UK founders need to inspect before signing.",
      author: "Akshat Shah",
    },
    {
      title: "Advertising healthcare on Meta & Google without getting rejected",
      tag: "HEALTHCARE COMPLIANCE",
      readTime: "7 min read",
      desc: "The 2026 policy playbook for AYUSH, clinics, and pharma: how to craft high-converting copy that passes ad review.",
      author: "Sarthak Shah",
    },
    {
      title: "Shopify vs Custom Next.js: Which should a D2C brand choose?",
      tag: "E-COMMERCE TECH",
      readTime: "6 min read",
      desc: "Evaluating PageSpeed scores, cart checkout speed, custom app lock-in, and total cost of ownership over 24 months.",
      author: "Forum Shah",
    },
  ];

  return (
    <section id="insights" className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF8F5] border-t border-[#E8E3DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Panel: wink'AI Teaser (Dark Theme / High Tech) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#141414] text-white rounded-3xl p-8 md:p-12 border border-[#141414] shadow-2xl flex flex-col justify-between relative overflow-hidden group"
          >
            {/* Ambient Golden Glow */}
            <div className="absolute -top-16 -right-16 w-60 h-60 bg-[#B88746]/20 rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />

            <div>
              <div className="flex items-center justify-between mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#222222] border border-white/10 text-[11px] font-mono font-bold uppercase tracking-widest text-[#B88746]">
                  <Bot className="w-3.5 h-3.5 text-[#B88746]" />
                  <span>AI & Automation Studio</span>
                </div>
                <span className="text-xs font-mono font-bold text-white/50 tracking-wider">
                  wink&apos;AI
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white font-heading leading-tight mb-4">
                Answer Every Lead <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F5EFEB] to-[#B88746]">
                  In Seconds, Even At 2am
                </span>
              </h3>

              <p className="text-sm text-[#E8E3DA]/80 leading-relaxed mb-6 font-normal">
                Autonomous WhatsApp AI agents built with Claude + n8n. Instantly qualify prospects,
                answer doctor clinic FAQs, route high-intent buyers, and convert one photo shoot into
                30 days of branded social media assets.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-xs text-[#E8E3DA] bg-[#202020] px-4 py-2.5 rounded-xl border border-white/5">
                  <MessageSquare className="w-4 h-4 text-[#B88746] shrink-0" />
                  <span>Sub-2-second conversational response times</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#E8E3DA] bg-[#202020] px-4 py-2.5 rounded-xl border border-white/5">
                  <Sparkles className="w-4 h-4 text-[#B88746] shrink-0" />
                  <span>Direct lead intake routing to your WhatsApp & CRM</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-[#8C8275]">
                Proof: Jainam Tours WhatsApp Bot
              </span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#B88746] text-white hover:bg-[#9E7234] transition-colors text-xs font-bold uppercase tracking-wider font-heading"
              >
                <span>See wink&apos;AI</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Panel: Latest Insights Articles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-[#E8E3DA] shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#E8E3DA]">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B88746] mb-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#B88746]" />
                    <span>Thought Leadership</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-[#141414] font-heading">
                    Latest From The Studio
                  </h3>
                </div>
                <span className="text-xs font-mono font-bold text-[#8C8275] uppercase">
                  Published Quarterly
                </span>
              </div>

              {/* 3 Articles List */}
              <div className="space-y-6">
                {articles.map((art, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E3DA] hover:border-[#B88746] transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#B88746] bg-white px-2.5 py-0.5 rounded-full border border-[#E8E3DA]">
                        {art.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] text-[#8C8275]">
                        <Clock className="w-3 h-3" />
                        {art.readTime}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black uppercase text-[#141414] font-heading group-hover:text-[#B88746] transition-colors leading-snug mb-2">
                      {art.title}
                    </h4>

                    <p className="text-xs text-[#5C5852] leading-relaxed mb-3 font-normal">
                      {art.desc}
                    </p>

                    <div className="text-[11px] font-mono font-semibold text-[#8C8275]">
                      By {art.author} · White Ink Editorial
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

