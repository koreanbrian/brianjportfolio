"use client";

import About from "@/components/content/About";
import ScrollFadeSection from "@/components/base/ScrollFadeSection";
import Footer from "@/components/base/Footer";
import Header from "@/components/base/Header";
import Intro from "@/components/content/Intro";
import Skills from "@/components/content/Skills";
import Projects from "@/components/content/Projects";
import Career from "@/components/content/Career";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { main } from "framer-motion/client";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const controls = useAnimation();
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      controls.start({ opacity: 0, transition: { duration: 0.1 } });

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        controls.start({ opacity: 1, transition: { duration: 0.1 } });
      }, 150);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const top = container.scrollTop;
      setIsAtTop(top === 0);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <main className="flex flex-col h-screen font-spoqa">
      <motion.div
        className={`fixed top-0 w-full h-[80px] z-50 ${isAtTop ? "" : "bg-gray-100/70"}`}
        animate={controls}
        initial={{ opacity: 1 }}
      >
        <Header />
      </motion.div>
      <div
        ref={scrollContainerRef}
        id="scroll-container"
        className="h-full overflow-y-auto scroll-snap-y scroll-snap-mandatory scrollbar-hide"
      >
        <section id="home" className="scroll-snap-start h-full bg-gray-100 ">
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
      <motion.div className="fixed bottom-0 w-full" animate={controls} initial={{ opacity: 1 }}>
        <Footer />
      </motion.div>
    </main>
  );
}
