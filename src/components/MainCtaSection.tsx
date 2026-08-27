"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function MainCtaSection() {
  return (
    <section className="py-24 md:py-32 bg-[#EEE9DF] border-b border-[#DDDAD2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#171717] tracking-tight leading-tight">
            {PORTFOLIO_DATA.mainCta.heading}
          </h2>

          <p className="text-base sm:text-xl text-[#66645F] font-normal leading-relaxed">
            {PORTFOLIO_DATA.mainCta.text}
          </p>

          <div className="pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#171717] hover:bg-[#333333] text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full transition-all shadow-sm"
            >
              <span>{PORTFOLIO_DATA.mainCta.buttonLabel}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
