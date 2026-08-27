"use client";

import React from "react";
import { ShoppingBag, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function EcommerceSolutionsSection() {
  const service = PORTFOLIO_DATA.services.find((s) => s.id === "ecommerce")!;

  return (
    <section className="py-20 md:py-28 bg-[#EEE9DF] border-b border-[#DDDAD2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (7 cols): Exact 8-Item Service List in Two Columns */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {service.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] p-4 sm:p-5 rounded-2xl border border-[#DDDAD2] flex items-center justify-between hover:border-[#171717] transition-all"
                >
                  <span className="text-sm sm:text-base font-semibold text-[#171717]">
                    {item}
                  </span>
                  <span className="text-[11px] font-mono text-[#8A8780]">
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (5 cols): Category & Description */}
          <div className="lg:col-span-5 space-y-5 order-1 lg:order-2">
            <div className="w-12 h-12 rounded-2xl bg-[#FFFFFF] border border-[#DDDAD2] flex items-center justify-center text-[#A8783E]">
              <ShoppingBag className="w-6 h-6" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A8783E]">
                Service 02 // Commerce
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] tracking-tight">
                {service.category}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[#66645F] font-normal leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
