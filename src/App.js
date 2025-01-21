import { useState, useRef } from "react";
import About from "./components/About";
import TimeLine from "./components/TimeLine";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/navbar";
import { useEffect } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeTab, setActiveTab] = useState(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const timeLineRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.7,
    };

    const observer = new IntersectionObserver((entries) => {
      // const entry = entries[0];
      console.log(entries)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    }, options);

    if (homeRef.current) {
      observer.observe(homeRef.current);
    }
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    if (timeLineRef.current) {
      observer.observe(timeLineRef.current);
    }
    if (skillsRef.current) {
      console.log("observing skills");
      observer.observe(skillsRef.current);
    }
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="mb-[80px] custom-lg:mb-0">
      <Navbar activeTab={activeTab} />

      <Home ref={homeRef} />

      <About ref={aboutRef} />

      <Projects ref={projectsRef}/>

      <TimeLine ref={timeLineRef} />

      <Skills ref={skillsRef} />

      <Contact ref={contactRef}/>
      <Footer/>

      <SocialLinks />
    </div>
  );
}

export default App;
