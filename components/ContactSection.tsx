"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Send,
  Download,
  Building2,
  Calculator,
  ShieldCheck,
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "Topographic & Engineering Survey",
    scale: "Under 10 km / Under 50 km²",
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
    <section id="contact" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200/70 text-[#ea580c] text-[11px] font-bold tracking-wider uppercase mb-3.5">
            <Building2 className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Connect With Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-tight mb-3">
            Start Your Next Project
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl mx-auto">
            Connect with our principal geodetic surveyor and technical team for formal quotations, terms-of-reference (TOR), and rapid mobilization across all 64 districts.
          </p>
        </div>

        {/* 2-Column Grid: Office Credentials + Interactive RFQ Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column (5 Cols): Office Headquarters & Direct Desk */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-black text-[#0f172a] tracking-tight leading-snug mb-3">
                Dhaka Operations Centre
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Our main field instrumentation facility, GIS workstations, and drone hangar are based in
                Dhaka with dispatch capability to any district in Bangladesh.
              </p>

              {/* Direct Info Cards */}
              <div className="space-y-3 text-xs sm:text-sm">
                <a
                  href="tel:+8801713907779"
                  className="p-4 rounded-2xl bg-[#fafafa] border border-slate-200/80 hover:border-orange-300 transition flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Direct Hotline (24/7 Dispatch)
                    </span>
                    <span className="font-bold text-slate-900 group-hover:text-[#ea580c] transition">
                      +880 1713 90 777 9
                    </span>
                  </div>
                </a>

                <a
                  href="mailto:md.geospatialworks@gmail.com"
                  className="p-4 rounded-2xl bg-[#fafafa] border border-slate-200/80 hover:border-orange-300 transition flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-xl bg-orange-50 text-[#ea580c] group-hover:bg-[#ea580c] group-hover:text-white transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Official RFP / Tender Inquiries
                    </span>
                    <span className="font-bold text-slate-900 group-hover:text-[#ea580c] transition">
                      md.geospatialworks@gmail.com
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-[#fafafa] border border-slate-200/80 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-50 text-[#ea580c] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase text-slate-400 block">
                      Corporate Office
                    </span>
                    <span className="font-bold text-slate-900 block leading-snug">
                      Plot 14, Road 02, Aram Housing, 40ft, Bosila, Mohammadpur, Dhaka-1207
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Credential Badge */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <span>
                <strong>Accredited Supplier &amp; Contractor:</strong> Verified by BBA, BEZA, BWDB,
                DNCC, DSCC, and LGED.
              </span>
            </div>
          </div>

          {/* Right Column (7 Cols): Modern RFQ & Proposal Builder */}
          <div className="lg:col-span-7 bg-[#fafafa] border border-slate-200/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs">
            <div className="mb-6 pb-6 border-b border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] block mb-1">
                Project Quotation &amp; Feasibility
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#0f172a] tracking-tight">
                Request a Formal Proposal
              </h3>
              <p className="mt-1 text-slate-500 text-xs sm:text-sm">
                Submit project details for TOR reviews, baseline specifications, and formal budget estimations within 24 hours.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 text-center bg-white rounded-2xl border border-emerald-200 shadow-xs animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Proposal Request Transmitted
                </h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong className="text-slate-900">{formData.name}</strong>. Our chief
                  geodetic engineer will review your project parameters and respond within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-xl hover:bg-slate-800 transition"
                >
                  Submit Another Project
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Engr. Tanvir Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Organization / Agency *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. LGED / BEZA / EPC Ltd"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="engineer@agency.gov.bd"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+880 1700 000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Required Discipline *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                    >
                      <option>Topographic &amp; Engineering Survey</option>
                      <option>UAV Drone Aerial Photogrammetry</option>
                      <option>Construction Site &amp; Pier Layout</option>
                      <option>Bathymetric &amp; River Hydro Survey</option>
                      <option>Mouza Cadastral &amp; Boundary Demarcation</option>
                      <option>Enterprise GIS Database &amp; Web Portals</option>
                      <option>Satellite Remote Sensing &amp; NDVI</option>
                      <option>Consultancy &amp; Tender Documentation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1.5">
                      Estimated Project Scale
                    </label>
                    <select
                      value={formData.scale}
                      onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                    >
                      <option>Under 10 km corridor / Under 50 km²</option>
                      <option>10 km – 50 km corridor / 50 – 200 km²</option>
                      <option>50 km+ corridor / 200 km²+ regional zone</option>
                      <option>Nationwide Multi-District Program</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1.5">
                    Project Scope Details &amp; Location
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe project corridor, location/district, required accuracy tolerances, and target completion date..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
                  <span className="text-[11px] text-slate-500">
                    🔒 All technical spatial specifications kept strictly confidential.
                  </span>

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#ea580c] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-orange-500/25 transition disabled:opacity-50 transform hover:-translate-y-0.5"
                  >
                    {loading ? (
                      <span>Transmitting Request...</span>
                    ) : (
                      <>
                        <span>Submit Proposal Request</span>
                        <Send className="w-4 h-4 text-white" />
                      </>
                    )}
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
