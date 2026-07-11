"use client";
import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";
export function SimpleTooltip({ content, children }: { content: React.ReactNode; children: React.ReactNode }) { return <TooltipPrimitive.Provider><TooltipPrimitive.Root><TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger><TooltipPrimitive.Portal><TooltipPrimitive.Content sideOffset={4} className={cn("z-50 rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground shadow")}>{content}<TooltipPrimitive.Arrow className="fill-primary" /></TooltipPrimitive.Content></TooltipPrimitive.Portal></TooltipPrimitive.Root></TooltipPrimitive.Provider>; }
