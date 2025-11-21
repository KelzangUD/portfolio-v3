"use client";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { useRef, useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import arrowUpRightIcon from "@/public/arrow-up-right.svg";

export const VideoCard = ({
  imageUrl,
  imageClassName,
  className,
  title,
  subtitle,
  href,
}: {
  imageUrl: StaticImageData;
  imageClassName?: string;
  className?: string;
  title: string;
  subtitle?: string;
  href: string;
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
        "h-full w-full bg-gray-100 rounded-lg overflow-hidden group/card relative shadow-xs ",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative h-50 sm:h-80 md:h-45 2xl:h-120 w-full rounded-2xl overflow-hidden"
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
        </motion.div>
      </AnimatePresence>
      <motion.div className="flex justify-between gap-2 items-center p-4">
        <span>
          <p className="text-sm md:text-base font-semibold">{title}</p>
          <p className="text-sm md:text-base text-secondary">{subtitle}</p>
        </span>
        <span>
          <Link
            href={href}
            className="flex gap-2 items-center hover:-translate-y-2 transition duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative h-4 w-4 md:w-6 md:h-6">
              <Image
                src={arrowUpRightIcon}
                alt="arrow up right"
                fill
                className="object-contain"
              />
            </span>
            <p className="text-sm md:text-base text-secondary font-semibold">
              Watch
            </p>
          </Link>
        </span>
      </motion.div>
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
