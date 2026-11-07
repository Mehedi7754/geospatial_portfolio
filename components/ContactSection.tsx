"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";

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
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-b border-slate-200">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#ea580c] block mb-2">
              [ INQUIRIES &amp; RAPID MOBILIZATION DESK ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Start Your Next Project
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-400 self-start sm:self-end">
            DISPATCH CAPABILITY ACROSS ALL 64 DISTRICTS
          </span>
        </div>

        {/* 2-Column Minimal Flow: Studio Coordinates on Left + Clean Inquiry on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols): Direct Communication Links directly on canvas */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight leading-snug mb-2">
                Dhaka Operations Centre
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Central field instrumentation facility, GIS workstations, and drone fleet based in Dhaka with rapid mobilization capability to any district in Bangladesh.
              </p>
            </div>

            <div className="space-y-4 pt-2 font-mono text-xs">
              <a
                href="tel:+8801713907779"
                className="flex items-center gap-4 p-4 border border-slate-200 hover:border-slate-900 transition rounded-none group"
              >
                <div className="w-10 h-10 bg-slate-100 group-hover:bg-[#ea580c] text-slate-700 group-hover:text-white transition-colors flex items-center justify-center shrink-0 rounded-none">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">
                    DIRECT DESK HOTLINE (24/7)
                  </span>
                  <span className="font-bold text-slate-900 group-hover:text-[#ea580c] transition text-sm">
                    +880 1713 90 777 9
                  </span>
                </div>
              </a>

              <a
                href="mailto:md.geospatialworks@gmail.com"
                className="flex items-center gap-4 p-4 border border-slate-200 hover:border-slate-900 transition rounded-none group"
              >
                <div className="w-10 h-10 bg-slate-100 group-hover:bg-[#ea580c] text-slate-700 group-hover:text-white transition-colors flex items-center justify-center shrink-0 rounded-none">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">
                    OFFICIAL RFP &amp; TENDER INQUIRIES
                  </span>
                  <span className="font-bold text-slate-900 group-hover:text-[#ea580c] transition text-xs break-all">
                    md.geospatialworks@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-none">
                <div className="w-10 h-10 bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 rounded-none">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">
                    HEADQUARTERS LOCATION
                  </span>
                  <span className="font-bold text-slate-900 text-xs">
                    House 14, Road 7, Sector 3, Uttara, Dhaka-1230
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Sharp Inquiry Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-12 border border-slate-200 p-8 text-center space-y-4 rounded-none">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto rounded-none">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Project Brief Received
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Our principal geodetic surveyor is reviewing your terms-of-reference. We will contact you within 2 business hours with technical notes and quotation.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", contact: "", message: "" });
                  }}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-mono font-bold hover:bg-slate-800 transition rounded-none uppercase cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-1.5 uppercase">
                    Your Name &amp; Authority / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Engr. Tanvir Ahmed (BBA Project Office)"
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#ea580c] transition rounded-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-1.5 uppercase">
                    Email Address or Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. tanvir@authority.gov.bd or +880 1700 000000"
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#ea580c] transition rounded-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-1.5 uppercase">
                    Project Scope, Location &amp; Survey Discipline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe survey corridor length, district/mouza, required deliverables (e.g. RTK staking, drone orthomosaic, bathymetry, GIS)..."
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#ea580c] transition rounded-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                  <div className="flex items-center gap-2 text-slate-500">
                    <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
                    <span>SOB DATUM CALIBRATION • NDA PROTECTED</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs font-bold transition rounded-none uppercase cursor-pointer disabled:opacity-50"
                  >
                    <span>{loading ? "TRANSMITTING..." : "TRANSMIT BRIEF"}</span>
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
