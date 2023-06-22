"use client";
import Image from "next/image";
import React from "react";
import HobbiesAvatar from "@/public/hobbies.svg";
import { Fade } from "./Animation";

export default function Hobbies() {
  return (
    <Fade bottom>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex items-center w-full gap-2 mb-5">
          <Image
            width={75}
            height={75}
            src={HobbiesAvatar.src}
            alt=""
            className="object-cover rounded-full bg-gray-500"
          />
          <code className="uppercase font-bold">I ❤️</code>
        </div>
        <p className="text-sm tracking-wider indent-8 text-left">
          Coding, Anime, Music, Manga, Photography, Leica, Machine Learning
        </p>
      </div>
    </Fade>
  );
}
