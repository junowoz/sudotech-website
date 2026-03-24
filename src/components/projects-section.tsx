"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { projects } from "@/lib/projects-data";
import { siteContent } from "@/lib/site-content";

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const inner = (
    <>
      <div className="relative aspect-16/10 overflow-hidden bg-black/5 dark:bg-white/5">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium uppercase tracking-widest text-black/40 dark:text-white/40">
          {project.category}
        </p>
        <h3 className="mt-2 font-space-grotesk text-lg font-semibold text-black dark:text-white">
          {project.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-black/50 dark:text-white/50">
          {project.description}
        </p>
        {project.link && (
          <span className="mt-auto inline-flex items-center gap-1 pt-3 text-sm font-medium text-primary">
            Visitar
            <ArrowUpRight
              className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        )}
      </div>
    </>
  );

  const cardClass =
    "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white dark:border-white/5 dark:bg-white/2";

  if (project.link) {
    return (
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClass}
      >
        {inner}
      </Link>
    );
  }

  return <div className={cardClass}>{inner}</div>;
}

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="projetos" className="relative pt-12 pb-24">
      {/* Glow */}
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,107,0,0.06) 0%, transparent 20%)",
        }}
      /> */}
      <div className="container mx-auto px-6">
        <div ref={ref} className="mx-auto mb-16 max-w-3xl text-center">
          {/* <p className="mb-4 text-sm font-medium uppercase tracking-widest text-black/50 dark:text-white/50">
            {siteContent.projects.badge}
          </p> */}
          <h2 className="text-balance font-space-grotesk text-4xl font-bold text-black dark:text-white md:text-6xl">
            {siteContent.projects.title}
          </h2>
        </div>

        {inView && (
          <AnimatedGroup
            preset="blur-slide"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatedGroup>
        )}
      </div>
    </section>
  );
}
