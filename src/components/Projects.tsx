"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import data from "@/data/portfolio.json";
import { useState, useMemo } from "react";
import Image from "next/image";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Dynamically get unique categories from data
  const categories = useMemo(() => {
    const cats = data.projects.map(p => p.category);
    return ["All", ...Array.from(new Set(cats))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return data.projects;
    return data.projects.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-32 bg-[#050505] relative border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.6em]">Portfolio</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
              SOCIALLY <br />
              CONSCIOUS <br />
              SOLUTIONS.
            </h3>
          </div>

          <div className="lg:max-w-xs space-y-6">
            <p className="text-sm font-medium text-white/50 leading-relaxed uppercase tracking-widest">
              Detailed focus on scalability, performance, and accessible UI. This is a collection of work from the last 24 months.
            </p>
          </div>
        </div>

        {/* Improved Filter Bar */}
        <div className="flex flex-col gap-10 mb-20">
          <div className="flex flex-col md:flex-row items-end justify-between gap-6 pb-6 border-b border-white/5">
            <div className="space-y-4">
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Filter By</span>
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`relative px-8 py-3 text-[11px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-500 border overflow-hidden group ${activeFilter === cat
                        ? "border-primary text-white"
                        : "border-white/10 text-white/40 hover:border-white/20 hover:text-white bg-white/5"
                      }`}
                  >
                    {activeFilter === cat && (
                      <motion.div 
                        layoutId="filter-bg"
                        className="absolute inset-0 bg-primary z-0"
                        transition={{ type: "spring", bounce: 0.1, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mb-2">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Current View</span>
                <span className="text-sm font-bold text-white tracking-tighter">
                  {filteredProjects.length.toString().padStart(2, '0')} {activeFilter === "All" ? "Total Projects" : `${activeFilter} Projects`}
                </span>
              </div>
              <div className="h-10 w-px bg-white/10" />
            </div>
          </div>
        </div>

        {/* Professional Project List */}
        <div className="flex flex-col min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group border-b border-white/5 py-12 md:py-16 hover-trigger cursor-pointer"
                >
                  <div className="grid md:grid-cols-12 items-center gap-8 md:gap-12">
                    {/* ID & Year */}
                    <div className="md:col-span-1">
                      <span className="text-xs font-black text-white/20 font-serif italic">0{index + 1}</span>
                    </div>

                    {/* Title & Category */}
                    <div className="md:col-span-7 lg:col-span-8">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center gap-3 mb-6">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                          <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em]">
                            {project.category}
                          </span>
                        </div>
                        <h4 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white uppercase group-hover:text-primary transition-all duration-500 flex items-center gap-6">
                          {project.title}
                          <ArrowUpRight size={50} className="opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-primary" />
                        </h4>
                        <div className="flex flex-wrap gap-3 mt-10">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-black uppercase tracking-widest text-white/40 border border-white/10 px-4 py-1.5 rounded-full group-hover:border-primary/30 group-hover:text-white/60 transition-colors">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Meta Details */}
                    <div className="md:col-span-4 lg:col-span-3 flex flex-col items-end text-right">
                      <span className="text-[11px] font-black text-primary uppercase tracking-[0.3em] mb-4">Case Narrative</span>
                      <p className="text-sm font-medium text-white/40 leading-relaxed max-w-[240px]">
                        {project.description}
                      </p>
                      <div className="flex gap-6 mt-10">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-primary transition-all"
                        >
                          <span className="relative overflow-hidden h-4 inline-block">
                            <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">
                              {project.tags.includes("Figma") || project.category.includes("Design") ? "Open Figma" : "Launch Live"}
                            </span>
                            <span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover/link:-translate-y-full text-primary">
                              {project.tags.includes("Figma") || project.category.includes("Design") ? "Open Figma" : "Launch Live"}
                            </span>
                          </span>
                        </a>
                        <a href="#" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">Documentation</a>
                      </div>
                    </div>
                  </div>

                  {/* Unique Image Hover Effect */}
                  <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] pointer-events-none opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-50 overflow-hidden rounded-2xl hidden lg:block shadow-2xl`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-[#050505]/40" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Industrial Footer Element */}
      <div className="mt-24 border-t border-white/5 py-12">
        <div className="container mx-auto px-6 flex justify-between items-center text-white/20">
          <span className="text-[10px] font-black uppercase tracking-[0.5em]">Curated Artifacts</span>
          <div className="flex gap-12 font-bold text-[10px] uppercase tracking-widest">
            <span>Front-End Eng.</span>
            <span>Motion Arch.</span>
            <span>Clean Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
}
