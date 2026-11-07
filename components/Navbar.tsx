"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Phone, ChevronDown } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger floating pill header as soon as user begins scrolling down
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setServicesDropdown(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-2 sm:py-3 px-3 sm:px-6 pointer-events-none"
          : "py-4 px-4 sm:px-6 lg:px-8 bg-white/90 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      {/* Floating Pill Container (Matching https://ftvxdqz5tzxnifios3fctzct.203.96.190.78.sslip.io/) */}
      <div
        className={`pointer-events-auto transition-all duration-300 mx-auto flex items-center justify-between ${
          isScrolled
            ? "max-w-[1180px] bg-white/95 backdrop-blur-md rounded-full border border-slate-200/90 shadow-[0_10px_30px_rgba(16,45,46,0.12)] px-4 sm:px-6 h-[58px] sm:h-[62px]"
            : "max-w-[1360px]"
        }`}
      >
        {/* Brand Logo with Animated Pin & Typography */}
        <Link
          href="/"
          onClick={closeMobile}
          className="flex items-center gap-2.5 group focus:outline-hidden shrink-0"
          aria-label="Geospatial Works Home"
        >
          <AnimatedLogo size="xs" priority showText={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-[12.5px] font-bold text-slate-700"
          aria-label="Main Navigation"
        >
          <Link
            href="/#home"
            className="px-3 py-1.5 hover:text-[#0284c7] transition-colors rounded-full"
          >
            Home
          </Link>

          <Link
            href="/#about"
            className="px-3 py-1.5 hover:text-[#0284c7] transition-colors rounded-full"
          >
            About Us
          </Link>

          {/* Services with Hover Dropdown (Matching Reference Header) */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link
              href="/#services"
              className="px-3 py-1.5 hover:text-[#0284c7] transition-colors flex items-center gap-1 rounded-full"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  servicesDropdown ? "rotate-180 text-[#0284c7]" : ""
                }`}
              />
            </Link>

            {servicesDropdown && (
              <div className="absolute top-full left-0 mt-1 w-60 bg-white border border-slate-200 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-top-1 duration-150 font-mono text-xs">
                <Link
                  href="/#services"
                  onClick={() => setServicesDropdown(false)}
                  className="flex items-center justify-between p-2.5 hover:bg-sky-50 rounded-xl text-slate-800 hover:text-[#0284c7] font-semibold transition group"
                >
                  <span>Topographic Survey</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284c7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/#services"
                  onClick={() => setServicesDropdown(false)}
                  className="flex items-center justify-between p-2.5 hover:bg-sky-50 rounded-xl text-slate-800 hover:text-[#0284c7] font-semibold transition group"
                >
                  <span>Drone Mapping &amp; 3D</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284c7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/#services"
                  onClick={() => setServicesDropdown(false)}
                  className="flex items-center justify-between p-2.5 hover:bg-sky-50 rounded-xl text-slate-800 hover:text-[#0284c7] font-semibold transition group"
                >
                  <span>GIS &amp; PostGIS Spatial</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284c7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  href="/#services"
                  onClick={() => setServicesDropdown(false)}
                  className="flex items-center justify-between p-2.5 hover:bg-sky-50 rounded-xl text-slate-800 hover:text-[#0284c7] font-semibold transition group"
                >
                  <span>Riverbed Bathymetry</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0284c7] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/#portfolio"
            className="px-3 py-1.5 hover:text-[#0284c7] transition-colors rounded-full"
          >
            Works
          </Link>

          <Link
            href="/projects"
            className="px-3 py-1.5 hover:text-[#0284c7] transition-colors flex items-center gap-1.5 rounded-full"
          >
            <span>Projects</span>
            <span className="px-1.5 py-0.2 text-[10px] font-mono font-bold bg-sky-100 text-[#0284c7] rounded-full">
              31
            </span>
          </Link>

          <Link
            href="/fleet"
            className="px-3 py-1.5 hover:text-[#0284c7] transition-colors rounded-full"
          >
            Fleet
          </Link>

          <Link
            href="/#contact"
            className="px-3 py-1.5 hover:text-[#0284c7] transition-colors rounded-full"
          >
            Contact
          </Link>
        </nav>

        {/* Action Button: Corporate Contact Link with Arrow Circle Badge */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+8801713907779"
            className="hidden xl:flex items-center gap-2 px-3 py-1.5 text-xs font-mono font-semibold text-slate-600 hover:text-[#0284c7] transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#0284c7]" />
            <span>+880 1713 907779</span>
          </a>

          {/* Reference Site Style Contact Link Button with Arrow Up-Right Circle */}
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 pl-4 pr-1.5 py-1.5 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-full font-mono text-xs font-bold transition shadow-sm hover:shadow-md hover:shadow-sky-500/25 group"
          >
            <span className="uppercase tracking-wider">Contact Us</span>
            <span className="w-7 h-7 rounded-full bg-white text-[#0284c7] flex items-center justify-center transition-transform group-hover:scale-105 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shadow-xs">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 transition rounded-full"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto lg:hidden bg-white border border-slate-200 mt-2 mx-auto max-w-[1180px] rounded-3xl p-6 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 text-sm font-bold text-slate-700">
            <Link
              href="/#home"
              onClick={closeMobile}
              className="px-3 py-2.5 hover:bg-sky-50 hover:text-[#0284c7] rounded-xl transition"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={closeMobile}
              className="px-3 py-2.5 hover:bg-sky-50 hover:text-[#0284c7] rounded-xl transition"
            >
              About Us
            </Link>
            <Link
              href="/#services"
              onClick={closeMobile}
              className="px-3 py-2.5 hover:bg-sky-50 hover:text-[#0284c7] rounded-xl transition"
            >
              Technical Disciplines
            </Link>
            <Link
              href="/#portfolio"
              onClick={closeMobile}
              className="px-3 py-2.5 hover:bg-sky-50 hover:text-[#0284c7] rounded-xl transition"
            >
              Landmark Works
            </Link>
            <Link
              href="/projects"
              onClick={closeMobile}
              className="px-3 py-2.5 hover:bg-sky-50 hover:text-[#0284c7] flex items-center justify-between rounded-xl transition"
            >
              <span>31 Projects Directory</span>
              <span className="px-2 py-0.5 font-mono text-xs font-bold bg-sky-100 text-[#0284c7] rounded-full">
                31
              </span>
            </Link>
            <Link
              href="/fleet"
              onClick={closeMobile}
              className="px-3 py-2.5 hover:bg-sky-50 hover:text-[#0284c7] rounded-xl transition"
            >
              Calibrated Fleet
            </Link>
            <Link
              href="/#contact"
              onClick={closeMobile}
              className="px-3 py-2.5 hover:bg-sky-50 hover:text-[#0284c7] rounded-xl transition"
            >
              Contact
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 font-mono">
            <a
              href="tel:+8801713907779"
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 px-2"
            >
              <Phone className="w-4 h-4 text-[#0284c7]" />
              <span>Hotline: +880 1713 907779</span>
            </a>
            <Link
              href="/#contact"
              onClick={closeMobile}
              className="flex items-center justify-between w-full pl-5 pr-2 py-2 bg-[#0284c7] hover:bg-[#0369a1] text-white rounded-full font-mono text-xs font-bold transition shadow-sm"
            >
              <span className="uppercase tracking-wider">Contact Us</span>
              <span className="w-7 h-7 rounded-full bg-white text-[#0284c7] flex items-center justify-center">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
