import Hero from "@/components/sections/Hero";
import ProjectTimeline from "@/components/sections/ProjectTimeline";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import BlogPreview from "@/components/sections/BlogPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="relative">
      {/* Page-wide ambient violet glow */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 30%, rgba(100,60,180,0.07), transparent)" }}
      />
      <Hero />
      <ProjectTimeline />
      <Services />
      <About />
      <TechStack />
      <Portfolio />
      <Process />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </div>
  );
}
