import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/public/logo.svg";
import { Button } from "@/components/ui/moving-border";

export default function Nav() {
  return (
    <nav className="px-3 backdrop-blur-2xl bg-black/5 flex justify-between justify-items-center w-8/10 p-2 border border-gray-300 rounded-full items-center fixed top-5 mx-auto left-0 right-0 z-100">
      <Link href="/">
        <div className="relative w-10 h-10">
          <Image src={logoIcon} alt="logo" fill className="object-contain" />
        </div>
      </Link>
      <div className="flex gap-6">
        <Link
          href="/about-me"
          className="relative px-4 py-2 text-black hover:bg-white rounded-full"
        >
          About Me
        </Link>
        <Link
          href="/"
          className="relative px-4 py-2 text-black hover:bg-white rounded-full"
        >
          Projects
        </Link>
        <Link
          href="/"
          className="relative px-4 py-2 text-black hover:bg-white rounded-full"
        >
          Blogs
        </Link>
        <Link
          href="/"
          className="relative px-4 py-2 text-black hover:bg-white rounded-full"
        >
          Vlogs
        </Link>
        <Link
          href="/"
          className="relative px-4 py-2 text-black hover:bg-white rounded-full"
        >
          Gallery
        </Link>
      </div>
      <div>
        <Link
          href="/contact-me"
          className="rounded-full bg-black button text-white text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center"
        >
          <Button>Contact Me</Button>
        </Link>
      </div>
    </nav>
  );
}
