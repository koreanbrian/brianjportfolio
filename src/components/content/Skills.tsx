"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const tableHead: string[] = [
    "언어",
    "프로그래밍 언어",
    "프레임워크 / 라이브러리",
    "Infrastructure & DB",
    "Tools & IDEs",
  ];
  const tableContents: { [key: string]: string[] } = {
    언어: ["영어[상 / 미국유학]", "일본어[JLPT N2]"],
    "프로그래밍 언어": ["TypeScript", "JavaScript", "Java", "HTML / CSS", "PHP", "Python"],
    "프레임워크 / 라이브러리": ["React.js", "Next.js with TypeScript", "Spring Framework (MVC)", "CodeIgniter 4"],
    "Infrastructure & DB": ["MySQL", "PostGreSQL", "MongoDB", "Redis", "MyBatis", "Docker", "Apache Tomcat"],
    "Tools & IDEs": ["Adobe Photoshop", "PyCharm", "IntelliJ IDEA", "Eclipse", "VSCode"],
  };
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const hasShown = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasShown.current) {
          setVisible(true);
          hasShown.current = true;
        }
      },
      {
        threshold: 0.7,
        rootMargin: "0px 0px -20% 0px",
      }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className="relative h-full flex flex-col justify-center items-center w-full">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
        <div className="flex flex-col  min-h-screen gap-[20px] items-center justify-center w-full px-[20px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[35px] w-full font-semibold"
          >
            <span>Skills</span>
          </motion.div>
          <div className="text-[18px] flex flex-col w-full text-gray-700 gap-[20px]">
            <table>
              <tbody>
                {tableHead.map((head, index) => (
                  <tr key={index}>
                    <td>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2 }}
                      >
                        <span className="font-semibold">{head}</span>
                      </motion.div>
                    </td>
                    <td className="p-[4px]">
                      <div className="flex w-fit flex-wrap gap-[4px]">
                        {(tableContents[head] || []).map((item, idx) => (
                          <motion.span
                            key={`skill-${index}-${idx}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.9, delay: 0.2 * idx }}
                            className="px-[8px] py-[4px] bg-gray-400 rounded-md text-[12px] text-white w-fit"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
