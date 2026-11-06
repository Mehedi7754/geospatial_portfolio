"use client";

import React from "react";
import Image from "next/image";

interface AnimatedLogoProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  showText?: boolean;
  priority?: boolean;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = "md",
  className = "",
  showText = true,
  priority = false,
}) => {
  // Dimensions for different size variants
  const sizeMap = {
    xs: { box: 36, img: 36, text: "text-sm", sub: "text-[9px]" },
    sm: { box: 48, img: 48, text: "text-base", sub: "text-[10px]" },
    md: { box: 64, img: 64, text: "text-lg", sub: "text-xs" },
    lg: { box: 96, img: 96, text: "text-2xl", sub: "text-sm" },
    xl: { box: 140, img: 140, text: "text-3xl", sub: "text-base" },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      {/* Logo container with animated location pin */}
      <div
        className="relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: `${currentSize.box}px`, height: `${currentSize.box}px` }}
      >
        {/* Base Logo Image (Crisp, proportional, stable) */}
        <div className="absolute inset-0">
          <Image
            src="/assets/images/logo.png"
            alt="Geospatial Works Logo"
            width={currentSize.img}
            height={currentSize.img}
            priority={priority}
            className="w-full h-full object-contain filter drop-shadow-sm"
          />
        </div>

        {/* Animated Location Pin Overlay */}
        {/*
          The original logo has location pins at the left and right linked by a curved dashed arc.
          This overlay smoothly glides a precision glowing pin symbol back and forth across the arc
          between the left and right sides without disturbing the logo's baseline geometry.
        */}
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="w-full h-full relative">
            <div className="logo-pin-traveler absolute">
              {/* Mini glowing pin marker */}
              <div className="relative flex flex-col items-center">
                <svg
                  viewBox="0 0 24 32"
                  className="w-[18%] h-auto filter drop-shadow-[0_2px_4px_rgba(230,57,70,0.5)] transition-all"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Pin body */}
                  <path
                    d="M12 0C5.37 0 0 5.37 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37 18.63 0 12 0Z"
                    className="fill-blue-700"
                  />
                  {/* Center hole */}
                  <circle cx="12" cy="12" r="5" className="fill-white" />
                  {/* Pin pulse ring */}
                  <circle
                    cx="12"
                    cy="12"
                    r="4"
                    className="fill-red-500 animate-ping opacity-60"
                  />
                </svg>
                {/* Red shadow indicator */}
                <div className="w-[12%] h-[3px] bg-red-600 rounded-full mt-[1px] opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Typography side */}
      {showText && (
        <div className="flex flex-col leading-tight">
          <div className={`font-black tracking-tight ${currentSize.text} flex items-center gap-1.5`}>
            <span className="text-[#0034a0]">GEOSPATIAL</span>
            <span className="text-[#e63946]">WORKS</span>
          </div>
          <span className={`text-slate-500 dark:text-slate-400 font-medium tracking-wider uppercase ${currentSize.sub}`}>
            Where Engineering Meets Precision
          </span>
        </div>
      )}
    </div>
  );
};
