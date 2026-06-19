import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
  /** Lys variant for bruk pa mork bakgrunn */
  tone?: "dark" | "light";
  as?: "h1" | "h2";
};

export function SectionHeading({
  kicker,
  title,
  intro,
  align = "left",
  className,
  tone = "dark",
  as = "h2",
}: SectionHeadingProps) {
  const Heading = as;
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker && (
        <div
          className={cn(
            "mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em]",
            align === "center" && "justify-center",
            isLight ? "text-copper-300" : "text-copper-700",
          )}
        >
          <span aria-hidden className="h-px w-8 bg-current opacity-70" />
          {kicker}
        </div>
      )}
      <Heading
        className={cn(
          "text-balance font-semibold tracking-tight",
          as === "h1"
            ? "text-4xl sm:text-5xl lg:text-6xl"
            : "text-3xl sm:text-4xl",
          isLight ? "text-bone" : "text-graphite-900",
        )}
      >
        {title}
      </Heading>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed text-pretty",
            isLight ? "text-graphite-300" : "text-graphite-600",
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
