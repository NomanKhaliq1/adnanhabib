"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Zap,
  Handshake,
  CheckCircle2,
  Terminal,
  Activity,
  Compass,
  ArrowRight,
  Cpu,
  Layers
} from "lucide-react";

export default function WhyChooseMe() {
  const [activeStoryIdx, setActiveStoryIdx] = useState<number>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stories = [
    {
      id: "tech-leadership",
      number: "01",
      tag: "Engineering Excellence",
      title: "Technology Leadership",
      headline: "Architecting lightning-fast web apps with zero technical debt.",
      desc: "Building mission-critical digital systems requires more than standard development. I engineer resilient web applications using modern, modular architectures, strictly typed conventions, and enterprise-grade performance optimization.",
      highlights: [
        "Sub-50ms Edge API Response",
        "Type-Safe Modular Architecture",
        "100% Lighthouse Performance Audits"
      ],
      visualType: "terminal",
      visualTitle: "SYSTEM_CORE // ARCHITECTURE",
      badgeText: "High-Performance Core"
    },
    {
      id: "ecommerce-arch",
      number: "02",
      tag: "Revenue Acceleration",
      title: "Ecommerce Architecture",
      headline: "Transforming online storefronts into conversion powerhouses.",
      desc: "Deep specialty in high-volume Shopify Plus migrations, custom Liquid architecture, and seamless ERP/CRM synchronizations tailored specifically for UAE, KSA, and global retail scaling.",
      highlights: [
        "Shopify Plus Certified Engineering",
        "Multi-Currency GCC Localization",
        "Real-Time Oracle & SAP ERP Syncs"
      ],
      visualType: "ecommerce",
      visualTitle: "CHECKOUT_ENGINE // REVENUE_METRICS",
      badgeText: "+42% Conversion Velocity"
    },
    {
      id: "ai-automation",
      number: "03",
      tag: "Intelligent Workflows",
      title: "AI Automation & Agents",
      headline: "Deploying autonomous AI agents to scale back-office operations.",
      desc: "Replacing repetitive manual workflows with intelligent LLM pipelines, autonomous multi-step agents, and predictive automated customer routing to unlock unprecedented team productivity.",
      highlights: [
        "Custom OpenAI GPT-4 Fine-Tuning",
        "Automated Logistics & Invoice Parsers",
        "Self-Healing Workflow Automations"
      ],
      visualType: "ai",
      visualTitle: "NEURAL_AGENT // AUTOMATION_PIPELINE",
      badgeText: "Autonomous Agents Active"
    },
    {
      id: "dubai-rep",
      number: "04",
      tag: "On-Ground Trust",
      title: "Dubai Representation",
      headline: "Your senior eyes, ears, and executive proxy in the UAE.",
      desc: "Bridging the gap between global headquarters and physical GCC execution. From property inspections and vendor audits in Jebel Ali to in-person trade show representation and legal document coordination.",
      highlights: [
        "Direct On-Site GCC Audits",
        "Physical Warehouse & Stock Verification",
        "Trade Show & Supplier Representation"
      ],
      visualType: "concierge",
      visualTitle: "DUBAI_CONCIERGE // ON_GROUND_PROXY",
      badgeText: "25.2048° N, 55.2708° E"
    },
    {
      id: "fast-comm",
      number: "05",
      tag: "Frictionless Speed",
      title: "Rapid Communication",
      headline: "Direct senior access with zero bureaucratic friction.",
      desc: "No junior account managers or endless support ticketing queues. You communicate directly with the senior lead engineer via dedicated WhatsApp channels and scheduled strategy calls.",
      highlights: [
        "< 15 Minute Direct Response SLA",
        "Dedicated Executive WhatsApp Channel",
        "Weekly Sprint & Milestone Video Reviews"
      ],
      visualType: "speed",
      visualTitle: "COMM_CHANNEL // DIRECT_HOTLINE",
      badgeText: "Zero Bureaucracy"
    },
    {
      id: "partnerships",
      number: "06",
      tag: "Compounding Growth",
      title: "Long-Term Partnerships",
      headline: "Continuous technical advisory as your venture scales.",
      desc: "A launch is just the beginning. I partner with ambitious founders and executive teams on multi-year growth retainers, continuous CRO iteration, and long-term tech roadmap execution.",
      highlights: [
        "Quarterly Strategic Roadmap Planning",
        "Ongoing System Maintenance & Security",
        "Proactive Feature Experimentation"
      ],
      visualType: "growth",
      visualTitle: "PARTNERSHIP // LIFETIME_FLYWHEEL",
      badgeText: "Multi-Year Retention"
    }
  ];

  // Robust, Precision Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      const cards = cardRefs.current;
      if (!cards || cards.length === 0) return;

      const viewportCenter = window.innerHeight * 0.45;
      let closestIdx = 0;
      let minDistance = Infinity;

      cards.forEach((card, idx) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestIdx = idx;
        }
      });

      setActiveStoryIdx(closestIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStory = (index: number) => {
    const card = cardRefs.current[index];
    if (card) {
      const rect = card.getBoundingClientRect();
      const targetY = window.pageYOffset + rect.top - (window.innerHeight * 0.25);
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  const renderStoryVisual = (story: typeof stories[0]) => {
    switch (story.visualType) {
      case "terminal":
        return (
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#141413] border border-[#292524] space-y-2 text-[#E6E2D8]">
              <div className="flex items-center justify-between text-[#8A8780] border-b border-[#292524] pb-2 text-[10px]">
                <span>ARCH_STACK // NEXTJS_16 + AWS</span>
                <span className="text-[#10B981]">SYSTEM_HEALTHY</span>
              </div>
              <div className="space-y-1 text-[11px]">
                <p className="text-[#C59A62]">&gt; compile --production --turbo</p>
                <p className="text-[#A9A69F]">
                  ✓ Edge Route Latency: <span className="text-white font-bold">38ms</span>
                </p>
                <p className="text-[#A9A69F]">
                  ✓ Type-Safety Coverage: <span className="text-[#10B981] font-bold">100%</span>
                </p>
                <p className="text-[#A9A69F]">
                  ✓ Global CDN Cache Hit: <span className="text-[#C59A62] font-bold">99.8%</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-[#1C1A18] border border-[#292524] text-center">
                <div className="text-xl font-bold text-white font-mono">1.2s</div>
                <div className="text-[10px] text-[#A8783E] uppercase font-bold">Page Speed</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#1C1A18] border border-[#292524] text-center">
                <div className="text-xl font-bold text-white font-mono">100/100</div>
                <div className="text-[10px] text-[#A8783E] uppercase font-bold">Lighthouse Core</div>
              </div>
            </div>
          </div>
        );

      case "ecommerce":
        return (
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#141413] border border-[#292524] space-y-3">
              <div className="flex items-center justify-between text-[#8A8780] border-b border-[#292524] pb-2 text-[10px]">
                <span>SHOPIFY_PLUS // GCC_STOREFRONT</span>
                <span className="text-[#C59A62]">LIVE_STREAM</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#A9A69F]">Checkout Conversion</span>
                  <span className="text-white font-bold">+42.4%</span>
                </div>
                <div className="w-full h-2 bg-[#252220] rounded-full overflow-hidden">
                  <div className="w-[84%] h-full bg-gradient-to-r from-[#C59A62] to-[#E8C58C]" />
                </div>
                <div className="flex justify-between items-center text-[11px] text-[#8A8780] pt-1">
                  <span>
                    Oracle ERP Sync: <strong className="text-[#10B981]">0.8s Active</strong>
                  </span>
                  <span>
                    Cart Drop-Off: <strong className="text-[#E57373]">-35%</strong>
                  </span>
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#1C1A18] border border-[#292524] flex items-center justify-between">
              <span className="text-xs text-[#E6E2D8]">Multi-Currency UAE/KSA</span>
              <span className="text-xs font-bold text-[#C59A62] bg-[#24201D] px-2.5 py-1 rounded-md border border-[#3E3835]">
                AED / SAR Native
              </span>
            </div>
          </div>
        );

      case "ai":
        return (
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#141413] border border-[#292524] space-y-3">
              <div className="flex items-center justify-between text-[#8A8780] border-b border-[#292524] pb-2 text-[10px]">
                <span>MULTI_AGENT // WORKFLOW_ORCHESTRATOR</span>
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="p-2.5 rounded-lg bg-[#1C1A18] border border-[#3E3835] flex items-center justify-between">
                  <span className="text-[#C8C5BE]">Agent 01: GPT-4 Vision OCR</span>
                  <span className="text-[#10B981] font-bold">Active</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1C1A18] border border-[#3E3835] flex items-center justify-between">
                  <span className="text-[#C8C5BE]">Agent 02: Route Genetic Optimizer</span>
                  <span className="text-[#10B981] font-bold">Active</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#1C1A18] border border-[#3E3835] flex items-center justify-between">
                  <span className="text-[#C8C5BE]">Agent 03: Automated CRM Dispatch</span>
                  <span className="text-[#C59A62] font-bold">Standby</span>
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#1C1A18] border border-[#292524] text-center">
              <span className="text-xs text-[#A9A69F]">
                Back-Office Time Saved: <strong className="text-white">4h → 2min</strong>
              </span>
            </div>
          </div>
        );

      case "concierge":
        return (
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#141413] border border-[#292524] space-y-3">
              <div className="flex items-center justify-between text-[#8A8780] border-b border-[#292524] pb-2 text-[10px]">
                <div className="flex items-center gap-1.5 text-[#C59A62]">
                  <Compass className="w-3.5 h-3.5" />
                  <span>DUBAI_TERRITORY // GCC_NODE</span>
                </div>
                <span className="text-[#10B981] font-bold">VERIFIED</span>
              </div>
              <div className="space-y-1.5 text-[11px] text-[#C8C5BE]">
                <div className="flex items-center justify-between">
                  <span>Physical Warehouse Audits</span>
                  <span className="text-white">Jebel Ali Freezone</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Live Video Inspections</span>
                  <span className="text-[#C59A62]">4K HD Stream</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Supplier Escrow Verification</span>
                  <span className="text-[#10B981]">Complete</span>
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#1C1A18] border border-[#292524] flex items-center justify-between">
              <span className="text-xs text-white font-bold">Direct On-Ground Presence</span>
              <span className="text-xs font-mono font-bold text-[#C59A62]">Zero Travel Required</span>
            </div>
          </div>
        );

      case "speed":
        return (
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#141413] border border-[#292524] space-y-3">
              <div className="flex items-center justify-between text-[#8A8780] border-b border-[#292524] pb-2 text-[10px]">
                <span>EXECUTIVE_DIRECT_LINE</span>
                <span className="text-[#10B981] font-bold">ONLINE</span>
              </div>
              <div className="space-y-2 text-[11px]">
                <div className="p-3 rounded-lg bg-[#1C1A18] border border-[#3E3835] space-y-1">
                  <div className="flex justify-between text-[#8A8780] text-[9px]">
                    <span>DIRECT WHATSAPP CHANNEL</span>
                    <span>SLA: &lt; 15 MIN</span>
                  </div>
                  <p className="text-white text-xs font-sans">
                    &ldquo;Adnan, let&apos;s roll out the new checkout flow.&rdquo;
                  </p>
                  <p className="text-[#C59A62] text-[10px]">
                    ✓ Understood. Deployed to staging for review in 10m.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#1C1A18] border border-[#292524] text-center">
              <span className="text-xs text-[#A9A69F]">
                Account Managers: <strong className="text-[#E57373]">0</strong> | Direct Senior Dev:{" "}
                <strong className="text-[#10B981]">100%</strong>
              </span>
            </div>
          </div>
        );

      case "growth":
        return (
          <div className="space-y-4 font-mono text-xs">
            <div className="p-4 rounded-xl bg-[#141413] border border-[#292524] space-y-3">
              <div className="flex items-center justify-between text-[#8A8780] border-b border-[#292524] pb-2 text-[10px]">
                <span>GROWTH_FLYWHEEL // MULTI_YEAR</span>
                <span className="text-[#C59A62] font-bold">COMPOUNDING</span>
              </div>
              <div className="space-y-1.5 text-[11px] text-[#C8C5BE]">
                <div className="flex items-center justify-between">
                  <span>Quarterly Roadmap Execution</span>
                  <span className="text-[#10B981]">100% Complete</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Proactive Security Updates</span>
                  <span className="text-white">Continuous</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Average Client Retention</span>
                  <span className="text-[#C59A62] font-bold">4.8+ Years</span>
                </div>
              </div>
            </div>
            <div className="p-3.5 rounded-xl bg-[#1C1A18] border border-[#292524] text-center">
              <span className="text-xs text-white font-bold">Lifetime Strategic Advisory Partner</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="section-dark py-24 md:py-36 bg-[#141413] text-white relative border-b border-white/10 overflow-hidden">
      {/* Ambient Lighting & Grid */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#C59A62]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2725_1px,transparent_1px),linear-gradient(to_bottom,#2A2725_1px,transparent_1px)] bg-[size:48px_48px] opacity-70 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-14">
        
        {/* Full-Width Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EFECE6] border border-[#DDD8CE] text-[#A8783E] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A62]" />
            <span>Storytelling // The Unfair Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight font-serif leading-tight">
            Why Choose Me: <span className="font-editorial italic font-normal text-[#A8783E]">Competitive Advantage</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5A5650] font-normal leading-relaxed">
            Combining elite full-stack software architecture with direct on-ground Dubai execution and senior-level personal accountability.
          </p>
        </div>

        {/* 2-Column Perfectly-Aligned Storytelling Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
          
          {/* Left Column (5 cols): PINNED VISUAL LENS (Deterministic Real-Time Sync) */}
          <div className="min-w-0 lg:col-span-5 lg:sticky lg:top-28 self-start space-y-4 z-20">
            
            {/* Interactive Obsidian Visual Terminal Lens Box */}
            <div className="w-full min-w-0 bg-[#181615] rounded-[22px] sm:rounded-[28px] border border-[#3E3835] shadow-[0_25px_60px_rgba(0,0,0,0.6)] overflow-hidden p-4 sm:p-6 space-y-5">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between border-b border-[#292524] pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E57373]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFB74D]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#81C784]" />
                  <span className="ml-2 text-[10px] font-mono text-[#8A8780] tracking-wider truncate max-w-[140px] sm:max-w-none">
                    {stories[activeStoryIdx].visualTitle}
                  </span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#C59A62] bg-[#24201D] px-2.5 py-0.5 rounded-full border border-[#3E3835]">
                  {stories[activeStoryIdx].badgeText}
                </span>
              </div>

              {/* Dynamic Animated Visual Content */}
              <div className="min-h-[220px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={stories[activeStoryIdx].id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderStoryVisual(stories[activeStoryIdx])}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Visual Active Status Bar */}
              <div className="pt-3.5 border-t border-[#292524] flex items-center justify-between text-xs text-[#A9A69F]">
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>Story Chapter {stories[activeStoryIdx].number} of 06</span>
                </div>
                <span className="text-[#C59A62] font-bold text-[11px] font-mono">
                  {stories[activeStoryIdx].tag}
                </span>
              </div>
            </div>

            {/* Quick Interactive Selector Indicator Pills */}
            <div className="flex items-center justify-between gap-2 px-1">
              {stories.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => scrollToStory(idx)}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeStoryIdx === idx
                      ? "bg-[#C59A62] shadow-[0_0_12px_rgba(197,154,98,0.7)] scale-y-110"
                      : "bg-[#E6E2D8] hover:bg-[#A8783E]"
                  }`}
                  title={s.title}
                />
              ))}
            </div>

          </div>

          {/* Right Column (7 cols): Scrolling Narrative Chapters */}
          <div className="lg:col-span-7 space-y-10 lg:space-y-14 pb-20">
            {stories.map((story, idx) => {
              const isActive = activeStoryIdx === idx;

              return (
                <div
                  key={story.id}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  onClick={() => scrollToStory(idx)}
                  className={`p-8 sm:p-10 rounded-[28px] border transition-all duration-500 cursor-pointer ${
                    isActive
                      ? "bg-[#FFFFFF] border-[#C59A62] shadow-[0_20px_50px_rgba(20,20,19,0.08)] ring-1 ring-[#C59A62]/30 scale-[1.01]"
                      : "bg-[#FAF7F2]/80 border-[#E6E2D8] hover:border-[#C59A62]/50 hover:bg-white opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="space-y-5">
                    
                    {/* Chapter Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-mono font-bold px-3 py-1 rounded-lg border transition-colors ${
                            isActive
                              ? "bg-[#141413] text-[#C59A62] border-[#141413]"
                              : "bg-[#EFECE6] text-[#787570] border-[#DDD8CE]"
                          }`}
                        >
                          CHAPTER {story.number}
                        </span>
                        <span className="text-xs font-mono font-bold text-[#A8783E] uppercase tracking-wider">
                          {story.tag}
                        </span>
                      </div>

                      {isActive && (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                          IN_FOCUS
                        </span>
                      )}
                    </div>

                    {/* Headline & Title */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold font-serif text-[#141413] tracking-tight">
                        {story.title}
                      </h3>
                      <p className="text-base sm:text-lg font-medium text-[#A8783E] leading-snug">
                        {story.headline}
                      </p>
                    </div>

                    {/* Story Narrative Paragraph */}
                    <p className="text-sm sm:text-base text-[#5A5650] font-normal leading-relaxed">
                      {story.desc}
                    </p>

                    {/* Key Strategic Takeaways Checklist */}
                    <div className="pt-4 border-t border-[#EFECE6] space-y-2.5">
                      {story.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#2E2C29]">
                          <CheckCircle2 className="w-4 h-4 text-[#C59A62] shrink-0" />
                          <span className="font-medium">{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
