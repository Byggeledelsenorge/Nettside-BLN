import Link from "next/link";
import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  /** Gjor hele kortet til en lenke */
  href?: string;
  /** Subtil hover-effekt for klikkbare kort */
  interactive?: boolean;
};

export function Card({ children, className, href, interactive }: CardProps) {
  const classes = cn(
    "group relative flex h-full flex-col border border-graphite-200 bg-white p-7 rounded-sm",
    (interactive || href) &&
      "transition-colors duration-150 hover:border-graphite-900",
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}
