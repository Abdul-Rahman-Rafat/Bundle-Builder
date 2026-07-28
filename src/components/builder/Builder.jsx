import Step from "./Step";
import { useState, useContext } from "react";
import { StepsContext } from "../../context/StepsContext";

const Builder = () => {
  const { steps } = useContext(StepsContext);
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="w-[800px] flex-none     max-[1440px]:w-full">
      <h1 className="hidden mb-5 text-3xl text-center  max-[430px]:block ">
        Let’s get started!
      </h1>
      {/* accordions */}
      {steps.map((step) => {
        return (
          <Step
            key={step.id}
            step={step}
            steps={steps}
            activeStep={activeStep}
            setActiveStep={setActiveStep}
          />
        );
      })}
    </div>
  );
};

export default Builder;
