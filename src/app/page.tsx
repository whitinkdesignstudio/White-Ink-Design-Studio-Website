"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DigitalDesignServices from "@/components/DigitalDesignServices";
import MarqueeClients from "@/components/MarqueeClients";
import FeaturedWork from "@/components/FeaturedWork";
import ProcessSection from "@/components/ProcessSection";
import GoogleReviews from "@/components/GoogleReviews";
import VisionMission from "@/components/VisionMission";
import BrandsThrived from "@/components/BrandsThrived";
import Footer from "@/components/Footer";
import IntroOverlay from "@/components/IntroOverlay";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#141414] relative selection:bg-[#B88746] selection:text-white">
      {/* 5-Step Intro Overlay */}
      {!introDone && (
        <IntroOverlay onComplete={() => setIntroDone(true)} />
      )}

      {/* Header Navigation (Fades in once intro completes) */}
      <Navbar showNav={introDone} />

      {/* 1. Hero Section with Integrated Bottom-Center Bubble Services Reveal */}
      <Hero isReady={introDone} />

      {/* Digital Design Services (Sticky Pinned Fact Cards with Bottom-to-Up Transition) */}
      <DigitalDesignServices />

      {/* How We Work (Execution Blueprint with Dynamic Ambient Glow & Mouse-Following Dots) */}
      <ProcessSection />

      {/* Google Reviews (3D-Style Perspective Carousel Showcase) */}
      <GoogleReviews />

      {/* Guiding Principles & Philosophy */}
      <VisionMission />

      {/* Brands That Thrived With White Ink (3 Opposite-Moving Marquee Columns) */}
      <BrandsThrived />

      {/* 3. Trusted Clients / Logo Strip */}
      <MarqueeClients />

      {/* 5. Featured Work / Selected Portfolio (Flagship cases with outcomes) */}
      <FeaturedWork />

      {/* Footer */}
      <Footer />
    </main>
  );
}
