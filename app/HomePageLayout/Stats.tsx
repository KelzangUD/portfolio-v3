import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import Spinner from "../components/Spinner";

export default function Stats() {
  return (
    <CustomContainer>
      <section>
        <Title title="Key Metrics in the Numbers" />
        <div className="flex justify-between mt-5 md:mt-15">
          <span className="text-center">
            <Spinner number={2} />
            <h6 className="text-secondary">Projects</h6>
          </span>
          <span className="text-center">
            <Spinner number={2} />
            <h6 className="text-secondary">Blogs</h6>
          </span>
          <span className="text-center">
            <h1 className="text-xl md:text-8xl font-normal flex justify-center items-center">
              <Spinner number={5} />+
            </h1>
            <h6 className="text-secondary">Years as developer</h6>
          </span>
          <span className="text-center">
            <Spinner number={10} />
            <h6 className="text-secondary">Videos</h6>
          </span>
        </div>
      </section>
    </CustomContainer>
  );
}
