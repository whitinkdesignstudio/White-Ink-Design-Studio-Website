"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

interface PortfolioItem {
  id: string;
  number: string;
  client: string;
  description: string;
  artwork: React.ReactNode;
}

export default function FeaturedWork() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: "dr-reckeweg",
      number: "01",
      client: "Dr. Reckeweg & Co.",
      description:
        "Dr. Reckeweg & Co. scaled pan-India remedy enquiries with 100% AYUSH & Meta advertising compliance across Google PMax funnels and ChatGPT ads pilot.",
      artwork: (
        <div className="relative w-full h-full overflow-hidden bg-[#FAF8F5]">
          <img
            src="/images/portfolio/dr-reckeweg-wide.png"
            alt="Dr. Reckeweg & Co. Germany"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      id: "speciality-homeo",
      number: "02",
      client: "Speciality Homeopathy",
      description:
        "Grapes Worldwide congratulates Dr. Ketan Patel on turning his specialist clinic into a 14-page custom Next.js portal with sub-second appointment scheduling.",
      artwork: (
        <div className="relative w-full h-full overflow-hidden bg-[#FAF8F5]">
          <img
            src="/images/portfolio/speciality-homeopathy-wide.png"
            alt="Speciality Homeopathy - Dr. Ketan Patel"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      id: "wand-fragrance",
      number: "03",
      client: "Wand Fragrance",
      description:
        "Wand Fragrance's luxury Shopify flagship engineered with 3-hour local dispatch, one-click checkout, and high-converting Meta creative systems.",
      artwork: (
        <div className="relative w-full h-full overflow-hidden bg-[#0A0A0A]">
          <img
            src="/images/portfolio/wand-fragrance-wide.png"
            alt="Wand Fragrance - The Chronicles of the Ancients"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      id: "dishant-ayurveda",
      number: "04",
      client: "Dishant Ayurvedic",
      description:
        "Dishant Ayurvedic brought traditional holistic herbal formulations into modern retail through a bespoke packaging system and high-retention e-commerce store.",
      artwork: (
        <div className="relative w-full h-full overflow-hidden bg-[#FAF8F5]">
          <img
            src="/images/portfolio/dishant-ayurvedic-wide.png"
            alt="Dishant Ayurvedic Suppliers - Acika & Gaska"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ),
    },
    {
      id: "zydus-hospitals",
      number: "05",
      client: "Zydus Hospitals / IVF",
      description:
        "Zydus Hospitals streamlined patient intake flows and multi-speciality doctor appointment routing across Western India, reducing patient wait friction by 65%.",
      artwork: (
        <div className="relative w-full h-full overflow-hidden bg-[#FAF8F5]">
          <img
            src="/images/portfolio/zydus-hospitals-wide.png"
            alt="Zydus Hospitals - Centre of Excellence in Transplant Surgeries"
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
      ),
    },
  ];

  return (
    <section
      id="work"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between bg-[#FAF8F5] text-[#141414] select-none overflow-hidden border-t border-[#E8DED0]"
    >
      {/* ========================================================================= */}
      {/* SECTION HEADER: MATCHING "IN THE NEWS" HIGH-FASHION EDITORIAL TYPOGRAPHY   */}
      {/* ========================================================================= */}
      <div className="w-full px-6 md:px-12 pt-7 pb-4 lg:pt-7 lg:pb-4">
        <div className="flex items-center justify-between gap-4">
          {/* Main Giant Headline matching exact Raleway specification */}
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-normal text-[#141414] font-raleway leading-tight">
            SELECTED PORTFOLIO
          </h2>

          {/* Right Action Button: Rounded Pill "VIEW ALL →" */}
          <a
            href="mailto:connect@whiteinkdesignstudio.com?subject=Inquiry%20Regarding%20Portfolio"
            className="group inline-flex items-center gap-2 px-5 py-2 sm:px-6 sm:py-2.5 rounded-full border border-[#141414] hover:bg-[#141414] text-[#141414] hover:text-[#FAF8F5] transition-all duration-300 text-xs sm:text-sm font-semibold tracking-wider uppercase shrink-0 shadow-sm"
          >
            <span>VIEW ALL</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Horizontal Divider Line under Header */}
      <div className="w-full h-[1px] bg-[#E8DED0]" />

      {/* ========================================================================= */}
      {/* 5-COLUMN ACCORDION STAGE                                                  */}
      {/* Photo is square before hover, expands horizontally to reveal full artwork */}
      {/* ========================================================================= */}
      <div className="flex-1 w-full flex flex-col lg:flex-row items-stretch overflow-hidden">
        {portfolioItems.map((item, idx) => {
          const isHovered = hoveredIdx === idx;
          const isAnyHovered = hoveredIdx !== null;

          return (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`group relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E8DED0] last:border-r-0 cursor-pointer overflow-hidden transition-[flex] duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isHovered
                  ? "lg:flex-[2.8] bg-[#F5EFE6]"
                  : isAnyHovered
                  ? "lg:flex-[0.55] bg-[#FAF8F5]"
                  : "lg:flex-1 bg-[#FAF8F5]"
              }`}
            >
              {/* TOP PART: PHOTO CONTAINER */}
              {/* In default state (narrow column) it's a square crop; on hover it expands wide into full horizontal artwork */}
              <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[340px] xl:h-[380px] overflow-hidden bg-black/5">
                {item.artwork}
              </div>

              {/* Horizontal Divider between Photo and Description */}
              <div className="w-full h-[1px] bg-[#E8DED0]" />

              {/* BOTTOM PART: NUMBER + DESCRIPTION ONLY (CLEAN MINIMAL MATCH WITH REFERENCE) */}
              <div className="p-4 sm:p-5 lg:p-6 flex items-start gap-3.5 sm:gap-4 flex-1 bg-inherit transition-colors duration-300">
                {/* Left: Large Serif Number with Underline */}
                <div className="shrink-0 flex flex-col items-center">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] text-[#141414] leading-none select-none font-normal">
                    {item.number}
                  </span>
                  <div className="w-8 sm:w-10 h-[1.5px] bg-[#141414] mt-2 transition-all duration-300" />
                </div>

                {/* Right: Description Text (Wraps naturally as the column expands horizontally) */}
                <div className="flex-1 min-w-0">
                  <p className="text-xs sm:text-[13px] text-[#77716A] font-normal leading-relaxed line-clamp-3 lg:line-clamp-4">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
