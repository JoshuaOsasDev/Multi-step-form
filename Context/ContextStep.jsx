import { Children, createContext, useState } from "react";

const ContextStep = createContext();
function ContextProvider({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  return (
    <ContextStep.Provider value={{ currentStep, setCurrentStep }}>
      {children}
    </ContextStep.Provider>
  );
}

export { ContextProvider, ContextStep };
