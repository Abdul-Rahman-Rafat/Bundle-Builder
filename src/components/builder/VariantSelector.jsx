import React from "react";

const VariantSelector = ({ variants, activeVariantId, onSelect }) => {
  return (
    <div className="flex gap-2 ">
      {variants.map((v) => {
        return (
          <div
            key={v.id}
            onClick={() => onSelect(v.id)}
            className="w-1/3  flex justify-center items-center border border-gray-300 py-0.5   rounded-md text-xs transition-all duration-300 ease-in-out  hover:bg-gray-200 cursor-pointer"
          >
            <img className="w-5 h5" src={v.image} alt={v.colorName} />
            <span className="text-[10px]">{v.colorName}</span>
          </div>
        );
      })}
    </div>
  );
};

export default VariantSelector;
