"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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
          className="flex flex-col lg:flex-row h-[calc(100vh-160px)] gap-[20px] items-center justify-center w-full px-[20px]"
        >
          <div className="w-[30%] min-w-[250px] flex items-center justify-center transition-all transition-discrete  duration-75">
            <img className="rounded-lg" width="250" src="/img/BrianProfilePhoto.jpg" />
          </div>
          <div className="w-fit min-w-[350px] flex flex-col items-center justify-center gap-[20px]">
            <div className="text-[25px] w-full font-semibold flex flex-col justify-end">
              <div className="flex gap-[6px]">
                <span className="h-fit">안녕하세요,</span>
                <span className="font-light w-[60px] h-fit">저는 </span>
              </div>
              <div className="overflow-hidden min-h-[35px]">
                <AnimatePresence mode="wait">
                  {!showName ? (
                    <div>
                      <motion.div
                        key="engineer"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.6 }}
                      >
                        <div className="flex gap-[10px]">
                          <span className="font-semibold">Frontend Engineer</span>
                        </div>
                      </motion.div>
                      <span className="font-normal w-[60px] text-[25px]"> 입니다.</span>
                    </div>
                  ) : (
                    <div className="w-full">
                      <div className="w-full flex gap-[10px]">
                        <span className="font-semibold">Frontend Engineer </span>
                        <motion.div
                          key="name"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.6 }}
                        >
                          <span className="font-normal">정희영</span>
                        </motion.div>
                      </div>
                      <span className="font-normal w-[60px] text-[25px]"> 입니다.</span>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="text-[18px] flex flex-col w-full text-gray-700">
              <span className="w-full font-semibold">
                University of Nevada, Las Vegas <br />
              </span>
              <div className="flex gap-[12px] w-full">
                <span className="w-1/2 font-light min-w-[165px]">2016.08 - 2020.05</span>
                <span className="w-full">컴퓨터 공학 학사 졸업</span>
              </div>
              <div className="flex gap-[12px] w-full">
                <span className="w-1/2 font-light min-w-[165px]">2009.05 - 2015.08</span>
                <span className="w-full ">호텔 경영학과 학사</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
