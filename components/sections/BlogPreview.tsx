"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { blogPosts } from "@/lib/data";

export default function BlogPreview() {
  return (
    <SectionWrapper id="blog">
      <div className="mb-16 flex flex-col items-center justify-between gap-4 sm:flex-row">
        <div>
          <span className="text-sm font-medium uppercase tracking-wider text-primary">
            Blog
          </span>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl font-[family-name:var(--font-display)]">
            Latest <GradientText>Insights</GradientText>
          </h2>
        </div>
        <Link
          href="/blog"
          className="flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
        >
          View All Posts
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="group block h-full">
              <div className="glass glow-hover flex h-full flex-col rounded-xl overflow-hidden">
                {/* Category bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 text-primary">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
                    <span>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read more
                      <HiOutlineArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
