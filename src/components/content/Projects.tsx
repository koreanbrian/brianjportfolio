"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        setTimeout(() => setShowName(true), 2000);
      } else {
        setShowName(false);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-full flex flex-col justify-center items-center w-full">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
        <div
          ref={ref}
          className="flex flex-col lg:flex-row  min-h-screen gap-[20px] items-center justify-center w-full px-[20px]"
        >
          <div className="w-fit min-w-[350px] flex flex-col items-center justify-center gap-[20px]">
            <div className="text-[25px] w-full font-semibold flex flex-col justify-end">
              <motion.div
                key="subject"
                initial={{ opacity: 0, y: 10 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-[35px] w-full font-semibold"
              >
                <span>Projects</span>
              </motion.div>
              <div className="overflow-hidden min-h-[35px]"></div>
            </div>
            <div className="text-[18px] flex flex-col w-full text-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
