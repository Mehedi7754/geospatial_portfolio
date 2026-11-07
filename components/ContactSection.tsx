"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, ShieldCheck, Clock, Award, Send } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";

const disciplines = [
  "Topographic & Cadastral",
  "UAV Drone Photogrammetry",
  "Bridge & Highway Alignment",
  "Bathymetric Sounding",
  "Enterprise GIS & PostGIS",
];

export const ContactSection: React.FC = () => {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>([
    "Topographic & Cadastral",
  ]);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    scope: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleDiscipline = (disc: string) => {
    setSelectedDisciplines((prev) =>
      prev.includes(disc)
        ? prev.length > 1
          ? prev.filter((d) => d !== disc)
          : prev
        : [...prev, disc]
    );
  };

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
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0284c7] block mb-2">
              [ INQUIRIES &amp; RAPID MOBILIZATION DESK ]
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
              Start Your Next Project
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 self-start sm:self-end">
            RAPID FIELD CREW MOBILIZATION ACROSS ALL 64 DISTRICTS
          </span>
        </div>

        {/* 2-Column Professional Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column (5 Cols): Direct Operations Centre Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0284c7] block mb-1">
                EXECUTIVE LIAISON &amp; HEADQUARTERS
              </span>
              <h3 className="text-2xl font-black text-[#0f172a] tracking-tight">
                Dhaka Operations Centre
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Connect directly with our lead geodetic engineers and project directors to discuss project terms-of-reference (ToR), feasibility budgets, and field schedule mobilization.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {/* Direct Hotline Card */}
              <a
                href="tel:+8801713907779"
                className="flex items-center gap-4 p-4 border border-slate-200 hover:border-[#0284c7] transition rounded-none group bg-slate-50/50 hover:bg-white"
              >
                <div className="w-10 h-10 bg-slate-100 group-hover:bg-[#0284c7] text-slate-700 group-hover:text-white transition-colors flex items-center justify-center shrink-0 rounded-none">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">
                    DIRECT DESK HOTLINE (24/7 RAPID DISPATCH)
                  </span>
                  <span className="font-bold text-slate-900 group-hover:text-[#0284c7] transition text-sm">
                    +880 1713 90 777 9
                  </span>
                </div>
              </a>

              {/* Official RFP & Tender Email */}
              <a
                href="mailto:md.geospatialworks@gmail.com"
                className="flex items-center gap-4 p-4 border border-slate-200 hover:border-[#0284c7] transition rounded-none group bg-slate-50/50 hover:bg-white"
              >
                <div className="w-10 h-10 bg-slate-100 group-hover:bg-[#0284c7] text-slate-700 group-hover:text-white transition-colors flex items-center justify-center shrink-0 rounded-none">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">
                    OFFICIAL RFP &amp; TENDER INQUIRIES
                  </span>
                  <span className="font-bold text-slate-900 group-hover:text-[#0284c7] transition text-xs break-all">
                    md.geospatialworks@gmail.com
                  </span>
                </div>
              </a>

              {/* Office Location */}
              <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-none bg-slate-50/50">
                <div className="w-10 h-10 bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 rounded-none">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">
                    HEADQUARTERS &amp; FIELD DEPOT
                  </span>
                  <span className="font-bold text-slate-900 text-xs block">
                    Plot 14, Road 02, Aram Housing, Bosila, Mohammadpur, Dhaka-1207
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5 block">
                    Coord: 23°45&apos;N 90°21&apos;E • SOB Geodetic Baseline
                  </span>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-center gap-4 p-4 border border-slate-200 rounded-none bg-slate-50/50">
                <div className="w-10 h-10 bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 rounded-none">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block font-bold">
                    OFFICE HOURS &amp; EMERGENCY MOBILIZATION
                  </span>
                  <span className="font-bold text-slate-900 text-xs">
                    Sunday – Thursday: 9:00 AM – 6:00 PM (Emergency Crews 24/7)
                  </span>
                </div>
              </div>
            </div>

            {/* Certification Trust Badges */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-[#0284c7]" />
                <span className="font-bold text-slate-900">1st Class Contractor</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#ea3829]" />
                <span className="font-bold text-slate-900">SOB Certified Datum</span>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols): Executive Project Brief & RFP Submission Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-12 border border-slate-200 p-8 text-center space-y-4 rounded-none bg-slate-50/50">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto rounded-none">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Project Brief Transmitted Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Our principal geodetic surveyor and engineering director will evaluate your scope requirements and respond within 2 business hours with technical notes and quotation.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", contact: "", scope: "", message: "" });
                  }}
                  className="px-6 py-2.5 bg-slate-900 text-white text-xs font-mono font-bold hover:bg-[#0284c7] transition rounded-none uppercase cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 bg-white border border-slate-200 p-6 sm:p-8 rounded-none shadow-xs">
                {/* Service Discipline Selector Chips */}
                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-2 uppercase">
                    Select Survey Discipline / Scope *
                  </label>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {disciplines.map((d) => {
                      const isSelected = selectedDisciplines.includes(d);
                      return (
                        <button
                          key={d}
                          type="button"
                          onClick={() => toggleDiscipline(d)}
                          className={`px-3 py-1.5 text-[11px] font-bold uppercase transition rounded-none cursor-pointer border ${
                            isSelected
                              ? "bg-[#0284c7] text-white border-[#0284c7] shadow-xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-800"
                          }`}
                        >
                          {isSelected ? "✓ " : "+ "}
                          {d}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Authority & Name */}
                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-1.5 uppercase">
                    Your Name &amp; Authority / Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Engr. Tanvir Ahmed • BBA / LGED / Developer"
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7] transition rounded-none"
                  />
                </div>

                {/* Email / Phone & Project Location Scope */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono font-bold text-slate-700 block mb-1.5 uppercase">
                      Official Email or Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      placeholder="e.g. contact@agency.gov.bd or +880 1700..."
                      className="w-full px-4 py-3 bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7] transition rounded-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-slate-700 block mb-1.5 uppercase">
                      Project Location / District
                    </label>
                    <input
                      type="text"
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      placeholder="e.g. Chittagong, Sylhet, Gazipur..."
                      className="w-full px-4 py-3 bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7] transition rounded-none"
                    />
                  </div>
                </div>

                {/* Terms of Reference Description */}
                <div>
                  <label className="text-xs font-mono font-bold text-slate-700 block mb-1.5 uppercase">
                    Project Scope &amp; Deliverables Description *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify corridor length, target accuracy (e.g. RTK sub-cm, UAV 2.5cm GSD), datum requirements, or timeline expectations..."
                    className="w-full px-4 py-3 bg-white border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:border-[#0284c7] transition rounded-none resize-none"
                  />
                </div>

                {/* Submit Actions */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs border-t border-slate-100">
                  <div className="flex items-center gap-2 text-slate-500 text-[11px]">
                    <ShieldCheck className="w-4 h-4 text-[#0284c7]" />
                    <span>SOB DATUM CALIBRATION • STRICT NDA PRIVACY</span>
                  </div>

                  <AnimatedButton
                    type="submit"
                    variant="primary"
                    pulseDot={true}
                    className="w-full sm:w-auto text-xs"
                  >
                    {loading ? "TRANSMITTING BRIEF..." : "TRANSMIT PROJECT BRIEF"}
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
