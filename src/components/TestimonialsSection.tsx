"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function TestimonialsSection() {
  const testimonials = PORTFOLIO_DATA.testimonials;
  // Repeat array 4 times to ensure seamless infinite span on all screen sizes
  const repeatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials
  ];

  return (
    <section className="py-24 md:py-36 bg-[#141413] text-white border-b border-[#292524] relative">
      {/* Ambient Lighting Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#C59A62]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#292524_1px,transparent_1px),linear-gradient(to_bottom,#292524_1px,transparent_1px)] bg-[size:48px_48px] opacity-25 pointer-events-none" />

      {/* Standard Content Container for Section Heading */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#24201D] border border-[#3E3835] text-[#C59A62] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A62]" />
            <span>Executive Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight font-serif leading-tight">
            Client Testimonials &amp; <span className="font-editorial italic font-normal text-[#C59A62]">Executive Trust</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A9A69F] font-normal leading-relaxed">
            Direct feedback from business directors, enterprise founders, and operational leaders across Dubai, KSA, and the UK.
          </p>
        </div>
      </div>

      {/* Full-Width Seamless Infinite Loop Carousel (overflow-hidden removed) */}
      <div className="w-full relative py-4 select-none z-10">
        {/* Left & Right Subtle Soft Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#141413] via-[#141413]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#141413] via-[#141413]/80 to-transparent z-20 pointer-events-none" />

        {/* Framer Motion Seamless Infinite Linear Loop */}
        <motion.div
          className="flex gap-7 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 38,
              ease: "linear"
            }
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {repeatedTestimonials.map((t, idx) => (
            <div
              key={idx}
              className="w-[360px] sm:w-[440px] lg:w-[480px] shrink-0 bg-[#1C1A18]/95 backdrop-blur-md p-8 sm:p-9 rounded-[28px] border border-[#3E3835] hover:border-[#C59A62]/70 flex flex-col justify-between space-y-7 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:shadow-[0_25px_60px_rgba(197,154,98,0.15)] transition-all duration-400 group"
            >
              <div className="space-y-5">
                {/* Header with 5 Gold Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-[#C59A62] text-[#C59A62]"
                      />
                    ))}
                  </div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2.5 py-0.5 rounded-full border border-[#10B981]/20">
                    <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                    <span>VERIFIED CLIENT</span>
                  </div>
                </div>

                {/* Quote Body */}
                <blockquote className="text-sm sm:text-base text-[#E6E2D8] font-normal leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              {/* Author Details */}
              <div className="pt-5 border-t border-[#2E2B28] flex items-center justify-between">
                <div className="space-y-0.5">
                  <div className="text-base font-bold text-white font-serif group-hover:text-[#C59A62] transition-colors">
                    {t.name}
                  </div>
                  <div className="text-xs text-[#A9A69F] font-mono">
                    {t.role} • <span className="text-[#C59A62] font-semibold">{t.company}</span>
                  </div>
                </div>
                <Quote className="w-7 h-7 text-[#C59A62]/20 shrink-0" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
