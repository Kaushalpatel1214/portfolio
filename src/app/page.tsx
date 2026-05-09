import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import InfiniteMarquee from "@/components/InfiniteMarquee";

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
