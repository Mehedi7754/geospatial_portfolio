"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CheckCircle2, X } from "lucide-react";

interface ShowcaseProject {
  id: string;
  num: string;
  category: string;
  title: string;
  image: string;
  client: string;
  location: string;
  benchmark: string;
  summary: string;
  deliverables: string[];
}

const showcaseProjects: ShowcaseProject[] = [
  {
    id: "expressway",
    num: "01",
    category: "Infrastructure Alignment",
    title: "Dhaka–Ashulia Elevated Expressway",
    image: "/inner/bridge-aerial.webp",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
    benchmark: "Sub-mm Pier Axis Tolerance",
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
    id: "badc-gis",
    num: "02",
    category: "Satellite Remote Sensing & GIS",
    title: "BADC Agricultural Information System (WEB-AIS)",
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
    id: "chittagong-ez",
    num: "03",
    category: "UAV Photogrammetry",
    title: "Chittagong Economic Zone 3D Mesh & Earthwork",
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
    num: "04",
    category: "Hydrographic Sounding",
    title: "Surma–Kushiyara Basin Riverbed Bathymetry",
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
    id: "geodetic-control",
    num: "05",
    category: "Topographic Geodetics",
    title: "Nationwide Geodetic Ground Control Network",
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
    num: "06",
    category: "Spatial Asset Database",
    title: "BPDB Distribution Asset GIS & Mapping",
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
  const [activeProject, setActiveProject] = useState<ShowcaseProject | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TROMA Style Minimal Header (Left Title + Right Coral Button, NO Box Container) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
              Recent Work
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Check Some Of Our Recent Work
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 self-start sm:self-end shrink-0"
          >
            <span>View All 31 Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* TROMA Style 6-Image Clean Gallery Grid (ZERO Box Containers, Pure Images & Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-12">
          {showcaseProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="group cursor-pointer flex flex-col"
            >
              {/* Image Block: Direct on canvas with smooth rounded-2xl corners, NO box container */}
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden bg-slate-900 shadow-sm group-hover:shadow-xl transition-all duration-500 mb-4">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Floating category pill */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md text-[9px] font-mono font-bold uppercase tracking-wider text-white border border-white/10 shadow-sm">
                    {proj.category}
                  </span>
                </div>

                {/* Hover arrow badge */}
                <div className="absolute bottom-3 right-3 z-10 w-8 h-8 rounded-full bg-white text-[#ea580c] flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & Metadata directly below image */}
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                {proj.client}
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1">
                {proj.title}
              </h3>
              <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                {proj.summary}
              </p>
            </div>
          ))}
        </div>

        {/* Minimal Text Link to Complete Archive (NO Giant Box Container) */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <p>
            Looking for our complete catalog of <strong className="text-slate-900 font-bold">31 verified infrastructure deliverables</strong> across all 64 districts in Bangladesh?
          </p>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 font-bold text-[#ea580c] hover:text-[#c2410c] transition shrink-0"
          >
            <span>Browse Complete 31 Projects Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-52 sm:h-60 bg-slate-900">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-orange-400 block mb-1">
                  {activeProject.num} • {activeProject.category}
                </span>
                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight leading-snug">
                  {activeProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block font-medium">Authority / Client</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{activeProject.client}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-medium">Corridor / Location</span>
                  <span className="font-bold text-slate-900 mt-0.5 block">{activeProject.location}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block font-medium">Quality Benchmark</span>
                  <span className="font-bold text-[#ea580c] mt-0.5 block">{activeProject.benchmark}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Project Background &amp; Technical Execution
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {activeProject.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Delivered Engineering Data Assets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProject.deliverables.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/projects"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-full transition"
                >
                  <span>View Full 31 Project Directory</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-full shadow-md shadow-orange-500/20 transition"
                >
                  <span>Request RFQ for Similar Scope</span>
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
