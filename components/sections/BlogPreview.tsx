"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiOutlineArrowRight, HiOutlineClock, HiOutlineCalendar } from "react-icons/hi2";
import SectionWrapper from "@/components/ui/SectionWrapper";
import GradientText from "@/components/ui/GradientText";
import { blogPosts } from "@/lib/data";

const CARDS = [...blogPosts, ...blogPosts]; // duplicate for seamless -50% loop

export default function BlogPreview() {
  const [paused, setPaused] = useState(false);

  return (
    <SectionWrapper id="blog" className="pb-8 lg:pb-10">
      {/* Header */}
      <div className="mb-10 text-center sm:mb-12">
        <span className="text-sm font-medium uppercase tracking-wider text-primary">Blog</span>
        <h2 className="mt-4 font-display text-2xl font-bold sm:text-3xl md:text-5xl">
          Latest <GradientText>Insights</GradientText>
        </h2>
        <Link
          href="/blog"
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-dark"
        >
          View All Posts
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Auto-scrolling marquee */}
      <div className="relative overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-8 bg-linear-to-r from-background/80 to-transparent sm:w-14" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-8 bg-linear-to-l from-background/80 to-transparent sm:w-14" />

        <div
          className="flex gap-5 pb-2"
          style={{
            animation: "marquee 36s linear infinite",
            animationPlayState: paused ? "paused" : "running",
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          {CARDS.map((post, i) => (
            <Link
              key={`${post.slug}-${i}`}
              href={`/blog/${post.slug}`}
              className="group block w-72 shrink-0 sm:w-80"
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="glass glow-hover flex h-full flex-col overflow-hidden rounded-xl"
              >
                {/* Cover image */}
                <div className="relative h-44 w-full shrink-0 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-surface/80 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="rounded-md bg-primary/10 px-2 py-0.5 font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiOutlineClock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 line-clamp-2 text-base font-semibold leading-snug transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mt-2 flex-1 line-clamp-2 text-xs leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-text-muted">
                    <span className="flex items-center gap-1">
                      <HiOutlineCalendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1 font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                      Read <HiOutlineArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
