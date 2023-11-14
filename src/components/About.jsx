import React from "react";
import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="About"
      name="About"
      className="cont  min-h-screen w-full bg-gradient-to-b to-black via-black from-gray-800"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mx-auto mb-5">
          <p className="text-4xl text-white">About</p>
        </div>
        <p className="text-[#9ba6b4] text-[15px] md:text-[1rem] py-3">
          Passionate and results-driven software developer specializing in the
          MERN stack, I am committed to transforming visionary concepts into
          impactful digital solutions. My hands-on experience extends to
          conceiving and developing projects that demonstrate my proficiency and
          innovation in the tech realm. As the visionary force behind
          ArtiCrafts, my groundbreaking startup website, I've showcased not only
          technical prowess in full-stack development but also a deep commitment
          to creating practical solutions that bridge the gap between local
          service providers and homeowners.
        </p>
        <p className="text-[#9ba6b4] text-[15px] md:text-[1rem]  py-3">
          ArtiCrafts: Transforming Visions into Reality At the core of my
          portfolio is ArtiCrafts, a pioneering startup platform designed to
          empower local construction service providers and simplify homeowners'
          searches for skilled professionals. This project, developed using the
          MERN stack and enriched with Tailwind CSS, seamlessly connects
          homeowners with service providers such as painters, electricians, and
          tilers. The platform's standout feature lies in its intuitive search
          and listing functionality, facilitating effortless connections based
          on specific categories. ArtiCrafts not only emphasizes my technical
          expertise in full-stack development but also reflects my dedication to
          creating practical and impactful solutions that benefit both service
          providers and homeowners alike. It stands as a testament to my ability
          to address real-world needs within the community and highlights the
          blend of innovation and social responsibility in my work.
        </p>
        <p className="text-[#9ba6b4] text-[15px] md:text-[1rem]  py-3">
          Professional Journey: In my recent role as an Assistant System
          Engineer Trainee at Tata Consultancy Services (TCS), I honed my skills
          by developing a NodeJS project, integrating MongoDB and Express, and
          creating robust APIs for seamless functionality. This experience,
          coupled with my dynamic learning approach, positions me as a versatile
          developer eager to contribute my expertise and curiosity to drive
          innovative solutions. My journey encompasses diverse technologies,
          including React, NodeJS, Python, and AWS, complemented by a strong
          foundation in data structures and algorithms. I am driven by a
          relentless pursuit of excellence and thrive in dynamic IT environments
          where I can make a lasting impact.
        </p>
      </div>
    </div>
  );
});

export default About;
