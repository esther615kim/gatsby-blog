import React from "react";
import Main from "./components/Main";
import "./styles/global.css";
import Side from "./components/Side";

function App() {
  return (
    <div className="w-screen grid grid-cols-12 text-center lg:px-12 gird">
      <div className="m-10 col-span-12 rounded-md bg-stone-black text-white lg:col-span-12">
        ABOUT / WORK / CONTACT{" "}
      </div>

      <div className="py-5 h-full lg:rounded-l-lg col-span-12 bg-cyan-300 lg:col-span-3 relative">
        {/* <div className="col-span-12 bg-red-500 lg:col-span-3 relative"> */}
        <div className="invisible lg:visible lg:absolute top-20 lg:-right-8 h-16 w-16 bg-white shadow-md lg:rounded-lg transform lg:rotate-45"></div>
        <Side />
       
      </div>

      <div className="col-span-12 rounded-r-lg bg-stone-600 lg:col-span-9">
        <Main />
      </div>
    </div>
  );
}

export default App;
