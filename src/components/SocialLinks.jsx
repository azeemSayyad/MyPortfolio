import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <BsLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/sayyad-azeem-1a228b20a/",
      style: "rounded-tr-md",
      name:"LinkedIn"
    },
    {
      id: 2,
      child: (
        <>
          <BsGithub size={30} />
        </>
      ),
      href: "https://github.com/azeemSayyad",
      name:"Github"
    },
    {
      id: 3,
      child: (
        <>
          <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/azeemsayyad1652/",
      name:"Leetcode"
    },
  ];

  return (
    <>
      <div className="hidden custom:w-full custom:flex custom:items-center custom:justify-center custom:bottom-3 custom:fixed">
        <ul className="flex">
          {links.map(({ id, child, href, download }) => (
            <li
              key={id}
              className="flex mb-1 justify-between items-center w-17 h-14 px-4 mx-2 bg-gradient-to-r rounded-md from-cyan-500 via-cyan-500 to-blue-500 hover:scale-110 hover:rounded-lg duration-500 opacity-90"
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden custom-lg:flex custom-lg:flex-col custom-lg:top-[35%] custom-lg:left-0 custom-lg:fixed">
        <ul>
          {links.map(({ id, child, href, name }) => (
            <li
              key={id}
              className="flex mb-1 justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gradient-to-r from-cyan-500 via-cyan-500 to-blue-500 hover:ml-[0px] hover:rounded-md duration-500 opacity-90"
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white"
                target="_blank"
                rel="noreferrer"
              >
                {name }{child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SocialLinks;