"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Intro() {
  const ref = useRef<HTMLDivElement>(null);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setShowName(true), 2000);
      } else {
        setShowName(false);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-screen flex flex-col justify-center items-center w-full">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
        <div className="flex flex-col lg:flex-row  min-h-screen gap-[20px] items-center justify-center w-full px-[20px]">
          <div className="min-w-[250px] h-full flex items-center justify-center transition-all transition-discrete  duration-75">
            {/* <img className="rounded-lg" width="200" src="/img/metamong.png" /> */}
            <img className="rounded-lg" width="200" src="/img/BrianProfilePhoto.jpg" />
          </div>
          <div className="w-fit max-w-[360px] flex flex-col items-center justify-center gap-[20px]">
            <div className="text-[23px] w-fit lg:w-full font-semibold flex flex-col justify-end">
              <div className="flex gap-[6px]">
                <span className="h-fit font-normal">안녕하세요,</span>
              </div>
              <div className="min-h-[35px] max-w-[320px]">
                <AnimatePresence mode="wait">
                  {!showName ? (
                    <>
                      <div className="flex gap-[4px]">
                        <span className="font-light w-[60px] h-fit">저는</span>
                        <motion.div
                          key="engineer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.6 }}
                          className="w-fit flex gap-[4px] justify-start"
                        >
                          <div className="flex gap-[4px]">
                            <span className="font-semibold border-b border-b-black w-[300px] h-[35px] justify-start text-center flex "></span>
                          </div>
                        </motion.div>
                      </div>
                      <span className="font-light w-[60px] text-[25px] ">입니다.</span>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-[4px]">
                        <span className="font-light w-[60px] h-fit">저는</span>
                        <div className="w-fit flex gap-[4px] justify-start">
                          <span className="font-semibold border-b border-b-black w-[270px] h-[35px] justify-center text-center flex">
                            <motion.div
                              key="name"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.6 }}
                              className="w-fit flex text-center gap-[12px]"
                            >
                              <strong>프론트엔드 개발자</strong>
                              <span className="font-normal"> 정희영</span>
                            </motion.div>
                          </span>
                        </div>
                      </div>
                      <span className="font-light w-[60px] text-[25px] ">입니다.</span>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div className="w-full flex felx-col gap-[4px] text-[14px]">
              <div className="flex gap-[4px] w-full">
                <span className="font-light w-[30px]">📱</span>
                <span className="w-full font-light ">
                  <a className="cryptedphone" data-name="+82 10" data-domain="5046" data-tld="5137">
                    <i></i>
                  </a>
                </span>
              </div>
              <div className="flex gap-[4px] w-full">
                <span className="font-light w-[30px]">📧</span>
                <span className="w-full font-light ">
                  <a
                    href="#"
                    className="cryptedmail"
                    data-name="jhy2139"
                    data-domain="gmail"
                    data-tld="com"
                    onClick={(e) => {
                      e.preventDefault();
                      const target = e.currentTarget as HTMLAnchorElement;
                      const name = target.dataset.name;
                      const domain = target.dataset.domain;
                      const tld = target.dataset.tld;
                      if (name && domain && tld) {
                        window.location.href = `mailto:${name}@${domain}.${tld}`;
                      }
                    }}
                  >
                    <i className="fas fa-envelopes"></i>
                  </a>
                </span>
              </div>
            </div>
            <div className="text-[16px] flex flex-col w-full text-gray-700">
              <span className="w-full font-semibold">University of Nevada, Las Vegas</span>
              <span className="w-full font-normal text-[13px]">네바다 주립대학교, 라스베가스 캠퍼스</span>
              <div className="flex gap-[12px] w-full">
                <span className="w-[35%] font-light min-w-[150px]">2016.08 - 2020.05</span>
                <span className="w-full">컴퓨터 공학 학사 졸업</span>
              </div>
              <div className="flex gap-[12px] w-full">
                <span className="w-[35%] font-light min-w-[150px]">2009.05 - 2015.08</span>
                <span className="w-full">
                  호텔 경영학과 학사 졸업
                  <br />
                  (일본어 부전공)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
