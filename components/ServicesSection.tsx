"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
  Compass,
  Layers,
  Activity,
  Plane,
  Database,
  Waves,
} from "lucide-react";

interface Discipline {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  deliverables: string[];
  techStack: string[];
}

const disciplines: Discipline[] = [
  {
    id: "remote-sensing",
    badge: "REMOTE SENSING",
    title: "Satellite Remote Sensing",
    subtitle: "Multi-temporal NDVI vegetation & regional land cover analysis",
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
  {
    id: "site-layout",
    badge: "SITE STAKING",
    title: "Construction Site Layout",
    subtitle: "Sub-millimeter pier, axis & highway corridor setting-out",
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
    id: "geospatial-consultancy",
    badge: "ADVISORY",
    title: "Geospatial Consultancy",
    subtitle: "Enterprise GIS strategy, tender documentation & spatial advisory",
    description:
      "Strategic geospatial advisory for government ministries, foreign EPC contractors, feasibility study formulation, and national compliance audits.",
    image: "/assets/showcase/feasibility-cad-engineering.png",
    deliverables: [
      "Tender Technical Specifications & Terms-of-Reference (TOR)",
      "Geodetic control network accuracy validation reports",
      "Cadastral land acquisition schedule verification",
      "Multi-agency GIS data harmonization & metadata standards",
    ],
    techStack: ["AutoCAD Civil 3D", "ArcGIS Enterprise", "Survey of Bangladesh Baselines"],
  },
  {
    id: "gis-mapping",
    badge: "SPATIAL DATABASE",
    title: "GIS Mapping & Databases",
    subtitle: "PostgreSQL/PostGIS geodatabases & interactive web portals",
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
    id: "topographic",
    badge: "DIGITAL SURVEY",
    title: "Topographic & Engineering Survey",
    subtitle: "Sub-centimeter contour mapping, DEM/DSM & TBM baselines",
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
    badge: "DRONE SURVEY",
    title: "UAV Aerial Photogrammetry",
    subtitle: "Sub-3cm GSD orthomosaics, 3D mesh & volumetric cut/fill",
    description:
      "High-resolution drone orthomosaics, 3D terrain reconstruction, dense point clouds, and volumetric earthwork computations for industrial zones.",
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
    id: "cadastral",
    badge: "CADASTRAL",
    title: "Mouza Sheet Demarcation",
    subtitle: "CS/RS/BS cadastral map geo-rectification & title boundary staking",
    description:
      "High-precision geo-referencing of British-era CS, RS, and modern BS mouza maps tied to national geodetic control networks for dispute-free boundary demarcation.",
    image: "/assets/showcase/spatial-data-analytics.png",
    deliverables: [
      "Digitized & geo-rectified CS/RS/BS mouza sheets",
      "Land acquisition plot demarcation overlays",
      "Right-of-Way (RoW) boundary pillar coordinates",
      "Official cadastral area calculation certificates",
    ],
    techStack: ["Survey of Bangladesh Datum", "ArcGIS Pro", "Dual-Frequency RTK GNSS"],
  },
  {
    id: "bathymetry",
    badge: "HYDROGRAPHY",
    title: "Bathymetric Hydro Survey",
    subtitle: "Dual-frequency acoustic depth sounding & riverbed morphology",
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
];

export const ServicesSection: React.FC = () => {
  const [modalDiscipline, setModalDiscipline] = useState<Discipline | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Portfolio Header (Matching Dribbble Style) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
              CORE CAPABILITIES • 08 DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Engineering &amp; Survey Disciplines
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#ea580c] hover:text-[#c2410c] transition group self-start sm:self-end"
          >
            <span>Explore Associated Project Deliverables (31)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 8-Card Visual Portfolio Grid (Image-First, Minimal Link Design) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {disciplines.map((item) => (
            <div
              key={item.id}
              onClick={() => setModalDiscipline(item)}
              className="group cursor-pointer flex flex-col justify-between bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300"
            >
              <div>
                {/* Visual Image Block with Badge */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 mb-3.5">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-2.5 right-2.5 z-10">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/85 backdrop-blur-md text-[9px] font-mono font-bold uppercase tracking-wider text-white border border-white/10 shadow-sm">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Typography Block */}
                <h3 className="text-base font-black text-[#0f172a] group-hover:text-[#ea580c] transition-colors leading-snug mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-3">
                  {item.subtitle}
                </p>
              </div>

              {/* Minimal Link Footer */}
              <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#ea580c] transition-colors">
                <span>View Details</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
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
                  {modalDiscipline.badge}
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
