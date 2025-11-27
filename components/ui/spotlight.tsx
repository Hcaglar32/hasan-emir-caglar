"use client";

import { cn } from "@/lib/utils";
import React from "react";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <div
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[60%] w-[60%] lg:w-[40%] opacity-0",
        className
      )}
      style={{
        background: `radial-gradient(ellipse at center, ${fill || "rgba(255,255,255,0.15)"} 0%, transparent 70%)`,
        filter: "blur(60px)",
      }}
    />
  );
};
