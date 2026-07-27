import React from "react";
import { useState, useContext } from "react";
import StepHeader from "./StepHeader";
import ProdcutCard from "./ProdcutCard";
import { ProductsContext } from "../../context/ProductsContext";

const Step = ({ step }) => {
  const [open, setOpen] = useState(true);
  const { products } = useContext(ProductsContext);

  // console.log(steps);
  function accordionHandle() {
    setOpen((prev) => !prev);
  }
  return (
    <div
      onClick={accordionHandle}
      className="flex flex-col gap-4 cursor-pointer"
    >
      <StepHeader step={step} />
      {/* product cards */}
      <div className=" flex flex-wrap gap-4 justify-center ">
        {/* pass products data */}
        {products
          .filter((product) => {
            return product.category === step.category;
          })
          .map((product) => (
            <ProdcutCard key={product.id} product={product} />
          ))}
      </div>
      <button className="w-64 border border-[#4E2FD2] text-[#4E2FD2] rounded-lg p-1.5 px-6 text-lg  m-auto cursor-pointer transition-all duration-300 ease-in-out  hover:bg-blue-100">
        Next: Choose your plan
      </button>
    </div>
  );
};

export default Step;
