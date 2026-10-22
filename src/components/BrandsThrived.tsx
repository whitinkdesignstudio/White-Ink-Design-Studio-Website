"use client";

import { motion } from "framer-motion";

interface BrandCard {
  name: string;
  tagline: string;
  category: string;
  accent: string;
  initials: string;
}

const col1Brands: BrandCard[] = [
  {
    name: "Dr. Reckeweg",
    tagline: "Germany & India",
    category: "Pharma Flagship",
    accent: "#EA4335",
    initials: "DR",
  },
  {
    name: "Zydus Hospitals",
    tagline: "Healthcare Group",
    category: "IVF & Patient UX",
    accent: "#0284C7",
    initials: "ZH",
  },
  {
    name: "Wand Fragrance",
    tagline: "D2C Perfumery",
    category: "Shopify Flagship",
    accent: "#B88746",
    initials: "WF",
  },
  {
    name: "SNG Eco India",
    tagline: "Manufacturing",
    category: "B2B Export Web",
    accent: "#16A34A",
    initials: "SNG",
  },
  {
    name: "GENZATRI",
    tagline: "Cultural Festival",
    category: "Ticketing Engine",
    accent: "#9333EA",
    initials: "GZ",
  },
  {
    name: "Speciality Homeopathy",
    tagline: "Clinical Care",
    category: "14-Page Portal",
    accent: "#0D9488",
    initials: "SH",
  },
];

const col2Brands: BrandCard[] = [
  {
    name: "Hevert Germany",
    tagline: "European Medicines",
    category: "Brand Campaign",
    accent: "#2563EB",
    initials: "HG",
  },
  {
    name: "UPFOLD",
    tagline: "Coravix Global",
    category: "24-SKU Shopify",
    accent: "#D97706",
    initials: "UF",
  },
  {
    name: "The Alpha CPA's",
    tagline: "US Accounting",
    category: "Brand Identity",
    accent: "#1E3A8A",
    initials: "AC",
  },
  {
    name: "Pushpam Jewellers",
    tagline: "Heritage Luxury",
    category: "Identity & Print",
    accent: "#B88746",
    initials: "PJ",
  },
  {
    name: "Dr. Harshil Shah",
    tagline: "Surgical Practice",
    category: "Personal Brand",
    accent: "#0284C7",
    initials: "DH",
  },
  {
    name: "MDP Coffee",
    tagline: "Artisan Roasters",
    category: "Pitch & Packaging",
    accent: "#78350F",
    initials: "MDP",
  },
];

const col3Brands: BrandCard[] = [
  {
    name: "WellScience UK",
    tagline: "International Health",
    category: "Overseas Identity",
    accent: "#4F46E5",
    initials: "WS",
  },
  {
    name: "Jainam Tours",
    tagline: "Premier Travel",
    category: "SEO & WhatsApp",
    accent: "#EA580C",
    initials: "JT",
  },
  {
    name: "Igloo",
    tagline: "Commercial Systems",
    category: "Product Catalog",
    accent: "#0891B2",
    initials: "IG",
  },
  {
    name: "Dishant Ayurvedic",
    tagline: "Holistic Wellness",
    category: "Packaging Design",
    accent: "#15803D",
    initials: "DA",
  },
  {
    name: "Setu Child Dev",
    tagline: "Pediatric Clinic",
    category: "Digital UX",
    accent: "#CA8A04",
    initials: "SC",
  },
  {
    name: "Adinath Ghee",
    tagline: "Organic FMCG",
    category: "Packaging System",
    accent: "#C59A58",
    initials: "AG",
  },
];

function BrandCardItem({ brand }: { brand: BrandCard }) {
  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-md border border-[#E8E3DA] hover:border-[#B88746] transition-all duration-300 flex flex-col items-center justify-center text-center aspect-square sm:aspect-[4/3] group select-none">
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-black text-xs sm:text-sm font-heading mb-2 sm:mb-2.5 shadow-sm transition-transform duration-300 group-hover:scale-110"
        style={{
          backgroundColor: `${brand.accent}15`,
          color: brand.accent,
          border: `1.5px solid ${brand.accent}30`,
        }}
      >
        {brand.initials}
      </div>

      <h4 className="text-xs sm:text-sm md:text-base font-black text-[#141414] font-heading uppercase tracking-tight group-hover:text-[#B88746] transition-colors leading-tight line-clamp-1">
        {brand.name}
      </h4>

      <p className="text-[10px] sm:text-[11px] font-semibold text-[#8C8275] mt-0.5 line-clamp-1">
        {brand.tagline}
      </p>

      <span className="mt-2 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#FAF8F5] border border-[#E8E3DA] text-[#141414]/70">
        {brand.category}
      </span>
    </div>
  );
}

