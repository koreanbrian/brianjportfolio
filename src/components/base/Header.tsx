"use client";

import { useState } from "react";
import { useScrollSpy } from "./UseScrollSpy";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("home");
  const menuIds = ["home", "about", "skills", "career", "projects"];
  const currentSection = useScrollSpy(menuIds, 80); // 80px header offset
  const menuSelect: string =
    "h-[25px] w-[80px] cursor-pointer font-light text-center hover:text-gray-400 hover:border-b-2 hover:border-b-gray-400 ";
  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      setSelectedMenu(id);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <div className="relative z-50 flex h-[80px] w-full items-end justify-between ">
      <div className=" w-full h-full p-[16px] text-[20px] font-normal flex items-end">Brian Jeong's Portfolio</div>

      {/* Desktop Menu */}
      <nav className="hidden lg:flex h-full items-end justify-end gap-[12px] p-[16px] font-semibold">
        {menuIds.map((id) => (
          <div
            key={id}
            className={`${currentSection === id ? "font-semibold" : ""} ${menuSelect}`}
            onClick={() => scrollToSection(id)}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </div>
        ))}
      </nav>
      <div className={"wfull scroll-watcher"}></div>
      {/* Burger Button (Mobile Only) */}
      <div className="lg:hidden p-4 z-1">
        <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col justify-between w-6 h-5 focus:outline-none">
          {!isOpen ? (
            // Burger Icon
            <>
              <span className="block h-[2px] bg-black w-full" />
              <span className="block h-[2px] bg-black w-full" />
              <span className="block h-[2px] bg-black w-full" />
            </>
          ) : (
            // X Icon
            <div className="relative w-6 h-5">
              <span className="block absolute top-1/2 left-0 w-full h-[2px] bg-black rotate-45" />
              <span className="block absolute top-1/2 left-0 w-full h-[2px] bg-black -rotate-45" />
            </div>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-white lg:hidden flex flex-col items-center gap-4 p-4">
          {menuIds.map((id) => (
            <div
              key={id}
              className={`${currentSection === id ? "font-semibold" : ""} ${menuSelect}`}
              onClick={() => scrollToSection(id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
