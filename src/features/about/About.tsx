import { motion } from "framer-motion";

import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import ServiceCard from "./ServiceCard";
import SectionWrapper from "../../components/SectionWrapper";

function About() {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn(["", "", 0.1, 1])}
        className="mt-4 max-w-3xl text-[17px] leading-[30px] text-secondary"
      >
        I'm a front-end web developer with no working experience yet. I know
        Typescript, Javascript and React, and little bit of Three.js. I'm quick
        learner and i can create efficient, scalable, and user-friendly
        solutions that solve real-world problems. Let's work together to bring
        your ideas to life!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default About;
