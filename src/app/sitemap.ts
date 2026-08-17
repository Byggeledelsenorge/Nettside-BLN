import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { getServiceSlugs } from "@/content/services";
import { posts } from "@/content/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/private",
    "/bedrift",
    "/referanser",
    "/slik-har-vi-bistatt-andre",
    "/priser",
    "/fagbase",
    "/om-oss",
    "/kontakt",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const serviceRoutes = getServiceSlugs().map((slug) => ({
    url: `${site.url}/tjenester/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const postRoutes = posts.map((post) => ({
    url: `${site.url}/fagbase/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...postRoutes];
}
