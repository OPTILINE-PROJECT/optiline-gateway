import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CTASection, PageHero } from "@/components/blocks";
import { insights } from "@/lib/content";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const post = insights.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Article unavailable — Optiline Mada" }, { name: "robots", content: "noindex" }] };
    }
    const { post } = loaderData;
    return {
      meta: [
        { title: `${post.title} — Optiline Mada` },
        { name: "description", content: post.excerpt },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/insights/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Organization", name: "Optiline Mada" },
          }),
        },
      ],
    };
  },
  component: InsightPage,
});

function InsightPage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <PageHero eyebrow="Insights" title={post.title} intro={post.excerpt} />

      <div className="mx-auto max-w-6xl px-6">
        <article className="max-w-[68ch] py-16 md:py-20">
          <div className="rounded-xl border border-dashed border-line bg-paper/60 p-6">
            <p className="text-[14px] leading-relaxed text-muted-foreground">
              [Article body placeholder — the full text of this article is to be provided. The page
              structure, metadata and sharing information are already in place, so publishing only
              requires adding the content.]
            </p>
          </div>
          <Link
            to="/insights"
            className="mt-8 inline-flex text-[14px] font-semibold text-blue hover:underline"
          >
            Back to all insights
          </Link>
        </article>
      </div>

      <CTASection />
    </>
  );
}
