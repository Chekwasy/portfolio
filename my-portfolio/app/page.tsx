import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black overflow-x-hidden">
      <main className="max-w-6xl mx-auto px-6 pb-24">
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Journey />
        <Contact />
      </main>
    </div>
  );
}
