import flappyBird from "../assets/flappyBird.webp";
import instaMini from "../assets/instaMini.png";
import travelGuide from "../assets/travekGuide.webp";
import todoList from "../assets/todolist.jpeg";
import artiCrafts from "../assets/ArtiCrafts - image.png";
import Project from "./Project";
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  const projects = [
    {
      id: 5,
      imgSrc: artiCrafts,
      projectName: "ArtiCrafts (StartUp)",
      demoLink: "https://articrafts.netlify.app/",
    },
    {
      id: 1,
      imgSrc: instaMini,
      projectName: "insta mini",
      demoLink: "https://dazzling-speculoos-545ea0.netlify.app/",
      codeLink: "https://github.com/azeemSayyad/InstaMiniClient",
    },
    {
      id: 2,
      imgSrc: travelGuide,
      projectName: "travel guide",
      demo: "www.google.com",
      codeLink: "https://github.com/azeemSayyad/TravelGuide",
    },
    {
      id: 3,
      imgSrc: flappyBird,
      projectName: "flappy bird",
      codeLink: "https://github.com/azeemSayyad/Flappy-Bird",
    },
    {
      id: 4,
      imgSrc: todoList,
      projectName: "todo list",
      codeLink: "https://github.com/azeemSayyad/TodoListWithFlask",
    },
  ];


  return (
    <div
      ref={ref}
      id="Projects"
      name="Projects"
      className=" bg-gradient-to-b  from-black to-gray-800 w-full text-white min-h-screen h-auto"
    >
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full extra-small:p-0">
        <div className="pb-6">
          <p className="text-4xl border-b-2 border-gray-400 inline">Projects</p>
          <p className="py-6">Check out some of my work out here</p>
        </div>

        <div className=" grid sm:grid-cols-2 custom-md:grid-cols-3 gap-8 extra-small:p-0">
          {projects.map(({ id, imgSrc, codeLink, demoLink, projectName }) => (
            <Project
              key={id}
              codeLink={codeLink}
              demoLink={demoLink}
              imgSrc={imgSrc}
              projectName={projectName}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Projects;
