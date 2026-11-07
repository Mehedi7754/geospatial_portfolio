"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass } from "lucide-react";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-10 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284c7] block mb-1">
              • Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Why We&apos;re The Right Choice
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 self-start sm:self-end">
            ACCREDITED 1ST CLASS GEODETIC PRACTICE
          </span>
        </div>

        {/* 2-Column Monograph Layout (Matching TROMA Image 2 exactly, Zero Extra Paragraphs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-14 sm:mb-16">
          {/* Left Column (5 Cols): Sharp Team Photo */}
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
                <div className="p-2 bg-[#0284c7] text-white shrink-0 rounded-none">
                  <Compass className="w-4 h-4" />
                </div>
                <div className="font-mono text-xs">
                  <strong className="block font-bold">Survey of Bangladesh (SOB) Datum</strong>
                  <span className="text-[10px] text-slate-500">1st Class Geodetic Baseline Calibration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Concise Editorial Text (Matching TROMA Image 2) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-[1.12] mb-4">
              Leading Geospatial Agency <br />
              <span className="text-[#0284c7]">For Critical <span className="text-[#ea3829]">Infrastructure.</span></span>
            </h3>

            {/* Single Concise Statement (NO Extra Paragraphs) */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
              Accredited 1st Class geodetic consultancy headquartered in Dhaka, delivering millimeter field baseline control and enterprise spatial analytics for Bangladesh&apos;s major bridges, expressways, and floodplains.
            </p>

            {/* Quote Block (As in TROMA Image 2) */}
            <div className="p-4 border-l-2 border-[#0284c7] bg-slate-50 mb-6 font-sans">
              <p className="text-xs sm:text-sm text-slate-800 italic leading-relaxed">
                &ldquo;Strict adherence to Survey of Bangladesh datum calibration and rapid mobilization across all 64 districts.&rdquo;
              </p>
              <span className="text-xs font-mono font-bold text-slate-900 block mt-1.5 uppercase">
                — Md. Mahfuzur Rahman, Chief Geodetic Consultant
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 font-mono text-xs uppercase font-bold">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-[#0284c7] hover:text-[#0369a1] transition group"
              >
                <span>View Complete Archive (31)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 text-slate-700 hover:text-[#0284c7] transition group"
              >
                <span>Inspect Calibrated Fleet</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Technical Statistics: Separated by 1px rules, ZERO Box Containers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 py-8 border-y border-slate-200 font-mono">
          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#0284c7] tracking-tight block">
              12+
            </span>
            <strong className="text-xs font-bold text-slate-900 block mt-1.5 uppercase">
              Years of Practice
            </strong>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#0284c7] tracking-tight block">
              31
            </span>
            <strong className="text-xs font-bold text-slate-900 block mt-1.5 uppercase">
              Works Completed
            </strong>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#0284c7] tracking-tight block">
              64
            </span>
            <strong className="text-xs font-bold text-slate-900 block mt-1.5 uppercase">
              Districts Mapped
            </strong>
          </div>

          <div>
            <span className="text-3xl sm:text-5xl font-black text-[#ea3829] tracking-tight block">
              100%
            </span>
            <strong className="text-xs font-bold text-slate-900 block mt-1.5 uppercase">
              SOB Datum Certified
            </strong>
          </div>
        </div>
      </div>
    </section>
  );
};
