import React from "react";
import ReviewItem from "./ReviewItem";

const CategoryItems = () => {
  return (
    <div className="pb-2.5 border-t border-t-gray-300">
      {/* pass steps data title */}
      <p className="text-gray-300">Cameras</p>
      <ReviewItem/>
      <ReviewItem/>
    </div>
  );
};

export default CategoryItems;
