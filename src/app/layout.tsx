import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/theme-context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Sudo Tech | Estúdio de Software & Design",
  description:
    "Criamos sistemas",
  keywords:
    "desenvolvimento software, aplicativo móvel, sistema web, consultoria tecnologia, estúdio software, inovação, Brasil, agência digital, software house",
  authors: [{ name: "Sudo Tech" }],
  creator: "Sudo Tech",
  publisher: "Sudo Tech",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sudotech.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sudo Tech | Estúdio de Software & Design",
    description:
      "Criamos sistemas",
    url: "https://sudotech.com.br",
    siteName: "Sudo Tech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sudo Tech | Estúdio de Software & Design",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sudo Tech | Estúdio de Software & Design",
    description: "Criamos sistemas",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#fb923c" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-white dark:bg-black text-black dark:text-white antialiased selection:bg-primary selection:text-white dark:selection:text-black`}
      >
        <ThemeProvider>{children}</ThemeProvider>

        {/* Schema.org structured data */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Sudo Tech",
              description: "Estúdio de Software & Design",
              url: "https://sudotech.com.br",
              logo: "https://sudotech.com.br/sudo-tech.svg",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-92-99285-2143",
                contactType: "customer service",
                areaServed: "BR",
                availableLanguage: ["Portuguese"],
              },
              sameAs: [
                "https://www.linkedin.com/company/sudotech",
                "https://github.com/sudotech",
                "https://instagram.com/sudotech",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
