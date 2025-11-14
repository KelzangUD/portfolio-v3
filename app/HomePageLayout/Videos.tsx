import Image from "next/image";
import Link from "next/link";
import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import { VideoCard } from "../components/VideoCard";
import JomolhariTrekCover from "@/public/Jomolhari Trek.png";
import DungtshoHikeCover from "@/public/Dungtsho Hike.png";
import arrowUpRightIcon from "@/public/arrow-up-right.svg";

export default function Videos() {
  return (
    <CustomContainer>
      <section>
        <Title title="Through My Lens" />
        <div className="grid md:grid-cols-2 my-15 gap-8">
          <VideoCard
            imageUrl={JomolhariTrekCover}
            title="Jomolhari Vacation"
            subtitle="Bhutan's Most Popular Trek"
            href="https://www.youtube.com/watch?v=tyHCvtFkwNg&t=129s"
          />
          <VideoCard
            imageUrl={DungtshoHikeCover}
            title="Dungtsho Hike"
            subtitle="Journey  to Bhutan's Sacred Conch Lake"
            href="https://www.youtube.com/watch?v=ZM9YXHwPriQ&t=1s"
          />
        </div>
        <Link
          href="/vlogs"
          className="flex justify-center items-center gap-2 hover:-translate-y-0.5 transition duration-200"
        >
          <h6 className="text-secondary">Watch Videos</h6>
          <span className="relative w-7 h-7">
            <Image
              src={arrowUpRightIcon}
              alt="arrow up right"
              fill
              objectFit="content"
            />
          </span>
        </Link>
      </section>
    </CustomContainer>
  );
}
