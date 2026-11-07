"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { completedProjectsCatalog } from "@/data/companyData";
import {
  ArrowLeft,
  ArrowUpRight,
  Search,
  CheckCircle2,
  X,
  MapPin,
  Building2,
  ShieldCheck,
  Layers,
  ChevronRight,
} from "lucide-react";

// 31 Unique, authentic images mapped 1-to-1 to each of the 31 deliverables (Zero Duplication)
const projectVisuals: Record<number, string> = {
  1: "/assets/showcase/engineering-site-investigation.png",
  2: "/assets/showcase/total-station-instrument.png",
  3: "/assets/showcase/national-gcp-network.jpg",
  4: "/assets/showcase/gis-mapping-analysis.png",
  5: "/assets/showcase/optical-level-instrument.png",
  6: "/inner/wetland-aerial.webp",
  7: "/assets/showcase/architectural-3d-exterior.png",
  8: "/assets/showcase/railway-corridor-survey.jpg",
  9: "/assets/showcase/feasibility-cad-engineering.png",
  10: "/construction-site.png",
  11: "/assets/showcase/river-bathymetry-sounding.jpg",
  12: "/inner/bridge-aerial.webp",
  13: "/assets/showcase/bpdb-distribution-network.jpg",
  14: "/assets/showcase/spatial-data-analytics.png",
  15: "/inner/drone-fields.webp",
  16: "/assets/showcase/bridge-survey-waterway.jpg",
  17: "/assets/showcase/echo-sounder-d270.png",
  18: "/inner/river-aerial.webp",
  19: "/assets/showcase/chcnav-i83-rtk-gnss.jpg",
  20: "/assets/showcase/water-level-gauge-monitoring.jpg",
  21: "/assets/showcase/drone-uav-field-operation.png",
  22: "/assets/showcase/satellite-remote-sensing.png",
  23: "/inner/gis-analyst.webp",
  24: "/assets/showcase/photogrammetry-3d-terrain.png",
  25: "/ppt_images/image43.jpeg",
  26: "/assets/showcase/badc-irrigation-gis-project.jpg",
  27: "/assets/showcase/mohakhali-terminal-project.jpg",
  28: "/assets/showcase/pahartoli-railway-workshop.jpg",
  29: "/assets/showcase/abdulpur-railway-bypass-dsm.jpg",
  30: "/assets/showcase/gulshan-badda-road-project.jpg",
  31: "/assets/showcase/railway-3d-surface-mesh.jpg",
};

export default function ProjectsArchivePage() {
  const [activeCategory, setActiveCategory] = useState("All (31)");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<(typeof completedProjectsCatalog)[0] | null>(null);

  const categories = [
    { label: "All Projects (31)", value: "All (31)" },
    { label: "Engineering & Infrastructure", value: "Engineering & Infrastructure" },
    { label: "Survey & GNSS", value: "Survey & GNSS" },
    { label: "Hydrographic & Bathymetry", value: "Hydrographic & Bathymetry" },
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

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <Navbar />

      <main className="pt-28 pb-24">
        {/* Minimal Sub-Page Header */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-[#0284c7] transition mb-6"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>PORTFOLIO</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284c7] block mb-1">
                // ARCHIVE &bull; 31 DELIVERABLES
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight">
                Selected Works Archive
              </h1>
            </div>

            {/* Minimal Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-slate-200 rounded-none text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#0284c7] focus:bg-white transition font-mono"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Minimal Text Filter Tabs */}
          <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`py-1.5 transition-colors cursor-pointer border-b-2 ${
                  activeCategory === cat.value
                    ? "text-[#0284c7] font-bold border-[#0284c7]"
                    : "text-slate-500 hover:text-slate-900 border-transparent font-medium"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="text-slate-400 ml-auto hidden md:block">
              {filteredProjects.length} records
            </span>
          </div>
        </div>

        {/* Minimal Project Showcase Grid */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {filteredProjects.map((proj) => {
              const image = projectVisuals[proj.id] || "/assets/showcase/badc-irrigation-gis-project.jpg";

              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group cursor-pointer block"
                >
                  {/* Clean Photographic Visual */}
                  <div className="relative aspect-[16/10] w-full rounded-none overflow-hidden bg-slate-950 mb-3 border border-slate-200 group-hover:border-slate-800 transition-colors">
                    <Image
                      src={image}
                      alt={proj.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                    {/* Minimal Category Tag */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-2 py-0.5 bg-slate-950/80 backdrop-blur-xs text-white font-mono text-[10px] font-bold uppercase tracking-wider rounded-none">
                        #{String(proj.id).padStart(2, "0")} • {proj.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono z-10">
                      <span className="text-slate-200 text-[11px] truncate">
                        {proj.location || "Bangladesh"}
                      </span>
                      <ArrowUpRight className="w-4 h-4 text-white group-hover:text-sky-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                  </div>

                  {/* Minimal Caption (No Extra Paragraphs) */}
                  <span className="text-[11px] font-mono font-bold text-[#0284c7] block mb-1 uppercase tracking-wide">
                    {proj.client}
                  </span>
                  <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#0284c7] transition-colors leading-snug">
                    {proj.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Detail Dossier Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-none shadow-2xl border border-slate-900 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-48 sm:h-56 bg-slate-900 rounded-none">
              <Image
                src={projectVisuals[selectedProject.id] || "/assets/showcase/badc-irrigation-gis-project.jpg"}
                alt={selectedProject.title}
                fill
                className="object-cover rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  #{String(selectedProject.id).padStart(2, "0")} • {selectedProject.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-none bg-slate-900 text-white transition border border-white/20 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-none bg-slate-50 border border-slate-200 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9.5px] mb-0.5">
                    Client Organization
                  </span>
                  <span className="font-bold text-slate-900">
                    {selectedProject.client}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9.5px] mb-0.5">
                    Corridor / Location
                  </span>
                  <span className="font-bold text-slate-900">
                    {selectedProject.location || "Bangladesh"}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block font-bold uppercase text-[9.5px] mb-0.5">
                    Benchmark Standard
                  </span>
                  <span className="font-bold text-emerald-700">
                    SOB Datum Verified
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5 font-mono">
                  Detailed Scope of Work
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3 font-mono">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 rounded-none cursor-pointer"
              >
                Close
              </button>
              <Link
                href="/#contact"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-bold text-white bg-[#0284c7] hover:bg-[#0369a1] rounded-none transition"
              >
                Inquire Similar Project
              </Link>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

