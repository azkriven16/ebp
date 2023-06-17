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
    (obj: any) => obj.id === pathname.replace(/\/watch\//, "")
  );
  const episodeDetails = details[0];
  //human readable date format
  const airDate = new Date(episodeDetails.airDate).toLocaleDateString();

  // get prev ep data
  const prevEp = currentAnime.episodes.findLast(
    (obj: any) => obj.number < episodeDetails.number
  );

  const prevEpAirDate = prevEp
    ? new Date(prevEp.airDate ?? "").toLocaleDateString()
    : "";

  // get next ep data
  const nextEp = currentAnime.episodes.findLast(
    (obj: any) => obj.number > episodeDetails.number
  );

  const nextEpAirDate = nextEp
    ? new Date(nextEp.airDate ?? "").toLocaleDateString()
    : "";

  return (
    <div className="flex flex-col md:flex-row gap-10">
      <div className="flex flex-col gap-2 md:w-3/4">
        <p className="text-anime">{currentAnime?.title?.english}</p>
        <p className="text-xl">{`EP${episodeDetails.number} - ${episodeDetails.title}`}</p>
        <p className="text-sm">Released on {convertDateToWords(airDate)}</p>
        <p className="">{episodeDetails.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col gap-2 md:w-2/4">
        {nextEp && nextEpAirDate && (
          <Link href={`/watch/${nextEp.id}`} className="flex flex-col gap-2">
            <p className="uppercase text-sm">next episode</p>
            <div className="flex gap-2">
              <div className="w-1/2">
                <img
                  src={nextEp.image}
                  alt="Image 2"
                  className="object-cover max-h-[120px] w-full"
                />
              </div>
              <div className="w-1/2">
                <div className="font-semibold mb-2 leading-5">
                  EP {nextEp.number} - {nextEp.title}
                </div>
                <p className="text-sm">{convertDateToWords(nextEpAirDate)}</p>
              </div>
            </div>
          </Link>
        )}

        {prevEp && prevEpAirDate && (
          <Link href={`/watch/${prevEp.id}`} className="flex flex-col gap-2">
            <p className="uppercase text-sm">previous episode</p>
            <div className="flex gap-2">
              <div className="w-1/2">
                <img
                  src={prevEp.image}
                  alt="Image 2"
                  className="object-cover max-h-[120px] w-full"
                />
              </div>
              <div className="w-1/2">
                <div className="font-semibold mb-2 leading-5">
                  EP {prevEp.number} - {prevEp.title}
                </div>
                <p className="text-sm">{convertDateToWords(prevEpAirDate)}</p>
              </div>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}
