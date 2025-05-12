"use client";

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
    <div className="flex h-[100px] w-full items-end justify-between bg-black text-white">
      <div className="w-1/2 p-[16px] text-[32px] font-bold">
        <i>Brian Jeong's Portfolio</i>
      </div>
      <div className="flex h-full items-end justify-end gap-[12px] p-[16px] font-semibold">
        <div className={menuSelect} onClick={() => scrollToSection("home")}>
          Intro
        </div>
        <div className={menuSelect} onClick={() => scrollToSection("about")}>
          About Me
        </div>
        <div className={menuSelect} onClick={() => scrollToSection("skills")}>
          Skills
        </div>
        <div className={menuSelect} onClick={() => scrollToSection("projects")}>
          Projects
        </div>
        <div className={menuSelect} onClick={() => scrollToSection("career")}>
          Career
        </div>
      </div>
    </div>
  );
}
