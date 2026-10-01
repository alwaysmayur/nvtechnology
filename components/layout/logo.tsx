import Link from "next/link";
import { CodeXml } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/lib/data";

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label={`${siteConfig.name} — home`}
      className={cn("group inline-flex items-center gap-2.5 rounded-lg", className)}
    >
      <span className="bg-brand-gradient grid size-9 place-items-center rounded-xl text-white shadow-brand transition-transform duration-300 group-hover:-rotate-6">
        <CodeXml className="size-5" strokeWidth={2.5} aria-hidden />
      </span>
      <span className="font-display text-lg font-bold tracking-tight text-foreground">
        NV<span className="text-brand">Technology</span>
      </span>
    </Link>
  );
}
