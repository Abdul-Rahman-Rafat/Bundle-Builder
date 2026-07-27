import React from "react";
import CheckoutButton from "./CheckoutButton";
import SaveForLaterLink from "./SaveForLaterLink";

const Summery = () => {
  return (
    <div className="flex flex-col gap-2.5">
      <div className="flex justify-between items-center max-[1440px]:flex-col max-[1440px]:gap-4">
        <div className="flex items-center gap-6">
          <img
            className="w-[78px] max-[1440px]:w-[130px]"
            src="/public/images/Satisfaction Badge-05 1.png"
            alt="Satisfaction Badge"
          />
          <div className="hidden max-[1440px]:block max-[430px]:hidden  ">
            <p className="text-lg">30-day hassle-free returns</p>
            <p className="text-lg text-[#7e7d7d]">
              If you're not totally in love with the <br /> product, we will
              refund you 100%.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-1 max-[1440px]:w-full max-[1440px]:flex-row max-[1440px]:justify-between max-[1440px]:items-center">
          <p className=" text-white text-xs text-center bg-[#4E2FD2] px-3 rounded-sm h-fit p-1 ">
            as low as $19.19/mo
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-lg line-through text-[#6F7882]">$238.81</span>
            <span className="text-2xl text-[#4E2FD2]">$187.89</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-[#0AA288] text-sm">
          Congrats! You’re saving $50.92 on your security bundle!
        </p>
        <CheckoutButton />
      </div>
      <SaveForLaterLink />
    </div>
  );
};

export default Summery;
