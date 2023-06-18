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
              <div key={anime.id} className="h-[50vh] relative flex">
                <img
                  className="h-full w-full object-contain"
                  src={anime.cover}
                  alt=""
                />
                <div className="absolute bottom-2 right-0 m-5 bg-base-100 flex rounded-xl px-5 py-3 items-center justify-center gap-5">
                  <p className="text-xl">{anime.title.english}</p>
                  <Link
                    href={`/info/${anime.id}`}
                    className="btn btn-ghost bg-anime hover:bg-anime/90 hover:scale-105 text-white"
                  >
                    watch now
                  </Link>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
