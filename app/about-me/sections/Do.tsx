import CustomContainer from "@/app/components/CustomContainer";
import Title from "@/components/ui/Title";
import serviceBg from "@/public/service_bg.jpg";
import WhatIDoItem from "@/app/components/WhatIDoItem";
import appIcon from "@/public/code.svg";
import blogIcon from "@/public/blog.svg";
import reelIcon from "@/public/reel.svg";
import hikeIcon from "@/public/hike.svg";

export default function Do() {
  return (
    <CustomContainer>
      <section
        style={{
          backgroundImage: `url(${serviceBg.src})`,
        }}
        className="bg-cover bg-center bg-no-repeat bg-white/80 bg-blend-overlay"
      >
        <Title title="What I Do" />
        <div className="flex flex-col gap-6 md:gap-10 my-5 md:my-15 md:w-[70%]">
          <WhatIDoItem
            icon={appIcon}
            title="Application Development"
            subtitle="As a software developer, my main task is writing code to create solutions that solve real-world problems."
          />
          <WhatIDoItem
            icon={blogIcon}
            title="Blogging"
            subtitle="My thoughts about sharing what I ve learned and experienced, may not be just be particular field or discipline led me to blogging"
          />
          <WhatIDoItem
            icon={reelIcon}
            title="Content Creation"
            subtitle="Creating relatable content in any format has always been one of passion. It allows me to express my creativity and share knowledge with others."
          />
          <WhatIDoItem
            icon={hikeIcon}
            title="Hiking"
            subtitle="Hiking allows me to connect with nature, enjoy scenic views, and challenge physically. It's break from my regular routine."
          />
        </div>
      </section>
    </CustomContainer>
  );
}
