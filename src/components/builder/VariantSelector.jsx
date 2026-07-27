import React from "react";

const VariantSelector = ({ variants }) => {
  return (
    <div className="flex gap-2 ">
      {variants.map((variant) => {
        return (
          <div
            key={variant.id}
            className="w-1/3  flex justify-center items-center border border-gray-300 py-0.5   rounded-md text-xs transition-all duration-300 ease-in-out  hover:bg-gray-200 cursor-pointer"
          >
            <img
              className="w-5 h5"
              src={variant.image}
              alt={variant.colorName}
            />
            <span className="text-[10px]">{variant.colorName}</span>
          </div>
        );
      })}
    </div>
  );
};

export default VariantSelector;
