"use client";
import React from "react";
import Img from "@/public/typing-guy.gif";
import Profile from "@/public/profile.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import { homeVariant } from "./Animation";
import { MouseEvent } from "react";

export default function Hero() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={homeVariant}
    >
      <div className="relative w-full h-full" id="home">
        <img src={Img.src} alt="" />
        <h1 className="text-center px-4 py-3 w-full rounded-md btn btn-secondary capitalize">
          Hello, I'm a react web developer.
        </h1>
      </div>

      <div className="flex justify-between items-center gap-2 mt-5">
        <div>
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Euger Bonete Jr.
          </h1>
          <p className="text-xs sm:text-sm">
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
    </motion.div>
  );
}
