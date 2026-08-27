"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Zap,
  ShieldCheck,
  Sparkles,
  ExternalLink,
  ChevronRight,
  CheckCircle2
} from "lucide-react";

export default function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  const caseStudies = [
    {
      id: "case-01",
      category: "Ecommerce",
      caseNumber: "01",
      title: "Luxury Ecommerce Replatforming",
      client: "Dubai Luxury Fashion Retailer",
      image: "/images/mockups/ecommerce_dashboard.png",
      highlightMetric: "+42%",
      metricLabel: "Conversion Lift",
      summary:
        "Migrated legacy Magento 1 platform to headless-inspired Shopify Plus with custom Oracle ERP middleware and localized GCC checkout.",
      challenge:
        "Sluggish 5.4s load times, high mobile cart drop-offs, and manual inventory syncs with Oracle ERP.",
      solution:
        "Engineered custom Shopify Plus storefront, AWS Lambda middleware for real-time ERP sync, and multi-currency localized checkout.",
      techStack: ["Shopify Plus", "Liquid", "Node.js", "AWS Lambda", "Tailwind CSS"],
      stats: [
        { label: "Page Speed", value: "1.2s" },
        { label: "Black Friday Spike", value: "300%" },
        { label: "Manual Sync Errors", value: "0" }
      ]
    },
    {
      id: "case-02",
      category: "AI Automation",
      caseNumber: "02",
      title: "AI-Powered Fleet Dispatcher",
      client: "Nexus Logistics UAE (200+ Fleet)",
      image: "/images/mockups/ai_dispatcher.png",
      highlightMetric: "2 Min",
      metricLabel: "Daily Dispatch Time",
      summary:
        "Engineered AI routing system extracting destinations via GPT-4 Vision and optimizing multi-stop routes with genetic algorithms.",
      challenge:
        "Manual 4-hour daily route planning, excessive fuel burn, and delayed regional delivery windows.",
      solution:
        "Built automated GPT-4 Vision invoice parser, genetic routing engine, and real-time dispatcher board.",
      techStack: ["Python", "FastAPI", "GPT-4 Vision", "React", "PostgreSQL", "Docker"],
      stats: [
        { label: "Fuel Burn Drop", value: "-18%" },
        { label: "On-Time SLA", value: "99.2%" },
        { label: "Time Saved", value: "4h → 2m" }
      ]
    },
    {
      id: "case-03",
      category: "Cloud Architecture",
      caseNumber: "03",
      title: "AWS Cloud Infrastructure Scaling",
      client: "Veloce Media Platform",
      image: "/images/mockups/cloud_infrastructure.png",
      highlightMetric: "100%",
      metricLabel: "Uptime Availability",
      summary:
        "Architected high-availability serverless infrastructure on AWS ECS Fargate, Aurora RDS, and CloudFront with AWS WAF defense.",
      challenge:
        "Frequent database crashes during global traffic spikes and vulnerability to DDoS attacks.",
      solution:
        "Deployed autoscaling AWS ECS Fargate microservices, Aurora read replicas, global CDN, and automated CI/CD.",
      techStack: ["AWS ECS", "Aurora RDS", "Terraform", "CloudFront", "Docker", "WAF"],
      stats: [
        { label: "Cloud Spend", value: "-65%" },
        { label: "Security Rating", value: "Grade-A" },
        { label: "Traffic Spikes", value: "Zero Crashes" }
      ]
    }
  ];

  return (
    <section
      id="portfolio"
      className="section-dark py-24 md:py-32 bg-[#141413] text-white relative border-b border-white/10 overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C59A62]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-[#A8783E]/6 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2.5">
            <div className="inline-flex items-center gap-2 bg-[#EFECE6] border border-[#DDD8CE] text-[#A8783E] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#C59A62]" />
              <span>Proven Enterprise Engineering Dossiers</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight">
              Featured <span className="font-editorial italic font-normal text-[#A8783E]">Case Studies</span>
            </h2>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2A2725] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full transition-all shadow-sm shrink-0 self-start md:self-auto hover:shadow-md hover:scale-[1.02]"
          >
            <span>Discuss Custom Scope</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C59A62]" />
          </a>
        </div>

        {/* 3-Column Sleek Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group bg-[#FFFFFF] rounded-[24px] border border-[#E6E2D8] hover:border-[#C59A62]/60 overflow-hidden shadow-[0_8px_30px_rgba(20,20,19,0.04)] hover:shadow-[0_20px_45px_rgba(20,20,19,0.09)] hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between"
            >
              <div>
                {/* Visual Preview Header */}
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#F7F5F0] border-b border-[#E6E2D8]">
                  {/* Category Pill Tag */}
                  <div className="absolute top-3.5 left-3.5 z-20 bg-[#141413]/85 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[10px] font-mono font-bold text-white flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C59A62]" />
                    <span>{item.category}</span>
                  </div>

                  {/* Impact Metric Floating Badge */}
                  <div className="absolute top-3.5 right-3.5 z-20 bg-[#FFFFFF]/95 backdrop-blur-md border border-[#E6E2D8] px-3 py-1 rounded-xl shadow-md text-right">
                    <div className="text-sm font-mono font-black text-[#141413] leading-none">
                      {item.highlightMetric}
                    </div>
                    <div className="text-[9px] font-bold text-[#A8783E] uppercase tracking-tighter">
                      {item.metricLabel}
                    </div>
                  </div>

                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700 filter saturate-[1.02]"
                  />
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-1">
                    <div className="text-[11px] font-mono font-semibold text-[#8A8780] uppercase tracking-wider">
                      {item.client}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#141413] tracking-tight group-hover:text-[#A8783E] transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5A5650] leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>

                  {/* 3 Compact KPI Stats */}
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {item.stats.map((s, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-[#FAF8F5] p-2.5 rounded-xl border border-[#E6E2D8] text-center space-y-0.5"
                      >
                        <div className="text-xs font-mono font-extrabold text-[#141413]">
                          {s.value}
                        </div>
                        <div className="text-[9px] text-[#787570] truncate leading-tight">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-[#66645F] bg-[#F7F5F0] border border-[#E6E2D8] px-2 py-0.5 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 pt-0">
                <a
                  href="#contact"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#FAF8F5] hover:bg-[#141413] hover:text-white text-[#141413] border border-[#E6E2D8] hover:border-[#141413] text-xs font-bold transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>Inquire Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-[#C59A62]" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
