import React from "react";
import Wallpaper from "@/public/japanese.png";
import Image from "next/image";
import Section from "@/components/Section";
import Hero from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-lg min-h-screen flex flex-col gap-5">
      <Hero />
      <Image
        width={500}
        height={300}
        src={`Wallpaper.src`}
        alt=""
        className="object-cover"
      />
      <h1 className="bg-base-300 text-center px-4 py-3 rounded-md">
        Hello, I'm a react web developer.
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-white mix-blend-difference">
            Euger Bonete Jr.
          </h1>
          <p className="text-sm">
            Frontend ( Developer / Engineer / Designer )
          </p>
        </div>
        <Image
          width={100}
          height={100}
          src={`Wallpaper.src`}
          alt=""
          className="object-cover rounded-full"
        />
      </div>

      <Section />
    </div>
  );
}
