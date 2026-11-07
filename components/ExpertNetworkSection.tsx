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
    <section id="trust" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Editorial Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 pb-6 border-b border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
            GOVERNMENT &amp; ENTERPRISE ENDORSEMENTS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            What Our Strategic Partners Say
          </h2>
        </div>

        {/* Minimal Testimonial Card (TROMA / BuildGo Style - Clean Light Canvas) */}
        <div className="rounded-3xl bg-[#fafafa] border border-slate-200/80 p-8 sm:p-14 shadow-xs relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Authentic Portrait */}
            <div className="md:col-span-4 relative flex items-center justify-center">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-900 shadow-md border border-slate-200">
                <Image
                  src="/field-surveyor-v2.webp"
                  alt="Principal Geodetic Surveyor"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-[center_80%]"
                />
              </div>
            </div>

            {/* Right Column: Quote & Credential */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <Quote className="w-10 h-10 text-[#ea580c] mb-4 opacity-80" />
              <blockquote className="text-base sm:text-xl text-slate-800 font-medium leading-relaxed mb-6">
                &ldquo;Geospatial Works delivered exceptional sub-centimeter RTK baselines and high-density GCP grids across all 64 districts. Their strict adherence to Survey of Bangladesh datum calibration and rapid field mobilization makes them an invaluable technical partner for mega-infrastructure.&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200/80 flex-wrap gap-4">
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
        </div>

        {/* Client Logos Strip (Seamless Minimal Row) */}
        <div>
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-6">
            Verified Contractor &amp; Geospatial Partner For
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
            {partnerLogos.map((partner, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-white border border-slate-100 hover:border-orange-200 hover:shadow-sm transition-all duration-300 flex items-center justify-center h-20 group"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={110}
                  height={45}
                  className="max-h-10 max-w-[90px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
