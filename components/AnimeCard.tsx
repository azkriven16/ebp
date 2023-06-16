import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface Anime {
  id: string;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  image: string;
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
  };
  description: string;
  status: string;
  cover: string;
  rating: number;
  releaseDate: number;
  color: string | null;
  genres: string[];
  totalEpisodes: number;
  episodeNumber: number;
  episodeTitle: string;
  duration: number;
  type: string;
}

const AnimeCard: React.FC<{ anime: Anime }> = ({ anime }) => {
  return (
    <Link href={`info/${anime.id}`} className="bg-base-100 relative">
      <div className="p-4 absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-base-300 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
        <div className="text-sm flex flex-col justify-between h-full">
          <p className="text-md font-bold line-clamp-2">
            {anime.title.userPreferred || anime.title.romaji}
          </p>
          <div className="text-gray-500 flex items-center">
            <p>{anime.rating ? (anime.rating / 20).toFixed(1) : " N/A "}/5</p>
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
          </div>
          <p>{anime.episodeTitle}</p>
          <p>{anime.releaseDate}</p>
          <p className="line-clamp-6 text-xs">
            {anime?.description?.replace(/<[^>]+>/g, "") ||
              "No description available for this show at this current time"}
          </p>
          <div className="join gap-2 mt-5">
            <button className="join-item tooltip" data-tip="Watch S1 EP1">
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
            </button>
            <button className="join-item tooltip" data-tip="On Progress pa">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Image
        src={anime.image}
        alt={anime.title.userPreferred + " image"}
        className="object-cover h-56 w-full"
        width={100}
        height={100}
      />
      <div className="py-2">
        <p className="text-md font-semibold mb-2 line-clamp-1">
          {anime.title.userPreferred || anime.title.romaji}
        </p>
        {anime.episodeNumber && (
          <p className="text-sm">EP {anime.episodeNumber}</p>
        )}

        <div className="flex justify-between text-xs text-gray-500">
          <p>{anime.status}</p>
          {anime.totalEpisodes && <p>{anime.totalEpisodes} Episodes</p>}
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
