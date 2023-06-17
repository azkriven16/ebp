"use client";
import { Anime } from "@/app/info/[id]/page";
import React, { useEffect } from "react";
import { shortenNumber } from "@/utils/shortenNumber";
import { animeStore } from "@/context";
import Link from "next/link";

export default function InfoDetail({ anime }: { anime: Anime }) {
  const setCurrentAnime = animeStore((state) => state.setCurrentAnime);
  useEffect(() => {
    setCurrentAnime(anime);
  }, []);

  return (
    <div className="flex gap-5">
      <div className="md:w-3/4 flex flex-col gap-2">
        <h1 className="text-4xl font-bold">
          {anime?.title?.english || anime?.title?.romaji}
        </h1>
        <div className="flex w-full text-sm">
          <p className="">{anime.releaseDate}</p>
          <div className="divider divider-horizontal"></div>
          <p className="">{anime.status}</p>
          <div className="divider divider-horizontal"></div>
          <p>
            Average Rating:
            {anime.rating ? (anime.rating / 20).toFixed(1) : "N/A"}/5
          </p>
          <p className="ml-2">({shortenNumber(anime.popularity)})</p>
        </div>
        <p className="line-clamp-6">
          {anime?.description?.replace(/<[^>]+>/g, "")}
        </p>
        <details className="collapse rounded-none">
          <summary className="text-xs font-semibold cursor-pointer text-anime">
            MORE DETAILS...
          </summary>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex gap-1">
              {anime.genres.map((gen, key) => {
                return (
                  <p key={key} className="btn btn-sm">
                    {gen}
                  </p>
                );
              })}
            </div>

            <div className="flex flex-col">
              <div className="border-b flex justify-between py-2">
                <p>Studio</p>
                {anime.studios.map((studio, key) => {
                  return <p key={key}>{studio}</p>;
                })}
              </div>

              <div className="border-b flex justify-between py-2">
                <p>Trailer</p>
                <p>
                  {anime?.trailer?.id ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    "NA"
                  )}
                </p>
              </div>

              <div className="border-b flex justify-between py-2">
                <p>Other name</p>
                <div className="flex flex-col">
                  <p>{anime?.title?.english}</p>
                  <p>{anime?.title?.native}</p>
                  <p>{anime?.title?.romaji}</p>
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>

      <div className="w-1/2 hidden md:flex flex-col gap-5 justify-end self-start">
        <img src={anime.image} className="aspect-video object-cover" alt="" />
        <Link
          href={`/watch/${anime.episodes[anime.episodes.length - 1].id}`}
          className="btn bg-anime hover:bg-anime/80 text-white"
        >
          START WATCHING EP 1
        </Link>
      </div>
    </div>
  );
}
