import Loader, { LoaderSlider } from "@/components/Loader";

export default async function InfoPageLoader() {
  return (
    <div>
      <div className="mb-4 w-full h-64 bg-base-300/70 rounded skeleton"></div>
      <div className="container mx-auto max-w-5xl p-6">
        <div className="grid grid-cols-2 gap-4">
          {[1, 2].map(() => {
            return <Loader />;
          })}
        </div>
      </div>
      <LoaderSlider />
      <LoaderSlider />
    </div>
  );
}
