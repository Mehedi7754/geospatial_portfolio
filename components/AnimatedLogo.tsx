"use client";

import React from "react";
import Image from "next/image";

interface AnimatedLogoProps {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
  showText?: boolean;
  light?: boolean;
  priority?: boolean;
}

export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  size = "sm",
  className = "",
  showText = true,
  light = false,
  priority = false,
}) => {
  const sizeMap = {
    xs: { box: 34, img: 34, text: "text-sm" },
    sm: { box: 44, img: 44, text: "text-[16px]" },
    md: { box: 52, img: 52, text: "text-lg" },
    lg: { box: 64, img: 64, text: "text-2xl" },
  };

  const currentSize = sizeMap[size];

  return (
    <div
      className={`corporate-logo ${
        light ? "corporate-logo-light" : ""
      } select-none inline-flex items-center gap-2.5 ${className}`}
    >
      {/* Logo container with the animated location pin */}
      <div
        className="relative flex-shrink-0"
        style={{ width: `${currentSize.box}px`, height: `${currentSize.box}px` }}
      >
        {/* Base Logo Layer (Stable blue globe and structures from assets/images/logo.png) */}
        <div className="absolute inset-0">
          <Image
            src="/logo-base.png"
            alt="Geospatial Works"
            width={currentSize.img}
            height={currentSize.img}
            priority={priority}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Animated Location Pin Layer (Subtle, smooth back-and-forth movement) */}
        <div className="absolute inset-0 pointer-events-none logo-pin-animated">
          <Image
            src="/logo-pin.png"
            alt=""
            width={currentSize.img}
            height={currentSize.img}
            priority={priority}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Corporate Logo Typography */}
      {showText && (
        <span className={`font-black tracking-tight ${light ? "text-white" : "text-[#0284c7]"}`}>
          GEOSPATIAL <strong style={{ color: "#ea3829" }}>WORKS</strong>
        </span>
      )}
    </div>
  );
};
