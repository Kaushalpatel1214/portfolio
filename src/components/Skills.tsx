"use client";

import { motion } from "framer-motion";
import data from "@/data/portfolio.json";
import { fadeIn } from "@/lib/motion";

export default function Skills() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.skills.map((skillGroup, idx) => (
            <motion.div
              key={skillGroup.category}
              variants={fadeIn("up", "spring", idx * 0.2, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="glass p-10 rounded-3xl"
            >
              <h3 className="text-xl font-bold mb-8 text-gradient uppercase tracking-widest">{skillGroup.category}</h3>
              <div className="flex flex-col gap-4">
                {skillGroup.items.map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-muted-foreground">{skill}</span>
                    <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
