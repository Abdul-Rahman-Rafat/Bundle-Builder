import React from "react";

const StepHeader = () => {
  return (
    <div>
      {/* pass the id of step here */}
      <p className="text-[#484848] border-b border-b-gray-400 max-[690px]:text-sm">
        Step 1 OF 4
      </p>

      <div className="flex justify-between items-center pt-5 ">
        <div className="w-4/5  flex items-center gap-1">
          {/* pass the step icon  */}
          <img
            className="w-6 h-6"
            src="/public/images/icons/camera icon.png"
            alt="Wyze_Cam v4"
          />
          {/* pass the step title   */}
          <p className="text-2xl max-[690px]:text-lg">Choose your cameras</p>
        </div>

        <div className=" w-24 flex items-center gap-1 text-[#4E2FD2] max-[690px]:text-sm  ">
          {/* count of selected items */}
          <span className="">
            {" "}
            <span>2</span> selected{" "}
          </span>
          <span className=""> ⏷ </span>
        </div>
      </div>
    </div>
  );
};

export default StepHeader;
