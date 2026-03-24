"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HeroAction = {
  label: string;
  href: string;
};

type HeroMetric = {
  value: string;
  label: string;
};

export interface ScrollMorphHeroItem {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
}

interface ScrollMorphHeroProps {
  badge: string;
  title: string;
  highlight: string;
  subtitle: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  metrics: HeroMetric[];
  items: ScrollMorphHeroItem[];
}

type CardTarget = {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  opacity: number;
};

const CARD_WIDTH = 112;
const CARD_HEIGHT = 152;

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(Math.max(value, min), max);

const lerp = (start: number, end: number, amount: number) =>
  start * (1 - amount) + end * amount;

const seededUnit = (seed: number) => {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
};

function calculateScatterTarget(
  index: number,
  total: number,
  width: number,
  height: number,
): CardTarget {
  const angle = (index / total) * Math.PI * 2;
  const radiusX = width * (0.18 + seededUnit(index + 1) * 0.18);
  const radiusY = height * (0.16 + seededUnit(index + 13) * 0.18);

  return {
    x: Math.cos(angle) * radiusX + (seededUnit(index + 17) - 0.5) * 70,
    y: Math.sin(angle * 1.4) * radiusY + (seededUnit(index + 23) - 0.5) * 50,
    rotation: (seededUnit(index + 31) - 0.5) * 26,
    scale: 0.78 + seededUnit(index + 37) * 0.15,
    opacity: 0.2 + seededUnit(index + 43) * 0.6,
  };
}

function calculateLineTarget(
  index: number,
  total: number,
  width: number,
): CardTarget {
  const spacing = Math.min(96, Math.max(66, width / (total + 1)));
  const x = (index - (total - 1) / 2) * spacing;

  return {
    x,
    y: 12,
    rotation: 0,
    scale: 0.95,
    opacity: 1,
  };
}

function calculateArcTarget(
  index: number,
  total: number,
  width: number,
  height: number,
  progress: number,
  parallaxX: number,
): CardTarget {
  const isMobile = width < 640;
  const spread = isMobile ? 118 : 136;
  const startAngle = -90 - spread / 2;
  const step = total > 1 ? spread / (total - 1) : 0;
  const sweep = step * Math.max(total - 4, 0) * progress;
  const angle = startAngle + index * step - sweep;
  const radius = Math.min(width * (isMobile ? 0.92 : 0.8), height * 1.08);
  const centerY = height * (isMobile ? 0.98 : 0.9);
  const radians = (angle * Math.PI) / 180;

  return {
    x: Math.cos(radians) * radius + parallaxX * 0.45,
    y: Math.sin(radians) * radius + centerY - height / 2,
    rotation: angle + 90,
    scale: isMobile ? 1.08 : 1.16,
    opacity: 1,
  };
}

