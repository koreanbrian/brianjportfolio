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
      <div
        id="scroll-container"
        className="h-[calc(100vh)] overflow-y-auto scroll-snap-y scroll-snap-mandatory scrollbar-hide"
      >
        <section className="scroll-snap-start h-[calc(100vh)]">
          <ScrollFadeSection isFirst={true}>
            <Intro />
          </ScrollFadeSection>
        </section>
        <section className="scroll-snap-start scroll-snap-always h-[calc(100vh)]">
          <ScrollFadeSection>
            <About />
          </ScrollFadeSection>
        </section>
        <section className="scroll-snap-start scroll-snap-always h-[calc(100vh)]">
          <ScrollFadeSection>
            <Skills />
          </ScrollFadeSection>
        </section>
        <section className="scroll-snap-start scroll-snap-always h-[calc(100vh)]">
          <ScrollFadeSection>
            <Career />
          </ScrollFadeSection>
        </section>
        <section className="scroll-snap-start scroll-snap-always h-[calc(100vh)]">
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
