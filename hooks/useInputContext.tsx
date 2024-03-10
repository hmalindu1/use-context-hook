'use client'

import React, { createContext, useState, useContext } from "react";

// Define the context shape
interface InputContextType {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with a default value
const InputContext = createContext<InputContextType | undefined>(undefined);

// Create a custom hook for using this context
export const useInputContext = () => {
  const context = useContext(InputContext);
  if (!context) {
    throw new Error("useInputContext must be used within a InputProvider");
  }
  return context;
};

// Create a provider component
export const InputProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputText, setInputText] = useState("");

  return (
    <InputContext.Provider value={{ inputText, setInputText }}>
      {children}
    </InputContext.Provider>
  );
};
