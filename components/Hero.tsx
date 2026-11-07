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
  ChevronLeft,
  ChevronRight,
  Layers,
  Award,
} from "lucide-react";

interface HeroShowcase {
  image: string;
  category: string;
  title: string;
  client: string;
  location: string;
}

const heroShowcases: HeroShowcase[] = [
  {
    image: "/inner/bridge-aerial.webp",
    category: "Mega Infrastructure",
    title: "Dhaka–Ashulia Elevated Expressway Alignment",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
  },
  {
    image: "/assets/showcase/photogrammetry-3d-terrain.png",
    category: "UAV Aerial Photogrammetry",
    title: "Chittagong Economic Zone 3D Terrain Model",
    client: "BEZA Industrial Authority",
    location: "Mirsarai, Chattogram",
  },
  {
    image: "/assets/showcase/badc-irrigation-gis-project.jpg",
    category: "Satellite Remote Sensing & GIS",
    title: "BADC Flagship Agricultural Information System",
    client: "Ministry of Agriculture / BADC",
    location: "23 Unions, 260 Mouzas",
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

  return (
    <section id="home" className="pt-28 pb-16 sm:pt-36 sm:pb-24 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Intro (Typography & Link Actions) */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[11px] font-bold tracking-wider uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
            <span>1st Class Geospatial &amp; Geodetic Consultancy</span>
          </div>

          <h1 className="text-3xl sm:text-6xl lg:text-[68px] font-black text-[#0f172a] tracking-tight leading-[1.05] mb-6">
            Engineering the ground. <br />
            <span className="text-[#ea580c]">Shaping Bangladesh&apos;s future.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8 font-normal">
            Official geospatial consultancy, geodetic field capture, drone photogrammetry, and enterprise GIS databases calibrated to Survey of Bangladesh datum.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 active:translate-y-0 text-center"
            >
              <span>Explore Selected Work</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold rounded-full shadow-md transition transform hover:-translate-y-0.5 text-center"
            >
              <span>All 31 Projects Archive</span>
              <ArrowUpRight className="w-4 h-4 text-orange-400" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold rounded-full border border-slate-200 transition text-center"
            >
              <span>Request Proposal</span>
            </Link>
          </div>
        </div>

        {/* Expansive High-Res Visual Showcase (Replacing Boxed Section Container) */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-3xl overflow-hidden bg-slate-950 shadow-2xl mb-12 group">
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
                sizes="(max-width: 1024px) 100vw, 1360px"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white z-20">
                <div className="max-w-2xl">
                  <span className="px-3 py-1 rounded-full bg-[#ea580c] text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-2">
                    {slide.category}
                  </span>
                  <h2 className="text-lg sm:text-3xl font-black text-white tracking-tight leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                    {slide.client} • {slide.location}
                  </p>
                </div>

                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/20 text-xs font-bold transition self-start sm:self-end"
                >
                  <span>Inspect Case Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}

          {/* Slider Controls */}
          <div className="absolute top-6 right-6 z-30 flex items-center gap-2">
            <button
              type="button"
              onClick={prevSlide}
              className="p-2 sm:p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white backdrop-blur-md transition border border-white/10"
              aria-label="Previous showcase"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-2 sm:p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white backdrop-blur-md transition border border-white/10"
              aria-label="Next showcase"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Slide Indicator Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
            {heroShowcases.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentSlide ? "w-8 bg-[#ea580c]" : "w-2 bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* 3 Seamless Link Highlights (No Box Borders) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
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
