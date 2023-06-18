"use client";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Recent from "@/components/Recent";
import Trending from "@/components/Trending";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default async function HomePage() {
  const router = useRouter();
  useEffect(() => {
    router.push("/recent");
  }, []);
  return (
    <main className="flex flex-col gap-10 mb-60">
      <div className="container mx-auto max-w-5xl p-6">
        <div className="mb-4 w-64 h-10 bg-base-300 rounded skeleton"></div>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
            return <Loader />;
          })}
        </div>
      </div>
    </main>
  );
}
