import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navbar active" : "navbar"}>
      <h2 className="logo">Praveen U</h2>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="education"
            smooth
            duration={500}
            spy
            offset={-70}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            smooth
            duration={500}
            spy
            offset={-70}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth
            duration={500}
            spy
            offset={-70}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth
            duration={500}
            spy
            offset={-70}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>

        <li>
          <a
  href="/resume/Praveen_U_Resume.pdf"
  download="Praveen_U_Resume.pdf"
  className="btn"
>
  Download Resume
</a>
        </li>
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;