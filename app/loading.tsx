import { LoaderSlider } from "@/components/Loader";

export default async function HomePageLoader() {
  return (
    <div className="flex flex-col">
      <div className="mb-4 w-full h-[50vh] bg-base-300/70 rounded animate-pulse"></div>
      <LoaderSlider />
      <LoaderSlider />
      <LoaderSlider />
    </div>
  );
}
