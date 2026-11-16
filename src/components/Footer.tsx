"use client";

import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#F5EFE6] text-[#141414] border-t border-[#E8DED0] pt-16 pb-12 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-[#E8DED0]">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="/"
              className="inline-block transition-transform duration-300 hover:scale-[1.02]"
              aria-label="White Ink Design Studio"
            >
              <img
                src="/logo.png"
                alt="White Ink Design Studio Logo"
                className="h-14 w-auto object-contain bg-white p-1.5 rounded-xl border border-[#E8DED0] shadow-sm"
              />
            </a>
            <p className="text-xs uppercase tracking-widest text-[#B88746] font-bold">
              Design &amp; Digital Marketing Studio
            </p>
            <p className="text-sm text-[#77716A] max-w-sm leading-relaxed">
              Branding, websites, and growth marketing for healthcare and D2C brands. 400+ brands since 2018. Studios in Ahmedabad and London.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/whiteinkdesignstudio/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#B88746] text-[#141414] hover:text-white flex items-center justify-center transition-colors border border-[#E8DED0] shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/the-white-ink-design-studio"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#B88746] text-[#141414] hover:text-white flex items-center justify-center transition-colors border border-[#E8DED0] shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61563613269632"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white hover:bg-[#B88746] text-[#141414] hover:text-white flex items-center justify-center transition-colors border border-[#E8DED0] shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Col (Master Plan Band 2) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#141414]">
              SERVICES &amp; PILLARS
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wide text-[#77716A]">
              <li>
                <a href="/services/website-design" className="hover:text-[#B88746] transition-colors font-medium">
                  Website Design &amp; Dev (50+ Built)
                </a>
              </li>
              <li>
                <a href="/services/branding" className="hover:text-[#B88746] transition-colors font-medium">
                  Brand Identity &amp; Packaging
                </a>
              </li>
              <li>
                <a href="/services/performance-marketing" className="hover:text-[#B88746] transition-colors font-medium">
                  Growth Marketing &amp; Ads
                </a>
              </li>
              <li>
                <a href="/services/social-media" className="hover:text-[#B88746] transition-colors font-medium">
                  Social Media &amp; Content
                </a>
              </li>
              <li>
                <a href="/services/ai-automation" className="hover:text-[#B88746] transition-colors font-medium">
                  AI &amp; Automation (wink&apos;AI)
                </a>
              </li>
              <li className="pt-1">
                <a href="/services" className="text-[#B88746] font-bold hover:underline inline-flex items-center gap-1">
                  All 5 Services Overview →
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#141414]">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider font-semibold text-[#141414]">
              <li>
                <a href="/work" className="hover:text-[#B88746] transition-colors">
                  Work (50+ Cases)
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#B88746] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#process" className="hover:text-[#B88746] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="/#vision-mission" className="hover:text-[#B88746] transition-colors">
                  Vision &amp; Values
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#B88746] transition-colors">
                  Book A Call
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#141414]">
              STUDIO LOCATION & CONTACT
            </h4>
            <div className="space-y-3 text-xs text-[#77716A] leading-relaxed font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B88746] shrink-0 mt-0.5" />
                <span>
                  302, 6th Avenue Maharashtra Society, Mithakhali, Ahmedabad, Gujarat, India 380009
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B88746] shrink-0" />
                <a
                  href="mailto:connect@whiteinkdesignstudio.com"
                  className="text-[#141414] hover:text-[#B88746] transition-colors"
                >
                  connect@whiteinkdesignstudio.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B88746] shrink-0" />
                <a href="tel:+918160511477" className="text-[#141414] hover:text-[#B88746] transition-colors">
                  +91 81605 11477
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#77716A] font-medium">
          <p>© 2026 White Ink Design Studio. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#141414] hover:text-[#B88746] transition-colors group cursor-pointer"
          >
            <span>Back To Top</span>
            <span className="w-7 h-7 rounded-full bg-white border border-[#E8DED0] group-hover:bg-[#B88746] flex items-center justify-center transition-colors shadow-sm">
              <ArrowUp className="w-3.5 h-3.5 text-[#141414] group-hover:text-white transition-colors" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
