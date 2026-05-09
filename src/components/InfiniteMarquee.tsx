"use client";

import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiTailwindcss, SiFramer, SiGraphql, SiPostgresql,
  SiFigma, SiThreedotjs,
} from "react-icons/si";

const ROW1 = [
  { label: "React",      Icon: SiReact,       color: "#61DAFB" },
  { label: "Next.js",    Icon: SiNextdotjs,   color: "#ffffff" },
  { label: "TypeScript", Icon: SiTypescript,  color: "#3178C6" },
  { label: "Tailwind",   Icon: SiTailwindcss, color: "#38BDF8" },
  { label: "Framer",     Icon: SiFramer,      color: "#0055FF" },
  { label: "Three.js",   Icon: SiThreedotjs,   color: "#ffffff" },
  { label: "Node.js",    Icon: SiNodedotjs,   color: "#8CC84B" },
  { label: "GraphQL",    Icon: SiGraphql,     color: "#E535AB" },
];

const ROW2 = [
  { label: "PostgreSQL", Icon: SiPostgresql,  color: "#336791" },
  { label: "Figma",      Icon: SiFigma,       color: "#F24E1E" },
  { label: "UI Architecture", Icon: SiFramer, color: "#a78bfa" },
  { label: "Interactive UX",  Icon: SiReact,  color: "#61DAFB" },
  { label: "Performance",     Icon: SiNextdotjs, color: "#ffffff" },
  { label: "Web3",            Icon: SiNodedotjs, color: "#8CC84B" },
  { label: "Creative Code",   Icon: SiTypescript, color: "#3178C6" },
  { label: "Branding",        Icon: SiFigma,  color: "#F24E1E" },
];

function Row({
  items,
  direction = "left",
  speed = 22,
}: {
  items: typeof ROW1;
  direction?: "left" | "right";
  speed?: number;
}) {
  const repeated = [...items, ...items, ...items];
  const distance = -1 * (items.length * 220); // approximate px per item

  return (
    <div className="relative flex overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap gap-8 shrink-0"
        animate={{ x: direction === "left" ? [0, distance] : [distance, 0] }}
        transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
      >
        {repeated.map(({ label, Icon, color }, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 group cursor-default"
          >
            {/* icon badge */}
            <span
              className="w-9 h-9 rounded-xl border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0 group-hover:border-white/25 group-hover:bg-white/[0.09] transition-all duration-400"
            >
              <Icon size={16} style={{ color }} />
            </span>
            {/* label */}
            <span
              className="text-2xl md:text-3xl font-black tracking-tight text-white/25 group-hover:text-white/70 transition-colors duration-400"
            >
              {label}
            </span>
            {/* separator dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover:bg-white/30 ml-2 transition-colors duration-400" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function InfiniteMarquee() {
  return (
    <div className="relative py-14 overflow-hidden bg-[#050505] border-y border-white/[0.05]">
      {/* gradient masks */}
      <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #050505, transparent)" }} />
      <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #050505, transparent)" }} />

      <div className="flex flex-col gap-6 -rotate-1 scale-[1.04]">
        <Row items={ROW1} direction="left" speed={25} />
        <Row items={ROW2} direction="right" speed={30} />
      </div>
    </div>
  );
}
