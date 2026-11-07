"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  Layers,
  Compass,
  Plane,
  Database,
  Waves,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";

interface Discipline {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  deliverables: string[];
  techStack: string[];
}

const disciplines: Discipline[] = [
  {
    id: "topographic",
    num: "01",
    title: "Topographic & Geodetic Baseline Survey",
    subtitle: "Sub-centimeter contour mapping, DEM/DSM & SOB baseline establishment",
    description:
      "Sub-centimeter terrain, elevation, contour, and site feature mapping for bridges, highways, and national infrastructure tied to Survey of Bangladesh datum.",
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
    num: "02",
    title: "UAV Aerial Photogrammetry & 3D Modeling",
    subtitle: "Sub-3cm GSD true orthomosaics, 3D mesh & volumetric cut/fill",
    description:
      "High-resolution drone orthomosaics, 3D terrain reconstruction, dense point clouds, and volumetric earthwork computations for industrial zones.",
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
    num: "03",
    title: "Construction Site Setting-Out & Pier Layout",
    subtitle: "Sub-millimeter pier, axis & highway corridor setting-out",
    description:
      "Exact field marking for bridge piers, building columns, highway alignments, and right-of-way boundaries adhering to strict engineering tolerances.",
    image: "/assets/showcase/engineering-site-investigation.png",
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
    num: "04",
    title: "Bathymetric Riverbed Sounding & Hydrography",
    subtitle: "Dual-frequency acoustic depth sounding & riverbed morphology",
    description:
      "Underwater riverbed acoustic depth profiling, cross-section sounding, and hydrodynamic modeling for flood mitigation and dredging plans.",
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
    num: "05",
    title: "Enterprise GIS Databases & Spatial Portals",
    subtitle: "PostgreSQL/PostGIS geodatabases & interactive web portals",
    description:
      "Custom GIS development, relational PostGIS database architectures, and interactive web mapping portals for municipalities and utility networks.",
    image: "/assets/showcase/badc-irrigation-gis-project.jpg",
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
    num: "06",
    title: "Satellite Remote Sensing & Regional NDVI",
    subtitle: "Multi-temporal NDVI vegetation health & regional land cover analysis",
    description:
      "Satellite imagery analysis, multi-temporal NDVI vegetation health mapping, and regional land cover change monitoring for agricultural and environmental planning.",
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
  const [activeIdx, setActiveIdx] = useState(0);
  const [modalDiscipline, setModalDiscipline] = useState<Discipline | null>(null);

  const activeSvc = disciplines[activeIdx];

  return (
    <section id="services" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-slate-100">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
            CORE CAPABILITIES • 06 DISCIPLINES
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            Engineering &amp; Survey Disciplines
          </h2>
          <p className="mt-2 text-slate-500 text-sm sm:text-base leading-relaxed">
            Integrated technical solutions from sub-millimeter field staking to nationwide spatial database architecture.
          </p>
        </div>

        {/* Link-Type Interactive Showcase (Split Visual + Fluid Link Rows) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (5 Cols): Dynamic High-Res Photo Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden bg-slate-950 shadow-2xl">
              <Image
                src={activeSvc.image}
                alt={activeSvc.title}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-orange-400 block mb-1">
                  Active Discipline {activeSvc.num}
                </span>
                <h3 className="text-lg sm:text-xl font-black leading-snug">
                  {activeSvc.title}
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                  {activeSvc.subtitle}
                </p>

                <button
                  type="button"
                  onClick={() => setModalDiscipline(activeSvc)}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#ea580c] transition"
                >
                  <span>Inspect Deliverables &amp; Tech Stack</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Seamless Link-Type List */}
          <div className="lg:col-span-7 divide-y divide-slate-100">
            {disciplines.map((svc, idx) => {
              const isActive = idx === activeIdx;

              return (
                <div
                  key={svc.id}
                  onMouseEnter={() => setActiveIdx(idx)}
                  onClick={() => setModalDiscipline(svc)}
                  className={`py-6 cursor-pointer transition-all duration-300 group flex items-start justify-between gap-4 ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-1.5">
                      <span
                        className={`text-xs font-mono font-bold transition-colors ${
                          isActive ? "text-[#ea580c]" : "text-slate-400 group-hover:text-[#ea580c]"
                        }`}
                      >
                        {svc.num}
                      </span>
                      <h3
                        className={`text-lg sm:text-2xl font-black tracking-tight transition-colors ${
                          isActive ? "text-[#ea580c]" : "text-[#0f172a] group-hover:text-[#ea580c]"
                        }`}
                      >
                        {svc.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl pl-8">
                      {svc.subtitle}
                    </p>
                  </div>

                  <div className="pt-2 flex-shrink-0">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-[#ea580c] text-white"
                          : "bg-slate-100 text-slate-400 group-hover:bg-[#ea580c] group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Deliverables Modal */}
      {modalDiscipline && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setModalDiscipline(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-mono uppercase tracking-wider text-[#ea580c] block mb-1">
              Discipline {modalDiscipline.num} Specifications
            </span>
            <h3 className="text-2xl font-black text-[#0f172a] tracking-tight mb-2">
              {modalDiscipline.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {modalDiscipline.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Key Deliverables &amp; Formats
              </h4>
              <ul className="space-y-2 text-xs">
                {modalDiscipline.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Hardware &amp; Software Stack
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {modalDiscipline.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setModalDiscipline(null)}
                className="text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <Link
                href="#contact"
                onClick={() => setModalDiscipline(null)}
                className="px-6 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-full transition shadow-md"
              >
                Inquire This Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
