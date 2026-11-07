"use client";

import React from "react";
import Image from "next/image";
import { Quote, CheckCircle2, ShieldCheck, Award } from "lucide-react";

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
    <section id="trust" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading (Matching Reference Design "What People Say") */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[11px] font-bold tracking-wider uppercase mb-3.5">
            <Award className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-3">
            What Our Partners Say
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
            Verified benchmarks and accuracy trusted by Bangladesh&apos;s leading government departments and engineering authorities.
          </p>
        </div>

        {/* Highlighted Testimonial Card (Matching Reference Design Testimonial Layout) */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#fafafa] border border-slate-200/80 p-6 sm:p-10 shadow-lg relative overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Column: Portrait with Warm Background (Matching Reference) */}
            <div className="md:col-span-4 relative flex items-center justify-center">
              <div className="relative w-44 h-52 sm:w-52 sm:h-60 rounded-2xl overflow-hidden bg-amber-400 border-4 border-white shadow-xl">
                <Image
                  src="/field-surveyor-v2.webp"
                  alt="Principal Surveyor"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Right Column: Quote & Credential */}
            <div className="md:col-span-8 flex flex-col justify-center">
              <Quote className="w-10 h-10 text-orange-300 mb-3" />
              <blockquote className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-6">
                &ldquo;Geospatial Works delivered exceptional sub-centimeter RTK baselines and high-density GCP grids across all 64 districts. Their commitment to strict Survey of Bangladesh (SOB) benchmarks and rapid field mobilization makes them an invaluable technical partner for mega-infrastructure.&rdquo;
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200/60 flex-wrap gap-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 leading-snug">
                    Md. Mahfuzur Rahman
                  </h4>
                  <span className="text-xs text-[#ea580c] font-semibold block">
                    Chief Geodetic Consultant &amp; Survey Director
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-bold border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>100% SOB Datum Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Strip (Clean Row of Government & Enterprise Logos) */}
        <div className="pt-6 border-t border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 text-center block mb-8">
            Trusted By Government Departments &amp; Leading Engineering Authorities
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
            {partnerLogos.map((partner, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-[#fafafa] border border-slate-200/60 hover:border-orange-300 transition-all duration-300 flex items-center justify-center h-20 group hover:shadow-xs"
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
