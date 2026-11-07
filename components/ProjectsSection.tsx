"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { completedProjectsCatalog } from "@/data/companyData";
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  CheckCircle2,
  X,
  MapPin,
  Building2,
  ShieldCheck,
  ChevronDown,
  Layers,
} from "lucide-react";

interface FeaturedProject {
  id: string;
  category: string;
  title: string;
  image: string;
  client: string;
  location: string;
  metric: string;
  summary: string;
  deliverables: string[];
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "expressway",
    category: "Infrastructure",
    title: "Dhaka–Ashulia Elevated Expressway Alignment",
    image: "/inner/bridge-aerial.webp",
    client: "Bangladesh Bridge Authority (BBA)",
    location: "Dhaka-Ashulia Corridor",
    metric: "Pier Control",
    summary:
      "Millimeter-level corridor control establishment, elevated pier centerline setting-out, and right-of-way topographic modeling for Bangladesh Bridge Authority.",
    deliverables: [
      "Sub-mm pier centerline coordinates & geodetic control",
      "High-density topographic corridor profile & cross-sections",
      "Right-of-Way (RoW) acquisition alignment drawings",
      "As-built pier displacement & structural settlement logs",
    ],
  },
  {
    id: "chittagong-ez",
    category: "Aerial Survey",
    title: "Chittagong Economic Zone 3D Mapping",
    image: "/inner/drone-fields.webp",
    client: "BEZA Industrial Zone",
    location: "Mirsarai, Chattogram",
    metric: "2.5cm GSD",
    summary:
      "UAV photogrammetric aerial survey producing 2.5cm GSD true orthomosaics and volumetric cut/fill earthwork computations for industrial zones.",
    deliverables: [
      "2.5cm Ground Sampling Distance (GSD) true orthomosaic",
      "Dense 3D point cloud and Digital Elevation Model (DEM)",
      "Volumetric cut and fill earthwork grading reports",
      "High-precision plot demarcation and infrastructure masterplan",
    ],
  },
  {
    id: "sylhet-flood",
    category: "Hydrography",
    title: "Sylhet Riverbed Morphology & Bathymetry",
    image: "/inner/river-aerial.webp",
    client: "BWDB Water Board",
    location: "Surma-Kushiyara Basin",
    metric: "Echo Sounding",
    summary:
      "Multi-temporal satellite remote sensing, riverbed morphology analysis, and hydrodynamic cross-section surveys for regional flood mitigation.",
    deliverables: [
      "Riverbed bathymetric depth contours & acoustic soundings",
      "HEC-RAS 1D/2D hydraulic hydrodynamic model inputs",
      "Multi-temporal satellite flood inundation mapping",
      "Embankment scour vulnerability assessment sheets",
    ],
  },
  {
    id: "badc-gis",
    category: "GIS & Database",
    title: "BADC Agricultural Information (WEB-AIS)",
    image: "/assets/showcase/badc-irrigation-gis-project.jpg",
    client: "BADC Agriculture",
    location: "23 Unions, 260 Mouzas",
    metric: "208 km² Mapped",
    summary:
      "Pilot research project for irrigation water management, river gauge monitoring, and web-based spatial agricultural database with multi-temporal NDVI vegetation analysis.",
    deliverables: [
      "208.37 km² high-density spatial geodatabase",
      "Interactive Web-AIS GIS portal with NDVI diagnostics",
      "River gauge and canal network monitoring benchmarks",
      "260 Mouzas boundary demarcation and land cover maps",
    ],
  },
];

// High-resolution authentic visual mappings for all 31 directory projects
const projectVisuals: Record<number, string> = {
  1: "/assets/showcase/gulshan-badda-road-project.jpg",
  2: "/assets/showcase/engineering-site-investigation.png",
  3: "/assets/showcase/photogrammetry-3d-terrain.png",
  4: "/assets/showcase/national-gcp-network.jpg",
  5: "/assets/showcase/total-station-instrument.png",
  6: "/assets/showcase/bridge-survey-waterway.jpg",
  7: "/assets/showcase/architectural-3d-exterior.png",
  8: "/inner/bridge-aerial.webp",
  9: "/assets/showcase/pahartoli-railway-workshop.jpg",
  10: "/assets/showcase/abdulpur-railway-bypass-dsm.jpg",
  11: "/assets/showcase/river-bathymetry-sounding.jpg",
  12: "/assets/showcase/gulshan-badda-road-project.jpg",
  13: "/assets/showcase/bpdb-distribution-network.jpg",
  14: "/assets/showcase/bpdb-distribution-network.jpg",
  15: "/inner/drone-fields.webp",
  16: "/assets/showcase/bridge-survey-waterway.jpg",
  17: "/assets/showcase/bridge-survey-waterway.jpg",
  18: "/assets/showcase/river-bathymetry-sounding.jpg",
  19: "/assets/showcase/gabtoli-terminal-3d-model.jpg",
  20: "/assets/showcase/feasibility-cad-engineering.png",
  21: "/assets/showcase/gulshan-badda-road-project.jpg",
  22: "/assets/showcase/engineering-site-investigation.png",
  23: "/assets/showcase/architectural-3d-exterior.png",
  24: "/assets/showcase/water-level-gauge-monitoring.jpg",
  25: "/assets/showcase/water-level-gauge-monitoring.jpg",
  26: "/assets/showcase/badc-irrigation-gis-project.jpg",
  27: "/assets/showcase/mohakhali-terminal-project.jpg",
  28: "/assets/showcase/pahartoli-railway-workshop.jpg",
  29: "/assets/showcase/abdulpur-railway-bypass-dsm.jpg",
  30: "/inner/bridge-aerial.webp",
  31: "/assets/showcase/gulshan-badda-road-project.jpg",
};

