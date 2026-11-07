"use client";

import React from "react";
import Link from "next/link";
import { AnimatedLogo } from "./AnimatedLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 py-10 font-mono">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="/" className="inline-block">
          <AnimatedLogo size="sm" light priority showText={true} />
        </Link>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <Link href="/#home" className="hover:text-[#0284c7] transition">
            Home
          </Link>
          <Link href="/#portfolio" className="hover:text-[#0284c7] transition">
            Works
          </Link>
          <Link href="/projects" className="hover:text-[#0284c7] transition">
            Projects (31)
          </Link>
          <Link href="/fleet" className="hover:text-[#0284c7] transition">
            Fleet
          </Link>
          <Link href="/#contact" className="hover:text-[#0284c7] transition">
            Contact
          </Link>
        </div>

        <p className="text-[11px] text-slate-500 text-center md:text-right">
          © 2026 Geospatial Works. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
