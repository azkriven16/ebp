import Carousel from "@/components/Carousel";
import Wallpaper from "@/public/japanese.png";

export default function HomePage() {
  return (
    <main className="hero min-h-screen bg-base-200">
      <div className="h-full w-full flex justify-end">
        <img src={Wallpaper.src} alt="" className="object-cover" />
      </div>
      <div className="hero-content text-start md:mr-64">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            Find your favorite anime series and movies
          </h1>
          <p className="py-6">
            Discover a vast collection of anime series and movies. Explore new
            worlds, captivating stories, and unforgettable characters.
          </p>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </main>
  );
}
