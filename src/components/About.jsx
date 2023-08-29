import React from "react";
import { forwardRef } from "react";

const About = forwardRef((props,ref)=>{

  
  return (
    <div
      ref={ref}
      id="About"
      name="About"
      className="cont  min-h-screen h-screen w-full bg-gradient-to-b to-black via-black from-gray-800"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mx-auto mb-5">
          <p className="text-4xl text-white">About</p>
        </div>
        <p className="text-[#9ba6b4] text-[1rem] md:text-2xl py-3">
          I'm Azeem, a full-stack developer and DSA programmer known for
          my strong problem-solving skills and passion for tackling complex
          challenges.
        </p>
        <p className="text-[#9ba6b4] text-[1rem] md:text-2xl  py-3">
          With expertise in a wide range of technologies including Python, C++,
          JavaScript, React.js, Node.js, MongoDB and AngularJS, I have the
          ability to build robust, scalable, and user-friendly applications
          across the entire stack.
        </p>
        <p className="text-[#9ba6b4] text-[1rem] md:text-2xl  py-3">
          My ultimate aspiration is to be a constantly evolving individual who
          hustles, inspires, and seeks inspiration. I'm always ready to embrace
          failure as a stepping stone towards growth.
        </p>
      </div>
    </div>
  );
})

export default About
