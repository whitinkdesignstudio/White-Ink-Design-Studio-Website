"use client";

import React from "react";

const clientListRow1 = [
  "DISHANT AYURVEDIC",
  "SETU CHILD DEVELOPMENT",
  "DR. RECKEWEG & CO",
  "HCCT HEALTHCARE",
  "HEVERT GERMANY",
  "PREMIUM MANDLI",
  "NOURISH LIFESTYLE",
  "WELLNESS BRANDS GLOBAL",
];

const clientListRow2 = [
  "BRAND STRATEGY",
  "IDENTITY SYSTEMS",
  "UI/UX ENGINEERING",
  "PACKAGING DESIGN",
  "PERFORMANCE MARKETING",
  "SCROLL-STOPPING VISUALS",
  "DIGITAL ECOSYSTEMS",
  "EVENT BRANDING",
];

export default function MarqueeClients() {
  return (
    <div className="w-full py-10 bg-[#F4F0E8] border-y border-[#E8E3DA] overflow-hidden relative select-none">
      {/* Subtle fade edges matching the light cream color */}
      <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#F4F0E8] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#F4F0E8] to-transparent z-10 pointer-events-none" />

      {/* Row 1 - Marquee Forward */}
      <div className="flex overflow-hidden py-2">
        <div className="animate-marquee-infinite flex items-center gap-10 whitespace-nowrap">
          {[...clientListRow1, ...clientListRow1].map((client, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 text-[#141414] hover:text-[#B88746] transition-colors duration-300 font-heading text-lg md:text-xl font-black tracking-widest uppercase cursor-default"
            >
              <span>{client}</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#B88746]" />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Marquee Reverse */}
      <div className="flex overflow-hidden py-2 mt-2">
        <div className="animate-marquee-reverse-infinite flex items-center gap-10 whitespace-nowrap">
          {[...clientListRow2, ...clientListRow2].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-8 text-[#5C5852] hover:text-[#141414] transition-colors duration-300 font-heading text-sm md:text-base font-bold tracking-wider uppercase cursor-default"
            >
              <span>{item}</span>
              <span className="text-[#B88746] font-black">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
