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

// Curated high-impact hero visuals (Chittagong Zone excluded from hero as requested)
const heroShowcases: HeroShowcase[] = [
  {
    image: "/inner/bridge-aerial.webp",
    category: "Mega Infrastructure Alignment",
    title: "Dhaka–Ashulia Elevated Expressway",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
    badge: "Sub-mm Pier Control",
    objectPosition: "object-center",
  },
  {
    image: "/field-surveyor-v2.webp",
    category: "Geodetic Field Baseline",
    title: "High-Precision RTK GNSS & Total Station Staking",
    client: "Survey of Bangladesh (SOB) Datum",
    location: "Nationwide Infrastructure",
    badge: "SOB 1st Class Certified",
    objectPosition: "object-[center_80%]", // Precisely centers the surveyor, yellow vest, and GNSS antenna pole
  },
  {
    image: "/assets/showcase/badc-irrigation-gis-project.jpg",
    category: "Satellite Remote Sensing & GIS",
    title: "BADC Agricultural Information System (WEB-AIS)",
    client: "Ministry of Agriculture / BADC",
    location: "23 Unions, 260 Mouzas",
    badge: "208.37 km² Spatial Model",
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

  // Reusable Showcase Carousel Component for Desktop & Mobile
  const renderShowcase = (isMobile: boolean = false) => (
    <div
      className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-950 shadow-xl border border-slate-200/80 group ${
        isMobile
          ? "aspect-[16/10] sm:aspect-[16/10] max-h-[320px]"
          : "aspect-[16/11] lg:min-h-[460px] xl:min-h-[480px]"
      }`}
    >
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
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-transform duration-700 group-hover:scale-105 ${slide.objectPosition}`}
          />
          {/* Subtle gradient overlay to keep images vibrant yet readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent" />

          {/* Top Category Badge */}
          <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 flex items-center gap-2">
            <span className="px-2.5 py-1 sm:px-3 sm:py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-[9px] sm:text-[10px] font-mono tracking-wider uppercase font-bold text-white border border-white/10 shadow-sm">
              {slide.category}
            </span>
            <span className="hidden sm:inline-block px-2.5 py-1 rounded-full bg-[#ea580c] text-[10px] font-bold text-white shadow-md">
              {slide.badge}
            </span>
          </div>

          {/* Bottom Caption Overlay */}
          <div className="absolute bottom-4 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 text-white z-20">
            <span className="text-[10px] sm:text-[11px] font-mono text-orange-400 block mb-0.5 font-semibold">
              {slide.client}
            </span>
            <h3 className="text-sm sm:text-lg lg:text-xl font-black text-white tracking-tight leading-snug mb-1">
              {slide.title}
            </h3>
            <div className="flex items-center justify-between pt-1.5 sm:pt-2 border-t border-white/15 text-[11px] sm:text-xs text-slate-300">
              <span className="truncate max-w-[65%]">{slide.location}</span>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1 font-bold text-white hover:text-orange-400 transition ml-2 shrink-0"
              >
                <span>Inspect Dossier</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Prev / Next Controls */}
      <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 flex items-center gap-1.5">
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
              i === currentSlide ? "w-5 bg-[#ea580c]" : "w-1.5 bg-white/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section id="home" className="pt-24 pb-14 sm:pt-36 sm:pb-20 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Equal-Sized Desktop Grid: 6 Cols Text + 6 Cols Image (50% / 50% Balance) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-20">
          {/* Left Column (lg:col-span-6 on Desktop): Refined Typography, Compact Actions & Responsive Flow */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Accreditation Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[10.5px] sm:text-[11px] font-bold tracking-wider uppercase mb-3.5 w-max">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
              <span>1st Class Geospatial &amp; Geodetic Consultancy</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-black text-[#0f172a] tracking-tight leading-[1.14] mb-3 sm:mb-4">
              Engineering the ground. <br />
              <span className="text-[#ea580c]">Shaping Bangladesh&apos;s future.</span>
            </h1>

            {/* MOBILE ONLY: Hero Image Showcase placed immediately below the Headline */}
            <div className="block lg:hidden my-4">
              {renderShowcase(true)}
            </div>

            {/* Subtitle / Paragraph Description (Placed below hero image on mobile, below headline on desktop) */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed max-w-xl mb-5 font-normal">
              Official geodetic surveying, drone photogrammetry, bathymetric sounding, and enterprise GIS databases calibrated to Survey of Bangladesh (SOB) datum.
            </p>

            {/* Action Buttons: Compact & Smart on Mobile, Elegant on Desktop */}
            <div className="grid grid-cols-2 sm:flex sm:flex-row sm:items-center gap-2.5 sm:gap-3 mb-5">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-6 py-2.5 sm:py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-full shadow-md transition transform hover:-translate-y-0.5 text-center"
              >
                <span>31 Projects</span>
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400" />
              </Link>

              <Link
                href="#contact"
                className="col-span-2 sm:col-span-1 inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 sm:py-3.5 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold rounded-full border border-slate-200 transition text-center"
              >
                <span>Request Proposal</span>
              </Link>
            </div>

            {/* Quick Metrics Strip */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-5 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                <span className="font-bold text-slate-900">31</span> Mega Projects
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                <span className="font-bold text-slate-900">All 64</span> Districts
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                <span className="font-bold text-slate-900">SOB Datum</span> Certified
              </div>
            </div>
          </div>

          {/* Right Column (lg:col-span-6 on Desktop): Equal 50% Sized Showcase (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-6 relative w-full">
            {renderShowcase(false)}
          </div>
        </div>

        {/* 3 Seamless Link Highlights Below (Matching TROMA's 3 items below hero, NO Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8 border-t border-slate-100">
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
