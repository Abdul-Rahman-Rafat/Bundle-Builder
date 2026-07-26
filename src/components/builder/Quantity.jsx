import React from "react";

const Quantity = () => {
  return (
    <div className="flex gap-4 text-lg">
      <button className="w-8 px-2 rounded-md bg-[#F0F4F7] text-gray-700 text-2xl cursor-pointer transition-all duration-300 ease-in-out  hover:bg-purple-600 hover:text-white">
        -
      </button>
      <span>1</span>
      <button className="w-8 px-2 rounded-md bg-[#F0F4F7] text-gray-700 text-2xl cursor-pointer transition-all duration-300 ease-in-out  hover:bg-purple-600 hover:text-white">
        +
      </button>
    </div>
  );
};

export default Quantity;
