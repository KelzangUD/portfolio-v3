import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import ProjectCardContainer from "../components/ProjectCardContainer";
import { Placeholder } from "@/components/ui/Placeholder";
import { featuredProjects } from "../data/featuredProject";

export default function ContactMe() {
  return (
    <CustomContainer>
      <section className="mt-30">
        <Title title="Ideas Brought To Life" />
        <div className="md:mt-15 max-w-4/10">
          <Placeholder />
        </div>
        <div className="grid md:grid-cols-2 md:gap-6 2xl:gap-8 my-15">
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
