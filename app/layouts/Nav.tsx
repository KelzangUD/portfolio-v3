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
    // <nav className="px-3 backdrop-blur-2xl bg-black/5 flex justify-between justify-items-center w-8/10 p-2 border border-gray-300 rounded-full items-center fixed top-5 mx-auto left-0 right-0 z-100">
    //   <Link href="/">
    //     <div className="relative w-10 h-10">
    //       <Image src={logoIcon} alt="logo" fill className="object-contain" />
    //     </div>
    //   </Link>
    //   <div className="flex gap-4">
    //     <Link
    //       href="/about-me"
    //       className="relative px-4 py-2 text-black hover:bg-white rounded-full"
    //     >
    //       About Me
    //     </Link>
    //     <Link
    //       href="/projects"
    //       className="relative px-4 py-2 text-black hover:bg-white rounded-full"
    //     >
    //       Projects
    //     </Link>
    //     <Link
    //       href="/"
    //       className="relative px-4 py-2 text-black hover:bg-white rounded-full"
    //     >
    //       Blogs
    //     </Link>
    //     {/* <Link
    //       href="/"
    //       className="relative px-4 py-2 text-black hover:bg-white rounded-full"
    //     >
    //       Vlogs
    //     </Link> */}
    //     {/* <Link
    //       href="/"
    //       className="relative px-4 py-2 text-black hover:bg-white rounded-full"
    //     >
    //       Gallery
    //     </Link> */}
    //   </div>
    //   <div>
    //     <Link
    //       href="/contact-me"
    //       className="rounded-full bg-black button text-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
    //     >
    //       <Button>Contact Me</Button>
    //     </Link>
    //   </div>
    // </nav>
  );
}
