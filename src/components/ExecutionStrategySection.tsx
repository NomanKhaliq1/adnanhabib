"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Compass,
  GitBranch,
  Layout,
  Code2,
  ShieldCheck,
  Rocket,
  TrendingUp,
  Sparkles,
  ArrowRight
} from "lucide-react";

export default function ExecutionStrategySection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Exact Mathematical Coordinate Map (viewBox: 1400 x 580)
  // X: 100, 300, 500, 700, 900, 1100, 1290
  // Y: High Peak = 190 (32.76%), Low Valley = 350 (60.34%)
  const steps = [
    {
      step: "01 / 07",
      title: "Discover",
      desc: "Assessing system requirements, pain points & commercial targets.",
      icon: <Compass className="w-5 h-5" />,
      xPct: (100 / 1400) * 100, // 7.14%
      yPct: (350 / 580) * 100, // 60.34%
      textTop: "425px",
      isTop: false
    },
    {
      step: "02 / 07",
      title: "Strategy",
      desc: "Structuring architecture, roadmap timelines & scope milestones.",
      icon: <GitBranch className="w-5 h-5" />,
      xPct: (300 / 1400) * 100, // 21.43%
      yPct: (190 / 580) * 100, // 32.76%
      textTop: "15px",
      isTop: true
    },
    {
      step: "03 / 07",
      title: "Design",
      desc: "Crafting high-converting UX/UI wireframes & system blueprints.",
      icon: <Layout className="w-5 h-5" />,
      xPct: (500 / 1400) * 100, // 35.71%
      yPct: (350 / 580) * 100, // 60.34%
      textTop: "425px",
      isTop: false
    },
    {
      step: "04 / 07",
      title: "Development",
      desc: "Building clean, scalable code across modern frontend & cloud.",
      icon: <Code2 className="w-5 h-5" />,
      xPct: (700 / 1400) * 100, // 50.00%
      yPct: (190 / 580) * 100, // 32.76%
      textTop: "15px",
      isTop: true
    },
    {
      step: "05 / 07",
      title: "Testing",
      desc: "Rigorous cross-device audits, security scans, and QA verification.",
      icon: <ShieldCheck className="w-5 h-5" />,
      xPct: (900 / 1400) * 100, // 64.29%
      yPct: (350 / 580) * 100, // 60.34%
      textTop: "425px",
      isTop: false
    },
    {
      step: "06 / 07",
      title: "Launch",
      desc: "Zero-downtime go-live deployments & marketplace rollouts.",
      icon: <Rocket className="w-5 h-5" />,
      xPct: (1100 / 1400) * 100, // 78.57%
      yPct: (190 / 580) * 100, // 32.76%
      textTop: "15px",
      isTop: true
    },
    {
      step: "07 / 07",
      title: "Growth & Scale",
      desc: "Ongoing CRO optimization, AI agents & on-ground Dubai operations.",
      icon: <TrendingUp className="w-6 h-6 text-[#C59A62]" />,
      xPct: (1290 / 1400) * 100, // 92.14%
      yPct: (190 / 580) * 100, // 32.76%
      textTop: "275px",
      isTop: true,
      isFinal: true
    }
  ];

  return (
    <section className="py-24 md:py-36 bg-[#FAF7F2] text-[#141413] relative border-b border-[#E6E2D8] overflow-hidden">
      
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EAE5DC_1px,transparent_1px),linear-gradient(to_bottom,#EAE5DC_1px,transparent_1px)] bg-[size:48px_48px] opacity-70 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#C59A62]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-[1240px] mx-auto pt-2">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#EFECE6] border border-[#DDD8CE] text-[#A8783E] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A62]" />
              <span>Interactive Execution Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight font-serif leading-[1.25]">
              Execution Strategy <span className="font-editorial italic font-normal text-[#A8783E]">(How We Partner)</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5A5650] font-normal leading-relaxed">
              A continuous, transparent software engineering and operational roadmap from discovery to sustained scale.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2A2725] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-sm shrink-0 self-start md:self-auto hover:shadow-md hover:scale-[1.02]"
          >
            <span>Initiate Project Scope</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C59A62]" />
          </a>
        </div>

        {/* 100% Full-Width Mathematically-Locked Wavy Canvas Pipeline with Generous Height */}
        <div className="hidden xl:block relative w-full h-[580px] select-none">
          
          {/* Continuous Sinusoidal Road / Pipeline SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1400 580"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* 1. Outer Road Track (Beige Band) */}
            <path
              d="M 100 350 C 200 350, 200 190, 300 190 C 400 190, 400 350, 500 350 C 600 350, 600 190, 700 190 C 800 190, 800 350, 900 350 C 1000 350, 1000 190, 1100 190 C 1195 190, 1200 190, 1290 190"
              stroke="#E4DED4"
              strokeWidth="24"
              strokeLinecap="round"
            />

            {/* 2. Center Animated Dashed Conduit Line (Flowing Electricity) */}
            <motion.path
              d="M 100 350 C 200 350, 200 190, 300 190 C 400 190, 400 350, 500 350 C 600 350, 600 190, 700 190 C 800 190, 800 350, 900 350 C 1000 350, 1000 190, 1100 190 C 1195 190, 1200 190, 1290 190"
              stroke="#C59A62"
              strokeWidth="2.5"
              strokeDasharray="8 8"
              animate={{ strokeDashoffset: [0, -32] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 1.2 }}
            />
          </svg>

          {/* 1. SEPARATE INDEPENDENT CIRCLES (LOCKED 100% TO PEAKS & VALLEYS) */}
          {steps.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            if (item.isFinal) {
              return (
                <div
                  key={`circle-${item.step}`}
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{
                    left: `${item.xPct}%`,
                    top: `${item.yPct}%`
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-auto"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.08 }}
                    className="w-20 h-20 rounded-full bg-[#141413]/10 backdrop-blur-xs flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-15 h-15 rounded-full bg-[#141413] border-2 border-[#C59A62] shadow-[0_0_25px_rgba(197,154,98,0.6)] flex items-center justify-center text-[#C59A62] hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                  </motion.div>
                </div>
              );
            }

            return (
              <div
                key={`circle-${item.step}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{
                  left: `${item.xPct}%`,
                  top: `${item.yPct}%`
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-auto"
              >
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: idx * 0.08 }}
                  className="w-18 h-18 rounded-full bg-[#FAF7F2]/80 backdrop-blur-xs flex items-center justify-center cursor-pointer"
                >
                  <div
                    className={`w-13 h-13 rounded-full border shadow-md flex items-center justify-center transition-all duration-300 ${
                      isHovered
                        ? "bg-[#141413] text-[#C59A62] border-[#C59A62] scale-110"
                        : "bg-white text-[#141413] border-[#DDD7CC]"
                    }`}
                  >
                    {item.icon}
                  </div>
                </motion.div>
              </div>
            );
          })}

          {/* 2. SEPARATE INDEPENDENT TEXT BLOCKS (GENEROUS VERTICAL BREATHING ROOM) */}
          {steps.map((item, idx) => {
            const isHovered = hoveredIdx === idx;

            if (item.isFinal) {
              return (
                <motion.div
                  key={`text-${item.step}`}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  style={{
                    left: `${item.xPct}%`,
                    top: item.textTop
                  }}
                  className="absolute -translate-x-1/2 z-30 bg-[#141413] text-white p-4.5 rounded-2xl border border-[#C59A62]/40 shadow-xl w-[200px] space-y-1 text-left pointer-events-auto"
                >
                  <span className="text-[10px] font-mono font-bold text-[#C59A62] uppercase tracking-wider block">
                    {item.step} // Final Stage
                  </span>
                  <h3 className="text-lg font-bold font-serif text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#C8C5BE] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            }

            return (
              <div
                key={`text-${item.step}`}
                style={{
                  left: `${item.xPct}%`,
                  top: item.textTop
                }}
                className="absolute -translate-x-1/2 z-10 w-[170px] text-left pointer-events-none"
              >
                <span className="text-[11px] font-mono font-bold text-[#C26D45] uppercase tracking-wider block">
                  {item.step}
                </span>
                <h3
                  className={`text-xl font-bold font-serif leading-tight transition-colors ${
                    isHovered ? "text-[#A8783E]" : "text-[#141413]"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-xs text-[#66645F] leading-relaxed mt-1">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>

        {/* Responsive Mobile / Tablet View */}
        <div className="xl:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className={`p-6 rounded-2xl border transition-all ${
                item.isFinal
                  ? "bg-[#141413] text-white border-[#C59A62]/50 shadow-lg"
                  : "bg-white text-[#141413] border-[#E6E2D8] shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                    item.isFinal
                      ? "bg-[#252220] border-[#C59A62] text-[#C59A62]"
                      : "bg-[#FAF7F2] border-[#E6E2D8] text-[#141413]"
                  }`}
                >
                  {item.icon}
                </div>
                <span
                  className={`text-xs font-mono font-bold ${
                    item.isFinal ? "text-[#C59A62]" : "text-[#C26D45]"
                  }`}
                >
                  {item.step}
                </span>
              </div>
              <h3
                className={`text-xl font-bold font-serif mb-1.5 ${
                  item.isFinal ? "text-white" : "text-[#141413]"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-xs leading-relaxed ${
                  item.isFinal ? "text-[#C8C5BE]" : "text-[#66645F]"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
