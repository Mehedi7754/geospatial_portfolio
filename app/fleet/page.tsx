"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { equipmentData } from "@/data/companyData";
import {
  ArrowLeft,
  Radio,
  Plane,
  Compass,
  Waves,
  Cpu,
  Wrench,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function FleetPage() {
  const [activeCategory, setActiveCategory] = useState("All Fleet");

  const categories = [
    "All Fleet",
    "GNSS & Positioning",
    "UAV & Drones",
    "Optical & Survey",
    "Hydrography",
    "High-Performance Computing",
  ];

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
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <Navbar />

      <main className="pt-28 pb-24">
        {/* Header */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#0284c7] transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Portfolio</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#0284c7] block mb-2">
                CALIBRATED FIELD HARDWARE • SOB BENCHMARKS
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
                Calibrated Field Fleet &amp; Workstations
              </h1>
              <p className="mt-2 text-slate-500 text-sm max-w-2xl leading-relaxed">
                High-precision geodetic GNSS receivers, 1-second total stations, LiDAR-ready drones, and multi-threaded spatial computing workstations.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 self-start lg:self-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-none font-mono font-bold transition-all ${
                    activeCategory === cat
                      ? "bg-[#0284c7] text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Fleet Grid */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEquipment.map((eq, idx) => {
              const Icon = getCategoryIcon(eq.category);
              const instrumentPhoto = fleetImages[eq.name] || "/assets/showcase/chcnav-i83-rtk-gnss.jpg";
              const isCutout =
                eq.category === "Optical & Survey" ||
                eq.name.includes("Total Station") ||
                eq.name.includes("Optical Level") ||
                eq.name.includes("Echo Sounder") ||
                eq.name.includes("RTK GNSS");

              return (
                <div
                  key={idx}
                  className="group rounded-none bg-white border border-slate-300 hover:border-slate-900 transition-all duration-300 shadow-xs overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div
                      className={`relative aspect-[16/10] overflow-hidden rounded-none ${
                        isCutout ? "bg-gradient-to-b from-slate-50 to-sky-50/30" : "bg-slate-100"
                      }`}
                    >
                      <Image
                        src={instrumentPhoto}
                        alt={eq.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={
                          isCutout
                            ? "object-contain p-4 group-hover:scale-105 transition-transform duration-300 rounded-none"
                            : "object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-none"
                        }
                      />
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-none bg-slate-900/90 text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                        {eq.category}
                      </div>

                      <div className="absolute top-3 right-3 px-2 py-0.5 rounded-none bg-white font-mono text-[11px] font-bold text-slate-900 border border-slate-300">
                        {eq.quantity}
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#0284c7] transition-colors leading-snug mb-1">
                        {eq.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 block mb-3">
                        Model: {eq.model} • Origin: {eq.origin}
                      </span>

                      <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-none border border-slate-200 leading-relaxed font-mono">
                        {eq.keySpecs.join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                      <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Ready for Field Dispatch
                      </span>
                      <span className="font-semibold text-[#0284c7]">
                        SOB Calibrated
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

