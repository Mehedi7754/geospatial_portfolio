"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
              [ PRACTICE PROFILE &amp; GEODETIC ACCREDITATION ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Statement of Practice
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 self-start sm:self-end">
            ACCREDITED 1ST CLASS GEODETIC CONSULTANCY
          </span>
        </div>

        {/* 2-Column Monograph Split: Sharp Photograph on Left + Editorial Statement on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Left Column (5 Cols): Sharp Photograph with 0px Border Radius */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-square w-full bg-slate-900 border border-slate-300 rounded-none overflow-hidden group">
              <Image
                src="/assets/showcase/engineering-site-investigation.png"
                alt="Geospatial Works engineers collaborating on infrastructure survey plans"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center rounded-none transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Bottom Credential Bar */}
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-white/95 backdrop-blur-md border border-slate-200 text-slate-900 flex items-center gap-3 rounded-none">
                <div className="p-2 bg-[#ea580c] text-white shrink-0 rounded-none">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs">
                  <strong className="block font-bold">Survey of Bangladesh (SOB) Datum</strong>
                  <span className="text-[10px] text-slate-500">1st Class Geodetic Baseline Calibration</span>
                </div>
              </div>
            </div>
            <span className="text-[10px] font-mono text-slate-400 block mt-2">
              FIG. 04 — TECHNICAL FIELD COLLABORATION &amp; AXIS STAKING AUDIT
            </span>
          </div>

          {/* Right Column (7 Cols): Editorial Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-[1.12] mb-6">
              Precision geodetics for Bangladesh&apos;s{" "}
              <span className="text-[#ea580c]">critical infrastructure.</span>
            </h3>

            <p className="text-base text-slate-600 leading-relaxed mb-5 font-normal">
              Geospatial Works is an accredited 1st Class engineering consultancy headquartered in Dhaka.
              We bridge high-precision geodetic field instrumentation with enterprise spatial analytics, supporting
              Bangladesh&apos;s most demanding bridges, expressways, industrial economic zones, and delta floodplains.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed mb-8 font-normal">
              Our multidisciplinary engineering teams integrate dual-frequency RTK GNSS baselines,
              acoustic riverbed sounding, and enterprise PostGIS geodatabases compliant with national
              LGED, BWDB, and RHD standards.
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#ea580c] hover:text-[#c2410c] transition group font-mono uppercase"
              >
                <span>View Complete Project Archive (31)</span>
                <ArrowRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-[#ea580c] transition group font-mono uppercase"
              >
                <span>Inspect Calibrated Fleet</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Technical Statistics: Separated by 1px rules, ZERO Box Containers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-10 border-y border-slate-200">
          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              12+
            </span>
            <strong className="text-xs font-mono font-bold text-slate-900 block mt-2 uppercase">
              Years of Practice
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              National infrastructure surveys
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              31
            </span>
            <strong className="text-xs font-mono font-bold text-slate-900 block mt-2 uppercase">
              Works Completed
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              Government &amp; private sector
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              64
            </span>
            <strong className="text-xs font-mono font-bold text-slate-900 block mt-2 uppercase">
              Districts Mapped
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              Nationwide rapid deployment
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              100%
            </span>
            <strong className="text-xs font-mono font-bold text-slate-900 block mt-2 uppercase">
              SOB Datum Certified
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              Survey of Bangladesh accuracy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
