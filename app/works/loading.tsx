import React from "react";

export default function loading() {
  return (
    <div className="animate-pulse">
      <div className="flex-1 py-4">
        <div className="w-28 h-6 bg-gray-500 rounded"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="w-full h-40 bg-gray-500 rounded"></div>
        <div className="w-full h-40 bg-gray-500 rounded"></div>
        <div className="w-full h-40 bg-gray-500 rounded"></div>
        <div className="w-full h-40 bg-gray-500 rounded"></div>
      </div>

      <div className="flex-1 py-4">
        <div className="w-28 h-6 bg-gray-500 rounded"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
        <div className="w-full h-40 bg-gray-500 rounded"></div>
        <div className="w-full h-40 bg-gray-500 rounded"></div>
        <div className="w-full h-40 bg-gray-500 rounded"></div>
        <div className="w-full h-40 bg-gray-500 rounded"></div>
      </div>
    </div>
  );
}
