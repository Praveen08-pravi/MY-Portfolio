import "./Stats.css";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBriefcase, FaCode, FaStar } from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode />,
    number: "3+",
    title: "Projects",
  },
  {
    icon: <FaBriefcase />,
    number: "1+",
    title: "Internship",
  },
  {
    icon: <FaCode />,
    number: "15+",
    title: "Technologies",
  },
  {
    icon: <FaStar />,
    number: "100%",
    title: "Dedication",
  },
];

function Stats() {
  return (
    <section className="stats" id="stats">
      <motion.h2
        className="stats-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Highlights
      </motion.h2>

      <div className="stats-container">
        {stats.map((item, index) => (
          <motion.div
            className="stat-card"
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="stat-icon">{item.icon}</div>

            <h1>{item.number}</h1>

            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Stats;