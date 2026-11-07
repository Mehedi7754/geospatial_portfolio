"use client";

import React, { useState } from "react";
import Image from "next/image";
import { equipmentData } from "@/data/companyData";
import {
  Radio,
  Plane,
  Compass,
  Waves,
  Cpu,
  Wrench,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export const EquipmentSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All Fleet");

  const categories = [
    "All Fleet",
    "GNSS & Positioning",
    "UAV & Drones",
    "Optical & Survey",
    "Hydrography",
    "High-Performance Computing",
  ];

  // Real verified instrumentation images matching company profile
  const fleetImages: Record<string, string> = {
    "CHCNAV i83 RTK GNSS Receivers": "/assets/showcase/chcnav-i83-rtk-gnss.jpg",
    "DJI Enterprise UAV Fleet": "/assets/showcase/drone-uav-field-operation.png",
    "Precision Total Stations": "/assets/showcase/total-station-instrument.png",
    "Automatic Optical Levels": "/assets/showcase/optical-level-instrument.png",
    "Hydrographic Echo Sounder": "/assets/showcase/echo-sounder-d270.png",
    "GIS Workstations & Computing": "/assets/showcase/spatial-data-analytics.png",
  };

  const filteredEquipment =
    activeCategory === "All Fleet"
      ? equipmentData
      : equipmentData.filter((e) => e.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "GNSS & Positioning":
        return Radio;
      case "UAV & Drones":
        return Plane;
      case "Optical & Survey":
        return Compass;
      case "Hydrography":
        return Waves;
      default:
        return Cpu;
    }
  };

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-[#fafafa] border-b border-slate-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200/70 text-[#0284c7] text-[11px] font-bold tracking-wider uppercase mb-3">
              <Wrench className="w-3.5 h-3.5 text-[#0284c7]" />
              <span>Calibrated Fleet</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
              Calibrated field fleet &amp; computing workstations.
            </h2>
            <p className="mt-2 text-slate-500 text-xs sm:text-sm max-w-xl">
              Survey of Bangladesh certified GNSS receivers, 1-second total stations, and mapping UAVs ready for rapid field mobilization.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 self-start lg:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#0284c7] text-white shadow-md shadow-sky-500/20"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Fleet Cards with Real Instrument Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((eq, idx) => {
            const Icon = getCategoryIcon(eq.category);
            const instrumentPhoto = fleetImages[eq.name] || "/assets/showcase/chcnav-i83-rtk-gnss.jpg";
            const isCutoutInstrument =
              eq.category === "Optical & Survey" ||
              eq.name.includes("Total Station") ||
              eq.name.includes("Optical Level") ||
              eq.name.includes("Echo Sounder") ||
              eq.name.includes("RTK GNSS");

            return (
              <div
                key={idx}
                className="group rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Instrument Image Container */}
                  <div
                    className={`relative aspect-[16/10] overflow-hidden ${
                      isCutoutInstrument
                        ? "bg-gradient-to-b from-slate-50 to-sky-50/20"
                        : "bg-slate-100"
                    }`}
                  >
                    <Image
                      src={instrumentPhoto}
                      alt={eq.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={`${
                        isCutoutInstrument
                          ? "object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                          : "object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      }`}
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-xs text-[10px] font-bold text-white uppercase tracking-wider">
                      {eq.category}
                    </div>

                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold text-slate-900 shadow-xs border border-slate-200/80">
                      {eq.quantity}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-sm sm:text-base font-bold text-[#0f172a] group-hover:text-[#0284c7] transition-colors leading-snug mb-1">
                      {eq.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 block mb-3">
                      Model: {eq.model} • Origin: {eq.origin}
                    </span>

                    <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 leading-relaxed">
                      {eq.keySpecs.slice(0, 2).join(" • ")}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Ready for Field Dispatch
                    </span>
                    <span className="font-semibold text-[#0284c7]">
                      SOB Datum Certified
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
