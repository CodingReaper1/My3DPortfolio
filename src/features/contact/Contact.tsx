import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../styles";
import EarthCanvas from "./EarthCanvas";
import { slideIn } from "../../utils/motion";
import SectionWrapper from "../../components/SectionWrapper";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_wek805l",
        "template_ei3drs9",
        {
          from_name: form.name,
          to_name: "Giorgi",
          from_email: form.email,
          to_email: "giorgi.gamertube@gmail.com",
          message: form.message,
        },
        "R-LTJY41T67dTMuFZ",
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);

          console.log(error);

          alert("Something went wrong");
        },
      );
  }

  return (
    <SectionWrapper idName="contact">
      <div className="flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row">
        <motion.div
          variants={slideIn(["left", "tween", 0.2, 1])}
          className="flex-[0.75] rounded-2xl bg-black-100  p-8"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
            </label>
            <label className="flex flex-col">
              <span className="mb-4 font-medium text-white">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
              />
            </label>

            <button
              type="submit"
              className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn(["right", "tween", 0.2, 1])}
          className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

export default Contact;
