"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("about");
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
        <div className="flex flex-col min-h-screen gap-[20px] items-center justify-center w-full px-[20px]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-[35px] w-full font-semibold"
          >
            <span>{t("title")}</span>
          </motion.div>
          <div className="text-[20px] flex flex-col w-full text-gray-700 gap-[20px]">
            <motion.div
              key="paragraph1"
              initial={{ opacity: 0, y: 10 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="font-light" style={{ whiteSpace: "pre-line" }}>
                {t("paragraph1")}
              </span>
            </motion.div>
            <motion.div
              key="paragraph2"
              initial={{ opacity: 0, y: 10 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <span className="font-light" style={{ whiteSpace: "pre-line" }}>
                {t("paragraph2")}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
