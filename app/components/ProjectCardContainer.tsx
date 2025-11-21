import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import arrowUpRightIcon from "@/public/arrow-up-right.svg";

export default function ProjectCardContainer({
  mockUp,
  title,
  about,
  href,
}: {
  mockUp: StaticImageData;
  title: string;
  about: string;
  href: string;
}) {
  return (
    <CardContainer className="rounded-xl w-full bg-gray-100 relative border-gray-100 h-auto overflow-hidden">
      <CardBody className="w-full">
        <CardItem
          translateZ="100"
          className="relative w-full h-50 sm:h-70 md:h-50 2xl:h-100 rounded-2xl overflow-hidden"
        >
          <Image src={mockUp} alt={title} fill className="object-cover" />
        </CardItem>
        <div className="flex justify-between items-center p-4">
          <span>
            <p className="text-sm md:text-base font-semibold">{title}</p>
            <p className="text-sm md:text-base text-secondary">{about}</p>
          </span>
          <span>
            <Link href={href} className="flex gap-2 items-center hover:-translate-y-2 transition duration-200">
              <span className="relative h-4 w-4 md:w-6 md:h-6">
                <Image
                  src={arrowUpRightIcon}
                  alt="arrow up right"
                  fill
                  className="object-contain"
                />
              </span>
              <p className="text-sm md:text-base text-secondary font-semibold">
                View
              </p>
            </Link>
          </span>
        </div>
      </CardBody>
    </CardContainer>
  );
}
