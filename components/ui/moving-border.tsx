"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function MovingBorderButton({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: React.ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden group",
        containerClassName
      )}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      {/* CSS-based animated border - much more performant */}
      <div
        className="absolute inset-0 rounded-[inherit] bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 opacity-70 group-hover:opacity-100 transition-opacity"
        style={{ 
          borderRadius: `calc(${borderRadius} * 0.96)`,
          background: 'conic-gradient(from var(--angle, 0deg), #10b981, #06b6d4, #10b981)',
          animation: 'spin-border 3s linear infinite',
        }}
      />

      <div
        className={cn(
          "relative bg-background border border-white/[0.1] backdrop-blur-xl text-foreground flex items-center justify-center w-full h-full text-sm antialiased",
          className
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
