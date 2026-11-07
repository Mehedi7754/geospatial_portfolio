"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Phone } from "lucide-react";
import { AnimatedLogo } from "./AnimatedLogo";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white/95 backdrop-blur-md border-b border-slate-200"
          : "py-4 bg-white/90 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo with Editorial Monograph Styling */}
        <Link
          href="/"
          onClick={closeMobile}
          className="flex items-center gap-3 group focus:outline-hidden"
          aria-label="Geospatial Works Home"
        >
          <AnimatedLogo size="sm" priority showText={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 text-[13px] font-semibold text-slate-700"
          aria-label="Main Navigation"
        >
          <Link
            href="/#home"
            className="px-3.5 py-1.5 hover:text-[#ea580c] transition-colors rounded-none"
          >
            Home
          </Link>

          <Link
            href="/#portfolio"
            className="px-3.5 py-1.5 hover:text-[#ea580c] transition-colors rounded-none"
          >
            Works
          </Link>

          <Link
            href="/projects"
            className="px-3.5 py-1.5 hover:text-[#ea580c] transition-colors flex items-center gap-1.5 rounded-none"
          >
            <span>Directory</span>
            <span className="px-1.5 py-0.2 text-[10px] font-mono font-bold bg-orange-100 text-[#ea580c] rounded-none">
              31
            </span>
          </Link>

          <Link
            href="/#about"
            className="px-3.5 py-1.5 hover:text-[#ea580c] transition-colors rounded-none"
          >
            Practice
          </Link>

          <Link
            href="/#services"
            className="px-3.5 py-1.5 hover:text-[#ea580c] transition-colors rounded-none"
          >
            Disciplines
          </Link>

          <Link
            href="/fleet"
            className="px-3.5 py-1.5 hover:text-[#ea580c] transition-colors rounded-none"
          >
            Fleet
          </Link>

          <Link
            href="/#contact"
            className="px-3.5 py-1.5 hover:text-[#ea580c] transition-colors rounded-none"
          >
            Contact
          </Link>
        </nav>

        {/* Action Buttons: Phone Hotline & Sharp Editorial Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="tel:+8801713907779"
            className="hidden xl:flex flex-col text-right font-mono"
          >
            <span className="text-[10px] font-bold uppercase text-slate-400">
              DISPATCH HOTLINE
            </span>
            <span className="text-xs font-bold text-slate-900 hover:text-[#ea580c] transition">
              +880 1713 90 777 9
            </span>
          </a>

          <Link
            href="/#contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-none shadow-xs transition-all duration-200 group"
          >
            <span>INQUIRE / RFQ</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 transition rounded-none"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2 duration-200 rounded-none">
          <div className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <Link
              href="/#home"
              onClick={closeMobile}
              className="px-3 py-2 hover:bg-slate-50 hover:text-[#ea580c] rounded-none"
            >
              Home
            </Link>
            <Link
              href="/#portfolio"
              onClick={closeMobile}
              className="px-3 py-2 hover:bg-slate-50 hover:text-[#ea580c] rounded-none"
            >
              Landmark Works
            </Link>
            <Link
              href="/projects"
              onClick={closeMobile}
              className="px-3 py-2 hover:bg-slate-50 hover:text-[#ea580c] flex items-center justify-between rounded-none"
            >
              <span>31 Projects Directory</span>
              <span className="px-2 py-0.5 font-mono text-xs font-bold bg-orange-100 text-[#ea580c] rounded-none">
                31
              </span>
            </Link>
            <Link
              href="/#about"
              onClick={closeMobile}
              className="px-3 py-2 hover:bg-slate-50 hover:text-[#ea580c] rounded-none"
            >
              Statement of Practice
            </Link>
            <Link
              href="/#services"
              onClick={closeMobile}
              className="px-3 py-2 hover:bg-slate-50 hover:text-[#ea580c] rounded-none"
            >
              Technical Disciplines
            </Link>
            <Link
              href="/fleet"
              onClick={closeMobile}
              className="px-3 py-2 hover:bg-slate-50 hover:text-[#ea580c] rounded-none"
            >
              Calibrated Fleet
            </Link>
            <Link
              href="/#contact"
              onClick={closeMobile}
              className="px-3 py-2 hover:bg-slate-50 hover:text-[#ea580c] rounded-none"
            >
              Contact &amp; Proposal RFQ
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3 font-mono">
            <a
              href="tel:+8801713907779"
              className="flex items-center gap-2 text-xs font-semibold text-slate-600"
            >
              <Phone className="w-4 h-4 text-[#ea580c]" />
              <span>Hotline: +880 1713 907779</span>
            </a>
            <Link
              href="/#contact"
              onClick={closeMobile}
              className="flex items-center justify-center gap-2 w-full py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold rounded-none shadow-xs transition"
            >
              <span>TRANSMIT RFQ BRIEF</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
