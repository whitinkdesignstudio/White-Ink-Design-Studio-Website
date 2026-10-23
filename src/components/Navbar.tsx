"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

interface NavbarProps {
  showNav?: boolean;
}

export default function Navbar({ showNav = true }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      isInitialMount.current = false;
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroTrackHeight = window.innerHeight * 3.8;

      if (currentScrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide header completely before entering and while inside the services section
      if (currentScrollY <= 25) {
        setIsVisible(true);
      } else if (currentScrollY < heroTrackHeight) {
        // Completely vanish before & during services section
        setIsVisible(false);
      } else {
        // Below hero & services track: zebra hide on down, show on up
        if (currentScrollY > lastScrollY && currentScrollY > 150) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when full-page menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const menuItemsLeft = [
    { label: "WORK", href: "/work", desc: "Flagship work & outcomes" },
    { label: "SERVICES", href: "/services", desc: "Brand, web, growth, content, AI" },
    { label: "INDUSTRIES", href: "/industries", desc: "Healthcare, D2C, real estate, events" },
    { label: "INTERNATIONAL", href: "/international", desc: "UK, US & white-label" },
  ];

  const menuItemsRight = [
    { label: "WINK'AI", href: "/wink-ai", desc: "AI that answers your leads" },
    { label: "INSIGHTS", href: "/insights", desc: "Notes from the studio" },
    { label: "PRICING", href: "/pricing", desc: "Clear starting prices" },
    { label: "BOOK A CALL", href: "/contact", desc: "20-min alignment call", gold: true },
  ];

  return (
    <>
      {/* Primary Fixed Header (Enters 3rd in sequence: after stop scrolling line, before button) */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={
          showNav
            ? {
                y: isVisible ? 0 : -100,
                opacity: isVisible ? 1 : 0,
                pointerEvents: isVisible ? "auto" : "none",
              }
            : { y: -60, opacity: 0, pointerEvents: "none" }
        }
        transition={{
          duration: 0.4,
          delay: isInitialMount.current ? 1.0 : 0,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ease-in-out ${
          isScrolled
            ? "bg-[#FAF8F5]/95 backdrop-blur-md py-3 border-b border-[#E8DED0] shadow-sm"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Official White Ink Logo */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
            aria-label="White Ink Design Studio"
          >
            <img
              src="/logo.png"
              alt="White Ink Design Studio Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-sm"
            />
          </a>

          {/* Right Controls: ONLY the 3-Lines Hamburger Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="group flex items-center gap-2.5 py-2 px-3.5 rounded-full bg-white/90 hover:bg-white border border-[#E8DED0] hover:border-[#B88746]/50 transition-all duration-300 shadow-sm hover:shadow focus:outline-none cursor-pointer"
            aria-label="Open Navigation Menu"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.05em] text-[#141414] group-hover:text-[#B88746] transition-colors font-raleway">
              Menu
            </span>
            <div className="flex flex-col justify-between w-5 h-3.5 space-y-1">
              <span className="block h-[2px] w-5 bg-[#141414] rounded-full group-hover:bg-[#B88746] transition-all duration-300 group-hover:w-4 ml-auto" />
              <span className="block h-[2px] w-5 bg-[#141414] rounded-full group-hover:bg-[#B88746] transition-all duration-300" />
              <span className="block h-[2px] w-5 bg-[#141414] rounded-full group-hover:bg-[#B88746] transition-all duration-300 group-hover:w-3 ml-auto" />
            </div>
          </button>
        </div>
      </motion.header>

      {/* ============================================================ */}
      {/* 100% SCREEN-FIT OVERLAY MENU (ZERO SCROLL, NO WATERMARK, ALL FIT) */}
      {/* ============================================================ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              clipPath: "circle(0% at calc(100% - 60px) 40px)",
              opacity: 0.9,
            }}
            animate={{
              clipPath: "circle(160% at calc(100% - 60px) 40px)",
              opacity: 1,
            }}
            exit={{
              clipPath: "circle(0% at calc(100% - 60px) 40px)",
              opacity: 0.9,
            }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="fixed inset-0 z-[60] h-screen h-[100dvh] w-screen w-full bg-[#FAF8F5] text-[#141414] flex flex-col justify-between px-6 py-4 md:px-12 md:py-6 overflow-hidden select-none"
          >
            {/* Top Bar inside Menu (Compact, No Overflow) */}
            <div className="flex items-center justify-between pb-3 md:pb-4 border-b border-[#E8DED0] w-full max-w-7xl mx-auto shrink-0">
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-2 transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src="/logo.png"
                  alt="White Ink Design Studio Logo"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain"
                />
              </a>

              {/* Close Button */}
              <button
                onClick={() => setMenuOpen(false)}
                className="group flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.05em] text-[#141414] hover:text-[#B88746] transition-colors cursor-pointer py-1.5 px-3 rounded-full hover:bg-black/5 font-raleway"
              >
                <span>Close</span>
                <span className="w-8 h-8 rounded-full bg-white border border-[#E8DED0] shadow-sm flex items-center justify-center group-hover:bg-[#B88746] group-hover:border-[#B88746] transition-all duration-300">
                  <X className="w-4 h-4 text-[#141414] group-hover:text-white transition-colors" />
                </span>
              </button>
            </div>

            {/* Middle Main Content (100% Screen Fitted, Perfectly Proportioned) */}
            <div className="flex-1 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10 items-center justify-center my-auto py-2">
              {/* Left Column Links */}
              <div className="md:col-span-4 space-y-3 sm:space-y-4 md:space-y-5">
                {menuItemsLeft.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20, x: 15 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 0.12 + idx * 0.06, duration: 0.45, ease: "easeOut" }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group block min-h-[44px] flex flex-col justify-center"
                    >
                      <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-normal text-[#141414] group-hover:text-[#B88746] group-hover:translate-x-2 transition-all duration-300 font-raleway leading-tight">
                        {item.label}
                      </span>
                      <span className="text-[11px] sm:text-xs uppercase tracking-[0.05em] text-[#B88746] group-hover:text-[#9E7234] transition-colors font-semibold block mt-0.5 font-raleway">
                        {item.desc}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Second Column Links */}
              <div className="md:col-span-4 space-y-3 sm:space-y-4 md:space-y-5">
                {menuItemsRight.map((item, idx) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20, x: 15 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ delay: 0.2 + idx * 0.06, duration: 0.45, ease: "easeOut" }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group block min-h-[44px] flex flex-col justify-center"
                    >
                      <span
                        className={`block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-normal group-hover:translate-x-2 transition-all duration-300 font-raleway leading-tight ${
                          item.gold
                            ? "text-[#B88746] group-hover:text-[#9E7234]"
                            : "text-[#141414] group-hover:text-[#B88746]"
                        }`}
                      >
                        {item.label}
                      </span>
                      <span className="text-[11px] sm:text-xs uppercase tracking-[0.05em] text-[#B88746] group-hover:text-[#9E7234] transition-colors font-semibold block mt-0.5 font-raleway">
                        {item.desc}
                      </span>
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Right Column: Decorative Studio Graphic (Compact, Zero Overflow) */}
              <div className="hidden md:flex md:col-span-4 justify-center items-center pointer-events-none relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  className="w-48 h-48 lg:w-60 lg:h-60 relative drop-shadow-md"
                >
                  <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                    <path
                      d="M100 0 C110 50 150 90 200 100 C150 110 110 150 100 200 C90 150 50 110 0 100 C50 90 90 50 100 0Z"
                      fill="#141414"
                    />
                    <path
                      d="M100 20 C108 60 140 92 180 100 C140 108 108 140 100 180 C92 140 60 108 20 100 C60 92 92 60 100 20Z"
                      fill="#B88746"
                      opacity="0.9"
                    />
                    <path
                      d="M100 45 C105 70 130 95 155 100 C130 105 105 130 100 155 C95 130 70 105 45 100 C70 95 95 70 100 45Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </motion.div>
                <div className="absolute text-center bg-white/95 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#E8DED0] shadow-sm">
                  <p className="text-[10px] font-raleway font-bold tracking-[0.2em] uppercase text-[#B88746]">
                    WHITE INK STUDIO
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Bar: Quick Contact Info (Compact, Clean, Fits Inside 100% Height) */}
            <div className="pt-3 md:pt-4 border-t border-[#E8DED0] w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-[11px] sm:text-xs tracking-wider uppercase text-[#77716A] font-raleway font-bold shrink-0">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#B88746] transition-colors flex items-center gap-1.5"
              >
                <span>Mithakhali, Ahmedabad, Gujarat</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B88746]" />
              </a>

              <a
                href="tel:+918160511477"
                className="hover:text-[#B88746] transition-colors flex items-center gap-1.5"
              >
                <span>+91 81605 11477</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B88746]" />
              </a>

              <a
                href="mailto:connect@whiteinkdesignstudio.com"
                className="hover:text-[#B88746] transition-colors flex items-center gap-1.5 lowercase font-semibold"
              >
                <span>connect@whiteinkdesignstudio.com</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#B88746]" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
