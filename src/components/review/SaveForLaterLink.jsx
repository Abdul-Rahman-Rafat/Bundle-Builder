import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const SaveForLaterLink = () => {
  const { saveCart } = useContext(CartContext);

  return (
    <p
      onClick={saveCart}
      className="text-gray-400 underline text-center cursor-pointer"
    >
      Save my system for later
    </p>
  );
};

export default SaveForLaterLink;
