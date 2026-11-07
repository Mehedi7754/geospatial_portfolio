"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, X } from "lucide-react";

interface LandmarkProject {
  id: string;
  code: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  client: string;
  location: string;
  benchmark: string;
  summary: string;
  deliverables: string[];
}

const landmarkProjects: LandmarkProject[] = [
  {
    id: "expressway",
    code: "PRJ-01",
    category: "bridges",
    title: "Dhaka–Ashulia Elevated Expressway",
    subtitle: "Sub-millimeter Pier Axis Alignment • SOB Datum",
    image: "/inner/bridge-aerial.webp",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
    benchmark: "Sub-millimeter Pier Axis Tolerance",
    summary:
      "Millimeter geodetic corridor control establishment, elevated viaduct pier centerline setting-out, and right-of-way topographic modeling for Bangladesh Bridge Authority.",
    deliverables: [
      "Sub-mm pier centerline geodetic coordinates",
      "Corridor longitudinal profile & cross-sections",
      "Right-of-Way (RoW) acquisition alignment CAD",
      "As-built pier displacement & structural settlement logs",
    ],
  },
  {
    id: "chittagong-ez",
    code: "PRJ-02",
    category: "uav",
    title: "Chittagong Economic Zone 3D Mesh",
    subtitle: "2.5cm GSD True Orthomosaic & Earthwork Grading",
    image: "/inner/drone-fields.webp",
    client: "BEZA Industrial Authority",
    location: "Mirsarai, Chattogram",
    benchmark: "2.5cm GSD True Orthomosaic",
    summary:
      "High-precision UAV photogrammetric aerial survey producing 2.5cm GSD true orthomosaics, dense 3D point clouds, and volumetric cut/fill earthwork computations for industrial development.",
    deliverables: [
      "2.5cm Ground Sampling Distance true orthomosaic",
      "Dense 3D point cloud & Digital Elevation Model (DEM)",
      "Volumetric cut & fill earthwork grading reports",
      "Masterplan plot demarcation and title boundary baselines",
    ],
  },
  {
    id: "sylhet-flood",
    code: "PRJ-03",
    category: "hydro",
    title: "Surma–Kushiyara Basin Riverbed Bathymetry",
    subtitle: "Dual-Frequency Acoustic Depth Sounding",
    image: "/assets/showcase/river-bathymetry-sounding.jpg",
    client: "Bangladesh Water Development Board (BWDB)",
    location: "Surma-Kushiyara Delta Basin",
    benchmark: "Acoustic Depth Sounding (SOB Datum)",
    summary:
      "Riverbed acoustic depth profiling, underwater morphology analysis, and hydraulic cross-section surveys supporting flood mitigation and riverbank protection works.",
    deliverables: [
      "Acoustic riverbed depth contour maps",
      "HEC-RAS 1D/2D hydraulic hydrodynamic model cross-sections",
      "Embankment scour vulnerability assessment sheets",
      "Dredging volume estimations & river channel logs",
    ],
  },
  {
    id: "badc-gis",
    code: "PRJ-04",
    category: "gis",
    title: "BADC Agricultural Information System",
    subtitle: "208.37 km² Spatial Geodatabase & Web-AIS",
    image: "/assets/showcase/badc-irrigation-gis-project.jpg",
    client: "Ministry of Agriculture / BADC",
    location: "23 Unions, 260 Mouzas",
    benchmark: "208.37 km² Spatial Geodatabase",
    summary:
      "Pilot irrigation water management geodatabase, river gauge monitoring, and web-based spatial agricultural database with multi-temporal NDVI vegetation analysis.",
    deliverables: [
      "208.37 km² high-density spatial geodatabase",
      "Interactive Web-AIS GIS portal with NDVI diagnostics",
      "River gauge and canal network monitoring benchmarks",
      "260 Mouzas boundary demarcation and land cover maps",
    ],
  },
  {
    id: "geodetic-control",
    code: "PRJ-05",
    category: "bridges",
    title: "Nationwide Geodetic Ground Control Network",
    subtitle: "All 64 Districts SOB Datum Baselines",
    image: "/assets/showcase/total-station-instrument.png",
    client: "Survey of Bangladesh (SOB) Datum",
    location: "All 64 Districts",
    benchmark: "1st Class Baseline Calibration",
    summary:
      "Establishment of high-precision RTK GNSS baselines and permanent ground control points (GCPs) tied to the official national datum across all divisions of Bangladesh.",
    deliverables: [
      "Permanent Ground Control Monument Coordinates (PBM)",
      "Differential GPS static baseline post-processing logs",
      "Survey of Bangladesh datum transformation matrices",
      "Cadastral overlay control benchmarks",
    ],
  },
  {
    id: "bpdb-gis",
    code: "PRJ-06",
    category: "gis",
    title: "BPDB Distribution Asset GIS & Mapping",
    subtitle: "PostgreSQL/PostGIS Utility Geodatabase",
    image: "/inner/gis-analyst.webp",
    client: "Power Development Board (BPDB)",
    location: "Chittagong & Sylhet Zones",
    benchmark: "PostGIS Enterprise Geodatabase",
    summary:
      "High-accuracy geospatial asset mapping and network topology modeling for electrical substations, distribution feeders, and customer meters in an enterprise GIS.",
    deliverables: [
      "PostgreSQL/PostGIS electrical feeder database",
      "High-resolution mobile GIS field audit logs",
      "Interactive asset inspection web portal",
      "Transformer load density spatial heatmaps",
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<LandmarkProject | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? landmarkProjects
      : landmarkProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header: Sharp Monograph Style */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 mb-10 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
              [ PORTFOLIO / SELECTED INFRASTRUCTURE WORKS ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Landmark Infrastructure Works
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 hover:text-[#ea580c] transition self-start sm:self-end group shrink-0"
          >
            <span>View Complete 31 Projects Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Monospaced Technical Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap mb-10 text-xs font-mono font-bold">
          {[
            { id: "all", label: "[ ALL (31) ]" },
            { id: "bridges", label: "[ BRIDGES & HIGHWAYS ]" },
            { id: "uav", label: "[ UAV PHOTOGRAMMETRY ]" },
            { id: "hydro", label: "[ RIVER BATHYMETRY ]" },
            { id: "gis", label: "[ SPATIAL GIS ]" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-3 py-1.5 transition-colors cursor-pointer rounded-none border ${
                selectedCategory === tab.id
                  ? "bg-slate-900 text-white border-slate-900"
                  : "bg-white text-slate-600 border-slate-200 hover:border-slate-400"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Editorial Works Grid: ZERO Border Radius on All Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Sharp Image Box with 0px Border Radius */}
              <div className="relative aspect-[16/11] w-full bg-slate-950 border border-slate-200 rounded-none overflow-hidden mb-4 shadow-2xs group-hover:border-slate-900 transition-colors">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center rounded-none transition-transform duration-700 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Corner Technical Code */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2 py-0.5 bg-slate-900/90 text-[10px] font-mono font-bold text-white uppercase rounded-none border border-white/10">
                    {proj.code}
                  </span>
                </div>

                {/* Hover arrow badge */}
                <div className="absolute bottom-3 right-3 z-10 w-8 h-8 bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-none shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Technical Metadata */}
              <div className="flex items-center justify-between text-[11px] font-mono text-[#ea580c] font-bold uppercase mb-1">
                <span>{proj.client}</span>
                <span className="text-slate-400 font-normal">{proj.location}</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1">
                {proj.title}
              </h3>

              <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2 mb-2">
                {proj.summary}
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-700 group-hover:text-[#ea580c] transition-colors mt-auto">
                <span>BENCHMARK: {proj.benchmark}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Editorial Footnote */}
        <div className="mt-14 pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <span>CATALOG: 31 COMPLETED &amp; ONGOING INFRASTRUCTURE WORKS ACROSS ALL 64 DISTRICTS</span>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-bold text-slate-900 hover:text-[#ea580c] transition uppercase"
          >
            <span>Open Complete Project Archive (31)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* Case Study Modal with Sharp Corners */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-none shadow-2xl border border-slate-900 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-56 sm:h-64 bg-slate-900 border-b border-slate-200 rounded-none">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-5 left-6 right-6">
                <span className="px-2 py-0.5 bg-[#ea580c] text-[10px] font-mono font-bold uppercase tracking-wider text-white inline-block mb-2 rounded-none">
                  [ {activeProject.code} ] • {activeProject.client}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900 text-white transition border border-white/20 rounded-none cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 bg-slate-50 border border-slate-200 text-xs font-mono rounded-none">
                <div>
                  <span className="text-slate-400 block">AUTHORITY</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{activeProject.client}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">LOCATION</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{activeProject.location}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block">TOLERANCE</span>
                  <span className="font-bold text-[#ea580c] mt-0.5 block">{activeProject.benchmark}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Execution &amp; Scope
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {activeProject.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Delivered Engineering Data Assets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProject.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 bg-slate-50 border border-slate-200 text-xs text-slate-700 rounded-none"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/projects"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition rounded-none font-mono"
                >
                  <span>ALL 31 DELIVERABLES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition rounded-none font-mono"
                >
                  <span>REQUEST FORMAL RFQ</span>
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
