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
    <main className="flex flex-col h-screen overflow-y-auto font-spoqa" id="scroll-container">
      <div className="fixed top-0 w-full z-50 ">
        <Header />
      </div>
      <div className=" min-h-[calc(100vh-80px)] overflow-y-auto scroll-snap-y scroll-snap-mandatory scrollbar-hide">
        <section className="scroll-snap-start h-[calc(100vh-80px)]">
          <ScrollFadeSection isFirst={true}>
            <Intro />
          </ScrollFadeSection>
        </section>
        <section className="scroll-snap-start h-[calc(100vh-80px)]">
          <ScrollFadeSection>
            <About />
          </ScrollFadeSection>
        </section>
        <section className="scroll-snap-start h-[calc(100vh-80px)]">
          <ScrollFadeSection>
            <Skills />
          </ScrollFadeSection>
        </section>
        <section className="scroll-snap-start h-[calc(100vh-80px)]">
          <ScrollFadeSection>
            <Career />
          </ScrollFadeSection>
        </section>
        <section className="scroll-snap-start h-[calc(100vh-80px)]">
          <ScrollFadeSection isLast={true}>
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
