"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./theme-toggle";
import { siteContent } from "@/lib/site-content";

const navItems = [
  // { label: siteContent.navigation.home, href: "/#inicio" },
  { label: siteContent.navigation.projects, href: "/#projetos" },
  { label: siteContent.navigation.partnerships, href: "/patrocinios" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed inset-x-0 top-6 z-50 hidden justify-center lg:flex">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "rounded-full px-6 py-3 transition-colors duration-300",
            scrolled
              ? "border border-black/10 bg-white/70 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/70"
              : "border border-black/10 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80"
          )}
        >
          <div className="flex items-center gap-1">
            <Link href="/" className="mr-6 flex shrink-0 items-center">
              <Image
                src="/logos/sudo-tech.svg"
                alt="Sudo Tech"
                width={32}
                height={32}
                className="h-auto dark:invert"
              />
            </Link>

            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-black/60 transition-colors hover:bg-black/5 hover:text-black dark:text-white/60 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}

            <div className="ml-6">
              <ThemeToggle />
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Tablet Navigation */}
      <header className="fixed inset-x-0 top-6 z-50 hidden justify-center md:flex lg:hidden">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "rounded-full px-4 py-3 transition-colors duration-300",
            scrolled
              ? "border border-black/10 bg-white/70 shadow-lg backdrop-blur-xl dark:border-white/10 dark:bg-black/70"
              : "border border-black/10 bg-white/80 backdrop-blur-md dark:border-white/10 dark:bg-black/80"
          )}
        >
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/sudo-tech.svg"
                alt="Sudo Tech"
                width={32}
                height={32}
                className="h-auto dark:invert"
              />
            </Link>

            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              className="relative flex size-10 items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="size-6" aria-hidden="true" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="size-6" aria-hidden="true" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 md:hidden">
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={cn(
            "px-6 py-4 transition-colors duration-300",
            scrolled
              ? "border-b border-black/10 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-black/70"
              : "bg-white/80 backdrop-blur-md dark:bg-black/80"
          )}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/logos/sudo-tech.svg"
                alt="Sudo Tech"
                width={32}
                height={32}
                className="h-auto dark:invert"
              />
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                className="relative flex size-10 items-center justify-center"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="size-6" aria-hidden="true" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="size-6" aria-hidden="true" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </motion.nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm dark:bg-black/80"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="absolute bottom-0 right-0 top-0 w-full max-w-sm border-l border-black/10 bg-white p-8 pt-24 dark:border-white/10 dark:bg-black"
              style={{ overscrollBehavior: "contain" }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block font-space-grotesk text-2xl text-black transition-colors hover:text-primary dark:text-white"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
