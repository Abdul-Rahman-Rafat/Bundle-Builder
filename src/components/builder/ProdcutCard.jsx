import React from "react";
import VariantSelector from "./VariantSelector";
import Quantity from "./Quantity";

const ProdcutCard = ({ product }) => {
  return (
    <div
      className="w-[360px] max-w-[360px] min-w-[220px] flex gap-3  bg-white  rounded-2xl p-1.5 cursor-pointer  border-2  border-white transition-all duration-300 ease-out  hover:border-[#4E2FD2]
    max-[1440px]:flex-col max-[1440px]:flex-1 max-[1440px]:flex-wrap"
    >
      <div className="relative p-1.5 rounded-2xl">
        {product.compareAtPrice === null ? (
          ""
        ) : (
          <span className="w-20 absolute  top-0 rounded-2xl text-xs text-white bg-[#4E2FD2]  text-center py-1 ">
            {" "}
            Save{" "}
            {100 - ((product.price / product.compareAtPrice) * 100).toFixed(0)}%
          </span>
        )}
        <img className=" m-auto " src={product.image} alt={product.name} />
      </div>

      <div className="flex flex-col gap-1">
        <h2>{product.name}</h2>
        <p className="text-xs text-gray-400">
          {product.description} <br />{" "}
          <span className="text-blue-700 cursor-pointer underline">
            Learn More
          </span>{" "}
        </p>
        {product.variants.length ? (
          <VariantSelector variants={product.variants} />
        ) : (
          ""
        )}

        <div className="flex items-center justify-between  ">
          <Quantity />
          <div className=" flex flex-col items-end ">
            {product.compareAtPrice === null ? (
              ""
            ) : (
              <span className="line-through text-[#D8392B]">
                ${product.compareAtPrice}{" "}
              </span>
            )}

            <span>${product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdcutCard;
