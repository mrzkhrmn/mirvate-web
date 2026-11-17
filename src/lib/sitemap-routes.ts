import fs from "node:fs";
import path from "node:path";

/**
 * Public, indexable static routes for sitemap generation.
 *
 * Excluded on purpose:
 * - /projects — noIndex placeholder
 * - /api/* — non-page endpoints
 * - /en/* — English routes do not exist yet
 * - Service detail URLs — only /services#slug anchors exist; hash URLs are not sitemap entries
 */
export type StaticSitemapRoute = {
  path: string;
  /** Repo-relative source files used to derive lastmod (mtime). */
  sourceFiles: string[];
};

export const INDEXABLE_STATIC_ROUTES: StaticSitemapRoute[] = [
  {
    path: "/",
    sourceFiles: [
      "src/app/(website)/page.tsx",
      "src/lib/constants.ts",
      "src/lib/metadata.ts",
    ],
  },
  {
    path: "/services",
    sourceFiles: [
      "src/app/(website)/services/page.tsx",
      "src/lib/constants.ts",
    ],
  },
  {
    path: "/technologies",
    sourceFiles: ["src/app/(website)/technologies/page.tsx"],
  },
  {
    path: "/about",
    sourceFiles: ["src/app/(website)/about/page.tsx"],
  },
  {
    path: "/contact",
    sourceFiles: ["src/app/(website)/contact/page.tsx"],
  },
  {
    path: "/insights",
    // Listing lastmod is derived from posts; page file still counted as a floor.
    sourceFiles: ["src/app/(website)/insights/page.tsx"],
  },
  {
    path: "/privacy",
    sourceFiles: ["src/app/(website)/privacy/page.tsx"],
  },
  {
    path: "/terms",
    sourceFiles: ["src/app/(website)/terms/page.tsx"],
  },
  {
    path: "/security",
    sourceFiles: ["src/app/(website)/security/page.tsx"],
  },
];

export function resolveRepoPath(relativePath: string) {
  // Sitemap lastmod reads only known source paths; ignore full-project tracing.
  return path.join(/*turbopackIgnore: true*/ process.cwd(), relativePath);
}

export function getLatestMtime(relativePaths: string[]): Date | null {
  let latest: Date | null = null;

  for (const relativePath of relativePaths) {
    const absolute = resolveRepoPath(relativePath);
    if (!fs.existsSync(absolute)) continue;
    const mtime = fs.statSync(absolute).mtime;
    if (!latest || mtime > latest) latest = mtime;
  }

  return latest;
}

export function maxDate(...dates: Array<Date | string | null | undefined>): Date {
  const parsed = dates
    .filter((value): value is Date | string => value != null && value !== "")
    .map((value) => (value instanceof Date ? value : new Date(value)))
    .filter((value) => !Number.isNaN(value.getTime()));

  if (parsed.length === 0) {
    throw new Error("maxDate requires at least one valid date");
  }

  return parsed.reduce((latest, current) => (current > latest ? current : latest));
}

export function insightContentRelativePath(slug: string) {
  return `src/features/insights/content/${slug}.mdx`;
}
