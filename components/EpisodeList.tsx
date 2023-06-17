"use client";
import { Anime, Episode } from "@/app/info/[id]/page";
import EpisodeCard from "./EpisodeCard";
import { useState } from "react";
import { animeStore } from "@/context";

export default function EpisodeList() {
  const [filter, setFilter] = useState("newest");
  const anime = animeStore((state) => state.currentAnime);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">
          {anime?.title?.english || anime?.title?.romaji} Episodes
        </h1>
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
              <a className={`${filter === "oldest" && "text-anime"}`}>Oldest</a>
            </li>
            <li onClick={() => setFilter("newest")}>
              <a className={`${filter === "newest" && "text-anime"}`}>Newest</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filter === "oldest"
          ? anime.episodes
              .slice()
              .reverse()
              .map((ep: Episode) => {
                return <EpisodeCard ep={ep} />;
              })
          : anime.episodes.map((ep: Episode) => {
              return <EpisodeCard ep={ep} />;
            })}
      </div>
    </div>
  );
}
