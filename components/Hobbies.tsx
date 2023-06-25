"use client";
import Image from "next/image";
import React, { useRef } from "react";
import HobbiesAvatar from "@/public/hobbies.svg";
import { useInView, motion } from "framer-motion";
import { fadeVariant } from "./Animation";

export default function Hobbies() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 justify-center items-centerm mt-5"
    >
      <div className="flex flex-col gap-2 justify-center items-start">
        <div className="flex items-center w-full gap-2 mb-5">
          <Image
            width={65}
            height={65}
            src={HobbiesAvatar.src}
            alt=""
            className="object-cover rounded-full bg-gray-500"
          />
          <code className="uppercase font-bold">I ❤️</code>
        </div>
        <p className="text-sm tracking-wider">Coding, Anime, Music, Manga</p>
      </div>
    </motion.div>
  );
}
