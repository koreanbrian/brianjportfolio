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
    <main className="flex flex-col h-screen overflow-y-auto" id="scroll-container">
      <div className="fixed top-0 w-full z-50 ">
        <Header />
      </div>
      <div className=" min-h-screen pt-[80px] overflow-y-auto scroll-snap-y scroll-snap-proximity scroll-smooth scrollbar-hide">
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
      {/* <div className="absolute bottom-0 w-full"> */}
      <Footer />
      {/* </div> */}
    </main>
  );
}
