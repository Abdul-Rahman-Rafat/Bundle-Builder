import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ProductsProvider } from "./context/ProductsContext.jsx";
import StepsProvider from "./context/StepsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StepsProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </StepsProvider>
  </StrictMode>,
);
