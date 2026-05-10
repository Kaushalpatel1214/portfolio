"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Quote } from "lucide-react";
import data from "@/data/portfolio.json";

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <Quote size={40} className="text-primary opacity-50" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {data.testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", "spring", 0.1 * i, 0.8)}
                className="p-10 rounded-[40px] border border-white/5 bg-white/[0.02] flex flex-col items-center text-center gap-6"
              >
                <p className="text-lg md:text-xl font-medium text-white/70 italic leading-relaxed">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="space-y-1">
                  <h4 className="text-white font-bold text-sm tracking-tight">{t.name}</h4>
                  <p className="text-primary text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
