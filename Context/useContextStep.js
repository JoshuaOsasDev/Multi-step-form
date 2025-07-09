// src/Context/useContextStep.js
import { useContext } from "react";
import { ContextStep } from "./ContextStep";
export function useContextStep() {
  const context = useContext(ContextStep);
  if (!context) {
    throw new Error("useContextStep must be used within a ContextProvider");
  }
  return context;
}
