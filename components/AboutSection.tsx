"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Award, Globe, Compass, ShieldCheck } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-bold tracking-wider uppercase mb-3">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Corporate Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.12]">
            Where geodetic rigour meets{" "}
            <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
              enterprise infrastructure.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Geospatial Works is an accredited 1st Class engineering consultancy and geospatial contractor
            headquartered in Dhaka. We bridge high-precision field instrumentation with spatial analytics,
            supporting Bangladesh&apos;s most demanding bridges, expressways, industrial zones, and water
            resource projects.
          </p>
        </div>

        {/* 2-Column Split: Image on Left + Bento Cards on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (5 Cols): Authentic Field Photo with Floating Badges */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-slate-900 border border-slate-200/80 shadow-xl group">
              <Image
                src="/field-surveyor-v2.webp"
                alt="Surveyor operating geodetic GNSS instrument in Bangladesh delta floodplain"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Overlaid Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
                      Certified Geodetic Baseline
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Calibrated to Survey of Bangladesh (SOB) Datum
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): 4 Pillars of Excellence */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {/* Pillar 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-[#0f172a] mb-2">
                Millimeter Precision Standards
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Sub-centimeter geodetic baselines using 1-second total stations, digital barcode levels,
                and multi-constellation RTK rovers adhering to strict SOB and PWD benchmarks.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-black text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-[#0f172a] mb-2">
                Integrated Multi-Disciplinary Fleet
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless coordination between aerial drone photogrammetry, hydrographic acoustic bathymetry,
                and PostgreSQL/PostGIS spatial database architecture under one roof.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-black text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-[#0f172a] mb-2">
                Nationwide Field Mobilization
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active geodetic ground control and mobile field survey units across all 64 districts of
                Bangladesh with 24 to 48-hour rapid site deployment capabilities.
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-amber-400 hover:shadow-md transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center font-black text-sm mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-[#0f172a] mb-2">
                31+ Verified Deliverables
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Proven track record delivering verified digital surface models, CAD alignments, and
                certified land records for government ministries, city corporations, and international consultants.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
