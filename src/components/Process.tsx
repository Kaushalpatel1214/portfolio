"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import data from "@/data/portfolio.json";

export default function Process() {
  return (
    <section id="process" className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center mb-24">
            <motion.h2 
              variants={fadeIn("down", "tween", 0.1, 0.8)}
              className="text-xs font-bold text-primary uppercase tracking-[0.6em] mb-4"
            >
              Workflow
            </motion.h2>
            <motion.h3 
              variants={fadeIn("up", "tween", 0.2, 0.8)}
              className="text-5xl md:text-7xl font-black text-white tracking-tighter"
            >
              MY 5-STEP <br /> <span className="hero-gradient-text">PROCESS.</span>
            </motion.h3>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[50%] left-0 w-full h-px bg-white/5 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {data.process.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", 0.1 * index, 0.8)}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 group"
                >
                  <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-black text-white group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-xl">
                    {step.step}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xl font-bold text-white tracking-tight">{step.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed max-w-[200px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
