"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { div } from "framer-motion/client";

export default function Intro() {
  const t = useTranslations("intro");
  const locale = useLocale();
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
        <div className="flex flex-col lg:flex-row min-h-screen gap-[20px] items-center justify-center w-full px-[20px]">
          <div className="min-w-[250px] h-full flex items-center justify-center transition-all duration-75">
            <img className="rounded-lg" width="200" src="/img/BrianProfilePhoto.jpg" />
          </div>
          <div className="w-fit max-w-[360px] flex flex-col items-center justify-center gap-[20px]">
            <div className="text-[23px] w-fit lg:w-full font-semibold flex flex-col justify-end">
              <div className="flex gap-[6px]">
                <span className="h-fit font-normal">{t("hello")}</span>
              </div>
              <div className="min-h-[35px] max-w-[320px]">
                <AnimatePresence mode="wait">
                  {!showName ? (
                    <>
                      <div className="flex gap-[4px]">
                        <span className="font-light w-[60px] h-fit">{t("iAm")}</span>
                        <motion.div
                          key="engineer"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.6 }}
                          className="w-fit flex gap-[4px] justify-start"
                        >
                          <span className="font-semibold border-b border-b-black w-[270px] h-[35px] flex"></span>
                        </motion.div>
                      </div>
                      <span className="font-light w-[60px] text-[25px] ">{t("end")}</span>
                    </>
                  ) : (
                    <>
                      <div className="flex gap-[4px]">
                        <span className="font-light w-[60px] h-fit">{t("iAm")}</span>
                        <div className="w-fit flex gap-[4px] justify-start">
                          <span className="font-semibold border-b border-b-black w-[270px] h-[35px] flex text-center">
                            <motion.div
                              key="name"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              transition={{ duration: 0.6 }}
                              className={`w-full flex text-center gap-[12px] items-center justify-center ${
                                locale === "ko" ? "text-[24px]" : "text-[16px]"
                              }`}
                            >
                              <strong>{t("developer")}</strong>
                              <span className="font-normal">{t("name")}</span>
                            </motion.div>
                          </span>
                        </div>
                      </div>
                      <span className="font-light w-[60px] text-[25px] ">{t("end")}</span>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="w-full flex flex-col gap-[4px] text-[14px]">
              <div className="flex gap-[4px] w-full">
                <span className="font-light w-[30px]">{t("phone")}</span>
                <span className="w-full font-light">
                  <a className="cryptedphone" data-name="+82 10" data-domain="5046" data-tld="5137">
                    <i></i>
                  </a>
                </span>
              </div>
              <div className="flex gap-[4px] w-full">
                <span className="font-light w-[30px]">{t("email")}</span>
                <span className="w-full font-light">
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
              <span className="w-full font-semibold">{t("university")}</span>
              <span className="w-full font-normal text-[13px]">{t("universityKorean")}</span>
              <div className="flex gap-[12px] w-full">
                <span className="w-[35%] font-light min-w-[150px]">{t("csPeriod")}</span>
                <span className="w-full">{t("csDegree")}</span>
              </div>
              <div className="flex gap-[12px] w-full">
                <span className="w-[35%] font-light min-w-[150px]">{t("hmPeriod")}</span>
                <span className="w-full">
                  {t("hmDegree")
                    .split("\n")
                    .map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
