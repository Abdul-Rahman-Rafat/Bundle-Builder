import CategoryItems from "./CategoryItems";
import ReviewHeader from "./ReviewHeader";
// import ReviewItem from "./ReviewItem";
import Summery from "./Summery";
import { CartContext } from "../../context/CartContext";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext, useMemo } from "react";

const CATEGORY_LABELS = {
  camera: "Cameras",
  sensor: "Sensors",
  accessory: "Accessories",
  plan: "Plan",
};

const ReviewPanel = () => {
  const { cart, increment, decrement } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const cartItems = useMemo(() => {
    return Object.entries(cart).flatMap(([productId, productCart]) => {
      const product = products.find((p) => p.id === Number(productId));
      if (!product) return [];

      return Object.entries(productCart.variants || {}).map(
        ([variantId, qty]) => ({
          product,
          variantId,
          qty,
          variant: product.variants.find((v) => v.id === variantId),
        }),
      );
    });
  }, [cart, products]);

  const grouped = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const key = item.product.category;
      const list = acc[key] || [];
      acc[key] = [...list, item];
      return acc;
    }, {});
  }, [cartItems]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0,
  );
  const originalTotal = cartItems.reduce(
    (sum, item) =>
      sum + (item.product.compareAtPrice ?? item.product.price) * item.qty,
    0,
  );
  const savings = originalTotal - subtotal;

  return (
    <div
      className="w-[400px] flex self-start
 flex-none flex-col justify-around  bg-[#EDF4FF] p-5 rounded-lg max-[1000px]:flex-col max-[1440px]:w-full max-[1440px]:flex-none max-[1440px]:flex-row
     "
    >
      <div>
        <ReviewHeader />
        {Object.entries(CATEGORY_LABELS).map(([category, label]) => (
          <CategoryItems
            key={category}
            title={label}
            items={grouped[category] || []}
            onIncrement={(item) => increment(item.product.id, item.variantId)}
            onDecrement={(item) => decrement(item.product.id, item.variantId)}
          />
        ))}
        <div className="pb-3.5 border-b  border-b-gray-300"></div>
        <div className="pb-3.5  flex  justify-between items-center">
          <div className="flex items-center gap-2">
            <img
              src="/public/images/carbon_delivery.webp"
              alt="Fast Shipping"
            />
            <p>Fast Shipping</p>
          </div>
          <div className="flex flex-col">
            <span className="line-through text-[#6F7882]">
              ${products[9].compareAtPrice}
            </span>
            <span>
              {products[9].price === 0 ? (
                <span className="text-[#4E2FD2]">FREE</span>
              ) : (
                <span>
                  $<span>{products[9].price}</span>
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <Summery
          subtotal={subtotal.toFixed(2)}
          originalTotal={originalTotal.toFixed(2)}
          savings={savings.toFixed(2)}
        />
      </div>
    </div>
  );
};

export default ReviewPanel;
