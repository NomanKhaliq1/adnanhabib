"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ShoppingBag,
  TrendingUp,
  Cloud,
  Bot,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getServiceIcon = (id: string, isConcierge: boolean) => {
    const iconClass = isConcierge
      ? "w-6 h-6 text-[#C59A62]"
      : "w-6 h-6 text-[#A8783E] group-hover:text-[#C59A62] transition-colors";

    switch (id) {
      case "tech-solutions":
        return <Code2 className={iconClass} />;
      case "ecommerce":
        return <ShoppingBag className={iconClass} />;
      case "marketing":
        return <TrendingUp className={iconClass} />;
      case "cloud":
        return <Cloud className={iconClass} />;
      case "ai":
        return <Bot className={iconClass} />;
      case "concierge":
        return <MapPin className={iconClass} />;
      default:
        return <Code2 className={iconClass} />;
    }
  };

  const categories = [
    { id: "all", label: "All Practices" },
    ...PORTFOLIO_DATA.services.map((s) => ({ id: s.id, label: s.category }))
  ];

  const filteredServices =
    activeCategory === "all"
      ? PORTFOLIO_DATA.services
      : PORTFOLIO_DATA.services.filter((s) => s.id === activeCategory);

  return (
    <section id="services" className="py-28 md:py-36 bg-[#FAF8F5] text-[#141413] relative border-b border-[#E6E2D8] overflow-hidden">
      
      {/* Ambient Luxury Background Lights */}
      <div className="absolute top-10 left-1/3 w-[600px] h-[600px] bg-[#C59A62]/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#A8783E]/6 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#DDD8CE_1px,transparent_1px)] [background-size:28px_28px] opacity-35 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#EFECE6] border border-[#DDD8CE] text-[#A8783E] text-xs font-mono font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A62]" />
              <span>Full-Stack &amp; On-Ground Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight leading-tight">
              Services &amp; <span className="font-editorial italic font-normal text-[#A8783E]">Specialized Practices</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5A5650] font-normal leading-relaxed">
              End-to-end technical engineering, ecommerce growth architecture, cloud infrastructure, AI automation, and physical business representation in Dubai.
            </p>
          </div>

          {/* Quick CTA */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-[#141413] hover:bg-[#2A2725] text-white text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all shadow-md shrink-0 self-start md:self-auto hover:shadow-lg hover:scale-[1.02]"
          >
            <span>Request Custom Scope</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C59A62]" />
          </a>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all whitespace-nowrap cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? "bg-[#141413] text-white shadow-sm border border-[#141413]"
                    : "bg-[#FFFFFF] text-[#66645F] hover:text-[#141413] hover:bg-[#F2EFE9] border border-[#E6E2D8] shadow-2xs"
                }`}
              >
                <span>{cat.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C59A62] animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredServices.map((service, idx) => {
              const isConcierge = service.id === "concierge";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  key={service.id}
                  className={`group relative p-8 rounded-[24px] flex flex-col justify-between space-y-6 transition-all duration-500 hover:-translate-y-1.5 ${
                    isConcierge
                      ? "bg-gradient-to-b from-[#1C1A18] to-[#141413] text-white border border-[#C59A62]/45 shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:col-span-2 lg:col-span-1"
                      : "bg-[#FFFFFF] text-[#141413] border border-[#E6E2D8] hover:border-[#C59A62]/60 shadow-[0_10px_30px_rgba(20,20,19,0.04)] hover:shadow-[0_20px_45px_rgba(20,20,19,0.08)]"
                  }`}
                >
                  {/* Top Accent Gradient Line on Hover */}
                  <div
                    className={`absolute top-0 left-8 right-8 h-[2px] rounded-full transition-opacity duration-500 ${
                      isConcierge
                        ? "bg-gradient-to-r from-transparent via-[#C59A62] to-transparent opacity-100"
                        : "bg-gradient-to-r from-transparent via-[#C59A62] to-transparent opacity-0 group-hover:opacity-100"
                    }`}
                  />

                  {/* Corner Accent Brackets on Signature Concierge Card */}
                  {isConcierge && (
                    <>
                      <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C59A62] z-20 pointer-events-none" />
                      <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C59A62] z-20 pointer-events-none" />
                      <div className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C59A62] z-20 pointer-events-none" />
                      <div className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C59A62] z-20 pointer-events-none" />
                    </>
                  )}

                  <div className="space-y-6">
                    {/* Card Header: Icon & Category Label */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-13 h-13 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105 ${
                          isConcierge
                            ? "bg-[#252220] border-[#3E3835] shadow-inner"
                            : "bg-[#FAF8F5] border-[#E6E2D8] group-hover:border-[#C59A62]/40 group-hover:bg-[#FFFDF9]"
                        }`}
                      >
                        {getServiceIcon(service.id, isConcierge)}
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {isConcierge && (
                          <span className="text-[10px] font-mono font-bold text-[#141413] bg-[#C59A62] px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                            Signature
                          </span>
                        )}
                        <span
                          className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg ${
                            isConcierge
                              ? "bg-[#24201D] text-[#C59A62] border border-[#3E3835]"
                              : "bg-[#F4F1EA] text-[#787570] border border-[#E6E2D8]"
                          }`}
                        >
                          0{idx + 1}
                        </span>
                      </div>
                    </div>

                    {/* Title & Short Description */}
                    <div className="space-y-2">
                      <h3
                        className={`text-xl sm:text-2xl font-bold tracking-tight ${
                          isConcierge ? "text-white" : "text-[#141413]"
                        }`}
                      >
                        {service.category}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm font-normal leading-relaxed ${
                          isConcierge ? "text-[#B5B2AC]" : "text-[#66645F]"
                        }`}
                      >
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Feature Bullet List */}
                    <div
                      className={`pt-5 space-y-2.5 border-t ${
                        isConcierge ? "border-white/10" : "border-[#EFECE6]"
                      }`}
                    >
                      {service.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="flex items-center gap-2.5 text-xs sm:text-sm group/item"
                        >
                          <div
                            className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform group-hover/item:scale-125 ${
                              isConcierge ? "bg-[#C59A62]" : "bg-[#A8783E]"
                            }`}
                          />
                          <span
                            className={
                              isConcierge
                                ? "text-[#E6E2D8] font-medium"
                                : "text-[#2E2C29] font-medium"
                            }
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Link */}
                  <div
                    className={`pt-5 border-t ${
                      isConcierge ? "border-white/10" : "border-[#EFECE6]"
                    }`}
                  >
                    <a
                      href="#contact"
                      className={`inline-flex items-center gap-2 text-xs font-bold transition-all ${
                        isConcierge
                          ? "text-[#C59A62] hover:text-white"
                          : "text-[#141413] hover:text-[#A8783E]"
                      }`}
                    >
                      <span>Consult on {service.category}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
