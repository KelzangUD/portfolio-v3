"use client";

import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

export default function Spinner({ number }: { number: number }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const count = useMotionValue(0);
  const rounded = useTransform(() => Math.round(count.get()));

  useEffect(() => {
    if (!isInView) return;

    animate(count, number, {
      duration: 1,
      ease: "easeOut",
    });
  }, [isInView, number]);

  return (
    <motion.pre ref={ref} className="text-2xl md:text-8xl font-normal">
      <motion.span>{rounded}</motion.span>
    </motion.pre>
  );
}
