import {
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineCloudArrowUp,
  HiOutlineChartBarSquare,
  HiOutlineDevicePhoneMobile,
  HiOutlineLightBulb,
} from "react-icons/hi2";

// ─── Services ────────────────────────────────────────────────────────────────

export const services = [
  {
    icon: HiOutlineGlobeAlt,
    title: "Advanced Websites",
    description:
      "High-performance, SEO-optimized websites built with cutting-edge technologies. From corporate sites to complex web applications.",
    features: ["Custom Design", "SEO Optimized", "Lightning Fast", "Responsive"],
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Client Portals",
    description:
      "Secure, intuitive client portals that streamline communication and deliver real-time project visibility to your customers.",
    features: ["Role-Based Access", "Real-Time Data", "Secure Auth", "Custom Workflows"],
  },
  {
    icon: HiOutlineCloudArrowUp,
    title: "Cloud-Based Systems",
    description:
      "Scalable cloud infrastructure and SaaS solutions designed to grow with your business. Built for reliability and performance.",
    features: ["Auto Scaling", "99.9% Uptime", "Data Security", "Global CDN"],
  },
  {
    icon: HiOutlineChartBarSquare,
    title: "Admin Dashboards",
    description:
      "Powerful admin dashboards with real-time analytics, user management, and complete control over your digital ecosystem.",
    features: ["Real-Time Analytics", "User Management", "Custom Reports", "API Integration"],
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.",
    features: ["Cross-Platform", "Push Notifications", "Offline Mode", "App Store Ready"],
  },
  {
    icon: HiOutlineLightBulb,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help your business make informed decisions and adopt the right solutions.",
    features: ["Tech Strategy", "Architecture Review", "Digital Transformation", "Team Training"],
  },
];

// ─── Stats ───────────────────────────────────────────────────────────────────

export const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 99.9, suffix: "%", label: "Uptime Guarantee" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

// ─── Tech Stack ──────────────────────────────────────────────────────────────

export const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Redis", category: "Database" },
  { name: "Git", category: "DevOps" },
  { name: "Figma", category: "Design" },
  { name: "Vercel", category: "Cloud" },
];

// ─── Portfolio ───────────────────────────────────────────────────────────────

export const portfolio = [
  {
    title: "CloudVault Pro",
    description:
      "Enterprise cloud storage platform with advanced encryption, team collaboration, and real-time sync across devices.",
    tags: ["Next.js", "AWS", "TypeScript"],
    category: "Cloud System",
    color: "from-primary/20 to-secondary/20",
  },
  {
    title: "MediTrack Dashboard",
    description:
      "Healthcare admin dashboard with patient management, appointment scheduling, and HIPAA-compliant data handling.",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "Admin Dashboard",
    color: "from-secondary/20 to-accent/20",
  },
  {
    title: "FinanceHub Portal",
    description:
      "Client-facing financial portal with real-time portfolio tracking, secure document exchange, and automated reporting.",
    tags: ["Next.js", "GraphQL", "MongoDB"],
    category: "Client Portal",
    color: "from-accent/20 to-primary/20",
  },
  {
    title: "ShopStream",
    description:
      "High-performance e-commerce platform handling 10K+ concurrent users with real-time inventory and AI-powered recommendations.",
    tags: ["React", "Python", "Redis"],
    category: "Web Application",
    color: "from-primary/20 to-accent/20",
  },
];

// ─── Process ─────────────────────────────────────────────────────────────────

