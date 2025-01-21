import React, { forwardRef } from "react";
import instaMini from "../assets/contactImage.webp";

const Contact = forwardRef((props, ref) => {
  const handleSubmit = (e) =>{
    e.preventDefault();
  }
  return (
    <div
      ref={ref}
      id="Contact"
      name="Contact"
      className="flex p-5 gap-10 justify-center items-center  py-5 w-full bg-gradient-to-b to-black via-black from-gray-800"
    >
      <form onSubmit={handleSubmit} className="flex justify-center items-center w-full max-w-[300px]">
        <div className="flex flex-col gap-5 w-full mx-5 text-gray-400">
          <input className="px-2 w-full py-1 rounded-lg  bg-black border-2 border-gray-600 " placeholder="Enter Name..." />
          <input className="px-2 w-full py-1 rounded-lg  bg-black border-2 border-gray-600" placeholder="Enter Email..." />
          <textarea className="px-2 w-full py-1 rounded-lg  bg-black border-2 border-gray-600" placeholder="Description..." />
          <button className="font-bold px-2 py-1 bg-gray-700 rounded-md text-white cursor-pointer hover:bg-gray-300 hover:text-gray-700 duration-500">Submit</button>
        </div>
      </form>
      <div className="hidden sm:block w-full max-w-[300px]">
        <img className=" rounded-xl bg-cover" src={instaMini} alt="..." />
      </div>
    </div>
  );
});

export default Contact;
