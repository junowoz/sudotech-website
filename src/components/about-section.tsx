"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Zap,
  Users,
  Lightbulb,
  Target,
  Sparkles,
  Code,
  Rocket,
  Heart,
} from "lucide-react";
import { siteContent } from "@/lib/site-content";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="sobre" className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-blue-950/10 to-transparent" />
        <div className="absolute inset-0 noise opacity-20" />
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
              {siteContent.about.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
            {siteContent.about.title.line1}
            <br />
            <span className="text-gradient dark:text-gradient">
              {siteContent.about.title.highlight}
            </span>
            <br />
            {siteContent.about.title.line2}
          </h2>
          <p className="text-lg text-black/60 dark:text-white/80 max-w-3xl mx-auto">
            {siteContent.about.subtitle}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative">
              <Code className="absolute -top-4 -left-4 w-8 h-8 text-orange-500/20" />
              <h3 className="text-3xl font-space-grotesk font-bold mb-4">
                {siteContent.about.mission.title}
              </h3>
              <p className="text-black/60 dark:text-white/80 leading-relaxed">
                {siteContent.about.mission.text}
              </p>
            </div>

            <div className="relative">
              <Rocket className="absolute -top-4 -left-4 w-8 h-8 text-amber-500/20" />
              <h3 className="text-3xl font-space-grotesk font-bold mb-4">
                {siteContent.about.vision.title}
              </h3>
              <p className="text-black/60 dark:text-white/80 leading-relaxed">
                {siteContent.about.vision.text}
              </p>
            </div>

            <div className="relative">
              <Heart className="absolute -top-4 -left-4 w-8 h-8 text-red-500/20" />
              <h3 className="text-3xl font-space-grotesk font-bold mb-4">
                {siteContent.about.culture.title}
              </h3>
              <p className="text-black/60 dark:text-white/80 leading-relaxed">
                {siteContent.about.culture.text}
              </p>
            </div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {siteContent.about.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="relative p-8 rounded-2xl glass border border-black/10 dark:border-white/10 text-center hover:border-primary/20 transition-all">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h4 className="text-4xl font-space-grotesk font-bold mb-2 relative z-10">
                      {stat.value}
                    </h4>
                    <p className="text-sm text-black/60 dark:text-white/80 relative z-10">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-500/20 rounded-full blur-3xl" />
          </motion.div>
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-space-grotesk font-bold text-center mb-12">
            Nossos Valores
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteContent.about.values.map((value, index) => {
              const iconMap: { [key: string]: React.ElementType } = {
                Qualidade: Target,
                Transparência: Users,
                Agilidade: Zap,
                Resultado: Lightbulb,
              };
              const Icon = iconMap[value.title] || Target;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="h-full p-6 rounded-2xl glass border border-black/10 dark:border-white/10 hover:border-primary/20 transition-all">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h4 className="text-lg font-space-grotesk font-semibold mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-black/60 dark:text-white/80">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