export const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your business goals, audience, and technical requirements to craft the perfect strategy.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Our designers create stunning UI/UX mockups that align with your brand and deliver exceptional user experiences.",
  },
  {
    step: "03",
    title: "Develop",
    description:
      "Our engineers bring designs to life with clean, scalable code using the latest technologies and best practices.",
  },
  {
    step: "04",
    title: "Deploy & Support",
    description:
      "We launch your project on robust infrastructure and provide ongoing maintenance and support to ensure success.",
  },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechVentures Inc.",
    content:
      "Gnariex transformed our outdated platform into a modern, scalable cloud solution. Their technical expertise and attention to detail exceeded all expectations.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Founder, DataFlow Systems",
    content:
      "The admin dashboard Gnariex built for us has completely streamlined our operations. Real-time analytics and intuitive design — exactly what we needed.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Director of Operations, HealthPlus",
    content:
      "Working with Gnariex was a game-changer. Their client portal solution improved our customer satisfaction scores by 40% in just three months.",
    rating: 5,
  },
];

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export const blogPosts = [
  {
    slug: "future-of-cloud-computing-2026",
    title: "The Future of Cloud Computing in 2026",
    excerpt:
      "Explore the latest trends in cloud computing, from edge computing to serverless architectures, and how they're reshaping business technology.",
    date: "2026-02-28",
    category: "Cloud",
    readTime: "5 min read",
    content: `Cloud computing continues to evolve at a rapid pace. In 2026, we're seeing several transformative trends that are reshaping how businesses build and deploy technology.

## Edge Computing Goes Mainstream

Edge computing has moved from experimental to essential. By processing data closer to where it's generated, businesses are achieving sub-millisecond response times for their applications.

## Serverless Architecture Maturity

Serverless platforms have matured significantly. With better cold-start times, improved debugging tools, and more predictable pricing, serverless is now viable for mission-critical applications.

## Multi-Cloud Strategies

Organizations are increasingly adopting multi-cloud strategies to avoid vendor lock-in and optimize costs. Tools for managing workloads across AWS, Azure, and GCP have become more sophisticated.

## AI-Powered Cloud Management

AI is now deeply integrated into cloud management, automatically optimizing resource allocation, predicting failures, and scaling infrastructure based on anticipated demand patterns.

## What This Means for Your Business

Staying competitive means embracing these trends. At Gnariex, we help businesses navigate the cloud landscape and implement solutions that are built for the future.`,
  },
  {
    slug: "building-secure-client-portals",
    title: "Building Secure Client Portals: A Complete Guide",
    excerpt:
      "Learn the essential security practices and architectural decisions that go into building a robust, secure client portal for your business.",
    date: "2026-02-15",
    category: "Security",
    readTime: "7 min read",
    content: `Client portals are the gateway between your business and your customers. Getting security right isn't optional — it's foundational.

## Authentication Best Practices

Multi-factor authentication (MFA) should be the baseline, not the exception. Combine it with session management, token rotation, and IP-based anomaly detection.

## Data Encryption

Encrypt data both at rest and in transit. Use AES-256 for stored data and TLS 1.3 for all communications. Implement field-level encryption for sensitive information.

## Role-Based Access Control

Design granular permission systems that give users exactly the access they need — no more, no less. Implement audit logging for all access events.

## Regular Security Audits

Conduct penetration testing quarterly and automated vulnerability scanning continuously. Stay ahead of threats rather than reacting to them.

## The Gnariex Approach

At Gnariex, security isn't an afterthought. Every client portal we build undergoes rigorous security review and follows industry best practices from day one.`,
  },
  {
    slug: "why-nextjs-is-the-future-of-web-development",
    title: "Why Next.js is the Future of Web Development",
    excerpt:
      "Discover why leading companies are choosing Next.js for their web applications and how it's setting new standards for performance and developer experience.",
    date: "2026-01-30",
    category: "Development",
    readTime: "6 min read",
    content: `Next.js has established itself as the leading React framework, and for good reason. Here's why we at Gnariex build with Next.js.

## Server-Side Rendering & Static Generation

Next.js gives you the best of both worlds. Pages that need real-time data get server-rendered, while static pages get pre-built for blazing-fast load times.

## The App Router Revolution

The App Router, introduced in Next.js 13 and refined through subsequent versions, provides a more intuitive way to build complex applications with nested layouts, loading states, and error boundaries.

## Built-in Optimization

Image optimization, font optimization, script loading strategies — Next.js handles performance optimization that would take weeks to implement manually.

## Full-Stack Capabilities

With API routes and Server Actions, Next.js is a full-stack framework. You can build your entire application — frontend and backend — in a single codebase.

## Why Gnariex Chooses Next.js

For our clients, Next.js means faster load times, better SEO, and a codebase that's easier to maintain and scale. It's the technology that powers the modern web.`,
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// ─── Company Info ────────────────────────────────────────────────────────────

export const companyInfo = {
  name: "Gnariex",
  tagline: "Next-Level Solutions.",
  description:
    "We build advanced websites, client portals, admin dashboards, cloud-based systems, and mobile applications that drive business growth.",
  email: "info@gnariex.com",
  phone: "+63 956 043 1217",
  socials: {
    twitter: "https://twitter.com/gnariex",
    linkedin: "https://linkedin.com/company/gnariex",
    github: "https://github.com/gnariex",
  },
};
