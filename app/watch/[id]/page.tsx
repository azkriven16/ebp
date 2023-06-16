// import VideoPlayer from "@/components/VideoPlayer";

// async function getData({ params }: { params: { id: string } }) {
//   const res = await fetch(
//     `https://api.consumet.org/meta/anilist/watch/kimetsu-no-yaiba-katanakaji-no-sato-hen-episode-9`
//   );

//   // Recommendation: handle errors
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Watch({ params }: { params: { id: string } }) {
//   const data = getData({ params });
//   console.log(data);
//   return (
//     <div>
//       Watch
//       <VideoPlayer />
//     </div>
//   );
// }
import EpisodeList from "@/components/EpisodeList";
import VideoPlayer from "@/components/VideoPlayer";
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
    `https://api.consumet.org/meta/anilist/watch/${params.id}`
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
      <div className="container max-w-5xl mx-auto flex flex-col gap-5 p-6">
        <VideoPlayer />
      </div>
    </div>
  );
}
