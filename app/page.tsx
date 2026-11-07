"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ExpertNetworkSection } from "@/components/ExpertNetworkSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingContactButton } from "@/components/FloatingContactButton";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-[#0f172a] antialiased">
      {/* Sticky Minimal Business Portfolio Navbar (BuildGo Style) */}
      <Navbar />

      {/* Main Single-Page Image-Type Portfolio Flow (Matching BuildGo & TROMA 1:1) */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* 1. BuildGo Hero with Bold Heading & Panoramic Field Photo Banner */}
        <Hero />

        {/* 2. BuildGo 1:1 Landmark Projects Section (3 Immersive Cards with Filters) */}
        <ProjectsSection />

        {/* 3. BuildGo 1:1 Why Choose Us & 4-Stat Credential Counters */}
        <AboutSection />

        {/* 4. TROMA Style Precision Engineering Capabilities (6 Disciplines) */}
        <ServicesSection />

        {/* 5. What Our Strategic Partners Say (Testimonial & Authority Logos) */}
        <ExpertNetworkSection />

        {/* 6. Start Your Next Project (Fast Inquiry & Dispatch Hotline) */}
        <ContactSection />
      </main>

      {/* Floating Direct Desk Hotline */}
      <FloatingContactButton />

      {/* Clean 1-Page Business Portfolio Footer */}
      <Footer />
    </div>
  );
}
