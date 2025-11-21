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
    <span className="flex items-center">
      <span className="absolute w-8 h-8 md:w-10 md:h-10">
        <Image src={icon} alt={title} fill className="object-contain" />{" "}
      </span>
      <h4 className="ml-13 md:ml-15 drop-shadow-lg text-black flex flex-col gap-2 items-center">
        {title}
        <span className="text-secondary font-normal text-xs md:text-sm lg:text-base xl:text-xl">
          {subtitle}
        </span>
      </h4>
    </span>
  );
}
