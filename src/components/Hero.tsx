"use client";

import React from "react";
import {
  ArrowRight,
  Bot,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Layers
} from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="top" className="section-dark relative pt-32 pb-16 md:pt-40 md:pb-24 bg-[#141413] overflow-hidden">
      {/* Subtle Luxury Ambient Glow & Hairline Background Accents */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[#F1E7D8] rounded-full blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-[#EEE9DF] rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Editorial Typography & Direct Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status / Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#FFFFFF] border border-[#DDDAD2] text-[#171717] text-xs font-semibold px-4 py-1.5 rounded-full shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#A8783E] animate-pulse"></span>
              <span>Trusted Technology &amp; Business Partner</span>
            </div>

            {/* Main Heading (Exact 4 Lines) */}
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-bold text-[#171717] leading-[1.06] tracking-tight">
              Technology. <br />
              Ecommerce. <br />
              AI Automation. <br />
              <span className="font-editorial italic font-normal text-[#A8783E] inline-block mt-1">
                Dubai Business Support.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#66645F] max-w-xl font-normal leading-relaxed">
              Helping businesses worldwide build, grow, and operate successfully through modern technology, ecommerce solutions, AI automation, and trusted on-ground business support in Dubai.
            </p>

            {/* Two CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#C59A62] hover:bg-[#D0A66D] text-[#141413] text-sm sm:text-base font-bold px-8 py-4 rounded-full border border-[#D8B47D] transition-all shadow-[0_12px_30px_rgba(197,154,98,0.18)] hover:shadow-[0_16px_36px_rgba(197,154,98,0.28)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-sm sm:text-base font-semibold px-7 py-4 rounded-full border border-white/20 transition-all hover:border-[#C59A62]/70 hover:text-[#E8C58C]"
              >
                <span>Explore Services</span>
              </a>
            </div>

            {/* Subtle Credibility Badges */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#8A8780] font-medium">
              <span className="flex items-center gap-1.5 text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#A8783E]" />
                14+ Years Track Record
              </span>
              <span className="flex items-center gap-1.5 text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#A8783E]" />
                On-Ground in Dubai, UAE
              </span>
            </div>
          </div>

          {/* Right Column (5 cols): Layered Luxury Technical Pane */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Widget A: Revenue Card */}
            <div className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#DDDAD2] shadow-sm hover:shadow-md hover:border-[#C8C5BE] transition-all relative overflow-hidden group">
              {/* Background gradient sparkline highlight */}
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#8A8780] uppercase tracking-wider">
                  Store Revenue Growth
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#A8783E] bg-[#F1E7D8] px-2.5 py-1 rounded-full border border-[#A8783E]/20">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+42.5%</span>
                </span>
              </div>

              <div className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-[#171717] tracking-tight">
                $124,850.00
              </div>

              {/* Dynamic SVG Sparkline Wave */}
              <div className="mt-4 pt-3 border-t border-[#DDDAD2]/60 flex items-center justify-between">
                <svg
                  viewBox="0 0 160 36"
                  className="w-28 h-8 text-[#A8783E] fill-none stroke-current stroke-2"
                >
                  <path
                    d="M 4 28 Q 30 24 50 16 T 90 20 T 130 8 T 156 4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="text-right">
                  <div className="text-[10px] text-[#8A8780] uppercase font-mono">
                    Optimization Pace
                  </div>
                  <div className="text-xs font-bold text-[#171717]">
                    Sub-1.2s Checkout
                  </div>
                </div>
              </div>
            </div>

            {/* Widget B: AI Agent Card */}
            <div className="bg-[#FFFFFF] p-6 sm:p-7 rounded-2xl border border-[#DDDAD2] shadow-sm hover:shadow-md hover:border-[#C8C5BE] transition-all space-y-3.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-bold text-[#171717]">
                  <div className="w-7 h-7 rounded-lg bg-[#F7F6F2] border border-[#DDDAD2] flex items-center justify-center text-[#A8783E]">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span>AI Autonomous Agent</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] inline-block animate-pulse"></span>
                  <span>Active</span>
                </div>
              </div>

              <div className="bg-[#F7F6F2] p-4 rounded-xl border border-[#DDDAD2] text-xs sm:text-sm text-[#171717] leading-relaxed relative">
                <p className="italic text-[#66645F]">
                  &quot;Analyzing shipping logistics APIs. Found route bottleneck in Jebel Ali. Auto-rerouting fleet.&quot;
                </p>
              </div>

              <div className="text-xs font-mono text-[#A8783E] font-semibold flex items-center gap-2 pt-0.5">
                <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "8s" }} />
                <span>Status: Deploying patch...</span>
              </div>
            </div>

            {/* Widget C: Enterprise Focus Tags */}
            <div className="bg-[#FFFFFF] p-5 sm:p-6 rounded-2xl border border-[#DDDAD2] shadow-sm hover:shadow-md hover:border-[#C8C5BE] transition-all">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#8A8780] mb-3 flex items-center justify-between">
                <span>Core Architectural Focus</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A8783E]"></span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Shopify Plus", "AWS Cloud", "GPT-4 Agents", "Local Concierge"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold text-[#171717] bg-[#F7F6F2] hover:bg-[#EEE9DF] hover:border-[#171717] border border-[#DDDAD2] px-3.5 py-1.5 rounded-full transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
