import EpisodeList from "@/components/EpisodeList";
import InfoDetail from "@/components/InfoDetail";

export interface Anime {
  id: string;
  title: {
    english: string;
    romaji: string;
    native: string;
  };
  synonyms: string;
  image: string;
  cover: string;
  releaseDate: string;
  rating: number;
  status: string;
  popularity: string;
  description: string;
  episodes: Episode[];
  characters: Character[];
  genres: [];
  studios: [];
  trailer: {
    id: string;
  };
}

export interface Episode {
  id: string;
  number: number;
  image: string;
  airDate: string;
  title: string;
  description: string;
}
interface Character {
  id: number;
  name: {
    full: string;
    native: string;
  };
  image: string;
}

async function getData({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://api.consumet.org/meta/anilist/info/${params.id}`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function InfoPageDynamic({
  params,
}: {
  params: { id: string };
}) {
  const anime: Anime = await getData({ params });
  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full flex justify-center">
        <img src={anime.cover} className="w-full h-64 object-cover" alt="" />
      </div>

      <div className="container max-w-5xl mx-auto flex flex-col gap-5 p-6">
        <InfoDetail anime={anime} />

        <EpisodeList anime={anime} />

        {/* <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Characters/Cast</h1>
            <button className="btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
              filter
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {anime.characters.map((data: Character) => {
              return (
                <div
                  key={data.id}
                  className="flex flex-col gap-1 line-clamp-2 font-semibold text-sm"
                >
                  <img
                    src={data.image}
                    className="aspect-square object-cover"
                    alt=""
                  />
                  <p>{data.name.full}</p>
                  <p>{data.name.native}</p>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
}
