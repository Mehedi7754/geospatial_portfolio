"use client";

import React, { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EquipmentSection } from "@/components/EquipmentSection";
import { ExpertNetworkSection } from "@/components/ExpertNetworkSection";
import { InsightsSection } from "@/components/InsightsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingContactButton } from "@/components/FloatingContactButton";

export default function HomePage() {
  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#f8fafc] text-[#0f172a] antialiased">
      {/* Sticky Modern Business Portfolio Navbar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="w-full max-w-full overflow-x-hidden">
        {/* High-Impact Dribbble Construction Portfolio Hero */}
        <Hero />

        {/* Corporate Credentials & About */}
        <AboutSection />

        {/* 8 Technical Capabilities & Engineering Services Grid */}
        <ServicesSection />

        {/* Featured Business Portfolio (Mega Projects & 31 Directory Archive) */}
        <ProjectsSection />

        {/* National Impact Benchmarks & Calibrated Equipment Fleet */}
        <EquipmentSection />

        {/* Multidisciplinary Engineering Specialists Network */}
        <ExpertNetworkSection />

        {/* Technical Papers & Strategic Insights */}
        <InsightsSection />

        {/* Proposal RFQ Builder & Dhaka Headquarters Contact */}
        <ContactSection />
      </main>

      {/* Floating Direct Desk Hotline */}
      <FloatingContactButton />

      {/* Enterprise Business Portfolio Footer */}
      <Footer />
    </div>
  );
}
