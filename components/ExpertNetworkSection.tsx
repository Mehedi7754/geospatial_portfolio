"use client";

import React from "react";
import { multidisciplinaryExperts } from "@/data/companyData";
import { 
  Users, 
  FileText, 
  CheckCircle2, 
  Send, 
  Briefcase, 
  Globe2, 
  ShieldCheck,
  ArrowRight
} from "lucide-react";

export const ExpertNetworkSection: React.FC = () => {
  return (
    <section id="experts" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card with Gradient Border */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-[#071530] to-slate-900 text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-slate-700 overflow-hidden">
          
          {/* Subtle Ambient Radar / Orb effect */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Description & Multidisciplinary Capabilities */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                <span>Human Resources & Expert Engagement Network (Slide 41)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Multidisciplinary Engineering & <br />
                <span className="text-blue-400">Subject-Matter Specialists</span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Geospatial Works combines its core technical capabilities with an extensive network of nationally and internationally experienced engineers, consultants, researchers, and subject-matter specialists. Through project-based and assignment-specific engagement arrangements, we identify and mobilize qualified professionals according to project scope, technical requirements, budget, and availability.
              </p>

              {/* Expertise Tags */}
              <div className="pt-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Disciplines Mobilized Across Sectors:
                </div>
                <div className="flex flex-wrap gap-2">
                  {multidisciplinaryExperts.map((exp) => (
                    <span
                      key={exp}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 hover:border-blue-500 transition-colors"
                    >
                      <CheckCircle2 className="w-3 h-3 text-blue-400 flex-shrink-0" />
                      <span>{exp}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Card - Share your ToR (Exact PPTX wording) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-800/90 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#e63946]">
                    Immediate Project Mobilization
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    Have a Project Requirement?
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    &ldquo;Share your ToR or scope of work. We will connect you with suitable experts and propose a tailored technical team to meet your project objectives.&rdquo;
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700 text-xs text-slate-300">
                    <Briefcase className="w-4 h-4 text-blue-400 flex-shrink-0" />
                    <span>Tailored technical team structuring per budget & scope</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700 text-xs text-slate-300">
                    <Globe2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>National & international consulting track records</span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0034a0] to-blue-600 hover:from-blue-700 hover:to-blue-500 text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-lg shadow-blue-900/40 transition-all hover:scale-[1.02] active:scale-100"
                >
                  <FileText className="w-4 h-4" />
                  <span>Submit Terms of Reference (ToR)</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <div className="text-[11px] text-center text-slate-400">
                  Response within 24 business hours • Confidential review
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
