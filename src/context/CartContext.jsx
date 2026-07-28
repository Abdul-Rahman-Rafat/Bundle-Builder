import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const saved = localStorage.getItem("bundle_cart");
    if (saved) {
      try {
        setCart(JSON.parse(saved));
      } catch (error) {
        console.error("Invalid saved cart", error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("bundle_cart", JSON.stringify(cart));
  }, [cart]);

  function setActiveVariant(productId, variantId) {
    setCart((prev) => {
      const p = prev[productId] || {
        selectedVariantId: variantId,
        variants: {},
      };
      return {
        ...prev,
        [productId]: { ...p, selectedVariantId: variantId },
      };
    });
  }

  function setQuantity(productId, variantId, qty) {
    setCart((prev) => {
      const p = prev[productId] || {
        selectedVariantId: variantId,
        variants: {},
      };
      const variants = { ...p.variants };

      if (qty <= 0) {
        delete variants[variantId];
      } else {
        variants[variantId] = qty;
      }

      const next = { ...prev };

      if (Object.keys(variants).length === 0) {
        delete next[productId];
      } else {
        const selectedVariantId =
          variants[p.selectedVariantId] !== undefined
            ? p.selectedVariantId
            : variantId;
        next[productId] = { ...p, selectedVariantId, variants };
      }

      return next;
    });
  }

  function increment(productId, variantId) {
    setCart((prev) => {
      const p = prev[productId] || {
        selectedVariantId: variantId,
        variants: {},
      };
      const current = (p.variants[variantId] || 0) + 1;
      return {
        ...prev,
        [productId]: {
          ...p,
          selectedVariantId: variantId,
          variants: { ...p.variants, [variantId]: current },
        },
      };
    });
  }

  function decrement(productId, variantId) {
    setCart((prev) => {
      const p = prev[productId];
      if (!p) return prev;

      const current = (p.variants[variantId] || 0) - 1;
      const variants = { ...p.variants };

      if (current <= 0) {
        delete variants[variantId];
      } else {
        variants[variantId] = current;
      }

      const next = { ...prev };
      if (Object.keys(variants).length === 0) {
        delete next[productId];
      } else {
        next[productId] = {
          ...p,
          variants,
          selectedVariantId:
            variants[p.selectedVariantId] !== undefined
              ? p.selectedVariantId
              : Object.keys(variants)[0],
        };
      }

      return next;
    });
  }

  return (
    <CartContext.Provider
      value={{ cart, setActiveVariant, setQuantity, increment, decrement }}
    >
      {children}
    </CartContext.Provider>
  );
}
