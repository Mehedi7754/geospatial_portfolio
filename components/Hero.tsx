"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  ArrowRight, 
  Compass, 
  MapPin, 
  Radio, 
  Layers, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  FileCode2,
  ChevronRight
} from "lucide-react";
import { companyProfile } from "@/data/companyData";

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const heroShowcases = [
    {
      title: "Precision RTK GNSS Operations",
      subtitle: "8x CHCNAV i83 Receivers • 1,408 Channels",
      image: "/assets/showcase/chcnav-i83-rtk-gnss.jpg",
      tag: "Field Geodetics",
      stat: "10,000+ GCPs",
      statLabel: "Established across 64 Districts",
    },
    {
      title: "Airborne UAV Photogrammetry",
      subtitle: "DJI Mavic 3 & Matrice 4 Enterprise Fleet",
      image: "/assets/showcase/drone-uav-field-operation.png",
      tag: "Aerial Mapping",
      stat: "208.37 km²",
      statLabel: "BADC WEB-AIS Agricultural Survey",
    },
    {
      title: "Corridor & Bypass Engineering",
      subtitle: "Abdulpur Railway Bypass & Pahartoli Workshops",
      image: "/assets/showcase/railway-contour-elevation-model.jpg",
      tag: "Civil 3D Models",
      stat: "800+ km",
      statLabel: "LGED Road Alignment & TBMs",
    },
  ];

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 overflow-hidden bg-gradient-to-b from-slate-900 via-[#071530] to-slate-900 text-white flex items-center">
      {/* Background Geospatial Grid Pattern & Ambient Glow */}
      <div className="absolute inset-0 geospatial-grid-dark opacity-40 pointer-events-none" />
      
      {/* Radar scanner effect in the background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-blue-500/10 pointer-events-none">
        <div className="absolute inset-8 rounded-full border border-blue-500/10" />
        <div className="absolute inset-24 rounded-full border border-blue-500/10" />
        <div className="absolute inset-44 rounded-full border border-blue-500/10" />
        <div className="w-full h-full rounded-full radar-sweep bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span>1st Class Contractor • IT & Engineering Consultancy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black tracking-tight leading-[1.12]">
              Where Engineering <br />
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-red-400 bg-clip-text text-transparent">
                Meets Precision
              </span>
            </h1>

            {/* Description from PPTX */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Combining engineering expertise with advanced geospatial technologies, modern surveying instruments, and digital design capabilities. Delivering integrated technical solutions for infrastructure development, spatial planning, and sustainable resource management.
            </p>

            {/* Key Service Pillar Tags */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs sm:text-sm text-slate-300">
              <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                <Radio className="w-3.5 h-3.5 text-blue-400" />
                RTK GNSS Geodetics
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                <Compass className="w-3.5 h-3.5 text-red-400" />
                UAV Photogrammetry
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                Web-GIS & Remote Sensing
              </span>
              <span className="inline-flex items-center gap-1.5 bg-slate-800/80 px-3 py-1 rounded-md border border-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                Infrastructure Design
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <a
                href="#services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0034a0] hover:bg-blue-600 text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-blue-900/50 hover:shadow-blue-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Core Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white px-6 py-3.5 rounded-xl font-semibold text-sm border border-slate-700 transition-all"
              >
                <FileCode2 className="w-4 h-4 text-red-400" />
                <span>Submit ToR / Scope</span>
              </a>

              <a
                href="#projects"
                className="text-xs sm:text-sm font-medium text-slate-400 hover:text-white underline underline-offset-4 transition-colors"
              >
                View 35+ Case Studies
              </a>
            </div>

            {/* Coordinates and Trust Anchor */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-400 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>HQ: Bosila, Mohammadpur, Dhaka (23.75° N, 90.35° E)</span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Field Crews Ready for Fast Deployment</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Showcase Carousel Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-500 to-red-500 opacity-30 blur-xl" />

              {/* Main Card */}
              <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700/80 backdrop-blur-xl p-4 sm:p-5 shadow-2xl overflow-hidden">
                
                {/* Image viewport */}
                <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
                  <Image
                    src={heroShowcases[activeTab].image}
                    alt={heroShowcases[activeTab].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    priority
                  />

                  {/* Top overlay badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-slate-700 text-xs font-semibold text-blue-300">
                    {heroShowcases[activeTab].tag}
                  </div>

                  {/* Bottom metrics bar */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xl sm:text-2xl font-black text-white">
                          {heroShowcases[activeTab].stat}
                        </div>
                        <div className="text-xs text-slate-300">
                          {heroShowcases[activeTab].statLabel}
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded bg-blue-600/80 text-white">
                        Live Field Record
                      </span>
                    </div>
                  </div>
                </div>

                {/* Showcase Content details */}
                <div className="mt-4 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {heroShowcases[activeTab].title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {heroShowcases[activeTab].subtitle}
                    </p>
                  </div>

                  {/* Selector tabs */}
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-800">
                    {heroShowcases.map((showcase, index) => (
                      <button
                        key={showcase.title}
                        onClick={() => setActiveTab(index)}
                        className={`text-left p-2 rounded-lg text-xs transition-all ${
                          activeTab === index
                            ? "bg-blue-600/20 border border-blue-500/60 text-white"
                            : "bg-slate-800/40 hover:bg-slate-800 text-slate-400 border border-transparent"
                        }`}
                      >
                        <div className="font-semibold truncate">{showcase.tag}</div>
                        <div className="text-[10px] text-slate-400 truncate">Slide 0{index + 1}</div>
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
