"use client";
import { recentPageStore } from "@/context";
import React from "react";

export default function Pagination() {
  const increase = recentPageStore((state) => state.increase);
  const decrease = recentPageStore((state) => state.decrease);
  const page = recentPageStore((state) => state.page);
  return (
    <div className="join grid grid-cols-2 max-w-xs mb-10">
      <button
        onClick={() => decrease(1)}
        className="join-item flex btn btn-xs md:btn-sm"
        disabled={page === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        prev
      </button>
      <button
        onClick={() => increase(1)}
        className="join-item btn btn-xs md:btn-sm"
      >
        next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </div>
  );
}
