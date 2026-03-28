import "./index.css";
import { HeroSection } from "./components/HeroSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { EducationSection } from "./components/EducationSection";
import { CodingSection } from "./components/CodingSection";
import { ContactSection } from "./components/ContactSection";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-brand-dark text-slate-100 font-sans overflow-x-hidden selection:bg-brand-primary/30">
      <div className="fixed inset-0 bg-modern-mesh -z-10 bg-fixed opacity-60"></div>
      
      <Navbar />
      <main className="pt-24 lg:pt-28">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <EducationSection />
        <CodingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
