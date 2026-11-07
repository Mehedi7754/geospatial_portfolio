"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Plane,
  Database,
  CheckCircle2,
  Award,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface HeroSlide {
  image: string;
  badge: string;
  title: string;
  subtitle: string;
}

const heroSlides: HeroSlide[] = [
  {
    image: "/field-surveyor-v2.webp",
    badge: "Geodetic GNSS Baseline",
    title: "Surveyor in Delta Corridor",
    subtitle: "Calibrated to Survey of Bangladesh Datum",
  },
  {
    image: "/inner/bridge-aerial.webp",
    badge: "Mega Infrastructure",
    title: "Dhaka–Ashulia Elevated Expressway",
    subtitle: "Millimeter pier centerline geodetic control",
  },
  {
    image: "/inner/drone-fields.webp",
    badge: "UAV Photogrammetry",
    title: "Chittagong Economic Zone 3D Mapping",
    subtitle: "2.5cm GSD true orthomosaic & earthwork",
  },
];

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section
      id="home"
      aria-label="Geospatial Works Business Portfolio"
      className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-white border-b border-slate-100"
    >
      {/* Soft Background Accents (Matching Reference Design) */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-orange-50/40 via-amber-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-24 right-10 w-64 h-64 bg-orange-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Split: Left Content + Right Circular Organic Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (6 Cols): Typography, Headline & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Accreditation Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[11px] font-bold tracking-wider uppercase mb-5 w-max">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
              <span>1st Class Geospatial Consultancy</span>
            </div>

            {/* Main Headline (Styled like Dribbble Reference "A Silicon Valley digital agency") */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black text-[#0f172a] tracking-tight leading-[1.08] mb-5">
              Engineering the ground. <br />
              <span className="text-[#ea580c]">Shaping the future.</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-7 max-w-xl">
              Official geospatial consultancy, geodetic surveying, drone mapping, and enterprise GIS
              solutions for Bangladesh’s critical bridges, mega expressways, and river floodplains.
            </p>

            {/* CTAs (Matching Coral Pill Button from Reference) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Explore Portfolio (31)</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold rounded-full border border-slate-200 hover:border-slate-400 shadow-2xs transition-all text-center"
              >
                <span>Request Proposal</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </Link>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-5 border-t border-slate-100 grid grid-cols-2 gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-xs">Sub-Centimeter RTK</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-xs">31 Verified Projects</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-xs">All 64 Districts</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="font-semibold text-xs">UAV Photogrammetry</span>
              </div>
            </div>
          </div>

          {/* Right Column (6 Cols): Organic Circular Hero Photo Frame (Matching Reference) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            <div className="relative w-full max-w-[420px] sm:max-w-[460px] aspect-square flex items-center justify-center">
              {/* Background Pastel Floating Shapes & Squiggles */}
              <div className="absolute -top-4 -right-4 w-36 h-36 rounded-full bg-orange-100/70 -z-10 animate-pulse duration-1000" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-amber-50/80 -z-10" />
              <div className="absolute top-1/2 -left-3 w-8 h-8 rounded-full bg-orange-200/50 -z-10" />
              <div className="absolute -top-2 left-10 w-5 h-5 rounded-full bg-amber-200/60 -z-10" />

              {/* Main Circular Mask Frame */}
              <div className="relative w-[270px] h-[270px] sm:w-[380px] sm:h-[380px] rounded-full overflow-hidden border-6 sm:border-8 border-white shadow-2xl bg-slate-900 group">
                {heroSlides.map((slide, idx) => (
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
                      sizes="(max-width: 640px) 270px, 380px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                    {/* Bottom caption inside circle */}
                    <div className="absolute bottom-5 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-6 text-center text-white z-20">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#ea580c] text-[9.5px] sm:text-[10px] font-bold uppercase tracking-wider inline-block mb-1">
                        {slide.badge}
                      </span>
                      <h3 className="text-[11px] sm:text-sm font-bold text-white truncate">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                ))}

                {/* Slider Controls */}
                <button
                  type="button"
                  onClick={prevSlide}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 p-1.5 rounded-full bg-white/90 hover:bg-white text-slate-800 shadow-md transition"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Floating Pill Badges Outside Circle (Matching Reference Image) */}
              <div className="absolute -top-1 right-0 sm:right-2 p-2 sm:p-3 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-2.5 animate-bounce duration-1000 z-20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-orange-50 text-[#ea580c] flex items-center justify-center font-bold">
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-900 block leading-tight">
                    SOB Datum
                  </span>
                  <span className="text-[9px] sm:text-[9.5px] text-slate-500 block">
                    Certified Baseline
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-1 left-0 sm:left-4 p-2 sm:p-3 rounded-2xl bg-white shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-2.5 z-20">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <span className="text-[10.5px] sm:text-[11px] font-bold text-slate-900 block leading-tight">
                    31 Mega Projects
                  </span>
                  <span className="text-[9px] sm:text-[9.5px] text-slate-500 block">
                    100% Verified Archive
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Floating Highlight Feature Cards (Exactly matching reference design row below Hero) */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-slate-100 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-orange-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
              Sub-Centimeter RTK
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              1-second precision total stations and 8 units of CHCNAV i83 multi-constellation GNSS rovers.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-orange-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
              UAV Photogrammetry
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Sub-3cm GSD true orthomosaics, dense 3D DSM point clouds, and volumetric cut/fill earthwork.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-orange-300 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-colors flex items-center justify-center mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
              Enterprise GIS
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Relational PostGIS spatial databases, 10,000+ national GCPs, and BPDB electrical utility inventory.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
