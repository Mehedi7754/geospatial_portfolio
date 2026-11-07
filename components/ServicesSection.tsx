"use client";

import React, { useState } from "react";
import {
  Activity,
  Layers,
  Compass,
  Plane,
  Database,
  Waves,
  ArrowRight,
  CheckCircle2,
  X,
  Cpu,
} from "lucide-react";

interface ServiceItem {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  deliverables: string[];
  techStack: string[];
  isHighlighted?: boolean;
}

const servicesData: ServiceItem[] = [
  {
    id: "remote-sensing",
    category: "Remote Sensing",
    title: "Satellite Remote Sensing",
    subtitle: "Multi-temporal NDVI vegetation health & regional land cover analysis",
    description:
      "Satellite imagery analysis, multi-temporal NDVI vegetation health mapping, and regional land cover change monitoring for agricultural and environmental planning.",
    icon: Activity,
    deliverables: [
      "Multi-temporal NDVI vegetation health maps",
      "Surface water body index & flood extent mapping",
      "Urban sprawl & land use land cover (LULC) classification",
      "High-resolution multispectral band processing",
    ],
    techStack: ["Sentinel-2 / Landsat-8", "ArcGIS Spatial Analyst", "Google Earth Engine"],
  },
  {
    id: "site-layout",
    category: "Site Staking",
    title: "Construction Site Layout",
    subtitle: "Sub-millimeter pier, axis & highway corridor setting-out",
    description:
      "Exact field marking for bridge piers, building columns, highway alignments, and structural right-of-way boundaries adhering to strict engineering tolerances.",
    icon: Layers,
    isHighlighted: true, // Matching Card 2 highlighted icon box from reference design!
    deliverables: [
      "Building axis and foundation centerlines with sub-mm tolerances",
      "Elevated viaduct pier locations for expressway projects",
      "Highway horizontal & vertical curve geometry setting",
      "As-built structural deviation and settlement logs",
    ],
    techStack: ["1-Second Precision Total Station", "Digital Barcode Level", "AutoCAD Civil 3D"],
  },
  {
    id: "topographic",
    category: "Digital Survey",
    title: "Topographic & Engineering Survey",
    subtitle: "Sub-centimeter contour mapping, DEM/DSM & TBM baselines",
    description:
      "Sub-centimeter terrain, elevation, contour, and site feature mapping for bridges, highways, and infrastructure design tied to SOB/PWD datum.",
    icon: Compass,
    deliverables: [
      "Digital Elevation & Surface Models (DEM/DSM)",
      "0.5m - 1.0m contour interval engineering maps",
      "Benchmark establishment tied to SOB/PWD datum",
      "Cross-sections and longitudinal corridor profiles",
    ],
    techStack: ["Hi-Target V200 RTK GNSS", "Sokkia Total Station", "AutoCAD Civil 3D"],
  },
  {
    id: "uav-mapping",
    category: "Drone Survey",
    title: "UAV Aerial Photogrammetry",
    subtitle: "Sub-3cm GSD true orthomosaics, 3D mesh & volumetric cut/fill",
    description:
      "High-resolution drone orthomosaics, 3D terrain reconstruction, point cloud generation, and volumetric earthwork computations for industrial zones.",
    icon: Plane,
    deliverables: [
      "Sub-3cm GSD true orthomosaic digital maps",
      "Dense 3D point clouds (LAS/LAZ format)",
      "Volumetric cut & fill earthwork calculations",
      "High-resolution geo-referenced site masterplans",
    ],
    techStack: ["DJI Phantom 4 RTK", "DJI Mavic 3 Enterprise", "Pix4D / Agisoft Metashape"],
  },
  {
    id: "gis-mapping",
    category: "Spatial Database",
    title: "GIS Mapping & Databases",
    subtitle: "PostgreSQL/PostGIS geodatabases & interactive web portals",
    description:
      "Custom GIS development, relational PostGIS database architectures, and interactive web mapping portals for municipalities and utility networks.",
    icon: Database,
    deliverables: [
      "PostgreSQL/PostGIS relational geodatabases",
      "Multi-criteria spatial suitability models",
      "Interactive web GIS dashboards (Leaflet/Mapbox)",
      "Digitized utility networks and municipal assets",
    ],
    techStack: ["ArcGIS Pro", "QGIS Desktop", "PostgreSQL / PostGIS", "Python GeoPandas"],
  },
  {
    id: "bathymetry",
    category: "Hydrography",
    title: "Bathymetric Hydro Survey",
    subtitle: "Dual-frequency acoustic depth sounding & riverbed morphology",
    description:
      "Underwater riverbed acoustic depth profiling, cross-section sounding, and hydrodynamic modeling for flood mitigation and dredging plans.",
    icon: Waves,
    deliverables: [
      "High-precision acoustic riverbed depth contour maps",
      "HEC-RAS 1D/2D hydraulic hydrodynamic model cross-sections",
      "Embankment scour vulnerability and dredging estimates",
      "Bridge pier hydraulic clearance documentation",
    ],
    techStack: ["Dual-Frequency Echo Sounder", "Hydrographic GPS Beacon", "HYPACK Software"],
  },
];

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Section Header (Matching Reference Design "Our Services") */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[11px] font-bold tracking-wider uppercase mb-3.5">
            <Cpu className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-3">
            Our Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
            Six integrated technical disciplines for nationwide geodetic field capture, drone mapping, and spatial databases.
          </p>
        </div>

        {/* 6 Clean White Cards in a 3x2 Grid (Matching Reference Image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {servicesData.map((svc) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                onClick={() => setSelectedService(svc)}
                className="group rounded-2xl bg-white border border-slate-200/80 hover:border-orange-300 p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl cursor-pointer"
              >
                <div>
                  {/* Icon Box (Card 2 has solid orange fill like reference image!) */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      svc.isHighlighted
                        ? "bg-[#ea580c] text-white shadow-lg shadow-orange-500/30"
                        : "bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Category Pill */}
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                    {svc.category}
                  </span>

                  {/* Title & Concise Subtitle */}
                  <h3 className="text-lg font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                    {svc.subtitle}
                  </p>
                </div>

                {/* Subtle Bottom Link with Arrow (Matching Reference Underline) */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#ea580c] transition-colors">
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-4 h-4 text-[#ea580c] group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal / Slide-over with Deliverables */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ea580c] flex items-center justify-center">
                <selectedService.icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c] block">
                  {selectedService.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              {selectedService.description}
            </p>

            <div className="mb-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                Verified Deliverables
              </h4>
              <ul className="space-y-2 text-xs">
                {selectedService.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Instrumentation &amp; Software
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedService.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-full shadow-md transition"
              >
                Inquire For Your Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
