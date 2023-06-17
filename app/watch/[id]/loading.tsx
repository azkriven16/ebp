import Loader from "@/components/Loader";

export default async function WatchPageLoader() {
  return (
    <div>
      <div className="mb-4 w-full h-96 bg-base-300 rounded skeleton"></div>
      <div className="container mx-auto max-w-5xl p-6">
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
            return <Loader />;
          })}
        </div>
      </div>
    </div>
  );
}
