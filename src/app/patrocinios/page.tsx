"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
// import Link from "next/link";
import { useRef } from "react";
import {
  // ArrowLeft,
  Award,
  Trophy,
  // Calendar
} from "lucide-react";
import { Navigation } from "@/components/navigation";
import { FooterSection } from "@/components/footer-section";

export default function PatrociniosPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <>
      <Navigation />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative min-h-[25vh] flex items-center justify-center overflow-hidden pt-32 pb-6">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 grid-pattern dark:grid-pattern dark opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 dark:via-orange-950/10 to-transparent" />
          </div>

          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-5xl lg:text-5xl font-space-grotesk font-bold mb-6">
                <span className="text-gradient dark:text-gradient">
                  Patrocínios
                </span>
              </h1>

              <p className="text-lg md:text-xl text-black/60 dark:text-white/80 max-w-2xl mx-auto">
                A Sudo Tech acredita no poder do esporte amazonense. Apoiamos
                atletas e academias que representam nossa região com excelência.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nakay Fight Academy Section */}
        <section
          ref={containerRef}
          className="relative pb-16 pt-4 overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <motion.div
              style={{ y }}
              className="absolute inset-0 grid-pattern dark:grid-pattern dark opacity-5"
            />
          </div>

          <div className="container mx-auto px-6">
            {/* Academy Introduction */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <div className="flex flex-col items-center text-center gap-8">
                <h2 className="text-3xl md:text-3xl font-space-grotesk font-bold mb-2">
                  Nakay Fight Academy
                </h2>
                <div className="relative w-48 h-48">
                  <div className="absolute -inset-4 gradient-primary rounded-full blur-xl opacity-20" />
                  <Image
                    src="/patrocinios/nakay.jpg"
                    alt="Nakay Fight Academy"
                    width={256}
                    height={256}
                    className="relative rounded-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-base text-black/60 dark:text-white/70 max-w-2xl mx-auto">
                    Apoiamos a Nakay Fight Academy, uma das principais academias
                    de Brazilian Jiu-Jitsu do Amazonas, formando campeões e
                    promovendo os valores de disciplina, respeito e superação.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Achievement Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Achievement Details */}
                <div className="flex flex-col justify-center items-center md:items-start space-y-2 order-1 md:order-1">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/10 dark:border-white/10 w-fit">
                    <Trophy className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-black/70 dark:text-white/70">
                      Conquistas
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-3xl font-space-grotesk font-bold">
                    Ouro na Taça Amazonas{" "}
                    <span className="text-gradient dark:text-gradient">
                      2026
                    </span>
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-black/70 dark:text-white/70">
                      <Award className="w-5 h-5 text-primary" />
                      <span className="font-medium">
                        Faixa Roxa - Categoria Master
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievement Image */}
                <div className="relative group w-64 h-64 mx-auto order-2 md:order-2">
                  <div className="absolute -inset-4 gradient-primary rounded-full blur-xl opacity-20 group-hover:opacity-20 transition-opacity" />
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/patrocinios/ouro-roxo-2026-taca-am.jpg"
                      alt="Campeão - Ouro Taça Amazonas 2026"
                      sizes="256px"
                      className="object-cover object-[center_60%] transition-transform duration-700 group-hover:scale-105 brightness-200"
                      fill
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
