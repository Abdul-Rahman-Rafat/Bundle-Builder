import Step from "./Step";
import { useContext } from "react";
import { StepsContext } from "../../context/StepsContext";

const Builder = () => {
  const { steps } = useContext(StepsContext);

  return (
    <div className="w-[800px] flex-none   bg-[#EDF4FF] p-8 rounded-lg max-[1440px]:w-full">
      <h1 className="hidden mb-5 text-3xl text-center  max-[430px]:block ">
        Let’s get started!
      </h1>
      {/* accordions */}
      {steps.map((step) => {
        return <Step key={step.id} step={step} />;
      })}
    </div>
  );
};

export default Builder;
