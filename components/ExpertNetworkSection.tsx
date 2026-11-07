"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Route,
  Train,
  Waves,
  Building,
  Sprout,
  Trash2,
  ArrowUpRight,
  Users,
} from "lucide-react";

export const ExpertNetworkSection: React.FC = () => {
  const expertDomains = [
    {
      id: "roads",
      title: "Roads & Highways Engineering",
      image: "/assets/showcase/engineering-site-investigation.png",
      icon: Route,
      scope: "Geometric corridor alignment, pavement condition surveys, and highway drainage layouts.",
      highlight: "Traverse cross-sections & curve geometry setting",
      leadTime: "Fast-Track Mobilization",
    },
    {
      id: "rail",
      title: "Railway Infrastructure & Track Design",
      image: "/assets/showcase/railway-corridor-survey.jpg",
      icon: Train,
      scope: "Bypass corridor alignments, station yards, and workshop facility track centerlines.",
      highlight: "UAV photogrammetric DSM & leveling",
      leadTime: "Technical Consultant",
    },
    {
      id: "hydro",
      title: "River Hydraulics & Water Resources",
      image: "/assets/showcase/bridge-survey-waterway.jpg",
      icon: Waves,
      scope: "Bathymetric profiling, riverbed morphology, scour depth analysis, and acoustic echo sounding.",
      highlight: "HEC-RAS 1D/2D hydraulic cross-sections",
      leadTime: "Hydro Vessel Deployment",
    },
    {
      id: "urban",
      title: "Architectural & Urban Planning",
      image: "/assets/showcase/gabtoli-terminal-3d-model.jpg",
      icon: Building,
      scope: "Inter-district bus terminals, commercial developments, civic masterplans, and 3D architectural models.",
      highlight: "3D BIM models & vehicular circulation",
      leadTime: "Urban Planning Team",
    },
    {
      id: "agri",
      title: "Agricultural GIS & Irrigation Networks",
      image: "/assets/showcase/badc-irrigation-gis-project.jpg",
      icon: Sprout,
      scope: "Primary & secondary canal digitizing, multi-temporal NDVI vegetation health, and irrigation systems.",
      highlight: "High-density rural mapping & WEB-AIS",
      leadTime: "GIS Specialist Team",
    },
    {
      id: "waste",
      title: "Solid Waste & Sanitary Landfills",
      image: "/assets/showcase/feasibility-cad-engineering.png",
      icon: Trash2,
      scope: "Municipal solid waste sanitary landfill site selection, environmental feasibility, and engineering design.",
      highlight: "Leachate drainage & multi-criteria GIS",
      leadTime: "Environmental Team",
    },
  ];

  return (
    <section id="team" className="py-20 lg:py-24 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3">
            <Users className="w-3.5 h-3.5 text-amber-600" />
            <span>Specialists Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
            Engineering specialists &amp; subject-matter experts.
          </h2>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            Multidisciplinary team of transport planners, licensed UAV pilots, hydrologists, and GIS database developers.
          </p>
        </div>

        {/* 6 Visual Specialist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertDomains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div
                key={domain.id}
                className="group rounded-2xl bg-white border border-slate-200/80 hover:border-slate-900 overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Real Field Image Header */}
                  <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
                    <Image
                      src={domain.image}
                      alt={domain.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    <div className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/85 backdrop-blur-xs text-[10px] font-bold text-white tracking-wider uppercase flex items-center gap-1.5">
                      <Icon className="w-3 h-3 text-amber-400" />
                      <span>{domain.leadTime}</span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#0f172a] mb-1.5 leading-snug">
                      {domain.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-3">
                      {domain.scope}
                    </p>

                    <div className="text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-xl border border-slate-100">
                      Focus: <span className="font-semibold text-slate-800">{domain.highlight}</span>
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-amber-600 transition-colors">
                    <span className="text-[11px] text-slate-400 font-normal">Ready for Mobilization</span>
                    <Link href="#contact" className="inline-flex items-center gap-1">
                      <span>Inquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
