import "./Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <h2>Praveen U</h2>

      <p>Full Stack Developer | MERN Stack </p>

      <div className="footer-icons">
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=praveenupraveenu98@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaEnvelope />
</a>

        <a href="tel:+919353658646">
          <FaPhone />
        </a>

        <a
          href="https://github.com/Praveen08-pravi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/praveen-u-110820352"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <hr />

      <p className="copyright">
        © 2026 Praveen U. Made with <FaHeart className="heart" /> Building ideas into digital experiences. 🚀
      </p>
    </footer>
  );
}

export default Footer;