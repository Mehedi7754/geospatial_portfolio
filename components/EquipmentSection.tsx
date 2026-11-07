"use client";

import React, { useState } from "react";
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

  const impactMetrics = [
    {
      stat: "208.37",
      unit: "km²",
      title: "BADC Flagship Irrigation Survey",
      desc: "High-density survey covering 23 unions & 260 mouzas with NDVI analytics.",
      icon: TrendingUp,
    },
    {
      stat: "800+",
      unit: "km",
      title: "Precision Road & Corridor Alignments",
      desc: "Sub-centimeter road alignment & TBM benchmark setup for LGED & DTCA.",
      icon: Compass,
    },
    {
      stat: "10,000+",
      unit: "GCPs",
      title: "Nationwide Control in All 64 Districts",
      desc: "Certified Ground Control Points across Bangladesh for Digital Land Zoning.",
      icon: MapPin,
    },
    {
      stat: "100,000+",
      unit: "Poles",
      title: "BPDB Distribution Asset GIS",
      desc: "Surveyed & geodatabase-structured electrical distribution network assets.",
      icon: Zap,
    },
  ];

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
      {/* 1. National Impact & Standards Section - Minimal & Clean */}
      <section id="standards" className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
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

          {/* 4 Clean Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactMetrics.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-slate-900 transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 rounded-xl bg-slate-50 text-slate-700">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400">
                        #{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1.5 mb-2">
                      <span className="text-3xl font-black text-[#0f172a] tracking-tight">
                        {item.stat}
                      </span>
                      <span className="text-sm font-bold text-amber-600">
                        {item.unit}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Calibrated Field Fleet - Minimal & Free of Clutter */}
      <section id="fleet" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
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

          {/* Minimal Fleet Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredEquipment.map((eq, idx) => {
              const Icon = getCategoryIcon(eq.category);

              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-slate-50/60 border border-slate-200/80 hover:border-slate-900 p-5 transition-all duration-200 hover:bg-white hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {/* Header Row: Icon + Quantity */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="p-2 rounded-xl bg-white border border-slate-200 text-slate-800">
                        <Icon className="w-4 h-4 text-amber-600" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-700">
                        {eq.quantity}
                      </span>
                    </div>

                    {/* Name & Model */}
                    <h3 className="text-sm font-bold text-[#0f172a] leading-snug">
                      {eq.name}
                    </h3>
                    <span className="text-[11px] font-mono text-slate-400 block mb-3">
                      Model: {eq.model} • Origin: {eq.origin}
                    </span>

                    {/* Key Spec Line (1-line highlight instead of endless bullet points) */}
                    <p className="text-xs text-slate-600 bg-white/80 p-2.5 rounded-xl border border-slate-200/60 mb-3 leading-relaxed">
                      {eq.keySpecs.slice(0, 2).join(" • ")}
                    </p>
                  </div>

                  {/* Clean Status Footer */}
                  <div className="pt-2.5 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Ready for Dispatch
                    </span>
                    <span className="font-mono text-slate-400">
                      SOB Datum Calibrated
                    </span>
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
