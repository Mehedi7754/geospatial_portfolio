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

const projectVisuals: Record<number, string> = {
  1: "/assets/showcase/gulshan-badda-road-project.jpg",
  2: "/assets/showcase/engineering-site-investigation.png",
  3: "/inner/drone-fields.webp",
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

export default function ProjectsArchivePage() {
  const [activeCategory, setActiveCategory] = useState("All (31)");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<(typeof completedProjectsCatalog)[0] | null>(null);

  const categories = [
    { label: "All Projects (31)", value: "All (31)" },
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

  return (
    <div className="min-h-screen bg-white text-[#0f172a] antialiased">
      <Navbar />

      <main className="pt-28 pb-24">
        {/* Editorial Sub-Page Header */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-[#ea580c] transition mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Main Portfolio</span>
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-100">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
                OFFICIAL RECORD ARCHIVE • 31 DELIVERABLES
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
                Project Directory Archive
              </h1>
              <p className="mt-2 text-slate-500 text-sm max-w-2xl leading-relaxed">
                Complete catalog of geodetic baseline surveys, drone photogrammetry mappings, bathymetric sounding, and enterprise GIS databases delivered for government departments and private developers.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search project, agency, district..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#ea580c] focus:bg-white transition"
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

          {/* Filter Pills */}
          <div className="pt-6 flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setActiveCategory(cat.value)}
                className={`text-xs px-4 py-2 rounded-full font-semibold transition-all ${
                  activeCategory === cat.value
                    ? "bg-[#ea580c] text-white shadow-md shadow-orange-500/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
            <span className="text-xs text-slate-400 ml-auto font-mono">
              Showing {filteredProjects.length} of 31 projects
            </span>
          </div>
        </div>

        {/* Project Showcase Grid */}
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((proj) => {
              const image = projectVisuals[proj.id] || "/assets/showcase/badc-irrigation-gis-project.jpg";

              return (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Photo Card */}
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-900 mb-4">
                      <Image
                        src={image}
                        alt={proj.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-[10px] font-bold text-slate-900 uppercase tracking-wider">
                        #{String(proj.id).padStart(2, "0")} • {proj.category}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                        <span className="truncate max-w-[200px] font-medium text-slate-300">
                          {proj.location || "Bangladesh"}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#ea580c] text-white text-[10px] font-bold">
                          Verified
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-bold text-[#ea580c] block mb-1">
                      {proj.client}
                    </span>
                    <h3 className="text-base font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-2 line-clamp-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                      {proj.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#ea580c] transition-colors">
                    <span>Inspect Full Dossier</span>
                    <ArrowUpRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Detail Dossier Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-48 sm:h-56 bg-slate-900">
              <Image
                src={projectVisuals[selectedProject.id] || "/assets/showcase/badc-irrigation-gis-project.jpg"}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                  #{String(selectedProject.id).padStart(2, "0")} • {selectedProject.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
                  {selectedProject.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white transition backdrop-blur-xs"
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
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  Detailed Scope of Work
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900"
              >
                Close
              </button>
              <Link
                href="/#contact"
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2 text-xs font-bold text-white bg-[#ea580c] hover:bg-[#c2410c] rounded-full transition"
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

