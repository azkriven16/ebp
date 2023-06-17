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
        <div className="flex justify-between my-10">
          <h2 className="text-2xl font-bold mb-4">Top Results</h2>
          <SearchForm />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {data.results.map((anime: Anime) => {
            return <AnimeCard key={anime.id} anime={anime} />;
          })}
        </div>
      </div>
    </div>
  );
}
