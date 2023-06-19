import Carousel from "@/components/Carousel";
import Recent from "@/components/Recent";
import Trending from "@/components/Trending";
import React from "react";
import Popular from "@/components/Popular";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-5">
      <Carousel />
      <Trending />
      <Recent />
      <Popular />
    </div>
  );
}
