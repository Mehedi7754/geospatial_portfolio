"use client";

import React from "react";
import { companyProfile, clientLogos } from "@/data/companyData";
import { 
  CheckCircle2, 
  Map, 
  Milestone, 
  Building, 
  Radio, 
  Award 
} from "lucide-react";

export const StatsStrip: React.FC = () => {
  return (
    <div className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Metrics Banner Card */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 p-6 lg:p-8">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-6 border-b border-slate-100 dark:border-slate-700/60 gap-4">
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-[#0034a0] dark:text-blue-400">
              Proven Field Scale & Operational Capacity
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              Precision Verified Across Bangladesh
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-[#0034a0] dark:text-blue-300 border border-blue-100 dark:border-blue-800 self-start md:self-auto">
            <Award className="w-4 h-4 text-amber-500" />
            <span>Class-1 Survey & Engineering Quality</span>
          </div>
        </div>

        {/* 6 Key Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          {companyProfile.stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700/40 transition-colors"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                <span className={i % 2 === 0 ? "text-[#0034a0]" : "text-[#e63946]"}>
                  {stat.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Client & Institutional Partners Ribbon */}
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700/60">
          <div className="text-center mb-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Trusted by Government Ministries, International Consultants & Public Utilities
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {clientLogos.map((client) => (
              <div
                key={client.code}
                className="px-3.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-700/50 hover:bg-blue-50 dark:hover:bg-slate-700 border border-slate-200/70 dark:border-slate-600/60 text-xs font-bold text-slate-700 dark:text-slate-300 transition-all hover:scale-105 cursor-default flex items-center gap-1.5"
                title={client.name}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#0034a0]" />
                <span>{client.code}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
