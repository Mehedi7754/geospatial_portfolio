"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, Award, ShieldCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial 2-Column Split (Image + Typography, NO gray boxed section containers) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Column (5 Cols): High-Res Authentic Collaborative Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square bg-slate-900 shadow-2xl group">
              <Image
                src="/assets/showcase/engineering-site-investigation.png"
                alt="Geospatial Works engineers collaborating on infrastructure plans"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#ea580c] text-white flex-shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    Survey of Bangladesh (SOB) Datum
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium">
                    Certified 1st Class Baseline Calibration
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Editorial Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[11px] font-bold tracking-wider uppercase mb-5 w-max">
              <Award className="w-3.5 h-3.5 text-[#ea580c]" />
              <span>Accredited Consultancy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.1] mb-6">
              Precision geodetics for Bangladesh&apos;s{" "}
              <span className="text-[#ea580c]">critical infrastructure.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-5">
              Geospatial Works is an accredited 1st Class engineering consultancy headquartered in Dhaka.
              We bridge high-precision field instrumentation with enterprise spatial analytics, supporting
              Bangladesh&apos;s most demanding bridges, expressways, industrial economic zones, and delta floodplains.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              Our multidisciplinary engineering teams integrate dual-frequency RTK GNSS baselines,
              single-beam acoustic bathymetry, and enterprise PostGIS geodatabases compliant with national
              LGED, BWDB, and RHD standards.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ea580c] hover:text-[#c2410c] transition group"
              >
                <span>View Complete Project Archive (31)</span>
                <ArrowRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#ea580c] transition group"
              >
                <span>Inspect Calibrated Fleet</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Seamless Stats (No Boxed Container, Clean Editorial Typography) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-100 mb-16">
          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              208.37 <span className="text-base font-bold text-slate-600">km²</span>
            </span>
            <strong className="text-sm font-bold text-slate-900 block mt-2">
              BADC Agriculture GIS
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              23 unions &amp; 260 mouzas mapped
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              800+ <span className="text-base font-bold text-slate-600">km</span>
            </span>
            <strong className="text-sm font-bold text-slate-900 block mt-2">
              Corridor Alignments
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              LGED &amp; DTCA CSmaRT road surveys
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              10,000+ <span className="text-base font-bold text-slate-600">GCPs</span>
            </span>
            <strong className="text-sm font-bold text-slate-900 block mt-2">
              National GCP Baselines
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              Certified across all 64 districts
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              100,000+ <span className="text-base font-bold text-slate-600">Poles</span>
            </span>
            <strong className="text-sm font-bold text-slate-900 block mt-2">
              BPDB Power Asset GIS
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              Electrical network geodatabase
            </span>
          </div>
        </div>

        {/* Wide Panoramic Infrastructure Photo Banner */}
        <div className="relative aspect-[16/7] sm:aspect-[21/8] rounded-3xl overflow-hidden bg-slate-950 shadow-xl">
          <Image
            src="/inner/bridge-aerial.webp"
            alt="Bangladesh expressway geodetic corridor mapping"
            fill
            sizes="(max-width: 1024px) 100vw, 1360px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/30 to-transparent" />

          <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 right-6 sm:right-10 text-white max-w-xl">
            <span className="px-3 py-1 rounded-full bg-[#ea580c] text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block mb-3">
              National Infrastructure Standard
            </span>
            <h3 className="text-lg sm:text-2xl font-black leading-snug">
              Delivering high-density geodetic control for critical expressways, bridges, and waterways.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
