import Image from "next/image";
import squareIcon from "@/public/square.svg";

export default function Title({ title }: { title: string }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative w-3 h-3 md:w-4 md:h-4">
        <Image src={squareIcon} alt="square" fill className="object-contain" />
      </div>
      <div>
        <p className="text-black text-base md:text-xl">{title}</p>
      </div>
    </div>
  );
}
