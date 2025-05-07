"use client";

import Link from "next/link";
import { SudoLogo } from "./sudo-logo";

const footerLinks = [
  { label: "Início", href: "#home" },
  { label: "Serviços", href: "#services" },
  { label: "FAQ", href: "#faq" },
];

const contactLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/+5592984804052?text=Olá,%20gostaria%20saber%20sobre%20os%20serviços",
  },
  {
    label: "Email",
    href: "mailto:contato@sudotech.com.br",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#26272b]">
      <div className="container py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Logo and Description */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8">
                  <SudoLogo />
                </div>
              </Link>
              <p className="text-sm leading-6 text-gray-300">
                Transformando ideias em soluções digitais inovadoras.
              </p>
            </div>

            {/* Navigation Links */}
            <div>
              <h3 className="text-sm font-semibold mb-6">Navegação</h3>
              <ul role="list" className="space-y-4">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Links */}
            <div>
              <h3 className="text-sm font-semibold mb-6">Contato</h3>
              <ul role="list" className="space-y-4">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Sudo Tech. Todos os direitos
              reservados.
            </p>
            <p className="text-sm text-gray-400 mt-2">
              CNPJ: 58.279.772/0001-94
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
