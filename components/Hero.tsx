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
  Compass,
  Award,
} from "lucide-react";

interface HeroShowcase {
  image: string;
  category: string;
  title: string;
  client: string;
  location: string;
  badge: string;
  zoomClass: string;
}

// Curated high-impact hero visuals (Chittagong Zone excluded as requested)
const heroShowcases: HeroShowcase[] = [
  {
    image: "/inner/bridge-aerial.webp",
    category: "Mega Infrastructure Alignment",
    title: "Dhaka–Ashulia Elevated Expressway",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
    badge: "Sub-mm Pier Control",
    zoomClass: "scale-125 object-center", // Enhanced zoom for dramatic architectural engineering focus
  },
  {
    image: "/field-surveyor-v2.webp",
    category: "Geodetic Field Baseline",
    title: "High-Precision RTK GNSS & Total Station Staking",
    client: "Survey of Bangladesh (SOB) Datum",
    location: "Nationwide Infrastructure",
    badge: "SOB 1st Class Certified",
    zoomClass: "scale-115 object-top", // Clear focus on instrument and surveyor
  },
  {
    image: "/assets/showcase/badc-irrigation-gis-project.jpg",
    category: "Satellite Remote Sensing & GIS",
    title: "BADC Agricultural Information System (WEB-AIS)",
    client: "Ministry of Agriculture / BADC",
    location: "23 Unions, 260 Mouzas",
    badge: "208.37 km² Spatial Model",
    zoomClass: "scale-120 object-center",
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

  const active = heroShowcases[currentSlide];

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-20 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Side-by-Side Grid: Text on Left + Zoomed Image Showcase on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Column (7 Cols): Typography & Action Links */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Accreditation Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[11px] font-bold tracking-wider uppercase mb-5 w-max">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
              <span>1st Class Geospatial &amp; Geodetic Consultancy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[58px] font-black text-[#0f172a] tracking-tight leading-[1.08] mb-5">
              Engineering the ground. <br />
              <span className="text-[#ea580c]">Shaping Bangladesh&apos;s future.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              Official geodetic surveying, drone photogrammetry, bathymetric sounding, and enterprise GIS databases calibrated to Survey of Bangladesh (SOB) geodetic datum.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Explore Selected Work</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-full shadow-md transition transform hover:-translate-y-0.5 text-center"
              >
                <span>All 31 Projects Archive</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold rounded-full border border-slate-200 transition text-center"
              >
                <span>Request Proposal</span>
              </Link>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                <span className="font-bold text-slate-900">31</span> Verified Infrastructure Projects
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                <span className="font-bold text-slate-900">All 64</span> Districts Covered
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                <span className="font-bold text-slate-900">SOB Datum</span> Certified
              </div>
            </div>
          </div>

          {/* Right Column (5 Cols): Side-by-Side Zoomed Image Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl group border border-slate-100">
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
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className={`object-cover transition-transform duration-1000 group-hover:scale-130 ${slide.zoomClass}`}
                  />
                  {/* Vignette Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs z-20">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase font-bold text-white border border-white/10">
                      {slide.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#ea580c] text-[10px] font-bold text-white shadow-md">
                      {slide.badge}
                    </span>
                  </div>

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-20">
                    <span className="text-[10.5px] font-mono text-orange-400 block mb-0.5">
                      {slide.client}
                    </span>
                    <h3 className="text-base sm:text-xl font-black text-white tracking-tight leading-snug mb-1">
                      {slide.title}
                    </h3>
                    <div className="flex items-center justify-between pt-2 border-t border-white/15 text-xs text-slate-300">
                      <span>{slide.location}</span>
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-1 font-bold text-white hover:text-orange-400 transition"
                      >
                        <span>Dossier</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Controls */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-1.5 sm:p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md transition border border-white/15"
                  aria-label="Previous showcase"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-1.5 sm:p-2 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md transition border border-white/15"
                  aria-label="Next showcase"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Slide Indicator Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
                {heroShowcases.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentSlide(i)}
                    className={`h-1 rounded-full transition-all ${
                      i === currentSlide ? "w-6 bg-[#ea580c]" : "w-1.5 bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Seamless Link Highlights Below (No Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
          <div className="group">
            <span className="text-[11px] font-mono text-[#ea580c] block mb-1">
              [ 01 ] GEODETIC POSITIONING
            </span>
            <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1">
              Sub-Centimeter RTK GNSS
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tied to Survey of Bangladesh (SOB) geodetic datum with 8 units of CHCNAV i83 receivers.
            </p>
          </div>

          <div className="group">
            <span className="text-[11px] font-mono text-[#ea580c] block mb-1">
              [ 02 ] AERIAL PHOTOGRAMMETRY
            </span>
            <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1">
              High-Precision UAV Drone Fleet
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sub-3cm GSD true orthomosaics, dense 3D point clouds, and volumetric cut/fill earthwork.
            </p>
          </div>

          <div className="group">
            <span className="text-[11px] font-mono text-[#ea580c] block mb-1">
              [ 03 ] SPATIAL INTELLIGENCE
            </span>
            <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1">
              Enterprise GIS &amp; PostGIS Databases
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Relational PostGIS databases, 10,000+ national GCPs, and multi-temporal satellite NDVI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
