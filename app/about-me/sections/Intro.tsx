"use client";

import Image from "next/image";
import Link from "next/link";
import CustomContainer from "../../components/CustomContainer";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Button } from "@/components/ui/moving-border";
import downArrowsIcon from "@/public/down arrows.svg";

export default function Intro() {
  return (
    <>
      <CustomContainer>
        {/* <BackgroundRippleEffect /> */}
        <section className="text-left mt-15">
          <h2 className="text-secondary">Kuzuzangpo,</h2>
          <TypewriterEffectSmooth
            words={[
              {
                text: "I'M",
              },
              {
                text: " ",
              },
              {
                text: "KELZANG",
              },
              {
                text: "",
              },
              {
                text: "UGYEN",
              },
              {
                text: " ",
              },
              {
                text: "DORJI.",
              },
            ]}
          />
          <div className="flex items-center justify-left my-5">
            <p className="text-secondary text-justify leading-8">
              Currently, am software developer in Tashi InfoComm Private
              Limited. In my spare time, I enjoy creating contents on various
              platform like YouTube, Instagram and TikTok. My weekends and free
              days are usually spent hiking amidst the majestic landscapes of
              the Land of the Thunder Dragon.
            </p>
          </div>
          <div className="flex gap-4 justify-left my-15">
            <a
              href="/"
              className="cursor-pointer hover:-translate-y-0.5 transition duration-200"
            >
              <Button>Resume</Button>
            </a>
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
            <h6 className="text-secondary">More About Me</h6>
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
