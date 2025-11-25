import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import ProjectCardContainer from "../components/ProjectCardContainer";
import { featuredProjects } from "../data/featuredProject";

export default function Projects() {
  return (
    <CustomContainer>
      <section className="mt-20">
        <Title title="Ideas Brought To Life" />
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
      </section>
    </CustomContainer>
  );
}
