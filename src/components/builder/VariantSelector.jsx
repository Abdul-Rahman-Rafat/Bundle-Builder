import React from "react";

const VariantSelector = () => {
  return (
    <div className="flex gap-2 ">
      <div className="w-1/3  flex justify-center items-center border border-gray-300 py-0.5   rounded-md text-xs transition-all duration-300 ease-in-out  hover:bg-gray-200 cursor-pointer">
        <img
          className="w-5 h5"
          src="/public/images/Wyze_Cam v4/Wyze Cam v4 selection(white).png"
          alt="Wyze Cam v4 selection(white)"
        />
        <span className="text-[10px]">white</span>
      </div>
      <div className="w-1/3  flex gap-0.5 justify-center items-center border border-gray-300 py-0.5 px-1.5  rounded-md text-xs transition-all duration-300 ease-in-out  hover:bg-gray-200 cursor-pointer">
        <img
          className="w-5 h5"
          src="/public/images/Wyze_Cam v4/Wyze Cam v4 selection(grey).png"
          alt="Wyze Cam v4 selection(white)"
        />
        <span className="text-[10px]">grey</span>
      </div>
      <div className="w-1/3  flex gap-0.5 justify-center items-center border border-gray-300 py-0.5 px-1.5  rounded-md text-xs transition-all duration-300 ease-in-out  hover:bg-gray-200 cursor-pointer">
        <img
          className="w-5 h5"
          src="/public/images/Wyze_Cam v4/Wyze Cam v4 selection(black).png"
          alt="Wyze Cam v4 selection(white)"
        />
        <span className="text-[10px]">black</span>
      </div>
    </div>
  );
};

export default VariantSelector;
