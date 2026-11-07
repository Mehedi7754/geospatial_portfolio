"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  href?: string;
  variant?: "primary" | "accent" | "dark" | "outline";
  className?: string;
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(
  (
    {
      text = "Button",
      href,
      variant = "primary",
      className,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    const label = text || (typeof children === "string" ? children : "Button");

    const variantStyles = {
      primary: {
        button:
          "border-slate-300 bg-white text-slate-900 hover:border-[#0284c7] hover:shadow-lg hover:shadow-sky-500/20",
        dot: "bg-[#0284c7]",
        hoverText: "text-white",
      },
      accent: {
        button:
          "border-slate-300 bg-white text-slate-900 hover:border-[#ea3829] hover:shadow-lg hover:shadow-rose-500/20",
        dot: "bg-[#ea3829]",
        hoverText: "text-white",
      },
      dark: {
        button:
          "border-slate-800 bg-slate-950 text-white hover:border-[#0284c7] hover:shadow-lg hover:shadow-sky-500/20",
        dot: "bg-[#0284c7]",
        hoverText: "text-white",
      },
      outline: {
        button:
          "border-slate-300 bg-transparent text-slate-800 hover:border-slate-900 hover:shadow-md",
        dot: "bg-slate-900",
        hoverText: "text-white",
      },
    }[variant];

    const innerContent = (
      <>
        {/* Expanding circle background on hover (21st.dev signature effect) */}
        <div
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full transition-all duration-500 ease-out group-hover:scale-[100] pointer-events-none z-0",
            variantStyles.dot,
          )}
        />

        {/* Initial text & dot preview */}
        <div className="relative z-10 flex items-center gap-2.5 pl-4 transition-all duration-300 ease-out group-hover:translate-x-10 group-hover:opacity-0">
          <span className="font-mono text-xs uppercase font-bold tracking-wider">
            {children || label}
          </span>
        </div>

        {/* Hover state content with arrow */}
        <div
          className={cn(
            "absolute inset-0 z-10 flex h-full w-full translate-x-8 items-center justify-center gap-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 font-mono text-xs uppercase font-bold tracking-wider",
            variantStyles.hoverText,
          )}
        >
          <span>{children || label}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </>
    );

    const buttonClasses = cn(
      "group relative inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-none border px-6 py-3.5 text-center select-none transition-all duration-300 ease-out",
      variantStyles.button,
      className,
    );

    if (href) {
      return (
        <Link
          href={href}
          className={buttonClasses}
          onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
        >
          {innerContent}
        </Link>
      );
    }

    return (
      <button ref={ref} className={buttonClasses} onClick={onClick} {...props}>
        {innerContent}
      </button>
    );
  },
);

InteractiveHoverButton.displayName = "InteractiveHoverButton";
