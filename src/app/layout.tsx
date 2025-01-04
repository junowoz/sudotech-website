import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sudo Tech - Desenvolvimento de Software e Sites",
  description: "Desenvolvimento de software e sites profissionais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body
        className={`${inter.className} bg-[#26272b] text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
