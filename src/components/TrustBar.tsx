"use client";

import React from "react";
import { Award, Layers, Sparkles, Building2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function TrustBar() {
  const getMetricIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-6 h-6 text-[#C59A62]" />;
      case 1:
        return <Layers className="w-6 h-6 text-[#C59A62]" />;
      case 2:
        return <Sparkles className="w-6 h-6 text-[#C59A62]" />;
      case 3:
        return <Building2 className="w-6 h-6 text-[#C59A62]" />;
      default:
        return <Award className="w-6 h-6 text-[#C59A62]" />;
    }
  };

  return (
    <section className="bg-[#171717] text-[#FFFFFF] border-y border-[#292524] py-12 md:py-16 relative z-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seamless Dark 4-Column Strip (No Floating Boxes, No Extra Numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {PORTFOLIO_DATA.trustMetrics.map((item, idx) => (
            <div
              key={item.label}
              className={`flex flex-col justify-between space-y-4 ${
                idx === 0
                  ? "sm:pr-6 lg:pr-8"
                  : idx === 3
                  ? "pt-6 sm:pt-0 sm:pl-6 lg:pl-8"
                  : "pt-6 sm:pt-0 sm:px-6 lg:px-8"
              } group`}
            >
              {/* Icon Only */}
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#24201D] border border-white/10 flex items-center justify-center group-hover:border-[#C59A62] transition-colors">
                  {getMetricIcon(idx)}
                </div>
              </div>

              {/* Metric Number & Text (No 01/02 numbers) */}
              <div className="space-y-1 pt-1">
                <div className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#FFFFFF] tracking-tight leading-none group-hover:text-[#C59A62] transition-colors">
                  {item.value}
                </div>
                <div className="text-base font-bold text-[#FFFFFF] pt-1">
                  {item.label}
                </div>
                <p className="text-xs sm:text-sm text-[#A9A69F] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
