import React from "react";

export default function loading() {
  return (
    <div className="animate-pulse">
      <div className="flex-1 py-4">
        <div className="w-full h-5 my-2 bg-gray-500 rounded"></div>
        <div className="w-full h-5 my-2 bg-gray-500 rounded"></div>
        <div className="w-full h-5 my-2 bg-gray-500 rounded"></div>
      </div>

      <div className="w-full h-36 sm:h-56 bg-gray-500 rounded"></div>
      <div className="w-full h-36 sm:h-56 bg-gray-500 rounded mt-10"></div>
    </div>
  );
}
