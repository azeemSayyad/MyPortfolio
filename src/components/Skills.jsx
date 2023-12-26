import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.jpg";
import react from "../assets/react.jpg";
import node from "../assets/node.jpg";
import angular from "../assets/Angular.png";
import redux from "../assets/Redux.jpeg";
import tailwind from "../assets/tailwind.jpeg";
import cpp from "../assets/cpp.jpeg";
import mongodb from "../assets/mongodb.jpeg";
import python from "../assets/python.png";
import mui from "../assets/materailUI.jpeg";
import redis from "../assets/redis.jpg";
import aws from "../assets/aws.jpeg";
import nginx from "../assets/nginx.jpeg";

import { forwardRef } from "react";

const Skills = forwardRef((props, ref) => {
  // const images = [
  //   {
  //     id: 1,
  //     name: "React",
  //     imgSrc: react,
  //     style: "shadow-cyan-500",
  //     proficient: "60%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 2,
  //     name: "Node JS",
  //     imgSrc: node,
  //     style: "shadow-green-500",
  //     proficient: "70%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 3,
  //     name: "MongoDB",
  //     imgSrc: mongodb,
  //     style: "shadow-green-500",
  //     proficient: "50%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 4,
  //     name: "HTML",
  //     imgSrc: html,
  //     style: "shadow-orange-500",
  //     proficient: "70%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 5,
  //     name: "CSS",
  //     imgSrc: css,
  //     style: "shadow-blue-500",
  //     proficient: "40%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 6,
  //     name: "JavaScript",
  //     imgSrc: javascript,
  //     style: "shadow-yellow-500",
  //     proficient: "80%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 7,
  //     name: "Tailwind",
  //     imgSrc: tailwind,
  //     style: "shadow-gray-500",
  //     proficient: "30%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 8,
  //     name: "Angular",
  //     imgSrc: angular,
  //     style: "shadow-red-500",
  //     proficient: "30%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 9,
  //     name: "C++",
  //     imgSrc: cpp,
  //     style: "shadow-cyan-500",
  //     proficient: "75%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 10,
  //     name: "Redux",
  //     imgSrc: redux,
  //     style: "shadow-purple-500",
  //     proficient: "40%",
  //     color: "bg-yellow-500",
  //   },
  //   {
  //     id: 11,
  //     name: "Python",
  //     imgSrc: python,
  //     style: "shadow-yellow-500",
  //     proficient: "60%",
  //     color: "bg-yellow-500",
  //   },
  // ];

  return (
    <div
      ref={ref}
      id="Skills"
      name="Skills"
      className=" bg-gradient-to-b  to-gray-800 via-black from-black w-full h-auto pb-[3rem]"
    >
      <div className="mx-auto py-4 max-w-screen-lg flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl border-b-4 border-gray-400 p-2 inline">
            Skills
          </p>
          <p className="py-6 px-2">Here are the skills i acquired</p>
        </div>
        <div className=" w-full py-8 px-2 sm:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 text-center">
          {/**REACT */}
          <div
            className={`shadow-cyan-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={react}
              alt="React"
            />
            <p className="text-2xl pt-3 pb-2">React</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[90%] h-[2px] bg-cyan-500  `} />
            </div>
          </div>
          {/**ANGULAR */}
          <div
            className={`shadow-red-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={angular}
              alt="Angular"
            />
            <p className="text-2xl pt-3 pb-2">Angular</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[40%] h-[2px] bg-red-500  `} />
            </div>
          </div>
          {/**NODE JS */}
          <div
            className={`shadow-green-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={node}
              alt="Node JS"
            />
            <p className="text-2xl pt-3 pb-2">Node JS</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[80%] h-[2px] bg-green-500  `} />
            </div>
          </div>
          {/**REDUX */}
          <div
            className={`shadow-purple-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={redux}
              alt="Redux"
            />
            <p className="text-2xl pt-3 pb-2">Redux</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[70%] h-[2px] bg-purple-500  `} />
            </div>
          </div>
          {/** JAVASCRIPT*/}
          <div
            className={`shadow-yellow-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={javascript}
              alt="javascript"
            />
            <p className="text-2xl pt-3 pb-2">JavaScript</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[95%] h-[2px] bg-yellow-500  `} />
            </div>
          </div>
          {/**C++*/}
          <div
            className={`shadow-cyan-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={cpp}
              alt="C++"
            />
            <p className="text-2xl pt-3 pb-2">C++</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[70%] h-[2px] bg-cyan-500  `} />
            </div>
          </div>
          {/**PYTHON */}
          <div
            className={`shadow-yellow-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={python}
              alt="python"
            />
            <p className="text-2xl pt-3 pb-2">Python</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[70%] h-[2px] bg-yellow-500  `} />
            </div>
          </div>
          {/**MONGO DB*/}
          <div
            className={`shadow-green-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={mongodb}
              alt="Mongo DB"
            />
            <p className="text-2xl pt-3 pb-2">MongoDB</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[70%] h-[2px] bg-green-500  `} />
            </div>
          </div>
          {/**HTML*/}
          <div
            className={`shadow-orange-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={html}
              alt="HTML"
            />
            <p className="text-2xl pt-3 pb-2">HTML</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[90%] h-[2px] bg-orange-500  `} />
            </div>
          </div>
          {/**CSS */}
          <div
            className={`shadow-blue-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={css}
              alt="CSS"
            />
            <p className="text-2xl pt-3 pb-2">CSS</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[80%] h-[2px] bg-blue-500  `} />
            </div>
          </div>
          {/**TAILWIND */}
          <div
            className={`shadow-gray-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={tailwind}
              alt="tailwind"
            />
            <p className="text-2xl pt-3 pb-2">Tailwind</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[80%] h-[2px] bg-gray-500  `} />
            </div>
          </div>
          {/**MUI */}
          <div
            className={`shadow-blue-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={mui}
              alt="mul"
            />
            <p className="text-2xl pt-3 pb-2">MUI</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[50%] h-[2px] bg-blue-500  `} />
            </div>
          </div>
          {/**AWS */}
          <div
            className={`shadow-blue-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={aws}
              alt="mul"
            />
            <p className="text-2xl pt-3 pb-2">AWS</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[40%] h-[2px] bg-orange-500  `} />
            </div>
          </div>
          {/**Redis */}
          <div
            className={`shadow-blue-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={redis}
              alt="mul"
            />
            <p className="text-2xl pt-3 pb-2">REDIS</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[50%] h-[2px] bg-red-800  `} />
            </div>
          </div>
          {/**NGinx */}
          <div
            className={`shadow-blue-500 shadow-md md:hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
          >
            <img
              style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
              src={nginx}
              alt="mul"
            />
            <p className="text-2xl pt-3 pb-2">NGinx</p>
            <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
              <div className={`w-[40%] h-[2px] bg-green-800  `} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Skills;

// {images.map(({ id, imgSrc, style, name, proficient,color }) => (
//   <div
//     key={id}
//     className={`${style} shadow-md hover:scale-110 duration-500 py-2 px-3 rounded-lg flex flex-col justify-center items-center text-center`}
//   >
//     <img
//       style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
//       src={imgSrc}
//       alt={name}
//     />
//     <p className="text-2xl pt-3 pb-2">{name}</p>
//     <div className="w-full h-[2px] rounded-sm mb-2 bg-white flex justify-start">
//       <div
//         className={`w-[40%] h-[2px] bg-yellow-500  `}
//       />
//     </div>
//   </div>
// ))}
