"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#F7F6F2] border-b border-[#DDDAD2]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (4 cols): Sticky Heading */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#EEE9DF] border border-[#DDDAD2] text-[#171717] text-xs font-semibold px-4 py-1.5 rounded-full">
              <span>Clarity &amp; Terms</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] tracking-tight leading-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-base text-[#66645F] font-normal leading-relaxed">
              Transparent answers regarding engagement models, scopes, technical capabilities, and Dubai concierge operations.
            </p>
          </div>

          {/* Right Column (8 cols): Accordion List with Horizontal Dividers */}
          <div className="lg:col-span-8 divide-y divide-[#DDDAD2] border-y border-[#DDDAD2]">
            {PORTFOLIO_DATA.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;

              return (
                <div key={idx} className="py-6 sm:py-7">
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full flex items-center justify-between gap-4 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-[#171717] group-hover:text-[#A8783E] transition-colors leading-snug">
                      {faq.question}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#FFFFFF] border border-[#DDDAD2] flex items-center justify-center text-[#171717] shrink-0 group-hover:border-[#171717] transition-all">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-4 text-sm sm:text-base text-[#66645F] font-normal leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
