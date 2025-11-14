import CustomContainer from "@/app/components/CustomContainer";
import Title from "@/components/ui/Title";
import professionalJourneyBg from "@/public/professional_journey.jpg";
import { Timeline } from "@/components/ui/timeline";

const data = [
  {
    title: "2021-2021",
    content: (
      <div>
        <h6 className="text-secondary">Software Developer</h6>
        <h4 className="my-4">Fuzzy Automation</h4>
        <p className="text-justify leading-8">
          Developing a web-based application which provide necessary information
          for improved user decision-making.
        </p>
      </div>
    ),
  },
  {
    title: "2021-2022",
    content: (
      <div>
        <h6 className="text-secondary">Software Developer</h6>
        <h4 className="my-4">Next Generation Next Technology</h4>
        <p className="text-justify leading-8">
          As a fullstack developer, my role revolved around translating concepts
          into functional and scalable software applications. From
          conceptualization to deployment, I focused on problem-solving and
          innovation, ensuring a seamless user experience.
        </p>
      </div>
    ),
  },
  {
    title: "2022-Present",
    content: (
      <div>
        <h6 className="text-secondary">Software Developer</h6>
        <h4 className="my-4">Tashi InfoComm Private Limited</h4>
        <p className="text-justify leading-8">
          Works as Software Developer. As my role is mostly on frontend
          development, I focused on developing user-friendly applications.
        </p>
      </div>
    ),
  },
];

export default function ProfessionalJourney() {
  return (
    <CustomContainer>
      <section
        style={{
          backgroundImage: `url(${professionalJourneyBg.src})`,
        }}
        className="bg-cover bg-center bg-no-repeat bg-white/90 bg-blend-overlay"
      >
        <Title title="Each Experience, A Step Toward Growth & Purpose" />
        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </section>
    </CustomContainer>
  );
}
