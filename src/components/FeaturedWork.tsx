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
        <svg
          viewBox="0 0 800 420"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        >
          {/* Background */}
          <rect width="800" height="420" fill="#FFFFFF" />
          {/* Subtle grid pattern */}
          <defs>
            <pattern id="grid1" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#E8E3DA" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="800" height="420" fill="url(#grid1)" opacity="0.6" />

          {/* Left Wing (Revealed on Hover / Wide View) */}
          <g className="transition-opacity duration-500">
            <rect x="50" y="70" width="180" height="280" rx="16" fill="#FAF8F5" stroke="#E8E3DA" strokeWidth="1.5" />
            <circle cx="90" cy="115" r="18" fill="#B88746" opacity="0.15" />
            <text x="90" y="121" textAnchor="middle" fill="#B88746" fontSize="13" fontWeight="900" fontFamily="sans-serif">100%</text>
            <text x="120" y="112" fill="#141414" fontSize="11" fontWeight="800" fontFamily="sans-serif">AYUSH & META</text>
            <text x="120" y="126" fill="#8C8275" fontSize="9" fontWeight="600" fontFamily="sans-serif">Policy Approvals</text>
            <line x1="70" y1="155" x2="210" y2="155" stroke="#E8E3DA" strokeWidth="1" />
            <text x="70" y="190" fill="#141414" fontSize="12" fontWeight="800" fontFamily="sans-serif">PAN-INDIA SCALE</text>
            <text x="70" y="210" fill="#5C5852" fontSize="10" fontFamily="sans-serif">Zero ad account bans</text>
            <text x="70" y="226" fill="#5C5852" fontSize="10" fontFamily="sans-serif">Compliant funnels</text>
            <rect x="70" y="270" width="140" height="40" rx="8" fill="#141414" />
            <text x="140" y="295" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" letterSpacing="1" fontFamily="sans-serif">EST. 1895 GERMANY</text>
          </g>

          {/* Center Main Stage (Visible both in Square & Horizontal Wide) */}
          <g>
            {/* Outer decorative card */}
            <rect x="270" y="50" width="260" height="320" rx="20" fill="#FAF8F5" stroke="#B88746" strokeWidth="2" />
            {/* Top brand header */}
            <text x="400" y="95" textAnchor="middle" fill="#B88746" fontSize="11" fontWeight="800" letterSpacing="2" fontFamily="sans-serif">GERMANY & INDIA</text>
            <text x="400" y="135" textAnchor="middle" fill="#141414" fontSize="22" fontWeight="900" fontFamily="serif" letterSpacing="0.5">A GLOBAL</text>
            <text x="400" y="165" textAnchor="middle" fill="#141414" fontSize="22" fontWeight="900" fontFamily="serif" letterSpacing="0.5">EXPANSION</text>
            {/* Cross emblem */}
            <circle cx="400" cy="230" r="38" fill="#B88746" opacity="0.12" />
            <rect x="395" y="208" width="10" height="44" rx="3" fill="#B88746" />
            <rect x="378" y="225" width="44" height="10" rx="3" fill="#B88746" />
            {/* Bottom brand pill */}
            <rect x="310" y="300" width="180" height="36" rx="18" fill="#141414" />
            <text x="400" y="323" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">DR. RECKEWEG</text>
          </g>

          {/* Right Wing (Revealed on Hover / Wide View) */}
          <g className="transition-opacity duration-500">
            <rect x="570" y="70" width="180" height="280" rx="16" fill="#FAF8F5" stroke="#E8E3DA" strokeWidth="1.5" />
            <text x="590" y="112" fill="#141414" fontSize="12" fontWeight="800" fontFamily="sans-serif">CHATGPT ADS PILOT</text>
            <text x="590" y="130" fill="#8C8275" fontSize="10" fontFamily="sans-serif">Next-gen AI routing</text>
            <line x1="590" y1="155" x2="730" y2="155" stroke="#E8E3DA" strokeWidth="1" />
            <text x="590" y="190" fill="#141414" fontSize="12" fontWeight="800" fontFamily="sans-serif">GOOGLE PMAX</text>
            <text x="590" y="210" fill="#5C5852" fontSize="10" fontFamily="sans-serif">Targeted search intent</text>
            <text x="590" y="226" fill="#5C5852" fontSize="10" fontFamily="sans-serif">Multi-city deployment</text>
            <rect x="590" y="270" width="140" height="40" rx="8" fill="#B88746" />
            <text x="660" y="295" textAnchor="middle" fill="#FFFFFF" fontSize="10" fontWeight="700" letterSpacing="1" fontFamily="sans-serif">VERIFIED OUTCOME</text>
          </g>
        </svg>
      ),
    },
    {
      id: "speciality-homeo",
      number: "02",
      client: "Speciality Homeopathy",
      description:
        "Grapes Worldwide congratulates Dr. Ketan Patel on turning his specialist clinic into a 14-page custom Next.js portal with sub-second appointment scheduling.",
      artwork: (
        <svg
          viewBox="0 0 800 420"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        >
          {/* Background */}
          <rect width="800" height="420" fill="#F7F4EE" />
          {/* Golden radial background */}
          <circle cx="400" cy="210" r="280" fill="#B88746" opacity="0.08" />

          {/* Left Wing (Revealed on Hover) */}
          <g>
            <rect x="50" y="70" width="180" height="280" rx="16" fill="#FFFFFF" stroke="#E8E3DA" strokeWidth="1.5" />
            <text x="70" y="115" fill="#9E7234" fontSize="13" fontWeight="900" fontFamily="sans-serif">PERFORMANCE</text>
            <text x="70" y="165" fill="#141414" fontSize="42" fontWeight="900" fontFamily="sans-serif">99</text>
            <text x="125" y="145" fill="#8C8275" fontSize="16" fontWeight="700" fontFamily="sans-serif">/100</text>
            <text x="70" y="195" fill="#5C5852" fontSize="11" fontFamily="sans-serif">Google PageSpeed Score</text>
            <text x="70" y="210" fill="#5C5852" fontSize="11" fontFamily="sans-serif">Sub-second UX</text>
            <rect x="70" y="260" width="140" height="45" rx="10" fill="#F4F0E8" stroke="#E8E3DA" strokeWidth="1" />
            <text x="140" y="288" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="800" fontFamily="sans-serif">14 PAGES CUSTOM</text>
          </g>

          {/* Center Main Stage (Visible Square & Wide) */}
          <g>
            <rect x="270" y="50" width="260" height="320" rx="20" fill="#FFFFFF" stroke="#9E7234" strokeWidth="2" />
            <text x="400" y="95" textAnchor="middle" fill="#9E7234" fontSize="11" fontWeight="800" letterSpacing="2" fontFamily="sans-serif">CLINICAL EXCELLENCE</text>
            <text x="400" y="135" textAnchor="middle" fill="#141414" fontSize="21" fontWeight="900" fontFamily="serif">PATIENT BOOKING</text>
            <text x="400" y="165" textAnchor="middle" fill="#141414" fontSize="21" fontWeight="900" fontFamily="serif">ENGINE</text>
            {/* Caduceus / Health Crest */}
            <circle cx="400" cy="225" r="36" fill="#9E7234" opacity="0.12" />
            <circle cx="400" cy="225" r="28" fill="none" stroke="#9E7234" strokeWidth="2" strokeDasharray="4 3" />
            <circle cx="400" cy="225" r="6" fill="#9E7234" />
            {/* Doctor Label */}
            <rect x="300" y="295" width="200" height="45" rx="10" fill="#141414" />
            <text x="400" y="318" textAnchor="middle" fill="#FAF8F5" fontSize="12" fontWeight="800" fontFamily="sans-serif">DR. KETAN PATEL</text>
            <text x="400" y="332" textAnchor="middle" fill="#B88746" fontSize="9" fontWeight="700" letterSpacing="1" fontFamily="sans-serif">SPECIALIST HOMEOPATHY</text>
          </g>

          {/* Right Wing (Revealed on Hover) */}
          <g>
            <rect x="570" y="70" width="180" height="280" rx="16" fill="#FFFFFF" stroke="#E8E3DA" strokeWidth="1.5" />
            <text x="590" y="115" fill="#9E7234" fontSize="13" fontWeight="900" fontFamily="sans-serif">DIRECT ROUTING</text>
            <text x="590" y="145" fill="#141414" fontSize="13" fontWeight="800" fontFamily="sans-serif">Instant Consultation</text>
            <text x="590" y="165" fill="#5C5852" fontSize="11" fontFamily="sans-serif">WhatsApp automated</text>
            <text x="590" y="180" fill="#5C5852" fontSize="11" fontFamily="sans-serif">slot confirmation</text>
            <line x1="590" y1="210" x2="730" y2="210" stroke="#E8E3DA" strokeWidth="1" />
            <rect x="590" y="260" width="140" height="45" rx="10" fill="#9E7234" />
            <text x="660" y="288" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" fontFamily="sans-serif">NEXT.JS ARCHITECTURE</text>
          </g>
        </svg>
      ),
    },
    {
      id: "wand-fragrance",
      number: "03",
      client: "Wand Fragrance",
      description:
        "Wand Fragrance's luxury Shopify flagship engineered with 3-hour local dispatch, one-click checkout, and high-converting Meta creative systems.",
      artwork: (
        <svg
          viewBox="0 0 800 420"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        >
          {/* Deep Obsidian Luxury Background */}
          <rect width="800" height="420" fill="#141414" />
          {/* Gold particle glow */}
          <radialGradient id="goldGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#141414" stopOpacity="0" />
          </radialGradient>
          <rect width="800" height="420" fill="url(#goldGlow)" />

          {/* Left Wing (Revealed on Hover) */}
          <g>
            <rect x="50" y="70" width="180" height="280" rx="16" fill="#1E1E1E" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" />
            <text x="70" y="115" fill="#D4AF37" fontSize="12" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">LOCAL DISPATCH</text>
            <text x="70" y="170" fill="#FFFFFF" fontSize="48" fontWeight="900" fontFamily="sans-serif">3-HR</text>
            <text x="70" y="200" fill="#D4AF37" fontSize="12" fontWeight="700" fontFamily="sans-serif">Express Delivery</text>
            <text x="70" y="220" fill="#FAF8F5" opacity="0.6" fontSize="10" fontFamily="sans-serif">Hyperlocal routing engine</text>
            <rect x="70" y="265" width="140" height="42" rx="8" fill="#D4AF37" />
            <text x="140" y="291" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="900" letterSpacing="1" fontFamily="sans-serif">SHOPIFY LIQUID</text>
          </g>

          {/* Center Main Stage (Visible Square & Wide) */}
          <g>
            <rect x="260" y="50" width="280" height="320" rx="20" fill="#1E1E1E" stroke="#D4AF37" strokeWidth="2" />
            <text x="400" y="95" textAnchor="middle" fill="#D4AF37" fontSize="11" fontWeight="800" letterSpacing="3" fontFamily="sans-serif">LUXURY PERFUMERY</text>
            <text x="400" y="140" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="900" fontFamily="serif" letterSpacing="2">WAND</text>
            <text x="400" y="165" textAnchor="middle" fill="#D4AF37" fontSize="14" fontWeight="600" letterSpacing="4" fontFamily="sans-serif">FRAGRANCE</text>
            {/* Perfume Bottle Silhouette */}
            <rect x="382" y="195" width="36" height="20" rx="4" fill="#D4AF37" />
            <rect x="365" y="215" width="70" height="65" rx="8" fill="none" stroke="#D4AF37" strokeWidth="2.5" />
            <circle cx="400" cy="245" r="14" fill="#D4AF37" opacity="0.3" />
            {/* Outcome Badge */}
            <rect x="300" y="300" width="200" height="42" rx="21" fill="#D4AF37" />
            <text x="400" y="326" textAnchor="middle" fill="#141414" fontSize="13" fontWeight="900" letterSpacing="1.5" fontFamily="sans-serif">+310% D2C GMV</text>
          </g>

          {/* Right Wing (Revealed on Hover) */}
          <g>
            <rect x="570" y="70" width="180" height="280" rx="16" fill="#1E1E1E" stroke="#D4AF37" strokeWidth="1" strokeOpacity="0.4" />
            <text x="590" y="115" fill="#D4AF37" fontSize="12" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">CONVERSION ARCH</text>
            <text x="590" y="150" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="sans-serif">1-Click Fast Pay</text>
            <text x="590" y="170" fill="#FAF8F5" opacity="0.6" fontSize="10" fontFamily="sans-serif">RTO reduction setup</text>
            <line x1="590" y1="200" x2="730" y2="200" stroke="#333333" strokeWidth="1" />
            <text x="590" y="235" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="sans-serif">META ROAS 4.8X</text>
            <text x="590" y="255" fill="#FAF8F5" opacity="0.6" fontSize="10" fontFamily="sans-serif">Scroll-stopping visuals</text>
          </g>
        </svg>
      ),
    },
    {
      id: "dishant-ayurveda",
      number: "04",
      client: "Dishant Ayurvedic",
      description:
        "Dishant Ayurvedic brought traditional holistic herbal formulations into modern retail through a bespoke packaging system and high-retention e-commerce store.",
      artwork: (
        <svg
          viewBox="0 0 800 420"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        >
          {/* Organic Cream Background */}
          <rect width="800" height="420" fill="#EFECE6" />
          <circle cx="400" cy="210" r="300" fill="#1F3A2B" opacity="0.06" />

          {/* Left Wing (Revealed on Hover) */}
          <g>
            <rect x="50" y="70" width="180" height="280" rx="16" fill="#FFFFFF" stroke="#E8E3DA" strokeWidth="1.5" />
            <text x="70" y="115" fill="#1F3A2B" fontSize="12" fontWeight="900" letterSpacing="1" fontFamily="sans-serif">REPEAT RETENTION</text>
            <text x="70" y="165" fill="#141414" fontSize="42" fontWeight="900" fontFamily="sans-serif">+180%</text>
            <text x="70" y="195" fill="#5C5852" fontSize="11" fontFamily="sans-serif">Subscription re-orders</text>
            <text x="70" y="210" fill="#5C5852" fontSize="11" fontFamily="sans-serif">Customer LTV doubled</text>
            <rect x="70" y="260" width="140" height="45" rx="10" fill="#1F3A2B" />
            <text x="140" y="288" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="1" fontFamily="sans-serif">HERBAL WELLNESS</text>
          </g>

          {/* Center Main Stage (Visible Square & Wide) */}
          <g>
            <rect x="260" y="50" width="280" height="320" rx="20" fill="#FFFFFF" stroke="#B88746" strokeWidth="2" />
            <text x="400" y="95" textAnchor="middle" fill="#B88746" fontSize="11" fontWeight="800" letterSpacing="2.5" fontFamily="sans-serif">HERBAL AYURVEDA</text>
            <text x="400" y="140" textAnchor="middle" fill="#141414" fontSize="24" fontWeight="900" fontFamily="serif">DISHANT</text>
            <text x="400" y="165" textAnchor="middle" fill="#8C8275" fontSize="12" fontWeight="700" letterSpacing="3" fontFamily="sans-serif">AYURVEDIC</text>
            {/* Botanical Leaf Emblem */}
            <circle cx="400" cy="225" r="36" fill="#1F3A2B" opacity="0.1" />
            <path
              d="M 400 195 C 420 215 425 245 400 255 C 375 245 380 215 400 195 Z"
              fill="#1F3A2B"
            />
            {/* Packaging Badge */}
            <rect x="290" y="295" width="220" height="45" rx="10" fill="#141414" />
            <text x="400" y="322" textAnchor="middle" fill="#FAF8F5" fontSize="11" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">PACKAGING SYSTEM & STORE</text>
          </g>

          {/* Right Wing (Revealed on Hover) */}
          <g>
            <rect x="570" y="70" width="180" height="280" rx="16" fill="#FFFFFF" stroke="#E8E3DA" strokeWidth="1.5" />
            <text x="590" y="115" fill="#1F3A2B" fontSize="12" fontWeight="900" letterSpacing="1" fontFamily="sans-serif">UNBOXING CRAFT</text>
            <text x="590" y="145" fill="#141414" fontSize="13" fontWeight="800" fontFamily="sans-serif">Gold Foil Cartons</text>
            <text x="590" y="165" fill="#5C5852" fontSize="11" fontFamily="sans-serif">Eco luxury materials</text>
            <line x1="590" y1="200" x2="730" y2="200" stroke="#E8E3DA" strokeWidth="1" />
            <text x="590" y="235" fill="#141414" fontSize="13" fontWeight="800" fontFamily="sans-serif">HEADLESS E-COMM</text>
            <text x="590" y="255" fill="#5C5852" fontSize="11" fontFamily="sans-serif">Instant checkout flow</text>
          </g>
        </svg>
      ),
    },
    {
      id: "zydus-hospitals",
      number: "05",
      client: "Zydus Hospitals / IVF",
      description:
        "Zydus Hospitals streamlined patient intake flows and multi-speciality doctor appointment routing across Western India, reducing patient wait friction by 65%.",
      artwork: (
        <svg
          viewBox="0 0 800 420"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        >
          {/* Deep Sapphire Charcoal Background */}
          <rect width="800" height="420" fill="#162029" />
          <circle cx="400" cy="210" r="280" fill="#0284C7" opacity="0.12" />

          {/* Left Wing (Revealed on Hover) */}
          <g>
            <rect x="50" y="70" width="180" height="280" rx="16" fill="#1F2C37" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.4" />
            <text x="70" y="115" fill="#38BDF8" fontSize="12" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">WAIT FRICTION</text>
            <text x="70" y="165" fill="#FFFFFF" fontSize="42" fontWeight="900" fontFamily="sans-serif">-65%</text>
            <text x="70" y="195" fill="#FAF8F5" opacity="0.7" fontSize="11" fontFamily="sans-serif">Reduced patient wait</text>
            <text x="70" y="210" fill="#FAF8F5" opacity="0.7" fontSize="11" fontFamily="sans-serif">Online token dispatch</text>
            <rect x="70" y="260" width="140" height="45" rx="10" fill="#0284C7" />
            <text x="140" y="288" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="800" letterSpacing="1" fontFamily="sans-serif">IVF & PATIENT UX</text>
          </g>

          {/* Center Main Stage (Visible Square & Wide) */}
          <g>
            <rect x="260" y="50" width="280" height="320" rx="20" fill="#1F2C37" stroke="#38BDF8" strokeWidth="2" strokeOpacity="0.6" />
            <text x="400" y="95" textAnchor="middle" fill="#38BDF8" fontSize="11" fontWeight="800" letterSpacing="2.5" fontFamily="sans-serif">HEALTHCARE GROUP</text>
            <text x="400" y="140" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="serif">ZYDUS</text>
            <text x="400" y="165" textAnchor="middle" fill="#FAF8F5" opacity="0.7" fontSize="12" fontWeight="700" letterSpacing="3" fontFamily="sans-serif">HOSPITALS</text>
            {/* Heartbeat pulse graphic */}
            <circle cx="400" cy="225" r="36" fill="#0284C7" opacity="0.2" />
            <path
              d="M 360 225 L 385 225 L 395 205 L 405 245 L 415 225 L 440 225"
              fill="none"
              stroke="#38BDF8"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Bottom Label */}
            <rect x="290" y="295" width="220" height="45" rx="10" fill="#FFFFFF" />
            <text x="400" y="322" textAnchor="middle" fill="#141414" fontSize="11" fontWeight="900" letterSpacing="1.5" fontFamily="sans-serif">PATIENT JOURNEY ENGINE</text>
          </g>

          {/* Right Wing (Revealed on Hover) */}
          <g>
            <rect x="570" y="70" width="180" height="280" rx="16" fill="#1F2C37" stroke="#0284C7" strokeWidth="1" strokeOpacity="0.4" />
            <text x="590" y="115" fill="#38BDF8" fontSize="12" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">WESTERN INDIA</text>
            <text x="590" y="145" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="sans-serif">Multi-Speciality</text>
            <text x="590" y="165" fill="#FAF8F5" opacity="0.7" fontSize="11" fontFamily="sans-serif">Direct doctor routing</text>
            <line x1="590" y1="200" x2="730" y2="200" stroke="#334155" strokeWidth="1" />
            <text x="590" y="235" fill="#FFFFFF" fontSize="13" fontWeight="800" fontFamily="sans-serif">DIGITAL INTAKE</text>
            <text x="590" y="255" fill="#FAF8F5" opacity="0.7" fontSize="11" fontFamily="sans-serif">Seamless admissions</text>
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section
      id="work"
      className="relative w-full min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between bg-[#FAF8F5] text-[#141414] select-none overflow-hidden border-t border-[#D8D2C7]"
    >
      {/* ========================================================================= */}
      {/* SECTION HEADER: MATCHING "IN THE NEWS" HIGH-FASHION EDITORIAL TYPOGRAPHY   */}
      {/* ========================================================================= */}
      <div className="w-full px-6 md:px-12 pt-7 pb-4 lg:pt-7 lg:pb-4">
        <div className="flex items-center justify-between gap-4">
          {/* Main Giant Serif Headline */}
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] uppercase tracking-tight text-[#141414] leading-none font-normal">
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
      <div className="w-full h-[1px] bg-[#D8D2C7]" />

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
              className={`group relative flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#D8D2C7] last:border-r-0 cursor-pointer overflow-hidden transition-[flex] duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isHovered
                  ? "lg:flex-[2.4] bg-[#F2EDE4]"
                  : isAnyHovered
                  ? "lg:flex-[0.65] bg-[#FAF8F5]"
                  : "lg:flex-1 bg-[#FAF8F5]"
              }`}
            >
              {/* TOP PART: PHOTO CONTAINER */}
              {/* In default state (narrow column) it's a square crop; on hover it expands wide into full horizontal artwork */}
              <div className="relative w-full h-[220px] sm:h-[260px] lg:h-[340px] xl:h-[380px] overflow-hidden bg-black/5">
                {item.artwork}
              </div>

              {/* Horizontal Divider between Photo and Description */}
              <div className="w-full h-[1px] bg-[#D8D2C7]" />

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
                  <p className="text-xs sm:text-[13px] text-[#4A4742] font-normal leading-relaxed line-clamp-3 lg:line-clamp-4">
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
