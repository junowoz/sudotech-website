"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  MapPin,
  Send,
  Sparkles,
  Clock,
  MessageCircle,
} from "lucide-react";
import { siteContent } from "@/lib/site-content";

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+55 92 98480-4052",
      link: "https://wa.me/5592984804052",
      color: "from-green-500 to-emerald-500",
      description: "Resposta rápida",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contato@sudotech.com.br",
      link: "mailto:contato@sudotech.com.br",
      color: "from-orange-500 to-amber-500",
      description: "Para propostas formais",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "Manaus, AM - Brasil",
      color: "from-amber-500 to-orange-500",
      description: "Atendemos todo o Brasil",
    },
    {
      icon: Clock,
      title: "Horário",
      value: "Seg - Sex: 8h às 17h",
      color: "from-orange-600 to-red-500",
      description: "Horário comercial",
    },
  ];

  return (
    <section id="contato" className="relative py-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-50/50 dark:via-orange-950/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-black/20 dark:via-white/20 to-transparent" />
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
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-black/70 dark:text-white/70">
              {siteContent.contact.badge}
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-space-grotesk font-bold mb-6">
            {siteContent.contact.title.line1}
            <br />
            <span className="text-gradient dark:text-gradient">
              {siteContent.contact.title.highlight}
            </span>
          </h2>
          <p className="text-lg text-black/60 dark:text-white/60 max-w-2xl mx-auto">
            {siteContent.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;

            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.link.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="block h-full"
                  >
                    <div className="relative h-full p-6 rounded-2xl glass border border-black/10 dark:border-white/10 hover:border-primary/20 transition-all hover:scale-105">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}
                      />

                      <div className="relative space-y-4">
                        <div
                          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-10`}
                        >
                          <Icon className="w-6 h-6 text-black dark:text-white" />
                        </div>

                        <div>
                          <h3 className="font-space-grotesk font-semibold text-lg mb-1">
                            {info.title}
                          </h3>
                          <p className="text-black dark:text-white font-medium text-sm">
                            {info.value}
                          </p>
                          <p className="text-sm text-black/60 dark:text-white/60 mt-1">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="relative h-full p-6 rounded-2xl glass border border-black/10 dark:border-white/10">
                    <div className="relative space-y-4">
                      <div
                        className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${info.color} bg-opacity-10`}
                      >
                        <Icon className="w-6 h-6 text-black dark:text-white" />
                      </div>

                      <div>
                        <h3 className="font-space-grotesk font-semibold text-lg mb-1">
                          {info.title}
                        </h3>
                        <p className="text-black dark:text-white font-medium text-sm">
                          {info.value}
                        </p>
                        <p className="text-sm text-black/60 dark:text-white/60 mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/5592984804052"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white dark:text-black font-medium rounded-full hover:scale-105 transition-transform"
          >
            Iniciar Conversa no WhatsApp
            <MessageCircle className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
