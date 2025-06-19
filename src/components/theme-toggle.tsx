"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/theme-context";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <motion.div
          initial={false}
          animate={{
            scale: theme === "dark" ? 1 : 0,
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : 180,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Moon className="w-5 h-5 text-black dark:text-white" />
        </motion.div>

        <motion.div
          initial={false}
          animate={{
            scale: theme === "light" ? 1 : 0,
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : -180,
          }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0"
        >
          <Sun className="w-5 h-5 text-black dark:text-white" />
        </motion.div>
      </div>
    </motion.button>
  );
}
