import InputPreview from "@/components/InputPreview";
import TextInput from "@/components/TextInput";
import { InputProvider } from "@/hooks/useInputContext";
import React from "react";

const page = () => {
  return (
    <InputProvider>
      <div className="flex flex-col items-center justify-center text-center w-screen h-screen gap-5">
        <h1 className="text-3xl font-semibold">
          Usage of Context API in React 🤓
        </h1>
        <div className="flex flex-row gap-10 justify-center items-center  text-center">
          <TextInput />
          <InputPreview />
        </div>
      </div>
    </InputProvider>
  );
};

export default page;
