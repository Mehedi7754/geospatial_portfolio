"use client";

import React from "react";
import Image from "next/image";

interface Partner {
  src: string;
  alt: string;
  name: string;
}

const partners: Partner[] = [
  { src: "/partners/partner_1.png", alt: "EQMS logo", name: "EQMS" },
  { src: "/partners/partner_2.webp", alt: "Dhaka North City Corporation logo", name: "DNCC" },
  { src: "/partners/partner_3.png", alt: "CEGIS logo", name: "CEGIS" },
  { src: "/partners/partner_4.png", alt: "LGED logo", name: "LGED" },
  { src: "/partners/partner_5.png", alt: "Bangladesh Power Development Board logo", name: "BPDB" },
  { src: "/partners/partner_6.png", alt: "BETS logo", name: "BETS Consulting" },
  { src: "/partners/partner_7.png", alt: "Engineering & Planning Consultants logo", name: "EPC" },
  { src: "/partners/partner_8.png", alt: "Rajshahi University logo", name: "Rajshahi University" },
];

export const StatsStrip: React.FC = () => {
  return (
    <section
      id="partners"
      aria-label="Trusted by Government Departments and Private Enterprises"
      className="w-full py-10 md:py-14 bg-slate-50/70 border-b border-slate-200/80 overflow-hidden relative"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-slate-500">
          Trusted by Government Departments &amp; Leading Engineering Enterprises
        </span>
      </div>

      {/* Infinite Horizontal Logo Marquee */}
      <div className="relative w-full overflow-hidden mask-marquee">
        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-4 sm:gap-6 px-4">
          {/* First loop of partner cards */}
          {partners.map((partner, idx) => (
            <div
              key={`p1-${idx}`}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-2xs hover:shadow-md hover:border-amber-400 transition-all duration-300 py-3.5 px-6 flex items-center justify-center min-w-[180px] h-[90px] group flex-shrink-0"
            >
              <Image
                alt={partner.alt}
                loading="lazy"
                src={partner.src}
                width={140}
                height={55}
                className="max-h-[48px] max-w-[130px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}

          {/* Second duplicate loop for seamless continuous scrolling */}
          {partners.map((partner, idx) => (
            <div
              key={`p2-${idx}`}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-2xs hover:shadow-md hover:border-amber-400 transition-all duration-300 py-3.5 px-6 flex items-center justify-center min-w-[180px] h-[90px] group flex-shrink-0"
              aria-hidden="true"
            >
              <Image
                alt={partner.alt}
                loading="lazy"
                src={partner.src}
                width={140}
                height={55}
                className="max-h-[48px] max-w-[130px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}

          {/* Third duplicate loop for wide monitors */}
          {partners.map((partner, idx) => (
            <div
              key={`p3-${idx}`}
              className="bg-white border border-slate-200/80 rounded-2xl shadow-2xs hover:shadow-md hover:border-amber-400 transition-all duration-300 py-3.5 px-6 flex items-center justify-center min-w-[180px] h-[90px] group flex-shrink-0"
              aria-hidden="true"
            >
              <Image
                alt={partner.alt}
                loading="lazy"
                src={partner.src}
                width={140}
                height={55}
                className="max-h-[48px] max-w-[130px] w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
