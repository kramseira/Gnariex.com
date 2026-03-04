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
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Web design on multi-monitor setup",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Client Portals",
    description:
      "Secure, intuitive client portals that streamline communication and deliver real-time project visibility to your customers.",
    features: ["Role-Based Access", "Real-Time Data", "Secure Auth", "Custom Workflows"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Secure client portal on laptop",
  },
  {
    icon: HiOutlineCloudArrowUp,
    title: "Cloud-Based Systems",
    description:
      "Scalable cloud infrastructure and SaaS solutions designed to grow with your business. Built for reliability and performance.",
    features: ["Auto Scaling", "99.9% Uptime", "Data Security", "Global CDN"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Cloud infrastructure and servers",
  },
  {
    icon: HiOutlineChartBarSquare,
    title: "Admin Dashboards",
    description:
      "Powerful admin dashboards with real-time analytics, user management, and complete control over your digital ecosystem.",
    features: ["Real-Time Analytics", "User Management", "Custom Reports", "API Integration"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Analytics dashboard with charts",
  },
  {
    icon: HiOutlineDevicePhoneMobile,
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps that deliver seamless experiences across iOS and Android devices.",
    features: ["Cross-Platform", "Push Notifications", "Offline Mode", "App Store Ready"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Mobile app interface on smartphone",
  },
  {
    icon: HiOutlineLightBulb,
    title: "IT Consulting",
    description:
      "Strategic technology consulting to help your business make informed decisions and adopt the right solutions.",
    features: ["Tech Strategy", "Architecture Review", "Digital Transformation", "Team Training"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Team strategy and technology consulting session",
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
    title: "Cloud Storage Platform",
    description:
      "Enterprise cloud storage with end-to-end encryption, team collaboration, and real-time sync across all devices.",
    longDescription:
      "A secure, enterprise-grade cloud storage and collaboration platform designed for mid-to-large organizations. Features include end-to-end encryption, granular permission controls, and seamless real-time file sync. Teams can collaborate on documents, manage version history, and set automated backup schedules — all from a unified dashboard.",
    tags: ["Next.js", "AWS", "TypeScript"],
    category: "Cloud System",
    color: "from-primary/20 to-secondary/20",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Server infrastructure for cloud platform",
    metrics: [
      { label: "Uptime", value: "99.99%" },
      { label: "File Sync", value: "Real-time" },
      { label: "Encryption", value: "End-to-end" },
    ],
  },
  {
    title: "Healthcare Admin Dashboard",
    description:
      "HIPAA-compliant admin dashboard with patient management, appointment scheduling, and secure data handling.",
    longDescription:
      "A HIPAA-compliant admin dashboard designed for healthcare providers. It centralizes patient records, appointment calendars, and billing workflows into a single interface. The system includes role-based access for doctors, nurses, and admin staff, with a full audit trail on all sensitive data operations.",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "Admin Dashboard",
    color: "from-secondary/20 to-accent/20",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Healthcare dashboard on tablet and desktop",
    metrics: [
      { label: "Compliance", value: "HIPAA" },
      { label: "Load Time", value: "<1s" },
      { label: "Data Accuracy", value: "99.7%" },
    ],
  },
  {
    title: "Financial Client Portal",
    description:
      "Client-facing financial portal with real-time portfolio tracking, secure document exchange, and automated reporting.",
    longDescription:
      "A white-label client portal designed for financial advisory firms. Clients can view live portfolio performance, exchange encrypted documents, and download automated monthly reports. Advisors get a back-office panel with CRM tools, compliance tracking, and customizable report templates.",
    tags: ["Next.js", "GraphQL", "MongoDB"],
    category: "Client Portal",
    color: "from-accent/20 to-primary/20",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Financial analytics dashboard with charts",
    metrics: [
      { label: "Security", value: "Bank-grade" },
      { label: "Reporting", value: "Automated" },
      { label: "White-label", value: "Fully Custom" },
    ],
  },
  {
    title: "E-Commerce Platform",
    description:
      "High-performance e-commerce platform supporting 10K+ concurrent users with real-time inventory and AI-powered recommendations.",
    longDescription:
      "A headless e-commerce platform engineered for scale. Designed to handle flash-sale traffic spikes with 10K+ concurrent users, it features a Redis-backed inventory engine, AI-driven product recommendations, and a real-time order management system. Optimized for top-tier performance and conversion.",
    tags: ["React", "Python", "Redis"],
    category: "Web Application",
    color: "from-primary/20 to-accent/20",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "E-commerce storefront on desktop and mobile",
    metrics: [
      { label: "Concurrency", value: "10K+ users" },
      { label: "Performance", value: "98 Lighthouse" },
      { label: "Page Speed", value: "<1s" },
    ],
  },
  {
    title: "Fleet Management System",
    description:
      "Vehicle and fleet management system with real-time GPS tracking, maintenance scheduling, driver logs, and cost analytics.",
    longDescription:
      "A comprehensive vehicle management platform designed for transport companies, logistics providers, and government fleets. Features include live GPS tracking on an interactive map, automated maintenance reminders, digital driver logbooks, and detailed fuel and cost analytics. Dispatchers can assign routes, monitor driver behavior, and generate compliance reports — all from a single web-based console.",
    tags: ["React", "Node.js", "PostgreSQL", "Mapbox"],
    category: "Fleet Management",
    color: "from-primary/20 to-secondary/20",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Fleet of vehicles managed via web dashboard",
    metrics: [
      { label: "Tracking", value: "Real-time GPS" },
      { label: "Cost Savings", value: "Up to 30%" },
      { label: "Optimization", value: "AI-powered" },
    ],
  },
  {
    title: "Booking & Accounting Suite",
    description:
      "Integrated booking and accounting platform with calendar scheduling, invoice generation, payment tracking, and financial reporting.",
    longDescription:
      "A full-featured appointment booking system combined with a built-in accounting engine, eliminating the need for separate tools. Businesses can manage client bookings, send automated reminders, generate professional invoices, track receivables and payables, and produce profit & loss statements — all within one platform. Role-based access supports front-desk staff, accountants, and management with tailored views.",
    tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    category: "Web Application",
    color: "from-secondary/20 to-accent/20",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Booking calendar and accounting dashboard interface",
    metrics: [
      { label: "Scheduling", value: "Automated" },
      { label: "Invoicing", value: "100% Accurate" },
      { label: "Time Saved", value: "15+ hrs/wk" },
    ],
  },
  {
    title: "Enterprise Resource Planner",
    description:
      "Modular ERP system covering inventory, procurement, HR, payroll, and financial management for mid-size businesses.",
    longDescription:
      "A modular enterprise resource planning platform designed for growing mid-size businesses. Modules include inventory and warehouse management, purchase orders and supplier management, HR and payroll with leave tracking, general ledger and financial reporting, and a management dashboard with live KPIs. Supports multi-currency and multi-branch operations with banking API integrations.",
    tags: ["React", "Python", "Django", "PostgreSQL"],
    category: "ERP System",
    color: "from-accent/20 to-primary/20",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "ERP business analytics and resource planning dashboard",
    metrics: [
      { label: "Modules", value: "8 Integrated" },
      { label: "Processing", value: "60% Faster" },
      { label: "Data Accuracy", value: "99.5%" },
    ],
  },
  {
    title: "Government Services Portal",
    description:
      "Citizen-facing digital services portal for submitting requests, tracking applications, and accessing public services online.",
    longDescription:
      "A citizen-facing digital services portal that bridges residents and local government institutions. Citizens can register, submit service requests (permits, utilities, complaints), upload supporting documents, and track real-time application status. Government staff get a back-office workflow manager with automated routing, SLA tracking, and a reporting suite. Designed with accessibility and low-bandwidth environments in mind.",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    category: "Gov Portal",
    color: "from-primary/20 to-accent/20",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Government community service portal on desktop",
    metrics: [
      { label: "Scalability", value: "Unlimited" },
      { label: "Response", value: "45% Faster" },
      { label: "Accessibility", value: "WCAG 2.1" },
    ],
  },
  {
    title: "Hotel Management Platform",
    description:
      "Full-stack hotel management and guest booking platform with real-time availability, dynamic pricing, and digital concierge.",
    longDescription:
      "A full-stack hotel management system designed for boutique and mid-range properties. Guests can browse rooms, view live availability, and book directly with instant confirmation. The back-office dashboard manages reservations, housekeeping schedules, room service orders, and guest profiles. Dynamic pricing adjusts rates based on demand, seasonality, and occupancy. Also features a digital concierge for guests to request amenities, late checkout, or local recommendations.",
    tags: ["Next.js", "Prisma", "Stripe", "PostgreSQL"],
    category: "Hospitality",
    color: "from-accent/20 to-secondary/20",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern hotel lobby with digital check-in kiosk",
    metrics: [
      { label: "Booking", value: "Instant" },
      { label: "Pricing", value: "Dynamic" },
      { label: "Concierge", value: "Built-in" },
    ],
  },
  {
    title: "Task Management App",
    description:
      "Collaborative task management app with Kanban boards, time tracking, priority tagging, and team workload analytics.",
    longDescription:
      "A team productivity platform that replaces scattered spreadsheets and sticky notes with a structured, real-time task system. Features include drag-and-drop Kanban boards, custom workflows per project, recurring task automation, time tracking with timesheets, file attachments, and workload heatmaps so managers can balance assignments. Notifications keep everyone aligned, and a reporting dashboard tracks velocity, completion rates, and bottlenecks across sprints.",
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Productivity",
    color: "from-secondary/20 to-primary/20",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Kanban task board with team collaboration",
    metrics: [
      { label: "Collaboration", value: "Real-time" },
      { label: "Workflows", value: "Fully Custom" },
      { label: "Integrations", value: "20+" },
    ],
  },
  {
    title: "Project Management Suite",
    description:
      "Project management platform with Gantt charts, resource allocation, budget tracking, and client-facing progress dashboards.",
    longDescription:
      "A project management suite designed for agencies, construction firms, and IT companies managing multiple concurrent projects. Features include interactive Gantt charts with dependency linking, resource allocation with conflict detection, milestone tracking, budget vs. actual cost analysis, and risk registers. Clients get a read-only portal to view progress, approve deliverables, and leave feedback — keeping stakeholders aligned without access to internal data.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    category: "Project Management",
    color: "from-primary/20 to-accent/20",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Project Gantt chart and resource dashboard",
    metrics: [
      { label: "Capacity", value: "Unlimited" },
      { label: "Tracking", value: "Real-time" },
      { label: "Budget Control", value: "Precise" },
    ],
  },
  {
    title: "Car Booking Platform",
    description:
      "Ride-hailing and car booking platform with web and mobile apps for scheduling, driver matching, fare estimation, and trip tracking.",
    longDescription:
      "A ride-hailing and car booking platform designed for regional transport operators. Passengers book rides via web or mobile app with upfront fare estimates, real-time driver matching, and live trip tracking on a map. Drivers use a companion app to accept rides, navigate routes, and manage earnings. The admin dashboard handles fleet oversight, driver verification, pricing zones, promo codes, and analytics. Supports both on-demand rides and scheduled bookings with multi-payment options.",
    tags: ["React Native", "Node.js", "PostgreSQL", "Mapbox"],
    category: "Web & Mobile",
    color: "from-secondary/20 to-accent/20",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Car booking app on mobile with map and ride tracking",
    metrics: [
      { label: "Matching", value: "Instant" },
      { label: "GPS Tracking", value: "Real-time" },
      { label: "Payments", value: "Multi-option" },
    ],
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
    slug: "ai-in-business-applications-2026",
    title: "AI in Business Applications: What Actually Works in 2026",
    excerpt:
      "Beyond the hype — a practical breakdown of where AI delivers real ROI in business software, and where it still falls short.",
    date: "2026-03-01",
    category: "AI",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
    imageAlt: "AI and machine learning visualization",
    content: `AI has gone from boardroom buzzword to line-item budget. But not every AI investment is paying off equally. In 2026, the gap between teams using AI effectively and those chasing trends has never been wider.

## Where AI Delivers Real ROI

The highest-value applications we've seen are narrow, well-scoped, and deeply integrated into existing workflows. Document parsing and classification, anomaly detection in operational data, and intelligent search inside enterprise systems — these are the areas where AI pays for itself within months.

## Where It Still Falls Short

Fully autonomous decision-making in high-stakes domains remains unreliable. AI-generated code that isn't reviewed by engineers introduces subtle bugs. Any application where the cost of a wrong answer is high needs a human in the loop.

## The Integration Layer Is Everything

The difference between a useful AI feature and a failed pilot is usually not the model — it's the integration. Teams that invest in clean data pipelines, structured outputs, and rigorous evaluation loops see dramatically better results.

## What We Do Differently at Gnariex

We treat AI as a capability layer, not a product. Every AI feature we build for clients is scoped with clear success criteria, an evaluation framework, and a fallback path. That discipline is what separates deployments that scale from demos that don't.`,
  },
  {
    slug: "future-of-cloud-computing-2026",
    title: "The Future of Cloud Computing in 2026",
    excerpt:
      "Explore the latest trends in cloud computing, from edge computing to serverless architectures, and how they're reshaping business technology.",
    date: "2026-02-28",
    category: "Cloud",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Cloud computing and server infrastructure",
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
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Cybersecurity and data protection",
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
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Web development code on screen",
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
  {
    slug: "ux-patterns-that-drive-conversions",
    title: "UX Patterns That Drive Conversions: Lessons from 50 Projects",
    excerpt:
      "After building 50+ digital products, these are the UX decisions that consistently moved the needle — and the ones that looked good but didn't.",
    date: "2026-02-10",
    category: "Design",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
    imageAlt: "UX design wireframes and user interface",
    content: `Good design is easy to recognize and hard to replicate. After 50+ projects, we've identified the patterns that reliably increase engagement — and the traps that look polished but hurt conversion.

## Clarity Beats Cleverness Every Time

The biggest conversion killer we see is ambiguous CTAs. Buttons labeled "Learn More" or "Get Started" underperform against specific, outcome-driven labels like "See Pricing" or "Book a 30-Minute Call." Users click when they know exactly what happens next.

## Reduce Cognitive Load at Every Step

Every decision a user has to make is friction. Forms with fewer fields outperform comprehensive ones. Single-column layouts beat multi-column. Progressive disclosure — showing only what's needed, when it's needed — is one of the highest-leverage patterns we apply consistently.

## Trust Signals Near the Action

Social proof placed directly beside a conversion element (not buried in a separate section) lifts completion rates measurably. A single relevant testimonial next to a contact form consistently outperforms a full testimonials page.

## Mobile Is Primary

Over 60% of traffic on the projects we deliver is mobile. We design for the thumb first — large tap targets, minimal scrolling to reach key actions, and forms that don't require zooming. Mobile-first isn't a trend; it's the baseline.`,
  },
  {
    slug: "microservices-vs-monolith-choosing-architecture",
    title: "Microservices vs Monolith: Choosing the Right Architecture",
    excerpt:
      "The architecture debate that never ends — but the answer is simpler than most teams think. Here's our practical decision framework.",
    date: "2026-01-18",
    category: "Architecture",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Software architecture network diagram",
    content: `The microservices vs monolith debate has filled more engineering blog posts than almost any other topic. In practice, the decision is less philosophical and more situational.

## Start With the Monolith

For the vast majority of new products and teams under 20 engineers, a well-structured monolith is the right call. It's faster to build, easier to debug, simpler to deploy, and doesn't require orchestration infrastructure. The pain points that microservices solve — independent scaling, isolated deployments, polyglot persistence — don't exist at small scale.

## When to Introduce Service Boundaries

The signals that a bounded extraction makes sense: a single module is bottlenecking deployments for the rest of the system, a component has dramatically different scaling requirements, or multiple teams need to own separate codebases independently. These are real problems. Preemptive decomposition is not a solution — it's complexity debt.

## The Modular Monolith Is Underrated

The best of both worlds for most teams is a modular monolith — clear internal module boundaries with shared infrastructure. It preserves deployment simplicity while enforcing the separation of concerns that makes future extraction tractable.

## Our Recommendation

Build a monolith with clear domain boundaries. Extract services when you feel specific pain, not before. The teams we work with that follow this path ship faster and operate more reliably than those who start distributed.`,
  },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// ─── Company Info ────────────────────────────────────────────────────────────

export const companyInfo = {
  name: "Gnariex",
  tagline: "Trusted IT Solutions Partner for PNG & Worldwide.",
  description:
    "Gnariex is a trusted IT solutions partner delivering advanced websites, client portals, admin dashboards, cloud systems, and mobile apps for Papua New Guinea businesses and clients worldwide.",
  email: "info@gnariex.com",
  phone: "+63 956 043 1217",
  socials: {
    twitter: "https://twitter.com/gnariex",
    linkedin: "https://linkedin.com/company/gnariex",
    github: "https://github.com/gnariex",
  },
};
