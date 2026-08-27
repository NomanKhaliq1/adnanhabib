"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, ArrowRight, Check } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="relative z-20 bg-[#141413] text-[#FFFFFF] pt-20 pb-12 border-t border-[#292524]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 4-Column Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#292524]">
          
          {/* Column 1 — Brand with Official White Logo (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-white.png"
                alt="Adnan Habib"
                className="h-16 sm:h-20 md:h-22 w-auto max-w-[280px] sm:max-w-[340px] object-contain object-left group-hover:scale-[1.02] transition-transform duration-200"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#A9A69F] font-normal leading-relaxed max-w-sm">
              {PORTFOLIO_DATA.footer.brandDescription}
            </p>
            <div className="text-xs font-mono text-[#8A8780] pt-2">
              Dubai, United Arab Emirates • Operating Globally
            </div>
          </div>

          {/* Column 2 — Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#A9A69F]">
              Navigation
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#C8C5BE]">
              <li>
                <a href="/#about" className="hover:text-[#C59A62] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#C59A62] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#portfolio" className="hover:text-[#C59A62] transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/#blog" className="hover:text-[#C59A62] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/#faq" className="hover:text-[#C59A62] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#C59A62] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 — Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#A9A69F]">
              Services
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#C8C5BE]">
              <li>
                <a href="/#services" className="hover:text-[#C59A62] transition-colors">
                  Technology Solutions
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#C59A62] transition-colors">
                  Ecommerce Solutions
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#C59A62] transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#C59A62] transition-colors">
                  Hosting &amp; Cloud
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#C59A62] transition-colors">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:text-[#C59A62] transition-colors">
                  Dubai Business Concierge
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#A9A69F]">
              Newsletter
            </div>
            <p className="text-xs text-[#A9A69F] leading-relaxed">
              Stay Informed — Subscribe to receive tech briefs, ecommerce scaling tactics, and AI insights direct to your inbox.
            </p>

            {subscribed ? (
              <div className="p-3 bg-[#1C1A18] rounded-xl border border-[#C59A62]/40 text-xs font-semibold text-[#10B981] flex items-center gap-2">
                <Check className="w-4 h-4 text-[#10B981]" />
                <span>Subscribed successfully</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#24201D] border border-[#3E3835] text-xs text-white placeholder-[#8A8780] focus:outline-none focus:border-[#C59A62] transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-white hover:bg-[#EFECE6] text-[#141413] text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#141413]" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A8780]">
          <div>
            © {new Date().getFullYear()} Adnan Habib. All rights reserved. Registered Technology Representative Dubai.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer text-xs"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C59A62]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
