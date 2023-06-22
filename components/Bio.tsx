"use client";
import Image from "next/image";
import React from "react";
import BioAvatar from "@/public/bio.svg";
import { Fade } from "./Animation";

export default function Bio() {
  return (
    <Fade bottom>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex items-center w-full gap-2 mb-5">
          <Image
            width={75}
            height={75}
            src={BioAvatar.src}
            alt=""
            className="object-cover rounded-full bg-gray-500"
          />
          <code className="uppercase font-bold">bio</code>
        </div>

        <div className="flex gap-5 w-full">
          <h3 className="font-bold">2003</h3>
          <p>Born in Roxas, Philippines.</p>
        </div>

        <div className="flex gap-5 w-full">
          <h3 className="font-bold">2020</h3>
          <p>Graduated Hightschool at Iloilo King of Glory Christian Academy</p>
        </div>

        <div className="flex gap-5 w-full">
          <h3 className="font-bold">2023</h3>
          <p>Pursuing a degree at Northern Iloilo State University</p>
        </div>
      </div>
    </Fade>
  );
}
