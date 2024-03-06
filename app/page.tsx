import React from "react";

const page = () => {
  return (
    <div className="flex flex-row gap-4 justify-center items-center w-screen h-screen text-center">
      <div className="w-96 h-96 bg-slate-100/90 rounded-sm">Input</div>
      <div className="w-96 h-96 bg-slate-100/90 rounded-sm">Preview</div>
    </div>
  );
};

export default page;
