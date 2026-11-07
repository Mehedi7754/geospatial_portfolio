"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  Plane,
  Layers,
  Waves,
  Database,
  Activity,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
} from "lucide-react";

interface Discipline {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  num: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  deliverables: string[];
  techStack: string[];
}

const disciplines: Discipline[] = [
  {
    id: "topographic",
    icon: Compass,
    num: "01",
    title: "Topographic & Geodetic Baseline",
    subtitle:
      "Sub-centimeter contour mapping, DEM/DSM elevation models, and TBM baselines tied to Survey of Bangladesh datum.",
    description:
      "Sub-centimeter terrain, elevation, contour, and site feature mapping for bridges, highways, and national infrastructure tied to Survey of Bangladesh datum.",
    image: "/assets/showcase/total-station-instrument.png",
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
    icon: Plane,
    num: "02",
    title: "UAV Aerial Photogrammetry",
    subtitle:
      "Sub-3cm GSD true orthomosaics, dense 3D point clouds, and volumetric cut/fill earthwork computations.",
    description:
      "High-resolution drone orthomosaics, 3D terrain reconstruction, dense point clouds, and volumetric earthwork computations for industrial economic zones.",
    image: "/assets/showcase/drone-uav-field-operation.png",
    deliverables: [
      "Sub-3cm GSD true orthomosaic digital maps",
      "Dense 3D point clouds (LAS/LAZ format)",
      "Volumetric cut & fill earthwork calculations",
      "High-resolution geo-referenced masterplans",
    ],
    techStack: ["DJI Phantom 4 RTK", "DJI Mavic 3 Enterprise", "Pix4D / Metashape"],
  },
  {
    id: "site-layout",
    icon: Layers,
    num: "03",
    title: "Construction Site Setting-Out",
    subtitle:
      "Sub-millimeter pier centerline staking, elevated viaduct geometry, and expressway corridor right-of-way.",
    description:
      "Exact field marking for bridge piers, building columns, highway alignments, and right-of-way boundaries adhering to strict engineering tolerances.",
    image: "/construction-site.png",
    deliverables: [
      "Building axis and foundation centerlines with sub-mm tolerances",
      "Elevated viaduct pier locations for expressway projects",
      "Highway horizontal & vertical curve geometry setting",
      "As-built structural deviation and settlement logs",
    ],
    techStack: ["1-Second Total Station", "Digital Barcode Level", "AutoCAD Civil 3D"],
  },
  {
    id: "bathymetry",
    icon: Waves,
    num: "04",
    title: "Bathymetric Hydro Sounding",
    subtitle:
      "Dual-frequency acoustic depth sounding, underwater riverbed morphology, and HEC-RAS hydraulic models.",
    description:
      "Underwater riverbed acoustic depth profiling, cross-section sounding, and hydrodynamic modeling for flood mitigation and dredging plans.",
    image: "/assets/showcase/river-bathymetry-sounding.jpg",
    deliverables: [
      "High-precision acoustic riverbed depth contour maps",
      "HEC-RAS 1D/2D hydraulic hydrodynamic model cross-sections",
      "Embankment scour vulnerability and dredging estimates",
      "Bridge pier hydraulic clearance documentation",
    ],
    techStack: ["Dual-Frequency Echo Sounder", "Hydrographic GPS Beacon", "HYPACK"],
  },
  {
    id: "gis-mapping",
    icon: Database,
    num: "05",
    title: "Enterprise GIS & Databases",
    subtitle:
      "Relational PostgreSQL/PostGIS spatial databases, interactive web portals, and digitized utility networks.",
    description:
      "Custom GIS development, relational PostGIS database architectures, and interactive web mapping portals for municipalities and utility networks.",
    image: "/inner/gis-analyst.webp",
    deliverables: [
      "PostgreSQL/PostGIS relational geodatabases",
      "Multi-criteria spatial suitability models",
      "Interactive web GIS dashboards (Leaflet/Mapbox)",
      "Digitized utility networks and municipal assets",
    ],
    techStack: ["ArcGIS Pro", "QGIS Desktop", "PostgreSQL / PostGIS", "Python"],
  },
  {
    id: "remote-sensing",
    icon: Activity,
    num: "06",
    title: "Satellite Remote Sensing",
    subtitle:
      "Multi-temporal NDVI vegetation health, flood inundation tracking, and regional land cover classification.",
    description:
      "Satellite imagery analysis, multi-temporal NDVI vegetation health mapping, and regional land cover change monitoring for agricultural and environmental planning.",
    image: "/assets/showcase/satellite-remote-sensing.png",
    deliverables: [
      "Multi-temporal NDVI vegetation health maps",
      "Surface water body index & flood extent mapping",
      "Urban sprawl & land use land cover (LULC) classification",
      "High-resolution multispectral band processing",
    ],
    techStack: ["Sentinel-2 / Landsat-8", "ArcGIS Spatial Analyst", "Google Earth Engine"],
  },
];

export const ServicesSection: React.FC = () => {
  const [modalDiscipline, setModalDiscipline] = useState<Discipline | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TROMA Style Minimal Centered Section Header (NO Box Container) */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-3">
            Precision Engineering Capabilities
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto">
            High-precision geodetic instrumentation and enterprise spatial intelligence calibrated to Survey of Bangladesh datum.
          </p>
        </div>

        {/* TROMA 6-Item Minimalist Service Grid (Pure Typography & Icons, ZERO Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 sm:gap-y-16">
          {disciplines.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => setModalDiscipline(item)}
                className="group cursor-pointer flex flex-col items-start"
              >
                {/* Coral Soft Icon (Exactly like TROMA's square icons) */}
                <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-all duration-300 flex items-center justify-center mb-5 shadow-xs">
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Service Title */}
                <h3 className="text-lg sm:text-xl font-black text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                {/* Service Subtitle */}
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4">
                  {item.subtitle}
                </p>

                {/* Minimal Text Link (No Button Box) */}
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0f172a] group-hover:text-[#ea580c] transition-colors mt-auto">
                  <span>Explore Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Discipline Modal */}
      {modalDiscipline && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="relative h-48 sm:h-56 bg-slate-900">
              <Image
                src={modalDiscipline.image}
                alt={modalDiscipline.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

              <div className="absolute bottom-4 left-6 right-6">
                <span className="px-2.5 py-1 rounded-full bg-[#ea580c] text-[10px] font-bold text-white uppercase tracking-wider mb-2 inline-block">
                  Discipline {modalDiscipline.num}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug">
                  {modalDiscipline.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setModalDiscipline(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white backdrop-blur-md transition border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technical Scope &amp; Methodology
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {modalDiscipline.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Verified Engineering Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {modalDiscipline.deliverables.map((item, i) => (
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

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  Calibrated Instrumentation &amp; Software
                </h4>
                <div className="flex flex-wrap gap-2">
                  {modalDiscipline.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-[#ea580c] border border-orange-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link
                  href="/projects"
                  onClick={() => setModalDiscipline(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-full transition"
                >
                  <span>View Related Projects (31)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  href="#contact"
                  onClick={() => setModalDiscipline(null)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-full shadow-md shadow-orange-500/20 transition"
                >
                  <span>Request RFQ for this Discipline</span>
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
