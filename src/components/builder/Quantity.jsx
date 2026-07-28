import React from "react";

const Quantity = ({ quantity, onInc, onDec, disabled }) => {
  return (
    <div className="flex gap-4 text-lg">
      <button
        onClick={onDec}
        disabled={disabled}
        className={`w-7 px-2 rounded-md  transition-all duration-300 ease-in-out    
         ${
           disabled
             ? "bg-[#CED6DE] cursor-not-allowed text-gray-400"
             : quantity === 0
               ? "bg-white border border-gray-200 text-gray-400 cursor-not-allowed"
               : "bg-[#F0F4F7] text-gray-700 hover:bg-[#4E2FD2] hover:text-white"
         }
        
          `}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={onInc}
        disabled={disabled}
        className={`
          w-7 px-2 rounded-md  text-gray-700 text-xl
        ${
          disabled
            ? "bg-[#CED6DE] cursor-not-allowed"
            : "bg-[#F0F4F7]   cursor-pointer transition-all duration-300 ease-in-out  hover:bg-[#4E2FD2] hover:text-white"
        }
          
        `}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
