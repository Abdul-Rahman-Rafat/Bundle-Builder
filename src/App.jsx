import "./App.css";
import BundleBuilder from "./pages/BundleBuilder";

//context imports
// import { useContext } from "react";
// import { ProductsContext } from "./context/ProductsContext";
// import { StepsContext } from "./context/StepsContext";

function App() {
  ////useContexts
  // const { products } = useContext(ProductsContext);
  // const { steps } = useContext(StepsContext);
  return (
    <div style={{ fontFamily: "Gilroy" }}>
      <BundleBuilder />

      {/* context Data */}
      {/* <div className="productsdata">
        {products
          .filter((product) => {
            return product.id <= 6;
          })
          .map((p) => (
            <h3 key={p.id}>{p.name}</h3>
          ))}
      </div>
      <div className="stepsdata">
        {steps
          .filter((step) => {
            return step.id <= 6;
          })
          .map((p) => (
            <h3 key={p.id}>{p.title}</h3>
          ))}
      </div> */}
    </div>
  );
}

export default App;
