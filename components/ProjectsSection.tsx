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
    title: "Dhaka–Ashulia Elevated Expressway Geodetic Control",
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
    id: "sylhet-flood",
    num: "03",
    category: "Hydrographic Sounding",
    title: "Surma–Kushiyara Basin Riverbed Bathymetry",
    image: "/assets/showcase/river-bathymetry-sounding.jpg",
    client: "Bangladesh Water Development Board (BWDB)",
    location: "Surma-Kushiyara Delta Basin",
    benchmark: "Acoustic Depth Sounding (SOB / PWD Datum)",
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
    id: "chittagong-ez",
    num: "04",
    category: "UAV Photogrammetry",
    title: "Chittagong Economic Zone 3D Mesh & Earthwork",
    image: "/inner/drone-fields.webp", // Perfectly proportioned 3:2 aerial drone photogrammetry
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
];

export const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<ShowcaseProject | null>(null);

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-white">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 pb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
              PORTFOLIO SHOWCASE • 04 SELECTED CASE STUDIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Featured Infrastructure Works
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-[#ea580c] text-white text-xs font-bold rounded-full transition shadow-md self-start sm:self-end group"
          >
            <span>View All 31 Projects Archive</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Link-Type Portfolio Showcase (Large, Image-First Asymmetric Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {showcaseProjects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Block with Responsive Aspect Ratio */}
                <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-slate-950 shadow-lg mb-6">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs z-10">
                    <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-mono tracking-wider uppercase font-bold">
                      {proj.num} • {proj.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#ea580c] text-[10px] font-bold">
                      {proj.benchmark}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white z-10 flex items-center justify-between">
                    <span className="text-xs text-slate-300 font-medium">
                      {proj.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-white group-hover:text-[#ea580c] transition-colors">
                      <span>Inspect Dossier</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Typography Link Block */}
                <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                  {proj.client}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-tight mb-2">
                  {proj.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-2">
                  {proj.summary}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#ea580c] transition-colors">
                <span className="font-mono text-slate-400">Standard: Survey of Bangladesh Datum</span>
                <span className="flex items-center gap-1">
                  <span>View Project Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Big Agency Link Banner to Sub-Page */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400 block mb-1.5">
              31 NATIONWIDE INFRASTRUCTURE DELIVERABLES
            </span>
            <h3 className="text-xl sm:text-3xl font-black tracking-tight leading-tight">
              Looking for our complete government &amp; private project catalog?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore our searchable directory of all 31 verified engineering surveys across all 64 districts.
            </p>
          </div>

          <Link
            href="/projects"
            className="relative z-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-orange-500/30 transition transform hover:-translate-y-0.5 self-start md:self-center flex-shrink-0"
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
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white transition backdrop-blur-xs"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9.5px] mb-0.5">
                    Client Authority
                  </span>
                  <span className="font-bold text-slate-900">{activeProject.client}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9.5px] mb-0.5">
                    Project Corridor
                  </span>
                  <span className="font-bold text-slate-900">{activeProject.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9.5px] mb-0.5">
                    Tolerance Standard
                  </span>
                  <span className="font-bold text-emerald-700">{activeProject.benchmark}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Scope &amp; Technical Execution
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeProject.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Delivered Spatial Assets
                </h4>
                <ul className="space-y-2 text-xs">
                  {activeProject.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/projects"
                onClick={() => setActiveProject(null)}
                className="text-xs font-bold text-slate-600 hover:text-[#ea580c] transition"
              >
                View all 31 projects in directory →
              </Link>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900"
                >
                  Close
                </button>
                <Link
                  href="#contact"
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 text-xs font-bold text-white bg-[#ea580c] hover:bg-[#c2410c] rounded-full transition"
                >
                  Inquire Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
