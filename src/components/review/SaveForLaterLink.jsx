import { useContext, useState, useRef, useEffect } from "react";
import { CartContext } from "../../context/CartContext";

const SaveForLaterLink = () => {
  const { saveCart } = useContext(CartContext);
  const [save, setSave] = useState("Save my system for later");

  const handleSave = () => {
    saveCart();
    setSave("your system is saved successfully");

    setTimeout(() => {
      setSave("Save my system for later");
    }, 1000);
  };

  return (
    <p
      onClick={handleSave}
      className={`
        ${save === "Your system is saved successfully" ? "text-[#0AA288]" : "text-gray-400"}
         underline text-center cursor-pointer`}
    >
      {save}
    </p>
  );
};

export default SaveForLaterLink;
