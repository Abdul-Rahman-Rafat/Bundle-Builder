import { createContext, useState } from "react";
import StepsJsonData from "../data/steps.json";

let StepsContext = createContext();

export default function StepsProvider({ children }) {
  let [steps, setSteps] = useState(StepsJsonData);
  return (
    <StepsContext.Provider value={{ steps, setSteps }}>
      {children}
    </StepsContext.Provider>
  );
}
