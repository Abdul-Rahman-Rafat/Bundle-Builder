import React from "react";
import ReviewItem from "./ReviewItem";

const CategoryItems = ({ title, items, onIncrement, onDecrement }) => {
  if (!items.length) return null;

  return (
    <div className="pb-2.5 border-t border-t-gray-300">
      <p className="text-gray-300">{title}</p>
      {items.map((item) => (
        <ReviewItem
          key={`${item.product.id}-${item.variantId}`}
          item={item}
          onIncrement={() => onIncrement(item)}
          onDecrement={() => onDecrement(item)}
        />
      ))}
    </div>
  );
};

export default CategoryItems;
