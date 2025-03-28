"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { SudoLogo } from "./sudo-logo";

export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#26272b]/80 backdrop-blur"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container">
        <div className="mx-auto max-w-7xl flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="w-8 h-8">
              <SudoLogo />
            </div>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#services" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Serviços
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#portfolio" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    Projetos
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#faq" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 focus:bg-white/10 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link
            href="https://wa.me/+5592992852143?text=Olá,%20gostaria%20saber%20sobre%20os%20serviços"
            target="_blank"
            className="inline-flex h-9 items-center justify-center rounded-md bg-[#F26522] px-6 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#F26522]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F26522]"
          >
            Contato
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
