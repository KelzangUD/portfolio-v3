"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const ReactOut = ({
  firstWords = "Reach Out For",
  lastWords = ["Collaboration", "Questions", "Just a Friendly Hello!"],
  duration = 3000,
}: {
  firstWords?: string;
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
    <div className="md:gap-4 flex flex-col">
      <div>
        <motion.span
          layoutId="subtext"
          className="font-bold tracking-tight drop-shadow-lg text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        >
          {firstWords}
        </motion.span>
      </div>
      <motion.span
        layout
        className="relative w-fit font-bold tracking-tight text-secondary drop-shadow-lg text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ filter: "blur(10px)" }}
            animate={{
              filter: "blur(0px)",
            }}
            exit={{ filter: "blur(10px)", opacity: 0 }}
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
  );
};
