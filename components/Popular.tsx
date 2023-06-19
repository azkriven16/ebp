"use client";
import AnimeCard, { Anime } from "./AnimeCard";
import Pagination from "./Pagination";
import { recentPageStore } from "@/context";

async function getData({ page }: { page: number }) {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/popular?page=${page}`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Popular() {
  const page = recentPageStore((state) => state.page);
  const data = await getData({ page });
  return (
    <div className="container mx-auto max-w-5xl p-6">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Popular Anime</h2>
        <Pagination />
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {data.results.map((anime: Anime) => {
          return <AnimeCard key={anime.id} anime={anime} />;
        })}
      </div>
    </div>
  );
}
