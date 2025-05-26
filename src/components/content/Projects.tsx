// // "use client";

// // import { useEffect, useRef, useState } from "react";
// // import { motion } from "framer-motion";
// // import { ProjectDesc, ProjectSubTaskDesc } from "@/data/type";
// // import { projectInfo } from "@/data/data";

// // export default function Projects() {
// //   const scrollRef = useRef<HTMLDivElement>(null);
// //   const ref = useRef<HTMLDivElement>(null);
// //   const [visible, setVisible] = useState(false);

// //   useEffect(() => {
// //     const element = scrollRef.current;
// //     if (!element) return;

// //     const onWheel = (e: WheelEvent) => {
// //       const scrollLeft = element.scrollLeft;
// //       const maxScrollLeft = element.scrollWidth - element.clientWidth;

// //       const isAtStart = scrollLeft <= 0;
// //       const isAtEnd = scrollLeft >= maxScrollLeft - 1;

// //       const scrollingRight = e.deltaY > 0;
// //       const scrollingLeft = e.deltaY < 0;

// //       const shouldScrollHorizontally = (scrollingRight && !isAtEnd) || (scrollingLeft && !isAtStart);

// //       if (shouldScrollHorizontally) {
// //         e.preventDefault();
// //         element.scrollLeft += e.deltaY;
// //       }
// //     };

// //     element.addEventListener("wheel", onWheel, { passive: false });
// //     return () => element.removeEventListener("wheel", onWheel);
// //   }, []);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setVisible(true);
// //         }
// //       },
// //       {
// //         threshold: 0.4,
// //       }
// //     );
// //     if (ref.current) observer.observe(ref.current);
// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div className="relative h-full flex flex-col justify-center items-center w-full pt-[80px] ">
// //       <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
// //         <div
// //           ref={scrollRef}
// //           className="flex flex-col min-h-[calc(100vh-200px)] overflow-x-auto scroll-snap-x scroll-snap-mandatory gap-[20px] pt-[40px] items-start justify-start w-full px-[20px]  scrollbar-hide"
// //         >
// //           <div className="w-full min-w-[350px] h-fit flex flex-col items-start justify-start gap-[10px]">
// //             <div className="text-[25px] w-full h-fit font-semibold flex flex-col justify-end">
// //               <motion.div
// //                 ref={ref}
// //                 key="subject"
// //                 initial={{ opacity: 0, y: 10 }}
// //                 animate={visible ? { opacity: 1, y: 0 } : {}}
// //                 transition={{ duration: 0.6 }}
// //                 className="text-[35px] w-full font-semibold"
// //               >
// //                 <span>Projects</span>
// //               </motion.div>
// //             </div>
// //             <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-[16px] lg:py-[20px] -mx-[12px]">
// //               {projectInfo.map((project: ProjectDesc, index: number) => (
// //                 <motion.div
// //                   key={`project-${index}`}
// //                   initial={{ opacity: 0, y: 10 }}
// //                   whileInView={{ opacity: 1, y: 0 }}
// //                   viewport={{ once: true, amount: 0.2 }}
// //                   transition={{ duration: 0.6, delay: 0.4 * index }}
// //                   className="flex-shrink-0 snap-start w-[70vw] md:w-[450px] h-[calc(100vh-200px)] rounded-lg border bg-white box-border p-[12px] flex flex-col overflow-hidden"
// //                 >
// //                   <div className="box-border p-[12px] w-full h-full overflow-y-auto flex flex-col gap-[8px]">
// //                     <div className="w-fit flex flex-col gap-[4px]">
// //                       <div className="subject w-fit flex text-[20px] bg-gray-100 rounded-md p-[4px]">
// //                         <span className="font-semibold overflow-hidden line-clamp-2">{project.projectName}</span>
// //                       </div>
// //                       <div className="flex gap-[5px] w-full">
// //                         <div className="subject w-fit flex text-[16px] bg-gray-100 rounded-md p-[4px]">
// //                           <span className="font-normal">{project.company}</span>
// //                         </div>
// //                         <div className="flex gap-[5px] w-fit">
// //                           <div className="items-center justify-center w-fit flex gap-[10px] text-[12px] bg-gray-100 rounded-md p-[2px]">
// //                             <span>{project.startDate}</span>
// //                             <span> - </span>
// //                             <span>{project.endDate}</span>
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="w-full h-fit flex flex-col mt-[4px] gap-[4px] py-[4px]">
// //                       <div className="subject text-[12px] w-fit font-semibold">개발 환경</div>
// //                       <div className="h-fit text-[12px] w-full bg-gray-100 rounded-md p-[8px]">
// //                         <div className="flex flex-col gap-[2px] ml-4">
// //                           {project.devEnvrionment.map((task: string, tIndex: number) => (
// //                             <motion.div
// //                               key={`sub-${index}-${tIndex}`}
// //                               initial={{ opacity: 0, y: 10 }}
// //                               whileInView={{ opacity: 1, y: 0 }}
// //                               viewport={{ once: true, amount: 0.2 }}
// //                               transition={{ duration: 0.6, delay: 0.2 * tIndex }}
// //                               className="relative pl-[16px] text-[12px] before:content-['•'] before:absolute before:left-0 before:text-gray-500"
// //                             >
// //                               <span>{task}</span>
// //                             </motion.div>
// //                           ))}
// //                         </div>
// //                       </div>
// //                     </div>
// //                     <div className="w-fit h-fit flex flex-col gap-[4px] py-[4px] ">
// //                       <div className="subject text-[12px] w-fit font-semibold"> 주요 기능</div>
// //                       <div className="text-[14px] flex flex-col gap-[12px] border rounded-md px-[8px] py-[12px]">
// //                         {project.taskDesc.map((task: ProjectSubTaskDesc, tIndex: number) => (
// //                           <motion.div
// //                             key={`task-${index}-${tIndex}`}
// //                             initial={{ opacity: 0, y: 10 }}
// //                             whileInView={{ opacity: 1, y: 0 }}
// //                             viewport={{ once: true, amount: 0.2 }}
// //                             transition={{ duration: 0.6, delay: 0.2 * tIndex }}
// //                             className="flex flex-col gap-[4px] rounded-md"
// //                           >
// //                             <span className="block font-bold text-[16px]">{task.headTask}</span>
// //                             <div className="bg-gray-100 p-[8px]">
// //                               <span className="font-bold">
// //                                 주요 기능: <span className="font-normal">{task.mainPoint}</span>
// //                               </span>

