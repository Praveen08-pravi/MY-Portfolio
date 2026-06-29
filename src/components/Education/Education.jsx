import "./Education.css";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    year: "2022 - 2026",
    degree: "Bachelor of Engineering (ISE)",
    college: "Don Bosco Institute of Technology, Bengaluru",
    marks: "CGPA: 8/10",
  },
  {
    year: "2020 - 2022",
    degree: "Pre-University Course (PUC)  [PCMC]",
    college: "Seshadripuram PU College ,Tumakuru",
    marks: "Percentage: 65.6 %",
  },
  {
    year: "2019 - 2020",
    degree: "SSLC",
    college: "Gurukula Vidya Mandira High School ,Kudur",
    marks: "Percentage: 89.6 %",
  },
];

function Education() {
  return (
    <section className="education" id="education">
      <h2 className="section-title">Education</h2>

      <div className="timeline">
        {educationData.map((item, index) => (
          <motion.div
            className="timeline-item"
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">
              <FaGraduationCap />
            </div>

            <div className="timeline-content">
              <span>{item.year}</span>
              <h3>{item.degree}</h3>
              <h4>{item.college}</h4>
              <p>{item.marks}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;