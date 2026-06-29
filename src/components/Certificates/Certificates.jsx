import "./Certificates.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import deep from "../../assets/certificates/deep.jpg";
import bigdata from "../../assets/certificates/bigdata.jpg";
import dbms from "../../assets/certificates/dbms.jpg";
import cprogramming from "../../assets/certificates/cprogramming.jpg";
import ai from "../../assets/certificates/ai.jpg";
import projectmanagement from "../../assets/certificates/projectmanagement.jpg";
import jobapplication from "../../assets/certificates/jobapplication.jpg";

const certificates = [
  {
    title: "Deep Learning",
    organization: "Infosys Springboard",
    year: "2025",
    image: deep,
  },
  {
    title: "Big Data",
    organization: "Infosys Springboard",
    year: "2025",
    image: bigdata,
  },
  {
    title: "Database Management System",
    organization: "Infosys Springboard",
    year: "2025",
    image: dbms,
  },
  {
    title: "C Programming",
    organization: "Infosys Springboard",
    year: "2025",
    image: cprogramming,
  },
  {
    title: "Artificial Intelligence Fundamentals",
    organization: "Infosys Springboard",
    year: "2025",
    image: ai,
  },
  {
    title: "Project Management Fundamentals",
    organization: "Infosys Springboard",
    year: "2025",
    image: projectmanagement,
  },
  {
    title: "Job Application Essentials",
    organization: "Infosys Springboard",
    year: "2025",
    image: jobapplication,
  },
];

function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const openCertificate = (image) => {
    setSelectedImage(image);
    setZoom(1);
  };

  const closeCertificate = () => {
    setSelectedImage(null);
    setZoom(1);
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        closeCertificate();
      }
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="certificates" id="certificates">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Certifications
      </motion.h2>

      <div className="certificate-grid">

        {certificates.map((certificate, index) => (

          <motion.div
            key={index}
            className="certificate-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >

            <img
              src={certificate.image}
              alt={certificate.title}
            />

            <div className="certificate-content">

              <h3>{certificate.title}</h3>

              <p>{certificate.organization}</p>

              <span>{certificate.year}</span>

              <button
                onClick={() => openCertificate(certificate.image)}
              >
                View Certificate
              </button>

            </div>

          </motion.div>

        ))}

      </div>

      {selectedImage && (

        <div
          className="certificate-modal"
          onClick={closeCertificate}
        >

          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >

            <div className="modal-toolbar">

              <button onClick={() => setZoom(zoom + 0.2)}>+</button>

              <button
                onClick={() => setZoom(Math.max(0.6, zoom - 0.2))}
              >
                −
              </button>

              <button onClick={closeCertificate}>
                ✕
              </button>

            </div>

            <img
              src={selectedImage}
              alt="Certificate"
              className="modal-image"
              style={{
                transform: `scale(${zoom})`,
              }}
            />

          </div>

        </div>

      )}

    </section>
  );
}

export default Certificates;