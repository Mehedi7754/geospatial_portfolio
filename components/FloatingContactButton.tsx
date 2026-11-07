"use client";

import React, { useState } from "react";
import { MessageSquare, Phone, Mail, X, ArrowUpRight } from "lucide-react";

export const FloatingContactButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-5 sm:right-7 bottom-6 z-50 flex flex-col items-end pointer-events-auto select-none">
      {/* Quick Menu Popup */}
      {open && (
        <div className="mb-3 w-64 bg-white rounded-2xl p-4 shadow-2xl border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 mb-3">
            <span className="text-xs font-bold text-slate-900">Direct Consultation Desk</span>
            <button
              onClick={() => setOpen(false)}
              className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-2 text-xs">
            <a
              href="https://wa.me/8801713907779?text=Hello%20Geospatial%20Works,%20I%20would%20like%20to%20inquire%20about%20a%20project."
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-emerald-50 text-emerald-950 hover:bg-emerald-100 transition-colors font-bold border border-emerald-200"
            >
              <div className="flex items-center gap-2">
                <span className="text-base">💬</span>
                <span>WhatsApp Hotline</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-emerald-700" />
            </a>

            <a
              href="tel:+8801713907779"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-slate-900 hover:bg-slate-100 transition-colors font-bold border border-slate-200"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600" />
                <span>Call +880 1713 907779</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <a
              href="mailto:md.geospatialworks@gmail.com"
              className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-slate-900 hover:bg-slate-100 transition-colors font-bold border border-slate-200"
            >
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600" />
                <span>Email Official Desk</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>
        </div>
      )}

      {/* Primary Floating Action Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 rounded-full bg-[#0f172a] text-amber-400 flex items-center justify-center shadow-lg hover:shadow-2xl hover:bg-[#1e293b] transition-all transform hover:scale-105 border border-slate-800"
        aria-label="Direct consultation desk"
      >
        {open ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <MessageSquare className="w-5 h-5 text-amber-400" />
        )}
      </button>
    </div>
  );
};
