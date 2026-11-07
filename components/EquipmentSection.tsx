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
  TrendingUp,
  MapPin,
  Zap,
  Wrench,
  Award,
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

  // Authentic project photos for the 4 national impact benchmarks
  const impactMetrics = [
    {
      stat: "208.37",
      unit: "km²",
      title: "BADC Flagship Irrigation Survey",
      desc: "High-density survey covering 23 unions & 260 mouzas with NDVI analytics.",
      image: "/assets/showcase/badc-irrigation-gis-project.jpg",
      icon: TrendingUp,
    },
    {
      stat: "800+",
      unit: "km",
      title: "Precision Road & Corridor Alignments",
      desc: "Sub-centimeter road alignment & TBM benchmark setup for LGED & DTCA.",
      image: "/assets/showcase/gulshan-badda-road-project.jpg",
      icon: Compass,
    },
    {
      stat: "10,000+",
      unit: "GCPs",
      title: "Nationwide Control in All 64 Districts",
      desc: "Certified Ground Control Points across Bangladesh for Digital Land Zoning.",
      image: "/assets/showcase/national-gcp-network.jpg",
      icon: MapPin,
    },
    {
      stat: "100,000+",
      unit: "Poles",
      title: "BPDB Distribution Asset GIS",
      desc: "Surveyed & geodatabase-structured electrical distribution network assets.",
      image: "/assets/showcase/bpdb-distribution-network.jpg",
      icon: Zap,
    },
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
    <>
      {/* 1. National Impact & Standards Section - Visual Benchmarks */}
      <section id="standards" className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>National Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
              National impact. Precision standards.
            </h2>
            <p className="mt-2 text-slate-500 text-sm leading-relaxed">
              Verified spatial benchmarks and certified accuracy across Bangladesh&apos;s strategic sectors.
            </p>
          </div>

          {/* 4 Visual Metric Cards with Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-2xl bg-white border border-slate-200/80 hover:border-slate-900 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:shadow-lg"
                >
                  <div>
                    {/* Visual Photo Header */}
                    <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      <div className="absolute bottom-2.5 left-3 right-3 flex items-baseline gap-1 text-white">
                        <span className="text-2xl font-black tracking-tight">
                          {item.stat}
                        </span>
                        <span className="text-xs font-bold text-amber-400">
                          {item.unit}
                        </span>
                      </div>

                      <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-slate-950/80 text-amber-400 backdrop-blur-xs">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Calibrated Field Fleet - With Authentic Instrument Photography */}
      <section id="fleet" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3">
                <Wrench className="w-3.5 h-3.5 text-amber-600" />
                <span>Instrumentation Fleet</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
                Calibrated field fleet &amp; computing workstations.
              </h2>
              <p className="mt-2 text-slate-500 text-sm max-w-xl">
                Certified high-precision GNSS receivers, 1-second total stations, and mapping UAVs ready for deployment.
              </p>
            </div>

            {/* Minimal Filter Tabs */}
            <div className="flex flex-wrap gap-1.5 self-start lg:self-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`text-xs px-3 py-1 rounded-full font-semibold transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-[#0f172a] text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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
                  className="group rounded-2xl bg-white border border-slate-200/80 hover:border-slate-900 transition-all duration-300 hover:shadow-lg overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Instrument Image Container */}
                    <div className={`relative aspect-[16/10] overflow-hidden ${isCutoutInstrument ? "bg-gradient-to-b from-slate-50 to-slate-100/90" : "bg-slate-100"}`}>
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
                      <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/85 backdrop-blur-xs text-[10px] font-bold text-white uppercase tracking-wider">
                        {eq.category}
                      </div>

                      <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-xs text-[11px] font-bold text-slate-900 shadow-xs border border-slate-200/80">
                        {eq.quantity}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <h3 className="text-sm sm:text-base font-bold text-[#0f172a] leading-snug mb-0.5">
                        {eq.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 block mb-2.5">
                        Model: {eq.model} • Origin: {eq.origin}
                      </span>

                      <p className="text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60 leading-relaxed">
                        {eq.keySpecs.slice(0, 2).join(" • ")}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Ready for Dispatch
                      </span>
                      <span className="font-mono text-slate-400">
                        SOB Calibrated
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
