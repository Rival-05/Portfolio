import React from "react";

export const Glow = () => {
  return (
    <div className="flex items-center justify-between w-[74px] lg:mt-1  mt-4 gap-2 px-2 text-sm font-normal text-gray-700 dark:text-gray-300 border dark:border-gray-500 border-gray-700 rounded-xl tracking-normal">
      online
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
    </div>
  );
};

export default Glow;
