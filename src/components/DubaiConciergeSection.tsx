"use client";

import React from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function DubaiConciergeSection() {
  const service = PORTFOLIO_DATA.services.find((s) => s.id === "concierge")!;

  return (
    <section className="py-24 md:py-32 bg-[#1B1B1A] text-[#FFFFFF] border-b border-[#292524]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols): Description & UAE Positioning */}
          <div className="lg:col-span-5 space-y-6">
            <div className="w-12 h-12 rounded-2xl bg-[#292524] border border-[#3E3835] flex items-center justify-center text-[#C59A62]">
              <MapPin className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C59A62]">
                Differentiating Practice // On-Ground UAE
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFFFFF] tracking-tight">
                {service.category}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#C8C5BE] font-normal leading-relaxed">
              {service.shortDesc}
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#EEE9DF] text-[#171717] text-xs sm:text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-xs"
              >
                <span>Request Dubai On-Ground Support</span>
              </a>
            </div>
          </div>

          {/* Right Column (7 cols): All 11 Exact Concierge Services in 2 Columns */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
              {service.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#24201D] p-4 rounded-xl border border-[#3E3835] flex items-center gap-3 hover:border-[#C59A62] transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-[#C59A62] shrink-0"></div>
                  <span className="text-xs sm:text-sm font-medium text-[#F7F6F2]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
