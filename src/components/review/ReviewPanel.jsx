import CategoryItems from "./CategoryItems";
import ReviewHeader from "./ReviewHeader";
import ReviewItem from "./ReviewItem";
import Summery from "./Summery";

const ReviewPanel = () => {
  return (
    <div
      className="w-[400px] flex flex-none flex-col justify-around  bg-[#EDF4FF] p-5 rounded-lg max-[1000px]:flex-col max-[1440px]:w-full max-[1440px]:flex-none max-[1440px]:flex-row
     "
    >
      <div>
        <ReviewHeader />
        <CategoryItems />
        <CategoryItems />
        <CategoryItems />
        <CategoryItems />
        <div className="pb-2.5 border-b border-b-gray-300"></div>
        <ReviewItem />
      </div>
      <div>
        <Summery />
      </div>
    </div>
  );
};

export default ReviewPanel;
