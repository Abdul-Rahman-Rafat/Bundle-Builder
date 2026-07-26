import React from "react";
import VariantSelector from "./VariantSelector";
import Quantity from "./Quantity";

const ProdcutCard = () => {
  return (
    <div className="w-[360px] flex justify-between  bg-white  rounded-2xl p-1.5 cursor-pointer  border-2  border-white transition-all duration-300 ease-out  hover:border-[#4E2FD2]">
      <div className="relative p-1.5 rounded-2xl">
        <span className="w-20 absolute  top-0 rounded-2xl text-xs text-white bg-[#4E2FD2]  text-center py-1 ">
          {" "}
          Save 22%
        </span>
        <img
          src="/public/images/Wyze_Cam v4/Wyze_Cam_V4_01.0001.png.png"
          alt="Wyze Cam V4"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h2>Wyze Cam V4</h2>
        <p className="text-xs text-gray-400">
          The clearest Wyze Cam ever made. <br />{" "}
          <span className="text-blue-700 cursor-pointer underline">
            Learn More
          </span>{" "}
        </p>
        <VariantSelector />
        <div className="flex items-center justify-between ">
          <Quantity />
          <div className=" flex flex-col items-end ">
            <span className="line-through text-[#D8392B]">$35.98 </span>
            <span>$27.98</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdcutCard;
