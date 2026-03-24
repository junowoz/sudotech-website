"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FeatureCarouselItem {
  id: string;
  label: string;
  category: string;
  description: string;
  image: string;
  href?: string | null;
  icon: LucideIcon;
}

interface FeatureCarouselProps {
  items: FeatureCarouselItem[];
  intervalMs?: number;
  className?: string;
}

const ITEM_HEIGHT = 76;

const wrap = (min: number, max: number, value: number) => {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
};

export function FeatureCarousel({
  items,
  intervalMs = 3400,
  className,
}: FeatureCarouselProps) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalItems = items.length;
  const currentIndex =
    totalItems === 0 ? 0 : ((step % totalItems) + totalItems) % totalItems;

  useEffect(() => {
    if (isPaused || totalItems < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setStep((previous) => previous + 1);
    }, intervalMs);

    return () => window.clearInterval(interval);
  }, [intervalMs, isPaused, totalItems]);

  if (totalItems === 0) {
    return null;
  }

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const midpoint = totalItems / 2;

    let normalizedDiff = diff;
    if (diff > midpoint) normalizedDiff -= totalItems;
    if (diff < -midpoint) normalizedDiff += totalItems;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + totalItems) % totalItems;
    if (diff > 0) {
      setStep((previous) => previous + diff);
    }
  };

  return (
    <div className={cn("mx-auto w-full max-w-7xl", className)}>
      <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_35px_120px_-60px_rgba(0,0,0,0.45)] dark:border-white/10 dark:bg-black lg:rounded-[3rem]">
        <div className="grid min-h-[740px] lg:min-h-[680px] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary via-orange-400 to-amber-300 px-6 py-8 text-white sm:px-8 md:px-10 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.18),transparent_40%)]" />
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-orange-100/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />

            <div className="relative z-10 flex h-full min-h-[280px] flex-col justify-between gap-10">
              <div className="max-w-md">
                <div className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.32em] text-white/90 backdrop-blur">
                  Cases em produção
                </div>
                <h3 className="mt-6 font-space-grotesk text-3xl font-bold leading-[1.02] sm:text-4xl lg:text-5xl">
                  Produtos próprios e sistemas sob medida, na mesma vitrine.
                </h3>
                <p className="mt-4 max-w-lg text-sm leading-6 text-white/80 sm:text-base">
                  A Sudo desenha, implementa e evolui software para operação
                  real. Aqui ficam alguns dos projetos que já foram para o
                  mercado.
                </p>
              </div>

              <div className="relative h-[320px] overflow-hidden sm:h-[360px] lg:h-[420px]">
                {items.map((item, index) => {
                  const isActive = index === currentIndex;
                  const distance = index - currentIndex;
                  const wrappedDistance = wrap(
                    -(totalItems / 2),
                    totalItems / 2,
                    distance
                  );
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.id}
                      animate={{
                        y: wrappedDistance * ITEM_HEIGHT,
                        opacity: 1 - Math.abs(wrappedDistance) * 0.2,
                        scale: isActive ? 1 : 0.96,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 90,
                        damping: 20,
                        mass: 0.9,
                      }}
                      className="absolute left-0 flex w-full justify-start"
                      style={{ height: ITEM_HEIGHT }}
                    >
                      <button
                        type="button"
                        onClick={() => handleChipClick(index)}
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                        onFocus={() => setIsPaused(true)}
                        onBlur={() => setIsPaused(false)}
                        className={cn(
                          "group flex w-full max-w-full items-center gap-4 rounded-full border px-5 py-3 text-left transition-all duration-500 sm:px-6",
                          isActive
                            ? "border-white bg-white text-primary shadow-[0_20px_50px_-24px_rgba(255,255,255,0.9)]"
                            : "border-white/20 bg-white/10 text-white/70 hover:border-white/35 hover:bg-white/15 hover:text-white"
                        )}
                      >
                        <span
                          className={cn(
                            "flex size-11 shrink-0 items-center justify-center rounded-full border transition-colors",
                            isActive
                              ? "border-primary/10 bg-primary/10 text-primary"
                              : "border-white/15 bg-white/5 text-white/55"
                          )}
                        >
                          <Icon className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[10px] font-semibold uppercase tracking-[0.28em] text-current/70">
                            {item.category}
                          </span>
                          <span className="mt-1 block truncate font-space-grotesk text-sm font-semibold uppercase tracking-[0.08em] sm:text-[15px]">
                            {item.label}
                          </span>
                        </span>
                      </button>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden border-t border-black/10 bg-gradient-to-br from-zinc-100 via-white to-orange-50 px-5 py-10 dark:border-white/10 dark:from-zinc-950 dark:via-black dark:to-zinc-900 md:px-8 lg:min-h-full lg:border-l lg:border-t-0 lg:px-10 lg:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,146,60,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(249,115,22,0.12),transparent_30%)]" />

            <div className="relative h-[440px] w-full max-w-[520px] sm:h-[520px]">
              {items.map((item, index) => {
                const status = getCardStatus(index);
                const isActive = status === "active";
                const isPrev = status === "prev";
                const isNext = status === "next";

                return (
                  <motion.article
                    key={item.id}
                    initial={false}
                    animate={{
                      x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                      y: isActive ? 0 : isPrev || isNext ? 18 : 0,
                      scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.72,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                      rotate: isPrev ? -4 : isNext ? 4 : 0,
                      zIndex: isActive ? 30 : isPrev || isNext ? 20 : 0,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 240,
                      damping: 24,
                      mass: 0.9,
                    }}
                    className="absolute inset-0 overflow-hidden rounded-[2rem] border border-black/10 bg-black shadow-[0_35px_80px_-40px_rgba(0,0,0,0.7)] dark:border-white/10"
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className={cn(
                        "object-cover transition-all duration-700",
                        isActive
                          ? "scale-100 grayscale-0"
                          : "scale-105 grayscale brightness-75"
                      )}
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent" />

                    <AnimatePresence>
                      {isActive ? (
                        <motion.div
                          key={`${item.id}-content`}
                          initial={{ opacity: 0, y: 18 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 12 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-4 p-6 sm:p-8"
                        >
                          <div className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80 backdrop-blur">
                            {item.category}
                          </div>

                          <div>
                            <h4 className="font-space-grotesk text-2xl font-semibold text-white sm:text-3xl">
                              {item.label}
                            </h4>
                            <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">
                              {item.description}
                            </p>
                          </div>

                          {item.href ? (
                            <div>
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/15"
                              >
                                Ver projeto
                                <ArrowUpRight className="size-4" />
                              </a>
                            </div>
                          ) : null}
                        </motion.div>
                      ) : null}
                    </AnimatePresence>

                    <div
                      className={cn(
                        "absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/75 backdrop-blur transition-opacity duration-300",
                        isActive ? "opacity-100" : "opacity-0"
                      )}
                    >
                      <span className="size-2 rounded-full bg-primary shadow-[0_0_16px_rgba(251,146,60,0.9)]" />
                      Em produção
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
