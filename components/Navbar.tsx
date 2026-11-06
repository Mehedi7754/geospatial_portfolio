"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatedLogo } from "./AnimatedLogo";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight, 
  Compass, 
  FileText 
} from "lucide-react";
import { companyProfile } from "@/data/companyData";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Equipment & Fleet", href: "#equipment" },
    { label: "Milestones & Projects", href: "#projects" },
    { label: "Expert Network", href: "#experts" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top micro-bar for quick contact info */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-8 border-b border-slate-800">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                1st Class Contractor & Engineering Consultancy
              </span>
              <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                Bosila, Mohammadpur, Dhaka-1207
              </span>
            </div>

            <div className="flex items-center gap-4 sm:gap-6 text-xs font-medium">
              <a 
                href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>{companyProfile.contact.phone}</span>
              </a>
              <a 
                href={`mailto:${companyProfile.contact.email}`}
                className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-red-400" />
                <span>{companyProfile.contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <nav 
          className={`transition-all duration-300 px-4 sm:px-8 ${
            isScrolled 
              ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200 dark:border-slate-800" 
              : "bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm py-3.5 border-b border-slate-200/60"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="focus:outline-none">
              <AnimatedLogo size={isScrolled ? "sm" : "md"} priority />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-[#0034a0] rounded-lg hover:bg-blue-50/80 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#0034a0] hover:bg-[#00287a] text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm shadow-blue-500/20 hover:shadow-md transition-all active:scale-[0.98]"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-Over Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Panel */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col p-6 z-50 animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <AnimatedLogo size="xs" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-md text-slate-500 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="py-6 flex flex-col gap-2 flex-grow overflow-y-auto">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-semibold text-slate-800 hover:text-[#0034a0] hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Compass className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            {/* Drawer Footer info */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <div className="text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <a href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`} className="font-semibold text-slate-900">
                    {companyProfile.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="truncate">{companyProfile.contact.email}</span>
                </div>
              </div>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0034a0] text-white py-3 rounded-lg font-bold text-sm shadow hover:bg-[#00287a] transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Submit ToR / Scope</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
