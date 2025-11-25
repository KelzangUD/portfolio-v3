import Image, { StaticImageData } from "next/image";

export default function WhatIDoItem({
  icon,
  title,
  subtitle,
}: {
  icon: StaticImageData;
  title: string;
  subtitle?: string;
}) {
  return (
    <span className="flex items-center align-center">
      <span className="relative w-8 h-8 md:w-10 md:h-10">
        <Image src={icon} alt={title} fill className="object-contain" />{" "}
      </span>
      <span className="ml-4 md:ml-10 gap-2 flex flex-col">
        <h4 className="drop-shadow-lg text-black mt-2">
          {title}
        </h4>
        <p className="text-secondary font-normal text-xs md:text-sm lg:text-base xl:text-xl">
          {subtitle}
        </p>
      </span>
    </span>
  );
}
