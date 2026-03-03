"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight } from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
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
            <h1 className="mt-4 text-4xl font-bold md:text-6xl font-[family-name:var(--font-display)]">
              Insights & <GradientText>Ideas</GradientText>
            </h1>
            <p className="mt-6 text-lg text-text-secondary">
              Thoughts on technology, development, and building better digital
              products.
            </p>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Blog List */}
      <SectionWrapper className="bg-surface/30">
        <div className="space-y-6">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="glass glow-hover rounded-xl p-8">
                  <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-xs text-text-muted">
                        <span className="rounded-md bg-primary/10 px-2.5 py-1 text-primary">
                          {post.category}
                        </span>
                        <span>{post.readTime}</span>
                        <span>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                      <h2 className="mt-3 text-xl font-bold transition-colors group-hover:text-primary md:text-2xl">
                        {post.title}
                      </h2>
                      <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary">
                      Read Article
                      <HiOutlineArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
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
