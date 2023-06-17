import { Anime } from "@/app/info/[id]/page";
import EpisodeList from "@/components/EpisodeList";
import VideoPlayer from "@/components/VideoPlayer";
import WatchSection from "@/components/WatchSection";
import Recommended from "@/components/Recommended";

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
  return (
    <div className="flex flex-col gap-10">
      <div className="bg-base-200">
        <div className="container max-w-3xl mx-auto flex flex-col px-6">
          <VideoPlayer anime={anime} />
        </div>
      </div>
      <div className="container max-w-5xl mx-auto flex flex-col px-6 gap-10">
        <WatchSection />
        <EpisodeList />
        <Recommended />
      </div>
    </div>
  );
}
