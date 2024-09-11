import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import React from "react";

type SectionWrapperTypes = {
  children: React.ReactNode;
  idName?: string;
};

function SectionWrapper({ children, idName }: SectionWrapperTypes) {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} relative z-0 mx-auto max-w-7xl`}
    >
      <span className="hash-span" id={idName}></span>
      {children}
    </motion.section>
  );
}

export default SectionWrapper;
