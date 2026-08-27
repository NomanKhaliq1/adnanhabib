"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, ShieldCheck, ArrowRight, Activity } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function BiographySection() {
  const biographyRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: biographyRef,
    offset: ["start end", "end start"]
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);

  return (
    <section
      id="about"
      ref={biographyRef}
      className="py-24 md:py-36 bg-[#FAF8F5] text-[#141413] relative border-b border-[#E6E2D8] w-full"
    >
      {/* Luxury Warm Ambient Lighting */}
      <div className="absolute top-20 -left-32 w-[600px] h-[600px] bg-[#C59A62]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#A8783E]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#DDD8CE_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (5 cols): Editorial Portrait Stage */}
          <motion.div
            style={{ y: portraitY, scale: portraitScale }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative aspect-4/5 w-full rounded-[26px] overflow-hidden border border-[#C59A62]/45 shadow-[0_25px_60px_rgba(20,20,19,0.12)] bg-[#FFFFFF] group">
              {/* Corner Accent Brackets */}
              <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C59A62] z-20 pointer-events-none" />
              <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C59A62] z-20 pointer-events-none" />
              <div className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C59A62] z-20 pointer-events-none" />
              <div className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C59A62] z-20 pointer-events-none" />

              <Image
                src="/images/portrait.jpg"
                alt="Adnan Habib - Senior Technology Consultant Dubai"
                fill
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 filter saturate-[1.05]"
                priority
              />

              {/* Ambient Bottom Gradient */}
              <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

              {/* Live Coordinates Tag */}
              <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md border border-[#E6E2D8] px-3 py-1 rounded-full text-[11px] font-mono text-[#A8783E] flex items-center gap-1.5 shadow-sm">
                <Compass className="w-3.5 h-3.5" />
                <span>25.2048° N, 55.2708° E</span>
              </div>

              {/* Floating Verified Identity Pill */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#1F1C1A]/95 backdrop-blur-md border border-[#3E3835] p-4 rounded-2xl shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">ADNAN HABIB</div>
                    <div className="text-[11px] text-[#A9A69F]">Dubai Technology Representative</div>
                  </div>
                </div>
                <ShieldCheck className="w-5 h-5 text-[#C59A62]" />
              </div>
            </div>

            {/* Quick Live Status Card */}
            <div className="bg-[#FFFFFF] p-5 rounded-2xl border border-[#E6E2D8] flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-[#787570] flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#A8783E]" />
                  <span>On-Ground Operations</span>
                </div>
                <div className="text-xs font-bold text-[#141413]">Active in Dubai &amp; GCC Region</div>
              </div>
              <a
                href="#contact"
                className="bg-[#141413] hover:bg-[#2A2725] text-[#FFFFFF] text-xs font-bold px-4 py-2 rounded-full transition-all flex items-center gap-1 shrink-0 shadow-sm"
              >
                <span>Inquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column (7 cols): Professional Biography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#EFECE6] border border-[#DDD8CE] text-[#A8783E] text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-sm">
              <span>Executive Dossier // Profile</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight leading-[1.12]">
              Technology Consultant, Ecommerce Strategist &amp; <span className="font-editorial italic text-[#A8783E] font-normal">Dubai Business Concierge</span>
            </h2>

            <div className="space-y-5 text-base sm:text-lg text-[#524E48] font-normal leading-relaxed">
              <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E6E2D8] shadow-sm relative group hover:border-[#C59A62] hover:shadow-md transition-all">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#C59A62] rounded-l-2xl" />
                <p>{PORTFOLIO_DATA.biography.p1}</p>
              </div>

              <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E6E2D8] shadow-sm relative group hover:border-[#C59A62] hover:shadow-md transition-all">
                <div className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#C59A62] rounded-l-2xl" />
                <p>{PORTFOLIO_DATA.biography.p2}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
