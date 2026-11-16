"use client";

import { motion } from "framer-motion";
import { getAssetPath } from "@/utils/basePath";

interface BrandCard {
  name: string;
  logo: string;
}

const col1Brands: BrandCard[] = [
  {
    name: "Dr. Reckeweg",
    logo: "/images/clients/dr-reckeweg.png",
  },
  {
    name: "Zydus Hospitals",
    logo: "/images/clients/zydus-hospitals.jpg",
  },
  {
    name: "Wand Fragrance",
    logo: "/images/clients/wand-fragrance.avif",
  },
  {
    name: "SNG Eco India",
    logo: "/images/clients/sng-eco-india.webp",
  },
];

const col2Brands: BrandCard[] = [
  {
    name: "GENZATRI",
    logo: "/images/clients/GENZATRI.webp",
  },
  {
    name: "Speciality Homeopathy",
    logo: "/images/clients/speciality-homeopathy.avif",
  },
  {
    name: "Hevert Germany",
    logo: "/images/clients/hevert-germany.svg",
  },
  {
    name: "Dr. Harshil Shah",
    logo: "/images/clients/dr-harshil-shah.webp",
  },
];

const col3Brands: BrandCard[] = [
  {
    name: "WellScience UK",
    logo: "/images/clients/wellscience-uk.avif",
  },
  {
    name: "Jainam Tours",
    logo: "/images/clients/jainam-tours.avif",
  },
  {
    name: "Dishant Ayurvedic",
    logo: "/images/clients/dishant-ayurvedic.avif",
  },
  {
    name: "Adinath Ghee",
    logo: "/images/clients/adinath-ghee.png",
  },
];

function BrandCardItem({ brand }: { brand: BrandCard }) {
  return (
    <div className="w-full bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-sm border border-[#E8DED0] hover:border-[#B88746] hover:shadow-md transition-all duration-300 flex items-center justify-center aspect-[4/3] group select-none overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={getAssetPath(brand.logo)}
          alt={brand.name}
          className="w-full h-full max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
    </div>
  );
}

