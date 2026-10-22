"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { Star, ShieldCheck, Sparkles } from "lucide-react";

// Official Google Multicolor "G" Logo Icon
function GoogleGIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
        fill="#4285F4"
      />
      <path
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.24v3.15C3.26 21.36 7.34 24 12 24z"
        fill="#34A853"
      />
      <path
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.24C.45 8.16 0 9.94 0 12s.45 3.84 1.24 5.42l4.04-3.15z"
        fill="#FBBC05"
      />
      <path
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.24 6.58l4.04 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        fill="#EA4335"
      />
    </svg>
  );
}

export interface ReviewItem {
  id: number;
  name: string;
  role: string;
  initials: string;
  avatarBg: string;
  stars: number;
  date: string;
  text: string;
}

// 10+ Varied, realistic sample Google Reviews
export const sampleReviews: ReviewItem[] = [
  {
    id: 1,
    name: "Dr. Harshil Shah",
    role: "Cosmetic Surgeon & Clinic Director",
    initials: "HS",
    avatarBg: "bg-[#141414] text-[#FAF8F5]",
    stars: 5,
    date: "2 weeks ago",
    text: "White Ink completely redesigned our clinic's website. Patient inquiries jumped within the first 30 days, and patients constantly tell us how easy it is to find procedure details and book consults.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    role: "Founder, D2C Lifestyle Brand",
    initials: "PM",
    avatarBg: "bg-[#B88746] text-white",
    stars: 5,
    date: "1 month ago",
    text: "Our Shopify store launch was seamless. The speed scores on mobile are above 95, and our checkout drop-off rate reduced significantly. Truly a top-tier design team in Ahmedabad.",
  },
  {
    id: 3,
    name: "Dr. Ketan Patel",
    role: "Medical Director, Speciality Homeopathy",
    initials: "KP",
    avatarBg: "bg-[#9E7234] text-white",
    stars: 5,
    date: "3 weeks ago",
    text: "They understand healthcare compliance and doctor-patient communication better than any agency we've worked with. The 14-page custom build was delivered right on time.",
  },
  {
    id: 4,
    name: "Anand Desai",
    role: "Managing Partner, Real Estate Group",
    initials: "AD",
    avatarBg: "bg-[#1C1A17] text-[#C59A58]",
    stars: 5,
    date: "1 month ago",
    text: "The architectural landing pages and site-visit booking funnel they built drove high-intent NRI inquiries for our new luxury project. Professional, responsive, and sharp.",
  },
  {
    id: 5,
    name: "Rohan Vora",
    role: "Co-Founder, Wand Fragrance",
    initials: "RV",
    avatarBg: "bg-[#C59A58] text-white",
    stars: 5,
    date: "2 months ago",
    text: "From custom packaging boxes to our high-converting Shopify store and Meta ad creative, Forum and the team delivered an exceptional end-to-end brand identity.",
  },
  {
    id: 6,
    name: "Sneha Shah",
    role: "Marketing Head, Healthcare Group",
    initials: "SS",
    avatarBg: "bg-[#141414] text-[#B88746]",
    stars: 5,
    date: "3 weeks ago",
    text: "Akshat and Sarthak are deeply hands-on. Zero junior account manager runaround. Their Meta ad policy expertise saved us from repeat ad account rejections.",
  },
  {
    id: 7,
    name: "Vikram Singhania",
    role: "Director, FMCG Packaged Food",
    initials: "VS",
    avatarBg: "bg-[#8C6527] text-white",
    stars: 5,
    date: "1 month ago",
    text: "Launched our ready-to-eat product line with White Ink. The brand books, typography, and Shopify Liquid development are world-class. Highly recommended.",
  },
  {
    id: 8,
    name: "Devendra Trivedi",
    role: "Operations Head, Export Firm",
    initials: "DT",
    avatarBg: "bg-[#25221E] text-[#FAF8F5]",
    stars: 5,
    date: "2 months ago",
    text: "Fast B2B website with instant WhatsApp RFQ routing. Our overseas buyers in the UK and UAE have praised the clarity and speed of our online catalog.",
  },
  {
    id: 9,
    name: "Kavita Choksi",
    role: "Founder, Ayurveda & Wellness",
    initials: "KC",
    avatarBg: "bg-[#B88746] text-white",
    stars: 5,
    date: "2 weeks ago",
    text: "Authentic storytelling and elegant aesthetic. They captured our brand philosophy perfectly without turning it into a generic template. The whole team loved working with them.",
  },
  {
    id: 10,
    name: "Bhavin Parekh",
    role: "CEO, Events & Festival Production",
    initials: "BP",
    avatarBg: "bg-[#141414] text-[#C59A58]",
    stars: 5,
    date: "3 weeks ago",
    text: "Our festival ticketing site handled massive traffic spikes during peak hours without a single glitch. Clean UX, instant ticket generation, and rock-solid hosting.",
  },
  {
    id: 11,
    name: "Meera Joshi",
    role: "Senior Consultant, Dental Specialty",
    initials: "MJ",
    avatarBg: "bg-[#9E7234] text-white",
    stars: 5,
    date: "1 month ago",
    text: "White Ink made our practice look polished and welcoming. Patient consultation requests have doubled through the direct WhatsApp and booking workflows.",
  },
  {
    id: 12,
    name: "Tanmay Solanki",
    role: "Director, Retail Chain",
    initials: "TS",
    avatarBg: "bg-[#2E2922] text-[#B88746]",
    stars: 5,
    date: "5 days ago",
    text: "Great creative vision and technical competence under one roof. The new digital presence has helped us secure high-profile franchise partnerships.",
  },
];

