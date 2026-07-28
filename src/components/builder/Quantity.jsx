import React from "react";

const Quantity = ({ quantity, onInc, onDec }) => {
  return (
    <div className="flex gap-4 text-lg">
      <button
        onClick={onDec}
        // disabled={order.quantity === 0}
        className={`w-7 px-2 rounded-md ${
          quantity === 0
            ? "bg-white border border-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-[#F0F4F7] text-gray-700 hover:bg-[#4E2FD2] hover:text-white"
        } transition-all duration-300 ease-in-out`}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={onInc}
        className="w-7 px-2 rounded-md bg-[#F0F4F7] text-gray-700 text-xl cursor-pointer transition-all duration-300 ease-in-out  hover:bg-[#4E2FD2] hover:text-white"
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
