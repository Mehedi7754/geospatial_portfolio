"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Plane,
  Layers,
  Waves,
  Database,
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";

interface Discipline {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  num: string;
  code: string;
  title: string;
  spec: string;
  image: string;
  deliverables: string[];
  techStack: string[];
}

const disciplines: Discipline[] = [
  {
    id: "topographic",
    icon: Compass,
    num: "01",
    code: "GEO-01",
    title: "Topographic & Geodetic Baseline Survey",
    spec: "Sub-centimeter contour mapping, DEM/DSM & benchmark baselines",
    image: "/assets/showcase/total-station-instrument.png",
    deliverables: [
      "Digital Elevation & Surface Models (DEM/DSM)",
      "0.5m - 1.0m contour interval engineering maps",
      "Benchmark establishment tied to SOB/PWD datum",
      "Cross-sections and longitudinal corridor profiles",
    ],
    techStack: ["Hi-Target V200 RTK GNSS", "Sokkia Total Station", "AutoCAD Civil 3D"],
  },
  {
    id: "uav-mapping",
    icon: Plane,
    num: "02",
    code: "UAV-02",
    title: "UAV Aerial Photogrammetry & 3D Modeling",
    spec: "Sub-3cm GSD true orthomosaics, 3D mesh & volumetric cut/fill",
    image: "/assets/showcase/drone-uav-field-operation.png",
    deliverables: [
      "Sub-3cm GSD true orthomosaic digital maps",
      "Dense 3D point clouds (LAS/LAZ format)",
      "Volumetric cut & fill earthwork calculations",
      "High-resolution geo-referenced masterplans",
    ],
    techStack: ["DJI Phantom 4 RTK", "DJI Mavic 3 Enterprise", "Pix4D / Metashape"],
  },
  {
    id: "site-layout",
    icon: Layers,
    num: "03",
    code: "STK-03",
    title: "Construction Site Setting-Out & Pier Alignment",
    spec: "Sub-millimeter pier centerline staking & highway corridor RoW",
    image: "/construction-site.png",
    deliverables: [
      "Building axis and foundation centerlines with sub-mm tolerances",
      "Elevated viaduct pier locations for expressway projects",
      "Highway horizontal & vertical curve geometry setting",
      "As-built structural deviation and settlement logs",
    ],
    techStack: ["1-Second Total Station", "Digital Barcode Level", "AutoCAD Civil 3D"],
  },
  {
    id: "bathymetry",
    icon: Waves,
    num: "04",
    code: "HYD-04",
    title: "Bathymetric Riverbed Sounding & Hydrography",
    spec: "Dual-frequency acoustic depth sounding & HEC-RAS 2D modeling",
    image: "/assets/showcase/river-bathymetry-sounding.jpg",
    deliverables: [
      "High-precision acoustic riverbed depth contour maps",
      "HEC-RAS 1D/2D hydraulic hydrodynamic model cross-sections",
      "Embankment scour vulnerability and dredging estimates",
      "Bridge pier hydraulic clearance documentation",
    ],
    techStack: ["Dual-Frequency Echo Sounder", "Hydrographic GPS Beacon", "HYPACK"],
  },
  {
    id: "gis-mapping",
    icon: Database,
    num: "05",
    code: "GIS-05",
    title: "Enterprise GIS & Geodatabase Architecture",
    spec: "Relational PostgreSQL/PostGIS spatial databases & web dashboards",
    image: "/inner/gis-analyst.webp",
    deliverables: [
      "PostgreSQL/PostGIS relational geodatabases",
      "Multi-criteria spatial suitability models",
      "Interactive web GIS dashboards (Leaflet/Mapbox)",
      "Digitized utility networks and municipal assets",
    ],
    techStack: ["ArcGIS Pro", "QGIS Desktop", "PostgreSQL / PostGIS", "Python"],
  },
  {
    id: "remote-sensing",
    icon: Activity,
    num: "06",
    code: "RS-06",
    title: "Satellite Remote Sensing & Regional NDVI",
    spec: "Multi-temporal NDVI vegetation health & flood extent mapping",
    image: "/assets/showcase/satellite-remote-sensing.png",
    deliverables: [
      "Multi-temporal NDVI vegetation health maps",
      "Surface water body index & flood extent mapping",
      "Urban sprawl & land use land cover (LULC) classification",
      "High-resolution multispectral band processing",
    ],
    techStack: ["Sentinel-2 / Landsat-8", "ArcGIS Spatial Analyst", "Google Earth Engine"],
  },
];

export const ServicesSection: React.FC = () => {
  const [modalDiscipline, setModalDiscipline] = useState<Discipline | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Minimal Monograph Style (Zero Extra Paragraphs) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 mb-10 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea580c] block mb-1">
              • Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Engineering Disciplines
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 self-start sm:self-end">
            CALIBRATED TO SURVEY OF BANGLADESH DATUM
          </span>
        </div>

        {/* 6-Item Architectural Grid (ZERO Paragraph Clutter) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {disciplines.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setModalDiscipline(item)}
                className="group cursor-pointer flex flex-col items-start border-t border-slate-200 pt-5"
              >
                <div className="w-full flex items-center justify-between mb-3 font-mono">
                  <span className="text-xs font-bold text-[#ea580c]">
                    // {item.code}
                  </span>
                  <div className="w-9 h-9 bg-slate-100 group-hover:bg-[#ea580c] text-slate-700 group-hover:text-white transition-colors flex items-center justify-center rounded-none">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-500 font-normal leading-relaxed mb-3">
                  {item.spec}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors mt-auto uppercase">
                  <span>Deliverables &amp; Specs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Discipline Modal */}
      {modalDiscipline && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-none shadow-2xl border border-slate-900 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-48 sm:h-56 bg-slate-900 border-b border-slate-200 rounded-none">
              <Image
                src={modalDiscipline.image}
                alt={modalDiscipline.title}
                fill
                className="object-cover rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2 py-0.5 bg-[#ea580c] text-[10px] font-mono font-bold text-white uppercase tracking-wider mb-2 inline-block rounded-none">
                  [ {modalDiscipline.code} ]
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  {modalDiscipline.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setModalDiscipline(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900 text-white transition border border-white/20 rounded-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Verified Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {modalDiscipline.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-none font-mono"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Calibrated Instrumentation &amp; Software
                </h4>
                <div className="flex flex-wrap gap-2">
                  {modalDiscipline.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-xs font-mono font-medium bg-slate-100 text-slate-800 border border-slate-200 rounded-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
                <Link
                  href="/projects"
                  onClick={() => setModalDiscipline(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition rounded-none"
                >
                  <span>RELATED WORKS (31)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setModalDiscipline(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition rounded-none"
                >
                  <span>REQUEST RFQ BRIEF</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
