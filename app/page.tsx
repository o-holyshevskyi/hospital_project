import { AboutSection } from "@/components/home/AboutSection";
import { ContactStrip } from "@/components/home/ContactStrip";
import { DoctorsSection } from "@/components/home/DoctorsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsSection } from "@/components/home/NewsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Footer } from "@/components/main/Footer";
import { Header } from "@/components/main/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main>
          <HeroSection />
          <ContactStrip />
          <ServicesSection />
          <AboutSection />
          <FeaturesSection />
          <DoctorsSection />
          <NewsSection />
      </main>
      <Footer />
  </>
  );
}
