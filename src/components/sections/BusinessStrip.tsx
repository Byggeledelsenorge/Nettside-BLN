import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { businessStrip } from "@/content/site";

/**
 * Kompakt, nedtonet bedrift-henvisning på forsiden.
 * Privat er hovedfokus – dette er kun en bro videre til bedrift-siden.
 */
export function BusinessStrip() {
  return (
    <section className="border-y border-graphite-800 bg-graphite-950 py-14 text-bone sm:py-16">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
              {businessStrip.kicker}
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-bone sm:text-3xl">
              {businessStrip.title}
            </h2>
            <p className="mt-3 text-graphite-400">{businessStrip.body}</p>
          </div>
          <Link
            href={businessStrip.href}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-copper-300 hover:text-copper-200"
          >
            {businessStrip.linkLabel}
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M3 8h9M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
