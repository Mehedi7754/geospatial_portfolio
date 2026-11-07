"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Compass, TrendingUp, Zap, MapPin } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#fafafa] border-b border-slate-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Main 2-Column Split (Matching Reference Image "Leading Digital Agency For Your Business Solution") */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Left Column (5 Cols): Authentic Collaborative Engineering Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] bg-slate-900 border border-slate-200/80 shadow-xl group">
              <Image
                src="/assets/showcase/engineering-site-investigation.png"
                alt="Geospatial Works engineers collaborating on infrastructure survey plans"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-3.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#ea580c] text-white font-bold flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    Survey of Bangladesh (SOB) Datum
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Certified 1st Class Baseline Calibration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Editorial Text (Matching Reference Layout) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[11px] font-bold tracking-wider uppercase mb-4 w-max">
              <Award className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>Leading Geospatial Consultancy</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-[#0f172a] tracking-tight leading-[1.15] mb-5">
              Leading geospatial agency for your{" "}
              <span className="text-[#ea580c]">infrastructure solutions.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Geospatial Works is an accredited 1st Class engineering consultancy and geospatial contractor
              headquartered in Dhaka. We bridge high-precision field instrumentation with spatial analytics,
              supporting Bangladesh&apos;s most demanding bridges, expressways, industrial zones, and water
              resource projects.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
              Our multidisciplinary team integrates RTK GNSS baselines, single-beam acoustic bathymetry,
              and enterprise PostGIS geodatabases compliant with national LGED, BWDB, and RHD standards.
            </p>

            <div>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#ea580c] hover:text-[#c2410c] transition-colors group"
              >
                <span>Explore Corporate Credentials &amp; Projects</span>
                <ArrowRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* 2. Floating Stats Bar (Matching 4-Stat Row with Subtle Background from Reference) */}
        <div className="relative rounded-3xl bg-white border border-slate-200/80 p-6 sm:p-10 shadow-lg mb-8 overflow-hidden">
          <div className="absolute inset-0 bg-construction-grid opacity-30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Stat 1 */}
            <div className="pt-4 sm:pt-0 sm:px-4 text-center first:pt-0 first:px-0">
              <span className="text-2xl sm:text-4xl font-black text-[#ea580c] tracking-tight block">
                208.37 <span className="text-xs sm:text-sm font-bold text-slate-600">km²</span>
              </span>
              <strong className="text-xs sm:text-sm font-bold text-slate-900 block mt-1">
                BADC Agriculture GIS
              </strong>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                23 unions &amp; 260 mouzas mapped
              </span>
            </div>

            {/* Stat 2 */}
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <span className="text-2xl sm:text-4xl font-black text-[#ea580c] tracking-tight block">
                800+ <span className="text-xs sm:text-sm font-bold text-slate-600">km</span>
              </span>
              <strong className="text-xs sm:text-sm font-bold text-slate-900 block mt-1">
                Precision Road Corridors
              </strong>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                LGED &amp; DTCA CSmaRT alignments
              </span>
            </div>

            {/* Stat 3 */}
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <span className="text-2xl sm:text-4xl font-black text-[#ea580c] tracking-tight block">
                10,000+ <span className="text-xs sm:text-sm font-bold text-slate-600">GCPs</span>
              </span>
              <strong className="text-xs sm:text-sm font-bold text-slate-900 block mt-1">
                Certified National GCPs
              </strong>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                All 64 districts land zoning
              </span>
            </div>

            {/* Stat 4 */}
            <div className="pt-4 sm:pt-0 sm:px-4 text-center">
              <span className="text-2xl sm:text-4xl font-black text-[#ea580c] tracking-tight block">
                100,000+ <span className="text-xs sm:text-sm font-bold text-slate-600">Poles</span>
              </span>
              <strong className="text-xs sm:text-sm font-bold text-slate-900 block mt-1">
                BPDB Power Asset GIS
              </strong>
              <span className="text-[11px] text-slate-500 block mt-0.5">
                1 Lac distribution poles surveyed
              </span>
            </div>
          </div>
        </div>

        {/* 3. Wide Infrastructure Photo Strip (Matching Reference Image) */}
        <div className="relative rounded-3xl overflow-hidden aspect-[16/7] sm:aspect-[21/8] bg-slate-900 shadow-md">
          <Image
            src="/inner/bridge-aerial.webp"
            alt="Bangladesh expressway geodetic corridor mapping"
            fill
            sizes="(max-width: 1024px) 100vw, 1360px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-white max-w-xl">
            <span className="px-3 py-1 rounded-full bg-[#ea580c] text-[10px] font-bold uppercase tracking-wider inline-block mb-2">
              National Infrastructure Impact
            </span>
            <h3 className="text-base sm:text-xl font-bold leading-snug">
              Delivering high-density geodetic control for Bangladesh&apos;s critical expressways and waterways.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
