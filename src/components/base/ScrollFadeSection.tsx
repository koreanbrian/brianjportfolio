"use client";

import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ScrollFadeSection({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

  const controls = useAnimation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut", delay: 0.1 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
