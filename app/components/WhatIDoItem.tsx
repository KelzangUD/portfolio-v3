import Image, { StaticImageData } from "next/image";

export default function WhatIDoItem({
  icon,
  title,
}: {
  icon: StaticImageData;
  title: string;
}) {
  return (
    <span className="flex items-center">
      <span className="absolute w-10 h-10">
        <Image src={icon} alt={title} fill className="object-contain" />{" "}
      </span>
      <h4 className="ml-15 drop-shadow-lg text-black">{title}</h4>
    </span>
  );
}
