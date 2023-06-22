"use client";
import React from "react";
import Img from "@/public/typing-guy.gif";
import Profile from "@/public/profile.svg";
import Image from "next/image";
import { Fade } from "./Animation";

export default function Hero() {
  return (
    <Fade top>
      <div className="relative h-60 w-96">
        <img
          src={Img.src}
          alt=""
          className="absolute -top-5 left-11 right-0 bottom-0"
        />
      </div>

      <h1 className="text-center px-4 py-3 rounded-md btn btn-secondary capitalize">
        Hello, I'm a react web developer.
      </h1>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Euger Bonete Jr.</h1>
          <p className="text-sm">
            Frontend ( Developer / Engineer / Designer )
          </p>
        </div>
        <Image
          width={75}
          height={75}
          src={Profile.src}
          alt=""
          className="object-cover rounded-full bg-gray-500"
        />
      </div>
    </Fade>
  );
}
