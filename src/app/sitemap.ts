import type { MetadataRoute } from "next";
import { getAllPosts } from "@/features/insights/lib/posts";
import { absoluteUrl } from "@/lib/metadata";
import {
  INDEXABLE_STATIC_ROUTES,
  getLatestMtime,
  insightContentRelativePath,
  maxDate,
} from "@/lib/sitemap-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map((post) => {
    const contentMtime = getLatestMtime([insightContentRelativePath(post.slug)]);
    return {
      url: absoluteUrl(`/insights/${post.slug}`),
      lastModified: maxDate(post.date, contentMtime),
    };
  });

  const latestPostModified =
    postEntries.length > 0
      ? postEntries.reduce((latest, entry) => {
          const current = entry.lastModified
            ? new Date(entry.lastModified)
            : null;
          if (!current) return latest;
          if (!latest || current > latest) return current;
          return latest;
        }, null as Date | null)
      : null;

  const staticEntries: MetadataRoute.Sitemap = INDEXABLE_STATIC_ROUTES.map(
    (route) => {
      const sourceMtime = getLatestMtime(route.sourceFiles);

      if (route.path === "/insights") {
        return {
          url: absoluteUrl(route.path),
          lastModified: maxDate(sourceMtime, latestPostModified),
        };
      }

      if (!sourceMtime) {
        throw new Error(
          `Missing source files for sitemap route ${route.path}`,
        );
      }

      return {
        url: absoluteUrl(route.path),
        lastModified: sourceMtime,
      };
    },
  );

  return [...staticEntries, ...postEntries];
}
