import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
// import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { FooterSection } from "@/components/footer-section";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

export default function Home() {
  return (
    <>
      <SmoothScrollProvider />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        {/* <AboutSection /> */}
        <ContactSection />
      </main>
      <FooterSection />
    </>
  );
}