export default function GoogleReviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isHovered = useRef(false);
  const [isClient, setIsClient] = useState(false);

  // Triple duplicated list for an unbreakable, seamless infinite conveyor loop
  const displayReviews = useMemo(
    () => [...sampleReviews, ...sampleReviews, ...sampleReviews],
    []
  );

  useEffect(() => {
    setIsClient(true);
  }, []);

  // 3D Perspective Marquee Animation Loop
  useEffect(() => {
    let animationFrameId: number;
    let currentOffset = 0;
    const speed = 0.75; // Smooth comfortable drift speed (px per frame)

    const updateCarousel = () => {
      const container = containerRef.current;
      const track = trackRef.current;

      if (container && track) {
        const containerRect = container.getBoundingClientRect();
        const centerX = containerRect.left + containerRect.width / 2;
        const halfTrackWidth = track.scrollWidth / 3;

        // Advance offset if not hovered
        if (!isHovered.current) {
          currentOffset += speed;
          if (currentOffset >= halfTrackWidth) {
            currentOffset = currentOffset % halfTrackWidth;
          }
        }

        // Apply horizontal drift to track
        track.style.transform = `translate3d(-${currentOffset}px, 0, 0)`;

        // Calculate 3D perspective angle & scale for each card based on its viewport distance to center
        const cards = track.children;
        for (let i = 0; i < cards.length; i++) {
          const card = cards[i] as HTMLElement;
          const cardRect = card.getBoundingClientRect();
          const cardCenterX = cardRect.left + cardRect.width / 2;

          // Normalized distance from center (-1: left edge, 0: center, +1: right edge)
          const dist = (cardCenterX - centerX) / (containerRect.width / 2);

          // Perspective angles matching the reference video:
          // Left cards tilt rightward (+rotateY), Right cards tilt leftward (-rotateY), Center card flat (0deg)
          const clampedDist = Math.max(-1.4, Math.min(1.4, dist));
          const rotateY = -clampedDist * 22; // max ~25deg
          const translateZ = -Math.abs(clampedDist) * 45; // slight inward arc
          const scale = Math.max(0.9, 1 - Math.abs(clampedDist) * 0.07);

          // Subtle edge fade at extreme boundaries
          const edgeFade = 1 - Math.max(0, (Math.abs(clampedDist) - 0.85) * 2);
          const opacity = Math.max(0.2, Math.min(1, edgeFade));

          card.style.transform = `perspective(1100px) rotateY(${rotateY}deg) translateZ(${translateZ}px) scale(${scale})`;
          card.style.opacity = `${opacity}`;
        }
      }

      animationFrameId = requestAnimationFrame(updateCarousel);
    };

    animationFrameId = requestAnimationFrame(updateCarousel);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="reviews" className="relative w-full bg-[#FAF8F5] text-[#141414] py-24 md:py-32 overflow-hidden select-none border-t border-[#E8DED0]">
      {/* Subtle warm bronze dot matrix pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(184, 135, 70, 0.22) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
          maskImage:
            "linear-gradient(to right, black 0%, transparent 35%, transparent 65%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, transparent 35%, transparent 65%, black 100%)",
        }}
      />

      {/* Subtle ambient center warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#B88746]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* ========================================================================= */}
        {/* SECTION HEADER & GOOGLE RATING SUMMARY BADGE                             */}
        {/* ========================================================================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6 border-b border-[#E8DED0] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#B88746] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#B88746]" />
              <span>Google Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#141414] tracking-tight leading-none font-heading">
              Loved by <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#141414] via-[#9E7234] to-[#B88746]">
                Our Customers
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-sm md:text-base text-[#77716A] max-w-sm font-normal leading-relaxed">
              Real experiences. Genuine feedback. Trusted by ambitious brands, clinics, and founders globally.
            </p>

            {/* Google Verified Rating Summary Badge */}
            <div className="flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white border border-[#E8DED0] shadow-sm shrink-0">
              <GoogleGIcon className="w-6 h-6 shrink-0" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-black text-[#141414] font-heading">5.0</span>
                  <div className="flex text-[#B88746]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B88746] text-[#B88746]" />
                    ))}
                  </div>
                </div>
                <div className="text-[11px] font-semibold text-[#77716A]">
                  40+ Verified Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3D-STYLE HORIZONTAL PERSPECTIVE CAROUSEL STAGE                            */}
      {/* ========================================================================= */}
      <div
        ref={containerRef}
        onMouseEnter={() => {
          isHovered.current = true;
        }}
        onMouseLeave={() => {
          isHovered.current = false;
        }}
        className="relative w-full py-8 overflow-hidden [perspective:1200px]"
      >
        {/* Left & Right Edge Vignette Gradient Fades */}
        <div className="absolute top-0 left-0 w-20 md:w-36 h-full bg-gradient-to-r from-[#FAF8F5] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-20 md:w-36 h-full bg-gradient-to-l from-[#FAF8F5] to-transparent z-20 pointer-events-none" />

        {/* Moving Marquee Track */}
        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-8 will-change-transform [transform-style:preserve-3d]"
          style={{ width: "max-content" }}
        >
          {displayReviews.map((rev, index) => (
            <div
              key={`${rev.id}-${index}`}
              className="w-[300px] sm:w-[340px] md:w-[370px] min-h-[230px] sm:min-h-[250px] bg-white rounded-3xl p-6 sm:p-7 border border-[#E8DED0] hover:border-[#B88746]/60 transition-colors duration-300 shadow-[0_10px_35px_rgba(184,135,70,0.06)] hover:shadow-[0_15px_45px_rgba(184,135,70,0.12)] flex flex-col justify-between shrink-0 group [transform-style:preserve-3d] select-none"
            >
              <div>
                {/* Review Card Top Bar */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {/* Customer Initials Avatar */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs font-heading shrink-0 shadow-sm ${rev.avatarBg}`}
                    >
                      {rev.initials}
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-[#141414] font-heading leading-snug group-hover:text-[#B88746] transition-colors">
                        {rev.name}
                      </h4>
                      <div className="text-[11px] text-[#77716A] leading-tight mt-0.5">
                        {rev.date}
                      </div>
                    </div>
                  </div>

                    {/* Google Multicolor G Icon */}
                  <div className="w-7 h-7 rounded-full bg-[#FAF8F5] border border-[#E8DED0] flex items-center justify-center shrink-0">
                    <GoogleGIcon className="w-4 h-4" />
                  </div>
                </div>

                {/* Star Rating Row */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B88746] text-[#B88746]" />
                  ))}
                  <span className="ml-1.5 text-[11px] font-bold text-[#B88746] uppercase font-mono tracking-wider">
                    5.0
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#77716A] font-normal leading-relaxed line-clamp-4">
                  &ldquo;{rev.text}&rdquo;
                </p>
              </div>

              {/* Card Footer: Verified Label */}
              <div className="pt-4 mt-3 border-t border-[#E8DED0]/80 flex items-center justify-between text-[11px] text-[#77716A]">
                <span className="inline-flex items-center gap-1 font-medium text-[#141414]">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Client</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#77716A]">
                  Google Review
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Helpful preview notice (small subtle caption) */}
      <div className="max-w-7xl mx-auto px-6 text-center mt-6">
        <p className="text-[11px] text-[#77716A]/80 font-mono tracking-wide">
          ★ Sample preview reviews · Configurable data array ready for live Google Business Profile sync
        </p>
      </div>
    </section>
  );
}

