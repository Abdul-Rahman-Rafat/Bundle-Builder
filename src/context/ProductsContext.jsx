import { createContext, useState } from "react";
import productsJsonData from "../data/products.json";

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  let [products, setProducts] = useState(productsJsonData);
  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
