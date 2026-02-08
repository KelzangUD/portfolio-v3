"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import CustomContainer from "../components/CustomContainer";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Button } from "@/components/ui/moving-border";
import downArrowsIcon from "@/public/down arrows.svg";

export default function Hero() {
  return (
    <>
      <CustomContainer>
        <BackgroundRippleEffect />
        <section className="text-center mt-30">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h6 className="text-secondary">Hello, I'm Kelzang Ugyen Dorji helllllll</h6>
            <h6 className="text-secondary md:my-1">
              A Full-Stack Developer | IoT Enthusiast | Aspiring Content Creator
            </h6>
          </motion.div>
          <div className="flex items-center justify-center my-15 md:my-25">
            <LayoutTextFlip />
          </div>
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="flex gap-4 justify-center my-15 md:my-15"
          >
            <Link
              href="/about-me"
              className="cursor-pointer hover:-translate-y-0.5 transition duration-200"
            >
              <Button>About Me</Button>
            </Link>
            <Link
              href="/contact-me"
              className="cursor-pointer hover:-translate-y-0.5 transition duration-200"
            >
              <Button>Contact Me</Button>
            </Link>
          </motion.div>
          <div className="flex justify-center items-center gap-2 md:gap-6 animate-bounce">
            <span className="relative h-2 w-2 md:w-4 md:h-4">
              <Image
                src={downArrowsIcon}
                alt="arrow"
                fill
                className="object-contain"
              />
            </span>
            <h6 className="text-secondary">See My Works</h6>
            <span className="relative h-2 w-2 md:w-4 md:h-4">
              <Image
                src={downArrowsIcon}
                alt="arrow"
                fill
                className="object-contain"
              />
            </span>
          </div>
        </section>
      </CustomContainer>
    </>
  );
}
