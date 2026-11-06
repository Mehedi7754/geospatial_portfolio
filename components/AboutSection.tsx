"use client";

import React, { useState } from "react";
import Image from "next/image";
import { companyProfile } from "@/data/companyData";
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Users, 
  Zap, 
  Clock, 
  Search, 
  HeartHandshake, 
  Sparkles,
  CheckCircle2,
  FileText
} from "lucide-react";

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 geospatial-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0034a0] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Corporate Profile & Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Integrated Technical Solutions for <br className="hidden sm:inline" />
            <span className="text-[#0034a0]">Infrastructure & Spatial Planning</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            {companyProfile.aboutShort}
          </p>
        </div>

        {/* 2-Column Overview: Story + Vision/Mission Interactive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left: About Details & Strategic Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                <span className="w-2.5 h-6 rounded-full bg-[#0034a0]" />
                Our Multidisciplinary Philosophy
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                {companyProfile.aboutFull}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Field Acquisition to Design</div>
                    <div className="text-xs text-slate-500">From geodetic baselines and UAV flights to CAD engineering drawings.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Scientific Research Backing</div>
                    <div className="text-xs text-slate-500">Methodical remote sensing, multi-temporal NDVI & GIS analytics.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">1st Class Contractor Status</div>
                    <div className="text-xs text-slate-500">Executing public infrastructure and corporate engineering surveys.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-slate-900 text-sm">3D Visualization & BIM</div>
                    <div className="text-xs text-slate-500">Photogrammetric point clouds, meshes, and Building Information Models.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Vision & Mission Interactive Flip Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 via-[#071530] to-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl border border-slate-700 relative overflow-hidden">
              
              {/* Background ambient badge */}
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 rounded-full bg-blue-600/10 blur-2xl pointer-events-none" />

              {/* Toggle switch */}
              <div className="flex rounded-xl bg-slate-800/80 p-1 mb-6 border border-slate-700">
                <button
                  onClick={() => setActiveTab("vision")}
                  className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === "vision"
                      ? "bg-[#0034a0] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Eye className="w-4 h-4" />
                  <span>Our Vision</span>
                </button>
                <button
                  onClick={() => setActiveTab("mission")}
                  className={`flex-1 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === "mission"
                      ? "bg-[#e63946] text-white shadow"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </button>
              </div>

              {/* Vision Content */}
              {activeTab === "vision" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-400 tracking-wider uppercase">
                    <Sparkles className="w-4 h-4" />
                    <span>Global Excellency Goal</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Recognized for Technical Brilliance & Sustainable Infrastructure
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    &ldquo;{companyProfile.vision}&rdquo;
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    <span>Slide 02 • Geospatial Works Corporate Charter</span>
                  </div>
                </div>
              )}

              {/* Mission Content */}
              {activeTab === "mission" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-xs font-bold text-red-400 tracking-wider uppercase">
                    <Target className="w-4 h-4" />
                    <span>Value Delivery Commitment</span>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                    Empowering Informed Decisions & Sustainable Outcomes
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    &ldquo;{companyProfile.mission}&rdquo;
                  </p>
                  <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <span>Slide 02 • Geospatial Works Corporate Charter</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Core Values Infographic & Cards (Slide 4) */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0034a0]">
              Guiding Principles (Slide 03)
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Our Core Values
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              The foundational ethical standards guiding our field engineers, researchers, and project directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyProfile.coreValues.map((val, idx) => (
              <div
                key={val.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md transition-all group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0034a0] to-blue-500 text-white flex items-center justify-center font-black text-lg mb-4 shadow-sm group-hover:scale-110 transition-transform">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {val.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          {/* Authentic Slide 4 Infographic Reference Card */}
          <div className="mt-8 bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-blue-50 text-[#0034a0]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Original Corporate Infographics</h4>
                <p className="text-xs text-slate-500">Sourced directly from Slide 03 & 04 of the official corporate profile brochure.</p>
              </div>
            </div>
            <a 
              href="/assets/showcase/core-values-infographic.png" 
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0034a0] hover:text-blue-800 bg-blue-50 px-4 py-2 rounded-lg border border-blue-200 transition-colors"
            >
              <span>View Original Core Values Diagram</span>
              <FileText className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Why Choose Us Section (Slide 5) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#e63946]">
              Competitive Distinction (Slide 04)
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              Why Choose Our Services
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Combining cutting-edge hardware, certified geodetic protocols, and rapid multidisciplinary mobilization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {companyProfile.whyChooseUs.map((item, idx) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0034a0] flex items-center justify-center mb-3">
                    {idx === 0 && <Users className="w-5 h-5 text-blue-600" />}
                    {idx === 1 && <Search className="w-5 h-5 text-indigo-600" />}
                    {idx === 2 && <Zap className="w-5 h-5 text-amber-500" />}
                    {idx === 3 && <ShieldCheck className="w-5 h-5 text-emerald-600" />}
                    {idx === 4 && <Clock className="w-5 h-5 text-red-600" />}
                  </div>

                  <h4 className="font-bold text-slate-900 text-base">
                    {item.title}
                  </h4>
                  <div className="text-xs font-semibold text-blue-600 mt-0.5 mb-2">
                    {item.subtitle}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
