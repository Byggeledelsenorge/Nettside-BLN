import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PostBody } from "@/components/ui/PostBody";
import { PostCard } from "@/components/ui/PostCard";
import { CtaSection } from "@/components/sections/CtaSection";
import { getPost, getPostSlugs, postsByDate } from "@/content/posts";
import { buildMetadata, blogPostingJsonLd } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/fagbase/${post.slug}`,
    keywords: post.keywords,
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = postsByDate.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd(post)) }}
      />

      <section className="relative overflow-hidden bg-graphite-950 text-bone">
        <div aria-hidden className="absolute inset-0 bg-grid opacity-50" />
        <div
          aria-hidden
          className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-copper-700/15 blur-3xl"
        />
        <Container className="relative py-16 sm:py-20 lg:pb-32 lg:pt-24">
          <nav aria-label="Brødsmuler" className="mb-6 text-sm text-graphite-400">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-bone">
                  Forsiden
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span aria-hidden>/</span>
                <Link href="/fagbase" className="hover:text-bone">
                  Artikler
                </Link>
              </li>
            </ol>
          </nav>

          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-copper-300">
            <span aria-hidden className="h-px w-8 bg-copper-400/70" />
            {post.category}
          </div>
          <h1 className="mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-sm text-graphite-400">
            {post.author} <span aria-hidden>•</span>{" "}
            <time dateTime={post.date}>{post.dateLabel}</time>
          </p>
        </Container>
      </section>

      <article className="bg-bone pb-20 sm:pb-28">
        <Container className="relative -mt-8 lg:-mt-24">
          <div className="relative aspect-[16/9] w-full overflow-hidden border border-graphite-200 bg-graphite-100 rounded-sm">
            <Image
              src={post.cover}
              alt=""
              fill
              sizes="(min-width: 1024px) 1100px, 92vw"
              priority
              className="object-cover"
            />
          </div>
          {post.coverCredit && (
            <p className="mt-3 text-xs text-graphite-500">{post.coverCredit}</p>
          )}
        </Container>

        <Container size="narrow" className="mt-12 sm:mt-16">
          <PostBody blocks={post.body} />

          <div className="mt-12 border-t border-graphite-200 pt-10">
            <div className="border border-graphite-900 bg-graphite-900 p-8 text-bone rounded-sm">
              <h2 className="text-xl font-semibold tracking-tight">
                Trenger du byggfaglig bistand?
              </h2>
              <p className="mt-3 max-w-xl text-graphite-300">
                Fortell oss kort om saken, så gir vi deg en uforpliktende vurdering.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href="/kontakt" variant="accent" size="md">
                  Ta kontakt
                </Button>
                <Button href="/fagbase" variant="outlineLight" size="md">
                  Flere artikler
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="border-t border-graphite-200 bg-mist py-20 sm:py-24">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight text-graphite-900">
              Flere artikler
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <PostCard key={r.slug} post={r} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  );
}
