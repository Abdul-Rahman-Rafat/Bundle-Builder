import React from "react";
import Quantity from "../builder/Quantity";

function ReviewItem() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <img
          src="/public/images/Wyze_Cam v4/Wyze Cam v4 selection(white).png"
          alt="Wyze Cam v4"
        />
        <p>Wyze Cam v4</p>
      </div>
      <div className="flex items-center gap-3.5">
        <Quantity />
        <div className=" flex flex-col items-end text-sm ">
          <span className="line-through text-[#6F7882]">$35.98 </span>
          <span className="text-[#4E2FD2]">$27.98</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
