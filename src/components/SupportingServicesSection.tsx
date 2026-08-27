"use client";

import React from "react";
import { TrendingUp, Cloud, Bot, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SupportingServicesSection() {
  const marketing = PORTFOLIO_DATA.services.find((s) => s.id === "marketing")!;
  const cloud = PORTFOLIO_DATA.services.find((s) => s.id === "cloud")!;
  const ai = PORTFOLIO_DATA.services.find((s) => s.id === "ai")!;

  const getIcon = (id: string) => {
    switch (id) {
      case "marketing":
        return <TrendingUp className="w-5 h-5 text-[#A8783E]" />;
      case "cloud":
        return <Cloud className="w-5 h-5 text-[#A8783E]" />;
      case "ai":
        return <Bot className="w-5 h-5 text-[#A8783E]" />;
      default:
        return null;
    }
  };

  const supportingCategories = [marketing, cloud, ai];

  return (
    <section className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#DDDAD2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {supportingCategories.map((service, idx) => (
            <div
              key={service.id}
              className="spec-card p-7 sm:p-8 flex flex-col justify-between bg-[#FFFFFF]"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F7F6F2] border border-[#DDDAD2] flex items-center justify-center shrink-0">
                    {getIcon(service.id)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#8A8780] block">
                      Service 0{idx + 3}
                    </span>
                    <h3 className="text-xl font-bold text-[#171717]">
                      {service.category}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#66645F] leading-relaxed mb-6 font-normal">
                  {service.shortDesc}
                </p>

                {/* Exact Service List */}
                <div className="space-y-2.5 pt-4 border-t border-[#DDDAD2]/60">
                  {service.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[#171717]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#A8783E] shrink-0"></div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
