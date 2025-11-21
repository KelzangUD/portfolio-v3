import Link from "next/link";
import Image from "next/image";
import arrowUpRightIcon from "@/public/Arrow up-right-white.svg";
import { FooterButton } from "../components/FooterButton";
import "@/components/StaggeredMenu.css";
const socialItems = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kelzang-ugyen-dorji-a461b979/",
  },
  { label: "Instagram", link: "https://www.instagram.com/kud_capture/" },
  { label: "YouTube", link: "https://www.youtube.com/@kud_capture" },
];

export default function Footer() {
  return (
    <footer className="bg-[#000] py-10 px-10 md:px-20 xl:py-15 xl:px-30 2xl:py-20 2xl:px-40 text-white">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-4">
        <span className="flex flex-col gap-2 md:gap-6">
          <h3 className="text-secondary">Let's Connect</h3>
          <h3>Beyond Screen</h3>
          <Link
            href="/contact-me"
            className="cursor-pointer hover:-translate-y-1 transition duration-200 mt-4"
          >
            <FooterButton>
              <div className="flex items-center">
                <span className="absolute h-4 w-4 md:w-8 md:h-8">
                  <Image
                    src={arrowUpRightIcon}
                    alt="arrow-up-right"
                    fill
                    className="object-contain"
                  />
                </span>
                <p className="ml-6 md:ml-10">Connect</p>
              </div>
            </FooterButton>
          </Link>
        </span>
        <span className="md:text-right flex flex-col gap-4 md:gap-6">
          <span className="flex flex-col gap-4 ">
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
          <span className="flex items-center md:justify-end w-full md:mt-4">
            {socialItems && socialItems.length > 0 && (
              <div className="flex flex-col" aria-label="Social links">
                <h3>Socials</h3>
                <ul className="sm-socials-list" role="list">
                  {socialItems.map((s, i) => (
                    <li key={s.label + i} className="sm-socials-item">
                      <a
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="sm-socials-link"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </span>
        </span>
      </div>
      <div className="text-center mt-4 md:mt-10">
        <h6>© {new Date().getFullYear()}. Kelzang Ugyen Dorji</h6>
      </div>
    </footer>
  );
}
