"use client";

import React, { useState } from "react";
import Image from "next/image";
import { equipmentData, Equipment } from "@/data/companyData";
import { 
  Radio, 
  Plane, 
  Crosshair, 
  Compass, 
  Cpu, 
  Waves, 
  CheckCircle, 
  ShieldCheck, 
  HardDrive,
  CpuIcon
} from "lucide-react";

export const EquipmentSection: React.FC = () => {
  const [filter, setFilter] = useState<string>("All");

  const categories = [
    "All",
    "GNSS & Positioning",
    "UAV & Drones",
    "Optical & Survey",
    "Hydrography",
    "High-Performance Computing"
  ];

  const filteredEquipment = filter === "All"
    ? equipmentData
    : equipmentData.filter((e) => e.category === filter);

  return (
    <section id="equipment" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Geospatial Grid */}
      <div className="absolute inset-0 geospatial-grid-dark opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Radio className="w-3.5 h-3.5 text-blue-400" />
            <span>Physical Resources & Technological Arsenal (Slides 42–44)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Advanced Surveying Fleet & <br />
            <span className="text-blue-400">High-Performance Infrastructure</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Geospatial Works owns and operates cutting-edge geodetic GNSS receivers, enterprise UAV platforms, optical leveling instruments, and computing clusters to guarantee sub-centimeter accuracy.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  filter === cat
                    ? "bg-[#0034a0] text-white shadow-md shadow-blue-900/50"
                    : "bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEquipment.map((eq) => (
            <div
              key={eq.name}
              className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden shadow-lg flex flex-col justify-between hover:border-blue-500/60 transition-all group"
            >
              <div>
                {/* Image Viewport */}
                <div className="relative h-56 w-full bg-slate-950 overflow-hidden border-b border-slate-700">
                  <Image
                    src={eq.image}
                    alt={eq.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/90 backdrop-blur-sm border border-slate-700 text-[11px] font-bold text-blue-300">
                    {eq.category}
                  </div>
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-emerald-600/90 text-white text-[11px] font-bold">
                    {eq.quantity}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {eq.name}
                    </h3>
                    <div className="text-xs text-slate-400 font-mono mt-1">
                      {eq.model} • {eq.origin}
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 border-t border-slate-700/60 pt-3">
                    {eq.keySpecs.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer status */}
              <div className="px-6 py-3 bg-slate-900/60 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Calibrated & Deployed
                </span>
                <span>Slide 42–44 Record</span>
              </div>
            </div>
          ))}
        </div>

        {/* Workstation Specification Highlight (Slide 44) */}
        <div className="mt-16 bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-slate-700">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider">
                <Cpu className="w-4 h-4" />
                <span>Computing Facilities & Photogrammetry Engine</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                High-Performance Digital Processing Cluster
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                Equipped with Intel Core i9 14th Gen, Core Ultra 7 K-series CPUs, 64GB DDR5 memory, NVIDIA RTX graphics, and 40TB centralized NAS for processing massive drone point clouds and satellite datasets.
              </p>
            </div>

            <div className="flex items-center gap-4 bg-slate-900/80 px-4 py-3 rounded-xl border border-slate-700 text-xs">
              <HardDrive className="w-6 h-6 text-red-400" />
              <div>
                <div className="font-bold text-white">40 TB Central NAS</div>
                <div className="text-slate-400">Enterprise High-Speed Archive</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/80 text-xs space-y-1">
              <div className="font-bold text-blue-400">Workstation 01</div>
              <div className="text-white font-medium">Intel Core i9 14th Gen K-Series</div>
              <div className="text-slate-400">64 GB DDR5 • NVIDIA RTX 4060 Ti</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/80 text-xs space-y-1">
              <div className="font-bold text-blue-400">Workstation 02</div>
              <div className="text-white font-medium">Intel Core i9 14th Gen K-Series</div>
              <div className="text-slate-400">64 GB DDR5 • NVIDIA RTX 4060 Ti</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/80 text-xs space-y-1">
              <div className="font-bold text-blue-400">Workstation 03</div>
              <div className="text-white font-medium">Intel Core Ultra 7 K-Series</div>
              <div className="text-slate-400">64 GB DDR5 • NVIDIA RTX 5060 Ti</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-700/80 text-xs space-y-1">
              <div className="font-bold text-blue-400">Workstation 04</div>
              <div className="text-white font-medium">Intel Core i7 14th Gen K-Series</div>
              <div className="text-slate-400">32 GB DDR5 • 40TB NAS Integration</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
