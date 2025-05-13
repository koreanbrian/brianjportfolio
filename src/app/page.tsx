import About from "@/components/content/About";
import ScrollFadeSection from "@/components/base/ScrollFadeSection";
import Footer from "@/components/base/Footer";
import Header from "@/components/base/Header";
import Intro from "@/components/content/Intro";
import Skills from "@/components/content/Skills";
import Projects from "@/components/content/Projects";
import Career from "@/components/content/Career";

export default function Home() {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <div className="absolute w-full">
        <Header />
      </div>
      <div className="scroll-watcher" />
      <div
        className="mt-[100px] mb-[120px] h-[calc(100vh-160px)] overflow-y-auto scroll-snap-y scroll-snap-proximity scroll-smooth scrollbar-hide"
        id="scroll-container"
      >
        <section id="home" className="scroll-snap-start h-screen">
          <ScrollFadeSection>
            <Intro />
          </ScrollFadeSection>
        </section>
        <section id="about" className="scroll-snap-start h-screen">
          <ScrollFadeSection>
            <About />
          </ScrollFadeSection>
        </section>
        <section id="skills" className="scroll-snap-start h-screen ">
          <ScrollFadeSection>
            <Skills />
          </ScrollFadeSection>
        </section>
        <section id="career" className="scroll-snap-start h-screen ">
          <ScrollFadeSection>
            <Career />
          </ScrollFadeSection>
        </section>
        <section id="projects" className="scroll-snap-start h-screen ">
          <ScrollFadeSection>
            <Projects />
          </ScrollFadeSection>
        </section>
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
