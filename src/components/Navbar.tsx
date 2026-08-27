"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#portfolio" },
  { label: "Blog", href: "/#blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflowY;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };

    document.body.style.overflowY = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("resize", closeOnDesktop);

    return () => {
      document.body.style.overflowY = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("resize", closeOnDesktop);
    };
  }, [mobileMenuOpen]);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`section-dark fixed inset-x-0 top-0 z-50 h-[72px] lg:h-20 transition-all duration-200 ${
        mobileMenuOpen
          ? "bg-[#141413] border-b border-white/10"
          : isScrolled
            ? "bg-[#141413]/95 backdrop-blur-md border-b border-white/10 shadow-2xs"
            : "bg-[#141413]/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1240px] mx-auto h-full px-4 sm:px-6 lg:px-8 grid grid-cols-[minmax(0,1fr)_auto] lg:grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 lg:gap-8">
        <Link href="/" onClick={closeMenu} className="inline-flex min-w-0 justify-self-start" aria-label="Adnan Habib — Home">
          <BrandLogo theme="dark" size="sm" className="sm:[&_img]:h-9 lg:[&_img]:h-10" />
        </Link>

        <nav className="hidden lg:flex items-center justify-self-center gap-7 xl:gap-8 text-sm font-medium text-[#5A5650]">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-[#A8783E] transition-colors py-1">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center justify-self-end">
          <Link href="/#contact" className="inline-flex items-center gap-2 bg-[#C59A62] hover:bg-[#D0A66D] text-[#141413] text-sm font-bold px-5 py-2.5 rounded-full border border-[#D8B47D] transition-all shadow-[0_8px_24px_rgba(197,154,98,0.16)] hover:scale-[1.02]">
            <span>Consultation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="flex items-center justify-self-end lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#C59A62]/40 bg-[#1C1A18] hover:border-[#C59A62] hover:bg-[#24201D] transition-all duration-300 cursor-pointer"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="relative block w-[19px] h-[15px]" aria-hidden="true">
              <span className={`absolute left-0 h-[1.5px] rounded-full bg-[#E8C58C] transition-all duration-300 ease-out ${mobileMenuOpen ? "top-[7px] w-[19px] rotate-45" : "top-[2px] w-[19px]"}`} />
              <span className={`absolute right-0 top-[7px] h-[1.5px] rounded-full bg-white transition-all duration-200 ${mobileMenuOpen ? "w-0 opacity-0" : "w-[13px] opacity-100"}`} />
              <span className={`absolute left-0 h-[1.5px] rounded-full bg-[#E8C58C] transition-all duration-300 ease-out ${mobileMenuOpen ? "top-[7px] w-[19px] -rotate-45" : "top-[12px] w-[19px]"}`} />
            </span>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#141413] overflow-y-auto overscroll-contain">
          <div className="min-h-full max-w-3xl mx-auto px-5 sm:px-8 py-7 sm:py-10 flex flex-col">
            <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#787570]">Navigation</span>
              <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-[#A9A69F]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.65)]" />
                Available for projects
              </span>
            </div>

            <nav className="flex-1 flex flex-col justify-center py-5 sm:py-8">
              {navLinks.map((link) => (
                <Link key={link.label} href={link.href} onClick={closeMenu} className="group flex items-center justify-between gap-5 py-3.5 sm:py-4 border-b border-white/10 text-[clamp(1.65rem,7vw,2.6rem)] leading-none font-bold tracking-[-0.035em] text-white/90 hover:text-[#E8C58C] transition-colors">
                  <span>{link.label}</span>
                  <span className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full border border-white/15 group-hover:border-[#C59A62]/60 group-hover:bg-[#24201D] transition-all">
                    <ArrowRight className="w-4 h-4 text-[#C59A62] -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </span>
                </Link>
              ))}
            </nav>

            <div className="pt-5 border-t border-white/10">
              <Link href="/#contact" onClick={closeMenu} className="group flex items-center justify-between gap-4 w-full bg-[#C59A62] hover:bg-[#D0A66D] text-[#141413] font-bold px-5 py-4 rounded-2xl transition-colors">
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.16em] opacity-65 mb-1">Start a conversation</span>
                  <span className="text-base sm:text-lg">Book a Consultation</span>
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#141413] text-white shrink-0">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
