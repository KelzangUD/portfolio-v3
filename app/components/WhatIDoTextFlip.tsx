"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export const WhatIDoTextFlip = ({
  firstWords = ["Code", "Create", "Connect"],
  secondWord = "The",
  lastWords = ["Product", "Story", "Experience"],
  duration = 3000,
}: {
  firstWords?: string[];
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
          className="font-bold text-black tracking-tight drop-shadow-lg text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
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
              {firstWords[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.span>
      </div>
      <div>
        <motion.span
          layoutId="subtext"
          className="font-bold text-secondary tracking-tight drop-shadow-lg text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
        >
          {secondWord}
        </motion.span>
        <motion.span
          layout
          className="ml-5 relative w-fit py-2 font-bold tracking-tight text-secondary drop-shadow-lg text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
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
