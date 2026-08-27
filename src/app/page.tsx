import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import BiographySection from "@/components/BiographySection";
import CareerTimeline from "@/components/CareerTimeline";
import ServicesSection from "@/components/ServicesSection";
import IndustryExperienceSection from "@/components/IndustryExperienceSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ExecutionStrategySection from "@/components/ExecutionStrategySection";
import WhyChooseMe from "@/components/WhyChooseMe";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="w-full max-w-full overflow-x-clip flex flex-col min-h-screen relative bg-[#FAF7F2] text-[#141413]">
      {/* 1. Header */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Trust Metrics Strip */}
        <TrustBar />

        {/* 4. Professional Biography Section */}
        <BiographySection />

        {/* 5. Career Journey Timeline (Sticky Horizontal Scroll) */}
        <CareerTimeline />

        {/* 6. Services & Specialized Practices */}
        <ServicesSection />

        {/* 7. Industry Experience */}
        <IndustryExperienceSection />

        {/* 8-10. Featured Case Studies */}
        <CaseStudiesSection />

        {/* 11. Execution Strategy Canvas Pipeline */}
        <ExecutionStrategySection />

        {/* 12. Competitive Advantage / Why Choose Me (Pinned Storytelling Scroll) */}
        <WhyChooseMe />

        {/* 13. Client Testimonials */}
        <TestimonialsSection />

        {/* 14. Knowledge Base & Blog Articles */}
        <BlogSection />

        {/* 15. Frequently Asked Questions */}
        <FaqSection />

        {/* 16. Contact & Direct Advisory */}
        <ContactSection />
      </main>

      {/* 17. Footer */}
      <Footer />
    </div>
  );
}
