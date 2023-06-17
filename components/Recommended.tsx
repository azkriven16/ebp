"use client";
import { useState } from "react";
import AnimeCard, { Anime } from "./AnimeCard";
import { animeStore } from "@/context";

export default function Recommended() {
  const [filter, setFilter] = useState("newest");
  const anime = animeStore((state) => state.currentAnime);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">You might also like</h1>
        <div className="dropdown dropdown-end min-w-[110px]">
          <label tabIndex={0} className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75H12a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
            filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-300 rounded-box w-52 z-10"
          >
            <li onClick={() => setFilter("oldest")}>
              <a>Oldest</a>
            </li>
            <li onClick={() => setFilter("newest")}>
              <a>Newest</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filter === "oldest"
          ? anime.recommendations
              .slice()
              .reverse()
              .map((ep: Anime) => {
                return <AnimeCard anime={ep} />;
              })
          : anime.recommendations.map((ep: Anime) => {
              return <AnimeCard anime={ep} />;
            })}
      </div>
    </div>
  );
}
