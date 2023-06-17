import React from "react";
import Wallpaper from "@/public/japanese.png";
import Image from "next/image";
import SearchForm from "./SearchForm";

export default function Hero() {
  return (
    <section className="hero ">
      <div className="w-full flex justify-end">
        <Image
          width={700}
          height={700}
          src={Wallpaper.src}
          alt=""
          className="object-cover"
        />
      </div>
      <div class="h-full w-1/2 bg-gradient-to-r from-transparent via-base-300/50 to-transparent"></div>

      <div className="hero-content text-start md:mr-80">
        <div className="max-w-md">
          <h1 className=" text-3xl md:text-5xl font-bold">
            Find your favorite anime series and shows
          </h1>
          <p className="text-sm md:text-base py-6">
            Discover a vast collection of anime series and movies. Explore new
            worlds, captivating stories, and unforgettable characters.
          </p>
          <SearchForm />
        </div>
      </div>
    </section>
  );
}
