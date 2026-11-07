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
  Layers,
  MapPin,
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
    badge: "Infrastructure",
    title: "Dhaka–Ashulia Elevated Expressway Geodetic Alignment",
    client: "Bangladesh Bridge Authority",
    location: "Dhaka-Ashulia Corridor",
    metric: "Pier Centerline Control",
  },
  {
    image: "/inner/drone-fields.webp",
    badge: "UAV Survey",
    title: "Chittagong Economic Zone 3D Orthomosaic & Earthwork",
    client: "BEZA Industrial Zone",
    location: "Mirsarai, Chattogram",
    metric: "2.5 cm GSD Precision",
  },
  {
    image: "/geospatial-river-hero.webp",
    badge: "River Hydraulics",
    title: "Sylhet Basin Riverbed Morphology & Flood Mitigation",
    client: "BWDB Water Board",
    location: "Surma-Kushiyara Basin",
    metric: "Acoustic Depth Sounding",
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
      className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white border-b border-slate-200/80"
    >
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-construction-grid opacity-50 pointer-events-none" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Grid: Headline + Hero Carousel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (5 Cols): Typography & CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase mb-4 shadow-xs w-max">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span>1st Class Geospatial Consultancy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.12] mb-4">
              Engineering the ground.{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                Shaping the future.
              </span>
            </h1>

            {/* Executive Bio */}
            <p className="text-xs sm:text-sm lg:text-base text-slate-600 leading-relaxed mb-6 max-w-lg">
              Official geospatial consultancy, geodetic surveying, drone mapping, and enterprise GIS
              solutions for Bangladesh’s critical bridges, mega expressways, and river floodplains.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6 sm:mb-8">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition group text-center"
              >
                <span>Explore Portfolio (31)</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-bold rounded-xl transition text-center"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-5 border-t border-slate-200/80 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-[11px] sm:text-xs">Sub-Centimeter RTK</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-[11px] sm:text-xs">31 Verified Projects</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-[11px] sm:text-xs">All 64 Districts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Layers className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-[11px] sm:text-xs">UAV Photogrammetry</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Smart Responsive Project Showcase Box */}
          <div className="lg:col-span-7 relative w-full">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xl h-[340px] sm:h-[420px] lg:h-[480px] w-full">
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
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 55vw"
                    className="object-cover object-center"
                  />
                  {/* Smart Dark Vignette & Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 right-3 sm:top-5 sm:left-5 sm:right-5 flex items-center justify-between z-20">
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-white/95 text-slate-900 backdrop-blur-md shadow-xs">
                      {slide.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-amber-500 text-slate-950 shadow-xs">
                      {slide.metric}
                    </span>
                  </div>

                  {/* Bottom Information Card with Responsive Padding Away From Arrows */}
                  <div className="absolute bottom-3 left-3 right-20 sm:bottom-6 sm:left-6 sm:right-28 z-20">
                    <span className="text-[10px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1 truncate">
                      {slide.client} • {slide.location}
                    </span>
                    <h3 className="text-sm sm:text-base lg:text-xl font-bold text-white tracking-tight leading-snug line-clamp-2 mb-2">
                      {slide.title}
                    </h3>
                    <Link
                      href="#directory"
                      className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold text-slate-200 hover:text-white group"
                    >
                      <span>Inspect Deliverable</span>
                      <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}

              {/* Slider Controls (Safely pinned in bottom-right corner) */}
              <div className="absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-30 flex items-center gap-1.5 sm:gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-slate-900 text-white backdrop-blur-sm border border-white/20 transition hover:scale-105 active:scale-95"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-2 sm:p-2.5 rounded-full bg-slate-950/75 hover:bg-slate-900 text-white backdrop-blur-sm border border-white/20 transition hover:scale-105 active:scale-95"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slide Indicator Dots */}
              <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-1.5">
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

        {/* Bottom Metrics Bar (Responsive Bento Grid) */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-400 transition-colors">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f172a] block tracking-tight">
              208.37 <span className="text-xs sm:text-sm font-semibold text-amber-600">km²</span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block mt-0.5">
              BADC Agriculture GIS
            </span>
            <p className="text-[10px] sm:text-[11px] text-slate-600 mt-1 line-clamp-2">
              23 unions &amp; 260 mouzas mapped with NDVI analytics
            </p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-400 transition-colors">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f172a] block tracking-tight">
              800+ <span className="text-xs sm:text-sm font-semibold text-amber-600">km</span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block mt-0.5">
              Expressway &amp; Roads
            </span>
            <p className="text-[10px] sm:text-[11px] text-slate-600 mt-1 line-clamp-2">
              Precision RTK baseline &amp; TBM benchmarks for LGED &amp; DTCA
            </p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-400 transition-colors">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f172a] block tracking-tight">
              10,000+ <span className="text-xs sm:text-sm font-semibold text-amber-600">GCPs</span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block mt-0.5">
              National Geodetic Grid
            </span>
            <p className="text-[10px] sm:text-[11px] text-slate-600 mt-1 line-clamp-2">
              Certified ground control across all 64 districts (CEGIS)
            </p>
          </div>

          <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-200/70 hover:border-amber-400 transition-colors">
            <span className="text-xl sm:text-2xl lg:text-3xl font-black text-[#0f172a] block tracking-tight">
              100,000+ <span className="text-xs sm:text-sm font-semibold text-amber-600">Poles</span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 block mt-0.5">
              BPDB Enterprise GIS
            </span>
            <p className="text-[10px] sm:text-[11px] text-slate-600 mt-1 line-clamp-2">
              1 Lac electrical distribution assets geodatabase
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
