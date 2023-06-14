import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center animate-pulse bg-base-300 h-52"></div>
      <div className="w-full h-5 bg-base-300 rounded skeleton"></div>
    </div>
  );
}
