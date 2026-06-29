import "./Experience.css";
import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience" id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Experience
      </motion.h2>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="experience-icon">
          <FaBriefcase />
        </div>

        <div className="experience-content">
          <h3>MERN Stack Intern</h3>

          <h4>Fresher</h4>

          <span>2026 Graduate</span>

          <ul>
            <li>Developed responsive web applications using React.js.</li>
            <li>Built REST APIs with Node.js and Express.js.</li>
            <li>Worked with MongoDB for database operations.</li>
            <li>Used Git & GitHub for version control.</li>
            <li>Strengthened problem-solving and debugging skills.</li>
            <li>Completed a Full Stack Development [MERN Stack] internship at SuprMentr Technologies.</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;