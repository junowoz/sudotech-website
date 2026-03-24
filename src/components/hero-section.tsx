"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { GridPattern } from "@/components/ui/grid-pattern";
import { siteContent } from "@/lib/site-content";

/** Add or remove words here — the morphing adapts automatically. */
const heroWords = ["software", "hardware", "design"];

export function HeroSection() {
  return (
    <section className="relative flex h-dvh items-center justify-center overflow-hidden">
      {/* Grid pattern background */}
      <GridPattern
        width={48}
        height={48}
        strokeDasharray="4 3"
        className={cn(
          "fill-black/[0.04] stroke-black/[0.18]",
          "dark:fill-white/10 dark:stroke-white/18",
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
        squares={[
          [4, 4],
          [8, 2],
          [5, 5],
          [12, 8],
          [15, 3],
          [10, 12],
          [3, 9],
          [14, 6],
        ]}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-8 px-6 text-center">
        {/* Title */}
        <h1 className="text-balance font-space-grotesk text-5xl font-bold leading-[0.95] text-black sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">
          {siteContent.hero.title.line1}
        </h1>

        {/* Gooey morphing words */}
        <GooeyText
          texts={heroWords}
          morphTime={1.5}
          cooldownTime={0.5}
          className="md:mt-4"
          textClassName="font-space-grotesk text-5xl font-bold text-primary sm:text-6xl md:text-7xl lg:text-8xl"
        />

        {/* Subtitle */}
        <p className="mt-8 max-w-md text-pretty text-base leading-relaxed text-black/50 dark:text-white/60 sm:text-lg">
          {siteContent.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            target="_blank"
            href="https://wa.me/+5592992852143"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {siteContent.hero.cta.primary}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <Link
            href="/#projetos"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/80 px-7 py-3.5 text-sm font-medium text-black transition-colors hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            {siteContent.hero.cta.secondary}
          </Link>
        </div>
      </div>
    </section>
  );
}
