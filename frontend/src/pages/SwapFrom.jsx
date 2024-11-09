import React from "react";

const SwapForm = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-3">
      <div
        className="bg-white  flex flex-col rounded-xl  p-6 w-3/4 h-70 sm:h-full sm:w-96 
      max-w-md focus:ring-4 focus:outline-none focus:ring-purple-100 shadow-md shadow-slate-200"
      >
        {children}
      </div>
    </div>
  );
};

export default SwapForm;
