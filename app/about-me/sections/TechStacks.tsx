import CustomContainer from "@/app/components/CustomContainer";
import Title from "@/components/ui/Title";
import { techStacks } from "@/app/data/techStacks";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function TechStacks() {
  return (
    <CustomContainer>
      <section>
        <Title title="Tools I Use To Turn Ideas Into Reality" />
        <div className="my-15 flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={techStacks}
            direction="left"
            speed="normal"
          />
        </div>
      </section>
    </CustomContainer>
  );
}
