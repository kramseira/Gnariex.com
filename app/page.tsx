import Hero from "@/components/sections/Hero";
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
    <>
      <Hero />
      <Services />
      <About />
      <TechStack />
      <Portfolio />
      <Process />
      <Testimonials />
      <BlogPreview />
      <CTA />
    </>
  );
}
