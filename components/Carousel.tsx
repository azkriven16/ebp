"use client";
import AnimeCard, { Anime } from "./AnimeCard";
import Pagination from "./Pagination";
import { recentPageStore } from "@/context";
import Slider from "react-slick";
import Link from "next/link";

async function getData({ page }: { page: number }) {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/trending?page=${page}`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Carousel() {
  const page = recentPageStore((state) => state.page);
  const data = await getData({ page });

  const settings = {
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-black hidden md:block">
      <div className="px-10">
        <Slider {...settings}>
          {data.results.map((anime: Anime) => {
            return (
              <Link
                href={`/info/${anime.id}`}
                key={anime.id}
                className="h-[50vh] relative flex"
              >
                <img
                  className="h-full w-full object-contain"
                  src={anime.cover}
                  alt=""
                />
                <div className="absolute bottom-0 right-0 h-full w-full bg-gradient-to-t from-black to-transparent flex justify-between items-end p-10 gap-5 pb-2">
                  <h1 className="text-3xl font-bold text-white">
                    {anime.title.english || anime.title.romaji}
                  </h1>
                  <button className="btn bg-anime hover:bg-anime/90 text-white">
                    watch now
                  </button>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
