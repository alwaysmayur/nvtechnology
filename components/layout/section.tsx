import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/container";

type SectionProps = React.ComponentProps<"section"> & {
  /** Alternate background for visual rhythm between sections */
  variant?: "default" | "muted";
  containerClassName?: string;
};

export function Section({ className, containerClassName, variant = "default", children, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative py-20 sm:py-24 lg:py-28",
        variant === "muted" && "border-y bg-surface",
        className,
      )}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
