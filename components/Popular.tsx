import Link from "next/link";

type Anime = {
  id: string;
  malId: number;
  title: {
    romaji: string;
    native: string;
    userPreferred: string;
  };
  status: string;
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
  const res = await fetch("https://api.consumet.org/meta/anilist/popular");

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Popular() {
  const data = await getData();
  console.log(data.results);
  return (
    <div className="container mx-auto max-w-5xl p-6">
      <h2 className="text-2xl font-bold mb-4">Popular Anime</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {data.results.map((anime: Anime) => {
          const rating = anime.rating ? (anime.rating / 20).toFixed(1) : "N/A";
          return (
            <Link
              href={anime.id}
              key={anime.id}
              className="bg-base-100 overflow-hidden shadow-md relative"
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-transparent to-black/60 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              <img
                src={anime.image}
                alt=""
                className="object-cover h-56 w-full"
              />
              <div className="py-2">
                <p className="text-md font-semibold mb-2 line-clamp-1 text-white/80">
                  {anime.title.userPreferred || anime.title.romaji}
                </p>
                <div className="flex justify-between">
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {anime.status}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {rating}/5
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="join grid grid-cols-2 max-w-xs mx-auto mt-10">
        <button className="join-item btn btn-outline">Previous page</button>
        <button className="join-item btn btn-outline">Next</button>
      </div>
    </div>
  );
}