// Item for mobile marquee rows
function MobileBrandCardItem({ brand }: { brand: BrandCard }) {
  return (
    <div className="shrink-0 w-[110px] h-[75px] sm:w-[130px] sm:h-[85px] bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-3 border border-[#E8DED0] shadow-sm select-none flex items-center justify-center overflow-hidden">
      <img
        src={getAssetPath(brand.logo)}
        alt={brand.name}
        className="w-full h-full max-w-full max-h-full object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function BrandsThrived() {
  return (
    <section id="clients" className="relative w-full h-screen h-[100dvh] lg:h-screen lg:max-h-screen flex flex-col justify-center items-center py-[10dvh] lg:py-0 px-3 sm:px-6 md:px-12 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl w-full mx-auto my-auto h-full flex flex-col justify-center">
        {/* Outer Frame with Light Beige/Cream Panel Matching Reference Image */}
        <div className="relative w-full h-full max-h-[100dvh] lg:h-auto rounded-[24px] sm:rounded-[32px] bg-[#F5EFE6] text-[#141414] border border-[#E8DED0] shadow-xl overflow-hidden p-4 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-between lg:block">
          {/* Subtle Warm Background Glow */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#B88746]/08 rounded-full blur-[140px] pointer-events-none" />

          {/* Dot Grid Texture on Left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1/2 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(rgba(184, 135, 70, 0.2) 1.2px, transparent 1.2px)",
              backgroundSize: "22px 22px",
            }}
          />

          {/* ========================================================================= */}
          {/* MOBILE ONLY (< lg): 80% SCREEN COVERAGE WITH EQUAL SPACING BETWEEN 3 PARTS */}
          {/* 10% TOP & 10% BOTTOM PADDING / EMPTY SPACE                                 */}
          {/* ========================================================================= */}
          <div className="flex lg:hidden flex-col justify-between items-center w-full h-[80dvh] max-h-[80dvh] my-auto relative z-10 text-center">
            {/* PART 1: HEADING */}
            <div className="w-full text-center shrink-0">
              <h3 className="text-[1.15rem] sm:text-2xl font-black uppercase tracking-tight text-[#141414] font-heading leading-tight">
                BRANDS <span className="text-[#B88746]">THAT</span> THRIVED WITH
              </h3>
              <div className="text-[1.15rem] sm:text-2xl font-black uppercase tracking-tight text-[#B88746] font-heading leading-tight mt-0.5">
                WHITE INK <span className="text-[#141414]">DESIGN STUDIO</span>
              </div>
            </div>

            {/* PART 2: PARAGRAPH & 3 ROUND BORDER BADGES */}
            <div className="space-y-2.5 text-center flex flex-col items-center w-full shrink-0 max-w-md mx-auto px-2">
              <p className="text-[11px] sm:text-xs text-[#77716A] font-medium leading-relaxed max-w-md line-clamp-3 text-center mx-auto">
                For over 8 years now, we have infused India and the UK&apos;s top brands with
                clarity, creativity, and confidence through effective branding, high-converting
                websites, and performance growth solutions.
              </p>

              {/* 3 Texts in round border */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 text-[9px] sm:text-[10px] font-bold font-mono uppercase text-[#141414]">
                <span className="px-2.5 py-1 rounded-full bg-white border border-[#E8DED0] shadow-xs">
                  400+ Total Brands
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-[#E8DED0] shadow-xs">
                  70+ Healthcare
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white border border-[#E8DED0] shadow-xs">
                  50+ Websites
                </span>
              </div>
            </div>

            {/* PART 3: LOGOS KE BOXES (3 Horizontal Marquee Rows of Square Boxes) */}
            <div className="flex flex-col gap-2 relative overflow-hidden py-1 w-full shrink-0">
              {/* Left & Right Vignette Gradient Fades */}
              <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-[#F5EFE6] to-transparent z-10 pointer-events-none" />
              <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-[#F5EFE6] to-transparent z-10 pointer-events-none" />

              {/* ROW 1: LEFT TO RIGHT */}
              <div className="overflow-hidden w-full">
                <motion.div
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                    duration: 22,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="flex gap-2.5 w-max will-change-transform"
                >
                  {[...col1Brands, ...col1Brands, ...col1Brands].map((brand, bIdx) => (
                    <MobileBrandCardItem key={`mob-r1-${bIdx}`} brand={brand} />
                  ))}
                </motion.div>
              </div>

              {/* ROW 2: RIGHT TO LEFT */}
              <div className="overflow-hidden w-full">
                <motion.div
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="flex gap-2.5 w-max will-change-transform"
                >
                  {[...col2Brands, ...col2Brands, ...col2Brands].map((brand, bIdx) => (
                    <MobileBrandCardItem key={`mob-r2-${bIdx}`} brand={brand} />
                  ))}
                </motion.div>
              </div>

              {/* ROW 3: LEFT TO RIGHT */}
              <div className="overflow-hidden w-full">
                <motion.div
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                  }}
                  className="flex gap-2.5 w-max will-change-transform"
                >
                  {[...col3Brands, ...col3Brands, ...col3Brands].map((brand, bIdx) => (
                    <MobileBrandCardItem key={`mob-r3-${bIdx}`} brand={brand} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* DESKTOP VIEW (lg:): ORIGINAL 2-COLUMN + 3 VERTICAL UP/DOWN COLUMNS         */}
          {/* PC VERSION: 100% UNCHANGED AND PRESERVED EXACTLY AS BEFORE                */}
          {/* ========================================================================= */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* LEFT SIDE: BOLD STYLIZED 3D POSTER TYPOGRAPHY */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-4 lg:space-y-5">
              <div className="space-y-0.5 sm:space-y-1 select-none">
                <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#141414] font-heading">
                  BRANDS{" "}
                  <span className="text-[#B88746]">
                    THAT
                  </span>
                </h3>

                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.6rem] font-black uppercase tracking-tighter font-heading text-[#141414] leading-none">
                  THRIVED
                </div>

                <div className="flex flex-wrap items-baseline gap-2 pt-1">
                  <span className="text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#141414] font-heading">
                    WITH
                  </span>
                  <span className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-[#B88746] font-heading">
                    WHITE INK
                  </span>
                </div>

                <div className="text-base sm:text-xl lg:text-2xl font-black uppercase tracking-widest text-[#77716A] font-heading">
                  DESIGN STUDIO
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#77716A] font-medium leading-relaxed max-w-md pt-1">
                For over 8 years now, we have infused India and the UK&apos;s top brands with
                clarity, creativity, and confidence through effective branding, high-converting
                websites, and performance growth solutions.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-2.5 text-[11px] font-bold font-mono uppercase text-[#141414]">
                <span className="px-3 py-1 rounded-full bg-white border border-[#E8DED0] shadow-sm">
                  400+ Total Brands
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#E8DED0] shadow-sm">
                  70+ Healthcare
                </span>
                <span className="px-3 py-1 rounded-full bg-white border border-[#E8DED0] shadow-sm">
                  50+ Websites
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: 3 COLUMNS OF VERTICALLY SCROLLING CLIENT CARDS (OPPOSITE WAYS) */}
            <div className="lg:col-span-7 relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[470px] overflow-hidden rounded-2xl">
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#F5EFE6] to-transparent z-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#F5EFE6] to-transparent z-20 pointer-events-none" />

              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5 h-full">
                {/* COLUMN 1: MOVES BOTTOM TO UP */}
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

                {/* COLUMN 2: MOVES TOP TO BOTTOM */}
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

                {/* COLUMN 3: MOVES BOTTOM TO UP */}
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

