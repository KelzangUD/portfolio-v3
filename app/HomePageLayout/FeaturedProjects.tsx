import Image from "next/image";
import Link from "next/link";
import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import { featuredProjects } from "../data/featuredProject";
import ProjectCardContainer from "../components/ProjectCardContainer";
import arrowUpRightIcon from "@/public/arrow-up-right.svg";

export default function FeaturedProjects() {
  return (
    <CustomContainer>
      <section>
        <Title title="Featured Projects" />
        <div className="grid md:grid-cols-2 gap-6 2xl:gap-8 my-5 md:my-15">
          {featuredProjects?.map((project) => (
            <ProjectCardContainer
              key={project?.title}
              mockUp={project?.mockUp}
              title={project?.title}
              about={project?.about}
              href={project?.href}
            />
          ))}
        </div>
        <Link
          href="/projects"
          className="flex justify-center items-center gap-2 hover:-translate-y-0.5 transition duration-200"
        >
          <h6 className="text-secondary">View All Works</h6>
          <span className="relative h-4 w-4 md:w-7 md:h-7">
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
