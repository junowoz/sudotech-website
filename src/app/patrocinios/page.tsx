"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Award, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Navigation } from "@/components/navigation";
import { FooterSection } from "@/components/footer-section";

export default function PatrociniosPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <Navigation />
      <main className="relative">
        {/* Hero Section */}
        <section className="relative flex min-h-[25vh] items-center justify-center overflow-hidden pb-6 pt-32">
          <GridPattern
            width={48}
            height={48}
            className={cn(
              "fill-black/[0.03] stroke-black/[0.06]",
              "dark:fill-white/[0.02] dark:stroke-white/[0.05]",
              "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
            )}
            squares={[
              [4, 4],
              [8, 2],
              [5, 5],
              [12, 8],
              [15, 3],
              [10, 12],
            ]}
          />

          <div className="container relative z-10 mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-balance font-space-grotesk text-5xl font-bold">
                <span className="text-primary">Patrocínios</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-black/60 dark:text-white/70">
                A Sudo Tech acredita no poder do esporte amazonense. Apoiamos
                atletas e academias que representam nossa região com excelência.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Nakay Fight Academy Section */}
        <section className="relative overflow-hidden pb-16 pt-4">
          <GridPattern
            width={48}
            height={48}
            className={cn(
              "fill-black/[0.02] stroke-black/[0.04]",
              "dark:fill-white/[0.01] dark:stroke-white/[0.03]",
              "[mask-image:linear-gradient(to_bottom,transparent,white_30%,white_70%,transparent)]"
            )}
          />

          <div className="container relative z-10 mx-auto px-6">
            {/* Academy Introduction */}
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-16 max-w-4xl"
            >
              <div className="flex flex-col items-center gap-8 text-center">
                <h2 className="text-balance font-space-grotesk text-3xl font-bold">
                  Nakay Fight Academy
                </h2>
                <div className="relative size-48">
                  <Image
                    src="/patrocinios/nakay.jpg"
                    alt="Nakay Fight Academy"
                    width={256}
                    height={256}
                    className="relative size-full rounded-full object-cover"
                  />
                </div>

                <p className="mx-auto max-w-2xl text-pretty text-base text-black/60 dark:text-white/70">
                  Apoiamos a Nakay Fight Academy, uma das principais academias
                  de Brazilian Jiu-Jitsu do Amazonas, formando campeões e
                  promovendo os valores de disciplina, respeito e superação.
                </p>
              </div>
            </motion.div>

            {/* Achievement Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mx-auto max-w-5xl"
            >
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col items-center justify-center gap-2 md:items-start">
                  <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/75 px-4 py-2 backdrop-blur dark:border-white/10 dark:bg-white/5">
                    <Trophy className="size-4 text-primary" aria-hidden="true" />
                    <span className="text-sm font-medium text-black/70 dark:text-white/70">
                      Conquistas
                    </span>
                  </div>

                  <h3 className="text-balance font-space-grotesk text-3xl font-bold">
                    Ouro na Taça Amazonas{" "}
                    <span className="text-primary">2026</span>
                  </h3>

                  <div className="flex items-center gap-3 text-black/70 dark:text-white/70">
                    <Award className="size-5 text-primary" aria-hidden="true" />
                    <span className="font-medium">
                      Faixa Roxa — Categoria Master
                    </span>
                  </div>
                </div>

                <div className="relative mx-auto size-64">
                  <div className="relative size-full overflow-hidden rounded-full">
                    <Image
                      src="/patrocinios/ouro-roxo-2026-taca-am.jpg"
                      alt="Campeão — Ouro Taça Amazonas 2026"
                      sizes="256px"
                      className="object-cover object-[center_60%] brightness-200"
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
