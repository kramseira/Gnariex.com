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
      {/* Page-wide ambient — matches About page green-teal atmosphere */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 0% 20%, rgba(0,208,132,0.07), transparent)",
            "radial-gradient(ellipse 60% 40% at 100% 60%, rgba(6,147,227,0.06), transparent)",
            "radial-gradient(ellipse 50% 40% at 40% 90%, rgba(155,81,224,0.05), transparent)",
          ].join(", "),
        }}
      />
      <Hero />
      <TechStack />
      <ProjectTimeline />
      <Services />
      <About />
      <Portfolio />
      <Process />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </div>
  );
}
