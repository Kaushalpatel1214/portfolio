"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import data from "@/data/portfolio.json";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.h2 
              variants={fadeIn("down", "tween", 0.1, 0.8)}
              className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4"
            >
              Career Path
            </motion.h2>
            <motion.h3 
              variants={fadeIn("up", "tween", 0.2, 0.8)}
              className="text-4xl md:text-5xl font-black text-white"
            >
              Professional Journey
            </motion.h3>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:left-1/2">
            {data.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeIn(index % 2 === 0 ? "right" : "left", "spring", 0.3 + index * 0.2, 1)}
                className={`relative mb-12 md:w-1/2 ${
                  index % 2 === 0 
                  ? "md:pr-12 md:text-right md:left-[-50%]" 
                  : "md:pl-12 md:left-0"
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-0 w-4 h-4 rounded-full bg-primary border-4 border-[#050505] z-10 ${
                  index % 2 === 0 
                  ? "right-[-9px] md:right-[-8px]" 
                  : "left-[-9px] md:left-[-8px]"
                }`} />

                <div className="glass p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all group relative overflow-hidden">
                  {/* Subtle Gradient Background */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Briefcase size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h4>
                      <p className="text-secondary text-sm font-medium">{exp.company}</p>
                    </div>
                  </div>
                  
                  <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase font-bold tracking-widest text-muted-foreground mb-4">
                    {exp.period}
                  </span>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-white/5 to-transparent -z-10" />
    </section>
  );
}
