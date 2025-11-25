import CustomContainer from "@/app/components/CustomContainer";
import Title from "@/components/ui/Title";
import professionalJourneyBg from "@/public/professional_journey.jpg";
import { Timeline } from "@/components/ui/timeline";

const data = [
  {
    title: "2021-2021",
    job: "Software Developer",
    company: "Fuzzy Automation",
    desc: "Developing a web-based application which provide necessary information for improved user decision-making.",
  },
  {
    title: "2021-2022",
    job: "Software Developer",
    company: "Next Generation Next Technology",
    desc: "As a fullstack developer, my role revolved around translating concepts into functional and scalable software applications. From conceptualization to deployment, I focused on problem-solving and innovation, ensuring a seamless user experience.",
  },
  {
    title: "2022-Present",
    job: "Software Developer",
    company: "Tashi InfoComm Private Limited",
    desc: "Works as Software Developer. As my role is mostly on frontend development, I focused on developing user-friendly applications.",
  },
];

export default function ProfessionalJourney() {
  return (
    <CustomContainer>
      <section
        style={{
          backgroundImage: `url(${professionalJourneyBg.src})`,
        }}
        className="bg-cover bg-top bg-no-repeat bg-white/95 bg-blend-overlay"
      >
        <Title title="Each Experience, A Step Toward Growth & Purpose" />
        <div className="relative w-full overflow-clip my-5">
          <Timeline data={data} />
        </div>
      </section>
    </CustomContainer>
  );
}
