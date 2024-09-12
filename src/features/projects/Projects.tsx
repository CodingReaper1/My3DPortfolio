import { motion } from "framer-motion";

import { styles } from "../../styles";
import { projects } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import ProjectCard from "./ProjectCard";
import SectionWrapper from "../../components/SectionWrapper";

function Projects() {
  return (
    <SectionWrapper idName="projects">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn(["", "", 0.1, 1])}
          className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my abilty
          to solve complex problems, work with different technologies and manage
          projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
