import React from "react";

const HeaderSection = ({ children }) => {
  return (
    <div>
      <p className="text-center text-blue-900 font-bold text-lg sm:text-3xl pt-16 pb-10">
        {children}
      </p>
    </div>
  );
};
export { HeaderSection };