// //                               <div className="flex flex-col gap-[4px] ml-[8px]">
// //                                 {task.subTask.map((sub, sIndex) => (
// //                                   <motion.div
// //                                     key={`sub-${index}-${tIndex}-${sIndex}`}
// //                                     initial={{ opacity: 0, y: 10 }}
// //                                     whileInView={{ opacity: 1, y: 0 }}
// //                                     viewport={{ once: true, amount: 0.2 }}
// //                                     transition={{ duration: 0.6, delay: 0.2 * sIndex }}
// //                                     className="relative pl-[16px] text-[12px] before:content-['•'] before:absolute before:left-0 before:text-gray-500"
// //                                   >
// //                                     {sub}
// //                                   </motion.div>
// //                                 ))}
// //                               </div>
// //                             </div>
// //                           </motion.div>
// //                         ))}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion } from "framer-motion";
// import { useTranslations } from "next-intl";

// export default function Projects() {
//   const t = useTranslations("projects");
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const ref = useRef<HTMLDivElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const element = scrollRef.current;
//     if (!element) return;

//     const onWheel = (e: WheelEvent) => {
//       const scrollLeft = element.scrollLeft;
//       const maxScrollLeft = element.scrollWidth - element.clientWidth;

//       const isAtStart = scrollLeft <= 0;
//       const isAtEnd = scrollLeft >= maxScrollLeft - 1;

//       const scrollingRight = e.deltaY > 0;
//       const scrollingLeft = e.deltaY < 0;

//       const shouldScrollHorizontally = (scrollingRight && !isAtEnd) || (scrollingLeft && !isAtStart);

//       if (shouldScrollHorizontally) {
//         e.preventDefault();
//         element.scrollLeft += e.deltaY;
//       }
//     };

//     element.addEventListener("wheel", onWheel, { passive: false });
//     return () => element.removeEventListener("wheel", onWheel);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       {
//         threshold: 0.4,
//       }
//     );
//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   const projects = t.raw("projects") as any[];

