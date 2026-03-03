import Link from "next/link";
import { notFound } from "next/navigation";
import { HiOutlineArrowLeft, HiOutlineClock, HiOutlineCalendar } from "react-icons/hi2";
import { blogPosts } from "@/lib/data";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-20">
      <article className="mx-auto max-w-3xl px-4 py-12 sm:py-20 md:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
        >
          <HiOutlineArrowLeft className="h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-text-muted sm:gap-4">
            <span className="rounded-md bg-primary/10 px-2.5 py-1 text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <HiOutlineClock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span className="flex items-center gap-1">
              <HiOutlineCalendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
          <h1 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl font-[family-name:var(--font-display)]">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-text-secondary sm:text-lg">{post.excerpt}</p>
        </header>

        {/* Divider */}
        <div className="my-10 h-px bg-gradient-to-r from-transparent via-border-light to-transparent" />

        {/* Content */}
        <div className="prose prose-invert max-w-none prose-headings:font-[family-name:var(--font-display)] prose-headings:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-a:text-primary prose-strong:text-text-primary prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4">
          {post.content.split("\n\n").map((paragraph, i) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-text-primary font-[family-name:var(--font-display)]">
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={i} className="mb-4 text-text-secondary leading-relaxed">
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-12 rounded-xl border border-border bg-surface/50 p-5 text-center sm:mt-16 sm:p-8">
          <h3 className="text-xl font-bold font-[family-name:var(--font-display)]">
            Need help with your project?
          </h3>
          <p className="mt-2 text-sm text-text-secondary">
            Let&apos;s discuss how Gnariex can help you build something amazing.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-background transition-all hover:bg-primary-dark"
          >
            Get in Touch
          </Link>
        </div>
      </article>
    </div>
  );
}
