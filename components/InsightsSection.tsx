"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X, ArrowUpRight, BookOpen, Clock } from "lucide-react";

interface InsightArticle {
  id: string;
  category: string;
  title: string;
  image: string;
  readTime: string;
  excerpt: string;
  content: string;
}

const articles: InsightArticle[] = [
  {
    id: "uav-planning",
    category: "Featured Technical Insight",
    title: "How drone photogrammetry and 3D point clouds help plan critical infrastructure",
    image: "/ppt_images/image28.jpeg",
    readTime: "5 min read",
    excerpt:
      "Modern photogrammetry captures millimeter-grade surface models, allowing civil engineers and planners to calculate earthwork volumes and spot hazards before breaking ground.",
    content:
      "UAV-based photogrammetry transforms site engineering across Bangladesh. By combining RTK GNSS ground control points with multi-spectral drone imagery, civil engineers achieve sub-3cm elevation precision across extensive floodplains, industrial economic zones, and riverbank embankments.",
  },
  {
    id: "mouza-records",
    category: "Cadastral Land Records",
    title: "How to read and geo-rectify a historical mouza land boundary map",
    image: "/ppt_images/image9.png",
    readTime: "4 min read",
    excerpt:
      "A practical guide to reconciling historical CS, SA, RS, and BS mouza sheets with modern satellite coordinates.",
    content:
      "Understanding historical cadastral sheets is critical for Right-of-Way (RoW) infrastructure projects in Bangladesh. We reconcile non-rectified mouza map distortions by applying multi-point affine transformations tied to Survey of Bangladesh geodetic pillars.",
  },
  {
    id: "web-gis",
    category: "Enterprise Geodatabases",
    title: "How online maps and enterprise GIS help engineering teams plan faster",
    image: "/ppt_images/image68.png",
    readTime: "3 min read",
    excerpt:
      "Centralizing spatial databases in PostgreSQL/PostGIS allows distributed field teams to update and inspect assets in real-time.",
    content:
      "Enterprise GIS turns static paper drawings into living digital twins. From monitoring 100,000+ power poles to tracking urban drainage outfalls, web GIS dashboards empower authorities with interactive layers and automated reporting.",
  },
  {
    id: "river-surveys",
    category: "River Hydrography",
    title: "Mapping Bangladesh waterways from acoustic boat echo to screen",
    image: "/ppt_images/image44.jpeg",
    readTime: "4 min read",
    excerpt:
      "Deploying dual-frequency bathymetric sounders to map riverbed siltation and scour holes during monsoon flow.",
    content:
      "Bangladesh's active river deltas demand continuous bathymetric profiling. Digital echo sounders synced with real-time RTK positioning produce accurate cross-sections and volume calculations essential for dredging and flood risk modeling.",
  },
];

export const InsightsSection: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const featured = articles[0];
  const listItems = articles.slice(1);

  return (
    <section id="insights" className="py-20 lg:py-28 bg-[#f8fafc] border-b border-slate-200/80">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-[11px] font-bold tracking-wider uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Technical Knowledge &amp; Insights</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0f172a] tracking-tight leading-[1.12]">
              Ideas for a{" "}
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                more resilient tomorrow.
              </span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed">
            Technical papers, field methodologies, and spatial data case studies from Bangladesh&apos;s leading
            geospatial engineering team.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Featured Card (Left / 7 cols) */}
          <div
            onClick={() => setActiveArticle(featured)}
            className="lg:col-span-7 relative min-h-[380px] lg:min-h-[460px] rounded-3xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 cursor-pointer group flex flex-col justify-end p-6 sm:p-8 bg-slate-900 border border-slate-200/80"
          >
            <Image
              alt={featured.title}
              src={featured.image}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500 text-slate-950">
                  {featured.category}
                </span>
                <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  {featured.readTime}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug mb-3">
                {featured.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2 max-w-xl">
                {featured.excerpt}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 group-hover:text-amber-300">
                <span>Read Technical Article</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>

          {/* 3 Editorial Rows (Right / 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            {listItems.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-400 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex items-center gap-4 group"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                  <Image
                    alt={article.title}
                    src={article.image}
                    fill
                    sizes="112px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      {article.category}
                    </span>
                    <span className="text-[10px] text-slate-400">• {article.readTime}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#0f172a] group-hover:text-amber-600 transition-colors line-clamp-2 mb-1">
                    {article.title}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {article.excerpt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-6 bg-slate-900 text-white flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                  {activeArticle.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition flex-shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-700">
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-slate-700 font-semibold leading-relaxed">
                {activeArticle.excerpt}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeArticle.content}
              </p>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end">
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
