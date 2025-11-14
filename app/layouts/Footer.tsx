import Link from "next/link";
import Image from "next/image";
import arrowUpRightIcon from "@/public/Arrow up-right-white.svg";
import { FooterButton } from "../components/FooterButton";
import { FloatingDock } from "@/components/ui/floating-dock";
import linkedInIcon from "@/public/linkedIn.svg";
import instagramIcon from "@/public/instagram.svg";
import youtubeIcon from "@/public/youtube.svg";

const links = [
  {
    title: "LinkedIn",
    icon: (
      <span className="relative w-7 h-7">
        <Image
          src={linkedInIcon}
          alt="LinkedIn"
          fill
          className="object-contain"
        />
      </span>
    ),
    href: "https://www.linkedin.com/in/kelzang-ugyen-dorji-a461b979/",
  },

  {
    title: "Instagram",
    icon: (
      <span className="relative w-7 h-7">
        <Image
          src={instagramIcon}
          alt="Instagram"
          fill
          className="object-contain"
        />
      </span>
    ),
    href: "https://www.instagram.com/kud_capture/",
  },
  {
    title: "YouTube",
    icon: (
      <span className="relative w-7 h-7">
        <Image src={youtubeIcon} alt="yt" fill className="object-contain" />
      </span>
    ),
    href: "https://www.youtube.com/@kud_capture",
  },
];

export default function Footer() {
  return (
    <footer className="bg-black py-5 px-10 md:py-10 md:px-20 xl:py-15 xl:px-30 2xl:py-20 2xl:px-40 text-white">
      <div className="flex justify-between">
        <span className="flex flex-col gap-6">
          <h3 className="text-secondary">Let's Connect</h3>
          <h3>Beyond Screen</h3>
          <Link
            href="/contact-me"
            className="cursor-pointer hover:-translate-y-1 transition duration-200"
          >
            <FooterButton>
              <div className="flex items-center">
                <span className="absolute w-8 h-8">
                  <Image
                    src={arrowUpRightIcon}
                    alt="arrow-up-right"
                    fill
                    className="object-contain"
                  />
                </span>
                <p className="ml-10">Connect</p>
              </div>
            </FooterButton>
          </Link>
        </span>
        <span className="text-right flex flex-col gap-6">
          <span className="flex flex-col gap-4">
            <a
              href="mailto:kelzangugyendorji.dev@gmail.com?subject=Connect!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="cursor-pointer hover:-translate-y-1 transition duration-200">
                <span className="font-bold text-secondary">Mail: </span>
                kelzangugyendorji.dev@gmail.com
              </h6>
            </a>
            <a
              href="https://wa.me/+97577714212"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h6 className="cursor-pointer hover:-translate-y-1 transition duration-200">
                <span className="font-bold text-secondary">WhatsApp: </span>+975
                77714212
              </h6>
            </a>
          </span>
          <span>
            <h3 className="text-secondary">Social:</h3>
            <span className="flex items-center justify-end w-full mt-4">
              <FloatingDock mobileClassName="translate-y-20" items={links} />
            </span>
          </span>
        </span>
      </div>
      <div className="text-center">
        <h6>© 2025. Kelzang Ugyen Dorji</h6>
      </div>
    </footer>
  );
}
