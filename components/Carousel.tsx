"use client";
import AnimeCard, { Anime } from "./AnimeCard";
import Pagination from "./Pagination";
import { recentPageStore } from "@/context";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
  };

  return (
    <div className="bg-[#191e24] hidden md:block">
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
                <div className="absolute bottom-2 right-0 m-5">
                  <button className="btn bg-anime text-white border-none hover:scale-105 hover:bg-anime/90">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                    {anime.title.english || anime.title.romaji}
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
