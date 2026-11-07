"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, X } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";

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
    title: "Dhaka–Ashulia Elevated Expressway Alignment",
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
    categoryTag: "AERIAL SURVEY",
    title: "Chittagong Economic Zone 3D Mapping",
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
    categoryTag: "GIS & MAPPING",
    title: "Sylhet Riverbank & Floodplain Modeling",
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
    categoryTag: "GIS & MAPPING",
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
    categoryTag: "INFRASTRUCTURE",
    title: "Nationwide Geodetic Ground Control Network",
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
    categoryTag: "GIS & MAPPING",
    title: "BPDB Distribution Asset GIS & Mapping",
    client: "Power Development Board (BPDB)",
    location: "Chittagong & Sylhet Zones",
    benchmark: "PostGIS Enterprise Geodatabase",
    image: "/inner/gis-analyst.webp",
    deliverables: [
      "PostgreSQL/PostGIS electrical feeder database",
      "High-resolution mobile GIS field audit logs",
      "Substation single-line schematic spatial integration",
      "Network load balancing GIS thematic maps",
    ],
  },
];

const categoryTabs = [
  { id: "all", label: "All Works (31)" },
  { id: "bridges", label: "Expressway" },
  { id: "uav", label: "AERIAL SURVEY" },
  { id: "hydro", label: "Bathymetry" },
  { id: "gis", label: "Spatial GIS" },
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
        {/* Custom Image-Type Layout: Left Editorial Typography + Right 3 Photographic Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (4 Cols): / PROJECTS Heading, Note & Button (Theme: Corporate Logo Blue) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-[#0284c7] uppercase mb-5">
              <span>/ PROJECTS</span>
              <span className="w-12 h-[1px] bg-slate-300" />
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0f172a] tracking-tight leading-[1.05] mb-5">
              Real <br />
              landscapes. <br />
              <span className="text-[#0284c7]">Real</span> <br />
              <span className="text-[#ea3829]">impact.</span>
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mb-6 font-normal">
              A selection of our work across surveying, mapping and spatial analysis.
            </p>

            <div className="mb-8">
              <AnimatedButton
                href="/projects"
                variant="dark"
                icon="right"
              >
                View all projects
              </AnimatedButton>
            </div>

            {/* Category Filter Switcher */}
            <div className="pt-5 border-t border-slate-200">
              <span className="text-[10px] font-mono uppercase font-bold text-slate-400 block mb-2.5">
                FILTER DELIVERABLES:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {categoryTabs.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`px-3 py-1.5 text-[11px] font-bold uppercase transition rounded-none cursor-pointer ${
                      selectedCategory === tab.id
                        ? "bg-[#0284c7] text-white shadow-xs"
                        : "bg-white text-slate-700 border border-slate-200 hover:border-slate-900"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (8 Cols): 3 Photographic Project Cards (Matching Reference Image) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {filteredProjects.slice(0, 3).map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setActiveProject(proj)}
                  className="group cursor-pointer relative aspect-[3/4] sm:aspect-[4/5] w-full bg-slate-950 border border-slate-300 rounded-none overflow-hidden shadow-xs hover:border-slate-900 transition-all duration-500 flex flex-col justify-end"
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
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
                      {proj.categoryTag}
                    </span>

                    {/* Title with Arrow */}
                    <div className="flex items-end justify-between gap-2">
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                        {proj.title}
                      </h3>
                      <span className="shrink-0 text-white group-hover:text-[#0284c7] group-hover:translate-x-1 transition-all mb-0.5">
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
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

              <div className="absolute bottom-5 left-6 right-6">
                <span className="px-2.5 py-1 bg-white text-slate-900 text-[10px] font-mono font-bold uppercase tracking-wider inline-block mb-2 rounded-none shadow-xs">
                  {activeProject.categoryTag} • {activeProject.client}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 bg-slate-900 text-white transition border border-white/20 rounded-none cursor-pointer hover:bg-[#0284c7]"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="grid grid-cols-2 gap-4 pb-6 border-b border-slate-200 font-mono text-xs">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    CLIENT AUTHORITY
                  </span>
                  <span className="text-slate-900 font-bold block">{activeProject.client}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    CORRIDOR LOCATION
                  </span>
                  <span className="text-slate-900 font-bold block">{activeProject.location}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                    CALIBRATION STANDARD
                  </span>
                  <span className="text-[#0284c7] font-bold block">
                    {activeProject.benchmark}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Delivered Engineering Data Assets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProject.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-start gap-2 rounded-none"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono">
                <Link
                  href="/projects"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-[#0284c7] text-white text-xs font-bold transition rounded-none"
                >
                  <span>ALL 31 DELIVERABLES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="btn-beam-shine w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-bold transition rounded-none shadow-md shadow-sky-500/20"
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
