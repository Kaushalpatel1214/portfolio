"use client";

import { useEffect, useRef, useState, memo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiTailwindcss, SiFramer, SiGraphql, SiPostgresql,
  SiFigma, SiThreedotjs,
} from "react-icons/si";
import data from "@/data/portfolio.json";

/* ── Typewriter ───────────────────────────────────── */
const WORDS = ["Experiences", "Interfaces", "Products", "Systems"];

const Typewriter = memo(function Typewriter() {
  const [display, setDisplay] = useState(WORDS[0]);
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(WORDS[0].length);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = WORDS[wordIdx];
    const speed = 90;
    const pause = 2200;
    const delay = deleting ? speed / 2 : charIdx === current.length ? pause : speed;
    
    const t = setTimeout(() => {
      if (!deleting && charIdx === current.length) {
        setDeleting(true);
      } else if (deleting && charIdx === 0) {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % WORDS.length);
      } else {
        const next = charIdx + (deleting ? -1 : 1);
        setCharIdx(next);
        setDisplay(current.slice(0, next));
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx]);

  return (
    <span className="inline-block min-h-[1.1em]">
      {display}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block ml-1 w-[3px] h-[0.85em] bg-violet-400 align-middle rounded-sm"
      />
    </span>
  );
});

/* ── Tech Stack Pills ─────────────────────────────── */
const STACK = [
  { Icon: SiReact, label: "React", color: "#61DAFB" },
  { Icon: SiNextdotjs, label: "Next.js", color: "#ffffff" },
  { Icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  { Icon: SiTailwindcss, label: "Tailwind", color: "#38BDF8" },
  { Icon: SiFramer, label: "Framer", color: "#0055FF" },
  { Icon: SiNodedotjs, label: "Node.js", color: "#8CC84B" },
  { Icon: SiGraphql, label: "GraphQL", color: "#E535AB" },
  { Icon: SiPostgresql, label: "Postgres", color: "#336791" },
  { Icon: SiThreedotjs, label: "Three.js", color: "#ffffff" },
  { Icon: SiFigma, label: "Figma", color: "#F24E1E" },
];

/* ── Floating Orb ─────────────────────────────────── */
const Orb = memo(function Orb({ cls, delay = 0 }: { cls: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-[80px] md:blur-[140px] pointer-events-none ${cls}`}
      animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
});

/* ── Stat Card ────────────────────────────────────── */
const Stat = memo(function Stat({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.19, 1, 0.22, 1] }}
      className="group flex flex-col gap-0.5 p-4 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-violet-500/40 hover:bg-white/[0.06] transition-all duration-500 cursor-default relative overflow-hidden"
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: "radial-gradient(circle at center, rgba(139,92,246,0.12) 0%, transparent 70%)" }} />
      <span className="text-2xl md:text-3xl font-black text-white tracking-tight">{value}</span>
      <span className="text-[10px] font-bold text-white/35 uppercase tracking-widest">{label}</span>
    </motion.div>
  );
});

/* ── Main ─────────────────────────────────────────── */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const sx = useSpring(mouseX, { stiffness: 40, damping: 18 });
  const sy = useSpring(mouseY, { stiffness: 40, damping: 18 });
  const rotateX = useTransform(sy, [-300, 300], [6, -6]);
  const rotateY = useTransform(sx, [-300, 300], [-6, 6]);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (isMobile) return;

    const el = sectionRef.current;
    if (!el) return;
    const fn = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      mouseX.set(e.clientX - r.left - r.width / 2);
      mouseY.set(e.clientY - r.top - r.height / 2);
    };
    el.addEventListener("mousemove", fn, { passive: true });
    return () => el.removeEventListener("mousemove", fn);
  }, [mouseX, mouseY]);

  const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
  const item = { hidden: { y: 50, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.85, ease: [0.19, 1, 0.22, 1] as const } } };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center bg-[#050505] overflow-hidden"
    >
      {/* Ambient orbs */}
      <Orb cls="w-[700px] h-[700px] bg-violet-700/25 -top-40 -left-40" delay={0} />
      <Orb cls="w-[500px] h-[500px] bg-cyan-500/15 -bottom-20 right-0" delay={3.5} />
      <Orb cls="w-[350px] h-[350px] bg-rose-500/12 top-1/3 left-1/2" delay={7} />

      {/* Grid */}
      <div className="absolute inset-0 bg-grid opacity-[0.025] pointer-events-none" />

      {/* Year watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.035 }}
        transition={{ delay: 1.8 }}
        className="absolute top-8 right-10 text-[18vw] font-black select-none pointer-events-none leading-none"
        style={{ WebkitTextStroke: "1px rgba(255,255,255,0.25)", color: "transparent" }}
      >
        {new Date().getFullYear()}
      </motion.div>

      {/* Left vertical accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
        className="absolute left-5 md:left-10 top-[12%] bottom-[12%] w-px origin-top pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.6), transparent)" }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ── LEFT: Text ── */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-7">

            {/* Badge */}
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for Work · {data.personalInfo.location}
              </span>
            </motion.div>

            {/* Name */}
            <motion.p variants={item} className="text-white/30 text-xs font-black uppercase tracking-[0.5em]">
              {data.personalInfo.name}
            </motion.p>

            {/* Headline */}
            <motion.h1 variants={item} className="text-5xl md:text-6xl xl:text-[4.5rem] font-black leading-[0.88] tracking-tighter text-white">
              Crafting
              <br />
              <span style={{ backgroundImage: "linear-gradient(135deg,#a78bfa 0%,#38bdf8 55%,#fb7185 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Digital
              </span>
              <br />
              <Typewriter />
            </motion.h1>

            {/* Bio */}
            <motion.p variants={item} className="text-white/45 text-base md:text-[1.05rem] leading-relaxed max-w-[460px]">
              {data.personalInfo.bio}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-black uppercase tracking-wider overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.55)]"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg,#a78bfa,#38bdf8,#fb7185)" }} />
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Work</span>
                <ArrowUpRight size={15} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white transition-all duration-300" />
              </a>

              <a
                href={data.personalInfo.resume}
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-white text-sm font-black uppercase tracking-wider hover:border-violet-500/40 hover:bg-white/10 transition-all duration-300"
              >
                <Download size={14} className="group-hover:-translate-y-0.5 transition-transform duration-300" />
                Resume
              </a>
            </motion.div>

            {/* Divider */}
            <motion.div variants={item} className="h-px" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.08), rgba(139,92,246,0.35), transparent)" }} />

            {/* Tech icon pills */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              {STACK.map(({ Icon, label, color }) => (
                <span
                  key={label}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/8 bg-white/[0.03] text-[11px] font-bold text-white/50 hover:border-white/20 hover:text-white/80 hover:bg-white/[0.07] transition-all duration-300 cursor-default group"
                >
                  <Icon size={12} style={{ color }} className="shrink-0" />
                  {label}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Profile Card ── */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative hidden lg:flex flex-col gap-4"
          >
            {/* Profile visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.19, 1, 0.22, 1] }}
              className="relative rounded-3xl overflow-hidden border border-white/10"
              style={{ transform: "translateZ(30px)" }}
            >
              {/* Gradient bg */}
              <div className="aspect-[4/3] relative"
                style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.28) 0%,rgba(6,182,212,0.18) 50%,rgba(244,63,94,0.12) 100%)" }}>
                <div className="absolute inset-0 bg-grid opacity-[0.06]" />

                {/* Inner glow ring */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute w-56 h-56 rounded-full border border-violet-500/20 animate-spin" style={{ animationDuration: "20s" }} />
                  <div className="absolute w-40 h-40 rounded-full border border-cyan-500/15 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
                </div>

                {/* Avatar + info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white"
                    style={{
                      background: "linear-gradient(135deg,#a78bfa,#38bdf8,#fb7185)",
                      boxShadow: "0 0 60px rgba(139,92,246,0.5), 0 0 120px rgba(139,92,246,0.2)",
                    }}
                  >
                    {data.personalInfo.name.charAt(0)}
                  </div>
                  <div className="text-center">
                    <p className="text-white font-bold text-lg">{data.personalInfo.name}</p>
                    <p className="text-white/45 text-xs mt-0.5 max-w-[220px] text-center">{data.personalInfo.role}</p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">Open to Opportunities</span>
                  </div>

                  {/* Mini tech icons row */}
                  <div className="flex gap-2 mt-1">
                    {STACK.slice(0, 5).map(({ Icon, label, color }) => (
                      <div key={label} title={label}
                        className="w-8 h-8 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center hover:border-white/25 hover:bg-white/10 transition-all duration-300">
                        <Icon size={15} style={{ color }} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-3" style={{ transform: "translateZ(20px)" }}>
              {data.stats.map((s, i) => (
                <Stat key={s.label} value={s.value} label={s.label} delay={0.85 + i * 0.1} />
              ))}
            </div>

          </motion.div>
        </div>

        {/* ── Mobile stat row ── */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-4 gap-3 mt-12">
          {data.stats.map((s, i) => (
            <Stat key={s.label} value={s.value} label={s.label} delay={1.4 + i * 0.1} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2.5 bg-white/40 rounded-full" />
        </motion.div>
        <span className="text-[9px] font-bold uppercase tracking-[0.45em] text-white/20">Scroll</span>
      </motion.div>
    </section>
  );
}
