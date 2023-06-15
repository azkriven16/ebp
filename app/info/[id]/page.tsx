import EpisodeList from "@/components/EpisodeList";
import { shortenNumber } from "@/utils/shortenNumber";

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
  console.table(anime);
  return (
    <div className="flex flex-col gap-5">
      <div className="relative w-full flex justify-center">
        <img src={anime.cover} className="w-full h-64 object-cover" alt="" />
      </div>

      <div className="container max-w-5xl mx-auto flex flex-col gap-5 p-6">
        <div className="flex gap-5">
          <div className="md:w-3/4 flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{anime.title.english}</h1>
            <div className="flex w-full text-sm">
              <p className="">{anime.releaseDate}</p>
              <div className="divider divider-horizontal"></div>
              <p className="">{anime.status}</p>
              <div className="divider divider-horizontal"></div>
              <p>
                Average Rating:
                {anime.rating ? (anime.rating / 20).toFixed(1) : "N/A"}/5
              </p>
              <p className="ml-2">({shortenNumber(anime.popularity)})</p>
            </div>
            <p className="line-clamp-6">
              {anime.description.replace(/<[^>]+>/g, "")}
            </p>
            <details className="collapse rounded-none">
              <summary className="text-xs font-semibold cursor-pointer">
                MORE DETAILS...
              </summary>
              <div className="flex flex-col gap-5 mt-5">
                <div className="flex gap-1">
                  {anime.genres.map((gen, key) => {
                    return (
                      <p key={key} className="btn btn-sm">
                        {gen}
                      </p>
                    );
                  })}
                </div>

                <div className="flex flex-col">
                  <div className="border-b flex justify-between py-2">
                    <p>Studio</p>
                    {anime.studios.map((studio, key) => {
                      return <p key={key}>{studio}</p>;
                    })}
                  </div>

                  <div className="border-b flex justify-between py-2">
                    <p>Trailer</p>
                    <p>
                      {anime.trailer.id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            fillRule="evenodd"
                            d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : (
                        "NA"
                      )}
                    </p>
                  </div>

                  <div className="border-b flex justify-between py-2">
                    <p>Other name</p>
                    <div className="flex flex-col">
                      <p>{anime.title.english}</p>
                      <p>{anime.title.native}</p>
                      <p>{anime.title.romaji}</p>
                    </div>
                  </div>
                </div>
              </div>
            </details>
          </div>

          <div className="w-1/2 hidden md:flex flex-col gap-5 justify-end self-start">
            <img
              src={anime.image}
              className="aspect-video object-cover"
              alt=""
            />
            <button className="btn btn-primary">START WATCHING EP 1</button>
          </div>
        </div>

        <EpisodeList anime={anime} />

        <div className="flex flex-col gap-5">
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
        </div>
      </div>
    </div>
  );
}
