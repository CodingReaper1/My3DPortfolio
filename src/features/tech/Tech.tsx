import { motion } from "framer-motion";

import BallCanvas from "./BallCanvas";
import { technologies } from "../../constants";
import SectionWrapper from "../../components/SectionWrapper";
import { styles } from "../../styles";
import { fadeIn, textVariant } from "../../utils/motion";

function Tech() {
  return (
    <SectionWrapper>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>Technology.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(["", "", 0.1, 1])}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        {technologies.map(
          (tech, index, arr) =>
            `${tech.name}${index === arr.length - 1 ? "." : ","} `,
        )}
      </motion.p>

      <div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
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
