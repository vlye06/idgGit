import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Icon } from "./Icon";

export function Hero() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 4]);

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);
  const rotateX = useTransform(springY, [0, 1], [5, -5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={handleMouseMove}
      className="perspective-container relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden bg-forest-950"
    >
      <motion.div className="absolute inset-0 blueprint-grid" style={{ scale: bgScale, rotate: bgRotate }} />

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ rotateX, rotateY }}
      >
        <svg className="h-[140%] w-[140%] max-w-none text-green-500/[0.14]" viewBox="0 0 700 700" fill="none">
          <circle cx="350" cy="350" r="320" stroke="currentColor" strokeWidth="1.5" strokeDasharray="18 10" />
          <circle cx="350" cy="350" r="260" stroke="currentColor" strokeWidth="1.5" strokeDasharray="12 8" />
          <circle cx="350" cy="350" r="200" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="350" cy="350" r="140" stroke="currentColor" strokeWidth="1" />
        </svg>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-forest-950/50 to-forest-950" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-transparent to-transparent" />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <span className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-green-400">
          <span className="h-px w-8 bg-green-400" />
          {t.hero.eyebrow}
          <span className="h-px w-8 bg-green-400" />
        </span>

        <h1 className="max-w-4xl font-serif text-5xl leading-[1.05] text-paper-50 text-balance md:text-7xl">
          {t.hero.pre} <span className="text-green-400">{t.hero.highlight}</span> {t.hero.post}
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base font-light text-paper-200/90 md:text-lg">
          {t.hero.sub}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#services"
            className="rounded-full bg-green-500 px-7 py-3 text-xs uppercase tracking-[0.2em] text-forest-950 transition hover:bg-green-400"
          >
            {t.hero.btnPrimary}
          </a>
          <a
            href="#contact"
            className="rounded-full border border-paper-50/30 px-7 py-3 text-xs uppercase tracking-[0.2em] text-paper-50 transition hover:border-paper-50"
          >
            {t.hero.btnSecondary}
          </a>
        </div>

        <div className="mt-14 grid grid-cols-3 gap-8 border-t border-paper-50/15 pt-8">
          {t.hero.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-2xl text-green-400 md:text-3xl">{stat.value}</div>
              <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-paper-200/70 md:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-paper-50/70"
      >
        <Icon name="arrow-down" className="h-5 w-5 animate-scroll-hint" />
      </motion.div>
    </section>
  );
}
