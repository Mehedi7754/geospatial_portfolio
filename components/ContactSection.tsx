"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* TROMA Style Minimal Header (NO Box Container) */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-3">
            Start Your Next Project
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
            Direct technical coordination with our principal geodetic surveyor for formal terms-of-reference (TOR), quotations, and rapid field dispatch across all 64 districts.
          </p>
        </div>

        {/* 2-Column Minimal Flow (ZERO Box Containers, Pure Typography & Fluid Inputs) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols): Direct Communication Links directly on canvas */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight leading-snug mb-2">
                Dhaka Operations Centre
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Central field instrumentation facility, GIS workstations, and drone fleet based in Dhaka with mobilization capability to any district in Bangladesh.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <a
                href="tel:+8801713907779"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-all flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Direct Hotline (24/7 Dispatch)
                  </span>
                  <span className="font-bold text-slate-900 group-hover:text-[#ea580c] transition text-sm sm:text-base">
                    +880 1713 90 777 9
                  </span>
                </div>
              </a>

              <a
                href="mailto:md.geospatialworks@gmail.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition-all flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Official RFP / Tender Inquiries
                  </span>
                  <span className="font-bold text-slate-900 group-hover:text-[#ea580c] transition text-xs sm:text-sm break-all">
                    md.geospatialworks@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#ea580c] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Dhaka Headquarters
                  </span>
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    House 14, Road 7, Sector 3, Uttara, Dhaka-1230
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Sleek Inquiry Form directly on canvas */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                  Project Brief Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md">
                  Our principal geodetic surveyor is reviewing your terms-of-reference. We will contact you within 2 business hours with technical notes and quotation.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", contact: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Your Name &amp; Authority / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Engr. Tanvir Ahmed (BBA Project Office)"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Email Address or Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. tanvir@authority.gov.bd or +880 1700 000000"
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Project Scope, Location &amp; Survey Discipline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe survey corridor length, district/mouza, required deliverables (e.g. RTK staking, drone orthomosaic, bathymetry, GIS)..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:bg-white focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
                    <span>SOB Datum Calibration • NDA Protected</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-orange-500/25 transition transform hover:-translate-y-0.5 disabled:opacity-50"
                  >
                    <span>{loading ? "Sending..." : "Send Project Brief"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
