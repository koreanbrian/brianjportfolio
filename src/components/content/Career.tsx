"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Career() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const t = useTranslations("career");
  const jobs = t.raw("jobs") as any[];

  useEffect(() => {
    const element = scrollRef.current;
    if (!element) return;

    const onWheel = (e: WheelEvent) => {
      const scrollLeft = element.scrollLeft;
      const maxScrollLeft = element.scrollWidth - element.clientWidth;

      const isAtStart = scrollLeft <= 0;
      const isAtEnd = scrollLeft >= maxScrollLeft - 1;

      const scrollingRight = e.deltaY > 0;
      const scrollingLeft = e.deltaY < 0;

      const shouldScrollHorizontally = (scrollingRight && !isAtEnd) || (scrollingLeft && !isAtStart);

      if (shouldScrollHorizontally) {
        e.preventDefault();
        element.scrollLeft += e.deltaY;
      }
    };

    element.addEventListener("wheel", onWheel, { passive: false });
    return () => element.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setVisible(true), 2000);
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-full flex flex-col justify-center items-center w-full pt-[80px]">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
        <div
          ref={scrollRef}
          className="flex flex-col min-h-[calc(100vh-200px)] overflow-x-auto scroll-snap-x scroll-snap-mandatory gap-[20px] pt-[40px] items-start justify-start w-full px-[20px] scrollbar-hide"
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
                <span>{t("title")}</span>
              </motion.div>
            </div>

            <div className="flex w-full gap-[16px] h-[calc(100vh-160px)]">
              {jobs.map((career, index) => (
                <motion.div
                  key={`career-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 * index }}
                  className="flex-shrink-0 snap-start w-[90vw] md:w-[450px] h-full border rounded-lg bg-white box-border flex flex-col overflow-hidden"
                >
                  <div className="p-[12px] w-full h-full overflow-y-auto flex flex-col gap-[8px]">
                    <div className="w-full flex flex-col gap-[4px]">
                      <div className="subject w-fit flex text-[20px] bg-gray-100 rounded-md p-[4px]">
                        <span className="font-semibold">{career.company}</span>
                      </div>
                      <div className="flex gap-[5px] w-full">
                        <div className="subject w-fit flex text-[16px] bg-gray-100 rounded-md p-[4px]">
                          <span className="font-normal">{career.position}</span>
                        </div>
                        <div className="items-center justify-center w-fit flex gap-[10px] text-[12px] bg-gray-100 rounded-md p-[2px]">
                          <span>{career.startDate}</span>
                          <span> - </span>
                          <span>{career.endDate}</span>
                        </div>
                      </div>
                    </div>

                    <div className="h-fit flex flex-col gap-[4px] py-[4px]">
                      <div className="subject text-[12px] w-fit font-semibold">{t("maintask")}</div>
                      <div className="text-[14px] flex flex-col gap-[12px] border rounded-md px-[8px] py-[12px]">
                        {career.taskDesc.map((task: any, tIndex: number) => (
                          <motion.div
                            key={`task-${index}-${tIndex}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: 0.2 * tIndex }}
                            className="flex flex-col gap-[4px] bg-gray-100 p-[4px] rounded-md"
                          >
                            <strong>{task.headTask}</strong>

                            <div className="flex flex-col gap-[2px] ml-4">
                              {task.subTask.map((sub: string, sIndex: number) => (
                                <motion.div
                                  key={`sub-${index}-${tIndex}-${sIndex}`}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true, amount: 0.2 }}
                                  transition={{ duration: 0.6, delay: 0.2 * sIndex }}
                                  className="text-[13px] relative  before:text-gray-500"
                                >
                                  {sub}
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
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