export default function BrandsThrived() {
  return (
    <section id="clients" className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-center items-center py-8 lg:py-0 px-4 sm:px-6 md:px-12 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl w-full mx-auto my-auto">
        {/* Outer Frame with Thick Studio Gold Border (Exact Style from Attached Reference Image) */}
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] bg-[#141414] text-white border-4 sm:border-[5px] border-[#B88746] shadow-2xl overflow-hidden p-5 sm:p-7 md:p-8 lg:p-10">
          {/* Subtle Warm Background Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Dot Grid Texture on Left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255, 255, 255, 0.25) 1.2px, transparent 1.2px)",
              backgroundSize: "22px 22px",
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* ========================================================================= */}
            {/* LEFT SIDE: BOLD STYLIZED 3D POSTER TYPOGRAPHY                              */}
            {/* ========================================================================= */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 lg:space-y-5">
              {/* Eyebrow / Tag */}
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#B88746]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#B88746] animate-pulse" />
                <span>Our Clientele Ecosystem</span>
              </div>

              {/* Bold 3D Headline matching Reference Image */}
              <div className="space-y-0.5 sm:space-y-1 select-none">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white font-heading drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                  BRANDS{" "}
                  <span className="text-[#B88746] drop-shadow-[0_2px_10px_rgba(184,135,70,0.5)]">
                    THAT
                  </span>
                </h3>

                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] font-black uppercase tracking-tighter font-heading text-white drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] leading-none">
                  THRIVED
                </div>

                <div className="flex flex-wrap items-baseline gap-2 pt-1">
                  <span className="text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-white font-heading">
                    WITH
                  </span>
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#B88746] font-heading drop-shadow-[0_4px_16px_rgba(184,135,70,0.6)]">
                    WHITE INK
                  </span>
                </div>

                <div className="text-base sm:text-xl lg:text-2xl font-black uppercase tracking-widest text-[#FAF8F5]/80 font-heading">
                  DESIGN STUDIO
                </div>
              </div>

              {/* Editorial Description Matching Image Tone */}
              <p className="text-xs sm:text-sm text-[#D4AF37]/90 font-medium leading-relaxed max-w-md pt-1">
                For over 8 years now, we have infused India and the UK&apos;s top brands with
                clarity, creativity, and confidence through effective branding, high-converting
                websites, and performance growth solutions.
              </p>

              {/* Stats proof pill */}
              <div className="pt-1 flex flex-wrap items-center gap-2.5 text-[11px] font-bold font-mono uppercase text-white/70">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  400+ Total Brands
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  70+ Healthcare
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  50+ Websites
                </span>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* RIGHT SIDE: 3 COLUMNS OF VERTICALLY SCROLLING CLIENT CARDS (OPPOSITE WAYS) */}
            {/* ========================================================================= */}
            <div className="lg:col-span-7 relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[470px] overflow-hidden rounded-2xl">
              {/* Top & Bottom Vignette Gradient Fades */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#141414] to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#141414] to-transparent z-20 pointer-events-none" />

              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 h-full">
                {/* ========================================================= */}
                {/* COLUMN 1: MOVES BOTTOM TO UP (UPWARD MARQUEE)             */}
                {/* ========================================================= */}
                <div className="overflow-hidden h-full">
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                      duration: 18,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    className="flex flex-col gap-3 sm:gap-4 md:gap-5 will-change-transform"
                  >
                    {[...col1Brands, ...col1Brands].map((brand, bIdx) => (
                      <BrandCardItem key={`col1-${bIdx}`} brand={brand} />
                    ))}
                  </motion.div>
                </div>

                {/* ========================================================= */}
                {/* COLUMN 2: MOVES OPPOSITE (TOP TO BOTTOM DOWNWARD MARQUEE) */}
                {/* ========================================================= */}
                <div className="overflow-hidden h-full">
                  <motion.div
                    animate={{ y: ["-50%", "0%"] }}
                    transition={{
                      duration: 22,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    className="flex flex-col gap-3 sm:gap-4 md:gap-5 will-change-transform"
                  >
                    {[...col2Brands, ...col2Brands].map((brand, bIdx) => (
                      <BrandCardItem key={`col2-${bIdx}`} brand={brand} />
                    ))}
                  </motion.div>
                </div>

                {/* ========================================================= */}
                {/* COLUMN 3: MOVES OPPOSITE (BOTTOM TO UP UPWARD MARQUEE)   */}
                {/* ========================================================= */}
                <div className="overflow-hidden h-full">
                  <motion.div
                    animate={{ y: ["0%", "-50%"] }}
                    transition={{
                      duration: 20,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    className="flex flex-col gap-3 sm:gap-4 md:gap-5 will-change-transform"
                  >
                    {[...col3Brands, ...col3Brands].map((brand, bIdx) => (
                      <BrandCardItem key={`col3-${bIdx}`} brand={brand} />
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

