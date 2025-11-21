"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const LayoutTextFlip = ({
  firstWord = "Exploring With",
  lastWords = ["Purpose", "Passion"],
  duration = 3000,
}: {
  firstWord?: string;
  secondWord?: string;
  lastWords?: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lastWords.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col md:gap-4">
      <div>
        <motion.span
          layout
          style={{ fontFamily: "var(--font-p)" }}
          className="font-semibold tracking-tight drop-shadow-lg text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        >
          {firstWord}
        </motion.span>
      </div>
      <div>
        <motion.span
          layout
          style={{ fontFamily: "var(--font-p)" }}
          className="relative w-fit py-2 font-bold tracking-tight text-secondary drop-shadow-lg text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        >
          <AnimatePresence mode="popLayout">
            <motion.span
              key={currentIndex}
              initial={{ y: -40, filter: "blur(10px)" }}
              animate={{
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{ y: 50, filter: "blur(10px)", opacity: 0 }}
              transition={{
                duration: 0.5,
              }}
              className={cn("inline-block whitespace-nowrap")}
            >
              {lastWords[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      </div>
    </div>
  );
};
