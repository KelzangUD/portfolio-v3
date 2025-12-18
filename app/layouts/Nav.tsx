// import Image from "next/image";
// import Link from "next/link";
// import logoIcon from "@/public/logo.svg";
// import { Button } from "@/components/ui/moving-border";
import StaggeredMenu from "@/components/StaggeredMenu";

const menuItems = [
  { label: "Home", ariaLabel: "Go to home page", link: "/" },
  { label: "About", ariaLabel: "Learn about Me", link: "/about-me" },
  { label: "Projects", ariaLabel: "Check out my works", link: "/projects" },
  { label: "Blogs", ariaLabel: "Read my blogs", link: "/blogs" },
  { label: "Contact", ariaLabel: "Get in touch", link: "/contact-me" },
];

const socialItems = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/kelzang-ugyen-dorji-a461b979/",
  },
  { label: "Instagram", link: "https://www.instagram.com/kud_capture/" },
  { label: "YouTube", link: "https://www.youtube.com/@kud_capture" },
];

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        zIndex: "50",
        top: "0",
        pointerEvents: "none",
      }}
      className="w-screen h-screen bg-transparent"
    >
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        // displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={["#B19EEF", "#5227FF"]}
        accentColor="#ff6b6b"
      />
    </nav>
  );
}
