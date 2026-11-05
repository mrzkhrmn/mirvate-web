import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getAllPosts } from "@/features/insights/lib/posts";
import { breadcrumbJsonLd, createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Insights",
  description:
    "MIRVATE mühendislik notları: özel yazılım, backend, mobil, DevOps ve ürün mimarisi üzerine yazılar.",
  path: "/insights",
  keywords: [
    "özel yazılım blog",
    "yazılım mühendisliği",
    "mühendislik notları",
    "MIRVATE Insights",
  ],
});

export default function InsightsPage() {
  const posts = getAllPosts();

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Ana Sayfa", path: "/" },
          { name: "Insights", path: "/insights" },
        ])}
      />
      <section className="bg-surface-container-lowest py-16 md:py-24">
        <Container>
          <span className="font-[family-name:var(--font-mono)] text-xs font-medium uppercase tracking-widest text-primary">
            Insights
          </span>
          <h1 className="mt-2 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-tight text-on-surface md:text-6xl">
            Mühendislik Notları
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-on-surface-variant">
            Üretim deneyiminden süzülen kısa teknik yazılar.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-xl bg-surface-container p-6 transition-colors hover:bg-surface-container-high"
              >
                <div>
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="rounded bg-surface-container-lowest px-2 py-1 font-[family-name:var(--font-mono)] text-[10px] text-primary uppercase">
                      {post.category}
                    </span>
                    <time
                      dateTime={post.date}
                      className="font-[family-name:var(--font-mono)] text-[10px] text-on-surface-variant"
                    >
                      {post.date}
                    </time>
                  </div>
                  <h2 className="font-[family-name:var(--font-headline)] text-xl font-semibold text-on-surface">
                    <Link href={`/insights/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2 text-[13px] leading-5 text-on-surface-variant">
                    {post.description}
                  </p>
                </div>
                <Link
                  href={`/insights/${post.slug}`}
                  className="mt-6 text-sm font-semibold text-primary-container"
                >
                  Devamını oku →
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
