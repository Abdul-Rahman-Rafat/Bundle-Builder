import React from "react";
import { useState, useContext, useMemo } from "react";
import StepHeader from "./StepHeader";
import ProdcutCard from "./ProdcutCard";
import { ProductsContext } from "../../context/ProductsContext";
import { CartContext } from "../../context/CartContext";

const Step = ({ step, steps, activeStep, setActiveStep }) => {
  const { products } = useContext(ProductsContext);
  const { cart } = useContext(CartContext);

  const open = activeStep === step.id;

  const currentIndex = steps.findIndex((s) => s.id === step.id);
  const nextStep = steps[currentIndex + 1];
  // console.log(steps);

  const selectedCount = useMemo(() => {
    return products.filter((product) => {
      if (product.category !== step.category) return false;
      const productCart = cart[product.id];
      return (
        productCart &&
        Object.values(productCart.variants || {}).some((qty) => qty > 0)
      );
    }).length;
  }, [cart, products, step.category]);

  return (
    <div
      className={`flex flex-col gap-4 cursor-pointer ${open === true ? "bg-[#EDF4FF]" : ""} px-8 max-[1440px]:px-4 pb-4 rounded-lg  `}
    >
      <StepHeader
        step={step}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        selectedCount={selectedCount}
        open={open}
      />
      {/* product cards */}
      <div
        className={`flex flex-col gap-4 transition-all duration-500 ease-in-out overflow-hidden ${open ? "max-h-[1500px]" : "max-h-0"} `}
      >
        <div className=" flex flex-wrap gap-1.5 justify-center ">
          {/* pass products data */}
          {products
            .filter((product) => {
              return product.category === step.category;
            })
            .map((product) => (
              <ProdcutCard key={product.id} product={product} />
            ))}
        </div>
        {nextStep && (
          <div className="m-auto">
            <button
              onClick={() => setActiveStep(nextStep.id)}
              className="min-w-64 mb border border-[#4E2FD2] text-[#4E2FD2] rounded-lg p-1.5 px-6 text-lg m-auto cursor-pointer transition-all duration-300 ease-in-out hover:bg-blue-100"
            >
              Next: {nextStep.title}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Step;
