"use client";
import Slider from "react-slick";
import AnimeCard, { Anime } from "./AnimeCard";
import Pagination from "./Pagination";
import { recentPageStore } from "@/context";
import { usePathname } from "next/navigation";
import { settings } from "./Trending";

async function getData({ page }: { page: number }) {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/recent-episodes?page=${page}&perPage=18`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Recent() {
  const pathname = usePathname();
  const page = recentPageStore((state) => state.page);
  const data = await getData({ page });
  return (
    <div className="container mx-auto max-w-5xl p-6">
      <div className="flex justify-between">
        <div>
          <h2 className="text-2xl text-white mix-blend-difference">
            Recent Anime
          </h2>
          <p>Stay up to date with the latest releases!</p>
        </div>
        {pathname !== "/" && pathname !== "/search" ? (
          <Pagination />
        ) : (
          <a href="/recent" className="btn">
            more
          </a>
        )}
      </div>
      <div className="divider bg-anime h-1"></div>
      {pathname === "/" ? (
        <div>
          <Slider {...settings}>
            {data?.results?.map((anime: Anime) => {
              return (
                <div key={anime.id} className="px-2">
                  <AnimeCard anime={anime} />
                </div>
              );
            })}
          </Slider>
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
