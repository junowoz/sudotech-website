import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
