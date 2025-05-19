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
    // <main className="flex flex-col h-screen overflow-hidden">
    <main className="flex flex-col h-screen font-spoqa">
      <div className="fixed top-0 w-full h-[80px] z-50 ">
        <Header />
      </div>
      <div id="scroll-container" className="h-full overflow-y-auto scroll-snap-y scroll-snap-mandatory scrollbar-hide">
        <section id="home" className="scroll-snap-start h-full">
          <ScrollFadeSection isFirst={true}>
            <Intro />
          </ScrollFadeSection>
        </section>
        <section id="about" className="scroll-snap-start scroll-snap-always h-full ">
          <ScrollFadeSection>
            <About />
          </ScrollFadeSection>
        </section>

        <section id="skills" className="scroll-snap-start scroll-snap-always h-full bg-gray-100">
          <ScrollFadeSection>
            <Skills />
          </ScrollFadeSection>
        </section>
        <section id="career" className="scroll-snap-start scroll-snap-always h-full">
          <ScrollFadeSection>
            <Career />
          </ScrollFadeSection>
        </section>
        <section id="projects" className="scroll-snap-start h-full bg-gray-100">
          <ScrollFadeSection isLast={true}>
            <Projects />
          </ScrollFadeSection>
        </section>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </main>
  );
}
