"use client";

import { motion } from "motion/react";
import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import { ReactOut } from "./components/ReachOut";
import { ContactForm } from "./components/ContactForm";

export default function ContactMe() {
  return (
    <CustomContainer>
      <section className="mt-25">
        <Title title="Let’s Connect" />
        <div className="grid xl:grid-cols-2 gap-6 2xl:gap-8 my-5">
          <motion.div
            initial={{ x: -60 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="flex items-center"
          >
            <ReactOut />
          </motion.div>
          <motion.div
            initial={{ x: 60 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </CustomContainer>
  );
}
