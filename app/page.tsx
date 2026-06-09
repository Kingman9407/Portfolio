import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Freelance from "@/components/Freelance";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-blue-500/30 selection:text-blue-200">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Freelance />
      <Contact />
      <Footer />
    </main>
  );
}
