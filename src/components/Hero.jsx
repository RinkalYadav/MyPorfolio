import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { rinkal_main } from "../assets";

const Hero = () => {
  const roles = [
    "Java Backend Developer",
    "Spring Boot Developer",
    "Java Full Stack Developer",
    "Software Developer",
    "Backend Software Engineer",
    "REST API Developer",
    "Software Engineer",
    "Angular Developer",
    "Microservices Developer",
    "Frontend Developer",
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentRole];

    let speed = isDeleting ? 60 : 120;

    // Pause after completely typing the role
    if (!isDeleting && displayText === currentText) {
      speed = 1800;
    }

    // Pause before starting the next role
    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
      } else {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }

      // Start deleting after the complete role is displayed
      if (!isDeleting && displayText === currentText) {
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRole, roles]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Rinkal Yadav</span>
          </h1>

          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            <span className="text-[#915EFF]">
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                }}
              >
                |
              </motion.span>
            </span>

            <br className="sm:block hidden" />
            Building Secure & Scalable Web Applications
          </p>
        </div>
      </div>

      <div className="relative">
        <img
          src={rinkal_main}
          alt=""
          className="absolute top-16 right-2 m-16 w-40 h-35 rounded-full object-cover"
        />
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;