"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12 font-mono">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          {/* Brand Info (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <AnimatedLogo size="sm" light priority showText={true} />
            </Link>
            <div className="flex items-center gap-2 pt-1">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-900 text-orange-400 border border-orange-500/30 rounded-none">
                SOB / PWD DATUM CALIBRATED
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold bg-slate-900 text-emerald-400 border border-emerald-500/30 rounded-none">
                31 VERIFIED WORKS
              </span>
            </div>
          </div>

          {/* Quick Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-slate-400 text-xs font-sans">
              <li>
                <Link href="/" className="hover:text-[#ea580c] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-[#ea580c] transition">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#ea580c] transition">
                  31 Projects Archive
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-[#ea580c] transition">
                  Calibrated Fleet
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#ea580c] transition">
                  Statement of Practice
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#ea580c] transition">
                  Contact &amp; RFQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Disciplines</h4>
            <ul className="space-y-2 text-slate-400 text-xs font-sans">
              <li>
                <Link href="/#services" className="hover:text-[#ea580c] transition">
                  Topographic &amp; Geodetic Survey
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#ea580c] transition">
                  UAV Drone Photogrammetry
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#ea580c] transition">
                  Bridge Pier &amp; Highway Alignment
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#ea580c] transition">
                  Bathymetric Hydro Sounding
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-[#ea580c] transition">
                  Enterprise GIS &amp; PostGIS Databases
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Coordinates (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Studio Headquarters</h4>
            <div className="space-y-2.5 text-slate-400 text-xs font-sans">
              <p>House 14, Road 7, Sector 3, Uttara, Dhaka-1230, Bangladesh</p>
              <p className="font-mono text-white pt-1">+880 1713 90 777 9</p>
              <p className="font-mono text-orange-400">md.geospatialworks@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 Geospatial Works. All rights reserved. 1st Class Geodetic Practice.</p>
          <div className="flex items-center gap-6">
            <span>SOB DATUM SPECIFICATION</span>
            <span>STANDARDS COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
