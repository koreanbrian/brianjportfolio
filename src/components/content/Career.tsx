"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { JobDesc, JobTaskDesc } from "@/data/type";
import { careerInfo } from "@/data/data";

export default function Career() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [showName, setShowName] = useState(false);
  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const onWheel = (e: WheelEvent) => {
      const element = scrollRef.current;
      if (!element) return;

      const scrollLeft = element.scrollLeft;
      const maxScrollLeft = element.scrollWidth - element.clientWidth;

      const isAtStart = scrollLeft <= 0;
      const isAtEnd = scrollLeft >= maxScrollLeft - 1;

      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;

      // Prevent vertical scroll when in horizontal scroll zone
      const shouldScrollHorizontally = (scrollingRight && !isAtEnd) || (scrollingLeft && !isAtStart);

      if (shouldScrollHorizontally) {
        e.preventDefault();
        element.scrollLeft += e.deltaY;
      }
    };
    element.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      element.removeEventListener("wheel", onWheel);
    };
  }, []);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setShowName(true), 2000);
        } else {
          setShowName(false);
        }
      },
      {
        threshold: 0.4,
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-full flex flex-col justify-center items-center w-full pt-[80px] ">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
        <div
          ref={scrollRef}
          className="flex flex-col min-h-[calc(100vh-80px)] overflow-x-auto scroll-snap-x scroll-snap-mandatory gap-[20px] mt-[80px] items-start justify-start w-full px-[20px]  scrollbar-hide"
        >
          <div className="w-full min-w-[350px] h-fit flex flex-col items-start justify-start gap-[10px]">
            <div className="text-[25px] w-full h-fit font-semibold flex flex-col justify-end">
              <motion.div
                ref={ref}
                key="subject"
                initial={{ opacity: 0, y: 10 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-[35px] w-full font-semibold"
              >
                <span>Career</span>
              </motion.div>
            </div>
            <div className="flex w-full gap-[16px] h-[calc(100vh-160px)]">
              {careerInfo.map((career: JobDesc, index: number) => (
                <motion.div
                  key={`career-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 * index }}
                  className="w-full max-w-[450px] flex-shrink-0 snap-start h-fit min-h-[500px] border rounded-lg  "
                >
                  <div className="p-[8px] w-full h-[90%] overflow-y-auto">
                    <div className="w-full flex flex-col gap-[4px]">
                      <div className="subject w-fit flex text-[20px] bg-gray-100 rounded-md p-[4px]">
                        <span className="font-semibold">{career.company}</span>
                      </div>
                      <div className="flex gap-[5px] w-full">
                        <div className="subject w-fit flex text-[12px] bg-gray-100 rounded-md p-[4px]">
                          <span className="font-normal">{career.position}</span>
                        </div>
                        <div className="items-center justify-center w-fit flex gap-[10px] text-[12px] bg-gray-100 rounded-md p-[2px]">
                          <span>{career.startDate}</span>
                          <span> - </span>
                          <span>{career.endDate}</span>
                        </div>
                      </div>
                    </div>
                    <div className="h-fit flex flex-col  gap-[4px] py-[4px]">
                      <div className="subject text-[12px] w-fit h-fit bg-gray-100 rounded-md p-[4px] font-semibold">
                        주요 업무
                      </div>
                      <div>
                        <ul className="text-[14px] flex flex-col h-fit">
                          {career.taskDesc.map((task: JobTaskDesc, tIndex: number) => (
                            <li key={`task-${index}-${tIndex}`} className="w-full h-full">
                              <strong className="block">{task.headTask}</strong>
                              <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                                {task.subTask.map((sub, sIndex) => (
                                  <li key={`sub-${index}-${tIndex}-${sIndex}`}>{sub}</li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
