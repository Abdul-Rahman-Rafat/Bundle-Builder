import React from "react";

const Quantity = () => {
  return (
    <div className="flex gap-4 text-lg">
      <button className="w-7 px-2 rounded-md bg-[#F0F4F7] text-gray-700 text-xl cursor-pointer transition-all duration-300 ease-in-out  hover:bg-[#4E2FD2] hover:text-white">
        -
      </button>
      <span>1</span>
      <button className="w-7 px-2 rounded-md bg-[#F0F4F7] text-gray-700 text-xl cursor-pointer transition-all duration-300 ease-in-out  hover:bg-[#4E2FD2] hover:text-white">
        +
      </button>
    </div>
  );
};

export default Quantity;