function HeroCard({
  item,
  index,
  target,
}: {
  item: ScrollMorphHeroItem;
  index: number;
  target: CardTarget;
}) {
  return (
    <motion.div
      animate={{
        x: target.x,
        y: target.y,
        rotate: target.rotation,
        scale: target.scale,
        opacity: target.opacity,
      }}
      transition={{
        type: "spring",
        stiffness: 55,
        damping: 18,
        mass: 0.9,
      }}
      style={{
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
      }}
      className="absolute left-1/2 top-1/2 -ml-14 -mt-[76px] [perspective:1000px]"
    >
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{
          duration: 0.55,
          type: "spring",
          stiffness: 220,
          damping: 18,
        }}
        className="relative h-full w-full cursor-pointer [transform-style:preserve-3d]"
      >
        <div className="absolute inset-0 overflow-hidden rounded-[1.1rem] border border-white/10 bg-zinc-200 shadow-[0_30px_50px_-30px_rgba(0,0,0,0.7)] [backface-visibility:hidden]">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover"
            sizes="112px"
            priority={index < 4}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-white/75">
              {item.eyebrow}
            </p>
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end overflow-hidden rounded-[1.1rem] border border-white/10 bg-zinc-950 p-4 text-white shadow-[0_30px_50px_-30px_rgba(0,0,0,0.7)] [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-primary/80">
            {item.eyebrow}
          </p>
          <h3 className="mt-2 font-space-grotesk text-sm font-semibold leading-tight">
            {item.title}
          </h3>
          <p className="mt-2 text-[11px] leading-4 text-white/70">
            {item.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ScrollMorphHero({
  badge,
  title,
  highlight,
  subtitle,
  primaryAction,
  secondaryAction,
  metrics,
  items,
}: ScrollMorphHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.8,
  });

  const [progress, setProgress] = useState(0);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [parallaxX, setParallaxX] = useState(0);

  useMotionValueEvent(smoothProgress, "change", (value) => {
    setProgress(value);
  });

  useEffect(() => {
    if (!stageRef.current) {
      return;
    }

    const element = stageRef.current;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      setContainerSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const arcProgress = clamp((progress - 0.2) / 0.8);
  const contentShift = lerp(0, -38, clamp(progress / 0.9));
  const contentOpacity = lerp(1, 0.58, clamp(progress / 1));

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[185vh] overflow-hidden"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.2),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.16),transparent_26%),linear-gradient(180deg,rgba(255,247,237,0.95),rgba(255,255,255,1))] dark:bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.18),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.14),transparent_24%),linear-gradient(180deg,rgba(8,8,8,1),rgba(0,0,0,1))]" />
        <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:72px_72px] dark:[background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]" />

        <div className="container relative z-10 mx-auto grid h-full grid-cols-1 items-center gap-14 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-6">
          <motion.div
            style={{
              y: contentShift,
              opacity: contentOpacity,
            }}
            className="relative z-10 max-w-2xl pt-16 lg:pt-24"
          >
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/75 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-white/70">
              {badge}
            </div>

            <h1 className="mt-8 font-space-grotesk text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-black sm:text-6xl md:text-7xl lg:text-[5.9rem] dark:text-white">
              {title}{" "}
              <span className="text-gradient dark:text-gradient">
                {highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-black/60 dark:text-white/75 sm:text-lg">
              {subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={primaryAction.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
              >
                {primaryAction.label}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-7 py-4 text-sm font-medium text-black transition-colors hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
              >
                {secondaryAction.label}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[1.4rem] border border-black/10 bg-white/70 p-4 backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <div className="font-space-grotesk text-2xl font-semibold text-black dark:text-white">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.22em] text-black/48 dark:text-white/50">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div
            ref={stageRef}
            onMouseMove={(event) => {
              const rect = event.currentTarget.getBoundingClientRect();
              const nextX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
              setParallaxX(nextX * 34);
            }}
            onMouseLeave={() => setParallaxX(0)}
            className="relative h-[420px] sm:h-[520px] lg:h-[640px]"
          >
            <div className="absolute left-1/2 top-[44%] size-[280px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl sm:size-[360px]" />
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                progress > 0.16 ? "opacity-100" : "opacity-0",
              )}
            >
              <div className="absolute inset-x-6 bottom-4 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent dark:via-white/10" />
            </div>

            {items.map((item, index) => {
              const total = items.length;
              const scatter = calculateScatterTarget(
                index,
                total,
                containerSize.width || 420,
                containerSize.height || 520,
              );
              const line = calculateLineTarget(
                index,
                total,
                containerSize.width || 420,
              );
              const arc = calculateArcTarget(
                index,
                total,
                containerSize.width || 420,
                containerSize.height || 520,
                arcProgress,
                parallaxX,
              );

              const lineMix = clamp(progress / 0.22);
              const arcMix = clamp((progress - 0.18) / 0.34);

              const toLine = {
                x: lerp(scatter.x, line.x, lineMix),
                y: lerp(scatter.y, line.y, lineMix),
                rotation: lerp(scatter.rotation, line.rotation, lineMix),
                scale: lerp(scatter.scale, line.scale, lineMix),
                opacity: lerp(scatter.opacity, line.opacity, lineMix),
              };

              const target = {
                x: lerp(toLine.x, arc.x, arcMix),
                y: lerp(toLine.y, arc.y, arcMix),
                rotation: lerp(toLine.rotation, arc.rotation, arcMix),
                scale: lerp(toLine.scale, arc.scale, arcMix),
                opacity: lerp(toLine.opacity, arc.opacity, arcMix),
              };

              return (
                <HeroCard
                  key={`${item.src}-${index}`}
                  item={item}
                  index={index}
                  target={target}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollMorphHero;
