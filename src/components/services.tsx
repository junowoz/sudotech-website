"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Smartphone, Sparkles } from "lucide-react";

const services = [
  {
    title: "Desenvolvimento Web",
    description:
      "Sites modernos e responsivos que se adaptam a qualquer dispositivo, com foco em performance e experiência do usuário.",
    icon: Globe,
  },
  {
    title: "Aplicações Web",
    description:
      "Sistemas web complexos e escaláveis para automatizar e otimizar processos do seu negócio.",
    icon: Code2,
  },
  {
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e multiplataforma que proporcionam a melhor experiência para seus usuários.",
    icon: Smartphone,
  },
  {
    title: "Soluções Personalizadas",
    description:
      "Desenvolvimento de software sob medida para atender às necessidades específicas do seu negócio.",
    icon: Sparkles,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            className="text-3xl font-bold sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Nossos Serviços
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Oferecemos soluções completas em desenvolvimento de software
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {services.map((service) => (
            <div
              key={service.title}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur transition-colors hover:bg-white/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F26522]/10">
                <service.icon className="h-5 w-5 text-[#F26522]" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
