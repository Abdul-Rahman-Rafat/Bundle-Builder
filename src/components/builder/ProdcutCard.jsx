import VariantSelector from "./VariantSelector";
import Quantity from "./Quantity";
import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ProdcutCard = ({ product }) => {
  const { cart, setActiveVariant, increment, decrement } =
    useContext(CartContext);
  const productCart = cart[product.id] || {
    selectedVariantId: product.variants[0]?.id,
    variants: {},
  };

  const activeVariantId =
    productCart.selectedVariantId || product.variants[0]?.id || "default";

  const quantity = productCart.variants?.[activeVariantId] || 0;

  const isSelected = Object.values(productCart.variants || {}).some(
    (qty) => qty > 0,
  );

  return (
    <div
      className={`w-[360px] max-w-[360px] min-w-[200px] min-h-44  flex gap-2  bg-white  rounded-2xl p-1.5 cursor-pointer  border-2  border-white transition-all duration-300 ease-out  hover:border-[#4E2FD2]
    max-[1440px]:flex-col max-[1440px]:flex-1 max-[1440px]:flex-wrap max-[1440px]:max-w-[225px]

    ${product.variants.length ? "" : " gap-8"}

    `}
    >
      <div className="relative p-1.5 rounded-2xl">
        {product.compareAtPrice === null || product.price === 0 ? (
          ""
        ) : (
          <span className="w-20 absolute  top-0 rounded-2xl text-xs text-white bg-[#4E2FD2]  text-center py-1 ">
            {" "}
            Save{" "}
            {100 - ((product.price / product.compareAtPrice) * 100).toFixed(0)}%
          </span>
        )}
        <img className=" m-auto " src={product.image} alt={product.name} />
      </div>

      <div className="flex flex-col gap-1">
        <h2>
          {product.name} {product.isRequired ? "(Required)" : ""}
        </h2>
        <p className="text-[14px] text-gray-400">
          {product.description}{" "}
          <span className="text-blue-700 cursor-pointer underline">
            Learn More
          </span>{" "}
        </p>
        {product.variants.length ? (
          <VariantSelector
            variants={product.variants}
            activeVariantId={activeVariantId}
            onSelect={(vid) => setActiveVariant(product.id, vid)}
          />
        ) : (
          ""
        )}

        <div className="flex items-center justify-between  ">
          <Quantity
            quantity={quantity}
            onInc={() => increment(product.id, activeVariantId)}
            onDec={() => decrement(product.id, activeVariantId)}
            disabled={product.isRequired}
          />
          <div className=" flex flex-col items-end ">
            {product.compareAtPrice === null ? (
              ""
            ) : (
              <span className="line-through text-[#D8392B]">
                ${product.compareAtPrice}{" "}
              </span>
            )}

            <span>
              {product.price === 0 ? (
                <span className="text-emerald-500">FREE</span>
              ) : (
                <span>
                  $<span>{product.price}</span>
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdcutCard;
