"use client";

import React, { useState } from "react";
import Image from "next/image";
import { servicesData, Service } from "@/data/companyData";
import { 
  Plane, 
  MapPin, 
  Compass, 
  Waves, 
  Layers, 
  Building2, 
  CheckCircle2, 
  ArrowRight, 
  Check, 
  FileCheck,
  ChevronRight
} from "lucide-react";

export const ServicesSection: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(servicesData[0].id);

  const activeService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  const getIcon = (name: string) => {
    switch (name) {
      case "Plane":
        return <Plane className="w-5 h-5" />;
      case "MapPin":
        return <MapPin className="w-5 h-5" />;
      case "Compass":
        return <Compass className="w-5 h-5" />;
      case "Waves":
        return <Waves className="w-5 h-5" />;
      case "Layers":
        return <Layers className="w-5 h-5" />;
      case "Building2":
        return <Building2 className="w-5 h-5" />;
      default:
        return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#0034a0] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Slides 05 – 15 Scope</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Engineering & <br />
            <span className="text-[#0034a0]">Geospatial Survey Capabilities</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            From geodetic ground control points and airborne photogrammetry to hydrodynamic river surveys and turn-key infrastructure design drawings.
          </p>
        </div>

        {/* Desktop & Tablet Interactive Service Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Service Selector Tabs (Left Side on Desktop) */}
          <div className="lg:col-span-4 space-y-2">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">
              Select Service Domain
            </div>
            
            {servicesData.map((service) => {
              const isSelected = service.id === selectedServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#0034a0] text-white shadow-md shadow-blue-900/20"
                      : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-100"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-white text-[#0034a0] shadow-xs group-hover:scale-105"
                      } transition-transform`}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <div>
                      <div className="font-bold text-sm leading-snug">
                        {service.title}
                      </div>
                      <div
                        className={`text-xs mt-0.5 ${
                          isSelected ? "text-blue-100" : "text-slate-500"
                        }`}
                      >
                        {service.badge}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-white translate-x-1"
                        : "text-slate-400 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Service Showcase Card (Right Side on Desktop) */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
              
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#e63946]">
                    {activeService.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
                    {activeService.title}
                  </h3>
                </div>

                <a
                  href={`#contact`}
                  className="inline-flex items-center gap-2 bg-[#0034a0] hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-xs transition-colors"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Real Project/Service Featured Image */}
              <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-slate-900 border border-slate-200 shadow-inner">
                <Image
                  src={activeService.featuredImage}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 800px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-sm border border-slate-700 font-semibold">
                    Official Slide Illustration
                  </span>
                  <span className="hidden sm:inline font-mono opacity-80">
                    Precision Field Operations
                  </span>
                </div>
              </div>

              {/* Full Description */}
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Capabilities & Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Capabilities */}
                <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#0034a0]" />
                    Technical Capabilities
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    {activeService.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#e63946]" />
                    Client Deliverables
                  </h4>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
                    {activeService.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <FileCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
