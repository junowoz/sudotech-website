"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { siteContent } from "@/lib/site-content";

const navItems = [
  { label: siteContent.navigation.home, href: "#inicio" },
  { label: siteContent.navigation.services, href: "#servicos" },
  { label: siteContent.navigation.projects, href: "#projetos" },
  // { label: siteContent.navigation.about, href: "#sobre" },
  { label: siteContent.navigation.contact, href: "#contato" },
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
      {/* Desktop Navigation - Island Style */}
      <motion.header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className={`px-6 py-3 rounded-full transition-all duration-300 w-full max-w-4xl mx-6 ${
            scrolled
              ? "glass border border-black/10 dark:border-white/10 shadow-lg"
              : "bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/10"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0">
              <Image
                src="/sudo-tech.svg"
                alt="Sudo Tech"
                width={32}
                height={32}
                className="dark:invert"
              />
            </Link>

            {/* Nav Items - Centered */}
            <div className="flex items-center gap-1 flex-1 justify-center mx-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <ThemeToggle />

              {/* Divider */}
              <div className="w-px h-6 bg-black/10 dark:bg-white/10" />

              {/* CTA Button */}
              <Link
                href="#contato"
                className="px-5 py-2 bg-primary text-white font-medium text-sm rounded-full hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                {siteContent.navigation.start}
              </Link>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Tablet Navigation - Simplified Island */}
      <motion.header
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block lg:hidden"
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className={`px-4 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "glass border border-black/10 dark:border-white/10 shadow-lg"
              : "bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/10 dark:border-white/10"
          }`}
        >
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/sudo-tech.svg"
                alt="Sudo Tech"
                width={32}
                height={32}
                className="dark:invert"
              />
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* CTA Button */}
              <Link
                href="#contato"
                className="px-5 py-2 bg-primary text-white font-medium text-sm rounded-full hover:opacity-90 transition-opacity"
              >
                {siteContent.navigation.start}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex items-center justify-center"
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
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation */}
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 md:hidden"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav
          className={`px-6 py-4 transition-all duration-300 ${
            scrolled
              ? "glass border-b border-black/10 dark:border-white/10"
              : "bg-white/80 dark:bg-black/80 backdrop-blur-md"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/sudo-tech.svg"
                alt="Sudo Tech"
                width={32}
                height={32}
                className="dark:invert"
              />
            </Link>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex items-center justify-center"
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
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/50 dark:bg-black/80 backdrop-blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white dark:bg-black border-l border-black/10 dark:border-white/10 p-8 pt-24"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
            >
              <div className="space-y-6">
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
                      className="block text-2xl font-space-grotesk text-black dark:text-white hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-8"
                >
                  <Link
                    href="#contato"
                    onClick={() => setIsOpen(false)}
                    className="inline-block px-8 py-4 bg-primary text-white font-medium rounded-full hover:opacity-90 transition-opacity"
                  >
                    {siteContent.navigation.start}
                  </Link>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
