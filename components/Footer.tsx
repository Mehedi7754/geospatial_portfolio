"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Award } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#home" className="inline-block">
              <AnimatedLogo size="sm" light priority showText={true} />
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Accredited 1st Class geospatial and engineering consultancy delivering millimeter geodetic
              surveys, drone photogrammetry, hydrography, and enterprise GIS databases across Bangladesh.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20">
                SOB / PWD Datum Calibrated
              </span>
              <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                31+ Verified Deliverables
              </span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-tight">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="hover:text-[#ea580c] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#ea580c] transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#ea580c] transition">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-[#ea580c] transition">
                  Recent Work (31)
                </Link>
              </li>
              <li>
                <Link href="#fleet" className="hover:text-[#ea580c] transition">
                  Calibrated Fleet
                </Link>
              </li>
              <li>
                <Link href="#trust" className="hover:text-[#ea580c] transition">
                  Client Endorsements
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-tight">Disciplines</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link href="#services" className="hover:text-[#ea580c] transition">
                  Topographic &amp; Geodetic Survey
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#ea580c] transition">
                  UAV Drone Photogrammetry
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#ea580c] transition">
                  Bridge Pier &amp; Highway Alignment
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#ea580c] transition">
                  Bathymetric Hydro Sounding
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#ea580c] transition">
                  GIS Databases &amp; Web Portals
                </Link>
              </li>
            </ul>
          </div>

          {/* Office Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-sm tracking-tight">Dhaka Headquarters</h4>
            <div className="space-y-2.5">
              <a
                href="tel:+8801713907779"
                className="flex items-center gap-2 text-slate-300 hover:text-[#ea580c] transition font-bold"
              >
                <Phone className="w-4 h-4 text-[#ea580c]" />
                <span>+880 1713 90 777 9</span>
              </a>

              <a
                href="mailto:md.geospatialworks@gmail.com"
                className="flex items-center gap-2 text-slate-300 hover:text-[#ea580c] transition"
              >
                <Mail className="w-4 h-4 text-[#ea580c]" />
                <span>md.geospatialworks@gmail.com</span>
              </a>

              <p className="flex items-start gap-2 text-slate-400 leading-snug">
                <MapPin className="w-4 h-4 text-[#ea580c] flex-shrink-0 mt-0.5" />
                <span>Plot 14, Road 02, Aram Housing, 40ft, Bosila, Mohammadpur, Dhaka-1207</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © 2026 Geospatial Works Bangladesh. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Where Engineering Meets Precision</span>
            <span>•</span>
            <span>1st Class Contractor &amp; Geospatial Consultancy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
