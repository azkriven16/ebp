"use client";
import Image from "next/image";
import React, { useRef } from "react";
import featuredAvatar from "@/public/featured.svg";
import { useInView, motion } from "framer-motion";
import { fadeVariant } from "./Animation";

export default function Featured() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col gap-2 justify-center items-centerm mt-5"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      exit="exit"
      variants={fadeVariant}
    >
      <div className="flex flex-col gap-2  mt-5">
        <div className="flex items-center w-full gap-2 mb-5">
          <Image
            width={75}
            height={75}
            src={featuredAvatar.src}
            alt=""
            className="object-cover rounded-full bg-gray-500"
          />
          <code className="uppercase font-bold">Works</code>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-gray-500 w-56 h-40"></div>
          <div className="bg-slate-500 w-56 h-40"></div>
        </div>
        <button className="btn mt-5 btn-secondary">More</button>
      </div>
    </motion.div>
  );
}
