"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { JobTaskDesc, ProjectDesc, ProjectSubTaskDesc } from "@/data/type";
import { projectInfo } from "@/data/data";
import { span, strong } from "framer-motion/client";

export default function Projects() {
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
                <span>Projects</span>
              </motion.div>
            </div>
            <div className="flex w-full gap-[16px] h-[calc(100vh-160px)]">
              {projectInfo.map((project: ProjectDesc, index: number) => (
                <motion.div
                  key={`project-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 * index }}
                  className="w-full max-w-[450px] flex-shrink-0 snap-start h-full border rounded-lg bg-white"
                >
                  <div className="p-[12px] w-full h-full overflow-y-auto flex flex-col gap-[8px]">
                    <div className="w-fit flex flex-col gap-[4px]">
                      <div className="subject w-fit flex text-[20px] bg-gray-100 rounded-md p-[4px]">
                        <span className="font-semibold overflow-hidden text-nowrap truncate">
                          {project.projectName}
                        </span>
                      </div>
                      <div className="flex gap-[5px] w-full">
                        <div className="subject w-fit flex text-[16px] bg-gray-100 rounded-md p-[4px]">
                          <span className="font-normal">{project.company}</span>
                        </div>
                        <div className="flex gap-[5px] w-fit">
                          <div className="items-center justify-center w-fit flex gap-[10px] text-[12px] bg-gray-100 rounded-md p-[2px]">
                            <span>{project.startDate}</span>
                            <span> - </span>
                            <span>{project.endDate}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-fit flex flex-col mt-[4px] gap-[4px] py-[4px]">
                      <div className="subject text-[12px] w-full h-fit bg-gray-100 rounded-md p-[4px] font-semibold">
                        개발 환경
                      </div>
                      <div className="h-fit text-[12px] w-full bg-gray-100 rounded-md p-[8px]">
                        <ul className="flex w-full flex-col">
                          {project.devEnvrionment.map((task: string, tIndex: number) => (
                            <li key={`devEnv-${index}-${tIndex}`} className="w-full h-full">
                              <span className="block">- {task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="w-fit h-fit flex flex-col gap-[4px] py-[4px] ">
                      <div className="subject text-[12px] w-fit h-fit bg-gray-100 rounded-md p-[4px] font-semibold">
                        주요 업무
                      </div>
                      <div className="w-full bg-gray-100 p-[8px] rounded-md">
                        <ul className="text-[12px] w-fit flex flex-col">
                          {project.taskDesc.map((task: ProjectSubTaskDesc, tIndex: number) => (
                            <li key={`task-${index}-${tIndex}`} className="w-fit h-full mt-[4px]">
                              <span className="block font-bold text-[16px]">{task.headTask}</span>
                              <span className="font-bold">주요 기능: </span>
                              <span className="font-normal">{task.mainPoint}</span>
                              {/* <ul className="list-disc list-inside ml-4 mt-1 space-y-1 w-fit"> */}
                              <ul className="list-disc list-inside ml-4 mt-1 space-y-1 inline-block max-w-[90%] break-words">
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
