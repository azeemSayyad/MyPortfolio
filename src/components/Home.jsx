import React from "react";
import CopyText from "./CopyText";
import ResumeDownloadButton from "./download";
import { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="Home"
      name="Home"
      className="cont  min-h-screen h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto px-4 h-full">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Welcome to My Digital Playground
          </h1>
          <p className=" text-[#9ba6b4] my-4">
            "Hey there, I'm{" "}
            <span className="text-2xl font-bold text-white ">Sayyad Azeem</span>{" "}
            – a passionate MERN stack developer who thrives on turning ideas
            into functional, elegant software solutions. With a love for
            problem-solving and a knack for crafting seamless user experiences,
            I'm on a journey to create meaningful applications that make an
            impact. Welcome to my portfolio – explore my projects and let's
            connect!"
          </p>

          <div>
            <ResumeDownloadButton />
            <button className=" rounded-lg hover:shadow-md opacity-80 bg-gradient-to-r px-2 py-3 my-4 from-cyan-500 to-blue-500 hover:scale-105  duration-500 hover:to-blue-700 cursor-pointer">
              <CopyText name={"+919676341652"} />
            </button>
          </div>
          <div className="w-auto">
            <button className="rounded-lg hover:shadow-md opacity-80 bg-gradient-to-r px-2 py-3 my-4 from-cyan-500 to-blue-500 hover:scale-105  duration-500 hover:to-blue-700 cursor-pointer">
              <CopyText name={"azeemsayyad1652@gmail.com"} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});
export default Home;

// <p className="text-[#9ba6b4] text-small py-3">
// My journey in the world of code has taught me that success comes not
// only from mastering the tools of the trade but also from embracing
// failures as stepping stones towards growth. As someone who believes
// that every challenge is an opportunity, I'm excited to continue my
// evolution as a developer and contribute meaningful solutions to the
// tech landscape.
// </p>
