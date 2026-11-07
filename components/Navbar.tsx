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
            className="px-3.5 py-1.5 rounded-full hover:text-[#ea580c] hover:bg-orange-50/60 transition-colors"
          >
            Home
          </Link>

          <Link
            href="#about"
            className="px-3.5 py-1.5 rounded-full hover:text-[#ea580c] hover:bg-orange-50/60 transition-colors"
          >
            About
          </Link>

          <Link
            href="#services"
            className="px-3.5 py-1.5 rounded-full hover:text-[#ea580c] hover:bg-orange-50/60 transition-colors"
          >
            Services
          </Link>

          <Link
            href="#portfolio"
            className="px-3.5 py-1.5 rounded-full hover:text-[#ea580c] hover:bg-orange-50/60 transition-colors flex items-center gap-1.5"
          >
            <span>Portfolio</span>
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-orange-100 text-[#ea580c]">
              31
            </span>
          </Link>

          <Link
            href="#trust"
            className="px-3.5 py-1.5 rounded-full hover:text-[#ea580c] hover:bg-orange-50/60 transition-colors"
          >
            Reviews
          </Link>

          <Link
            href="#contact"
            className="px-3.5 py-1.5 rounded-full hover:text-[#ea580c] hover:bg-orange-50/60 transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons: Phone Hotline & Coral Pill CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+8801713907779"
            className="hidden xl:flex items-center gap-2 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-[#ea580c] transition"
          >
            <Phone className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>+880 1713-907779</span>
          </a>

          <Link
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-full shadow-md shadow-orange-500/25 transition-all duration-200 group transform hover:-translate-y-0.5"
          >
            <span>Request Proposal</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ea580c]"
            >
              Home
            </Link>
            <Link
              href="#about"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ea580c]"
            >
              About Us
            </Link>
            <Link
              href="#services"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ea580c]"
            >
              Our Services
            </Link>
            <Link
              href="#portfolio"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ea580c] flex items-center justify-between"
            >
              <span>Recent Work &amp; Portfolio</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-orange-100 text-[#ea580c]">
                31
              </span>
            </Link>
            <Link
              href="#trust"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ea580c]"
            >
              Client Reviews
            </Link>
            <Link
              href="#contact"
              onClick={closeMobile}
              className="px-3 py-2 rounded-lg hover:bg-orange-50 hover:text-[#ea580c]"
            >
              Contact &amp; Proposal RFQ
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="tel:+8801713907779"
              className="flex items-center gap-2 text-xs font-semibold text-slate-600"
            >
              <Phone className="w-4 h-4 text-[#ea580c]" />
              <span>Direct Desk: +880 1713 907779</span>
            </a>
            <Link
              href="#contact"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-full shadow-md shadow-orange-500/25 transition"
            >
              <span>Request Formal Proposal</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
