"use client";

import React from "react";
import Link from "next/link";
import { AnimatedLogo } from "./AnimatedLogo";
import { companyProfile, clientLogos } from "@/data/companyData";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  ArrowUp, 
  ShieldCheck, 
  Award 
} from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs sm:text-sm">
      
      {/* Upper Footer: Logo, Bio & Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info (Cols 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block bg-white p-3 rounded-2xl shadow-sm">
              <AnimatedLogo size="md" />
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {companyProfile.aboutShort}
            </p>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-800 text-blue-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>1st Class Contractor & Engineering Consultancy</span>
              </span>
            </div>
          </div>

          {/* Quick Links (Cols 5-7) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Corporate Profile & Values
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Core Engineering & Survey Services
                </a>
              </li>
              <li>
                <a href="#equipment" className="hover:text-white transition-colors">
                  Fleet & Technological Arsenal
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Milestone Projects & 35+ Case Studies
                </a>
              </li>
              <li>
                <a href="#experts" className="hover:text-white transition-colors">
                  Expert Engagement Network
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Request Consultation & Submit ToR
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services (Cols 8-9) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Key Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>UAV Photogrammetry</li>
              <li>RTK GNSS Surveys</li>
              <li>Hydrographic Bathymetry</li>
              <li>GIS & Remote Sensing</li>
              <li>Corridor Alignment</li>
              <li>3D Modeling & BIM</li>
              <li>QA / QC Geodetic Audits</li>
            </ul>
          </div>

          {/* Corporate Office Contact (Cols 10-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Corporate Office
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{companyProfile.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a 
                  href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white font-semibold text-slate-200"
                >
                  {companyProfile.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a 
                  href={`mailto:${companyProfile.contact.email}`}
                  className="hover:text-white truncate"
                >
                  {companyProfile.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <a 
                  href="https://www.geospatialworks.com.bd" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {companyProfile.contact.website}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-500 pt-1">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{companyProfile.contact.officeHours}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Micro Bar: Copyright, Back to Top */}
      <div className="border-t border-slate-900 bg-slate-950/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {companyProfile.name}. All rights reserved. • Where Engineering Meets Precision.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Dhaka, Bangladesh</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
              aria-label="Back to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
};
