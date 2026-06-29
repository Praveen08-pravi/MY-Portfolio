import "./Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML & CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB", level: 85 },
  { name: "c", level: 70 },
  { name: "C++", level: 75 },
  { name: "Git & GitHub", level: 70 },
];

function Skills() {
  return (
    <section className="skills" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Technical Skills
      </motion.h2>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <motion.div
            className="skill"
            key={index}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <motion.div
                className="progress"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;