import { useState, useRef, useEffect } from "react";

const CheckoutButton = () => {
  const [label, setLabel] = useState("Checkout");

  const handleCheckout = () => {
    setLabel("Success!!!");

    setTimeout(() => {
      setLabel("Checkout");
    }, 1000);
  };
  return (
    <button
      onClick={handleCheckout}
      className={`
        ${label === "Checkout" ? "bg-[#4E2FD2] hover:bg-[#735ed3]" : "bg-[#0AA288] hover:bg-[#0AA288]"}
      w-full m-auto   text-white rounded-lg p-1.5 px-6 text-lg cursor-pointer transition-all duration-300 ease-in-out  
      `}
    >
      {label}
    </button>
  );
};

export default CheckoutButton;
