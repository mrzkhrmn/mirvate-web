import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { getAllPosts } from "@/features/insights/lib/posts";

type Freq = MetadataRoute.Sitemap[number]["changeFrequency"];

const STATIC_PAGES: {
  path: string;
  priority: number;
  changeFrequency: Freq;
}[] = [
  { path: "", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.95, changeFrequency: "weekly" },
  { path: "/technologies", priority: 0.9, changeFrequency: "monthly" },
  { path: "/about", priority: 0.85, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.9, changeFrequency: "monthly" },
  { path: "/insights", priority: 0.8, changeFrequency: "weekly" },
  // /projects: placeholder — noIndex; sitemap’ten çıkarıldı
  { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
  { path: "/security", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = STATIC_PAGES.map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const posts = getAllPosts().map((post) => ({
    url: `${SITE.url}/insights/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticRoutes, ...posts];
}
