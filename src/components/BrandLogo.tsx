"use client";

import React from "react";

interface BrandLogoProps {
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function BrandLogo({
  theme = "light",
  size = "md",
  className = ""
}: BrandLogoProps) {
  const isDark = theme === "dark";
  const logoSrc = isDark ? "/images/logo-white.png" : "/images/logo.png";

  // Natural aspect ratio is 2172 x 724 (3:1)
  const heightClasses =
    size === "sm"
      ? "h-7 sm:h-8"
      : size === "md"
      ? "h-8 sm:h-9 md:h-10"
      : size === "lg"
      ? "h-14 sm:h-18 md:h-20"
      : "h-18 sm:h-22 md:h-26";

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="Adnan Habib"
        className={`${heightClasses} w-auto object-contain object-left group-hover:scale-[1.02] transition-transform duration-200`}
      />
    </div>
  );
}
