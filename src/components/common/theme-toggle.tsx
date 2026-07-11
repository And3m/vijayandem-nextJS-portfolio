"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
export function ThemeToggle() { const { resolvedTheme, setTheme } = useTheme(); const dark = resolvedTheme === "dark"; return <Button type="button" variant="outline" size="icon" className="rounded-full" onClick={() => setTheme(dark ? "light" : "dark")} aria-label="Toggle theme">{dark ? <Sun className="size-4" /> : <Moon className="size-4" />}</Button>; }
