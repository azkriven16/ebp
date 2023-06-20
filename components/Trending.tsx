"use client";
import AnimeCard, { Anime } from "./AnimeCard";
import Pagination from "./Pagination";
import { recentPageStore } from "@/context";
import { usePathname } from "next/navigation";

async function getData({ page }: { page: number }) {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/trending?page=${page}&perPage=18`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Trending() {
  const pathname = usePathname();
  const page = recentPageStore((state) => state.page);
  const data = await getData({ page });
  return (
    <div className="container mx-auto max-w-5xl p-6">
      <div className="flex justify-between items-center gap-2">
        <div>
          <h2 className="text-xl sm:text-2xl text-white mix-blend-difference">
            Trending Anime
          </h2>
          <p className="text-sm sm:text-md">
            Immerse in the most trending anime series!
          </p>
        </div>
        {pathname !== "/" && pathname !== "/search" ? (
          <Pagination />
        ) : (
          <a href="/trending" className="btn btn-sm sm:btn-md">
            more
          </a>
        )}
      </div>
      <div className="divider bg-anime h-0.5"></div>
      {pathname === "/" || pathname === "/search" ? (
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {data?.results?.slice(0, 6).map((anime: Anime) => {
            return <AnimeCard key={anime.id} anime={anime} />;
          })}
        </div>
      ) : (
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {data?.results?.map((anime: Anime) => {
            return <AnimeCard key={anime.id} anime={anime} />;
          })}
        </div>
      )}
      {pathname !== "/" && (
        <div className="max-w-xl mx-auto flex justify-center mt-10">
          <Pagination />
        </div>
      )}
    </div>
  );
}
