"use client";

import React from "react";
import Image from "next/image";
import { Quote, ShieldCheck } from "lucide-react";

interface PartnerLogo {
  src: string;
  name: string;
}

const partnerLogos: PartnerLogo[] = [
  { src: "/partners/partner_1.png", name: "EQMS" },
  { src: "/partners/partner_2.webp", name: "DNCC" },
  { src: "/partners/partner_3.png", name: "CEGIS" },
  { src: "/partners/partner_4.png", name: "LGED" },
  { src: "/partners/partner_5.png", name: "BPDB" },
  { src: "/partners/partner_6.png", name: "BETS" },
  { src: "/partners/partner_7.png", name: "EPC" },
  { src: "/partners/partner_8.png", name: "Rajshahi University" },
];

export const ExpertNetworkSection: React.FC = () => {
  return (
    <section id="trust" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TROMA Style Minimal Header (NO Box Container) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
            What People Say
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            Strategic Partner Endorsements
          </h2>
        </div>

        {/* TROMA Style Testimonial (Sitting Directly on White Canvas, ZERO Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-20">
          {/* Authentic Portrait directly on canvas */}
          <div className="md:col-span-4 relative flex items-center justify-center">
            <div className="relative w-52 h-64 sm:w-64 sm:h-72 rounded-3xl overflow-hidden bg-slate-900 shadow-xl">
              <Image
                src="/field-surveyor-v2.webp"
                alt="Principal Geodetic Surveyor"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-[center_80%]"
              />
            </div>
          </div>

          {/* Quote & Speaker Info directly on canvas */}
          <div className="md:col-span-8 flex flex-col justify-center">
            <Quote className="w-12 h-12 text-[#ea580c] mb-4 opacity-75" />
            <blockquote className="text-base sm:text-2xl text-slate-900 font-bold leading-relaxed mb-6">
              &ldquo;Geospatial Works delivered exceptional sub-centimeter RTK baselines and high-density GCP grids across all 64 districts. Strict adherence to Survey of Bangladesh datum calibration and rapid field mobilization makes them an invaluable technical partner.&rdquo;
            </blockquote>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100 flex-wrap gap-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  Md. Mahfuzur Rahman
                </h4>
                <span className="text-xs text-[#ea580c] font-semibold block mt-0.5">
                  Chief Geodetic Consultant &amp; Survey Director
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% SOB Datum Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos directly on canvas (NO Card Box Containers) */}
        <div className="pt-10 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-6 text-center">
            Verified Contractor &amp; Geospatial Partner For
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 items-center">
            {partnerLogos.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center h-16 group transition-all"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={110}
                  height={45}
                  className="max-h-9 max-w-[85px] w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
