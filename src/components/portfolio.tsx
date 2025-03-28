"use client";

import { motion } from "framer-motion";
import { portfolioProjects } from "@/lib/portfolio-data";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-16">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <motion.h2
              className="text-3xl font-bold sm:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Nossos Projetos
            </motion.h2>
            <motion.p
              className="mt-4 text-lg leading-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Conheça alguns dos trabalhos que desenvolvemos para nossos
              clientes
            </motion.p>
          </div>

          <motion.div
            className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {portfolioProjects.map((project) => (
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
                className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur transition-all hover:bg-white/10 hover:shadow-lg"
              >
                <div className="aspect-video relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity group-hover:opacity-100 z-10 flex items-center justify-center">
                    <ExternalLink className="h-8 w-8 text-white" />
                  </div>
                  <Image
                    src={project.image}
                    alt={`${project.name} thumbnail`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold group-hover:text-[#F26522] transition-colors">
                    {project.name}
                  </h3>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
