"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  Building2,
  HardHat,
  Store,
  Coins,
  GraduationCap,
  Hotel,
  Factory,
  Rocket,
  Landmark,
  Plane,
  ShoppingCart,
  Layers,
  Sparkles
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function IndustryExperienceSection() {
  const getIndustryIcon = (name: string) => {
    const iconClass = "w-5 h-5 text-[#A8783E] group-hover:text-[#C59A62] transition-colors";

    switch (name.toLowerCase()) {
      case "healthcare":
        return <HeartPulse className={iconClass} />;
      case "real estate":
        return <Building2 className={iconClass} />;
      case "construction":
        return <HardHat className={iconClass} />;
      case "retail":
        return <Store className={iconClass} />;
      case "finance":
        return <Coins className={iconClass} />;
      case "education":
        return <GraduationCap className={iconClass} />;
      case "hospitality":
        return <Hotel className={iconClass} />;
      case "manufacturing":
        return <Factory className={iconClass} />;
      case "startups":
        return <Rocket className={iconClass} />;
      case "government":
        return <Landmark className={iconClass} />;
      case "travel":
        return <Plane className={iconClass} />;
      case "ecommerce":
        return <ShoppingCart className={iconClass} />;
      default:
        return <Layers className={iconClass} />;
    }
  };

  return (
    <section className="py-24 md:py-32 bg-[#FAF8F5] text-[#141413] relative border-b border-[#E6E2D8] overflow-hidden">
      
      {/* Ambient Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C59A62]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#A8783E]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#DDD8CE_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-[#EFECE6] border border-[#DDD8CE] text-[#A8783E] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A62]" />
              <span>Multi-Sector Domain Breadth</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight">
              Industry Experience &amp; <span className="font-editorial italic font-normal text-[#A8783E]">Sectors Supported</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#5A5650] max-w-md font-normal leading-relaxed">
            Specialized engineering, growth architecture, and strategic consulting delivered across regulated, high-transaction, and enterprise verticals.
          </p>
        </div>

        {/* 12-Card Interactive Grid with Icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {PORTFOLIO_DATA.industries.map((ind, idx) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="group bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6E2D8] flex items-center justify-between shadow-[0_4px_20px_rgba(20,20,19,0.03)] hover:shadow-[0_12px_35px_rgba(20,20,19,0.08)] hover:border-[#C59A62]/60 hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center gap-3.5">
                {/* Icon Container */}
                <div className="w-11 h-11 rounded-xl bg-[#FAF8F5] border border-[#E6E2D8] flex items-center justify-center group-hover:bg-[#141413] group-hover:border-[#141413] group-hover:scale-105 transition-all duration-300 shadow-2xs">
                  {getIndustryIcon(ind)}
                </div>

                {/* Industry Label */}
                <span className="text-sm sm:text-base font-bold text-[#141413] group-hover:text-[#A8783E] transition-colors">
                  {ind}
                </span>
              </div>

              {/* Monospace Counter */}
              <span className="text-xs font-mono font-bold text-[#8A8780] bg-[#F7F5F0] border border-[#E6E2D8] px-2 py-0.5 rounded-md group-hover:text-[#A8783E] group-hover:border-[#C59A62]/40 transition-colors">
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
