"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface HeroShowcase {
  image: string;
  category: string;
  title: string;
  client: string;
  location: string;
  spec: string;
  objectPosition: string;
}

const heroShowcases: HeroShowcase[] = [
  {
    image: "/field-surveyor-v2.webp",
    category: "GEODETIC BASELINE",
    title: "High-Precision RTK GNSS & Total Station Staking",
    client: "Survey of Bangladesh (SOB) Datum",
    location: "Nationwide Infrastructure Network",
    spec: "Sub-Centimeter 3D Accuracy",
    objectPosition: "object-[center_80%]",
  },
  {
    image: "/inner/bridge-aerial.webp",
    category: "INFRASTRUCTURE ALIGNMENT",
    title: "Dhaka–Ashulia Elevated Expressway Alignment",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
    spec: "Sub-mm Pier Centerline Axis",
    objectPosition: "object-center",
  },
  {
    image: "/inner/drone-fields.webp",
    category: "UAV PHOTOGRAMMETRY",
    title: "Chittagong Economic Zone 3D Mesh & Earthwork",
    client: "BEZA Industrial Authority",
    location: "Mirsarai, Chattogram",
    spec: "2.5cm GSD True Orthomosaic",
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
    }, 6500);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const active = heroShowcases[currentSlide];

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white text-[#0f172a]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Practice Coordinates Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-10 border-b border-slate-200 text-[11px] font-mono text-slate-500 uppercase tracking-widest">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 bg-[#ea580c]" />
            <span className="font-bold text-slate-900">GEOSPATIAL WORKS</span>
            <span>• 1ST CLASS GEODETIC CONSULTANCY</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <span>LOC: DHAKA, BANGLADESH [23°48&apos;N 90°24&apos;E]</span>
            <span>DATUM: SOB / PWD CERTIFIED</span>
          </div>
        </div>

        {/* Side-by-Side Hero Section: Left Typography (6 Cols) + Right Sharp Photographic Showcase (6 Cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Column (6 Cols): Clean Monograph Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea580c] block mb-3">
              [ PRACTICE STATEMENT ]
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0f172a] tracking-tight leading-[1.08] mb-6">
              Engineering the ground. <br />
              <span className="text-[#ea580c]">Shaping Bangladesh&apos;s future.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              Official 1st Class geodetic surveying, drone photogrammetry, bathymetric sounding, and enterprise GIS databases calibrated to Survey of Bangladesh (SOB) datum for bridges, expressways, and delta floodplains.
            </p>

            {/* Direct Action Links (Sharp Editorial Buttons) */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold transition rounded-none shadow-xs"
              >
                <span>Explore Selected Works (31)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold transition rounded-none"
              >
                <span>Project Directory</span>
                <ArrowUpRight className="w-4 h-4 text-orange-400" />
              </Link>

              <Link
                href="/fleet"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 border border-slate-300 hover:border-slate-900 text-slate-800 text-xs sm:text-sm font-bold transition rounded-none"
              >
                <span>Calibrated Fleet</span>
              </Link>
            </div>

            {/* Technical Specification Bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-xs font-mono text-slate-600">
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">DELIVERABLES</span>
                <strong className="text-slate-900 font-bold block text-sm mt-0.5">31 Verified</strong>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">TERRITORY</span>
                <strong className="text-slate-900 font-bold block text-sm mt-0.5">All 64 Districts</strong>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block uppercase">CALIBRATION</span>
                <strong className="text-[#ea580c] font-bold block text-sm mt-0.5">SOB Datum</strong>
              </div>
            </div>
          </div>

          {/* Right Column (6 Cols): Sharp Image with ZERO Border Radius */}
          <div className="lg:col-span-6 relative w-full">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/12] w-full bg-slate-950 border border-slate-300 shadow-sm rounded-none overflow-hidden group">
              {heroShowcases.map((slide, idx) => (
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
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={`object-cover rounded-none transition-transform duration-700 group-hover:scale-102 ${slide.objectPosition}`}
                  />
                  {/* Subtle technical gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

                  {/* Top Technical Metadata */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs z-20 font-mono">
                    <span className="px-2.5 py-1 bg-slate-900/90 text-[10px] uppercase tracking-wider font-bold border border-white/10 rounded-none">
                      [ {slide.category} ]
                    </span>
                    <span className="px-2 py-0.5 bg-[#ea580c] text-[10px] font-bold rounded-none">
                      {slide.spec}
                    </span>
                  </div>

                  {/* Bottom Technical Caption */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-20">
                    <span className="text-[11px] font-mono text-orange-400 block mb-1">
                      {slide.client}
                    </span>
                    <h2 className="text-base sm:text-xl font-bold tracking-tight text-white mb-1 leading-snug">
                      {slide.title}
                    </h2>
                    <div className="flex items-center justify-between pt-2 border-t border-white/20 text-xs text-slate-300 font-mono">
                      <span>{slide.location}</span>
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-1 text-white hover:text-orange-400 transition font-bold"
                      >
                        <span>INSPECT DOSSIER</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {/* Slider Controls (Sharp square buttons) */}
              <div className="absolute top-4 right-4 z-30 flex items-center gap-1">
                <button
                  type="button"
                  onClick={prevSlide}
                  className="p-2 bg-slate-900/80 hover:bg-slate-900 text-white transition border border-white/20 rounded-none cursor-pointer"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  className="p-2 bg-slate-900/80 hover:bg-slate-900 text-white transition border border-white/20 rounded-none cursor-pointer"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Monospace slide counter */}
              <div className="absolute bottom-2 right-4 z-20 text-[10px] font-mono text-white/70">
                PLATE {currentSlide + 1} OF {heroShowcases.length}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Editorial Column Highlights (Separated by 1px rules, Zero Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
          <Link href="/#services" className="group block">
            <span className="text-[11px] font-mono text-[#ea580c] block mb-1 font-bold">
              01 // GEODETIC POSITIONING
            </span>
            <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors mb-1.5 flex items-center justify-between">
              <span>Sub-Centimeter RTK GNSS</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Tied to Survey of Bangladesh (SOB) geodetic datum with 8 units of CHCNAV i83 receivers and static DGPS networks.
            </p>
          </Link>

          <Link href="/#services" className="group block">
            <span className="text-[11px] font-mono text-[#ea580c] block mb-1 font-bold">
              02 // AERIAL PHOTOGRAMMETRY
            </span>
            <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors mb-1.5 flex items-center justify-between">
              <span>High-Precision UAV Drone Fleet</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Sub-3cm GSD true orthomosaics, dense 3D point clouds, and volumetric cut/fill grading for industrial zones.
            </p>
          </Link>

          <Link href="/#services" className="group block">
            <span className="text-[11px] font-mono text-[#ea580c] block mb-1 font-bold">
              03 // SPATIAL INTELLIGENCE
            </span>
            <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors mb-1.5 flex items-center justify-between">
              <span>Enterprise GIS &amp; PostGIS Databases</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Relational PostGIS databases, 10,000+ national GCP benchmarks, and multi-temporal Sentinel-2 satellite NDVI.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
};
