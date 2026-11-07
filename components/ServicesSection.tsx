"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Activity,
  Layers,
  Scale,
  Database,
  Compass,
  Plane,
  MapPin,
  Waves,
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
  image: string;
  icon: React.ElementType;
  deliverables: string[];
  techStack: string[];
}

const servicesData: ServiceItem[] = [
  // --- ROW 1: Field engineering & workstation photography ---
  {
    id: "remote-sensing",
    category: "Remote Sensing",
    title: "Satellite Remote Sensing",
    subtitle: "Multi-temporal NDVI vegetation & regional land cover analysis",
    description:
      "Satellite imagery analysis, multi-temporal NDVI vegetation health mapping, and regional land cover change monitoring for agricultural and environmental planning.",
    image: "/assets/showcase/satellite-remote-sensing.png",
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
    image: "/assets/showcase/engineering-site-investigation.png",
    icon: Layers,
    deliverables: [
      "Building axis and foundation centerlines with sub-mm tolerances",
      "Elevated viaduct pier locations for expressway projects",
      "Highway horizontal & vertical curve geometry setting",
      "As-built structural deviation and settlement logs",
    ],
    techStack: ["1-Second Precision Total Station", "Digital Barcode Level", "AutoCAD Civil 3D"],
  },
  {
    id: "consultancy",
    category: "Advisory",
    title: "Geospatial Consultancy",
    subtitle: "Enterprise GIS strategy, tender documentation & spatial advisory",
    description:
      "Expert advisory, tender documentation, and strategic planning for enterprise GIS, geodetic surveys, and national land zoning initiatives.",
    image: "/assets/showcase/spatial-data-analytics.png",
    icon: Scale,
    deliverables: [
      "Institutional geodatabase architecture design",
      "Survey methodology and geodetic network planning",
      "National land zoning technical specifications",
      "Tender spatial documentation and TOR review",
    ],
    techStack: ["Enterprise GIS Architecture", "Spatial Policy Framework", "QA/QC Audits"],
  },
  {
    id: "gis-mapping",
    category: "Spatial Database",
    title: "GIS Mapping & Databases",
    subtitle: "PostgreSQL/PostGIS geodatabases & interactive web portals",
    description:
      "Custom GIS development, relational PostGIS database architectures, and interactive web mapping portals for municipalities and utility networks.",
    image: "/assets/showcase/gis-mapping-analysis.png",
    icon: Database,
    deliverables: [
      "PostgreSQL/PostGIS relational geodatabases",
      "Multi-criteria spatial suitability models",
      "Interactive web GIS dashboards (Leaflet/Mapbox)",
      "Digitized utility networks and municipal assets",
    ],
    techStack: ["ArcGIS Pro", "QGIS Desktop", "PostgreSQL / PostGIS", "Python GeoPandas"],
  },

  // --- ROW 2: Field Survey & Spatial Modeling ---
  {
    id: "topographic",
    category: "Digital Survey",
    title: "Topographic & Engineering Survey",
    subtitle: "Sub-centimeter contour mapping, DEM/DSM & TBM baselines",
    description:
      "Sub-centimeter terrain, elevation, contour, and site feature mapping for bridges, highways, and infrastructure design tied to SOB/PWD datum.",
    image: "/assets/showcase/photogrammetry-3d-terrain.png",
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
    subtitle: "Sub-3cm GSD orthomosaics, 3D mesh & volumetric cut/fill",
    description:
      "High-resolution drone orthomosaics, 3D terrain reconstruction, point cloud generation, and volumetric earthwork computations for industrial zones.",
    image: "/assets/showcase/drone-uav-field-operation.png",
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
    id: "mouza-survey",
    category: "Cadastral",
    title: "Mouza Sheet Demarcation",
    subtitle: "CS/RS/BS cadastral map geo-rectification & title boundary staking",
    description:
      "Historical CS/RS/SA/BS mouza sheet geo-referencing, title boundary demarcation, and Right-of-Way (RoW) acquisition strip maps.",
    image: "/assets/showcase/feasibility-cad-engineering.png",
    icon: MapPin,
    deliverables: [
      "Scanned & rectified CS/RS/BS cadastral sheets",
      "Plot-by-plot ownership area calculations",
      "Permanent boundary monumentation & staking",
      "Right-of-Way (RoW) strip maps for acquisitions",
    ],
    techStack: ["High-accuracy GNSS Rover", "Mouza Digitizer Suite", "ArcGIS Coordinate Rectifier"],
  },
  {
    id: "bathymetry",
    category: "Hydrography",
    title: "Bathymetric Hydro Survey",
    subtitle: "Dual-frequency acoustic depth sounding & riverbed morphology",
    description:
      "Underwater riverbed acoustic depth profiling, cross-section sounding, and hydrodynamic modeling for flood mitigation and dredging plans.",
    image: "/assets/showcase/river-bathymetry-sounding.jpg",
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
    <section id="services" className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-[11px] font-bold tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5 text-amber-600" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0f172a] tracking-tight leading-tight">
            Comprehensive surveying &amp; geospatial solutions.
          </h2>
          <p className="mt-2 text-slate-500 text-sm leading-relaxed">
            Eight integrated technical disciplines for nationwide geodetic field capture, drone mapping, and spatial databases.
          </p>
        </div>

        {/* Minimal 8 Cards Grid (Clean, Zero-Clutter Architecture) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesData.map((svc) => {
            const Icon = svc.icon;

            return (
              <div
                key={svc.id}
                onClick={() => setSelectedService(svc)}
                className="group rounded-2xl bg-white border border-slate-200/80 hover:border-slate-900 p-3.5 flex flex-col justify-between transition-all duration-200 hover:shadow-lg cursor-pointer"
              >
                <div>
                  {/* Clean Visual Container */}
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-slate-100 mb-3.5">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-slate-900/85 backdrop-blur-xs text-[10px] font-bold text-white tracking-wider uppercase">
                      {svc.category}
                    </div>
                  </div>

                  {/* Title & 1-line Subtitle (Minimal, No Paragraph Clutter) */}
                  <h3 className="text-sm font-bold text-[#0f172a] group-hover:text-amber-600 transition-colors leading-snug mb-1">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-snug line-clamp-2 mb-3">
                    {svc.subtitle}
                  </p>
                </div>

                {/* Minimalist Action Link */}
                <div className="pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-amber-600 transition-colors">
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-600 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {selectedService.category} Discipline
                </span>
                <h3 className="text-xl font-bold tracking-tight">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-5 text-sm text-slate-700">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Technical Deliverables
                </h4>
                <ul className="space-y-1.5 text-xs">
                  {selectedService.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Standard Toolchain &amp; Instrumentation
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-bold text-slate-700 hover:text-slate-900"
              >
                Close
              </button>
              <a
                href="#contact"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-bold rounded-xl shadow-xs transition"
              >
                Request Quotation
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
