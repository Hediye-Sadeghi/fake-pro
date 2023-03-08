import React from "react";

const CommenButton = ({children}) => {
  return (
    <button
    type="submit"
    className="relative shadow-md flex justify-center rounded-lg border border-orange-500 bg-orange-500 p-2 font-semibold text-blue-900 hover:bg-orange-200 hover:border hover:border-orange-300 mx-4"
  >
    <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
    {children}
  </button>
  );
};
export { CommenButton };
