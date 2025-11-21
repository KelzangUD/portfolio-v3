import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import { ReactOut } from "./components/ReachOut";
import { ContactForm } from "./components/ContactForm";

export default function ContactMe() {
  return (
    <CustomContainer>
      <section className="mt-25">
        <Title title="Let’s Connect" />
        <div className="grid xl:grid-cols-2 gap-6 2xl:gap-8 my-5">
          <div className="flex items-center">
            <ReactOut />
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>
    </CustomContainer>
  );
}
