import { useState, useRef } from "react";
import About from "./components/About";
import TimeLine from "./components/TimeLine";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";
import Navbar from "./components/navbar";
import { useEffect } from "react";

function App() {
  const [activeTab, setActiveTab] = useState(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const timeLineRef = useRef(null);
  const skillsRef = useRef(null);

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
      console.log(homeRef)
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
      observer.observe(skillsRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeTab={activeTab} />

      <Home ref={homeRef} />

      <About ref={aboutRef} />

      <Projects ref={projectsRef}/>

      <TimeLine ref={timeLineRef} />

      <Skills ref={skillsRef} />


      <SocialLinks />
    </>
  );
}

export default App;
