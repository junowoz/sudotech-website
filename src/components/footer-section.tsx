"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  // Instagram,
  // Linkedin,
  // Github,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Building2,
} from "lucide-react";
import { siteContent } from "@/lib/site-content";

const quickLinks = [
  { label: siteContent.navigation.home, href: "#inicio" },
  { label: siteContent.navigation.services, href: "#servicos" },
  { label: siteContent.navigation.projects, href: "#projetos" },
  // { label: siteContent.navigation.about, href: "#sobre" },
  { label: siteContent.navigation.contact, href: "#contato" },
];

const services = [
  { label: "Desenvolvimento Web", href: "#servicos" },
  { label: "Aplicativos Móveis", href: "#servicos" },
  { label: "UI/UX Design", href: "#servicos" },
  { label: "Consultoria Tech", href: "#servicos" },
];

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gray-50 dark:bg-black border-t border-black/10 dark:border-white/10">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/sudo-tech.svg"
                alt="Sudo Tech"
                width={120}
                height={40}
                className="h-10 w-auto invert dark:invert-0"
              />
            </Link>
            <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">
              {siteContent.footer.description}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-black/60 dark:text-white/60">
                <Building2 className="w-4 h-4" />
                <span className="font-medium">{siteContent.footer.cnpj}</span>
              </div>
            </div>
            {/* TODO: Add social media links */}
            {/* <div className="flex gap-3">
              <a
                href="https://instagram.com/sudotech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/company/sudotech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/sudotech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full glass border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5 hover:scale-110 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-space-grotesk font-semibold mb-6">
              {siteContent.footer.quickLinks}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black/60 dark:text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-space-grotesk font-semibold mb-6">
              {siteContent.footer.services}
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-black/60 dark:text-white/60 hover:text-primary text-sm transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-space-grotesk font-semibold mb-6">
              {siteContent.footer.contact}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/+5592992852143"
                  className="flex items-center gap-3 text-black/60 dark:text-white/60 hover:text-primary text-sm transition-colors group"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+55 92 99285-2143</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@sudotech.com.br"
                  className="flex items-center gap-3 text-black/60 dark:text-white/60 hover:text-primary text-sm transition-colors group"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span>contato@sudotech.com.br</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-black/60 dark:text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Manaus, AM - Brasil</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-black/40 dark:text-white/40">
                © {new Date().getFullYear()} Sudo Tech.{" "}
                {siteContent.footer.rights}
              </p>
            </div>

            <div className="flex items-center gap-6 text-sm text-black/40 dark:text-white/40">
              <Link
                href="/privacidade"
                className="hover:text-primary transition-colors"
              >
                {siteContent.footer.privacy}
              </Link>
              <Link
                href="/termos"
                className="hover:text-primary transition-colors"
              >
                {siteContent.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white dark:text-black hover:scale-110 transition-transform z-40 shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
