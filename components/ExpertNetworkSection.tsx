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
    <section id="trust" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal Monograph Style (Zero Extra Paragraphs) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-10 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284c7] block mb-1">
              • Endorsements
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Strategic Partner Endorsements
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 self-start sm:self-end">
            GOVERNMENT &amp; MULTINATIONAL EPC CONTRACTORS
          </span>
        </div>

        {/* Testimonial Spread: Sharp Portrait on Left + Quote on Right (Zero Extra Paragraphs) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-center mb-14 sm:mb-16">
          <div className="md:col-span-4 relative flex items-center justify-center">
            <div className="relative w-56 h-68 sm:w-64 sm:h-76 bg-slate-900 border border-slate-300 rounded-none overflow-hidden shadow-xs">
              <Image
                src="/field-surveyor-v2.webp"
                alt="Principal Geodetic Surveyor"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-[center_80%] rounded-none"
              />
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col justify-center">
            <Quote className="w-10 h-10 text-[#0284c7] mb-4 opacity-80" />
            <blockquote className="text-base sm:text-2xl text-slate-900 font-bold leading-relaxed mb-6 font-serif">
              &ldquo;Geospatial Works delivered exceptional sub-centimeter RTK baselines and high-density GCP grids across all 64 districts. Strict adherence to Survey of Bangladesh datum calibration and rapid field mobilization makes them an invaluable technical partner.&rdquo;
            </blockquote>

            <div className="flex items-center justify-between pt-6 border-t border-slate-200 flex-wrap gap-4 font-mono text-xs">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase">
                  Md. Mahfuzur Rahman
                </h3>
                <span className="text-xs text-[#0284c7] font-semibold block mt-0.5">
                  Chief Geodetic Consultant &amp; Survey Director
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-300 rounded-none">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% SOB DATUM CERTIFIED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Grid */}
        <div className="pt-8 border-t border-slate-200">
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-slate-400 block mb-5">
            VERIFIED CONTRACTOR &amp; CONSULTANCY PARTNER FOR:
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-px bg-slate-200 border border-slate-200">
            {partnerLogos.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white p-4 flex items-center justify-center h-20 group transition-all"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={110}
                  height={45}
                  className="max-h-9 max-w-[85px] w-auto object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 rounded-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
