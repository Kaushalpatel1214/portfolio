"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Code2, Palette, Rocket, Workflow } from "lucide-react";

const services = [
  {
    icon: <Palette size={32} />,
    title: "UI/UX Design",
    description: "Creating intuitive and visually stunning interfaces that provide exceptional user experiences.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Code2 size={32} />,
    title: "Web Development",
    description: "Building high-performance, responsive websites using the latest modern frameworks.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Rocket size={32} />,
    title: "Brand Identity",
    description: "Developing unique brand systems that help businesses stand out in a crowded market.",
    color: "from-orange-500 to-amber-400"
  },
  {
    icon: <Workflow size={32} />,
    title: "Software Architecture",
    description: "Designing scalable and maintainable systems for complex enterprise applications.",
    color: "from-green-500 to-emerald-400"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-black/40">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer(0.2, 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="text-center mb-20">
            <motion.h2 
              variants={fadeIn("down", "tween", 0.1, 0.8)}
              className="text-sm font-bold text-primary uppercase tracking-[0.3em] mb-4"
            >
              Expertise
            </motion.h2>
            <motion.h3 
              variants={fadeIn("up", "tween", 0.2, 0.8)}
              className="text-4xl md:text-5xl font-black text-white"
            >
              My Specialized <span className="text-gradient">Services</span>
            </motion.h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", 0.1 * index, 0.8)}
                whileHover={{ y: -10 }}
                className="group relative h-full"
              >
                <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl -z-10 blur-xl`} />
                
                <div className="h-full glass p-8 rounded-3xl border border-white/5 group-hover:border-white/20 transition-all flex flex-col items-start gap-6">
                  <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${service.color} p-4 text-white shadow-lg`}>
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="mt-auto w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className={`h-full bg-linear-to-r ${service.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
