import Hero from "@/components/Hero";
import Recent from "@/components/Recent";
import Trending from "@/components/Trending";

export default function HomePage() {
  return (
    <main className="flex flex-col gap-10 mb-60">
      <Hero />
      <Recent />
      <Trending />
    </main>
  );
}
