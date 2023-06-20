"use client";

import AnimeCard, { Anime } from "@/components/AnimeCard";
import SearchForm from "@/components/SearchForm";
import { useParams } from "next/navigation";

async function getData({ id }: { id: string }) {
  const res = await fetch(`https://api.consumet.org/meta/anilist/${id}`);

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function ExampleClientComponent() {
  const params = useParams();
  const { id } = params;
  const data = await getData({ id });

  return (
    <div>
      <div className="container mx-auto max-w-5xl p-6">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Top Results</h2>
          <SearchForm />
        </div>
        <div className="divider bg-anime h-0.5"></div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {data.results.map((anime: Anime) => {
            return <AnimeCard key={anime.id} anime={anime} />;
          })}
        </div>
      </div>
    </div>
  );
}
