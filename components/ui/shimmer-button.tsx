"use client";

import React, { type CSSProperties } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

export const ShimmerButton = React.forwardRef<
  HTMLButtonElement,
  ShimmerButtonProps
>(
  (
    {
      shimmerColor = "#38bdf8",
      shimmerSize = "0.06em",
      shimmerDuration = "2.8s",
      borderRadius = "0px",
      background = "#0284c7",
      className,
      children,
      href,
      onClick,
      ...props
    },
    ref,
  ) => {
    const styleVariables = {
      "--spread": "90deg",
      "--shimmer-color": shimmerColor,
      "--radius": borderRadius,
      "--speed": shimmerDuration,
      "--cut": shimmerSize,
      "--bg": background,
    } as CSSProperties;

    const buttonClasses = cn(
      "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden [border-radius:var(--radius)] border border-sky-400/40 px-6 py-3.5 whitespace-nowrap text-white [background:var(--bg)] font-mono text-xs font-bold uppercase tracking-wider",
      "transform-gpu transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-sky-500/25 active:translate-y-px select-none",
      className,
    );

    const innerContent = (
      <>
        {/* Shimmer light beam sweep */}
        <div
          className={cn(
            "-z-30 blur-[1px]",
            "absolute inset-0 overflow-visible",
          )}
        >
          <div className="absolute inset-0 aspect-[1] w-[200%] h-full rounded-none animate-shimmer-slide">
            <div className="absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_calc(var(--spread)+var(--spread)))]" />
          </div>
        </div>

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2">{children}</span>

        {/* Background base */}
        <div
          className={cn(
            "absolute [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]",
            "-z-20 transition-colors duration-300 group-hover:brightness-110",
          )}
        />
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          style={styleVariables}
          className={buttonClasses}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {innerContent}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        style={styleVariables}
        className={buttonClasses}
        onClick={onClick}
        {...props}
      >
        {innerContent}
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

