"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Compass, ShieldCheck } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function CareerTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Pure vertical page scroll driving the choreographed timeline experience
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Phase 1 (0 -> 0.16): Image slides completely in from far left (-130% -> 0%)
  const portraitX = useTransform(scrollYProgress, [0, 0.16, 1], ["-130%", "0%", "0%"]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.16, 1], [0.94, 1, 1]);

  // Shadow behind image ONLY appears as the image arrives (0 at start, 1 when docked)
  const shadowOpacity = useTransform(scrollYProgress, [0, 0.16, 1], [0, 1, 1]);

  // Phase 1 (0 -> 0.16): Timeline smoothly moves to the right to make generous room for the image
  const timelineStageOffset = useTransform(scrollYProgress, [0, 0.16, 1], ["0px", "480px", "480px"]);

  // Phase 2 (0.16 -> 1.0): Timeline milestones travel horizontally and rest with a perfect elegant margin from the right edge
  const timelineX = useTransform(scrollYProgress, [0.16, 1], ["0%", "-54%"]);
  const progressScale = useTransform(scrollYProgress, [0.16, 1], [0.05, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[360vh] bg-[#141413] text-[#FFFFFF] w-full border-b border-[#292524]"
    >
      {/* Pinned Sticky Viewport Window */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between pt-24 sm:pt-28 pb-8 overflow-hidden select-none">
        
        {/* Subtle Ambient Spotlight Glow */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#A8783E]/8 rounded-full blur-[140px] pointer-events-none" />

        {/* 1. Header Bar */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full text-center space-y-1 relative z-30 shrink-0">
          <div className="inline-flex items-center gap-2 bg-[#24201D] border border-[#3E3835] text-[#C59A62] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
            <span>Scroll-Driven Trajectory (2012 — 2026)</span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Career Journey Timeline
          </h3>
          <p className="text-xs text-[#A9A69F]">
            Scroll vertically to navigate through 14 years of technological evolution and Dubai leadership
          </p>
        </div>

        {/* 2. Main Choreographed Stage */}
        <div className="w-full flex-1 flex items-center relative my-auto overflow-hidden">
          
          {/* Shadow Behind Portrait — ONLY appears simultaneously WITH the image */}
          <motion.div
            style={{ opacity: shadowOpacity }}
            className="hidden lg:block absolute left-0 top-0 bottom-0 w-[440px] xl:w-[480px] bg-gradient-to-r from-[#141413] via-[#141413] to-transparent z-25 pointer-events-none"
          />

          {/* Left Docked Portrait Stage — Starts COMPLETELY off-screen (-130%) and slides into view */}
          <motion.div
            style={{ x: portraitX, scale: portraitScale }}
            className="hidden lg:flex flex-col justify-center w-[330px] xl:w-[370px] 2xl:w-[400px] shrink-0 absolute left-6 xl:left-12 z-30 opacity-100 will-change-transform"
          >
            <div className="relative aspect-[3/4] w-full rounded-[26px] overflow-hidden border border-[#C59A62]/50 shadow-[0_25px_60px_rgba(0,0,0,0.9)] bg-[#1C1A18] group">
              {/* Corner Gold Brackets */}
              <div className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 border-[#C59A62] z-20 pointer-events-none" />
              <div className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 border-[#C59A62] z-20 pointer-events-none" />
              <div className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 border-[#C59A62] z-20 pointer-events-none" />
              <div className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 border-[#C59A62] z-20 pointer-events-none" />

              <Image
                src="/images/portrait.jpg"
                alt="Adnan Habib - Senior Technology Consultant"
                fill
                sizes="(max-width: 1280px) 370px, 400px"
                className="object-cover object-top filter saturate-[1.05]"
                priority
              />

              {/* Coordinates Pill */}
              <div className="absolute top-4 left-4 z-20 bg-[#171717]/90 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] font-mono text-[#C59A62] flex items-center gap-1.5 shadow-sm">
                <Compass className="w-3.5 h-3.5" />
                <span>Dubai // 25.2048° N</span>
              </div>

              {/* Subtle Bottom Hairline Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#141413]/80 via-[#141413]/30 to-transparent z-10" />

              {/* Verified Identity Badge */}
              <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#1F1C1A]/95 backdrop-blur-md border border-[#3E3835] p-3 rounded-2xl flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                  <div>
                    <div className="text-xs font-bold text-white leading-tight tracking-wide">ADNAN HABIB</div>
                    <div className="text-[10px] text-[#A9A69F]">Technology Consultant</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#C59A62] bg-[#24201D] px-2.5 py-1 rounded-md border border-[#3E3835]">
                  14-Yr Track
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Horizontal Scrolling Timeline Canvas */}
          <motion.div
            style={{ paddingLeft: timelineStageOffset }}
            className="w-full relative overflow-hidden py-4 h-full flex items-center will-change-[padding]"
          >
            <motion.div
              style={{ x: timelineX }}
              className="min-w-max flex gap-12 items-center py-6 will-change-transform relative z-10 pl-6 pr-24 sm:pr-32"
            >
              {PORTFOLIO_DATA.timeline.map((item, idx) => {
                const isTop = idx % 2 === 0;
                const isCurrent = item.year.includes("Present");
                const isLast = idx === PORTFOLIO_DATA.timeline.length - 1;

                return (
                  <div
                    key={item.year}
                    className="w-[280px] sm:w-[340px] shrink-0 flex flex-col items-center relative z-10"
                  >
                    {/* 1. TOP ROW: Either Content Card (for even items) OR Clean Big Text Year (for odd items) */}
                    <div className="w-full h-[200px] flex flex-col justify-end items-center">
                      {isTop ? (
                        /* Content Card on Top */
                        <div className="w-full flex flex-col items-center">
                          <div
                            className={`w-full p-5 rounded-2xl border transition-all duration-300 shadow-xl ${
                              isCurrent
                                ? "bg-gradient-to-br from-[#24201D] to-[#1C1A18] border-[#C59A62] shadow-[0_0_30px_rgba(197,154,98,0.3)]"
                                : "bg-[#181615] border-[#292524] hover:border-[#C59A62]/60 hover:bg-[#1E1C1A]"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-mono font-bold text-[#C59A62] uppercase tracking-wider">
                                {isCurrent ? "Active Milestone" : `Phase 0${idx + 1}`}
                              </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#A9A69F] leading-relaxed">
                              {item.description}
                            </p>
                          </div>

                          {/* Connector Stem Down */}
                          <div className="w-[2px] h-6 bg-[#C59A62]" />
                        </div>
                      ) : (
                        /* Clean Big Text Year on Top */
                        <div className="flex flex-col items-center justify-end pb-2">
                          <span
                            className={`font-mono font-extrabold tracking-tight select-none transition-all ${
                              isCurrent
                                ? "text-2xl sm:text-3xl text-[#E8C58C] drop-shadow-[0_0_15px_rgba(197,154,98,0.6)]"
                                : "text-2xl sm:text-3xl text-[#C59A62]/90 hover:text-[#C59A62]"
                            }`}
                          >
                            {item.year}
                          </span>
                          <span className="text-[10px] font-mono text-[#787570] uppercase tracking-wider mt-0.5">
                            {isCurrent ? "Active" : `Phase 0${idx + 1}`}
                          </span>

                          {/* Connector Stem Down to Node */}
                          <div className="w-[2px] h-5 bg-[#C59A62]/50 mt-1.5" />
                        </div>
                      )}
                    </div>

                    {/* 2. CENTER NODE ROW WITH CONNECTED GOLDEN LINE */}
                    <div className="h-8 w-full flex items-center justify-center relative z-20">
                      
                      {/* Golden Segment from this node's center to next node's center (Omitted on last node) */}
                      {!isLast && (
                        <div
                          className="absolute top-1/2 left-1/2 h-[2px] bg-[#C59A62] -translate-y-1/2 pointer-events-none z-0 shadow-[0_0_10px_rgba(197,154,98,0.5)]"
                          style={{ width: "calc(100% + 48px)" }}
                        />
                      )}

                      {/* Circular Milestone Dot */}
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all relative z-10 ${
                          isCurrent
                            ? "bg-[#C59A62] border-white shadow-[0_0_16px_#C59A62]"
                            : "bg-[#141413] border-[#C59A62] shadow-[0_0_8px_rgba(197,154,98,0.4)]"
                        }`}
                      >
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    </div>

                    {/* 3. BOTTOM ROW: Either Clean Big Text Year (for even items) OR Content Card (for odd items) */}
                    <div className="w-full h-[200px] flex flex-col justify-start items-center">
                      {!isTop ? (
                        /* Content Card on Bottom */
                        <div className="w-full flex flex-col items-center">
                          {/* Connector Stem Up */}
                          <div className="w-[2px] h-6 bg-[#C59A62]" />

                          <div
                            className={`w-full p-5 rounded-2xl border transition-all duration-300 shadow-xl ${
                              isCurrent
                                ? "bg-gradient-to-br from-[#24201D] to-[#1C1A18] border-[#C59A62] shadow-[0_0_30px_rgba(197,154,98,0.3)]"
                                : "bg-[#181615] border-[#292524] hover:border-[#C59A62]/60 hover:bg-[#1E1C1A]"
                            }`}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[11px] font-mono font-bold text-[#C59A62] uppercase tracking-wider">
                                {isCurrent ? "Active Milestone" : `Phase 0${idx + 1}`}
                              </span>
                            </div>
                            <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#A9A69F] leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ) : (
                        /* Clean Big Text Year on Bottom */
                        <div className="flex flex-col items-center justify-start pt-2">
                          {/* Connector Stem Up from Node */}
                          <div className="w-[2px] h-5 bg-[#C59A62]/50 mb-1.5" />

                          <span
                            className={`font-mono font-extrabold tracking-tight select-none transition-all ${
                              isCurrent
                                ? "text-2xl sm:text-3xl text-[#E8C58C] drop-shadow-[0_0_15px_rgba(197,154,98,0.6)]"
                                : "text-2xl sm:text-3xl text-[#C59A62]/90 hover:text-[#C59A62]"
                            }`}
                          >
                            {item.year}
                          </span>
                          <span className="text-[10px] font-mono text-[#787570] uppercase tracking-wider mt-0.5">
                            Phase 0{idx + 1}
                          </span>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </motion.div>
          </motion.div>

        </div>

        {/* 3. Bottom Progress Bar */}
        <div className="max-w-[360px] mx-auto w-full px-6 relative z-20 shrink-0">
          <div className="w-full h-1 bg-[#24201D] rounded-full overflow-hidden border border-[#3E3835]">
            <motion.div
              style={{ scaleX: progressScale, transformOrigin: "0%" }}
              className="h-full bg-gradient-to-r from-[#C59A62] to-[#A8783E]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
