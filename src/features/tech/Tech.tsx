import BallCanvas from "./BallCanvas";
import { technologies } from "../../constants";
import SectionWrapper from "../../components/SectionWrapper";

function Tech() {
  return (
    <SectionWrapper>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Tech;