export const ProjectsSection: React.FC = () => {
  const [showDirectory, setShowDirectory] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All (31)");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedProjectId, setExpandedProjectId] = useState<number | null>(null);
  const [modalProject, setModalProject] = useState<(typeof completedProjectsCatalog)[0] | FeaturedProject | null>(null);

  const categories = [
    { label: "All (31)", value: "All (31)" },
    { label: "Engineering & Infrastructure", value: "Engineering & Infrastructure" },
    { label: "Survey & GNSS", value: "Survey & GNSS" },
    { label: "GIS & Remote Sensing", value: "GIS & Remote Sensing" },
    { label: "Urban & Modernization", value: "Urban & Modernization" },
  ];

  const filteredProjects = useMemo(() => {
    return completedProjectsCatalog.filter((proj) => {
      const matchesFilter =
        activeCategory === "All (31)" || proj.category === activeCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proj.location ?? "").toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleExpand = (id: number) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      {/* 1. Featured Recent Work (4 Cards in a Row - Matching Reference Design) */}
      <section id="portfolio" className="py-20 lg:py-28 bg-[#fafafa] border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar: Heading on Left + Button on Right (Matching Reference Image "Check Some Of Our Recent Work") */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[11px] font-bold tracking-wider uppercase mb-3">
                <Layers className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Verified Works</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
                Check Some Of Our Recent Work
              </h2>
              <p className="mt-1 text-slate-500 text-xs sm:text-sm max-w-xl">
                A selection of verified spatial deliverables across bridges, expressways, industrial zones, and floodplains.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowDirectory(!showDirectory)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-full shadow-lg shadow-orange-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 self-start sm:self-end"
            >
              <span>{showDirectory ? "Hide Project Archive" : "View All 31 Projects"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 4 Project Showcase Cards in a 4-Col Grid (Matching Reference Design!) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setModalProject(proj)}
                className="group relative rounded-2xl overflow-hidden bg-white border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-orange-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Image Header */}
                <div className="relative aspect-[16/11] bg-slate-900 overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Badges on Photo */}
                  <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between z-10">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-white/95 text-slate-900 uppercase tracking-wider">
                      {proj.category}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#ea580c] text-white">
                      {proj.metric}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10.5px] font-bold text-[#ea580c] block mb-1">
                      {proj.client}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#ea580c] transition-colors leading-snug line-clamp-2 mb-2">
                      {proj.title}
                    </h3>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#ea580c] transition-colors">
                    <span>Inspect Dossier</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#ea580c]" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. Interactive Searchable 31-Project Directory Drawer */}
          {showDirectory && (
            <div className="mt-12 pt-8 border-t border-slate-200/80 animate-in fade-in duration-300">
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg">
                {/* Top Bar: Title & Search Bar */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 pb-6 border-b border-slate-100">
                  <div>
                    <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                      OFFICIAL GOVERNMENT &amp; ENTERPRISE PROJECT ARCHIVE
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">
                      Completed &amp; Ongoing Project Directory (31 Projects)
                    </h3>
                  </div>

                  <div className="relative w-full md:w-80">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="Search by project or client..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#ea580c] focus:bg-white transition"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className="py-4 border-b border-slate-100 flex flex-wrap items-center gap-1.5">
                  <span className="text-xs text-slate-400 mr-2 font-medium">Filter:</span>
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => setActiveCategory(cat.value)}
                      className={`text-xs px-3 py-1 rounded-full font-medium transition-all ${
                        activeCategory === cat.value
                          ? "bg-[#0f172a] text-white shadow-xs"
                          : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                  <span className="text-xs text-slate-400 ml-auto font-mono hidden sm:inline">
                    {filteredProjects.length} records
                  </span>
                </div>

                {/* Clean Professional Project Rows with Visual Preview */}
                <div className="max-h-[640px] overflow-y-auto divide-y divide-slate-100 pr-1">
                  {filteredProjects.map((proj) => {
                    const isExpanded = expandedProjectId === proj.id;
                    const projectImage = projectVisuals[proj.id] || "/assets/showcase/badc-irrigation-gis-project.jpg";

                    return (
                      <div
                        key={proj.id}
                        className="py-3 px-2 sm:px-3 hover:bg-orange-50/40 rounded-xl transition-colors cursor-pointer group"
                        onClick={() => toggleExpand(proj.id)}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                          {/* Left: Thumbnail + #ID + Title + Category Badge */}
                          <div className="min-w-0 flex-1 flex items-start sm:items-center gap-3">
                            {/* Compact Visual Thumbnail */}
                            <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-200 mt-0.5 sm:mt-0">
                              <Image
                                src={projectImage}
                                alt={proj.title}
                                fill
                                sizes="48px"
                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-mono font-bold text-slate-400 flex-shrink-0">
                                  #{proj.id.toString().padStart(2, "0")}
                                </span>
                                <h4 className="text-sm font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug">
                                  {proj.title}
                                </h4>
                                <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-orange-50 text-[#ea580c] border border-orange-200 flex-shrink-0">
                                  {proj.category}
                                </span>
                              </div>

                              {/* Client & Location line */}
                              <div className="text-xs text-slate-500 mt-1 flex items-center gap-2 flex-wrap">
                                <span>
                                  Client: <strong className="text-slate-700 font-semibold">{proj.client}</strong>
                                </span>
                                {proj.location && (
                                  <>
                                    <span className="text-slate-300">•</span>
                                    <span>{proj.location}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Right: Verified Deliverable pill button */}
                          <div className="flex items-center justify-between sm:justify-end gap-2 flex-shrink-0 pt-1 sm:pt-0">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 group-hover:bg-emerald-100 transition-colors">
                              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                              <span className="hidden xs:inline">Verified Deliverable</span>
                              <span className="xs:hidden">Verified</span>
                            </span>
                            <ChevronDown
                              className={`w-4 h-4 text-slate-400 group-hover:text-[#ea580c] transition-transform duration-200 flex-shrink-0 ${
                                isExpanded ? "rotate-180" : ""
                              }`}
                            />
                          </div>
                        </div>

                        {/* Inline Accordion Details with High-Res Visual Photo */}
                        {isExpanded && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="mt-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs animate-in fade-in duration-150"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                              {/* Left: High-Res Project Visual Photo */}
                              <div className="md:col-span-4 relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 w-full">
                                <Image
                                  src={projectImage}
                                  alt={proj.title}
                                  fill
                                  sizes="(max-width: 768px) 100vw, 30vw"
                                  className="object-cover object-center"
                                />
                                <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs text-[10px] font-bold text-white">
                                  {proj.category}
                                </div>
                              </div>

                              {/* Right: Technical Details & Actions */}
                              <div className="md:col-span-8 space-y-3">
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                  {proj.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                                  <div>
                                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Client:</span>
                                    <span className="font-semibold text-slate-800">{proj.client}</span>
                                  </div>
                                  <div>
                                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Location:</span>
                                    <span className="font-semibold text-slate-800">{proj.location || "Bangladesh"}</span>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-100">
                                  <span className="text-[11px] text-emerald-700 font-semibold">
                                    ✓ Certified SOB &amp; PWD Datum Calibration
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => setModalProject(proj)}
                                    className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-lg transition"
                                  >
                                    <span>Inspect Full Dossier</span>
                                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Technical Project Dossier Modal with Image Header */}
      {modalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            {/* Visual Image Header */}
            <div className="relative h-44 sm:h-52 bg-slate-900 overflow-hidden">
              <Image
                src={
                  "image" in modalProject && modalProject.image
                    ? modalProject.image
                    : typeof modalProject.id === "number"
                    ? projectVisuals[modalProject.id] || "/assets/showcase/badc-irrigation-gis-project.jpg"
                    : "/assets/showcase/badc-irrigation-gis-project.jpg"
                }
                alt={modalProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  {"category" in modalProject ? modalProject.category : "Official Project Archive"}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {modalProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setModalProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white transition backdrop-blur-xs flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9.5px] mb-0.5">
                    Client Organization
                  </span>
                  <span className="font-bold text-slate-900">
                    {modalProject.client}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9.5px] mb-0.5">
                    Corridor / Location
                  </span>
                  <span className="font-bold text-slate-900">
                    {modalProject.location || "Bangladesh"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9.5px] mb-0.5">
                    Benchmark Standard
                  </span>
                  <span className="font-bold text-emerald-700">
                    SOB / PWD Datum Verified
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Scope of Work &amp; Deliverables
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {"summary" in modalProject ? modalProject.summary : modalProject.description}
                </p>
              </div>

              {"deliverables" in modalProject && modalProject.deliverables && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Verified Deliverables Checklist
                  </h4>
                  <ul className="space-y-1.5 text-xs">
                    {modalProject.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setModalProject(null)}
                className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setModalProject(null)}
                className="px-5 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-full shadow-xs transition"
              >
                Inquire About Similar Project
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
