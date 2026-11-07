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
    category: "bridges",
    categoryTag: "INFRASTRUCTURE",
    title: "Dhaka–Ashulia Elevated Expressway",
    subtitle: "Sub-mm Pier Axis Alignment • SOB Datum",
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
    category: "uav",
    categoryTag: "UAV PHOTOGRAMMETRY",
    title: "Chittagong Economic Zone 3D Mesh",
    subtitle: "2.5cm GSD True Orthomosaic & Earthwork",
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
    category: "hydro",
    categoryTag: "HYDROGRAPHY",
    title: "Surma–Kushiyara Riverbed Bathymetry",
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
    category: "gis",
    categoryTag: "REMOTE SENSING & GIS",
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
    category: "bridges",
    categoryTag: "GEODETIC BASELINE",
    title: "Nationwide Ground Control Network",
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
    category: "gis",
    categoryTag: "SPATIAL DATABASE",
    title: "BPDB Distribution Asset GIS",
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
    <section id="portfolio" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* BuildGo 1:1 Section Header: Subtitle + Title + Filter Links */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
            • Our Landmark Projects
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            Discover Our Landmark Projects.
          </h2>
        </div>

        {/* BuildGo Category Filter Tabs */}
        <div className="flex items-center justify-center gap-3 sm:gap-6 flex-wrap mb-12 sm:mb-16 text-xs sm:text-sm font-semibold">
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
              className={`transition-colors duration-200 pb-1 relative cursor-pointer ${
                selectedCategory === tab.id
                  ? "text-[#ea580c] font-bold"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              <span>{tab.label}</span>
              {selectedCategory === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ea580c] rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* BuildGo 1:1 Large Immersive Project Cards (3 Columns, ZERO Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              onClick={() => setActiveProject(proj)}
              className="group cursor-pointer relative aspect-[3/4] sm:aspect-[4/5] rounded-3xl overflow-hidden bg-slate-950 shadow-lg group-hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={proj.image}
                alt={proj.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              {/* BuildGo Style Deep Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent" />

              {/* Bottom Caption Overlay (BuildGo Style with Orange Pill Tag) */}
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <span className="inline-block px-3 py-1 rounded-md bg-[#ea580c] text-[10px] font-bold tracking-wider uppercase text-white mb-2.5 shadow-md">
                  {proj.categoryTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-1">
                  {proj.title}
                </h3>
                <p className="text-xs text-slate-300 font-medium mb-3">
                  {proj.subtitle}
                </p>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 group-hover:text-white transition-colors">
                  <span>Inspect Dossier &amp; Data Assets</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Link to Complete Archive */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-[#ea580c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg transition transform hover:-translate-y-0.5 group"
          >
            <span>Browse Complete 31 Projects Directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-56 sm:h-64 bg-slate-900">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-5 left-6 right-6">
                <span className="px-2.5 py-1 rounded-md bg-[#ea580c] text-[10px] font-bold uppercase tracking-wider text-white inline-block mb-2">
                  {activeProject.categoryTag}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
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
