import React from "react";
import Quantity from "../builder/Quantity";

function ReviewItem({ item, onIncrement, onDecrement }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <img
          className={`${item.variant ? "" : "w-6"}`}
          src={item.variant?.image || item.product.image}
          alt="Wyze Cam v4"
        />
        <p className="text-sm">{item.product.name}</p>
        {item.variant ? (
          <p className="text-gray-500 text-xs">{item.variant.colorName}</p>
        ) : null}
      </div>
      <div className="flex items-center gap-3.5">
        <Quantity quantity={item.qty} onInc={onIncrement} onDec={onDecrement} />
        <div className="flex flex-col items-end text-sm">
          {item.product.compareAtPrice ? (
            <span className="line-through text-[#6F7882]">
              ${(item.product.compareAtPrice * item.qty).toFixed(2)}
            </span>
          ) : null}
          <span className="text-[#4E2FD2]">
            ${(item.product.price * item.qty).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
