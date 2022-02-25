import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillCodeSandboxCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Side = () => {
  return (
    <div>

      <h3 className="lg:mt-20 lg:pt-40 mt-10 text-3xl font-semibold tracking-wider font-oohhbaby">Esther Kim</h3>
      <p className="font-poppins mt-5 mb-20 lg:mb-40 font-medium text-lg ">Front End Developer</p>
      {/* <p className="px-2 py-1 mx-4 mt-4 font-semibold bg-stone-100 rounded-md"> */}
        {/* Front End Developer */}
      {/* </p> */}

      {/* socials */}
      <div className="flex justify-around pb-5 px-20 my-5 text-stone-100 md:w-auto md:2-full">
        {/* <Link to="https://github.com/esther615kim"> */}
        <AiOutlineLinkedin className="w-6 h-6 cursor-pointer" />
        {/* </Link> */}
        <AiFillGithub className="w-6 h-6 cursor-pointer" />
        <AiFillCodeSandboxCircle className="w-6 h-6 cursor-pointer" />
      </div>
      {/* <div className="py-3 my-5 bg-stone-200"> */}
      <div className="py-3 my-5 bg-white">
        <div className="flex items-center justify-center space-x-1 space-y-3">
          <GoLocation className="w-5 h-5" />
          <span className="block font-rubik">Rugby, UK</span>
        </div>
        <p className="my-2 font-rubik">vilchen15@gmail.com</p>
      </div>
      {/* <p className="px-2 py-1 mx-4 mt-4 font-semibold rounded-md bg-gradient-to-r from-stone-400 to-stone-300">
        CV
      </p> */}
      <div className="space-y-2 pb-10 lg:pb-20">
            <button className=" font-poppins w-10/12 py-1 my-1 text-white rounded-md mb-2 bg-gradient-to-r from-red-300 to-blue-400">CV</button>
      <button className=" font-poppins w-10/12 py-1 my-1 text-white rounded-md bg-gradient-to-r from-red-300 to-blue-400">Contact Me</button>
      </div>
    </div>
  );
};

export default Side;
