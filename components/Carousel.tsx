"use client";
import AnimeCard, { Anime } from "./AnimeCard";
import { recentPageStore } from "@/context";
import Slider from "react-slick";
import Link from "next/link";
import InfoDetail from "./InfoDetail";
import { readableDescription } from "@/utils/readableDescription";

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
    arrows: false,
  };
  const randomizedResults = data?.results?.sort(() => Math.random() - 0.5);
  return (
    <div className="bg-black hidden md:block">
      <div className="">
        <Slider {...settings}>
          {randomizedResults?.map((anime: Anime) => {
            return (
              <Link
                href={`/info/${anime.id}`}
                key={anime.id}
                className="h-[60vh] relative flex"
              >
                <img
                  className="h-full w-full object-contain"
                  src={anime.cover}
                  alt=""
                />

                <div className="absolute bottom-0 right-0 h-full w-full p-10 gap-5 pb-2 bg-gradient-to-t from-black to-transparent flex justify-start items-end">
                  <div className="w-1/2 flex flex-col gap-2 items-start justify-between h-48">
                    <h1 className="text-3xl font-bold text-white">
                      {anime.title.english || anime.title.romaji}
                    </h1>
                    <p className="line-clamp-2">
                      {readableDescription(anime?.description)}
                    </p>
                    <button className="btn bg-anime hover:bg-anime/90 text-white">
                      watch now
                    </button>
                  </div>
                </div>
              </Link>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
