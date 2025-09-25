"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { siteContent } from "@/lib/site-content";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern dark:grid-pattern dark opacity-30" />

        {/* Gradient Orb with Orange Glow */}
        {/* <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-amber-500/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute inset-8 bg-gradient-to-tr from-amber-500/20 via-orange-600/10 to-transparent rounded-full blur-2xl" />
            <div className="absolute inset-16 glass rounded-full" />
          </div>
        </motion.div> */}
      </div>

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-6 text-center relative z-10"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/10 dark:border-white/10 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-black/70 dark:text-white/70">
            {siteContent.hero.badge}
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-space-grotesk font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <span className="block">{siteContent.hero.title.line1}</span>
          <span className="block mt-2">
            {siteContent.hero.title.line2}{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-gradient dark:text-gradient">
                {siteContent.hero.title.highlight}
              </span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 blur-2xl opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </span>
          </span>
          {/* <span className="block text-black/80 dark:text-white/80 mt-2">
            {siteContent.hero.title.line3}
          </span> */}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-lg md:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {siteContent.hero.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Link
            href="#contato"
            className="group relative px-8 py-4 bg-primary text-white dark:text-black font-medium rounded-full overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              {siteContent.hero.cta.primary}
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="#projetos"
            className="px-8 py-4 border border-black/20 dark:border-white/20 text-black dark:text-white font-medium rounded-full glass hover:bg-black/5 dark:hover:bg-white/5 transition-all"
          >
            {siteContent.hero.cta.secondary}
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-black/20 dark:border-white/20 rounded-full p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-black/50 dark:bg-white/50 rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div> */}
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-500/30 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </section>
  );
}
