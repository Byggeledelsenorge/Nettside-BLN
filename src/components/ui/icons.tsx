import type { SVGProps } from "react";

/**
 * Industrielle line-ikoner i samme stil som hero-illustrasjonen:
 * tynn, enkel strek (currentColor), 24x24, uten fyll.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Reklamasjon og tvist – vekt/justis */
export function ScaleIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M7 21h10M4 8l4-2 4 2M20 8l-4-2-4 2M8 6l-3 6a3 3 0 0 0 6 0L8 6ZM16 6l-3 6a3 3 0 0 0 6 0l-3-6Z" />
    </svg>
  );
}

/** Byggfeil og mangler – forstørrelsesglass over sprekk */
export function MagnifierIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.2-4.2M10 7l-1.5 3.5H12L10.5 14" />
    </svg>
  );
}

/** Uavhengig kontroll – skjold med hake */
export function ShieldCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 7.8-7 9-4-1.2-7-4.5-7-9V6l7-3Z" />
      <path d="m9 11.5 2 2 4-4" />
    </svg>
  );
}

/** Overtakelse av bolig – nøkkel */
export function KeyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="7.5" cy="7.5" r="3.5" />
      <path d="M10 10l8 8M15 15l2-2M17.5 17.5l2-2" />
    </svg>
  );
}

/** Rådgivning ved nybygg – vinkelhake/tegning */
export function BlueprintIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 4v16h16M4 20l7-7 3 3 6-6M4 12h4M8 4v4" />
    </svg>
  );
}

/** Vurdering av arbeid – utsjekksliste */
export function ClipboardCheckIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4h6v2H9zM7 5H5v15h14V5h-2" />
      <path d="m8.5 12 2 2 4-4" />
    </svg>
  );
}

/** Ta kontakt – samtale */
export function ChatIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v11H9l-4 3v-3H4V5Z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  );
}

/** Rapport – dokument */
export function DocumentIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h8l4 4v14H6V3Z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </svg>
  );
}

/** Ikoner for prosess-stegene (01–04). */
export const processIcons = [ChatIcon, MagnifierIcon, ScaleIcon, DocumentIcon];

const serviceIconMap: Record<string, (props: IconProps) => React.ReactElement> = {
  "reklamasjon-handverker": ScaleIcon,
  "byggfeil-og-mangler": MagnifierIcon,
  "uavhengig-kontroll-bolig": ShieldCheckIcon,
  "overtakelse-ny-bolig": KeyIcon,
  "byggfaglig-radgivning-nybygg": BlueprintIcon,
  "vurdering-av-utfort-arbeid": ClipboardCheckIcon,
};

export function ServiceIcon({ slug, ...props }: IconProps & { slug: string }) {
  const Icon = serviceIconMap[slug] ?? ClipboardCheckIcon;
  return <Icon {...props} />;
}
