"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { SudoLogo } from "./sudo-logo";

const footerLinks = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/+5592992852143?text=Olá,%20gostaria%20saber%20sobre%20os%20serviços",
  },
  {
    label: "Email",
    href: "mailto:contato@sudotech.com.br",
  },
];

const socialLinks = [
  {
    icon: Facebook,
    href: "https://facebook.com/sudobr",
    label: "Facebook",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/sudobr_",
    label: "Twitter",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/sudobr/",
    label: "Instagram",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#26272b]">
      <div className="container py-12 md:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center space-x-2">
              <SudoLogo />
              <span className="font-bold text-xl">Sudo Tech</span>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Transformando ideias em soluções digitais inovadoras.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  className="rounded-lg bg-white/5 p-2 hover:bg-white/10"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold">Navegação</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Contato</h3>
              <ul role="list" className="mt-6 space-y-4">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Sudo Tech. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
