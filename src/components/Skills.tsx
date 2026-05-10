"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import data from "@/data/portfolio.json";

export default function Skills() {
  const skillCategories = Object.entries(data.skills);

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
            <div className="space-y-4">
              <h2 className="text-xs font-bold text-primary uppercase tracking-[0.6em]">Technical Stack</h2>
              <h3 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
                CURATED <br />
                EXPERTISE.
              </h3>
            </div>
            <p className="text-white/40 text-sm max-w-[300px] mb-2 font-medium uppercase tracking-widest leading-relaxed">
              Professional tools and technologies I use to build world-class digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map(([category, items], idx) => (
              <motion.div
                key={category}
                variants={fadeIn("up", "spring", idx * 0.1, 0.8)}
                className="p-8 rounded-[32px] border border-white/[0.06] bg-white/[0.02] hover:border-primary/30 transition-all duration-500"
              >
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8">{category}</h4>
                <div className="flex flex-col gap-5">
                  {items.map((skill) => (
                    <div key={skill} className="flex flex-col gap-2 group">
                      <div className="flex justify-between items-end">
                        <span className="text-sm font-bold text-white/70 group-hover:text-white transition-colors">{skill}</span>
                      </div>
                      <div className="h-[1px] w-full bg-white/5 relative overflow-hidden">
                        <motion.div
                          initial={{ x: "-100%" }}
                          whileInView={{ x: "0%" }}
                          transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                          className="absolute inset-0 bg-primary/40"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
