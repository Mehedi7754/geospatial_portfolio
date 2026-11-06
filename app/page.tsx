import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { EquipmentSection } from "@/components/EquipmentSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExpertNetworkSection } from "@/components/ExpertNetworkSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#0034a0] selection:text-white">
      {/* Sticky Glassmorphism Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Live Radar & Showcases */}
        <Hero />

        {/* Operational Metrics & Client Partners Ribbon */}
        <StatsStrip />

        {/* Corporate Profile, Vision, Mission, Core Values (Slide 2-5) */}
        <AboutSection />

        {/* 7 Core Technical Services (Slide 6-15) */}
        <ServicesSection />

        {/* Physical Resources: GNSS, Drones, Levels, Echo Sounders & Workstations (Slide 42-44) */}
        <EquipmentSection />

        {/* Milestone Projects & 35+ Completed Tasks Catalog (Slide 16-40) */}
        <ProjectsSection />

        {/* Human Resources & Multidisciplinary Engagement Network (Slide 41) */}
        <ExpertNetworkSection />

        {/* Corporate Office, Coordinates & Project Inquiry / ToR Form (Slide 45) */}
        <ContactSection />
      </main>

      {/* Corporate Comprehensive Footer */}
      <Footer />
    </div>
  );
}
