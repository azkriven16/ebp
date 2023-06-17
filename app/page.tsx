"use client";
import Hero from "@/components/Hero";
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
      <Hero />
    </main>
  );
}
