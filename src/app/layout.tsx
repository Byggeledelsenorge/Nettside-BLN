import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/content/site";
import { Analytics } from "@vercel/analytics/react";

const GA_ID = "G-411N0XG0MN";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} – Uavhengig byggfaglig rådgiver`,
    template: `%s | ${site.name}`,
  },
  description:
    "Uavhengig byggfaglig rådgiver i Ålesund og på Sunnmøre. Vi hjelper boligeiere med reklamasjoner, byggfeil, uavhengig kontroll og overtakelse – og tilbyr byggeledelse og sakkyndig bistand for bedrifter og advokater.",
  openGraph: {
    type: "website",
    locale: "nb_NO",
    siteName: site.name,
    url: site.url,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nb" className={`${inter.variable} h-full antialiased`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
      </head>
      <body className="flex min-h-full flex-col bg-bone text-graphite-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd()),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
