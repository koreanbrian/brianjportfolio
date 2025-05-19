"use client";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ScrollFadeSection({
  children,
  isFirst = false,
  isLast = false,
}: {
  children: React.ReactNode;
  isFirst?: boolean;
  isLast?: boolean;
}) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    rootMargin: isFirst ? "0px 0px -20% 0px" : isLast ? "-20% 0px 0px 0px" : "-40% 0px -40% 0px",
    triggerOnce: true,
  });
  const controls = useAnimation();

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: isFirst ? "0%" : isLast ? "20%" : "40%",
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1.0, ease: "easeOut" },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
