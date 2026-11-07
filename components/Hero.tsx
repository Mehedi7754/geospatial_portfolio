"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface HeroShowcase {
  image: string;
  category: string;
  title: string;
  client: string;
  location: string;
  badge: string;
  objectPosition: string;
}

const heroShowcases: HeroShowcase[] = [
  {
    image: "/field-surveyor-v2.webp",
    category: "Geodetic Field Baseline",
    title: "High-Precision RTK GNSS & Total Station Staking",
    client: "Survey of Bangladesh (SOB) Datum",
    location: "Nationwide Infrastructure Network",
    badge: "1st Class Certified",
    objectPosition: "object-[center_80%]",
  },
  {
    image: "/inner/bridge-aerial.webp",
    category: "Mega Infrastructure Alignment",
    title: "Dhaka–Ashulia Elevated Expressway Geodetics",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
    badge: "Sub-mm Pier Control",
    objectPosition: "object-center",
  },
  {
    image: "/inner/drone-fields.webp",
    category: "UAV Aerial Photogrammetry",
    title: "Chittagong Economic Zone 3D Mesh & Earthwork",
    client: "BEZA Industrial Authority",
    location: "Mirsarai, Chattogram",
    badge: "2.5cm GSD Orthomosaic",
    objectPosition: "object-center",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroShowcases.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroShowcases.length) % heroShowcases.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const activeSlide = heroShowcases[currentSlide];

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* BuildGo 1:1 Layout Header Row: Massive Bold Typography on Left + Mission Statement & CTA on Right */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8 sm:mb-12">
          {/* Left: Bold Industrial Heading */}
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl lg:text-[76px] font-black text-[#0f172a] tracking-tight leading-[1.05]">
              Geodetic Surveying <br />
              <span className="text-[#ea580c]">Engineering Works</span>
            </h1>
          </div>

          {/* Right: Square Bullet Paragraph & Dual Action CTA (BuildGo Style) */}
          <div className="max-w-lg flex flex-col justify-between">
            <div className="flex items-start gap-3.5 mb-6">
              <span className="w-2.5 h-2.5 bg-[#ea580c] mt-2 shrink-0 rounded-xs" />
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal">
                We pride ourselves on delivering exceptional geodetic engineering and spatial solutions calibrated to Survey of Bangladesh datum across all 64 districts.
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2.5 px-4 sm:px-5 py-3 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#ea580c] transition group"
              >
                <span className="w-9 h-9 rounded-full bg-slate-100 group-hover:bg-orange-50 text-slate-700 group-hover:text-[#ea580c] flex items-center justify-center transition shadow-xs">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
                <span>All 31 Projects</span>
              </Link>
            </div>
          </div>
        </div>

        {/* BuildGo 1:1 Immense Panoramic Hero Image Banner */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[21/8] max-h-[580px] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl group border border-slate-100">
          {heroShowcases.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="(max-width: 1360px) 100vw, 1360px"
                className={`object-cover transition-transform duration-1000 group-hover:scale-105 ${slide.objectPosition}`}
              />
              {/* Subtle cinematic gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent" />

              {/* Top-Left Category Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase font-bold text-white border border-white/10 shadow-sm">
                  {slide.category}
                </span>
                <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-[#ea580c] text-[10px] font-bold text-white shadow-md">
                  {slide.badge}
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-5 left-5 right-16 sm:bottom-8 sm:left-8 sm:right-28 text-white z-20">
                <span className="text-[11px] sm:text-xs font-mono text-orange-400 block mb-1 font-semibold">
                  {slide.client}
                </span>
                <h3 className="text-base sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-snug mb-1 sm:mb-2 max-w-2xl">
                  {slide.title}
                </h3>
                <span className="text-xs sm:text-sm text-slate-300 font-medium block">
                  {slide.location}
                </span>
              </div>
            </div>
          ))}

          {/* BuildGo Style Vertical Slider Indicator (01 — 03) on Right Edge */}
          <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-3 text-white text-xs font-mono font-bold">
            <button
              type="button"
              onClick={prevSlide}
              className="p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition border border-white/15 mb-2"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>

            <span>0{currentSlide + 1}</span>
            <div className="w-0.5 h-12 sm:h-16 bg-white/25 relative rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 w-full bg-[#ea580c] transition-all duration-500 rounded-full"
                style={{ height: `${((currentSlide + 1) / heroShowcases.length) * 100}%` }}
              />
            </div>
            <span>0{heroShowcases.length}</span>

            <button
              type="button"
              onClick={nextSlide}
              className="p-2 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white backdrop-blur-md transition border border-white/15 mt-2"
              aria-label="Next slide"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 3 Seamless Link Highlights Below (Matching TROMA & BuildGo, NO Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-10 border-t border-slate-100 mt-10">
          <Link href="/#services" className="group block">
            <span className="text-[11px] font-mono text-[#ea580c] block mb-1">
              [ 01 ] GEODETIC POSITIONING
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1 flex items-center justify-between">
              <span>Sub-Centimeter RTK GNSS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tied to Survey of Bangladesh (SOB) geodetic datum with 8 units of CHCNAV i83 receivers.
            </p>
          </Link>

          <Link href="/#services" className="group block">
            <span className="text-[11px] font-mono text-[#ea580c] block mb-1">
              [ 02 ] AERIAL PHOTOGRAMMETRY
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1 flex items-center justify-between">
              <span>High-Precision UAV Drone Fleet</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sub-3cm GSD true orthomosaics, dense 3D point clouds, and volumetric cut/fill earthwork.
            </p>
          </Link>

          <Link href="/#services" className="group block">
            <span className="text-[11px] font-mono text-[#ea580c] block mb-1">
              [ 03 ] SPATIAL INTELLIGENCE
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1 flex items-center justify-between">
              <span>Enterprise GIS &amp; PostGIS Databases</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Relational PostGIS databases, 10,000+ national GCPs, and multi-temporal satellite NDVI.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
