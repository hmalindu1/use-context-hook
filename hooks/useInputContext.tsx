'use client'

import React, { createContext, useState, useContext } from "react";

// Define the context shape. This is the shape of the data that our context will provide
interface InputContextType {
  inputText: string; // The input text from the user
  setInputText: React.Dispatch<React.SetStateAction<string>>; // A function to set the input text from the user
}

// Create the context with a default value. This sets up the context with a default empty string and a function to set the input text
const InputContext = createContext<InputContextType | undefined>(undefined);

// Create a custom hook for using this context. This hook allows us to access the input text and function to set the input text from the context
export const useInputContext = () => {
  const context = useContext(InputContext); // Get the context from the nearest Provider
  if (!context) { // Check if the context is not defined. This should never happen unless we are not using our provider
    throw new Error("useInputContext must be used within a InputProvider"); // Throw an error if the context is not defined
  }
  return context; // Return the context
};

// Create a provider component. This component sets up the context and provides it to it's children
export const InputProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [inputText, setInputText] = useState(""); // Set up the state for the input text

  return (
    <InputContext.Provider value={{ inputText, setInputText }}> { /*Create a provider for the context and pass in the current input text and function to set the input text */}
      {children} {/* Render the children of this component */}
    </InputContext.Provider>
  );
};
