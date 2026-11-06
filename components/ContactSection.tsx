"use client";

import React, { useState } from "react";
import { companyProfile, servicesData } from "@/data/companyData";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  UploadCloud, 
  Building2, 
  MessageSquare,
  Compass
} from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: servicesData[0].title,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate professional inquiry submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Geospatial Grid */}
      <div className="absolute inset-0 geospatial-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0034a0] text-xs font-bold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Slide 45 Official Contact & Office Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Connect with Our Engineering & <br />
            <span className="text-[#0034a0]">Geospatial Project Directorate</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Discuss your surveying requirements, share your Terms of Reference (ToR), or schedule a technical consultation at our corporate office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Corporate Office Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Main Office Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/90 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#e63946]">
                  Official Headquarters
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-1">
                  Corporate Office
                </h3>
              </div>

              <div className="space-y-4 text-sm text-slate-700">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-red-50 text-red-600 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Office Location</div>
                    <div className="text-slate-600 leading-relaxed">
                      {companyProfile.contact.address}
                    </div>
                    <div className="text-xs text-blue-600 font-mono mt-0.5">
                      Coordinates: 23°44&apos;38.4&quot;N 90°20&apos;45.6&quot;E
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-blue-50 text-[#0034a0] flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Direct Contact & WhatsApp</div>
                    <a 
                      href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
                      className="text-[#0034a0] font-bold hover:underline block"
                    >
                      {companyProfile.contact.phone}
                    </a>
                    <div className="text-xs text-slate-500">Sunday to Thursday • 9:00 AM – 6:00 PM</div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Official Correspondence</div>
                    <a 
                      href={`mailto:${companyProfile.contact.email}`}
                      className="text-slate-800 hover:text-blue-600 font-semibold break-all"
                    >
                      {companyProfile.contact.email}
                    </a>
                  </div>
                </div>

                {/* Web */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600 flex-shrink-0 mt-0.5">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Web Portal</div>
                    <a 
                      href="https://www.geospatialworks.com.bd" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-[#0034a0] hover:underline font-semibold"
                    >
                      {companyProfile.contact.website}
                    </a>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                <a
                  href={`tel:${companyProfile.contact.phone.replace(/\s+/g, '')}`}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#0034a0] hover:bg-blue-800 text-white font-bold text-xs text-center shadow-xs transition-colors"
                >
                  Call Direct
                </a>
                <a
                  href="https://maps.google.com/?q=Bosila+Mohammadpur+Dhaka"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs text-center transition-colors"
                >
                  Google Maps
                </a>
              </div>
            </div>

            {/* Field Crew Deployment Guarantee */}
            <div className="bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl p-6 shadow-md border border-blue-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/50 flex items-center justify-center text-blue-300">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">Emergency Field Mobilization</h4>
                  <p className="text-xs text-slate-300">Rapid deployment teams equipped with RTK GNSS & UAVs across Bangladesh.</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry / ToR Submission Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/90">
              
              <div className="pb-6 mb-6 border-b border-slate-100">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0034a0]">
                  Project Inquiry & ToR Submission
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                  Request a Formal Proposal
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Provide your project scope, survey objectives, or upload Terms of Reference.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Thank You for Your Inquiry
                  </h4>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Your project details have been received by our technical directorate. A senior surveyor or engineer will contact you within 24 business hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        organization: "",
                        service: servicesData[0].title,
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0034a0] hover:underline"
                  >
                    <span>Submit another inquiry</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Engr. Rafiqul Islam"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0034a0] focus:ring-1 focus:ring-blue-600 bg-slate-50"
                      />
                    </div>

                    {/* Organization / Ministry */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Organization / Agency *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. LGED / DNCC / Private Enterprise"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0034a0] focus:ring-1 focus:ring-blue-600 bg-slate-50"
                      />
                    </div>

                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Official Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.gov.bd"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0034a0] focus:ring-1 focus:ring-blue-600 bg-slate-50"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+880 1XXXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0034a0] focus:ring-1 focus:ring-blue-600 bg-slate-50"
                      />
                    </div>

                  </div>

                  {/* Primary Service Domain */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Primary Service Domain *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0034a0] focus:ring-1 focus:ring-blue-600 bg-slate-50"
                    >
                      {servicesData.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title} ({s.badge})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project Scope & Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Project Scope & Terms of Reference (ToR) *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Outline your project location, approximate area (km² or acreage), required outputs (CAD/BIM, DSM, DEM, Orthomosaic, BOQ), and timeframe..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#0034a0] focus:ring-1 focus:ring-blue-600 bg-slate-50"
                    />
                  </div>

                  {/* Simulated Document Attachment Notice */}
                  <div className="p-3.5 rounded-xl border border-dashed border-slate-300 bg-slate-50 flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2">
                      <UploadCloud className="w-4 h-4 text-blue-600" />
                      <span>Have a PDF or Word ToR document?</span>
                    </div>
                    <span className="text-[11px] font-semibold text-[#0034a0]">
                      Email to md.geospatialworks@gmail.com
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-[#0034a0] hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Inquiry</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-center text-slate-400">
                    Data sent securely. We never share client technical information.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
