"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, X } from "lucide-react";

interface LandmarkProject {
  id: string;
  category: string;
  categoryTag: string;
  title: string;
  client: string;
  location: string;
  benchmark: string;
  image: string;
  deliverables: string[];
}

const landmarkProjects: LandmarkProject[] = [
  {
    id: "expressway",
    category: "bridges",
    categoryTag: "INFRASTRUCTURE",
    title: "Dhaka–Ashulia Elevated Expressway",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
    benchmark: "Sub-millimeter Pier Axis Tolerance",
    image: "/inner/bridge-aerial.webp",
    deliverables: [
      "Sub-mm pier centerline geodetic coordinates",
      "Corridor longitudinal profile & cross-sections",
      "Right-of-Way (RoW) acquisition alignment CAD",
      "As-built pier displacement & structural settlement logs",
    ],
  },
  {
    id: "chittagong-ez",
    category: "uav",
    categoryTag: "UAV PHOTOGRAMMETRY",
    title: "Chittagong Economic Zone 3D Mesh",
    client: "BEZA Industrial Authority",
    location: "Mirsarai, Chattogram",
    benchmark: "2.5cm GSD True Orthomosaic",
    image: "/inner/drone-fields.webp",
    deliverables: [
      "2.5cm Ground Sampling Distance true orthomosaic",
      "Dense 3D point cloud & Digital Elevation Model (DEM)",
      "Volumetric cut & fill earthwork grading reports",
      "Masterplan plot demarcation and title boundary baselines",
    ],
  },
  {
    id: "sylhet-flood",
    category: "hydro",
    categoryTag: "HYDROGRAPHY",
    title: "Surma–Kushiyara Basin Riverbed Bathymetry",
    client: "Bangladesh Water Development Board (BWDB)",
    location: "Surma-Kushiyara Delta Basin",
    benchmark: "Acoustic Depth Sounding (SOB Datum)",
    image: "/assets/showcase/river-bathymetry-sounding.jpg",
    deliverables: [
      "Acoustic riverbed depth contour maps",
      "HEC-RAS 1D/2D hydraulic hydrodynamic model cross-sections",
      "Embankment scour vulnerability assessment sheets",
      "Dredging volume estimations & river channel logs",
    ],
  },
  {
    id: "badc-gis",
    category: "gis",
    categoryTag: "REMOTE SENSING & GIS",
    title: "BADC Agricultural Information System (WEB-AIS)",
    client: "Ministry of Agriculture / BADC",
    location: "23 Unions, 260 Mouzas",
    benchmark: "208.37 km² Spatial Geodatabase",
    image: "/assets/showcase/badc-irrigation-gis-project.jpg",
    deliverables: [
      "208.37 km² high-density spatial geodatabase",
      "Interactive Web-AIS GIS portal with NDVI diagnostics",
      "River gauge and canal network monitoring benchmarks",
      "260 Mouzas boundary demarcation and land cover maps",
    ],
  },
  {
    id: "geodetic-control",
    category: "bridges",
    categoryTag: "GEODETIC CONTROL",
    title: "Nationwide Ground Control Network",
    client: "Survey of Bangladesh (SOB) Datum",
    location: "All 64 Districts",
    benchmark: "1st Class Baseline Calibration",
    image: "/assets/showcase/total-station-instrument.png",
    deliverables: [
      "Permanent Ground Control Monument Coordinates (PBM)",
      "Differential GPS static baseline post-processing logs",
      "Survey of Bangladesh datum transformation matrices",
      "Cadastral overlay control benchmarks",
    ],
  },
  {
    id: "bpdb-gis",
    category: "gis",
    categoryTag: "SPATIAL DATABASE",
    title: "BPDB Distribution Asset GIS & Mapping",
    client: "Power Development Board (BPDB)",
    location: "Chittagong & Sylhet Zones",
    benchmark: "PostGIS Enterprise Geodatabase",
    image: "/inner/gis-analyst.webp",
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
        {/* BuildGo 1:1 Section Header (Zero Extra Paragraphs) */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
            • Our Landmark Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            Discover Our Landmark Projects.
          </h2>
        </div>

        {/* BuildGo Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap mb-10 sm:mb-12 text-xs font-mono font-bold">
          {[
            { id: "all", label: "All Deliverables (31)" },
            { id: "bridges", label: "Expressway & Bridges" },
            { id: "uav", label: "UAV Photogrammetry" },
            { id: "hydro", label: "River Bathymetry" },
            { id: "gis", label: "Satellite GIS" },
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

        {/* BuildGo 1:1 Large Immersive Image Panels (3 Columns, ZERO Extra Paragraphs) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="group cursor-pointer relative aspect-[3/4] sm:aspect-[4/5] w-full bg-slate-950 border border-slate-300 rounded-none overflow-hidden shadow-sm group-hover:border-slate-900 transition-all duration-500"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center rounded-none transition-transform duration-1000 group-hover:scale-103"
              />
              {/* BuildGo Deep Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

              {/* Bottom Caption Overlay (BuildGo Style with Orange Tag) */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <span className="inline-block px-2.5 py-1 bg-[#ea580c] text-[10px] font-mono font-bold tracking-wider uppercase text-white mb-2 rounded-none shadow-xs">
                  {proj.categoryTag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-1">
                  {proj.title}
                </h3>
                <span className="text-xs text-slate-300 font-mono block mb-2">
                  {proj.client} • {proj.location}
                </span>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-orange-400 group-hover:text-white transition-colors">
                  <span>INSPECT DOSSIER</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Clean Minimal Archive Button */}
        <div className="mt-12 sm:mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-slate-900 hover:bg-[#ea580c] text-white text-xs font-mono font-bold rounded-none shadow-sm transition group uppercase"
          >
            <span>Open Complete 31 Projects Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
                  [ {activeProject.categoryTag} ] • {activeProject.client}
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

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
                <Link
                  href="/projects"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition rounded-none"
                >
                  <span>ALL 31 DELIVERABLES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition rounded-none"
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
