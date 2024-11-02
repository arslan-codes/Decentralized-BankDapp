import React from "react";

const SwapForm = ({ children }) => {
  return (
    <div className="flex flex-col items-center mt-3">
      <div className="bg-white  flex flex-col rounded-xl shadow-lg p-6 w-3/4 h-70 sm:h-96 sm:w-96 max-w-md">
        {children}
      </div>
    </div>
  );
};

export default SwapForm;
