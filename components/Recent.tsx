import Link from "next/link";

type Anime = {
  id: string;
  malId: number;
  title: {
    romaji: string;
    native: string;
    userPreferred: string;
  };
  image: string;
  rating: number | null;
  color: string | null;
  episodeId: string;
  episodeTitle: string;
  episodeNumber: number;
  genres: string[];
  type: string;
};

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
  console.log(data.results);
  return (
    <section className="max-w-4xl mx-auto px-10">
      <div className="flex justify-center flex-col">
        <h1 className="pb-4 text-2xl ml-2">Recent</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 place-items-center">
          {data.results.map((anime: Anime) => {
            return (
              <Link key={anime.id} href={anime.id} className="min-w-32 w-40">
                <img
                  src={anime.image}
                  alt={anime.title.userPreferred + " image"}
                  className="object-cover h-60 w-full"
                />
                <p className="truncate h-8 py-2">
                  {anime.title.userPreferred || anime.title.romaji}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
