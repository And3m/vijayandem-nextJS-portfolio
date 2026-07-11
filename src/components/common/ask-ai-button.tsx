import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function AskAIButton({ className }: { className?: string }) {
  return <Button asChild variant="outline" className={cn("rounded-full", className)}><Link href="/contact"><Sparkles className="size-4" />Ask me</Link></Button>;
}
