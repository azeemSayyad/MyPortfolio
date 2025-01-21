import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = ({ activeTab }) => {
  const [isMenu, setIsMenu] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Projects",
    },
    {
      id: 4,
      link: "TimeLine",
    },
    {
      id: 5,
      link: "Skills",
    },
    {
      id: 6,
      link: "Contact",
    },
  ];

  const handleClick = () => {
    window.location.href = "";
  };

  return (
    <div className="flex justify-between items-center w-full h-16 px-3 text-white bg-black z-50 fixed">
      <div onClick={handleClick} className="hover:cursor-pointer">
        <h3 className="font-signature">Sayyad Azeem</h3>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <Link
            key={id}
            to={link}
            smooth
            duration={700}
            className={
              link === activeTab
                ? "px-4 cursor-pointer capitalize font-medium text-white scale-105 "
                : "px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-gray-300 hover:scale-105 duration-200"
            }
          >
            {link}
          </Link>
        ))}
      </ul>

      <div
        onClick={() => setIsMenu(!isMenu)}
        className="cursor-pointer z-50 text-gray-500 mr-2 md:hidden"
      >
        {isMenu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {isMenu && (
        <ul
          onClick={() => setIsMenu(false)}
          className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <Link
              key={id}
              to={link}
              smooth
              duration={800}
              onClick={() => setIsMenu(false)}
              className={
                link === activeTab
                  ? "px-4 py-6 text-2xl cursor-pointer capitalize font-medium text-white hover:text-gray-300 hover:scale-105 duration-200"
                  : "px-4 py-6 text-2xl cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200"
              }
            >
              {link}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
