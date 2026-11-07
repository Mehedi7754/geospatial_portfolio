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
  tag: string;
  category: "all" | "survey" | "aerial" | "gis";
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
    tag: "GEODETIC SURVEY",
    category: "survey",
    title: "Topographic & Geodetic Baseline Survey",
    spec: "Sub-centimeter contour mapping, DEM/DSM & national benchmark baselines",
    image: "/field-surveyor-v2.webp",
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
    tag: "AERIAL SURVEY",
    category: "aerial",
    title: "UAV Aerial Photogrammetry & 3D Mesh",
    spec: "Sub-3cm GSD true orthomosaics, 3D point clouds & volumetric cut/fill",
    image: "/inner/drone-fields.webp",
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
    tag: "INFRASTRUCTURE",
    category: "survey",
    title: "Corridor Staking & Pier Axis Alignment",
    spec: "Sub-millimeter pier centerline staking & highway corridor RoW setting",
    image: "/inner/bridge-aerial.webp",
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
    tag: "HYDROGRAPHY",
    category: "aerial",
    title: "Riverbed Bathymetry & Hydrographic Sounding",
    spec: "Dual-frequency acoustic depth sounding & HEC-RAS hydrodynamic modeling",
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
    tag: "SPATIAL GIS",
    category: "gis",
    title: "Enterprise PostGIS & Utility Asset GIS",
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
    tag: "REMOTE SENSING",
    category: "gis",
    title: "Satellite Remote Sensing & Regional NDVI",
    spec: "Multi-temporal NDVI vegetation health & delta flood extent mapping",
    image: "/assets/showcase/badc-irrigation-gis-project.jpg",
    deliverables: [
      "Multi-temporal NDVI vegetation health maps",
      "Surface water body index & flood extent mapping",
      "Urban sprawl & land use land cover (LULC) classification",
      "High-resolution multispectral band processing",
    ],
    techStack: ["Sentinel-2 / Landsat-8", "ArcGIS Spatial Analyst", "Google Earth Engine"],
  },
];

const categoryTabs = [
  { id: "all", label: "All Capabilities (6)" },
  { id: "survey", label: "Geodetic & Infra" },
  { id: "aerial", label: "UAV & Hydro" },
  { id: "gis", label: "Spatial GIS" },
];

export const ServicesSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [modalDiscipline, setModalDiscipline] = useState<Discipline | null>(null);

  const filteredDisciplines =
    activeFilter === "all"
      ? disciplines
      : disciplines.filter((d) => d.category === activeFilter);

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#fafafa] border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Custom Image-Type Layout: Left Editorial Typography + Right Photographic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (4 Cols): Bold Headline, Note & Button (Matching Reference Image) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-[#ea580c] uppercase mb-5">
              <span>/ DISCIPLINES</span>
              <span className="w-12 h-[1px] bg-slate-300" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0f172a] tracking-tight leading-[1.05] mb-5">
              Real <br />
              landscapes. <br />
              <span className="text-[#ea580c]">Real</span> <br />
              <span className="text-[#ea580c]">impact.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mb-6 font-normal">
              A selection of our core engineering capabilities across geodetic surveying, drone photogrammetry, hydrography, and spatial analytics.
            </p>

            <div className="mb-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-slate-900 bg-white hover:bg-slate-900 text-slate-900 hover:text-white text-xs font-mono font-bold transition rounded-none uppercase tracking-wider group shadow-xs"
              >
                <span>Inquire Disciplines</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Category Filter Switcher */}
            <div className="pt-5 border-t border-slate-200">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-2.5">
                FILTER DISCIPLINES:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-3 py-1.5 text-[11px] font-bold uppercase transition rounded-none cursor-pointer ${
                      activeFilter === tab.id
                        ? "bg-[#ea580c] text-white"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (8 Cols): Image-Type Cards (Exact Reference Design) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredDisciplines.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setModalDiscipline(item)}
                  className="group cursor-pointer relative aspect-[3/4] sm:aspect-[4/5] w-full bg-slate-950 border border-slate-300 rounded-none overflow-hidden shadow-xs hover:border-slate-900 transition-all duration-500 flex flex-col justify-end"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Deep Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/35 to-transparent" />

                  {/* Caption Overlay (Matching User's Reference Screenshot) */}
                  <div className="relative p-4 sm:p-5 z-10 text-white w-full">
                    {/* White Tag Pill at Bottom-Left */}
                    <span className="inline-block px-2.5 py-1 bg-white text-slate-900 text-[10px] font-mono font-bold uppercase tracking-wider mb-2 rounded-none shadow-xs">
                      {item.tag}
                    </span>

                    {/* Title with Arrow */}
                    <div className="flex items-end justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                        {item.title}
                      </h3>
                      <span className="shrink-0 text-white group-hover:text-[#ea580c] group-hover:translate-x-1 transition-all mb-0.5">
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
                <span className="px-2 py-0.5 bg-white text-slate-900 text-[10px] font-mono font-bold uppercase tracking-wider mb-2 inline-block rounded-none">
                  {modalDiscipline.tag}
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
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Standard &amp; Scope
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {modalDiscipline.spec}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Delivered Engineering Data Assets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {modalDiscipline.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-start gap-2 rounded-none"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Field Instrumentation &amp; Processing
                </h4>
                <div className="flex flex-wrap gap-2">
                  {modalDiscipline.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-slate-100 text-slate-800 font-mono text-xs font-bold border border-slate-200 rounded-none"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
                <Link
                  href="/fleet"
                  onClick={() => setModalDiscipline(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition rounded-none"
                >
                  <span>CALIBRATED HARDWARE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setModalDiscipline(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition rounded-none"
                >
                  <span>INQUIRE THIS DISCIPLINE</span>
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
