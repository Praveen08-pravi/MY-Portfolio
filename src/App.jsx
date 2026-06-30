import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certificates/Certificates";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <>
     <ScrollProgress />

      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
      <ScrollTop />
      <ThemeToggle />
    </>
  );
}

export default App;