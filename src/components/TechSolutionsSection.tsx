"use client";

import React from "react";
import { Code2, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function TechSolutionsSection() {
  const service = PORTFOLIO_DATA.services.find((s) => s.id === "tech-solutions")!;

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FFFFFF] border-b border-[#DDDAD2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols): Category & Description */}
          <div className="lg:col-span-5 space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-[#F7F6F2] border border-[#DDDAD2] flex items-center justify-center text-[#A8783E]">
              <Code2 className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A8783E]">
                Service 01 // Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] tracking-tight">
                {service.category}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#66645F] font-normal leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          {/* Right Column (7 cols): Exact 6-Item Service List */}
          <div className="lg:col-span-7">
            <div className="divide-y divide-[#DDDAD2] border-y border-[#DDDAD2]">
              {service.items.map((item, idx) => (
                <div
                  key={idx}
                  className="py-4 sm:py-5 flex items-center justify-between group hover:bg-[#F7F6F2] px-3 sm:px-4 rounded-xl transition-colors"
                >
                  <span className="text-base sm:text-lg font-semibold text-[#171717] group-hover:text-[#A8783E] transition-colors">
                    {item}
                  </span>
                  <span className="text-xs font-mono text-[#8A8780] bg-[#F7F6F2] group-hover:bg-[#FFFFFF] px-2.5 py-1 rounded-md border border-[#DDDAD2]">
                    0{idx + 1}
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
