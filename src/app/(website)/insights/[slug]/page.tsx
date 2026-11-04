import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/features/insights/lib/posts";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  createPageMetadata,
} from "@/lib/metadata";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/insights/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    authors: [post.author],
    keywords: [post.category, "MIRVATE Insights", "yazılım mühendisliği", post.title],
  });
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category);
  const path = `/insights/${post.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Ana Sayfa", path: "/" },
            { name: "Insights", path: "/insights" },
            { name: post.title, path },
          ]),
          articleJsonLd({
            title: post.title,
            description: post.description,
            path,
            date: post.date,
            author: post.author,
            category: post.category,
          }),
        ]}
      />
      <article className="bg-surface-container-lowest py-16 md:py-24">
        <Container className="max-w-3xl">
          <Link
            href="/insights"
            className="font-[family-name:var(--font-mono)] text-xs text-primary hover:underline"
          >
            ← Insights
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <span className="rounded bg-surface-container px-2 py-1 font-[family-name:var(--font-mono)] text-[10px] text-primary uppercase">
              {post.category}
            </span>
            <time
              dateTime={post.date}
              className="font-[family-name:var(--font-mono)] text-[10px] text-on-surface-variant"
            >
              {post.date}
            </time>
          </div>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-on-surface md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 text-on-surface-variant">{post.description}</p>
          <p className="mt-2 font-[family-name:var(--font-mono)] text-xs text-on-surface-variant">
            {post.author}
          </p>

          <div className="prose-invert mt-10 space-y-4 text-on-surface-variant [&_h2]:mt-8 [&_h2]:font-[family-name:var(--font-headline)] [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-on-surface [&_li]:ml-5 [&_li]:list-disc [&_ol]:ml-5 [&_ol]:list-decimal [&_p]:leading-7 [&_strong]:text-on-surface">
            <MDXRemote source={post.content} />
          </div>

          {related.length > 0 ? (
            <aside className="mt-16 border-t border-white/5 pt-8">
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface">
                İlgili yazılar
              </h2>
              <ul className="mt-4 space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/insights/${r.slug}`}
                      className="text-primary hover:underline"
                    >
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          ) : null}
        </Container>
      </article>
    </>
  );
}
