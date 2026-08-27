import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillsSection } from "@/components/SkillsSection";
import { BeyondCodeSection } from "@/components/BeyondCodeSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <BeyondCodeSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
