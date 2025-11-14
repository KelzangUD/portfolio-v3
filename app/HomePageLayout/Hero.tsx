"use client";
import Link from "next/link";
import Image from "next/image";
import CustomContainer from "../components/CustomContainer";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { Button } from "@/components/ui/moving-border";
import { motion } from "motion/react";
import downArrowsIcon from "@/public/down arrows.svg";

export default function Hero() {
  return (
    <>
      <CustomContainer>
        <BackgroundRippleEffect />
        <section className="text-center mt-15">
          <h6 className="text-secondary">Hello,I'm Kelzang Ugyen Dorji</h6>
          <h6 className="text-secondary my-1">A Full-Stack Developer | IoT Enthusiast | Aspiring Content Creator</h6>
          <div className="flex items-center justify-center my-25">
            <motion.div className="">
              <LayoutTextFlip />
            </motion.div>
          </div>
          <div className="flex gap-4 justify-center my-15">
            <Link
              href="/"
              className="cursor-pointer hover:-translate-y-0.5 transition duration-200"
            >
              <Button>About Me</Button>
            </Link>
            <Link
              href="/"
              className="cursor-pointer hover:-translate-y-0.5 transition duration-200"
            >
              <Button>Contact Me</Button>
            </Link>
          </div>
          <div className="flex justify-center items-center gap-6 animate-bounce">
            <span className="relative w-4 h-4">
              <Image
                src={downArrowsIcon}
                alt="arrow"
                fill
                className="object-contain"
              />
            </span>
            <h6 className="text-secondary">See My Works</h6>
            <span className="relative w-4 h-4">
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
