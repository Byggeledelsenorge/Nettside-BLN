import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getServiceSlugs } from "@/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/private", "/bedrift", "/om-oss", "/kontakt"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const serviceRoutes = getServiceSlugs().map((slug) => ({
    url: `${site.url}/tjenester/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
