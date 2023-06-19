import React from "react";

export default function Loader() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center animate-pulse bg-base-300 h-52"></div>
      <div className="w-full h-5 bg-base-300 rounded skeleton"></div>
    </div>
  );
}

export const LoaderSlider = () => {
  return (
    <div className="container mx-auto max-w-5xl p-6">
      <div className="mb-4 w-64 h-10 bg-base-300 rounded skeleton"></div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6].map(() => {
          return <Loader />;
        })}
      </div>
    </div>
  );
};

export const LoaderGrid = () => {
  return (
    <div className="container mx-auto max-w-5xl p-6">
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {[1, 2, 3, 4, 5, 6].map(() => {
          return <Loader />;
        })}
      </div>
    </div>
  );
};
