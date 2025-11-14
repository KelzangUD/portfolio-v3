"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import arrowUpRightIcon from "@/public/arrow-up-right.svg";

export const DirectionAwareHover = ({
  imageUrl,
  imageClassName,
  className,
}: {
  imageUrl: StaticImageData;
  imageClassName?: string;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const [direction, setDirection] = useState<
    "top" | "bottom" | "left" | "right" | string
  >("left");

  const handleMouseEnter = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!ref.current) return;

    const direction = getDirection(event, ref.current);
    console.log("direction", direction);
    switch (direction) {
      case 0:
        setDirection("top");
        break;
      case 1:
        setDirection("right");
        break;
      case 2:
        setDirection("bottom");
        break;
      case 3:
        setDirection("left");
        break;
      default:
        setDirection("left");
        break;
    }
  };

  const getDirection = (
    ev: React.MouseEvent<HTMLDivElement, MouseEvent>,
    obj: HTMLElement
  ) => {
    const { width: w, height: h, left, top } = obj.getBoundingClientRect();
    const x = ev.clientX - left - (w / 2) * (w > h ? h / w : 1);
    const y = ev.clientY - top - (h / 2) * (h > w ? w / h : 1);
    const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
    return d;
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      ref={ref}
      className={cn(
        "h-full w-full rounded-lg overflow-hidden group/card relative",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-80 w-full rounded-2xl overflow-hidden"
          initial="initial"
          whileHover={direction}
          exit="exit"
        >
          <motion.div className="group-hover/card:block hidden absolute w-full h-full bg-black/40 z-10 transition duration-500" />
          <motion.div
            variants={variants}
            className="h-full w-full relative bg-gray-50 dark:bg-black"
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          >
            <Image
              alt="image"
              className={cn("object-cover scale-[1.15]", imageClassName)}
              fill
              src={imageUrl}
            />
          </motion.div>
          <motion.div className="flex justify-between items-center">
            <span>
              <p className="text-sm md:text-base font-semibold">
                Jomolhari Vacation
              </p>
            </span>
            <span>
              <Link
                href="/"
                className="flex gap-2 items-center hover:-translate-y-2 transition duration-200"
              >
                <span className="relative w-6 h-6">
                  <Image
                    src={arrowUpRightIcon}
                    alt="arrow up right"
                    fill
                    className="object-contain"
                  />
                </span>
                <p className="text-sm md:text-base text-secondary font-semibold">
                  View
                </p>
              </Link>
            </span>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

const variants = {
  initial: {
    x: 0,
  },

  exit: {
    x: 0,
    y: 0,
  },
  top: {
    y: 20,
  },
  bottom: {
    y: -20,
  },
  left: {
    x: 20,
  },
  right: {
    x: -20,
  },
};

const textVariants = {
  initial: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  exit: {
    y: 0,
    x: 0,
    opacity: 0,
  },
  top: {
    y: -20,
    opacity: 1,
  },
  bottom: {
    y: 2,
    opacity: 1,
  },
  left: {
    x: -2,
    opacity: 1,
  },
  right: {
    x: 20,
    opacity: 1,
  },
};
