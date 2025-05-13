"use client";

import { div } from "framer-motion/client";

export default function Header() {
  const menuSelect: string =
    "h-[25px] w-[80px] cursor-pointer font-light text-center hover:text-gray-400 hover:border-b-2 hover:border-b-gray-400 ";
  const scrollToSection = (id: string) => {
    const container = document.getElementById("scroll-container");
    const target = document.getElementById(id);
    if (container && target) {
      container.scrollTo({
        top: target.offsetTop - container.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="flex h-[80px] w-full items-end justify-between font-spoqa">
      <div className=" w-full h-full p-[16px] text-[20px] font-normal flex items-end">Brian Jeong's Portfolio</div>
      <div className="flex h-full items-end justify-end gap-[12px] p-[16px] font-semibold">
        <div className={menuSelect} onClick={() => scrollToSection("home")}>
          Intro
        </div>
        <div className={menuSelect} onClick={() => scrollToSection("about")}>
          About
        </div>
        <div className={menuSelect} onClick={() => scrollToSection("skills")}>
          Skills
        </div>
        <div className={menuSelect} onClick={() => scrollToSection("career")}>
          Career
        </div>
        <div className={menuSelect} onClick={() => scrollToSection("projects")}>
          Projects
        </div>
      </div>
    </div>
  );
}
