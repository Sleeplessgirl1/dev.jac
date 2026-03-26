import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowIWork from "@/components/HowIWork";
import Skills from "@/components/Skills";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import MultidisciplinarySkills from "@/components/MultidisciplinarySkills";
import Projects from "@/components/Projects";
import CaseStudy from "@/components/CaseStudy";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <HowIWork />
        <Skills />
        <CurrentlyExploring />
        <MultidisciplinarySkills />
        <Projects />
        <CaseStudy />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
