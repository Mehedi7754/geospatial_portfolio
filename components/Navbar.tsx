"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight, Menu, X, Phone, FileText } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2.5 bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80"
          : "py-4 bg-white/90 backdrop-blur-sm border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo with Animated Pin */}
        <Link
          href="#home"
          onClick={closeMobile}
          className="flex items-center gap-3 group focus:outline-hidden"
          aria-label="Geospatial Works Home"
        >
          <AnimatedLogo size="sm" priority showText={true} />
          <span className="hidden xl:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-50 text-amber-700 border border-amber-200/70">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-semibold text-slate-700"
          aria-label="Main Navigation"
        >
          <Link
            href="#home"
            className="px-3 py-1.5 rounded-lg hover:text-[#0f172a] hover:bg-slate-100/80 transition-colors"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="px-3 py-1.5 rounded-lg hover:text-[#0f172a] hover:bg-slate-100/80 transition-colors"
          >
            About
          </Link>

          {/* Services Dropdown */}
          <div className="relative group">
            <Link
              href="#services"
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg hover:text-[#0f172a] hover:bg-slate-100/80 transition-colors"
            >
              Services
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-700 transition-transform group-hover:rotate-180" />
            </Link>

            <div className="absolute top-full left-0 mt-1 w-60 py-2 bg-white rounded-2xl shadow-xl border border-slate-200/80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <Link
                href="#services"
                className="flex items-center justify-between px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition"
              >
                <span>Topographic &amp; Engineering</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="#services"
                className="flex items-center justify-between px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition"
              >
                <span>UAV Drone Photogrammetry</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="#services"
                className="flex items-center justify-between px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition"
              >
                <span>GIS Database &amp; Analytics</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <Link
                href="#services"
                className="flex items-center justify-between px-4 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-amber-600 transition"
              >
                <span>Bathymetric Hydro Survey</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
              <div className="border-t border-slate-100 my-1" />
              <Link
                href="#services"
                className="flex items-center justify-between px-4 py-2 text-xs font-bold text-[#0f172a] hover:bg-slate-50 hover:text-amber-600 transition"
              >
                <span>Explore All 8 Capabilities</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" />
              </Link>
            </div>
          </div>

          <Link
            href="#projects"
            className="px-3 py-1.5 rounded-lg hover:text-[#0f172a] hover:bg-slate-100/80 transition-colors"
          >
            Portfolio
          </Link>

          <Link
            href="#directory"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg hover:text-[#0f172a] hover:bg-slate-100/80 transition-colors"
          >
            <span>Directory</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
              31
            </span>
          </Link>

          <Link
            href="#fleet"
            className="px-3 py-1.5 rounded-lg hover:text-[#0f172a] hover:bg-slate-100/80 transition-colors"
          >
            Fleet
          </Link>

          <Link
            href="#team"
            className="px-3 py-1.5 rounded-lg hover:text-[#0f172a] hover:bg-slate-100/80 transition-colors"
          >
            Specialists
          </Link>
        </nav>

        {/* Action Buttons: Phone Hotline & Request Proposal */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+8801713907779"
            className="hidden md:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#0f172a] transition"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>+880 1713-907779</span>
          </a>

          <Link
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-bold rounded-xl shadow-xs hover:shadow-md transition-all duration-200 group"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <Link
              href="#home"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              About Us
            </Link>
            <Link
              href="#services"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Capabilities &amp; Services
            </Link>
            <Link
              href="#projects"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Business Portfolio
            </Link>
            <Link
              href="#directory"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Project Directory</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                31 Projects
              </span>
            </Link>
            <Link
              href="#fleet"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Calibrated Field Fleet
            </Link>
            <Link
              href="#team"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Engineering Specialists
            </Link>
            <Link
              href="#contact"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-slate-50"
            >
              Contact &amp; Proposal RFQ
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:+8801713907779"
              className="flex items-center gap-2 text-xs font-semibold text-slate-600"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Direct Desk: +880 1713 907779</span>
            </a>
            <Link
              href="#contact"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#0f172a] text-white text-xs font-bold rounded-xl shadow-xs"
            >
              <span>Request Technical Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
