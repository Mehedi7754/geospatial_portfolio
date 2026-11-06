"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  milestoneProjects, 
  completedProjectsCatalog, 
  Project 
} from "@/data/companyData";
import { 
  Building2, 
  MapPin, 
  Search, 
  ExternalLink, 
  Filter, 
  Layers, 
  Calendar, 
  Compass, 
  CheckCircle2, 
  ArrowUpRight,
  TrendingUp
} from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeMilestoneTab, setActiveMilestoneTab] = useState<number>(0);

  const categories = [
    "All",
    "Survey & GNSS",
    "GIS & Remote Sensing",
    "Engineering & Infrastructure",
    "Hydrographic & Bathymetry",
    "Urban & Modernization",
  ];

  const filteredProjects = completedProjectsCatalog.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (project.location && project.location.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredEngineeringProjects = [
    {
      title: "Gabtoli Inter-District Bus Terminal Modernization",
      client: "Dhaka North City Corporation (DNCC)",
      scope: "Digital Survey, 3D Architectural Model, Ticket Counters, Waiting Lounges & Drainage",
      image: "/assets/showcase/gabtoli-terminal-3d-model.jpg",
      area: "71.64 Acres (0.28 km²)",
      tag: "Urban Infrastructure",
      slide: "Slide 16–17",
    },
    {
      title: "Gulshan-1 to Progati Sarani Link Road (Gulshan-Badda)",
      client: "Dhaka North City Corporation (DNCC)",
      scope: "Topographic Survey, RCC Median, Waiting Shelters, Road 130/134 Improvements",
      image: "/assets/showcase/gulshan-badda-road-project.jpg",
      area: "58.52 Acres (0.236 km²)",
      tag: "Corridor Engineering",
      slide: "Slide 18–19",
    },
    {
      title: "Mohakhali Inter-District Bus Terminal Modernization",
      client: "Dhaka North City Corporation (DNCC)",
      scope: "AC Waiting Rooms, Counter Restructuring, Passenger Flow & Integrated Storm Drainage",
      image: "/assets/showcase/mohakhali-terminal-project.jpg",
      area: "Modern Passenger Complex",
      tag: "Transportation Terminal",
      slide: "Slide 20–21",
    },
    {
      title: "Abdulpur Railway Bypass & Pahartoli Workshop Survey",
      client: "Bangladesh Railway / Oriental Consultants Global (OCG Japan)",
      scope: "RTK & UAV Survey, Digital Surface Model (DSM), DTM, Track Alignment & 3D Mesh",
      image: "/assets/showcase/abdulpur-railway-bypass-dsm.jpg",
      area: "RCIPF Subproject 2",
      tag: "Railway Geodetics",
      slide: "Slide 29–32",
    },
    {
      title: "Pilot Irrigation & Web-Based Agri Information System (WEB-AIS)",
      client: "Bangladesh Agricultural Development Corporation (BADC)",
      scope: "208.37 km² Survey, 23 Unions, 260 Mouzas, Canal Mapping, Water Gauges & NDVI",
      image: "/assets/showcase/badc-irrigation-gis-project.jpg",
      area: "208.37 km² Regional Scale",
      tag: "GIS & Remote Sensing",
      slide: "Slide 25–28",
    },
    {
      title: "Hydrographic Bathymetry for Major River Bridges",
      client: "Local Government Engineering Department (LGED) / EQMS",
      scope: "Brahmaputra River (Islampur), Khoksha, Doara Bazar, Rangabali & Silicon City",
      image: "/assets/showcase/river-bathymetry-sounding.jpg",
      area: "Multi-River Soundings",
      tag: "Hydrographic Surveys",
      slide: "Slide 37–38",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0034a0] text-xs font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Proven Track Record (Slides 16–40)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Flagship Engineering Deliverables & <br />
            <span className="text-[#0034a0]">Milestone Project Portfolio</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Authentic documentation of major national infrastructure projects completed for government ministries, city corporations, and international development agencies.
          </p>
        </div>

        {/* Milestone Projects Strip (Slides 33–35) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Key Milestone Projects by Year
              </h3>
              <p className="text-xs sm:text-sm text-slate-500">
                Sourced from official milestone records (Slides 33, 34, 35)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestoneProjects.map((m, idx) => (
              <div
                key={m.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/90 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-blue-50 text-[#0034a0] text-xs font-bold">
                      Year {m.year}
                    </span>
                    <span className="text-lg font-black text-[#e63946]">
                      {m.stat}
                    </span>
                  </div>

                  <h4 className="font-bold text-slate-900 text-base leading-snug mb-1">
                    {m.title}
                  </h4>

                  <div className="text-xs font-semibold text-blue-700 mb-3">
                    {m.client}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Verified Corporate Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Engineering Case Studies with Real PPTX Deliverable Imagery (Slides 16–32) */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Featured Case Studies & Engineering Visuals
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Photogrammetric models, corridor plans, and 3D architectural deliverables (Slides 16–32)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEngineeringProjects.map((fp) => (
              <div
                key={fp.title}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div>
                  {/* Real Deliverable Image */}
                  <div className="relative h-56 w-full bg-slate-950 overflow-hidden">
                    <Image
                      src={fp.image}
                      alt={fp.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-900/80 backdrop-blur-sm text-white text-[11px] font-bold border border-slate-700">
                      {fp.tag}
                    </div>
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-blue-600 text-white text-[11px] font-bold">
                      {fp.area}
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-mono font-semibold text-slate-400">
                      {fp.slide}
                    </span>
                    <h4 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-[#0034a0] transition-colors">
                      {fp.title}
                    </h4>
                    <div className="text-xs font-semibold text-[#0034a0]">
                      Client: {fp.client}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {fp.scope}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Delivered & Approved
                    </span>
                    <a href="#contact" className="text-[#0034a0] hover:underline font-bold flex items-center gap-1">
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Complete 35+ Project Catalog with Interactive Search & Filter (Slides 36–40) */}
        <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-slate-200 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0034a0] uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Complete Official Tasks Ledger (Slides 36–40)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                Completed & Ongoing Project Directory ({completedProjectsCatalog.length} Major Works)
              </h3>
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects, clients, or locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-slate-200 focus:outline-none focus:border-[#0034a0] bg-slate-50"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 py-4 border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#0034a0] text-white shadow-xs"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Table / List */}
          <div className="mt-4 divide-y divide-slate-100 max-h-[600px] overflow-y-auto pr-1">
            {filteredProjects.length === 0 ? (
              <div className="py-12 text-center text-slate-400 text-sm">
                No projects found matching &ldquo;{searchQuery}&rdquo;.
              </div>
            ) : (
              filteredProjects.map((p) => (
                <div
                  key={p.id}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 px-3 rounded-lg transition-colors"
                >
                  <div className="space-y-1 max-w-3xl">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-mono text-xs font-bold text-slate-400">
                        #{p.id < 10 ? `0${p.id}` : p.id}
                      </span>
                      <h4 className="font-bold text-sm sm:text-base text-slate-900">
                        {p.title}
                      </h4>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-50 text-[#0034a0]">
                        {p.category}
                      </span>
                      {p.metrics && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700">
                          {p.metrics}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600">
                      {p.description}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                      <span>Client: <strong className="text-slate-800">{p.client}</strong></span>
                      {p.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-red-500" />
                          {p.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="self-end sm:self-center flex-shrink-0">
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </span>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-400 text-center">
            Showing {filteredProjects.length} of {completedProjectsCatalog.length} verified project engagements from the official presentation brochure.
          </div>
        </div>

      </div>
    </section>
  );
};
