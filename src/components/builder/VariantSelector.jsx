import React from "react";

const VariantSelector = () => {
  return (
    <div className="flex gap-2 ">
      <div className="flex gap-0.5 justify-center items-center border border-gray-300 p-0.5 px-1.5  rounded-md text-xs transition-all duration-300 ease-in-out  hover:bg-gray-200 cursor-pointer">
        <img
          src="/public/images/Wyze_Cam v4/Wyze Cam v4 selection(white).png"
          alt="Wyze Cam v4 selection(white)"
        />
        <span>white</span>
      </div>
      <div className="flex gap-0.5 justify-center items-center border border-gray-300 p-0.5 px-1.5  rounded-md text-xs transition-all duration-300 ease-in-out  hover:bg-gray-200 cursor-pointer">
        <img
          src="/public/images/Wyze_Cam v4/Wyze Cam v4 selection(grey).png"
          alt="Wyze Cam v4 selection(white)"
        />
        <span>grey</span>
      </div>
      <div className="flex gap-0.5 justify-center items-center border border-gray-300 p-0.5 px-1.5  rounded-md text-xs transition-all duration-300 ease-in-out  hover:bg-gray-200 cursor-pointer">
        <img
          src="/public/images/Wyze_Cam v4/Wyze Cam v4 selection(black).png"
          alt="Wyze Cam v4 selection(white)"
        />
        <span>black</span>
      </div>
    </div>
  );
};

export default VariantSelector;
