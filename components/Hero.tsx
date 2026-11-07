"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Layers,
  MapPin,
  TrendingUp,
} from "lucide-react";

interface HeroSlide {
  image: string;
  badge: string;
  title: string;
  client: string;
  location: string;
  metric: string;
}

const slides: HeroSlide[] = [
  {
    image: "/inner/bridge-aerial.webp",
    badge: "Infrastructure & Expressway",
    title: "Dhaka–Ashulia Elevated Expressway Geodetic Alignment",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
    metric: "Millimeter Pier Control",
  },
  {
    image: "/inner/drone-fields.webp",
    badge: "UAV Aerial Photogrammetry",
    title: "Chittagong Economic Zone 3D Orthomosaic & Earthwork",
    client: "Bangladesh Economic Zones Authority (BEZA)",
    location: "Mirsarai, Chattogram",
    metric: "2.5 cm GSD Precision",
  },
  {
    image: "/geospatial-river-hero.webp",
    badge: "River Hydraulics & Bathymetry",
    title: "Sylhet Basin Riverbed Morphology & Flood Mitigation",
    client: "Bangladesh Water Development Board (BWDB)",
    location: "Surma-Kushiyara Basin",
    metric: "Acoustic Echo Profiling",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="home"
      aria-label="Geospatial Works Business Portfolio"
      className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white border-b border-slate-200/80"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-construction-grid opacity-60 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: Headline + Hero Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (5 Cols): Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-bold tracking-wider uppercase mb-5 shadow-xs w-max">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>1st Class Geospatial Consultancy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.08] mb-5">
              Engineering the ground.{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                Shaping the future.
              </span>
            </h1>

            {/* Executive Bio */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-7 max-w-lg">
              Official geospatial consultancy, geodetic surveying, drone mapping, and enterprise GIS
              solutions for Bangladesh’s critical bridges, mega expressways, and river floodplains.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 mb-8">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
              >
                <span>Explore Portfolio (31)</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-xl transition-all duration-200"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold">Sub-Centimeter RTK</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold">31 Verified Projects</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold">All 64 Districts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Layers className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold">UAV Photogrammetry</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Interactive Project Showcase Box */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-2xl h-[380px] sm:h-[460px] lg:h-[500px]">
              {/* Slides */}
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center"
                  />
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-slate-900 backdrop-blur-md shadow-xs">
                      {slide.badge}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/90 text-slate-950 backdrop-blur-md shadow-xs">
                      {slide.metric}
                    </span>
                  </div>

                  {/* Bottom Information Card */}
                  <div className="absolute bottom-6 left-6 right-6 z-20">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1">
                      {slide.client} • {slide.location}
                    </span>
                    <h3 className="text-lg sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                      {slide.title}
                    </h3>
                    <Link
                      href="#directory"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-white group"
                    >
                      <span>Inspect Deliverable Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}

              {/* Slider Controls */}
              <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slide Indicator Dots */}
              <div className="absolute top-5 right-6 z-20 hidden sm:flex items-center gap-1.5">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentSlide ? "w-6 bg-amber-400" : "w-1.5 bg-white/50"
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metrics Bar (Dribbble Bento KPI Strip) */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-amber-400 transition-colors">
            <span className="text-2xl sm:text-3xl font-black text-[#0f172a] block tracking-tight">
              208.37 <span className="text-base font-semibold text-amber-600">km²</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mt-1">
              BADC Agriculture GIS
            </span>
            <p className="text-[11px] text-slate-600 mt-1">
              23 unions &amp; 260 mouzas mapped with NDVI analytics
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-amber-400 transition-colors">
            <span className="text-2xl sm:text-3xl font-black text-[#0f172a] block tracking-tight">
              800+ <span className="text-base font-semibold text-amber-600">km</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mt-1">
              Expressway &amp; Roads
            </span>
            <p className="text-[11px] text-slate-600 mt-1">
              Precision RTK baseline &amp; TBM benchmarks for LGED &amp; DTCA
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-amber-400 transition-colors">
            <span className="text-2xl sm:text-3xl font-black text-[#0f172a] block tracking-tight">
              10,000+ <span className="text-base font-semibold text-amber-600">GCPs</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mt-1">
              National Geodetic Grid
            </span>
            <p className="text-[11px] text-slate-600 mt-1">
              Certified ground control across all 64 districts (CEGIS)
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/60 hover:border-amber-400 transition-colors">
            <span className="text-2xl sm:text-3xl font-black text-[#0f172a] block tracking-tight">
              100,000+ <span className="text-base font-semibold text-amber-600">Poles</span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mt-1">
              BPDB Enterprise GIS
            </span>
            <p className="text-[11px] text-slate-600 mt-1">
              1 Lac electrical distribution assets geodatabase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
