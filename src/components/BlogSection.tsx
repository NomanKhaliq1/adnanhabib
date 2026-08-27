"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Clock, Calendar, BookOpen } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="py-24 md:py-36 bg-[#FAF7F2] text-[#141413] relative border-b border-[#E6E2D8] overflow-hidden"
    >
      {/* Ambient Lighting & Grid Background */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#C59A62]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#EAE5DC_1px,transparent_1px),linear-gradient(to_bottom,#EAE5DC_1px,transparent_1px)] bg-[size:48px_48px] opacity-70 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#EFECE6] border border-[#DDD8CE] text-[#A8783E] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A62]" />
              <span>Thought Leadership &amp; Engineering Dossiers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight font-serif leading-tight">
              Knowledge Base &amp; <span className="font-editorial italic font-normal text-[#A8783E]">Industry Insights</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5A5650] font-normal leading-relaxed">
              Strategic frameworks and technical blueprints on Dubai business expansion, ecommerce replatforming, and autonomous AI systems.
            </p>
          </div>

          <Link
            href="/blog/expanding-to-dubai"
            className="group inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2A2725] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-sm shrink-0 self-start md:self-auto hover:shadow-md hover:scale-[1.02]"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C59A62]" />
          </Link>
        </div>

        {/* 3-Column Editorial Cards Grid with Rich Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.blogs.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                href={`/blog/${blog.slug}`}
                className="group flex flex-col justify-between h-full bg-[#FFFFFF] rounded-[26px] border border-[#E6E2D8] hover:border-[#C59A62]/60 shadow-[0_8px_30px_rgba(20,20,19,0.04)] hover:shadow-[0_20px_45px_rgba(20,20,19,0.09)] hover:-translate-y-1.5 transition-all duration-400 overflow-hidden"
              >
                <div>
                  {/* Article Visual Cover Frame */}
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F7F5F0] border-b border-[#E6E2D8]">
                    
                    {/* Category Floating Pill */}
                    <div className="absolute top-3.5 left-3.5 z-20 bg-[#141413]/85 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59A62]" />
                      <span>{blog.category}</span>
                    </div>

                    {/* Read Time Tag */}
                    <div className="absolute top-3.5 right-3.5 z-20 bg-white/90 backdrop-blur-md border border-[#E6E2D8] px-2.5 py-1 rounded-full text-[10px] font-mono text-[#66645F] flex items-center gap-1 shadow-sm">
                      <Clock className="w-3 h-3 text-[#A8783E]" />
                      <span>{blog.readTime}</span>
                    </div>

                    {blog.image ? (
                      <Image
                        src={blog.image}
                        alt={blog.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-[1.03]"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#F2EEE6] text-[#A8783E]">
                        <BookOpen className="w-10 h-10" />
                      </div>
                    )}
                  </div>

                  {/* Article Content Body */}
                  <div className="p-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#8A8780]">
                      <Calendar className="w-3.5 h-3.5 text-[#A8783E]" />
                      <span>{blog.date}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#141413] group-hover:text-[#A8783E] transition-colors leading-snug">
                      {blog.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5A5650] font-normal leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                </div>

                {/* Article Card Footer Link */}
                <div className="p-7 pt-0">
                  <div className="pt-4 border-t border-[#EFECE6] flex items-center justify-between">
                    <span className="text-xs font-bold text-[#141413] group-hover:text-[#A8783E] transition-colors flex items-center gap-1.5">
                      <span>Read Full Blueprint</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C59A62]" />
                    </span>
                    <span className="text-[11px] font-mono text-[#8A8780]">
                      Dossier 0{idx + 1}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
