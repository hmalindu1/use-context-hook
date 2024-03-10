'use client'

import React from 'react';
import { useInputContext } from '@/hooks/useInputContext';

const TextInput = () => {
  const { inputText, setInputText } = useInputContext();
  
  return (
    <div className="w-96 h-96 bg-gray-100/90 rounded-sm flex flex-col items-center justify-center gap-4 shadow-md">
      <label htmlFor="text">This 👇 is the Input Component</label>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        name="Name"
        id="text"
        className="border rounded-md"
      />
    </div>
  );
};

export default TextInput;