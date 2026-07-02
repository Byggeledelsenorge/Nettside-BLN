import { Card } from "@/components/ui/Card";
import { ServiceIcon } from "@/components/ui/icons";
import type { Service } from "@/content/services";

type ServiceCardProps = {
  service: Service;
  /** Kompakt variant for sekundaere (bedrift) tjenester */
  compact?: boolean;
};

export function ServiceCard({ service, compact }: ServiceCardProps) {
  return (
    <Card href={`/tjenester/${service.slug}`} interactive>
      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center border border-graphite-200 bg-bone text-copper-600 transition-colors group-hover:border-copper-500/60 rounded-sm">
        <ServiceIcon slug={service.slug} />
      </span>
      <h3 className="text-lg font-semibold tracking-tight text-graphite-900">
        {service.shortTitle}
      </h3>
      {compact ? (
        <p className="mt-2 text-sm leading-relaxed text-graphite-600">{service.tagline}</p>
      ) : (
        <p className="mt-3 leading-relaxed text-graphite-600">{service.summary}</p>
      )}
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-copper-700">
        Les mer
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        >
          <path d="M3 8h9M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </span>
    </Card>
  );
}
