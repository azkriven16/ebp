import Loader, { LoaderGrid, LoaderSlider } from "@/components/Loader";

export default async function WatchPageLoader() {
  return (
    <div>
      <div className="mb-4 w-full h-96 bg-base-300/70 rounded skeleton"></div>
      <div className="container mx-auto max-w-5xl p-6 flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map(() => {
            return <Loader />;
          })}
        </div>
        <div className="mb-4 w-full h-20 bg-base-300/70 rounded skeleton"></div>
        <div className="mb-4 w-full h-20 bg-base-300/70 rounded skeleton"></div>
        <LoaderSlider />
        <LoaderGrid />
      </div>
    </div>
  );
}
