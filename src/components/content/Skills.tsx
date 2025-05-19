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
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  });
  return (
    <div ref={ref} className="relative h-full flex flex-col justify-center items-center w-full">
      <div className="absolute h-full justify-center items-center px-[20px] gap-[20px] w-full">
        <div className="flex flex-col  min-h-screen gap-[20px] items-center justify-center w-full px-[20px]">
          <div className="text-[35px] w-full font-semibold">
            <motion.div
              key="subject"
              initial={{ opacity: 0, y: 10 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[35px] w-full font-semibold"
            >
              <span>Skills</span>
            </motion.div>
          </div>
          <div className="text-[20px] flex flex-col w-full text-gray-700 gap-[20px]">
            <table>
              <tbody>
                {tableHead.map((head, index) => (
                  <tr key={index}>
                    <td>
                      <motion.div
                        key="skillSet"
                        initial={{ opacity: 0, y: 10 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="flex flex-wrap gap-[8px]"
                      >
                        <span className="font-semibold">{head}</span>
                      </motion.div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex flex-wrap gap-[8px]">
                        {(tableContents[head] || []).map((item, idx) => (
                          <motion.div
                            key={idx + "skills"}
                            initial={{ opacity: 0, y: 10 }}
                            animate={visible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 * idx }}
                            className="flex flex-wrap gap-[8px]"
                          >
                            <span key={idx} className="px-2 py-1 bg-gray-200 rounded-md text-sm">
                              {item}
                            </span>
                          </motion.div>
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
