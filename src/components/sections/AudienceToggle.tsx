import Link from "next/link";
import { Container } from "@/components/ui/Container";

const tracks = [
  {
    href: "#private",
    eyebrow: "Privat",
    title: "Jeg har et problem med boligen",
    body: "Reklamasjon, byggfeil, overtakelse eller en konflikt med håndverker. Få en uavhengig fagperson på din side.",
  },
  {
    href: "#bedrift",
    eyebrow: "Bedrift",
    title: "Vi trenger byggeledelse",
    body: "Prosjektledelse, byggeledelse, byggherrebistand og oppfølging av entrepriser for byggherrer og virksomheter.",
  },
];

/** Tydelig privat/bedrift-skille tidlig pa siden ("to spor"). */
export function AudienceToggle() {
  return (
    <section className="bg-graphite-900 py-14 text-bone">
      <Container>
        <div className="grid gap-px overflow-hidden border border-graphite-800 bg-graphite-800 md:grid-cols-2">
          {tracks.map((track) => (
            <Link
              key={track.href}
              href={track.href}
              className="group flex flex-col gap-3 bg-graphite-900 p-8 transition-colors hover:bg-graphite-800 sm:p-10"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
                {track.eyebrow}
              </span>
              <span className="text-2xl font-semibold tracking-tight text-bone">
                {track.title}
              </span>
              <span className="text-graphite-400">{track.body}</span>
              <span className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-copper-300">
                Se hvordan vi hjelper
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                  <path d="M3 8h9M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
