"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Transforme sua presença digital com{" "}
            <span className="text-[#F26522]">soluções inovadoras</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300 md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Desenvolvemos sites e softwares profissionais que impulsionam seu
            negócio. Tecnologia de ponta com resultados comprovados.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="https://wa.me/+5592992852143?text=Olá,%20gostaria%20saber%20sobre%20os%20serviços"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-lg bg-[#F26522] px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-[#F26522]/90"
            >
              Comece agora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#26272b]">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F26522] opacity-10 blur-[100px]" />
      </div>
    </section>
  );
}
