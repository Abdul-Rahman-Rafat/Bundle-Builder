import Step from "./Step";

const Builder = () => {
  return (
    <div className="w-[800px] flex-none   bg-[#EDF4FF] p-8 rounded-lg max-[1440px]:w-full">
      <h1 className="hidden mb-5 text-3xl text-center  max-[430px]:block ">
        Let’s get started!
      </h1>
      {/* accordions */}
      <Step />
    </div>
  );
};

export default Builder;
