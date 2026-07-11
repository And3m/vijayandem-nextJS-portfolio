"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CarouselApi = UseEmblaCarouselType[1];
type CarouselOptions = Parameters<typeof useEmblaCarousel>[0];

const CarouselContext = React.createContext<{ carouselRef: UseEmblaCarouselType[0]; api: CarouselApi; scrollPrev: () => void; scrollNext: () => void; canScrollPrev: boolean; canScrollNext: boolean } | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a Carousel");
  return context;
}

export function Carousel({ opts, setApi, className, children, ...props }: React.ComponentProps<"div"> & { opts?: CarouselOptions; setApi?: (api: CarouselApi) => void }) {
  const [carouselRef, api] = useEmblaCarousel(opts);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const update = React.useCallback((currentApi: NonNullable<CarouselApi>) => { setCanScrollPrev(currentApi.canScrollPrev()); setCanScrollNext(currentApi.canScrollNext()); }, []);
  React.useEffect(() => { if (!api) return; setApi?.(api); update(api); api.on("select", update); api.on("reInit", update); return () => { api.off("select", update); api.off("reInit", update); }; }, [api, setApi, update]);
  return <CarouselContext.Provider value={{ carouselRef, api, scrollPrev: () => api?.scrollPrev(), scrollNext: () => api?.scrollNext(), canScrollPrev, canScrollNext }}><div className={cn("relative", className)} role="region" aria-roledescription="carousel" {...props}>{children}</div></CarouselContext.Provider>;
}

export function CarouselContent({ className, ...props }: React.ComponentProps<"div">) { const { carouselRef } = useCarousel(); return <div ref={carouselRef} className="overflow-hidden"><div className={cn("flex -ml-4", className)} {...props} /></div>; }
export function CarouselItem({ className, ...props }: React.ComponentProps<"div">) { return <div role="group" aria-roledescription="slide" className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)} {...props} />; }
export function CarouselPrevious({ className, ...props }: React.ComponentProps<typeof Button>) { const { scrollPrev, canScrollPrev } = useCarousel(); return <Button type="button" variant="outline" size="icon" className={cn("absolute top-1/2 -left-12 size-8 -translate-y-1/2 rounded-full", className)} disabled={!canScrollPrev} onClick={scrollPrev} {...props}><ArrowLeft className="size-4" /><span className="sr-only">Previous slide</span></Button>; }
export function CarouselNext({ className, ...props }: React.ComponentProps<typeof Button>) { const { scrollNext, canScrollNext } = useCarousel(); return <Button type="button" variant="outline" size="icon" className={cn("absolute top-1/2 -right-12 size-8 -translate-y-1/2 rounded-full", className)} disabled={!canScrollNext} onClick={scrollNext} {...props}><ArrowRight className="size-4" /><span className="sr-only">Next slide</span></Button>; }
