"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/moving-border";
import logoIcon from "@/public/logo-black.svg";

export default function NotFound() {
  return (
    <section className="flex justify-center items-center  min-h-[80vh]">
      <div className="text-center">
        <motion.div
          className="flex flex-col"
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h6 className="font-normal">PAGE NOT FOUND!</h6>
        </motion.div>
        <motion.div
          initial={{ opacity: 0.7, scale: 0.7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="flex items-center justify-center my-2"
        >
          <span className="text-9xl font-semibold">4</span>
          <span className="relative w-30 h-30 ml-0.5">
            <Image src={logoIcon} alt="logo" fill className="object-fit" />
          </span>
          <span className="text-9xl font-semibold">4</span>
        </motion.div>
        <motion.div
          initial={{ y: 5, scale: 0.9 }}
          whileInView={{ y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
