import CustomContainer from "../components/CustomContainer";
import Title from "@/components/ui/Title";
import CountUp from "@/components/ui/CountUp";

export default function Stats() {
  return (
    <CustomContainer>
      <section>
        <Title title="Key Metrics in the Numbers" />
        <div className="flex justify-between mt-5 md:mt-15">
          <span className="text-center">
            <CountUp
              from={0}
              to={1}
              separator=","
              direction="up"
              duration={0.5}
              className="count-up-text"
            />
            <h6 className="text-secondary">Projects</h6>
          </span>
          <span className="text-center">
            <CountUp
              from={0}
              to={2}
              separator=","
              direction="up"
              duration={0.5}
              className="count-up-text"
            />
            <h6 className="text-secondary">Blogs</h6>
          </span>
          <span className="text-center">
            <span className="flex justify-center gap-1">
              <CountUp
                from={0}
                to={5}
                separator=","
                direction="up"
                duration={0.5}
                className="count-up-text"
              />
              <h1 className="text-4xl md:text-8xl font-normal flex justify-center items-center">
                +
              </h1>
            </span>
            <h6 className="text-secondary">Years as developer</h6>
          </span>
          <span className="text-center">
            <CountUp
              from={0}
              to={11}
              separator=","
              direction="up"
              duration={0.5}
              className="count-up-text"
            />
            <h6 className="text-secondary">Videos</h6>
          </span>
        </div>
      </section>
    </CustomContainer>
  );
}
