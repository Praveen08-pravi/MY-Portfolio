import "./Hero.css";
import profile from "../../assets/images/profile.jpg";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Glow */}
      <div className="hero-bg">
        <span className="circle one"></span>
        <span className="circle two"></span>
        <span className="circle three"></span>
      </div>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3>👋 Hello, I'm</h3>

        <h1>Praveen U</h1>

        <TypeAnimation
          sequence={[
            "Aspiring Full Stack Developer",
            2000,
            "MERN Stack Developer",
            2000.
          ]}
          wrapper="h2"
          repeat={Infinity}
        />

        <p>
          BE Information Science & Engineering Graduate from
          Don Bosco Institute of Technology, Bengaluru.
        </p>

        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>

        <div className="social-icons">
          <a href="https://github.com/Praveen08-pravi"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/praveen-u-110820352"><FaLinkedin /></a>
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=praveenupraveenu98@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="image-ring">
          <img src={profile} alt="Praveen U" />
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <div className="scroll-down">
        <FaArrowDown />
      </div>

    </section>
  );
}

export default Hero;