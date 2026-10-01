import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-3xl flex-col gap-4",
        align === "center" ? "mx-auto items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-accent px-3 py-1 text-xs font-semibold tracking-wider text-accent-foreground uppercase">
        <span className="size-1.5 rounded-full bg-highlight" aria-hidden />
        {eyebrow}
      </span>
      <Heading id={id} className="text-3xl font-bold text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
        {title}
      </Heading>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}
