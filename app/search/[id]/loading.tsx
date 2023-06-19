import { LoaderGrid } from "@/components/Loader";

export default async function SearchPageLoader() {
  return (
    <div className="container mx-auto max-w-5xl p-6">
      <div className="flex gap-20 px-6">
        <div className="mb-4 w-full h-10 bg-base-300/70 rounded skeleton"></div>
        <div className="mb-4 w-full h-10 bg-base-300/70 rounded skeleton"></div>
      </div>
      <LoaderGrid />
      <LoaderGrid />
    </div>
  );
}
