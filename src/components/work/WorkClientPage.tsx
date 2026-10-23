"use client";

import { useState, useEffect, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkFilters from "@/components/work/WorkFilters";
import WorkPartnerHero from "@/components/work/WorkPartnerHero";
import WorkProjectShowcase from "@/components/work/WorkProjectShowcase";
import WorkLogoWall from "@/components/work/WorkLogoWall";
import CaseStudyModal from "@/components/work/CaseStudyModal";
import { CASE_STUDIES, CaseStudy } from "@/data/caseStudiesData";

export default function WorkClientPage() {
  const [selectedIndustry, setSelectedIndustry] = useState("all");
  const [selectedService, setSelectedService] = useState("all");
  const [modalCase, setModalCase] = useState<CaseStudy | null>(null);

  // Read URL query params on initial load (e.g. /work?industry=healthcare)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const ind = params.get("industry");
      const srv = params.get("service");
      if (ind) setSelectedIndustry(ind);
      if (srv) setSelectedService(srv);
    }
  }, []);

  // Sync state changes with URL query string without reloading page
  const updateURLParams = (ind: string, srv: string) => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams();
      if (ind !== "all") params.set("industry", ind.toLowerCase());
      if (srv !== "all") params.set("service", srv.toLowerCase());
      const newQuery = params.toString();
      const newUrl = newQuery ? `${window.location.pathname}?${newQuery}` : window.location.pathname;
      window.history.replaceState({}, "", newUrl);
    }
  };

  const handleSelectIndustry = (ind: string) => {
    setSelectedIndustry(ind);
    updateURLParams(ind, selectedService);
  };

  const handleSelectService = (srv: string) => {
    setSelectedService(srv);
    updateURLParams(selectedIndustry, srv);
  };

  // Filtered case studies
  const filteredCaseStudies = useMemo(() => {
    return CASE_STUDIES.filter((item) => {
      const matchIndustry =
        selectedIndustry === "all" ||
        item.industry.toLowerCase() === selectedIndustry.toLowerCase();

      const matchService =
        selectedService === "all" ||
        item.serviceCategory.toLowerCase() === selectedService.toLowerCase();

      return matchIndustry && matchService;
    });
  }, [selectedIndustry, selectedService]);

  return (
    <main className="min-h-screen bg-[#FAF8F5] text-[#141414] relative selection:bg-[#B88746] selection:text-white">
      {/* Sitewide Fixed Navbar configured for subpages */}
      <Navbar showNav={true} isSubpage={true} />

      {/* Hero Section: What being a partner looks like (White Ink Signature Style) */}
      <WorkPartnerHero />

      {/* Interactive Filter Bar */}
      <WorkFilters
        activeIndustry={selectedIndustry}
        activeService={selectedService}
        onSelectIndustry={handleSelectIndustry}
        onSelectService={handleSelectService}
        totalFilteredCount={filteredCaseStudies.length}
      />

      {/* 3-Box Jellyfish-Style Showcase per Project (100% PC Screen Coverage) */}
      <WorkProjectShowcase
        caseStudies={filteredCaseStudies}
        onOpenModal={(c) => setModalCase(c)}
      />

      {/* Logo Wall: Also Trusted By 400+ Brands */}
      <WorkLogoWall />

      {/* Sitewide Footer directly following the portfolio */}
      <Footer />

      {/* Case Study Full Story Modal / Drawer */}
      <CaseStudyModal
        caseStudy={modalCase}
        onClose={() => setModalCase(null)}
      />
    </main>
  );
}
