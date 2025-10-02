"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { useRef } from "react";
import {
  ExternalLink,
  //  Github,
  Sparkles,
} from "lucide-react";
import { projects } from "@/lib/projects-data";
import { siteContent } from "@/lib/site-content";

export function ProjectsSection() {
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
    <section
      ref={containerRef}
      id="projetos"
      className="relative py-16 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/30 dark:via-orange-950/10 to-transparent" />
        <motion.div
          style={{ y }}
          className="absolute inset-0 grid-pattern dark:grid-pattern dark opacity-5"
        />
      </div>

      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-black/10 dark:border-white/10 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-black/70 dark:text-white/70">
              {siteContent.projects.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
            <span className="text-gradient dark:text-gradient">
              {siteContent.projects.title}
            </span>
          </h2>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-32 mb-20">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="w-full flex-1 relative group">
                  <div
                    className={`absolute -inset-4 bg-gradient-to-r ${project.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity`}
                  />
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div>
                    <span className="text-sm font-medium text-prmiary">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-space-grotesk font-bold mt-2">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-black/60 dark:text-white/80">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm rounded-full glass border border-black/10 dark:border-white/10 text-black/70 dark:text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-full hover:scale-105 transition-transform"
                      >
                        Ver Projeto
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {/* {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-black/20 dark:border-white/20 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Código
                      </a>
                    )} */}
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full p-6 rounded-2xl glass border border-black/10 dark:border-white/10 overflow-hidden hover:border-primary/20 transition-all">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                  />

                  <div className="relative z-10">
                    <span className="text-sm font-medium text-primary">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-space-grotesk font-semibold mt-2 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-black/60 dark:text-white/80 mb-4">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-black/70 dark:text-white/70 hover:text-primary transition-colors"
                        >
                          Ver projeto
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {/* {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-black/70 dark:text-white/70 hover:text-primary transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          GitHub
                        </a>
                      )} */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
