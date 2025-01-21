import React from "react";
import { forwardRef } from "react";

const TimeLine = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="TimeLine"
      name="TimeLine"
      className="py-5  w-full bg-gradient-to-b to-black via-black from-gray-800"
    >
      <div className="flex flex-col  justify-center mx-auto h-full ">
        <div className=" custom-700:flex items-center justify-center sm:ml-12">
          <ol
            style={{
              borderLeft: "2px solid purple",
            }}
            className="ml-8"
          >

          {/* Graduation Completed */}
            <li>
              <div className="my-6 ml-4 rounded-lg inline-block w-auto shadow-sm shadow-gray-500 border border-cyan-500 p-5 hover:bg-gradient-to-r from-slate-500 to-slate-700 duration-300 md:hover:scale-105">
                <span className="mb-3 text-white">Graduation Completed</span>
              </div>
              <div className=" flex items-center pt-3">
                <div className="-ml-[8.5px] mr-3 h-[15px] w-[15px]  rounded-full bg-gradient-to-t from-cyan-400 to-cyan-900 md:hover:bg-gradient-to-b hover:from-cyan-200 hover:to-blue-300"></div>
                <p className="text-2xl text-gray-300 hover:text-white">
                  November-2022
                </p>
              </div>
            </li>
            
            {/* worked in TCS  */}
            <li>
              <div className="my-6 ml-4 rounded-lg inline-block  shadow-sm shadow-gray-500 border border-cyan-500 p-5 hover:bg-gradient-to-r from-slate-500 to-slate-700 duration-300 md:hover:scale-105">
                <span className="mb-3 text-white">
                  Joined TCS as an Assistant System Engineer
                </span>
              </div>
              <div className="my-6 ml-4 rounded-lg inline-block w-auto shadow-sm shadow-gray-500 border border-cyan-500 p-5 hover:bg-gradient-to-r from-slate-500 to-slate-700 duration-300 md:hover:scale-105">
                <span className="mb-3 text-white">
                  Worked on Node Js as a Backend developer
                </span>
              </div>
              <div className=" flex items-center pt-3">
                <div className="-ml-[8.5px] mr-3 h-[15px] w-[15px]  rounded-full bg-gradient-to-t from-cyan-400 to-cyan-900 hover:bg-gradient-to-b hover:from-cyan-200 hover:to-blue-300"></div>
                <p className="text-2xl text-gray-300 hover:text-white">
                  September-2023
                </p>
              </div>
            </li>

            {/* Worked as a Tiles Contractor */}
            <li>
              <div className="my-6 ml-4 rounded-lg inline-block w-auto shadow-sm shadow-gray-500 border border-cyan-500 p-5 hover:bg-gradient-to-r from-slate-500 to-slate-700 duration-300 md:hover:scale-105">
                <span className="mb-3 text-white">
                Freelancing as a full-stack developer, I create custom web applications using the MERN stack.
                </span>
              </div>
              <div className="my-6 ml-4 rounded-lg inline-block w-auto shadow-sm shadow-gray-500 border border-cyan-500 p-5 hover:bg-gradient-to-r from-slate-500 to-slate-700 duration-300 md:hover:scale-105">
                <span className="mb-3 text-white">
                  Worked as a Tiles Contractor
                </span>
              </div>
              <div className=" flex items-center pt-3">
                <div className="-ml-[8.5px] mr-3 h-[15px] w-[15px]  rounded-full bg-gradient-to-t from-cyan-400 to-cyan-900 hover:bg-gradient-to-b hover:from-cyan-200 hover:to-blue-300"></div>
                <p className="text-2xl text-gray-300 hover:text-white">
                  September-2024
                </p>
              </div>
            </li>

            <li>
              <div>_____</div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
});

export default TimeLine;

