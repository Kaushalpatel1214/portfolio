"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/motion";
import { Code2, Palette, Zap, Globe, Award, ArrowUpRight } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiTailwindcss, SiFramer, SiGraphql, SiPostgresql,
  SiFigma, SiThreedotjs, SiPrisma,
} from "react-icons/si";

const PILLARS = [
  {
    Icon: Code2,
    color: "#a78bfa",
    bg: "rgba(139,92,246,0.12)",
    title: "Clean Architecture",
    desc: "High-End React & Next.js systems — beautiful internals, zero compromises.",
  },
  {
    Icon: Palette,
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.10)",
    title: "Pixel-Perfect Design",
    desc: "Every spacing, typographic ratio, and color token is intentional.",
  },
  {
    Icon: Zap,
    color: "#fb7185",
    bg: "rgba(251,113,133,0.10)",
    title: "Blazing Performance",
    desc: "Core Web Vitals optimized, lazy-loaded, edge-cached — fast by default.",
  },
  {
    Icon: Globe,
    color: "#34d399",
    bg: "rgba(52,211,153,0.10)",
    title: "Global Delivery",
    desc: "Shipped products for 45+ clients across 20+ countries worldwide.",
  },
];

/* ── Tech rows ────────────────────────────────────── */
const TECH = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
  { Icon: SiFramer, label: "Framer", color: "#0055FF" },
  { Icon: SiThreedotjs, label: "Three.js", color: "#ffffff" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#8CC84B" },
  { Icon: SiGraphql, label: "GraphQL", color: "#E535AB" },
  { Icon: SiPostgresql, label: "PostgreSQL", color: "#336791" },
  { Icon: SiPrisma, label: "Prisma", color: "#5A67D8" },
  { Icon: SiFigma, label: "Figma", color: "#F24E1E" },
];

/* ── Pillar Card ─────────────────────────────────── */
const PillarCard = memo(function PillarCard({
  Icon, color, bg, title, desc, delay,
}: {
  Icon: React.ElementType;
  color: string;
  bg: string;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay, ease: [0.19, 1, 0.22, 1] }}
      className="group p-5 rounded-2xl border border-white/[0.07] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-500 cursor-default relative overflow-hidden"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 30%, ${bg.replace("0.", "0.4")}, transparent 70%)` }}
      />
      <div className="relative z-10 flex flex-col gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{ background: bg, border: `1px solid ${color}25` }}
        >
          <Icon size={18} style={{ color }} />
        </div>
        <h4 className="text-white font-bold text-sm">{title}</h4>
        <p className="text-white/45 text-xs leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
});

/* ── Main ─────────────────────────────────────────── */
export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 md:py-36 overflow-hidden bg-[#050505]"
    >
      {/* Seamless gradient bridge from hero */}
      <div
        className="absolute top-0 left-0 w-full h-40 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(139,92,246,0.06), transparent)" }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      {/* Rotating ring decoration */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-28 -right-28 w-[500px] h-[500px] border border-white/[0.04] rounded-full pointer-events-none"
      >
        <div className="absolute inset-8 border border-white/[0.06] rounded-full" />
        <div className="absolute inset-16 border border-white/[0.09] rounded-full" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="w-10 h-px" style={{ background: "rgba(139,92,246,0.7)" }} />
          <span className="text-xs font-black uppercase tracking-[0.45em] text-violet-400">The Narrative</span>
        </motion.div>

        {/* ── Main grid ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT: Headline + bio + experience */}
          <motion.div
            variants={staggerContainer(0.1, 0)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-8"
          >
            <motion.h2
              variants={fadeIn("right", "tween", 0, 0.9)}
              className="text-5xl md:text-6xl font-black leading-[0.88] tracking-tighter text-white"
            >
              Fusing{" "}
              <span
                style={{
                  backgroundImage: "linear-gradient(135deg,#a78bfa 0%,#38bdf8 55%,#fb7185 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Code
              </span>
              <br />
              with
              <br />
              Aesthetics
            </motion.h2>

            <motion.p
              variants={fadeIn("right", "tween", 0.1, 0.9)}
              className="text-white/50 text-base md:text-lg leading-relaxed max-w-[480px]"
            >
              &ldquo;I don&rsquo;t just build websites — I construct digital universes where every
              animation and every pixel serves a purpose. My approach merges the precision of
              engineering with the soul of creative design.&rdquo;
            </motion.p>

            {/* Experience timeline */}
            <motion.div variants={fadeIn("right", "tween", 0.2, 0.9)} className="flex flex-col gap-4">
              {[
                {
                  period: "2023 — Present",
                  role: "Frontend Developer",
                  company: "Freelancing",
                  color: "#a78bfa",
                },
              ].map((exp, i) => (
                <div
                  key={i}
                  className="group flex gap-4 p-4 rounded-2xl border border-white/[0.06] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.05] transition-all duration-500 cursor-default"
                >
                  <div className="w-1 rounded-full shrink-0" style={{ background: exp.color }} />
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: exp.color }}>{exp.period}</p>
                    <p className="text-white font-bold text-sm">{exp.role}</p>
                    <p className="text-white/40 text-xs mt-0.5">{exp.company}</p>
                  </div>
                  <ArrowUpRight size={14} className="text-white/20 group-hover:text-white/50 shrink-0 mt-1 transition-colors" />
                </div>
              ))}
            </motion.div>

            {/* Award badge */}
            <motion.div variants={fadeIn("right", "tween", 0.3, 0.9)}>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-amber-500/25 bg-amber-500/8 backdrop-blur-sm">
                <div className="w-9 h-9 rounded-xl border border-amber-500/30 bg-amber-500/15 flex items-center justify-center">
                  <Award size={18} className="text-amber-400" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">5 Project Recognitions</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest">React · Next.js · UI Engineering</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Pillars + tech stack */}
          <div className="flex flex-col gap-8">

            {/* Pillar cards 2×2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PILLARS.map((p, i) => (
                <PillarCard key={p.title} {...p} delay={0.1 + i * 0.08} />
              ))}
            </div>

            {/* Tech stack block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.19, 1, 0.22, 1] }}
              className="p-5 rounded-2xl border border-white/[0.07] bg-white/[0.025]"
            >
              <p className="text-[10px] font-black uppercase tracking-[0.45em] text-white/30 mb-4">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {TECH.map(({ Icon, label, color }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-[11px] font-bold text-white/50 hover:border-white/20 hover:text-white/80 hover:bg-white/[0.07] transition-all duration-300 cursor-default"
                  >
                    <Icon size={12} style={{ color }} className="shrink-0" />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
