"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Code2, Figma, Globe, Zap, Layout, ArrowRight } from "lucide-react";
import data from "@/data/portfolio.json";

const ICON_MAP = {
  "Next.js Development": Globe,
  "Figma to React": Figma,
  "Website Optimization": Zap,
  "WordPress to Next.js": Code2,
  "Landing Page Development": Layout,
};

export default function Services() {
  return (
    <section id="services" className="py-32 relative overflow-hidden bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
            <div className="space-y-4">
              <motion.h2 
                variants={fadeIn("right", "tween", 0.1, 0.8)}
                className="text-xs font-bold text-primary uppercase tracking-[0.6em]"
              >
                Services
              </motion.h2>
              <motion.h3 
                variants={fadeIn("right", "tween", 0.2, 0.8)}
                className="text-4xl md:text-6xl font-black text-white tracking-tighter"
              >
                SOLVING BUSINESS <br /> PROBLEMS WITH CODE.
              </motion.h3>
            </div>
            <motion.p 
              variants={fadeIn("left", "tween", 0.3, 0.8)}
              className="text-white/40 text-sm max-w-[300px] mb-2 font-medium uppercase tracking-widest leading-relaxed"
            >
              Tailored solutions for startups and businesses looking to scale their digital presence.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.services.map((service, index) => {
              const Icon = ICON_MAP[service.title as keyof typeof ICON_MAP] || Code2;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", 0.1 * index, 0.8)}
                  className="group p-8 rounded-[32px] border border-white/[0.06] bg-white/[0.02] hover:border-primary/40 hover:bg-white/[0.04] transition-all duration-500 flex flex-col items-start gap-8"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                    <Icon size={28} />
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-2xl font-bold text-white tracking-tight">{service.title}</h4>
                    <p className="text-white/40 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="w-full space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20">Key Benefits</p>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit) => (
                        <span key={benefit} className="px-3 py-1 rounded-full border border-white/5 bg-white/[0.03] text-[10px] font-bold text-white/50">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-6 border-t border-white/5 w-full">
                    <a href="#contact" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
                      Discuss Project <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
