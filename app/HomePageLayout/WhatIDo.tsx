import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import { WhatIDoTextFlip } from "../components/WhatIDoTextFlip";
import { whatIDo } from "../data/whatIDo";
import AnimatedList from "@/components/ui/AnimatedList";

export default function WhatIDo() {
  return (
    <CustomContainer>
      <section>
        <Title title="What I Can Do For You" />
        <div className="grid md:grid-cols-2 md:justify-around gap-6 mt-5 md:mt-15">
          <div className="flex items-center">
            <WhatIDoTextFlip />
          </div>
          <div className="flex flex-col gap-6 md:gap-10 justify-center">
            <AnimatedList
              items={whatIDo}
              enableArrowNavigation={true}
              displayScrollbar={true}
            />
          </div>
        </div>
      </section>
    </CustomContainer>
  );
}
