import Link from "next/link";
import AnimeCard from "./AnimeCard";

interface Anime {
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
  duration: number;
  type: string;
}

async function getData() {
  const res = await fetch("https://api.consumet.org/meta/anilist/recent");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Recent() {
  const data = await getData();
  return (
    <div className="container mx-auto max-w-5xl p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Anime</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.results.map((anime: Anime) => {
          return <AnimeCard anime={anime} />;
        })}
      </div>
      <div className="join grid grid-cols-2 max-w-xs mx-auto mt-10">
        <button className="join-item btn btn-outline btn-sm">
          Previous page
        </button>
        <button className="join-item btn btn-outline btn-sm">Next</button>
      </div>
    </div>
  );
}
