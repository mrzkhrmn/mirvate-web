import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { InsightFrontmatter } from "@/types";

const CONTENT_DIR = path.join(
  process.cwd(),
  "src/features/insights/content",
);

export type InsightPost = InsightFrontmatter & {
  content: string;
};

export function getAllPosts(): InsightPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const fm = data as InsightFrontmatter;
      return {
        ...fm,
        slug: fm.slug ?? file.replace(/\.mdx$/, ""),
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): InsightPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, category: string, limit = 2) {
  return getAllPosts()
    .filter((p) => p.slug !== slug && p.category === category)
    .slice(0, limit);
}
