import React, { useRef, useEffect, useState } from 'react';
import {About} from './About'
import { Skills } from './Skills';
import Projects from './Projects';

const ScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${
        isVisible ? 'animate-fadeIn' : 'opacity-0'
      } transition-opacity duration-1000`}
    >
      <About/>
      <Skills/>
      <Projects/>
    </div>
  );
};

export default ScrollAnimation;
