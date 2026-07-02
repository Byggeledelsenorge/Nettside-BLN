import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "accent" | "outline" | "outlineLight" | "ghost";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Naer-svart, neytral primaerknapp
  primary:
    "bg-graphite-900 text-bone hover:bg-graphite-800 focus-visible:outline-graphite-900",
  // Kobber-aksent for hoved-CTA
  accent:
    "bg-copper-600 text-white hover:bg-copper-700 focus-visible:outline-copper-700",
  outline:
    "border border-graphite-300 text-graphite-900 hover:border-graphite-900 hover:bg-graphite-50 focus-visible:outline-graphite-900",
  // Outline for morke flater (bone tekst)
  outlineLight:
    "border border-graphite-700 text-bone hover:border-bone hover:bg-graphite-900 focus-visible:outline-bone",
  ghost:
    "text-graphite-900 hover:bg-graphite-100 focus-visible:outline-graphite-900",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm rounded-sm",
  md: "h-11 px-6 text-sm rounded-sm",
  lg: "h-13 px-8 py-3.5 text-base rounded-sm",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonProps = ButtonAsLink | ButtonAsButton;

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if (props.href !== undefined) {
    const { variant: _v, size: _s, className: _c, children: _ch, href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
