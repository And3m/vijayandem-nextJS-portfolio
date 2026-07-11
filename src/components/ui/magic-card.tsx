"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export function MagicCard({ className, gradientColor = "#262626", gradientOpacity = 0.2, style, ...props }: React.ComponentProps<"div"> & { gradientColor?: string; gradientOpacity?: number }) {
  return <div className={cn("relative overflow-hidden", className)} style={{ backgroundImage: `radial-gradient(circle at top left, color-mix(in srgb, ${gradientColor} ${gradientOpacity * 100}%, transparent), transparent 70%)`, ...style }} {...props} />;
}
