"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Link2,
  Bookmark,
  Printer,
  Check,
  Mail,
  Clock,
  Calendar,
  Sparkles,
  ArrowRight,
  Share2
} from "lucide-react";
import { BlogItem } from "@/data/portfolioData";

interface BlogPostClientProps {
  blog: BlogItem;
  otherBlogs: BlogItem[];
}

export default function BlogPostClient({ blog, otherBlogs }: BlogPostClientProps) {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionIdx, setActiveSectionIdx] = useState<number>(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // Live Reading Progress & Section Spy
  useEffect(() => {
    const handleScroll = () => {
      // 1. Reading Progress Percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(
          100,
          Math.max(0, Math.round((window.pageYOffset / totalHeight) * 100))
        );
        setScrollProgress(progress);
      }

      // 2. Active Section Spy for "In This Article"
      const sections = sectionRefs.current;
      if (!sections || sections.length === 0) return;

      const viewportTarget = window.innerHeight * 0.35;
      let activeIdx = 0;

      sections.forEach((sec, idx) => {
        if (!sec) return;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= viewportTarget) {
          activeIdx = idx;
        }
      });

      setActiveSectionIdx(activeIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const currentUrl = typeof window !== "undefined" ? encodeURIComponent(window.location.href) : "";
  const shareTitle = encodeURIComponent(blog.title);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#141413] pt-28 sm:pt-32 pb-24 relative">
      
      {/* SLEEK TOP READING PROGRESS BAR (Directly below fixed Navbar, 0 footer overlap) */}
      <div className="fixed top-20 left-0 right-0 h-1 bg-[#E6E2D8]/60 z-50 overflow-hidden pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#A8783E] via-[#C59A62] to-[#E8C58C] transition-all duration-150 shadow-[0_0_8px_rgba(197,154,98,0.6)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Container matching the entire site container (max-w-[1240px]) */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column Layout: Unboxed Large Article (8 cols) + Right Sticky Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* PRIMARY ARTICLE CONTENT (8 cols — UNBOXED & EXPANDED) */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Article Meta Bar */}
            <div className="space-y-5 border-b border-[#E6E2D8] pb-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                <span className="bg-[#EFECE6] text-[#A8783E] font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-[#DDD8CE]">
                  {blog.category}
                </span>
                <span className="text-[#8A8780] flex items-center gap-1.5 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#A8783E]" />
                  <span>{blog.readTime}</span>
                </span>
                <span className="text-[#8A8780] flex items-center gap-1.5 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-[#A8783E]" />
                  <span>{blog.date}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-[#141413] tracking-tight leading-[1.12]">
                {blog.title}
              </h1>

              <p className="text-lg sm:text-xl text-[#5A5650] font-normal leading-relaxed">
                {blog.excerpt}
              </p>
            </div>

            {/* Large Hero Cover Image */}
            {blog.image && (
              <div className="relative aspect-16/9 w-full rounded-[26px] overflow-hidden border border-[#E6E2D8] shadow-md bg-[#F7F5F0]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

            {/* Executive Context Highlight Callout Box */}
            <div className="bg-[#FAF3E3] p-7 sm:p-8 rounded-2xl border-l-4 border-[#C59A62] space-y-2.5 shadow-xs">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A8783E] block">
                Executive Strategic Context
              </span>
              <p className="text-sm sm:text-base text-[#4A443A] leading-relaxed">
                This dossier is formulated for global founders, technical directors, and enterprise decision-makers navigating complex regional deployments and technical architectures in Dubai and the broader GCC.
              </p>
            </div>

            {/* Structured Article Paragraphs with Drop Cap on First Paragraph */}
            <div className="space-y-12 text-lg sm:text-xl text-[#2E2C29] leading-relaxed">
              {blog.content.headings.map((heading, idx) => {
                const paragraph = blog.content.paragraphs[idx];
                const isFirst = idx === 0;

                return (
                  <section
                    key={idx}
                    id={`section-${idx}`}
                    ref={(el) => {
                      sectionRefs.current[idx] = el;
                    }}
                    className="space-y-5 scroll-mt-28"
                  >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#141413] tracking-tight pt-3 border-b border-[#E6E2D8] pb-3">
                      {heading}
                    </h2>

                    {isFirst ? (
                      <p className="leading-relaxed whitespace-pre-line text-[#2E2C29]">
                        <span className="float-left text-6xl sm:text-7xl font-serif font-bold text-[#C59A62] leading-none pr-4 pt-1">
                          {paragraph.charAt(0)}
                        </span>
                        {paragraph.slice(1)}
                      </p>
                    ) : (
                      <div className="leading-relaxed whitespace-pre-line text-[#3D3A36]">
                        {paragraph}
                      </div>
                    )}
                  </section>
                );
              })}
            </div>

            {/* ARTICLE BOTTOM: SHARE, SAVE & PRINT BAR */}
            <div className="pt-10 border-t border-[#E6E2D8] space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-white border border-[#E6E2D8] shadow-sm">
                
                {/* Social Share Buttons */}
                <div className="flex items-center gap-3 flex-wrap text-xs">
                  <span className="font-mono font-bold text-xs text-[#8A8780] uppercase tracking-wider mr-1 flex items-center gap-1.5">
                    <Share2 className="w-4 h-4 text-[#C59A62]" />
                    <span>Share Blueprint:</span>
                  </span>

                  {/* Copy Link */}
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E6E2D8] hover:border-[#C59A62] text-[#141413] font-medium transition-colors cursor-pointer shadow-2xs"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Link2 className="w-3.5 h-3.5 text-[#A8783E]" />}
                    <span className={copied ? "text-[#10B981] font-bold" : ""}>{copied ? "Copied" : "Copy Link"}</span>
                  </button>

                  {/* X (Twitter) */}
                  <a
                    href={`https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareTitle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E6E2D8] hover:border-[#C59A62] text-[#141413] font-medium transition-colors shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-[#141413]" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X</span>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E6E2D8] hover:border-[#C59A62] text-[#141413] font-medium transition-colors shadow-2xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.66-1.64 1.65 1.65 0 0 0-3.3 0 1.64 1.64 0 0 0 1.64 1.64m1.4 9.74v-8.37H5.06v8.37z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:?subject=${shareTitle}&body=Check out this article: ${currentUrl}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E6E2D8] hover:border-[#C59A62] text-[#141413] font-medium transition-colors shadow-2xs"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#A8783E]" />
                    <span>Email</span>
                  </a>
                </div>

                {/* Save & Print Actions */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E6E2D8] hover:border-[#C59A62] text-xs font-medium text-[#141413] transition-colors cursor-pointer shadow-2xs"
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? "fill-[#C59A62] text-[#C59A62]" : "text-[#A8783E]"}`} />
                    <span>{bookmarked ? "Saved" : "Save"}</span>
                  </button>

                  <button
                    onClick={handlePrint}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FAF7F2] border border-[#E6E2D8] hover:border-[#C59A62] text-xs font-medium text-[#141413] transition-colors cursor-pointer shadow-2xs"
                  >
                    <Printer className="w-3.5 h-3.5 text-[#A8783E]" />
                    <span>Print</span>
                  </button>
                </div>

              </div>
            </div>

            {/* End of Article Advisory Box */}
            <div className="pt-2">
              <div className="p-8 sm:p-10 rounded-[26px] bg-gradient-to-br from-[#1C1A18] to-[#141413] text-white border border-[#3E3835] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-2 text-center sm:text-left">
                  <span className="text-xs font-mono font-bold text-[#C59A62] uppercase tracking-wider">
                    Senior Tech &amp; Business Advisory
                  </span>
                  <h3 className="text-2xl font-bold text-white tracking-tight font-serif">
                    Need strategic execution on this blueprint?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A9A69F]">
                    Direct consultation with Adnan Habib for custom engineering and Dubai setup.
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="bg-[#C59A62] hover:bg-[#D8AE74] text-[#141413] text-xs sm:text-sm font-bold px-7 py-3.5 rounded-full transition-all shrink-0 shadow-md hover:scale-[1.02]"
                >
                  Schedule Scope Call
                </Link>
              </div>
            </div>

          </main>

          {/* RIGHT STICKY SIDEBAR (4 cols: In This Article with Scroll Spy, Newsletter, Most Read) */}
          <aside className="lg:col-span-4 space-y-8 sticky top-28 self-start">
            
            {/* IN THIS ARTICLE (Live Active Scroll Spy & Reading Progress) */}
            <div className="bg-white p-6 sm:p-7 rounded-[24px] border border-[#E6E2D8] shadow-sm space-y-4">
              <div className="flex items-center justify-between border-b border-[#EFECE6] pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-3.5 bg-[#C59A62] rounded-full" />
                  <span className="text-xs font-mono font-bold text-[#141413] uppercase tracking-wider">
                    In This Article
                  </span>
                </div>
                <span className="text-xs font-mono text-[#A8783E] font-bold bg-[#FAF3E3] px-2.5 py-0.5 rounded-md border border-[#EADBBD]">
                  {scrollProgress}% read
                </span>
              </div>

              <ul className="space-y-2 text-xs">
                {blog.content.headings.map((heading, idx) => {
                  const isActive = activeSectionIdx === idx;

                  return (
                    <li key={idx}>
                      <a
                        href={`#section-${idx}`}
                        className={`p-3 rounded-xl transition-all block flex items-start gap-2.5 ${
                          isActive
                            ? "bg-[#FAF3E3] text-[#A8783E] font-bold border-l-3 border-[#C59A62] shadow-2xs"
                            : "text-[#66645F] hover:text-[#141413] hover:bg-[#FAF7F2]"
                        }`}
                      >
                        <span className={`font-mono text-xs shrink-0 ${isActive ? "text-[#C59A62] font-bold" : "text-[#A9A69F]"}`}>
                          0{idx + 1}.
                        </span>
                        <span className="line-clamp-2 leading-snug">{heading}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* THE WEEKLY BRIEF (Newsletter Subscribe Card) */}
            <div className="bg-[#FAF3E3] p-6 sm:p-7 rounded-[24px] border border-[#EADBBD] space-y-4 shadow-2xs">
              <div className="space-y-1">
                <h4 className="text-base font-bold font-serif text-[#141413]">
                  The Weekly Brief
                </h4>
                <p className="text-xs text-[#5A5243] leading-relaxed">
                  Selected technical blueprints and Dubai business strategies delivered once a week.
                </p>
              </div>

              {subscribed ? (
                <div className="p-3.5 rounded-xl bg-white border border-[#C59A62] text-xs font-bold text-[#10B981] flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10B981]" />
                  <span>Subscribed successfully!</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2.5">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address..."
                    required
                    className="w-full px-4 py-3 text-xs rounded-xl bg-white border border-[#DDD5C5] text-[#141413] placeholder-[#8A8780] focus:outline-none focus:border-[#C59A62]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-[#141413] hover:bg-[#2A2725] text-white text-xs font-bold rounded-xl transition-colors shadow-xs cursor-pointer"
                  >
                    Subscribe
                  </button>
                  <p className="text-[10px] text-[#787060] text-center">
                    No clutter. Read our Privacy Policy.
                  </p>
                </form>
              )}
            </div>

            {/* MOST READ ARTICLES */}
            <div className="bg-white p-6 sm:p-7 rounded-[24px] border border-[#E6E2D8] shadow-sm space-y-5">
              <div className="flex items-center gap-2 border-b border-[#EFECE6] pb-3">
                <div className="w-1.5 h-3.5 bg-[#C59A62] rounded-full" />
                <span className="text-xs font-mono font-bold text-[#141413] uppercase tracking-wider">
                  Most Read Blueprints
                </span>
              </div>

              <div className="space-y-4">
                {otherBlogs.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blog/${item.slug}`}
                    className="group flex gap-3.5 items-start"
                  >
                    {item.image && (
                      <div className="relative w-16 h-14 rounded-xl overflow-hidden shrink-0 border border-[#E6E2D8] bg-[#F7F5F0]">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                    )}
                    <div className="space-y-1">
                      <span className="text-[9px] font-mono font-bold text-[#A8783E] uppercase tracking-wider block">
                        {item.category}
                      </span>
                      <h5 className="text-xs font-bold text-[#141413] group-hover:text-[#A8783E] transition-colors line-clamp-2 leading-snug">
                        {item.title}
                      </h5>
                      <span className="text-[10px] font-mono text-[#8A8780] block">
                        {item.readTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="pt-2 border-t border-[#EFECE6]">
                <Link
                  href="/#blog"
                  className="text-xs font-bold text-[#141413] hover:text-[#A8783E] transition-colors flex items-center gap-1"
                >
                  <span>View all most read</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C59A62]" />
                </Link>
              </div>
            </div>

          </aside>

        </div>

      </div>
    </div>
  );
}
