import Step from "./Step";

const Builder = () => {
  return (
    <div className="w-[800px] flex-none  max-[1440px]:w-full bg-[#EDF4FF] p-8 rounded-lg ">
      <h1 className="hidden max-[430px]:block text-3xl  ">
        Let’s get started!
      </h1>
      {/* accordions */}
      <Step />
    </div>
  );
};

export default Builder;
