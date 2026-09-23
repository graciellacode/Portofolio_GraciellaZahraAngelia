import Navbar from "@/components/Navbar";
import SocialSidebar from "@/components/SocialSidebar";
import Hero from "@/components/Hero";
import QuickIntro from "@/components/QuickIntro";
import About from "@/components/About";
import Skills from "@/components/Skills";
import CurrentlyLearning from "@/components/CurrentlyLearning";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SocialSidebar />
      <Hero />
      <QuickIntro />
      <About />
      <Skills />
      <CurrentlyLearning />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
    </main>
  );
}