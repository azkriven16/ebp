import { Episode } from "@/app/info/[id]/page";
import { convertDateToWords } from "@/utils/convertDate";
import { readableDescription } from "@/utils/readableDescription";
import Link from "next/link";
import React from "react";

export default function EpisodeCard({ ep }: { ep: Episode }) {
  const airDate = new Date(ep.airDate).toLocaleDateString();
  return (
    <Link
      href={`/watch/${ep.id}`}
      key={ep.id}
      className="flex flex-col gap-1 relative"
    >
      <div className="p-4 absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-base-300 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
        <div className="text-sm flex flex-col justify-between h-full items-start">
          <div className="flex flex-col gap-2">
            <p className="text-lg md:text-sm font-bold line-clamp-1">
              EP {ep.number} - {ep.title}
            </p>
            <p className="flex items-center text-xs gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
                  clipRule="evenodd"
                />
              </svg>
              {convertDateToWords(airDate)}
            </p>
            <p className="line-clamp-3 md:text-xs">
              {readableDescription(ep?.description)}
            </p>
          </div>
          <div className="join gap-2 md:mt-2">
            <button className="join-item flex items-center gap-2 text-anime">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>

              <p>{`PLAY EP ${ep.number}`}</p>
            </button>
          </div>
        </div>
      </div>
      <img src={ep.image} className="aspect-video object-cover" alt="" />
      <div className="flex flex-col">
        <p className="line-clamp-1 font-semibold text-sm">
          EP {ep.number} - {ep.title}
        </p>
        <p className="text-xs">{convertDateToWords(airDate)}</p>
      </div>
    </Link>
  );
}
