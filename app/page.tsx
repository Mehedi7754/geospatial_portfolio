"use client";

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertNetworkSection } from "@/components/ExpertNetworkSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingContactButton } from "@/components/FloatingContactButton";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-white text-[#0f172a] antialiased">
      {/* Sticky Modern Business Portfolio Navbar */}
      <Navbar />

      {/* Main Single-Page Portfolio Flow (Matching Dribbble Reference Design 1:1) */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* 1. Hero with Organic Circular Photo Frame & 3 Floating Feature Cards */}
        <Hero />

        {/* 2. Leading Geospatial Agency Credentials, Team Photo & Floating 4-Stat Bar */}
        <AboutSection />

        {/* 3. Our Services (Clean 6-Card Grid with Coral Outlined/Solid Icons) */}
        <ServicesSection />

        {/* 4. Check Some Of Our Recent Work (4 Showcase Cards + 31 Project Directory Modal) */}
        <ProjectsSection />

        {/* 5. What Our Partners Say (Featured Testimonial & Authority Logos) */}
        <ExpertNetworkSection />

        {/* 6. Proposal RFQ Inquiries & Dhaka Operations Desk */}
        <ContactSection />
      </main>

      {/* Floating Direct Desk Hotline */}
      <FloatingContactButton />

      {/* Clean 1-Page Business Portfolio Footer */}
      <Footer />
    </div>
  );
}
