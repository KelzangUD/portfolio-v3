import Hero from "./HomePageLayout/Hero";
import FeaturedProjects from "./HomePageLayout/FeaturedProjects";
import WhatIDo from "./HomePageLayout/WhatIDo";
import Stats from "./HomePageLayout/Stats";
import Videos from "./HomePageLayout/Videos";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <WhatIDo />
      <Stats />
      <Videos />
    </>
  );
}
