"use client";

import React from "react";
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
      icon: Route,
      scope: "Geometric corridor alignment, pavement condition surveys, and highway drainage layouts.",
      highlight: "Traverse cross-sections & curve geometry setting",
      leadTime: "Fast-Track Mobilization",
    },
    {
      id: "rail",
      title: "Railway Infrastructure & Track Design",
      icon: Train,
      scope: "Bypass corridor alignments, station yards, and workshop facility track centerlines.",
      highlight: "UAV photogrammetric DSM & leveling",
      leadTime: "Technical Consultant",
    },
    {
      id: "hydro",
      title: "River Hydraulics & Water Resources",
      icon: Waves,
      scope: "Bathymetric profiling, riverbed morphology, scour depth analysis, and acoustic echo sounding.",
      highlight: "HEC-RAS 1D/2D hydraulic cross-sections",
      leadTime: "Hydro Vessel Deployment",
    },
    {
      id: "urban",
      title: "Architectural & Urban Planning",
      icon: Building,
      scope: "Inter-district bus terminals, commercial developments, civic masterplans, and 3D architectural models.",
      highlight: "3D BIM models & vehicular circulation",
      leadTime: "Urban Planning Team",
    },
    {
      id: "agri",
      title: "Agricultural GIS & Irrigation Networks",
      icon: Sprout,
      scope: "Primary & secondary canal digitizing, multi-temporal NDVI vegetation health, and irrigation systems.",
      highlight: "High-density rural mapping & WEB-AIS",
      leadTime: "GIS Specialist Team",
    },
    {
      id: "waste",
      title: "Solid Waste & Sanitary Landfills",
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
        <div className="max-w-2xl mb-10">
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

        {/* 6 Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertDomains.map((domain) => {
            const Icon = domain.icon;

            return (
              <div
                key={domain.id}
                className="rounded-2xl bg-white border border-slate-200/80 hover:border-slate-900 p-5 transition-all duration-200 hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
                      <Icon className="w-4 h-4 text-emerald-700" />
                    </div>
                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      {domain.leadTime}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[#0f172a] mb-1.5 leading-snug">
                    {domain.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-3">
                    {domain.scope}
                  </p>

                  <div className="text-[11px] font-medium text-slate-600 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100 mb-3">
                    Focus: <span className="font-semibold text-slate-800">{domain.highlight}</span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 hover:text-amber-600 transition-colors">
                  <span className="text-[11px] text-slate-400 font-normal">Mobilization Ready</span>
                  <Link href="#contact" className="inline-flex items-center gap-1">
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
