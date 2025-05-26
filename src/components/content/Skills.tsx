"use client";

import { motion } from "framer-motion";
import { label } from "framer-motion/client";
import { useTranslations } from "next-intl";
import head from "next/head";
import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const t = useTranslations("skills");

  const tableHead = [
    { key: "language", label: t("tableHead.language") },
    { key: "programming", label: t("tableHead.programming") },
    { key: "framework", label: t("tableHead.framework") },
    { key: "infra", label: t("tableHead.infra") },
    { key: "tools", label: t("tableHead.tools") },
  ];

  const tableContents = t.raw("tableContents") as Record<string, string[]>;
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
                {tableHead.map(({ key, label }, index) => (
                  <tr key={index}>
                    <td>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={visible ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1.2 }}
                      >
                        <span className="font-semibold lg:text-[18px] text-[12px]">{label}</span>
                      </motion.div>
                    </td>
                    <td className="p-[4px]">
                      <div className="flex w-fit flex-wrap gap-[8px]">
                        {(tableContents[key] || []).map((item, idx) => (
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
