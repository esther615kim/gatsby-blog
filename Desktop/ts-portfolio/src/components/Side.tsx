import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillGithub,
  AiOutlineLinkedin,
  AiFillCodeSandboxCircle,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import glass from "../images/glass.png";
const Side = () => {
  return (
    <div>
      <img
        className="mx-auto rounded-full w-30 h-30"
        src={glass}
        alt="profile"
      />
      <h3 className="my-2 text-2xl font-semibold tracking-wider">Esther Kim</h3>
      <p className="px-2 py-1 mx-4 mt-4 font-semibold bg-red-200 rounded-md">
        Front End Developer
      </p>
      <p className="px-2 py-1 mx-4 mt-4 font-semibold rounded-md bg-gradient-to-r from-stone-400 to-stone-300">
        CV
      </p>

      {/* socials */}
      <div className="flex justify-around my-5 text-red-500 md:w-auto md:2-full">
        {/* <Link to="https://github.com/esther615kim"> */}
        <AiOutlineLinkedin className="w-6 h-6 cursor-pointer" />
        {/* </Link> */}
        <AiFillGithub className="w-6 h-6 cursor-pointer" />
        <AiFillCodeSandboxCircle className="w-6 h-6 cursor-pointer" />
      </div>
      <div className="py-3 my-5 bg-stone-200">
        <div className="flex items-center justify-center space-x-1">
          <GoLocation className="w-5 h-5" />
          <span>Rugby, UK</span>
        </div>
        <p className="my-2">vilchen15@gmail.com</p>
        <p className="my-2">0739944444</p>
      </div>
      <button className="w-10/12 py-1 my-1 text-white rounded-md mb-14 bg-gradient-to-r from-red-300 to-blue-400">Contact Me</button>
    </div>
  );
};

export default Side;
