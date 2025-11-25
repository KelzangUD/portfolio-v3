import CustomContainer from "@/app/components/CustomContainer";
import Title from "@/components/ui/Title";
import { techStacks } from "@/app/data/techStacks";
import LogoLoop from "@/components/ui/LogoLoop";

export default function TechStacks() {
  return (
    <CustomContainer>
      <section>
        <Title title="Tools I Use To Turn Ideas Into Reality" />
        <div className="mt-5 md:mt-15">
          <LogoLoop logos={techStacks} />
        </div>
      </section>
    </CustomContainer>
  );
}
