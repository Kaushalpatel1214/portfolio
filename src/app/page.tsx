import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InfiniteMarquee from "@/components/InfiniteMarquee";

// Dynamic imports for components below the fold
const About = dynamic(() => import("@/components/About"), { ssr: true });
const Services = dynamic(() => import("@/components/Services"), { ssr: true });
const Projects = dynamic(() => import("@/components/Projects"), { ssr: true });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: true });
const Skills = dynamic(() => import("@/components/Skills"), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact"), { ssr: true });

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="noise" />
      <Navbar />
      <Hero />
      <InfiniteMarquee />
      <About />
      <Services />
      <Projects />
      <Experience />
      <Skills />
      <Contact />

      <footer className="py-12 border-t border-white/5 bg-black/20">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-sm">
            © 2026 Kaushal Patel. Crafted with passion and precision.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
