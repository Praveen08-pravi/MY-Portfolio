import "./About.css";
import profile from "../../assets/images/profile1.jpg";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">

        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profile} alt="Praveen U" />
        </motion.div>

        <motion.div
          className="about-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h3>Who am I?</h3>

          <p>
            I'm <strong>Praveen U</strong>, a BE Information Science &
            Engineering graduate from Don Bosco Institute of Technology,
            Bengaluru.
          </p>

          <p>
            I completed a MERN Stack Internship at SuprMentr Technologies Pvt Ltd. where I built modern,
            responsive web applications using React.js, Node.js,
            Express.js and MongoDB.
            where i developed a E-Commerce project called SnapCart  using MERN stack             </p>
          

          <p>
            I enjoy solving problems, learning new technologies and
            building scalable web applications.
          </p>

          <div className="about-list">

            <div>
              <FaCheckCircle />
              Full Stack Development
            </div>

            <div>
              <FaCheckCircle />
              MERN Stack
            </div>

    

            <div>
              <FaCheckCircle />
              Problem Solving
            </div>

            <div>
              <FaCheckCircle />
              Quick Learner
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;