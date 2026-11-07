"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "accent" | "dark" | "outline" | "ghost" | "shimmer";
  size?: "sm" | "md" | "lg";
  icon?: "right" | "up-right" | "none";
  className?: string;
  type?: "button" | "submit" | "reset";
  pulseDot?: boolean;
}

/**
 * AnimatedButton - Powered by 21st.dev animated button component patterns:
 * 1. Interactive Hover Button (Expanding circle dot flooding button + translated arrow on hover)
 * 2. Shimmer Beam Shine & Micro-physics
 * Colors matched 1:1 to Corporate Logo (Royal Blue #0284c7 & Precision Red #ea3829).
 */
export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  icon = "right",
  className = "",
  type = "button",
  pulseDot = false,
}) => {
  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2 min-h-[38px]",
    md: "px-6 py-3.5 text-xs sm:text-sm gap-2.5 min-h-[46px]",
    lg: "px-8 py-4 text-sm gap-3 min-h-[52px]",
  }[size];

  // Colors derived 1:1 from the Geospatial Works Logo (Royal Blue #0284c7 & Precision Red #ea3829)
  const variantStyles = {
    primary: {
      button:
        "border-[#0284c7] bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/50 hover:-translate-y-0.5",
      dot: "bg-white",
      hoverText: "text-white",
    },
    accent: {
      button:
        "border-[#ea3829] bg-[#ea3829] hover:bg-[#dc2626] text-white shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/50 hover:-translate-y-0.5",
      dot: "bg-white",
      hoverText: "text-white",
    },
    dark: {
      button:
        "border-slate-800 bg-slate-950 hover:bg-slate-900 text-white hover:border-[#0284c7] hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-0.5",
      dot: "bg-[#0284c7]",
      hoverText: "text-white",
    },
    outline: {
      button:
        "border-slate-300 bg-white hover:bg-slate-50 text-slate-800 hover:text-[#0284c7] hover:border-[#0284c7] hover:shadow-md hover:-translate-y-0.5",
      dot: "bg-[#0284c7]",
      hoverText: "text-[#0284c7]",
    },
    ghost: {
      button:
        "border-transparent bg-transparent text-slate-700 hover:text-[#0284c7] hover:bg-sky-50",
      dot: "bg-[#0284c7]",
      hoverText: "text-[#0284c7]",
    },
    shimmer: {
      button:
        "border-sky-400/40 bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-lg shadow-sky-500/35 hover:-translate-y-0.5",
      dot: "bg-white",
      hoverText: "text-white",
    },
  }[variant];

  const content = (
    <>
      {/* 21st.dev Expanding Dot Transition Layer */}
      <div
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full transition-all duration-500 ease-out group-hover:scale-[110] pointer-events-none z-0 opacity-20",
          variantStyles.dot,
        )}
      />

      {/* Shimmer light beam sweep */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none z-1" />

      {/* Button content */}
      <div className="relative z-10 flex items-center gap-2 transition-transform duration-300 ease-out">
        {pulseDot && (
          <span className="relative flex h-2 w-2 mr-0.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-85" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
        )}
        <span className="font-mono text-xs uppercase font-bold tracking-wider">
          {children}
        </span>
        {icon === "right" && (
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
        )}
        {icon === "up-right" && (
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 text-sky-200 group-hover:text-white" />
        )}
      </div>
    </>
  );

  const baseClasses = cn(
    "group relative inline-flex items-center justify-center font-mono font-bold tracking-wider uppercase transition-all duration-300 rounded-none cursor-pointer overflow-hidden border select-none active:translate-y-px",
    sizeStyles,
    variantStyles.button,
    className,
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {content}
    </button>
  );
};
