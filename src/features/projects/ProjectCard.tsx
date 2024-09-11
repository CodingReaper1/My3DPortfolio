import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import github from "../../assets/github.png";
import { fadeIn } from "../../utils/motion";

type ProjectCardTypes = {
  index: number;
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
};

function ProjectCard({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardTypes) {
  return (
    <motion.div variants={fadeIn(["up", "spring", index * 0.5, 0.75])}>
      <Tilt
        tiltMaxAngleY={45}
        tiltMaxAngleX={45}
        transitionSpeed={450}
        scale={1.1}
        className="tilt w-full rounded-2xl bg-tertiary p-5 will-change-transform sm:w-[360px]"
      >
        <div className="relative h-[230px] w-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full rounded-2xl object-cover"
          />
          <div className="card-img_hover absolute inset-0 m-3 flex justify-end">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
            >
              <img
                src={github}
                alt="github"
                className="h-1/2 w-1/2 object-contain"
              />
            </div>
            {/* <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient flex h-10 w-10 cursor-pointer items-center justify-center rounded-full"
              >
                <img
                  src={github}
                  alt="github"
                  className="h-1/2 w-1/2 object-contain"
                />
              </div> */}
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
}

export default ProjectCard;
