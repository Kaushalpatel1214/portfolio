"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github, Search } from "lucide-react";
import data from "@/data/portfolio.json";
import { useState, useMemo } from "react";
import Image from "next/image";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

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
            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.6em]">Case Studies</h2>
            <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
              STRATEGIC <br />
              ENGINEERING.
            </h3>
          </div>

          <div className="lg:max-w-xs space-y-6">
            <p className="text-sm font-medium text-white/50 leading-relaxed uppercase tracking-widest">
              A deep dive into complex problems solved through modern web architecture and pixel-perfect implementation.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-3 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`relative px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-500 border ${activeFilter === cat
                  ? "border-primary text-white bg-primary/10"
                  : "border-white/10 text-white/40 hover:border-white/20 hover:text-white bg-white/[0.02]"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-32"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
                >
                  {/* Visual Preview */}
                  <div className="relative group aspect-[16/10] rounded-[40px] overflow-hidden bg-white/5 border border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" />
                  </div>

                  {/* Narrative Content */}
                  <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">{project.category}</span>
                        <div className="h-px w-8 bg-primary/30" />
                      </div>
                      <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter">{project.title}</h4>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8 py-6 border-y border-white/5">
                      <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-primary">The Problem</p>
                        <p className="text-sm text-white/50 leading-relaxed">{project.problem}</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-[10px] font-black uppercase tracking-widest text-secondary">The Solution</p>
                        <p className="text-sm text-white/50 leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-white/30">Technologies & Impact</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.03] text-[10px] font-bold text-white/60">
                            {tag}
                          </span>
                        ))}
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                          {project.result}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                      <a href={project.links.live} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                        <ExternalLink size={14} /> Live Demo
                      </a>
                      {project.links.github !== "#" && (
                        <a href={project.links.github} target="_blank" className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all">
                          <Github size={14} /> GitHub
                        </a>
                      )}
                      {project.links.caseStudy !== "#" && (
                        <a href={project.links.caseStudy} className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all">
                          <Search size={14} /> Case Study
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
