"use client";

import React from "react";
import { useInputContext } from "@/hooks/useInputContext";

const InputPreview = () => {
  const { inputText } = useInputContext();

  return (
    <div className="gap-4 flex-col w-96 h-96 bg-gray-100/90 rounded-sm flex items-center justify-center shadow-md">
      <label htmlFor="text">This 👇 is the Preview Component</label>
      <p className="text-xl">{inputText}</p>
    </div>
  );
};

export default InputPreview;
