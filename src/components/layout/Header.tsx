"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { CTA_LABEL, site } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-graphite-200 bg-bone/85 backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center" aria-label={`${site.name} – til forsiden`}>
          <Image
            src="/logo.png"
            alt={site.legalName}
            width={1600}
            height={798}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <nav aria-label="Hovedmeny" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-graphite-900",
                  active ? "text-graphite-900" : "text-graphite-600",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="/kontakt" variant="accent" size="sm">
            {CTA_LABEL}
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobil-meny"
          aria-label={open ? "Lukk meny" : "Åpne meny"}
          className="flex h-10 w-10 items-center justify-center rounded-sm border border-graphite-300 lg:hidden"
        >
          <span className="sr-only">Meny</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div id="mobil-meny" className="border-t border-graphite-200 bg-bone lg:hidden">
          <nav aria-label="Mobilmeny" className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-graphite-100 py-3 text-base font-medium text-graphite-800"
              >
                {item.label}
              </Link>
            ))}
            <Button href="/kontakt" variant="accent" size="md" className="mt-4 w-full">
              {CTA_LABEL}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
