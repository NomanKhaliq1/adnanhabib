"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Case Studies", href: "/#portfolio" },
    { label: "Blog", href: "/#blog" },
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-[#FAF7F2]/95 backdrop-blur-md h-20 border-b border-[#E6E2D8] shadow-2xs"
          : "bg-[#FAF7F2] h-20 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Horizontal Logo */}
        <Link href="/" className="inline-block">
          <BrandLogo theme="light" size="md" />
        </Link>

        {/* Center / Right Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#5A5650]">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#141413] hover:text-[#A8783E] transition-colors py-1 relative"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Far Right: Consultation Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#141413] hover:bg-[#2A2725] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-2xs cursor-pointer hover:scale-[1.02]"
          >
            <span>Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C59A62]" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#141413] hover:bg-[#EFECE6] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E6E2D8] px-4 pt-3 pb-6 space-y-4 shadow-lg">
          <nav className="flex flex-col space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-[#141413] hover:bg-[#EFECE6] px-3 py-2 rounded-lg"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#E6E2D8]">
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#141413] text-white text-sm font-bold py-3 rounded-full shadow-xs"
            >
              <span>Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#C59A62]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