//   return (
//     <div className="relative h-full flex flex-col justify-center items-center w-full pt-[80px]">
//       <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
//         <div
//           ref={scrollRef}
//           className="flex flex-col min-h-[calc(100vh-200px)] overflow-x-auto scroll-snap-x scroll-snap-mandatory gap-[20px] pt-[40px] items-start justify-start w-full px-[20px] scrollbar-hide"
//         >
//           <div className="w-full min-w-[350px] h-fit flex flex-col items-start justify-start gap-[10px]">
//             <div className="text-[25px] w-full h-fit font-semibold flex flex-col justify-end">
//               <motion.div
//                 ref={ref}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={visible ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6 }}
//                 className="text-[35px] w-full font-semibold"
//               >
//                 <span>{t("title")}</span>
//               </motion.div>
//             </div>
//             <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-[16px] lg:py-[20px] -mx-[12px]">
//               {projects.map((project, index) => (
//                 <motion.div
//                   key={`project-${index}`}
//                   initial={{ opacity: 0, y: 10 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{ duration: 0.6, delay: 0.4 * index }}
//                   className="flex-shrink-0 snap-start w-[70vw] md:w-[450px] h-[calc(100vh-200px)] rounded-lg border bg-white box-border p-[12px] flex flex-col overflow-hidden"
//                 >
//                   <div className="box-border p-[12px] w-full h-full overflow-y-auto flex flex-col gap-[8px]">
//                     <div className="w-fit flex flex-col gap-[4px]">
//                       <div className="subject w-fit flex text-[20px] bg-gray-100 rounded-md p-[4px]">
//                         <span className="font-semibold overflow-hidden line-clamp-2">{project.projectName}</span>
//                       </div>
//                       <div className="flex gap-[5px] w-full">
//                         <div className="subject w-fit flex text-[16px] bg-gray-100 rounded-md p-[4px]">
//                           <span className="font-normal">{project.company}</span>
//                         </div>
//                         <div className="flex gap-[5px] w-fit">
//                           <div className="items-center justify-center w-fit flex gap-[10px] text-[12px] bg-gray-100 rounded-md p-[2px]">
//                             <span>{project.startDate}</span>
//                             <span> - </span>
//                             <span>{project.endDate}</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-full h-fit flex flex-col mt-[4px] gap-[4px] py-[4px]">
//                       <div className="subject text-[12px] w-fit font-semibold">{t("devEnvironment")}</div>
//                       <div className="h-fit text-[12px] w-full bg-gray-100 rounded-md p-[8px]">
//                         <div className="flex flex-col gap-[2px] ml-4">
//                           {project.devEnvironment.map((env: string, idx: number) => (
//                             <motion.div
//                               key={`env-${index}-${idx}`}
//                               initial={{ opacity: 0, y: 10 }}
//                               whileInView={{ opacity: 1, y: 0 }}
//                               viewport={{ once: true, amount: 0.2 }}
//                               transition={{ duration: 0.6, delay: 0.2 * idx }}
//                               className="relative pl-[16px] text-[12px] before:content-['•'] before:absolute before:left-0 before:text-gray-500"
//                             >
//                               {env}
//                             </motion.div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="w-fit h-fit flex flex-col gap-[4px] py-[4px]">
//                       <div className="subject text-[12px] w-fit font-semibold">{t("mainFeature")}</div>
//                       <div className="text-[14px] flex flex-col gap-[12px] border rounded-md px-[8px] py-[12px]">
//                         {project.taskDesc.map((task: any, tIdx: number) => (
//                           <motion.div
//                             key={`task-${index}-${tIdx}`}
//                             initial={{ opacity: 0, y: 10 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true, amount: 0.2 }}
//                             transition={{ duration: 0.6, delay: 0.2 * tIdx }}
//                             className="flex flex-col gap-[4px] rounded-md"
//                           >
//                             <span className="block font-bold text-[16px]">{task.headTask}</span>
//                             <div className="bg-gray-100 p-[8px]">
//                               <span className="font-bold">
//                                 {t("mainPoint")}: <span className="font-normal">{task.mainPoint}</span>
//                               </span>
//                               <div className="flex flex-col gap-[4px] ml-[8px]">
//                                 {task.subTask.map((sub: string, sIdx: number) => (
//                                   <motion.div
//                                     key={`sub-${index}-${tIdx}-${sIdx}`}
//                                     initial={{ opacity: 0, y: 10 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true, amount: 0.2 }}
//                                     transition={{ duration: 0.6, delay: 0.2 * sIdx }}
//                                     className="relative pl-[16px] text-[12px] before:content-['•'] before:absolute before:left-0 before:text-gray-500"
//                                   >
//                                     {sub}
//                                   </motion.div>
//                                 ))}
//                               </div>
//                             </div>
//                           </motion.div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations("projects");
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

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
        }
      },
      {
        threshold: 0.4,
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = t.raw("projects") as any[];
  console.log("projects", projects);
  const title = t("title");
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
                initial={{ opacity: 0, y: 10 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-[35px] w-full font-semibold"
              >
                <span>{title}</span>
              </motion.div>
            </div>
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-[16px] lg:py-[20px] -mx-[12px]">
              {projects.map((project, index) => (
                <motion.div
                  key={`project-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: 0.4 * index }}
                  className="flex-shrink-0 snap-start w-[70vw] md:w-[450px] h-[calc(100vh-200px)] rounded-lg border bg-white box-border p-[12px] flex flex-col overflow-hidden"
                >
                  <div className="box-border p-[12px] w-full h-full overflow-y-auto flex flex-col gap-[8px]">
                    <div className="w-fit flex flex-col gap-[4px]">
                      <div className="subject w-fit flex text-[20px] bg-gray-100 rounded-md p-[4px]">
                        <span className="font-semibold overflow-hidden line-clamp-2">{project.projectName}</span>
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
                      {/* <div className="subject text-[12px] w-fit font-semibold">{t("devEnvironment")}</div> */}
                      <div className="w-full flex flex-wrap gap-[4px] py-[4px]">
                        {Array.isArray(project.skillStacks) &&
                          project.skillStacks.map((skill: string, sIdx: number) => (
                            <span
                              key={`skill-${index}-${sIdx}`}
                              className="text-[10px] bg-gray-200 rounded-full px-[8px] py-[2px] font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                      </div>
                      <div className="h-fit text-[12px] w-full bg-gray-100 rounded-md p-[8px]">
                        <div className="flex flex-col gap-[2px] ml-4">
                          {Array.isArray(project.devEnvironment) &&
                            project.devEnvironment.map((env: string, idx: number) => (
                              <motion.div
                                key={`env-${index}-${idx}`}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.6, delay: 0.1 * idx }}
                                className="relative pl-[16px] text-[12px] before:content-['•'] before:absolute before:left-0 before:text-gray-500"
                              >
                                {env}
                              </motion.div>
                            ))}
                        </div>
                      </div>
                    </div>
                    <div className="w-fit h-fit flex flex-col gap-[4px] py-[4px]">
                      {/* <div className="subject text-[12px] w-fit font-semibold">{t("mainFeature")}</div> */}
                      <div className="text-[14px] flex flex-col gap-[12px] border rounded-md px-[8px] py-[12px]">
                        {Array.isArray(project.taskDesc) &&
                          project.taskDesc.map((task: any, tIdx: number) => (
                            <motion.div
                              key={`task-${index}-${tIdx}`}
                              initial={{ opacity: 0, y: 10 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.6, delay: 0.2 * tIdx }}
                              className="flex flex-col gap-[4px] rounded-md"
                            >
                              <span className="block font-bold text-[16px]">{task.headTask}</span>
                              <div className="bg-gray-100 p-[8px]">
                                <span className="font-bold">
                                  {t("mainPoint")}: <span className="font-normal">{task.mainPoint}</span>
                                </span>
                                <div className="flex flex-col gap-[4px] ml-[8px]">
                                  {task.subTask.map((sub: string, sIdx: number) => (
                                    <motion.div
                                      key={`sub-${index}-${tIdx}-${sIdx}`}
                                      initial={{ opacity: 0, y: 10 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true, amount: 0.2 }}
                                      transition={{ duration: 0.6, delay: 0.2 * sIdx }}
                                      className="relative pl-[16px] text-[12px] before:content-['•'] before:absolute before:left-0 before:text-gray-500"
                                    >
                                      {sub}
                                    </motion.div>
                                  ))}
                                </div>
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
