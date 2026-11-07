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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Left Column (5 Cols): High-Res Authentic Collaborative Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-square bg-slate-900 shadow-xl group">
              <Image
                src="/assets/showcase/engineering-site-investigation.png"
                alt="Geospatial Works engineers collaborating on infrastructure plans"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg flex items-center gap-3.5">
                <div className="p-2.5 rounded-xl bg-[#ea580c] text-white shrink-0">
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
              <span>1st Class Accredited Consultancy</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.12] mb-6">
              Leading Geospatial Agency For{" "}
              <span className="text-[#ea580c]">Your Infrastructure Solutions.</span>
            </h2>

            <p className="text-base text-slate-600 leading-relaxed mb-5">
              Geospatial Works is an accredited 1st Class engineering consultancy headquartered in Dhaka.
              We bridge high-precision geodetic field instrumentation with enterprise spatial analytics, supporting
              Bangladesh&apos;s most demanding bridges, expressways, industrial economic zones, and delta floodplains.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              Our multidisciplinary engineering teams integrate dual-frequency RTK GNSS baselines,
              acoustic riverbed sounding, and enterprise PostGIS geodatabases compliant with national
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

        {/* 4 Floating Stats (TROMA Minimal Style - Clean White Bar with Bold Orange Counters) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-10 rounded-3xl bg-[#fafafa] border border-slate-200/80 shadow-xs">
          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              12+
            </span>
            <strong className="text-sm font-bold text-slate-900 block mt-2">
              Years Experience
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              National engineering surveys
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              31
            </span>
            <strong className="text-sm font-bold text-slate-900 block mt-2">
              Projects Completed
            </strong>
            <span className="text-xs text-slate-500 block mt-0.5">
              Government &amp; private sector
            </span>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea580c] tracking-tight block">
              64
            </span>
            <strong className="text-sm font-bold text-slate-900 block mt-2">
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
            <strong className="text-sm font-bold text-slate-900 block mt-2">
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
