import "./Contact.css";
import { useState } from "react";
import { sendMessage } from "../../api/contactApi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await sendMessage(formData);

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Connect</h3>

          <p>
            I'm always open to discussing software development,
            internships and full-time opportunities.
          </p>

          <div className="info-item">
            <strong>📍 Location</strong>
            <span>Bengaluru, Karnataka</span>
          </div>

          <div className="info-item">
            <strong>📧 Email</strong>
            <span>praveenupraveenu98@gmail.com</span>
          </div>

          <div className="info-item">
            <strong>📱 Phone</strong>
            <span>+91 93536 58646</span>
          </div>

        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;