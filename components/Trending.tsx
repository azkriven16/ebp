"use client";
import Slider from "react-slick";
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
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl text-white mix-blend-difference">
            Trending Anime
          </h2>
          <p>Dive deep in the latest trends in anime.</p>
        </div>

        {pathname !== "/" && pathname !== "/search" ? (
          <Pagination />
        ) : (
          <a href="/trending" className="btn">
            more
          </a>
        )}
      </div>

      <div className="divider bg-anime h-1"></div>
      {pathname === "/" || pathname === "/search" ? (
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
      {pathname !== "/" && pathname !== "/search" && (
        <div className="max-w-xl mx-auto flex justify-center mt-10">
          <Pagination />
        </div>
      )}
    </div>
  );
}

export const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 6,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
  ],
};
