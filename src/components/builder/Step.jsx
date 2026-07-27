import React from "react";
import { useState } from "react";
import StepHeader from "./StepHeader";
import ProdcutCard from "./ProdcutCard";

const Step = () => {
  const [open, setOpen] = useState(true);
  function accordionHandle() {
    setOpen((open) => setOpen(!open));
  }
  return (
    <div
      onClick={accordionHandle}
      className="flex flex-col gap-4 cursor-pointer"
    >
      <StepHeader />
      {/* product cards */}
      <div className=" flex flex-wrap gap-4 justify-center  ">
        {/* pass products data */}
        <ProdcutCard />
        <ProdcutCard />
        <ProdcutCard />
        <ProdcutCard />
        <ProdcutCard />
      </div>
      <button className="w-64 border border-[#4E2FD2] text-[#4E2FD2] rounded-lg p-1.5 px-6 text-lg  m-auto cursor-pointer transition-all duration-300 ease-in-out  hover:bg-blue-100">
        Next: Choose your plan
      </button>
    </div>
  );
};

export default Step;
