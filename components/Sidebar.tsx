import React from "react";

export default function Sidebar() {
  return (
    <div className="flex-1">
      <div>
        <div className="grid w-64 h-20 rounded bg-primary text-primary-content place-content-center">
          1
        </div>
        <div className="grid w-64 h-20 rounded bg-accent text-accent-content place-content-center">
          2
        </div>
        <div className="grid w-64 h-20 rounded bg-secondary text-secondary-content place-content-center">
          3
        </div>
      </div>
    </div>
  );
}
