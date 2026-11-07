"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";

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
    }, 500);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white border-t border-slate-200">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Minimal Section Header */}
        <div className="pb-8 mb-12 border-b border-slate-200">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284c7] block mb-2">
            // CONTACT &amp; DISPATCH
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            Start Your Next Project.
          </h2>
        </div>

        {/* 2-Column Minimal Flow: Pure Typography + Clean Minimal Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols): Clean Minimal Contact Details (No Heavy Boxes) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-1">
                OPERATIONS CENTRE
              </span>
              <h3 className="text-2xl font-bold text-[#0f172a] tracking-tight mb-2">
                Dhaka Headquarters
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Connect directly for geodetic baseline surveys, drone photogrammetry, bathymetry, and spatial engineering consultations across Bangladesh.
              </p>
            </div>

            {/* Direct Links (Minimal Clean Typography) */}
            <div className="space-y-5 text-sm">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold mb-1">
                  DIRECT DESK HOTLINE (24/7)
                </span>
                <a
                  href="tel:+8801713907779"
                  className="text-lg sm:text-xl font-bold text-[#0f172a] hover:text-[#0284c7] transition font-mono"
                >
                  +880 1713 90 777 9
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold mb-1">
                  OFFICIAL RFP &amp; TENDER INQUIRIES
                </span>
                <a
                  href="mailto:md.geospatialworks@gmail.com"
                  className="text-sm sm:text-base font-bold text-[#0f172a] hover:text-[#0284c7] transition font-mono break-all"
                >
                  md.geospatialworks@gmail.com
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold mb-1">
                  OFFICE &amp; FIELD DEPOT
                </span>
                <p className="text-xs sm:text-sm text-slate-700 font-mono">
                  Plot 14, Road 02, Aram Housing, Bosila, Mohammadpur, Dhaka-1207
                </p>
                <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                  Sunday – Thursday: 9:00 AM – 6:00 PM
                </span>
              </div>
            </div>

            {/* Minimal Status Indicator */}
            <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-mono text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>SOB Datum Certified • Ready for Nationwide Dispatch</span>
            </div>
          </div>

          {/* Right Column (7 Cols): Sleek Minimal Form (No Outer Container) */}
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
                  Our principal geodetic surveyor is reviewing your requirements. We will contact you within 2 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", contact: "", message: "" });
                  }}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-mono font-bold hover:bg-[#0284c7] transition rounded-none uppercase cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-2 uppercase">
                    Your Name &amp; Authority / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Engr. Tanvir Ahmed (BBA / LGED / Developer)"
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7] transition rounded-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-2 uppercase">
                    Official Email or Phone Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder="e.g. tanvir@agency.gov.bd or +880 1700 000000"
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7] transition rounded-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-2 uppercase">
                    Project Scope, Location &amp; Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe survey corridor length, location/district, accuracy requirements (RTK, drone photogrammetry, bathymetry, GIS)..."
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7] transition rounded-none resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
                  <span className="text-slate-400 text-[11px]">
                    Strict NDA Privacy &bull; Direct Technical Evaluation
                  </span>

                  <AnimatedButton
                    type="submit"
                    variant="primary"
                    pulseDot={true}
                    className="w-full sm:w-auto text-xs"
                  >
                    {loading ? "TRANSMITTING..." : "TRANSMIT PROJECT BRIEF"}
                  </AnimatedButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
