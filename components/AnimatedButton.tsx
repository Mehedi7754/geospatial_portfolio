"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: "right" | "up-right" | "none";
  className?: string;
  type?: "button" | "submit" | "reset";
  pulseDot?: boolean;
}

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
  const baseStyles =
    "relative inline-flex items-center justify-center font-mono font-bold tracking-wider uppercase transition-all duration-300 rounded-none cursor-pointer overflow-hidden group select-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-2",
    md: "px-6 py-3.5 text-xs sm:text-sm gap-2.5",
    lg: "px-8 py-4 text-sm gap-3",
  }[size];

  const variantStyles = {
    primary:
      "bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-sm hover:shadow-lg hover:shadow-sky-500/25 border border-sky-400/30 hover:-translate-y-0.5 active:translate-y-0",
    dark:
      "bg-slate-950 hover:bg-[#0284c7] text-white border border-slate-800 hover:border-[#0284c7] shadow-sm hover:shadow-lg hover:shadow-sky-500/20 hover:-translate-y-0.5 active:translate-y-0",
    outline:
      "bg-white hover:bg-slate-900 text-slate-900 hover:text-white border border-slate-300 hover:border-slate-900 shadow-2xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
    ghost:
      "bg-transparent hover:bg-sky-50 text-slate-700 hover:text-[#0284c7] border-b-2 border-transparent hover:border-[#0284c7]",
  }[variant];

  const content = (
    <>
      {/* Light Shimmer Beam that sweeps across the button on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />

      {/* Pulsing geodetic radar dot */}
      {pulseDot && (
        <span className="relative flex h-2 w-2 mr-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>
      )}

      {/* Button Text */}
      <span className="relative z-10 transition-colors duration-200">{children}</span>

      {/* Animated Arrow Icon */}
      {icon === "right" && (
        <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />
      )}
      {icon === "up-right" && (
        <ArrowUpRight className="w-4 h-4 relative z-10 text-sky-300 group-hover:text-white transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles} ${variantStyles} ${className}`}
    >
      {content}
    </button>
  );
};
