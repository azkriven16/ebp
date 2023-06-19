import Loader, { LoaderSlider } from "@/components/Loader";

export default async function SearchHomePageLoader() {
  return (
    <div>
      <div className="mb-4 w-full h-96 bg-base-300/70 rounded skeleton"></div>
      <LoaderSlider />
    </div>
  );
}
