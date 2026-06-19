import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { organizationJsonLd } from "@/lib/seo";
import { site } from "@/content/site";

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
    "Uavhengig byggfaglig rådgiver for boligeiere og bedrifter. Vi hjelper deg med reklamasjoner, byggfeil, uavhengig kontroll, overtakelse og byggeledelse – over hele Norge.",
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
      </body>
    </html>
  );
}
