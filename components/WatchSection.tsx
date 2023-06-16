"use client";
import { animeStore } from "@/context";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { convertDateToWords } from "@/utils/convertDate";

export default function WatchSection() {
  const currentAnime = animeStore((state) => state.currentAnime);
  const pathname = usePathname();

  //get current episode details
  const details = currentAnime.episodes.filter(
    (obj) => obj.id === pathname.replace(/\/watch\//, "")
  );
  const episodeDetails = details[0];
  //human readable date format
  const airDate = new Date(episodeDetails.airDate).toLocaleDateString();

  // get prev ep data
  const prevEp = currentAnime.episodes.filter(
    (obj) => obj.number < episodeDetails.number
  );
  const prevEpData = prevEp[0];
  const prevEpAirDate = new Date(prevEpData?.airDate).toLocaleDateString();

  // get next ep data
  const nextEp = currentAnime.episodes.filter(
    (obj) => obj.number > episodeDetails.number
  );
  const nextEpData = nextEp[0];
  const nextEpAirDate = new Date(nextEpData?.airDate).toLocaleDateString();

  console.log(prevEpData);

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-2 md:w-3/4">
        <p className="text-anime">{currentAnime.title.english}</p>
        <p className="text-xl">{`EP${episodeDetails.number} - ${episodeDetails.title}`}</p>
        <p className="text-sm">Released on {convertDateToWords(airDate)}</p>
        <p className="">{episodeDetails.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col gap-2 md:w-2/4">
        {nextEpData && nextEpAirDate && (
          <Link
            href={`/watch/${nextEpData.id}`}
            className="flex flex-col gap-2"
          >
            <p className="uppercase text-sm">next episode</p>
            <div className="flex gap-2">
              <div className="w-1/2">
                <img
                  src={nextEpData.image}
                  alt="Image 2"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-1/2">
                <div className="font-semibold mb-2 leading-5">
                  EP {nextEpData.number} - {nextEpData.title}
                </div>
                <p className="text-gray-700 text-sm">
                  {convertDateToWords(nextEpAirDate)}
                </p>
              </div>
            </div>
          </Link>
        )}

        {prevEpData && prevEpAirDate && (
          <Link
            href={`/watch/${prevEpData.id}`}
            className="flex flex-col gap-2"
          >
            <p className="uppercase text-sm">previous episode</p>
            <div className="flex gap-2">
              <div className="w-1/2">
                <img
                  src={prevEpData.image}
                  alt="Image 2"
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="w-1/2">
                <div className="font-semibold mb-2 leading-5">
                  EP {prevEpData.number} - {prevEpData.title}
                </div>
                <p className="text-gray-700 text-sm">
                  {convertDateToWords(prevEpAirDate)}
                </p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
