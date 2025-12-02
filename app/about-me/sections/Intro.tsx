"use client";

import Image from "next/image";
import Link from "next/link";
import CustomContainer from "../../components/CustomContainer";
import { Button } from "@/components/ui/moving-border";
import downArrowsIcon from "@/public/down arrows.svg";
import { motion } from "motion/react";

export default function Intro() {
  return (
    <>
      <CustomContainer>
        <section className="text-left mt-20">
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <h1 className="text-secondary">Kuzuzangpo,</h1>
            <h1 className="md:my-4">I'm Kelzang Ugyen Dorji</h1>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="flex items-center justify-left my-5 md:my-15"
          >
            <p className="text-secondary text-justify leading-5 md:leading-8">
              Currently, am software developer in Tashi InfoComm Private
              Limited. In my spare time, I enjoy creating contents on various
              platform like YouTube, Instagram and TikTok. My weekends and free
              days are usually spent hiking amidst the majestic landscapes of
              the Land of the Thunder Dragon.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="flex gap-4 justify-left my-10 md:my-15"
          >
            <a
              href="/Resume.pdf"
              target="_blank"
              className="cursor-pointer hover:-translate-y-0.5 transition duration-200"
            >
              <Button>Resume</Button>
            </a>
            <Link
              href="/contact-me"
              className="cursor-pointer hover:-translate-y-0.5 transition duration-200"
            >
              <Button>Contact Me</Button>
            </Link>
          </motion.div>
          <div className="flex md:justify-center items-center gap-4 md:gap-6 animate-bounce">
            <span className="relative w-2 h-2 md:w-4 md:h-4">
              <Image
                src={downArrowsIcon}
                alt="arrow"
                fill
                className="object-contain"
              />
            </span>
            <h6 className="text-secondary">More About Me</h6>
            <span className="relative w-2 h-2 md:w-4 md:h-4">
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
