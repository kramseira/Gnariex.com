"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineClock, HiOutlineCalendar } from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { blogPosts } from "@/lib/data";

const CATEGORY_COLORS: Record<string, string> = {
  AI: "bg-[#f97316]/15 text-[#f97316] border-[#f97316]/20",
  Cloud: "bg-secondary/15 text-secondary border-secondary/20",
  Security: "bg-accent/15 text-accent border-accent/20",
  Development: "bg-primary/15 text-primary border-primary/20",
  Design: "bg-secondary/15 text-secondary border-secondary/20",
  Architecture: "bg-accent/15 text-accent border-accent/20",
};

function CategoryBadge({ category }: { category: string }) {
  const color = CATEGORY_COLORS[category] ?? "bg-primary/15 text-primary border-primary/20";
  return (
    <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${color}`}>
      {category}
    </span>
  );
}

function formatDate(date: string, short = false) {
  return new Date(date).toLocaleDateString("en-US", {
    month: short ? "short" : "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const [featured, second, third, ...grid] = blogPosts;

  return (
    <div className="pt-20">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-secondary/8 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-accent/6 blur-3xl" />
        <SectionWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-sm font-medium uppercase tracking-wider text-primary">
                Blog
              </span>
              <h1 className="mt-4 font-display text-3xl font-bold sm:text-4xl md:text-6xl">
                Insights & <GradientText>Ideas</GradientText>
              </h1>
              <p className="mt-4 text-base text-text-secondary sm:mt-6 sm:text-lg">
                Thoughts on technology, development, and building better digital
                products.
              </p>
            </motion.div>
          </div>
        </SectionWrapper>
      </div>

      <SectionWrapper className="bg-surface/30">
        {/* Top bento: featured (2-col) + side stack (1-col, 2 cards) */}
        <div className="grid gap-5 lg:grid-cols-3">

          {/* Featured */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <Link href={`/blog/${featured.slug}`} className="group block h-full">
              <div className="relative h-56 overflow-hidden rounded-2xl sm:h-72 lg:h-full lg:min-h-[460px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/50 to-background/10" />

                {/* Latest badge */}
                <div className="absolute left-5 top-5">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-background animate-pulse" />
                    Latest
                  </span>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <CategoryBadge category={featured.category} />
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <HiOutlineClock className="h-3.5 w-3.5" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-snug transition-colors group-hover:text-primary sm:text-3xl lg:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-2 line-clamp-2 max-w-xl text-sm text-text-secondary sm:text-base">
                    {featured.excerpt}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <HiOutlineCalendar className="h-3.5 w-3.5" />
                      {formatDate(featured.date)}
                    </span>
                    <span className="flex translate-x-2 items-center gap-1.5 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                      Read Article <HiOutlineArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Side stack: 2 cards */}
          <div className="flex flex-col gap-5 sm:flex-row lg:flex-col">
            {[second, third].map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i + 1) * 0.1 }}
                className="flex-1"
              >
                <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-light hover:shadow-lg hover:shadow-black/20">
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-surface/60 to-transparent" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-center gap-2">
                      <CategoryBadge category={post.category} />
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <HiOutlineClock className="h-3 w-3" />{post.readTime}
                      </span>
                    </div>
                    <h3 className="mt-2 font-display text-sm font-bold leading-snug transition-colors group-hover:text-primary sm:text-base">
                      {post.title}
                    </h3>
                    <p className="mt-1 line-clamp-2 flex-1 text-xs text-text-secondary leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                      <span className="flex items-center gap-1 text-xs text-text-muted">
                        <HiOutlineCalendar className="h-3 w-3" />{formatDate(post.date, true)}
                      </span>
                      <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                        Read <HiOutlineArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom grid: remaining 3 cards */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {grid.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:border-border-light hover:shadow-lg hover:shadow-black/20">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface/60 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2">
                    <CategoryBadge category={post.category} />
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <HiOutlineClock className="h-3 w-3" />{post.readTime}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-base font-bold leading-snug transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 flex-1 line-clamp-3 text-xs text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                    <span className="flex items-center gap-1.5 text-xs text-text-muted">
                      <HiOutlineCalendar className="h-3 w-3" />{formatDate(post.date, true)}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read <HiOutlineArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
