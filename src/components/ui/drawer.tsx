"use client";
import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { cn } from "@/lib/utils";
export const Drawer = DrawerPrimitive.Root;
export const DrawerTrigger = DrawerPrimitive.Trigger;
export const DrawerClose = DrawerPrimitive.Close;
export function DrawerContent({ className, children, ...props }: React.ComponentProps<typeof DrawerPrimitive.Content>) { return <DrawerPrimitive.Portal><DrawerPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80" /><DrawerPrimitive.Content className={cn("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", className)} {...props}><div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />{children}</DrawerPrimitive.Content></DrawerPrimitive.Portal>; }
export function DrawerHeader({ className, ...props }: React.ComponentProps<"div">) { return <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />; }
export function DrawerTitle(props: React.ComponentProps<typeof DrawerPrimitive.Title>) { return <DrawerPrimitive.Title className={cn("text-lg font-semibold", props.className)} {...props} />; }
export function DrawerDescription(props: React.ComponentProps<typeof DrawerPrimitive.Description>) { return <DrawerPrimitive.Description className={cn("text-sm text-muted-foreground", props.className)} {...props} />; }
