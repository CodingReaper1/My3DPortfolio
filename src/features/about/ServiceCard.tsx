import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "../../utils/motion";

type ServiceCardTypes = {
  index: number;
  title: string;
  icon: string;
};

function ServiceCard({ index, title, icon }: ServiceCardTypes) {
  return (
    <Tilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1.1}
      transitionSpeed={450}
      className="w-full xs:w-[250px]"
    >
      <motion.div
        variants={fadeIn(["right", "spring", 0.5 * index, 0.75])}
        className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-card"
      >
        <div className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5">
          <img src={icon} alt={title} className="h-16 w-16 object-contain" />
          <h3 className="text-center text-[20px] font-bold text-white">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}

export default ServiceCard;
