"use client";

import { useTransition } from "react";
import { Filter, X } from "lucide-react";

interface WorkFiltersProps {
  activeIndustry: string;
  activeService: string;
  onSelectIndustry: (ind: string) => void;
  onSelectService: (srv: string) => void;
  totalFilteredCount: number;
}

const industries = [
  { id: "all", label: "All Industries" },
  { id: "Healthcare", label: "Healthcare" },
  { id: "D2C", label: "D2C & FMCG" },
  { id: "Events", label: "Events & Culture" },
  { id: "Industrial", label: "Industrial & Export" },
  { id: "Professional", label: "Professional" },
  { id: "Travel", label: "Travel & Services" },
];

const services = [
  { id: "all", label: "All Services" },
  { id: "Website", label: "Websites & Shopify" },
  { id: "Branding", label: "Brand Identity" },
  { id: "Ads", label: "Performance & Ads" },
  { id: "Social", label: "Social & Content" },
  { id: "AI", label: "AI & Automation" },
];

export default function WorkFilters({
  activeIndustry,
  activeService,
  onSelectIndustry,
  onSelectService,
  totalFilteredCount,
}: WorkFiltersProps) {
  const [, startTransition] = useTransition();

  const handleIndustryChange = (ind: string) => {
    startTransition(() => {
      onSelectIndustry(ind);
    });
  };

  const handleServiceChange = (srv: string) => {
    startTransition(() => {
      onSelectService(srv);
    });
  };

  const hasActiveFilters = activeIndustry !== "all" || activeService !== "all";

  const clearFilters = () => {
    startTransition(() => {
      onSelectIndustry("all");
      onSelectService("all");
    });
  };

  return (
    <div id="work-filters" className="relative w-full bg-[#FAF8F5] border-b border-[#E8DED0] py-4 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-3.5">
        {/* Industry Filter Pills */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#77716A] mr-1 shrink-0 font-raleway">
              <Filter className="w-3.5 h-3.5 text-[#B88746]" />
              Industry:
            </span>
            {industries.map((ind) => {
              const isSelected = activeIndustry.toLowerCase() === ind.id.toLowerCase();
              return (
                <button
                  key={ind.id}
                  onClick={() => handleIndustryChange(ind.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-[13px] font-semibold font-raleway transition-all duration-300 whitespace-nowrap cursor-pointer shrink-0 border ${
                    isSelected
                      ? "bg-[#141414] text-white border-[#141414] shadow-sm"
                      : "bg-white text-[#77716A] border-[#E8DED0] hover:border-[#B88746] hover:text-[#141414]"
                  }`}
                >
                  {ind.label}
                </button>
              );
            })}
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1 text-xs font-bold text-[#B88746] hover:text-[#9E7234] transition-colors uppercase tracking-wider shrink-0 cursor-pointer font-raleway"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Secondary Service Filter Row */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1 border-t border-[#E8DED0]/60">
          <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider text-[#77716A] mr-1 shrink-0 font-raleway">
            Service:
          </span>
          {services.map((srv) => {
            const isSelected = activeService.toLowerCase() === srv.id.toLowerCase();
            return (
              <button
                key={srv.id}
                onClick={() => handleServiceChange(srv.id)}
                className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium font-raleway transition-all duration-200 whitespace-nowrap cursor-pointer shrink-0 border ${
                  isSelected
                    ? "bg-[#B88746] text-white border-[#B88746] shadow-2xs font-semibold"
                    : "bg-[#F5EFE6] text-[#77716A] border-transparent hover:border-[#E8DED0] hover:text-[#141414]"
                }`}
              >
                {srv.label}
              </button>
            );
          })}
          <div className="ml-auto text-[11px] font-bold text-[#77716A] tracking-wider uppercase shrink-0 font-raleway pl-2">
            Showing <span className="text-[#141414]">{totalFilteredCount}</span> projects
          </div>
        </div>
      </div>
    </div>
  );
}

