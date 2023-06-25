import React from "react";

export default function loading() {
  return (
    <div className="animate-pulse">
      <div className="flex items-center space-x-4">
        <div className="flex-1 py-4">
          <div className="w-2/3 h-4 bg-gray-500 rounded"></div>
          <div className="w-1/2 h-4 bg-gray-500 rounded mt-2"></div>
          <div className="w-3/4 h-4 bg-gray-500 rounded mt-2"></div>
        </div>
        <div className="w-16 h-16 bg-gray-500 rounded-full"></div>
      </div>
      <div className="flex-1 py-4">
        <div className="w-full h-4 bg-gray-500 rounded"></div>
        <div className="w-full h-4 bg-gray-500 rounded mt-2"></div>
        <div className="w-full h-4 bg-gray-500 rounded mt-2"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="w-full h-40 bg-gray-500 rounded"></div>
        <div className="w-full h-40 bg-gray-500 rounded"></div>
        <div className="w-full h-40 bg-gray-500 rounded"></div>
        <div className="w-full h-40 bg-gray-500 rounded"></div>
      </div>

      <div className="flex-1 py-4">
        <div className="w-full h-4 bg-gray-500 rounded"></div>
        <div className="w-full h-4 bg-gray-500 rounded mt-2"></div>
        <div className="w-full h-4 bg-gray-500 rounded mt-2"></div>
      </div>
    </div>
  );
}
