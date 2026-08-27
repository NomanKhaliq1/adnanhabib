"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  ChevronDown,
  User,
  Layers,
  Check,
  Code2,
  ShoppingBag,
  Cpu,
  Compass,
  Server,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Technology Solutions & Full-Stack Architecture",
    budget: "$15k – $50k",
    message: ""
  });

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const serviceOptions = [
    {
      id: "tech",
      title: "Technology Solutions",
      subtitle: "Next.js 16, TypeScript & Scalable Web Apps",
      icon: Code2
    },
    {
      id: "ecommerce",
      title: "Ecommerce Architecture",
      subtitle: "Shopify Plus, Liquid & Multi-Currency GCC",
      icon: ShoppingBag
    },
    {
      id: "ai",
      title: "AI Automation & Agents",
      subtitle: "Custom GPT Pipelines & Autonomous Agents",
      icon: Cpu
    },
    {
      id: "dubai",
      title: "Dubai Business Concierge",
      subtitle: "On-Ground UAE Audits & Physical Proxy",
      icon: Compass
    },
    {
      id: "cloud",
      title: "Hosting & AWS Cloud",
      subtitle: "DevOps & Zero-Downtime Infrastructure",
      icon: Server
    },
    {
      id: "other",
      title: "Executive Strategic Advisory",
      subtitle: "Fractional CTO & Annual Roadmaps",
      icon: Zap
    }
  ];

  const budgetOptions = [
    "$5k – $15k",
    "$15k – $50k",
    "$50k – $100k",
    "$100k+ / Retainer"
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: PORTFOLIO_DATA.meta.socials.linkedin,
      icon: (
        <svg className="w-4 h-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.66-1.64 1.65 1.65 0 0 0-3.3 0 1.64 1.64 0 0 0 1.64 1.64m1.4 9.74v-8.37H5.06v8.37z" />
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      url: PORTFOLIO_DATA.meta.socials.twitter,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current text-[#141413]" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      url: PORTFOLIO_DATA.meta.socials.instagram,
      icon: (
        <svg className="w-4 h-4 fill-current text-[#E1306C]" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: "Facebook",
      url: PORTFOLIO_DATA.meta.socials.facebook,
      icon: (
        <svg className="w-4 h-4 fill-current text-[#1877F2]" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      )
    },
    {
      name: "Pinterest",
      url: PORTFOLIO_DATA.meta.socials.pinterest,
      icon: (
        <svg className="w-4 h-4 fill-current text-[#BD081C]" viewBox="0 0 24 24">
          <path d="M12 0a12 12 0 0 0-4.37 23.18c-.06-.99-.1-2.52.02-3.6.11-.99.74-6.28.74-6.28s-.19-.38-.19-.94c0-.88.51-1.54 1.15-1.54.54 0 .8.41.8.9 0 .55-.35 1.37-.53 2.13-.15.63.32 1.15.94 1.15 1.13 0 2-1.19 2-2.91 0-1.52-1.09-2.59-2.66-2.59-1.81 0-2.88 1.36-2.88 2.76 0 .55.21 1.13.48 1.45.05.06.06.12.04.18-.05.19-.15.63-.17.72-.03.11-.09.13-.21.08-.8-.37-1.3-1.54-1.3-2.48 0-2.02 1.47-3.88 4.23-3.88 2.22 0 3.95 1.58 3.95 3.7 0 2.21-1.39 3.99-3.32 3.99-.65 0-1.26-.34-1.47-.73l-.4 1.53c-.15.56-.54 1.27-.81 1.7-.61.94-.96 1.48-1.5 2.32A12 12 0 1 0 12 0z" />
        </svg>
      )
    }
  ];

  // Close custom dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim() || formData.name.trim().length < 3) {
      errs.name = "Full Name is required (minimum 3 characters).";
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = "A valid Email Address is required.";
    }
    if (!formData.subject) {
      errs.subject = "Please select a Practice Area.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = "Message Details must be at least 15 characters.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
      }, 500);
    }
  };

  const selectedService = serviceOptions.find((s) => s.title === formData.subject) || serviceOptions[0];
  const SelectedIcon = selectedService.icon;

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#FAF7F2] text-[#141413] relative border-b border-[#E6E2D8]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Heading */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EFECE6] border border-[#DDD8CE] text-[#A8783E] text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#C59A62]" />
            <span>Direct Advisory &amp; Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141413] tracking-tight font-serif leading-tight">
            Let&apos;s Build Your <span className="font-editorial italic font-normal text-[#A8783E]">Next Milestone</span>
          </h2>
          <p className="text-sm sm:text-base text-[#5A5650] font-normal leading-relaxed">
            Schedule an initial consultation to discuss your architecture roadmap, ecommerce scaling, or on-ground Dubai execution.
          </p>
        </div>

        {/* 2-Column Layout (Form on Left, Direct Channels on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (7 cols): 100% UNBOXED & CUSTOMIZED FORM */}
          <div className="lg:col-span-7">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} noValidate className="space-y-8">
                
                {/* 1. Full Name & Email (2 Cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div className="space-y-2.5">
                    <label htmlFor="name" className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413] flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <User className="w-3.5 h-3.5 text-[#C59A62]" />
                        <span>Full Name</span>
                      </span>
                      <span className="text-[10px] text-[#A8783E] font-normal">REQUIRED</span>
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Tariq Al-Mansoori"
                        className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-medium transition-all focus:outline-none bg-white text-[#141413] placeholder-[#A9A69F] ${
                          errors.name
                            ? "border-red-400 focus:ring-4 focus:ring-red-400/15"
                            : "border-[#DDD8CE] hover:border-[#C59A62]/60 focus:border-[#C59A62] focus:ring-4 focus:ring-[#C59A62]/15 shadow-2xs"
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-500 font-medium">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2.5">
                    <label htmlFor="email" className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413] flex items-center justify-between">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-[#C59A62]" />
                        <span>Work Email</span>
                      </span>
                      <span className="text-[10px] text-[#A8783E] font-normal">REQUIRED</span>
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.ae"
                        className={`w-full px-4 py-3.5 rounded-2xl border text-sm font-medium transition-all focus:outline-none bg-white text-[#141413] placeholder-[#A9A69F] ${
                          errors.email
                            ? "border-red-400 focus:ring-4 focus:ring-red-400/15"
                            : "border-[#DDD8CE] hover:border-[#C59A62]/60 focus:border-[#C59A62] focus:ring-4 focus:ring-[#C59A62]/15 shadow-2xs"
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-500 font-medium">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* 2. CUSTOM LUXURY DROPDOWN: Practice Area */}
                <div className="space-y-2.5" ref={dropdownRef}>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <Layers className="w-3.5 h-3.5 text-[#C59A62]" />
                      <span>Interested Practice Area</span>
                    </span>
                    <span className="text-[10px] text-[#A8783E] font-normal">CUSTOM SCOPE</span>
                  </label>

                  <div className="relative">
                    {/* Custom Dropdown Trigger Button */}
                    <button
                      type="button"
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all bg-white flex items-center justify-between cursor-pointer shadow-2xs ${
                        dropdownOpen
                          ? "border-[#C59A62] ring-4 ring-[#C59A62]/15"
                          : "border-[#DDD8CE] hover:border-[#C59A62]/60"
                      }`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF3E3] border border-[#EADBBD] flex items-center justify-center text-[#A8783E] shrink-0">
                          <SelectedIcon className="w-5 h-5 text-[#C59A62]" />
                        </div>
                        <div>
                          <span className="font-bold text-sm text-[#141413] block font-serif">
                            {selectedService.title}
                          </span>
                          <span className="text-xs text-[#8A8780] font-mono block">
                            {selectedService.subtitle}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#A8783E] transition-transform duration-200 shrink-0 ml-3 ${
                          dropdownOpen ? "rotate-180 text-[#C59A62]" : ""
                        }`}
                      />
                    </button>

                    {/* Animated Custom Options Menu */}
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.18 }}
                          className="absolute left-0 right-0 top-full mt-2.5 z-40 bg-white rounded-2xl border border-[#DDD8CE] shadow-[0_20px_50px_rgba(20,20,19,0.14)] p-2 space-y-1.5"
                        >
                          {serviceOptions.map((opt) => {
                            const isSelected = formData.subject === opt.title;
                            const IconComponent = opt.icon;

                            return (
                              <button
                                key={opt.id}
                                type="button"
                                onClick={() => {
                                  setFormData({ ...formData, subject: opt.title });
                                  setDropdownOpen(false);
                                }}
                                className={`w-full p-3.5 rounded-xl text-left transition-all flex items-center justify-between cursor-pointer ${
                                  isSelected
                                    ? "bg-[#FAF3E3] border border-[#EADBBD]"
                                    : "hover:bg-[#FAF7F2] border border-transparent"
                                }`}
                              >
                                <div className="flex items-center gap-3">
                                  <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                                      isSelected
                                        ? "bg-[#141413] text-[#C59A62]"
                                        : "bg-[#F5F2EB] text-[#66645F]"
                                    }`}
                                  >
                                    <IconComponent className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <div
                                      className={`text-xs font-bold ${
                                        isSelected ? "text-[#A8783E]" : "text-[#141413]"
                                      }`}
                                    >
                                      {opt.title}
                                    </div>
                                    <div className="text-[11px] text-[#8A8780] font-mono">
                                      {opt.subtitle}
                                    </div>
                                  </div>
                                </div>

                                {isSelected && (
                                  <Check className="w-4 h-4 text-[#C59A62] shrink-0 ml-2" />
                                )}
                              </button>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 3. CUSTOM BUDGET CHIPS */}
                <div className="space-y-2.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413] block">
                    Estimated Project Scope / Investment
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {budgetOptions.map((b) => {
                      const isSelected = formData.budget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setFormData({ ...formData, budget: b })}
                          className={`py-3 px-3 rounded-xl border text-xs font-mono transition-all text-center cursor-pointer ${
                            isSelected
                              ? "bg-[#141413] text-[#C59A62] border-[#141413] font-bold shadow-md scale-[1.02]"
                              : "bg-white text-[#5A5650] border-[#DDD8CE] hover:border-[#C59A62]/60 hover:text-[#141413] shadow-2xs"
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 4. Message Textarea */}
                <div className="space-y-2.5">
                  <label htmlFor="message" className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413] flex items-center justify-between">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-[#C59A62]" />
                      <span>Project Brief &amp; Key Objectives</span>
                    </span>
                    <span className="text-[10px] text-[#A8783E] font-normal">REQUIRED</span>
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Briefly describe your objectives, key technical challenges, or UAE on-ground timeline..."
                    className={`w-full p-4 rounded-2xl border text-sm font-medium transition-all focus:outline-none bg-white text-[#141413] placeholder-[#A9A69F] leading-relaxed ${
                      errors.message
                        ? "border-red-400 focus:ring-4 focus:ring-red-400/15"
                        : "border-[#DDD8CE] hover:border-[#C59A62]/60 focus:border-[#C59A62] focus:ring-4 focus:ring-[#C59A62]/15 shadow-2xs"
                    }`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-medium">{errors.message}</p>
                  )}
                </div>

                {/* 5. Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-[#141413] hover:bg-[#2A2725] text-white text-sm font-bold py-4.5 px-8 rounded-full transition-all shadow-md hover:shadow-xl cursor-pointer hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span>Transmitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Transmit Scope Inquiry</span>
                      <Send className="w-4 h-4 text-[#C59A62]" />
                    </>
                  )}
                </button>

              </form>
            ) : (
              <div className="p-12 rounded-[28px] bg-white border border-[#DDD8CE] text-center space-y-4 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[#FAF3E3] text-[#A8783E] flex items-center justify-center mx-auto border border-[#EADBBD]">
                  <CheckCircle2 className="w-8 h-8 text-[#C59A62]" />
                </div>
                <h3 className="text-2xl font-bold font-serif text-[#141413]">
                  Inquiry Received
                </h3>
                <p className="text-sm text-[#5A5650] leading-relaxed max-w-md mx-auto">
                  Thank you for your message. I will review your requirements and respond directly via email or WhatsApp within 15 minutes.
                </p>
              </div>
            )}
          </div>

          {/* Right Column (5 cols): Direct Executive Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Direct Access Card */}
            <div className="bg-[#181615] rounded-[28px] border border-[#3E3835] p-8 text-white space-y-6 shadow-xl">
              <div className="space-y-1 border-b border-[#292524] pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#C59A62] uppercase tracking-wider">
                    Executive Direct Access
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#10B981]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    ONLINE
                  </span>
                </div>
                <h3 className="text-xl font-bold font-serif text-white">
                  Immediate Hotline &amp; Direct Links
                </h3>
              </div>

              {/* Channels List */}
              <div className="space-y-3 font-mono text-xs">
                {/* Call & WhatsApp */}
                <a
                  href={`tel:${PORTFOLIO_DATA.meta.phoneDubaiRaw}`}
                  className="p-3.5 rounded-xl bg-[#24201D] border border-[#3E3835] hover:border-[#C59A62] flex items-center justify-between text-[#E6E2D8] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#C59A62]" />
                    <div>
                      <div className="text-[9px] text-[#8A8780] uppercase">Call &amp; WhatsApp (UAE)</div>
                      <div className="text-xs font-bold text-white">{PORTFOLIO_DATA.meta.phoneDubai}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8780] group-hover:text-[#C59A62] transition-colors" />
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/${PORTFOLIO_DATA.meta.whatsappPakRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-[#24201D] border border-[#3E3835] hover:border-[#C59A62] flex items-center justify-between text-[#E6E2D8] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-[#C59A62]" />
                    <div>
                      <div className="text-[9px] text-[#8A8780] uppercase">Dedicated WhatsApp Hotline</div>
                      <div className="text-xs font-bold text-white">{PORTFOLIO_DATA.meta.whatsappPak}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8780] group-hover:text-[#C59A62] transition-colors" />
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${PORTFOLIO_DATA.meta.email}`}
                  className="p-3.5 rounded-xl bg-[#24201D] border border-[#3E3835] hover:border-[#C59A62] flex items-center justify-between text-[#E6E2D8] hover:text-white transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#C59A62]" />
                    <div>
                      <div className="text-[9px] text-[#8A8780] uppercase">Direct Email</div>
                      <div className="text-xs font-bold text-white">{PORTFOLIO_DATA.meta.email}</div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#8A8780] group-hover:text-[#C59A62] transition-colors" />
                </a>

                {/* Location Node */}
                <div className="p-3.5 rounded-xl bg-[#24201D] border border-[#3E3835] flex items-center gap-3 text-[#E6E2D8]">
                  <MapPin className="w-4 h-4 text-[#C59A62] shrink-0" />
                  <div>
                    <div className="text-[9px] text-[#8A8780] uppercase">Primary Territory Base</div>
                    <div className="text-xs font-bold text-white">{PORTFOLIO_DATA.meta.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Social Profiles with Official Brand Vector SVGs */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#141413] block">
                Verified Social Profiles
              </span>
              <div className="flex flex-wrap gap-2.5 text-xs font-mono">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-[#DDD8CE] hover:border-[#C59A62] px-4 py-2.5 rounded-full text-[#141413] hover:text-[#A8783E] transition-all inline-flex items-center gap-2 shadow-2xs group hover:scale-[1.03] hover:shadow-xs"
                  >
                    <span className="shrink-0">{item.icon}</span>
                    <span className="font-semibold">{item.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#A8783E] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
