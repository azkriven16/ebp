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
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {filter === "oldest"
          ? anime?.recommendations
              ?.slice()
              ?.reverse()
              ?.map((ep: Anime) => {
                return <AnimeCard anime={ep} />;
              })
          : anime?.recommendations?.map((ep: Anime) => {
              return <AnimeCard anime={ep} />;
            })}
      </div>
    </div>
  );
}
