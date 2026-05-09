"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const dotSpringConfig = { damping: 20, stiffness: 250, mass: 0.1 };
  const dotSpringX = useSpring(mouseX, dotSpringConfig);
  const dotSpringY = useSpring(mouseY, dotSpringConfig);

  useEffect(() => {
    // Check if it's a touch device or small screen to skip listeners
    const isMobile = window.matchMedia("(max-width: 1024px)").matches;
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a");
        
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="hidden lg:block pointer-events-none">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-violet-500/50 z-[9999]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(139, 92, 246, 0.1)" : "rgba(0, 0, 0, 0)",
          willChange: "transform",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-violet-500 rounded-full z-[10000]"
        style={{
          x: dotSpringX,
          y: dotSpringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
