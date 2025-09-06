import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <>
      <div id="home">
        <div className="nav-container">
          <div className="Nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="/resume.pdf" download="Sanjay_Resume.pdf">
            <button>
              <i className="fas fa-download"></i> Resume
            </button>
          </a>
        </div>

        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
