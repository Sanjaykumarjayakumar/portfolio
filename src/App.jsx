import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import { useState } from "react";

const App = () => {
  const[viewresume,setviewresume] = useState(false)
  const handleClick = ()=>{
    setviewresume(true);
  };
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
        <button onTouchMove={handleClick}><i className="fas fa-download"></i></button>
        {viewresume&&<span>hi</span>}
      </div>

      <Home />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
      </div>
    </>
  );
};

export default App;
